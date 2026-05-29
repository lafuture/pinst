package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"unicode/utf8"

	"pinst/internal/auth"
	"pinst/internal/cbr"
	"pinst/internal/kie"
)

type chatRequest struct {
	Prompt   string `json:"prompt"`
	ImageURL string `json:"image_url,omitempty"`
}

type chatResponse struct {
	Reply string `json:"reply"`
}

// GPT-5.2 pricing on kie.ai (https://docs.kie.ai/market/chat/gpt-5-2)
// Input:  $0.44  per 1M tokens
// Output: $3.50  per 1M tokens
const (
	chatInputPriceUSDPerMToken  = 0.44
	chatOutputPriceUSDPerMToken = 3.50
)

const chatSystemPrompt = `Строго запрещено: эмодзи, смайлики, Unicode-символы кроме букв и цифр.
Строго запрещено: entity-теги вида entity["..."] или любые другие структурированные аннотации.
Используй только переносы строк для разделения абзацев.
Не представляйся и не называй себя (Gemini, ассистент и т.п.).
Не заканчивай ответ вопросом к пользователю. Отвечай только по существу.`

// ChatHandler — text chat with kie.ai (gpt-5-2). Streams reply via SSE when the
// client accepts text/event-stream; otherwise falls back to a single JSON reply.
// History is stored in DB after the full reply is assembled.
func (h *Handler) ChatHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	if h.kie == nil || h.cfg.KieAPIKey == "" {
		writeError(w, http.StatusInternalServerError, "kie not configured")
		return
	}

	var req chatRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeError(w, http.StatusBadRequest, "invalid json")
		return
	}
	prompt := strings.TrimSpace(req.Prompt)
	if prompt == "" {
		writeError(w, http.StatusBadRequest, "prompt required")
		return
	}

	history, err := h.db.RecentChatMessages(r.Context(), tgID, 10)
	if err != nil {
		log.Printf("Chat: history tg_id=%d: %v", tgID, err)
	}

	messages := []map[string]any{{"role": "system", "content": chatSystemPrompt}}
	for _, m := range history {
		role := m.Role
		if role != "user" && role != "assistant" && role != "system" {
			role = "user"
		}
		messages = append(messages, map[string]any{"role": role, "content": m.Content})
	}
	if req.ImageURL != "" {
		messages = append(messages, map[string]any{
			"role": "user",
			"content": []map[string]any{
				{"type": "text", "text": prompt},
				{"type": "image_url", "image_url": map[string]any{"url": req.ImageURL}},
			},
		})
	} else {
		messages = append(messages, map[string]any{"role": "user", "content": prompt})
	}

	wantsStream := strings.Contains(r.Header.Get("Accept"), "text/event-stream")
	flusher, canFlush := w.(http.Flusher)
	if wantsStream && canFlush {
		h.streamChat(w, r.Context(), flusher, tgID, prompt, messages)
		return
	}

	reply, usage, err := h.kie.Chat(r.Context(), messages)
	if err != nil {
		log.Printf("Chat: kie tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusBadGateway, "chat failed")
		return
	}
	h.persistChatExchange(r.Context(), tgID, prompt, reply, usage)
	h.logGenerationToChannel(tgID, "chat")
	writeJSON(w, http.StatusOK, chatResponse{Reply: reply})
}

func (h *Handler) streamChat(w http.ResponseWriter, ctx context.Context, flusher http.Flusher, tgID int64, userPrompt string, messages []map[string]any) {
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("X-Accel-Buffering", "no")
	w.WriteHeader(http.StatusOK)
	flusher.Flush()

	writeEvent := func(event string, data any) error {
		raw, err := json.Marshal(data)
		if err != nil {
			return err
		}
		if _, err := fmt.Fprintf(w, "event: %s\ndata: %s\n\n", event, raw); err != nil {
			return err
		}
		flusher.Flush()
		return nil
	}

	filter := &entityFilter{
		onChunk: func(chunk string) error {
			return writeEvent("delta", map[string]string{"content": chunk})
		},
	}
	full, usage, err := h.kie.ChatStream(ctx, messages, func(chunk string) error {
		return filter.write(chunk)
	})
	_ = filter.flush()
	if err != nil {
		log.Printf("Chat stream: kie tg_id=%d: %v", tgID, err)
		_ = writeEvent("error", map[string]string{"error": "chat failed"})
		return
	}
	// Strip entity tags from the assembled full reply as well
	cleanFull := stripEntityTags(full)
	_ = writeEvent("done", map[string]string{"reply": cleanFull})
	h.persistChatExchange(ctx, tgID, userPrompt, cleanFull, usage)
	h.logGenerationToChannel(tgID, "chat")
}

// stripEntityTags removes all entity["..."] annotations from a complete string.
func stripEntityTags(s string) string {
	for {
		start := strings.Index(s, entityTagPrefix)
		if start == -1 {
			return s
		}
		end := strings.Index(s[start:], "]")
		if end == -1 {
			return s[:start]
		}
		s = s[:start] + s[start+end+1:]
	}
}

// entityFilter strips entity["..."] annotations from a streaming text.
// It buffers incomplete potential tags at chunk boundaries.
type entityFilter struct {
	buf     string
	onChunk func(string) error
}

const entityTagPrefix = `entity["`

func (f *entityFilter) write(chunk string) error {
	f.buf += chunk
	for {
		idx := strings.Index(f.buf, entityTagPrefix)
		if idx == -1 {
			// No tag start — safe to flush all but last len(entityTagPrefix)-1 chars
			safeLen := len(f.buf) - (len(entityTagPrefix) - 1)
			if safeLen <= 0 {
				return nil
			}
			// Step back to a valid rune boundary so we never split a multi-byte char
			for safeLen > 0 && !utf8.RuneStart(f.buf[safeLen]) {
				safeLen--
			}
			if safeLen <= 0 {
				return nil
			}
			out := f.buf[:safeLen]
			f.buf = f.buf[safeLen:]
			if out != "" {
				return f.onChunk(out)
			}
			return nil
		}
		// Flush text before the tag
		if idx > 0 {
			if err := f.onChunk(f.buf[:idx]); err != nil {
				return err
			}
			f.buf = f.buf[idx:]
		}
		// f.buf now starts with entity[" — find closing ]
		end := strings.Index(f.buf, "]")
		if end == -1 {
			return nil // incomplete tag, wait for more chunks
		}
		f.buf = f.buf[end+1:]
	}
}

func (f *entityFilter) flush() error {
	if f.buf == "" {
		return nil
	}
	out := f.buf
	f.buf = ""
	return f.onChunk(out)
}

// ChatHistoryHandler returns recent chat messages for the current user (within TTL).
func (h *Handler) ChatHistoryHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	messages, err := h.db.GetRecentChatHistory(r.Context(), tgID)
	if err != nil {
		log.Printf("ChatHistory: db tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	writeJSON(w, http.StatusOK, messages)
}

// ClearChatHistoryHandler deletes all chat history for the current user.
func (h *Handler) ClearChatHistoryHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	if err := h.db.ClearChatHistory(r.Context(), tgID); err != nil {
		log.Printf("ClearChatHistory: db tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}

func chatCostRub(usage kie.TokenUsage) float64 {
	rate := cbr.USDToRub() // ЦБ + 10 ₽, обновляется раз в час
	input  := float64(usage.InputTokens)  / 1_000_000 * chatInputPriceUSDPerMToken  * rate
	output := float64(usage.OutputTokens) / 1_000_000 * chatOutputPriceUSDPerMToken * rate
	return input + output
}

func (h *Handler) persistChatExchange(ctx context.Context, tgID int64, userPrompt, reply string, usage kie.TokenUsage) {
	if err := h.db.AppendChatMessage(ctx, tgID, "user", userPrompt); err != nil {
		log.Printf("Chat: append user tg_id=%d: %v", tgID, err)
	}
	if reply == "" {
		return
	}
	if err := h.db.AppendChatMessage(ctx, tgID, "assistant", reply); err != nil {
		log.Printf("Chat: append assistant tg_id=%d: %v", tgID, err)
	}
	if cost := chatCostRub(usage); cost > 0 {
		if err := h.db.AddChatSpent(ctx, tgID, cost); err != nil {
			log.Printf("Chat: add spent tg_id=%d: %v", tgID, err)
		}
	}
}
