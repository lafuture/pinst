package billing

import (
	"context"
	"fmt"
	"log"

	"pinst/config"
	"pinst/internal/database"
	"pinst/internal/telegram"

	"github.com/rvinnie/yookassa-sdk-go/yookassa"
	yoocommon "github.com/rvinnie/yookassa-sdk-go/yookassa/common"
	yoopayment "github.com/rvinnie/yookassa-sdk-go/yookassa/payment"
)

var planAmounts = map[string]string{
	"lite": "349.00",
	"pro":  "899.00",
}

var planDescriptions = map[string]string{
	"lite": "Подписка Pinst Lite — 1 месяц",
	"pro":  "Подписка Pinst Pro — 1 месяц",
}

type Service struct {
	db  *database.Postgres
	cfg *config.Config
	tg  *telegram.Client
}

func New(db *database.Postgres, cfg *config.Config, tg *telegram.Client) *Service {
	return &Service{db: db, cfg: cfg, tg: tg}
}

// WebhookPayload — тело уведомления от ЮKassa.
type WebhookPayload struct {
	Type  string `json:"type"`
	Event string `json:"event"`
	Object struct {
		ID              string                 `json:"id"`
		Status          string                 `json:"status"`
		PaymentMethodID string                 `json:"payment_method_id"`
		Metadata        map[string]interface{} `json:"metadata"`
	} `json:"object"`
}

// HandleWebhook обрабатывает событие payment.succeeded / payment.canceled.
// Активирует подписку, сохраняет метод оплаты, отправляет уведомление при авто-продлении.
func (s *Service) HandleWebhook(ctx context.Context, p WebhookPayload) error {
	if p.Event != "payment.succeeded" && p.Event != "payment.canceled" {
		return nil
	}

	paymentID := p.Object.ID
	status := mapStatus(p.Object.Status)

	tgID, plan, dbStatus, err := s.db.GetPayment(ctx, paymentID)
	if err != nil {
		return fmt.Errorf("GetPayment %s: %w", paymentID, err)
	}
	if dbStatus == "success" || dbStatus == "failed" {
		return nil // уже обработано
	}

	if err := s.db.SetPaymentStatus(ctx, paymentID, status); err != nil {
		log.Printf("billing: SetPaymentStatus %s: %v", paymentID, err)
	}

	if status != "success" {
		log.Printf("billing: payment failed tg_id=%d plan=%s payment_id=%s", tgID, plan, paymentID)
		if isAuto(p) {
			s.notifyFailed(ctx, tgID)
		}
		return nil
	}

	if err := s.db.ActivateSubscription(ctx, tgID, plan); err != nil {
		log.Printf("billing: ActivateSubscription tg_id=%d: %v", tgID, err)
	} else {
		log.Printf("billing: subscription activated tg_id=%d plan=%s payment_id=%s", tgID, plan, paymentID)
	}

	if p.Object.PaymentMethodID != "" {
		if err := s.db.SetSavedPaymentMethod(ctx, tgID, p.Object.PaymentMethodID); err != nil {
			log.Printf("billing: SetSavedPaymentMethod tg_id=%d: %v", tgID, err)
		}
	}

	// Уведомление в Telegram только для авто-продления.
	// При ручной оплате пользователь видит результат прямо в приложении.
	if isAuto(p) {
		s.notifySuccess(ctx, tgID, plan)
	}

	return nil
}

// ChargeAutoRenewal списывает оплату с привязанной карты без участия пользователя.
func (s *Service) ChargeAutoRenewal(ctx context.Context, tgID int64, plan, methodID string) error {
	amount, ok := planAmounts[plan]
	if !ok {
		return fmt.Errorf("unknown plan: %s", plan)
	}

	client := yookassa.NewClient(s.cfg.YooKassaShopID, s.cfg.YooKassaSecretKey)
	ph := yookassa.NewPaymentHandler(client)

	payment := &yoopayment.Payment{
		Amount: &yoocommon.Amount{
			Value:    amount,
			Currency: "RUB",
		},
		PaymentMethodID: methodID,
		Capture:         true,
		Description:     planDescriptions[plan] + " (авто-продление)",
		Metadata:        map[string]interface{}{"tg_id": tgID, "plan": plan, "auto": "true"},
	}

	created, err := ph.CreatePayment(ctx, payment)
	if err != nil {
		return fmt.Errorf("yookassa: %w", err)
	}

	if err := s.db.CreatePayment(ctx, created.ID, tgID, plan, amount); err != nil {
		log.Printf("billing: CreatePayment db tg_id=%d: %v", tgID, err)
	}

	log.Printf("billing: auto-renewal initiated tg_id=%d plan=%s payment_id=%s status=%s",
		tgID, plan, created.ID, created.Status)
	return nil
}

func (s *Service) notifySuccess(ctx context.Context, tgID int64, plan string) {
	if !s.tg.Configured() {
		return
	}
	planName := map[string]string{"lite": "Lite", "pro": "Pro"}[plan]
	_ = s.tg.SendMessage(ctx, tgID,
		fmt.Sprintf("✅ Подписка <b>Pinst %s</b> успешно продлена на 30 дней.", planName),
		nil,
	)
}

func (s *Service) notifyFailed(ctx context.Context, tgID int64) {
	if !s.tg.Configured() {
		return
	}
	var btn *telegram.Button
	if url := s.tg.AppURL(); url != "" {
		btn = &telegram.Button{Text: "Открыть Pinst", WebApp: url}
	}
	_ = s.tg.SendMessage(ctx, tgID,
		"❌ Не удалось списать оплату за продление подписки.\n\nПроверь карту и продли вручную.",
		btn,
	)
}

func isAuto(p WebhookPayload) bool {
	if v, ok := p.Object.Metadata["auto"]; ok {
		if s, ok := v.(string); ok {
			return s == "true"
		}
	}
	return false
}

func mapStatus(s string) string {
	switch s {
	case "succeeded":
		return "success"
	case "canceled":
		return "failed"
	default:
		return "pending"
	}
}
