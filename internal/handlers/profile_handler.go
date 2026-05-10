package handlers

import (
	"errors"
	"log"
	"net/http"
	"time"

	"pinst/internal/auth"
	"pinst/internal/database"
)

type profileResponse struct {
	TelegramID        int64   `json:"telegram_id"`
	Username          string  `json:"username"`
	FirstName         string  `json:"first_name"`
	Subscription      *string `json:"subscription"`
	SubscriptionEndAt *string `json:"subscription_end_at"`
	RemainingPhoto    int     `json:"remaining_photo"`
	LimitsPhoto       int     `json:"limits_photo"`
	ReferralInvited   int     `json:"referral_invited"`
	ReferralBonus     int     `json:"referral_bonus"`
}

func (h *Handler) GetProfileHandler(w http.ResponseWriter, r *http.Request) {
	userID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}

	u, err := h.db.GetUser(r.Context(), userID)
	if err != nil {
		if errors.Is(err, database.ErrUserNotFound) {
			writeJSON(w, http.StatusNotFound, map[string]string{"error": "user not found"})
			return
		}
		log.Printf("GetProfile: GetUser tg_id=%d err=%v", userID, err)
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "database error"})
		return
	}

	username := ""
	if u.TgUsername != nil {
		username = *u.TgUsername
	}

	resp := profileResponse{
		TelegramID:      u.TgID,
		Username:        username,
		FirstName:       u.FirstName,
		RemainingPhoto:  u.RemainingPhoto,
		LimitsPhoto:     u.LimitsPhoto,
		ReferralInvited: u.ReferralInvited,
		ReferralBonus:   u.ReferralBonus,
	}
	if u.Subscription != nil && *u.Subscription != "" {
		resp.Subscription = u.Subscription
	}
	if u.SubscriptionEndAt != nil && !u.SubscriptionEndAt.Equal(time.Time{}) {
		s := u.SubscriptionEndAt.UTC().Format(time.RFC3339)
		resp.SubscriptionEndAt = &s
	}

	writeJSON(w, http.StatusOK, resp)
}
