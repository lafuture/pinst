package handlers

import (
	"log"
	"net/http"
	"strings"
)

func (h *Handler) CreateRetouchHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := h.authedUserID(w, r)
	if !ok {
		return
	}
	if err := r.ParseMultipartForm(64 << 20); err != nil {
		writeError(w, http.StatusBadRequest, "invalid form")
		return
	}

	photos, ok := r.MultipartForm.File["photo"]
	if !ok || len(photos) == 0 {
		writeError(w, http.StatusBadRequest, "photo required")
		return
	}
	urls, err := h.uploadFiles(photos)
	if err != nil {
		log.Printf("CreateRetouch: upload tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "upload failed")
		return
	}

	prompt := strings.TrimSpace(r.FormValue("prompt"))

	taskID, status, err := h.submitImageTask(r.Context(), tgID, prompt, urls, "retouch", "auto")
	if err != nil {
		log.Printf("CreateRetouch: tg_id=%d: %v", tgID, err)
		writeError(w, status, err.Error())
		return
	}
	writeJSON(w, status, map[string]string{"task_id": taskID})
}
