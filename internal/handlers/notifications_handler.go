package handlers

import (
	"log"
	"net/http"
	"strconv"

	"pinst/internal/auth"

	"github.com/go-chi/chi/v5"
)

// POST /api/channel/recheck — пересчитать статус подписки на канал.
// При первом успешном подтверждении выдаёт +2 генерации.
func (h *Handler) RecheckChannelHandler(w http.ResponseWriter, r *http.Request) {
	uid, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	if h.notif == nil || h.tg == nil {
		writeJSON(w, http.StatusOK, map[string]any{"subscribed": false, "granted": 0})
		return
	}
	granted, subscribed := h.notif.HandleChannelRecheck(r.Context(), uid)
	writeJSON(w, http.StatusOK, map[string]any{
		"subscribed": subscribed,
		"granted":    granted,
	})
}

// GET /api/notifications — список не показанных in-app уведомлений.
func (h *Handler) ListInAppNotificationsHandler(w http.ResponseWriter, r *http.Request) {
	uid, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	items, err := h.db.ListPendingInApp(r.Context(), uid)
	if err != nil {
		log.Printf("ListInApp: tg_id=%d err=%v", uid, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{"items": items})
}

// POST /api/notifications/{id}/seen — пометить уведомление прочитанным.
func (h *Handler) MarkInAppSeenHandler(w http.ResponseWriter, r *http.Request) {
	uid, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	idStr := chi.URLParam(r, "id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		writeError(w, http.StatusBadRequest, "bad id")
		return
	}
	if err := h.db.MarkInAppSeen(r.Context(), id, uid); err != nil {
		log.Printf("MarkInAppSeen: id=%d tg_id=%d err=%v", id, uid, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
}
