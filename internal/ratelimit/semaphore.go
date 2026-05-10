package ratelimit

import (
	"context"
	"sync"
	"time"
)

// FixedWindow ограничивает количество запросов: не более limit за каждые window.
// Реализован через токен-канал с периодическим сбросом.
type FixedWindow struct {
	ch     chan struct{}
	limit  int
	window time.Duration
	once   sync.Once
}

// NewFixedWindow создаёт лимитер. Вызвать StartRefill для запуска горутины сброса.
func NewFixedWindow(limit int, window time.Duration) *FixedWindow {
	ch := make(chan struct{}, limit)
	for i := 0; i < limit; i++ {
		ch <- struct{}{}
	}
	return &FixedWindow{ch: ch, limit: limit, window: window}
}

// StartRefill запускает горутину, которая раз в window сбрасывает и пополняет токены.
// Вызывать один раз. Останавливается при отмене ctx.
func (f *FixedWindow) StartRefill(ctx context.Context) {
	f.once.Do(func() {
		go f.refill(ctx)
	})
}

func (f *FixedWindow) refill(ctx context.Context) {
	ticker := time.NewTicker(f.window)
	defer ticker.Stop()
	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			f.drainAndRefill()
		}
	}
}

func (f *FixedWindow) drainAndRefill() {
	for {
		select {
		case <-f.ch:
		default:
			goto refill
		}
	}
refill:
	for i := 0; i < f.limit; i++ {
		f.ch <- struct{}{}
	}
}

// Acquire блокируется, пока не будет доступен токен, затем забирает его.
// Вызывать перед каждым запросом к kie.ai.
func (f *FixedWindow) Acquire() {
	<-f.ch
}
