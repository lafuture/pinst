package handlers

import (
	"log"
	"net/http"

	"pinst/internal/auth"
)

type modelResponse struct {
	Photos []string `json:"photos"`
}

func (h *Handler) SetModelHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	if h.storage == nil {
		writeError(w, http.StatusInternalServerError, "storage not configured")
		return
	}

	if r.Method == http.MethodDelete {
		if err := h.db.DeleteUserModel(r.Context(), tgID); err != nil {
			log.Printf("SetModel: delete tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "db error")
			return
		}
		writeJSON(w, http.StatusOK, modelResponse{Photos: []string{}})
		return
	}

	if err := r.ParseMultipartForm(64 << 20); err != nil {
		writeError(w, http.StatusBadRequest, "invalid form")
		return
	}
	files, ok := r.MultipartForm.File["model_photo"]
	if !ok || len(files) == 0 {
		writeError(w, http.StatusBadRequest, "model_photo required")
		return
	}
	urls, err := h.uploadFiles(files)
	if err != nil {
		log.Printf("SetModel: upload tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "upload failed")
		return
	}
	if err := h.db.SetUserModel(r.Context(), tgID, urls); err != nil {
		log.Printf("SetModel: SetUserModel tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	writeJSON(w, http.StatusOK, modelResponse{Photos: urls})
}
