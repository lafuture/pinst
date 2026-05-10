package auth

import (
	"context"
	"log"
	"net/http"
	"strconv"
	"strings"
)

type contextKey int

const userIDKey contextKey = 1

func BearerJWT(secret string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			h := r.Header.Get("Authorization")
			const prefix = "Bearer "
			if !strings.HasPrefix(h, prefix) {
				log.Printf("JWT: 401 missing Bearer %s %s", r.Method, r.URL.Path)
				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}
			raw := strings.TrimSpace(strings.TrimPrefix(h, prefix))
			if raw == "" {
				log.Printf("JWT: 401 empty token %s %s", r.Method, r.URL.Path)
				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}
			claims, err := ParseToken(raw, secret)
			if err != nil {
				log.Printf("JWT: 401 parse/verify failed %s %s: %v", r.Method, r.URL.Path, err)
				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}
			uid, err := strconv.ParseInt(claims.UserID, 10, 64)
			if err != nil || uid <= 0 {
				log.Printf("JWT: 401 bad user_id claim %q %s %s", claims.UserID, r.Method, r.URL.Path)
				http.Error(w, "unauthorized", http.StatusUnauthorized)
				return
			}
			next.ServeHTTP(w, r.WithContext(WithUserID(r.Context(), uid)))
		})
	}
}

func WithUserID(ctx context.Context, id int64) context.Context {
	return context.WithValue(ctx, userIDKey, id)
}

func UserIDFromContext(ctx context.Context) (int64, bool) {
	v, ok := ctx.Value(userIDKey).(int64)
	return v, ok
}
