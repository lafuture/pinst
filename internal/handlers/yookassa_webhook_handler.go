package handlers

import (
	"encoding/json"
	"log"
	"net/http"

	"pinst/internal/billing"
)

func (h *Handler) YooKassaWebhookHandler(w http.ResponseWriter, r *http.Request) {
	var payload billing.WebhookPayload
	if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
		log.Printf("YooKassaWebhook: decode error: %v", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	log.Printf("YooKassaWebhook: event=%s payment_id=%s", payload.Event, payload.Object.ID)

	if err := h.billing.HandleWebhook(r.Context(), payload); err != nil {
		log.Printf("YooKassaWebhook: handle error: %v", err)
	}

	// Всегда возвращаем 200 — иначе ЮKassa будет повторять запросы.
	w.WriteHeader(http.StatusOK)
}
