package handlers

import (
	"encoding/json"
	"net/http"

	"pinst/config"
	"pinst/internal/billing"
	"pinst/internal/database"
	"pinst/internal/kie"
	"pinst/internal/notifications"
	"pinst/internal/storage"
	"pinst/internal/telegram"
)

type kieResult struct {
	taskID   string
	imageURL string
}

type Handler struct {
	db         *database.Postgres
	cfg        *config.Config
	kie        *kie.Client
	storage    *storage.Storage
	notifier   *taskNotifier
	tg         *telegram.Client
	notif      *notifications.Service
	billing    *billing.Service
	KieTasks   chan string
	kieResults chan kieResult
	kieAcquire func() // rate limit: вызывать перед SendToNanoBananaPro; может быть nil
}

func NewHandler(
	db *database.Postgres,
	cfg *config.Config,
	kc *kie.Client,
	st *storage.Storage,
	tg *telegram.Client,
	notif *notifications.Service,
	b *billing.Service,
	kieAcquire func(),
) *Handler {
	return &Handler{
		db:         db,
		cfg:        cfg,
		kie:        kc,
		storage:    st,
		notifier:   newTaskNotifier(),
		tg:         tg,
		notif:      notif,
		billing:    b,
		KieTasks:   make(chan string, 512),
		kieResults: make(chan kieResult, 512),
		kieAcquire: kieAcquire,
	}
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func writeError(w http.ResponseWriter, status int, msg string) {
	writeJSON(w, status, map[string]string{"error": msg})
}
