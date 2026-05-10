package handlers

import (
	"log"
	"net/http"
	"strconv"
	"time"

	"pinst/internal/auth"
)

type galleryItem struct {
	ID        string  `json:"id"`
	ImageURL  string  `json:"image_url"`
	Prompt    *string `json:"prompt"`
	Mode      string  `json:"mode"`
	CreatedAt string  `json:"created_at"`
}

func (h *Handler) GalleryHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	limit := 50
	if s := r.URL.Query().Get("limit"); s != "" {
		if n, err := strconv.Atoi(s); err == nil && n > 0 {
			limit = n
		}
	}
	rows, err := h.db.ListGenerations(r.Context(), tgID, limit)
	if err != nil {
		log.Printf("Gallery: tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	out := make([]galleryItem, 0, len(rows))
	for _, g := range rows {
		out = append(out, galleryItem{
			ID:        g.ID,
			ImageURL:  g.ImageURL,
			Prompt:    g.Prompt,
			Mode:      g.Mode,
			CreatedAt: g.CreatedAt.UTC().Format(time.RFC3339),
		})
	}
	writeJSON(w, http.StatusOK, out)
}
