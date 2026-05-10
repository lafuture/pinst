package handlers

import (
	"log"
	"net/http"
	"strings"
)

func (h *Handler) CreateReferenceHandler(w http.ResponseWriter, r *http.Request) {
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

	refs, ok := r.MultipartForm.File["reference"]
	if !ok || len(refs) == 0 {
		writeError(w, http.StatusBadRequest, "reference required")
		return
	}
	refURLs, err := h.uploadFiles(refs)
	if err != nil {
		log.Printf("CreateReference: upload reference tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "upload failed")
		return
	}

	// Face refs.
	var faceURLs []string
	if mp, ok := r.MultipartForm.File["model_photo"]; ok && len(mp) > 0 {
		faceURLs, err = h.uploadFiles(mp)
		if err != nil {
			log.Printf("CreateReference: upload model tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "upload failed")
			return
		}
		if err := h.db.SetUserModel(r.Context(), tgID, faceURLs); err != nil {
			log.Printf("CreateReference: SetUserModel tg_id=%d: %v", tgID, err)
		}
	} else if photos, ok := r.MultipartForm.File["photo"]; ok && len(photos) > 0 {
		faceURLs, err = h.uploadFiles(photos)
		if err != nil {
			log.Printf("CreateReference: upload photo tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "upload failed")
			return
		}
	} else {
		saved, err := h.db.GetUserModel(r.Context(), tgID)
		if err != nil {
			log.Printf("CreateReference: GetUserModel tg_id=%d: %v", tgID, err)
			writeError(w, http.StatusInternalServerError, "db error")
			return
		}
		if len(saved) == 0 {
			writeError(w, http.StatusBadRequest, "photo or model required")
			return
		}
		faceURLs = saved
	}

	if prompt == "" {
		prompt = "Сохрани композицию и стиль референса"
	}
	media := append([]string{}, refURLs...)
	media = append(media, faceURLs...)
	finalPrompt := promptForReference(prompt, len(faceURLs))

	taskID, status, err := h.submitImageTask(r.Context(), tgID, finalPrompt, media, "reference", aspect)
	if err != nil {
		log.Printf("CreateReference: tg_id=%d: %v", tgID, err)
		writeError(w, status, err.Error())
		return
	}
	writeJSON(w, status, map[string]string{"task_id": taskID})
}
