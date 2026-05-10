package handlers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"time"
)

// ── Telegram types ───────────────────────────────────────────────────────────

type tgUpdate struct {
	UpdateID int        `json:"update_id"`
	Message  *tgMessage `json:"message"`
}

type tgMessage struct {
	Chat tgChat  `json:"chat"`
	From *tgUser `json:"from"`
	Text string  `json:"text"`
}

type tgChat struct {
	ID int64 `json:"id"`
}

type tgUser struct {
	FirstName string `json:"first_name"`
}

type tgGetUpdatesResp struct {
	OK     bool       `json:"ok"`
	Result []tgUpdate `json:"result"`
}

// ── Polling loop ─────────────────────────────────────────────────────────────

func (h *Handler) StartBotPoller(ctx context.Context) {
	if h.cfg.BOTToken == "" {
		log.Println("BotPoller: BOT_TOKEN not set, skipping")
		return
	}

	log.Println("BotPoller: started")
	offset := 0

	for {
		select {
		case <-ctx.Done():
			log.Println("BotPoller: stopped")
			return
		default:
		}

		updates, err := h.getUpdates(ctx, offset, 30)
		if err != nil {
			if ctx.Err() != nil {
				return
			}
			log.Printf("BotPoller: getUpdates error: %v", err)
			select {
			case <-ctx.Done():
				return
			case <-time.After(5 * time.Second):
			}
			continue
		}

		for _, u := range updates {
			offset = u.UpdateID + 1
			if u.Message == nil {
				continue
			}
			if strings.HasPrefix(u.Message.Text, "/start") {
				name := "друг"
				if u.Message.From != nil && u.Message.From.FirstName != "" {
					name = u.Message.From.FirstName
				}
				if err := h.sendWelcomeMessage(u.Message.Chat.ID, name); err != nil {
					log.Printf("BotPoller: sendWelcomeMessage chat_id=%d: %v", u.Message.Chat.ID, err)
				}
			}
		}
	}
}

func (h *Handler) getUpdates(ctx context.Context, offset, timeout int) ([]tgUpdate, error) {
	url := fmt.Sprintf(
		"https://api.telegram.org/bot%s/getUpdates?offset=%d&timeout=%d",
		h.cfg.BOTToken, offset, timeout,
	)

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}

	client := &http.Client{Timeout: time.Duration(timeout+5) * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var result tgGetUpdatesResp
	if err := json.Unmarshal(body, &result); err != nil {
		return nil, fmt.Errorf("parse response: %w", err)
	}
	if !result.OK {
		return nil, fmt.Errorf("telegram error: %s", body)
	}
	return result.Result, nil
}

// ── Welcome message ──────────────────────────────────────────────────────────

func (h *Handler) sendWelcomeMessage(chatID int64, name string) error {
	appURL := h.cfg.PublicURL
	if appURL == "" {
		return fmt.Errorf("PUBLIC_URL not set")
	}

	text := fmt.Sprintf(
		"Привет, %s! 👋\n\nС помощью <b>Pinst</b> ты можешь создавать профессиональные фотографии с помощью ИИ — за несколько секунд.\n\n✦ Выбери стиль из каталога\n✦ Загрузи своё фото\n✦ Получи готовый результат",
		name,
	)

	// Первый ряд — открыть приложение
	keyboard := [][]map[string]any{
		{
			{
				"text":    "🚀 Открыть Pinst",
				"web_app": map[string]string{"url": appURL},
			},
		},
	}

	// Второй ряд — подписаться на канал (если задан CHANNEL_LINK)
	if h.cfg.TGChannelLink != "" {
		keyboard = append(keyboard, []map[string]any{
			{
				"text": "📢 Подписаться на канал",
				"url":  h.cfg.TGChannelLink,
			},
		})
	}

	payload := map[string]any{
		"chat_id":    chatID,
		"text":       text,
		"parse_mode": "HTML",
		"reply_markup": map[string]any{
			"inline_keyboard": keyboard,
		},
	}

	data, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	apiURL := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", h.cfg.BOTToken)
	resp, err := http.Post(apiURL, "application/json", bytes.NewReader(data))
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("telegram api %d: %s", resp.StatusCode, body)
	}
	return nil
}

func escapeMarkdownV2(s string) string {
	replacer := strings.NewReplacer(
		"_", "\\_", "*", "\\*", "[", "\\[", "]", "\\]",
		"(", "\\(", ")", "\\)", "~", "\\~", "`", "\\`",
		">", "\\>", "#", "\\#", "+", "\\+", "-", "\\-",
		"=", "\\=", "|", "\\|", "{", "\\{", "}", "\\}",
		".", "\\.", "!", "\\!",
	)
	return replacer.Replace(s)
}
