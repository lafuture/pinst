package notifications

import (
	"context"
	"log"
	"time"

	"pinst/internal/billing"
)

// Scheduler периодически проверяет БД и стреляет триггерами,
// которые нельзя посчитать "по событию" (онбординг, истечение подписки и т.п.).
type Scheduler struct {
	svc      *Service
	billing  *billing.Service
	interval time.Duration
}

func NewScheduler(svc *Service, b *billing.Service) *Scheduler {
	return &Scheduler{svc: svc, billing: b, interval: 5 * time.Second}
}

func (s *Scheduler) Start(ctx context.Context) {
	log.Println("Scheduler: started")
	// Прогон на старте, потом по тикеру.
	s.Tick(ctx)

	t := time.NewTicker(s.interval)
	defer t.Stop()
	for {
		select {
		case <-ctx.Done():
			log.Println("Scheduler: stopped")
			return
		case <-t.C:
			s.Tick(ctx)
		}
	}
}

func (s *Scheduler) Tick(ctx context.Context) {
	s.runOnboarding1h(ctx)
	s.runInactive1d(ctx)
	s.runExpiring(ctx)
	s.runAutoRenewal(ctx)
	s.runExpired(ctx)
	s.runLiteUpsell10d(ctx)
}

func (s *Scheduler) runOnboarding1h(ctx context.Context) {
	users, err := s.svc.db.UsersForOnboarding1h(ctx)
	if err != nil {
		log.Printf("Scheduler: UsersForOnboarding1h: %v", err)
		return
	}
	for _, u := range users {
		s.svc.FireOnboarding1h(ctx, u)
	}
}

func (s *Scheduler) runInactive1d(ctx context.Context) {
	users, err := s.svc.db.UsersInactive1d(ctx)
	if err != nil {
		log.Printf("Scheduler: UsersInactive1d: %v", err)
		return
	}
	for _, u := range users {
		s.svc.FireInactive1d(ctx, u)
	}
}

func (s *Scheduler) runExpiring(ctx context.Context) {
	users, err := s.svc.db.UsersExpiringIn3Days(ctx)
	if err != nil {
		log.Printf("Scheduler: UsersExpiringIn3Days: %v", err)
		return
	}
	for _, u := range users {
		s.svc.FireExpiring(ctx, u)
	}
}

func (s *Scheduler) runAutoRenewal(ctx context.Context) {
	if s.billing == nil {
		return
	}
	users, err := s.svc.db.UsersForAutoRenewal(ctx)
	if err != nil {
		log.Printf("Scheduler: UsersForAutoRenewal: %v", err)
		return
	}
	for _, u := range users {
		if u.SavedPaymentMethodID == nil || u.Subscription == nil || u.SubscriptionEndAt == nil {
			continue
		}
		// Ключ = дата окончания подписки — гарантирует ровно одно списание за период.
		key := u.SubscriptionEndAt.UTC().Format("2006-01-02T15")
		claimed, err := s.svc.db.TryClaimNotification(ctx, u.TgID, "auto_renewal", key)
		if err != nil {
			log.Printf("Scheduler: AutoRenewal TryClaimNotification tg_id=%d: %v", u.TgID, err)
			continue
		}
		if !claimed {
			continue
		}
		if err := s.billing.ChargeAutoRenewal(ctx, u.TgID, *u.Subscription, *u.SavedPaymentMethodID); err != nil {
			log.Printf("Scheduler: AutoRenewal failed tg_id=%d plan=%s: %v", u.TgID, *u.Subscription, err)
		}
	}
}

func (s *Scheduler) runExpired(ctx context.Context) {
	users, err := s.svc.db.UsersSubscriptionExpired(ctx)
	if err != nil {
		log.Printf("Scheduler: UsersSubscriptionExpired: %v", err)
		return
	}
	for _, u := range users {
		s.svc.FireExpired(ctx, u)
	}
}

func (s *Scheduler) runLiteUpsell10d(ctx context.Context) {
	users, err := s.svc.db.UsersActiveLite10d(ctx)
	if err != nil {
		log.Printf("Scheduler: UsersActiveLite10d: %v", err)
		return
	}
	for _, u := range users {
		s.svc.FireLiteUpsell10d(ctx, u)
	}
}
