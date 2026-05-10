package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"pinst/config"
	"pinst/internal/billing"
	"pinst/internal/database"
	"pinst/internal/handlers"
	"pinst/internal/kie"
	"pinst/internal/notifications"
	"pinst/internal/ratelimit"
	"pinst/internal/server"
	"pinst/internal/storage"
	"pinst/internal/telegram"
)

func main() {
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("config: %v", err)
	}

	db, err := database.NewDatabase(cfg.DBURL, cfg.MIGRAURL)
	if err != nil {
		log.Fatalf("database: %v", err)
	}

	store, err := storage.New(cfg.UploadsDir, cfg.PublicURL)
	if err != nil {
		log.Fatalf("storage: %v", err)
	}

	kc := kie.New(cfg.KieAPIKey)

	kieLimiter := ratelimit.NewFixedWindow(20, 10*time.Second)
	kieLimiter.StartRefill(ctx)

	tgClient := telegram.New(cfg.BOTToken, cfg.TGChannel, cfg.TGChannelLink, cfg.PublicURL)
	notifSvc := notifications.New(db, tgClient)
	billingSvc := billing.New(db, cfg, tgClient)
	scheduler := notifications.NewScheduler(notifSvc, billingSvc)

	handler := handlers.NewHandler(db, cfg, kc, store, tgClient, notifSvc, billingSvc, kieLimiter.Acquire)

	var workerWg sync.WaitGroup
	workerWg.Add(4)
	go func() { defer workerWg.Done(); handler.ProcessKieTasks(ctx) }()
	go func() { defer workerWg.Done(); handler.ProcessKieResults(ctx) }()
	go func() { defer workerWg.Done(); handler.StartBotPoller(ctx) }()
	go func() { defer workerWg.Done(); scheduler.Start(ctx) }()

	srv := server.NewServer(cfg, handler, store)

	go func() {
		log.Printf("listening on %s", cfg.ListenAddr)
		if err := srv.Start(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("server: %v", err)
		}
	}()

	<-ctx.Done()
	stop() // освобождаем signal handler

	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer shutdownCancel()

	if err := srv.Shutdown(shutdownCtx); err != nil {
		log.Printf("server shutdown: %v", err)
	}

	// ctx уже отменён — воркеры выходят через ctx.Done()
	workerWg.Wait()
	log.Println("stopped")
}
