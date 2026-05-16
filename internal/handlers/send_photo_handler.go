package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"

	"pinst/internal/auth"

	"github.com/go-chi/chi/v5"
)

func (h *Handler) SendPhotoToChatHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}

	genID := chi.URLParam(r, "id")
	if genID == "" {
		writeError(w, http.StatusBadRequest, "id required")
		return
	}

	gen, err := h.db.GetGeneration(r.Context(), genID, tgID)
	if err != nil {
		log.Printf("SendPhoto: GetGeneration id=%s tg_id=%d: %v", genID, tgID, err)
		writeError(w, http.StatusNotFound, "not found")
		return
	}

	if err := h.sendPhotoViaBot(tgID, gen.ImageURL); err != nil {
		log.Printf("SendPhoto: sendPhotoViaBot tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "failed to send photo")
		return
	}

	writeJSON(w, http.StatusOK, map[string]string{"status": "sent"})
}

func (h *Handler) SendPhotoByURLToChatHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}

	var req struct {
		ImageURL string `json:"image_url"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil || req.ImageURL == "" {
		writeError(w, http.StatusBadRequest, "image_url required")
		return
	}

	_, err := h.db.GetGenerationByURL(r.Context(), req.ImageURL, tgID)
	if err != nil {
		log.Printf("SendPhotoByURL: GetGenerationByURL tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusNotFound, "not found")
		return
	}

	if err := h.sendPhotoViaBot(tgID, req.ImageURL); err != nil {
		log.Printf("SendPhotoByURL: sendPhotoViaBot tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "failed to send photo")
		return
	}

	writeJSON(w, http.StatusOK, map[string]string{"status": "sent"})
}

const telegramPhotoMaxBytes = 10 * 1024 * 1024 // 10 MB — Telegram sendPhoto limit

func (h *Handler) sendPhotoViaBot(tgID int64, imageURL string) error {
	// Download image first — tempfile.aiquickdraw.com URLs can't be accessed by Telegram directly
	imgResp, err := http.Get(imageURL)
	if err != nil {
		return fmt.Errorf("download image: %w", err)
	}
	defer imgResp.Body.Close()
	if imgResp.StatusCode != http.StatusOK {
		return fmt.Errorf("download image: status %d", imgResp.StatusCode)
	}
	imgData, err := io.ReadAll(imgResp.Body)
	if err != nil {
		return fmt.Errorf("read image: %w", err)
	}

	// Verify we got a complete download when Content-Length is known.
	if cl := imgResp.ContentLength; cl > 0 && int64(len(imgData)) != cl {
		return fmt.Errorf("incomplete download: got %d bytes, expected %d", len(imgData), cl)
	}

	filename, mime := detectImageMeta(imgData)
	log.Printf("sendPhotoViaBot: tg_id=%d size=%d mime=%s", tgID, len(imgData), mime)

	// Large files (4K) exceed sendPhoto's 10 MB limit — send as document instead.
	method := "sendPhoto"
	field := "photo"
	if len(imgData) > telegramPhotoMaxBytes {
		method = "sendDocument"
		field = "document"
	}

	var buf bytes.Buffer
	mw := multipart.NewWriter(&buf)
	_ = mw.WriteField("chat_id", fmt.Sprintf("%d", tgID))
	_ = mw.WriteField("caption", "Ваше фото из Pinst ✨")
	fw, err := mw.CreateFormFile(field, filename)
	if err != nil {
		return err
	}
	if _, err := fw.Write(imgData); err != nil {
		return err
	}
	mw.Close()

	apiURL := fmt.Sprintf("https://api.telegram.org/bot%s/%s", h.cfg.BOTToken, method)
	resp, err := http.Post(apiURL, mw.FormDataContentType(), &buf)
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

// detectImageMeta returns a filename and MIME type based on magic bytes.
func detectImageMeta(data []byte) (filename, mime string) {
	if len(data) >= 4 {
		switch {
		case data[0] == 0xFF && data[1] == 0xD8:
			return "photo.jpg", "image/jpeg"
		case data[0] == 0x89 && data[1] == 0x50 && data[2] == 0x4E && data[3] == 0x47:
			return "photo.png", "image/png"
		case data[0] == 0x52 && data[1] == 0x49 && data[2] == 0x46 && data[3] == 0x46:
			return "photo.webp", "image/webp"
		}
	}
	return "photo.jpg", "image/jpeg"
}
