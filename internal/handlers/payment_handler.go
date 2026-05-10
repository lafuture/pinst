package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"pinst/internal/auth"

	"github.com/rvinnie/yookassa-sdk-go/yookassa"
	yoocommon "github.com/rvinnie/yookassa-sdk-go/yookassa/common"
	yoopayment "github.com/rvinnie/yookassa-sdk-go/yookassa/payment"
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
		log.Printf("CreatePayment: YooKassa not configured (YOOKASSA_SHOP_ID/YOOKASSA_SECRET_KEY missing)")
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "payment not configured"})
		return
	}

	returnURL := h.cfg.YooKassaReturnURL
	if returnURL == "" {
		returnURL = "https://t.me/" + h.cfg.BOTUser
	}

	yooclient := yookassa.NewClient(h.cfg.YooKassaShopID, h.cfg.YooKassaSecretKey)
	paymentHandler := yookassa.NewPaymentHandler(yooclient)

	paymentObj := &yoopayment.Payment{
		Amount: &yoocommon.Amount{
			Value:    amount,
			Currency: "RUB",
		},
		Confirmation: yoopayment.Redirect{
			Type:      "redirect",
			ReturnURL: returnURL,
		},
		Description:       planDescriptions[req.Plan],
		Capture:           true,
		SavePaymentMethod: true,
		Metadata:          map[string]interface{}{"tg_id": userID, "plan": req.Plan},
	}

	created, err := paymentHandler.CreatePayment(r.Context(), paymentObj)
	if err != nil {
		log.Printf("CreatePayment: YooKassa error tg_id=%d plan=%s: %v", userID, req.Plan, err)
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "payment creation failed"})
		return
	}

	if err := h.db.CreatePayment(r.Context(), created.ID, userID, req.Plan, amount); err != nil {
		log.Printf("CreatePayment: db error tg_id=%d payment_id=%s: %v", userID, created.ID, err)
	}

	payURL := extractConfirmationURL(created.Confirmation)
	if payURL == "" {
		log.Printf("CreatePayment: empty confirmation URL payment_id=%s", created.ID)
		writeJSON(w, http.StatusInternalServerError, map[string]string{"error": "no confirmation url"})
		return
	}

	log.Printf("CreatePayment: ok tg_id=%d plan=%s payment_id=%s", userID, req.Plan, created.ID)
	writeJSON(w, http.StatusCreated, paymentLinkResponse{URL: payURL, PaymentID: created.ID})
}


func extractConfirmationURL(c interface{}) string {
	if c == nil {
		return ""
	}
	if m, ok := c.(map[string]interface{}); ok {
		if u, _ := m["confirmation_url"].(string); u != "" {
			return u
		}
	}
	switch v := c.(type) {
	case *yoopayment.Redirect:
		if v != nil {
			return v.ConfirmationURL
		}
	case yoopayment.Redirect:
		return v.ConfirmationURL
	}
	return ""
}
