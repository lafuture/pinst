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

	// Build multipart form
	var buf bytes.Buffer
	mw := multipart.NewWriter(&buf)

	_ = mw.WriteField("chat_id", fmt.Sprintf("%d", tgID))
	_ = mw.WriteField("caption", "Ваше фото из Pinst ✨")

	fw, err := mw.CreateFormFile("photo", "photo.jpg")
	if err != nil {
		return err
	}
	if _, err := fw.Write(imgData); err != nil {
		return err
	}
	mw.Close()

	apiURL := fmt.Sprintf("https://api.telegram.org/bot%s/sendPhoto", h.cfg.BOTToken)
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
