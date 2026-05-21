package handlers

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"pinst/internal/auth"
	"strconv"
	"strings"
	"time"
)

type telegramAuthRequest struct {
	InitData string `json:"init_data"`
}

type authResponse struct {
	Token string `json:"token"`
	Param string `json:"param"`
}

func (h *Handler) TelegramAuthHandler(w http.ResponseWriter, r *http.Request) {
	var req telegramAuthRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		log.Printf("TelegramAuth: invalid JSON body: %v", err)
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid json"})
		return
	}
	log.Printf("TelegramAuth: POST received init_data_len=%d", len(req.InitData))
	if req.InitData == "" {
		log.Printf("TelegramAuth: missing init_data in JSON body")
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "init_data required"})
		return
	}
	if h.cfg.BOTToken == "" {
		log.Printf("TelegramAuth: BOT_TOKEN is empty in config")
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "bot not configured"})
		return
	}

	u, param, err := auth.ValidateInitData(req.InitData, h.cfg.BOTToken, 24*time.Hour)
	if err != nil {
		log.Printf("TelegramAuth: ValidateInitData failed: %v (BOT_TOKEN len=%d, same bot as in BotFather Web App URL?)", err, len(h.cfg.BOTToken))
		if errors.Is(err, auth.ErrInvalidInitData) || errors.Is(err, auth.ErrInitDataExpired) {
			writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "invalid or expired init data"})
			return
		}
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": err.Error()})
		return
	}

	var referrerID int64

	log.Printf("TelegramAuth: start_param=%q", param)
	if strings.HasPrefix(param, "r") {
		referrerID, err = strconv.ParseInt(param[1:], 10, 64)
		if err != nil {
			log.Printf("TelegramAuth: failed to parse referrerID from param=%q err=%v", param, err)
			referrerID = 0
		}
	}
	log.Printf("TelegramAuth: referrerID=%d", referrerID)

	log.Printf("TelegramAuth: parsed user id=%d first_name=%q username=%q",
		u.ID, u.FirstName, u.Username)

	tgID, isNew, err := h.db.UpsertUser(r.Context(), u.ID, u.Username, u.FirstName, referrerID)
	if err != nil {
		log.Printf("TelegramAuth: UpsertUser tg_id=%d err=%v", u.ID, err)
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "database error"})
		return
	}

	if isNew && h.notif != nil {
		subscribed := false
		if h.tg != nil && h.tg.ChannelChecks() {
			ok, cerr := h.tg.IsSubscribed(r.Context(), tgID)
			if cerr != nil {
				log.Printf("TelegramAuth: channel check tg_id=%d err=%v", tgID, cerr)
			}
			subscribed = ok
		}
		h.notif.HandleSignup(r.Context(), tgID, u.FirstName, subscribed)
	}

	token, err := auth.GenerateJWT(tgID, h.cfg.JWTSecret)
	if err != nil {
		log.Printf("TelegramAuth: GenerateJWT tg_id=%d err=%v", tgID, err)
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "token error"})
		return
	}

	log.Printf("TelegramAuth: success tg_id=%d username=%q start_param_set=%v", tgID, u.Username, param != "")

	if h.tg != nil && h.tg.LogChannelConfigured() {
		go func() {
			label := "🔁 Вход в бота"
			if isNew {
				label = "🆕 Новый пользователь"
			}
			ref := ""
			if referrerID != 0 {
				ref = fmt.Sprintf("\n🔗 tg://user?id=%d", referrerID)
			}
			text := fmt.Sprintf("%s\n👤 tg://user?id=%d%s",
				label, tgID, ref)
			if err := h.tg.LogMessage(r.Context(), text); err != nil {
				log.Printf("TelegramAuth: log channel tg_id=%d: %v", tgID, err)
			}
		}()
	}

	writeJSON(w, http.StatusOK, authResponse{Token: token, Param: param})
}
