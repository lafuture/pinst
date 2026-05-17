package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"time"

	"pinst/internal/auth"
)

type paymentRequest struct {
	Plan   string `json:"plan"`
	Method string `json:"method"`
}

type paymentLinkResponse struct {
	URL       string `json:"url"`
	PaymentID string `json:"payment_id"`
}

var planAmounts = map[string]string{
	"lite": "349.00",
	"pro":  "899.00",
}

var planDescriptions = map[string]string{
	"lite": "Подписка Pinst Lite — 1 месяц",
	"pro":  "Подписка Pinst Pro — 1 месяц",
}

const yooKassaAPI = "https://api.yookassa.ru/v3/payments"

type yooCreateRequest struct {
	Amount            yooAmount         `json:"amount"`
	Confirmation      yooConfirmation   `json:"confirmation"`
	Description       string            `json:"description"`
	Capture           bool              `json:"capture"`
	SavePaymentMethod bool              `json:"save_payment_method"`
	PaymentMethodData yooMethodData     `json:"payment_method_data"`
	Metadata          map[string]any    `json:"metadata"`
}

type yooAmount struct {
	Value    string `json:"value"`
	Currency string `json:"currency"`
}

type yooConfirmation struct {
	Type      string `json:"type"`
	ReturnURL string `json:"return_url"`
}

type yooMethodData struct {
	Type string `json:"type"`
}

func (h *Handler) CreatePaymentHandler(w http.ResponseWriter, r *http.Request) {
	userID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeJSON(w, http.StatusUnauthorized, map[string]string{"error": "unauthorized"})
		return
	}

	var req paymentRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid json"})
		return
	}

	amount, ok := planAmounts[req.Plan]
	if !ok {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "unknown plan"})
		return
	}
	if req.Method != "card" && req.Method != "sbp" {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "unknown method"})
		return
	}

	if h.cfg.YooKassaShopID == "" || h.cfg.YooKassaSecretKey == "" {
		log.Printf("CreatePayment: YooKassa not configured")
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "payment not configured"})
		return
	}

	returnURL := h.cfg.YooKassaReturnURL
	if returnURL == "" {
		returnURL = "https://t.me/" + h.cfg.BOTUser
	}

	methodType := "bank_card"
	if req.Method == "sbp" {
		methodType = "sbp"
	}

	body := yooCreateRequest{
		Amount:            yooAmount{Value: amount, Currency: "RUB"},
		Confirmation:      yooConfirmation{Type: "redirect", ReturnURL: returnURL},
		Description:       planDescriptions[req.Plan],
		Capture:           true,
		SavePaymentMethod: false,
		PaymentMethodData: yooMethodData{Type: methodType},
		Metadata:          map[string]any{"tg_id": userID, "plan": req.Plan},
	}

	bodyBytes, err := json.Marshal(body)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "marshal error"})
		return
	}

	httpReq, err := http.NewRequestWithContext(r.Context(), http.MethodPost, yooKassaAPI, bytes.NewReader(bodyBytes))
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "request error"})
		return
	}
	httpReq.SetBasicAuth(h.cfg.YooKassaShopID, h.cfg.YooKassaSecretKey)
	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Idempotence-Key", fmt.Sprintf("%d-%s-%s-%d", userID, req.Plan, req.Method, time.Now().UnixMilli()))

	resp, err := http.DefaultClient.Do(httpReq)
	if err != nil {
		log.Printf("CreatePayment: http error tg_id=%d: %v", userID, err)
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "payment creation failed"})
		return
	}
	defer resp.Body.Close()

	respBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "read error"})
		return
	}

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		log.Printf("CreatePayment: YooKassa error tg_id=%d plan=%s status=%d body=%s", userID, req.Plan, resp.StatusCode, string(respBytes))
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "payment creation failed"})
		return
	}

	var created struct {
		ID           string `json:"id"`
		Confirmation struct {
			ConfirmationURL string `json:"confirmation_url"`
		} `json:"confirmation"`
	}
	if err := json.Unmarshal(respBytes, &created); err != nil {
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "parse error"})
		return
	}

	if err := h.db.CreatePayment(r.Context(), created.ID, userID, req.Plan, amount); err != nil {
		log.Printf("CreatePayment: db error tg_id=%d payment_id=%s: %v", userID, created.ID, err)
	}

	if created.Confirmation.ConfirmationURL == "" {
		log.Printf("CreatePayment: empty confirmation URL payment_id=%s body=%s", created.ID, string(respBytes))
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "no confirmation url"})
		return
	}

	log.Printf("CreatePayment: ok tg_id=%d plan=%s payment_id=%s", userID, req.Plan, created.ID)
	writeJSON(w, http.StatusCreated, paymentLinkResponse{URL: created.Confirmation.ConfirmationURL, PaymentID: created.ID})
}
