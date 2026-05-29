package handlers

import (
	"log"
	"net/http"
	"strings"
)

func (h *Handler) CreateSimpleHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := h.authedUserID(w, r)
	if !ok {
		return
	}
	if err := r.ParseMultipartForm(64 << 20); err != nil {
		writeError(w, http.StatusBadRequest, "invalid form")
		return
	}

	prompt := strings.TrimSpace(r.FormValue("prompt"))
	aspect := parseAspect(r)

	var media []string

	// Per-request face refs override the saved model, if provided.
	if mp, ok := r.MultipartForm.File["model_photo"]; ok && len(mp) > 0 {
		urls, err := h.uploadFiles(mp)
		if err != nil {
			log.Printf("CreateSimple: upload model tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "upload failed")
			return
		}
		media = urls
		// Persist as the user's model so future requests can omit it.
		if err := h.db.SetUserModel(r.Context(), tgID, urls); err != nil {
			log.Printf("CreateSimple: SetUserModel tg_id=%d: %v", tgID, err)
		}
	} else if photos, ok := r.MultipartForm.File["photo"]; ok && len(photos) > 0 {
		urls, err := h.uploadFiles(photos)
		if err != nil {
			log.Printf("CreateSimple: upload photo tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "upload failed")
			return
		}
		media = urls
	} else {
		// Fall back to saved model.
		saved, err := h.db.GetUserModel(r.Context(), tgID)
		if err != nil {
			log.Printf("CreateSimple: GetUserModel tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "db error")
			return
		}
		if len(saved) == 0 {
			writeError(w, http.StatusBadRequest, "photo or model required")
			return
		}
		media = saved
	}

	preset := strings.TrimSpace(r.FormValue("preset"))
	mode := "simple"
	var finalPrompt string
	if preset != "" && prompt != "" {
		// Catalog preset: use the prompt exactly as provided, no system wrapping.
		finalPrompt = prompt
		mode = "preset"
	} else {
		if prompt == "" {
			prompt = "Фотореалистичный портрет"
		}
		finalPrompt = promptForModelOnly(prompt, len(media))
	}

	taskID, status, err := h.submitImageTask(r.Context(), tgID, finalPrompt, media, mode, aspect)
	if err != nil {
		log.Printf("CreateSimple: tg_id=%d: %v", tgID, err)
		writeError(w, status, err.Error())
		return
	}
	writeJSON(w, status, map[string]string{"task_id": taskID})
}
