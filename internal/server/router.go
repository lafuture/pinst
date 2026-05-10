package server

import (
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"pinst/internal/auth"
	"pinst/internal/handlers"
	"pinst/internal/storage"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func staticRoot() string {
	if d := os.Getenv("STATIC_DIR"); d != "" {
		return d
	}
	return ""
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		origin := r.Header.Get("Origin")
		if origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			w.Header().Set("Access-Control-Allow-Credentials", "true")
			w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
			w.Header().Set("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, X-Telegram-Init-Data")
		}
		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func NewRouter(handler *handlers.Handler, jwtSecret string, store *storage.Storage) http.Handler {
	r := chi.NewRouter()
	r.Use(middleware.RealIP)
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(corsMiddleware)

	r.Post("/api/auth/telegram", handler.TelegramAuthHandler)
	r.Post("/api/kie/callback/yWiJwdBfHLxqbtEd9wixxZc9", handler.KieCallbackHandler)
	r.Post("/api/yookassa/webhook", handler.YooKassaWebhookHandler)

	if store != nil {
		r.Handle("/uploads/*", store.FileServer())
	}

	r.Group(func(r chi.Router) {
		r.Use(auth.BearerJWT(jwtSecret))
		r.Get("/api/profile", handler.GetProfileHandler)
		r.Post("/api/payment/create", handler.CreatePaymentHandler)
		r.Post("/api/create/simple", handler.CreateSimpleHandler)
		r.Post("/api/create/reference", handler.CreateReferenceHandler)
		r.Post("/api/create/retouch", handler.CreateRetouchHandler)
		r.Post("/api/set/model", handler.SetModelHandler)
		r.Delete("/api/set/model", handler.SetModelHandler)
		r.Post("/api/chat", handler.ChatHandler)
		r.Get("/api/chat/history", handler.ChatHistoryHandler)
		r.Delete("/api/chat/history", handler.ClearChatHistoryHandler)
		r.Get("/api/gallery", handler.GalleryHandler)
		r.Post("/api/gallery/{id}/send", handler.SendPhotoToChatHandler)
		r.Post("/api/gallery/send", handler.SendPhotoByURLToChatHandler)
		r.Get("/api/task/{task_id}", handler.GetTaskHandler)
		r.Get("/api/task/{task_id}/stream", handler.TaskStreamHandler)
		r.Post("/api/channel/recheck", handler.RecheckChannelHandler)
		r.Get("/api/notifications", handler.ListInAppNotificationsHandler)
		r.Post("/api/notifications/{id}/seen", handler.MarkInAppSeenHandler)
	})

	root := staticRoot()
	fs := http.FileServer(http.Dir(root))
	r.NotFound(func(w http.ResponseWriter, req *http.Request) {
		if strings.HasPrefix(req.URL.Path, "/api/") {
			http.NotFound(w, req)
			return
		}
		if req.Method != http.MethodGet && req.Method != http.MethodHead {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}
		w.Header().Set("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
		// Serve real file if it exists (assets, icons, etc.), otherwise SPA fallback
		if root != "" {
			if _, err := os.Stat(filepath.Join(root, filepath.Clean(req.URL.Path))); err == nil {
				fs.ServeHTTP(w, req)
				return
			}
			http.ServeFile(w, req, filepath.Join(root, "index.html"))
			return
		}
		http.NotFound(w, req)
	})

	return r
}
