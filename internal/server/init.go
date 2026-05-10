package server

import (
	"context"
	"net/http"
	"pinst/config"
	"pinst/internal/handlers"
	"pinst/internal/storage"
	"time"
)

type Server struct {
	srv *http.Server
}

func NewServer(cfg *config.Config, handler *handlers.Handler, store *storage.Storage) *Server {
	return &Server{
		srv: &http.Server{
			Addr:              cfg.ListenAddr,
			Handler:           NewRouter(handler, cfg.JWTSecret, store),
			ReadHeaderTimeout: 5 * time.Second,
			ReadTimeout:       2 * time.Minute,
			WriteTimeout:      0,
			IdleTimeout:       60 * time.Second,
		},
	}
}

func (s *Server) Start() error {
	return s.srv.ListenAndServe()
}

func (s *Server) Shutdown(ctx context.Context) error {
	return s.srv.Shutdown(ctx)
}
