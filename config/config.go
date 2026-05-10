package config

import (
	"os"
	"strings"

	"github.com/joho/godotenv"
)

type Config struct {
	DBURL      string
	MIGRAURL   string
	ListenAddr string
	JWTSecret  string
	BOTToken   string
	BOTUser    string
	ShortName  string
	TGChannel     string // CHANNEL_ID (-100…) для getChatMember
	TGChannelLink string // CHANNEL_LINK (https://t.me/…) для кнопки

	YooKassaShopID    string
	YooKassaSecretKey string
	YooKassaReturnURL string

	KieAPIKey      string
	KieCallbackURL string
	UploadsDir     string
	PublicURL      string
}

func Load() (*Config, error) {
	_ = godotenv.Load()

	cfg := &Config{
		DBURL:      strings.TrimSpace(os.Getenv("DB_URL")),
		MIGRAURL:   strings.TrimSpace(os.Getenv("MIGRA_URL")),
		ListenAddr: strings.TrimSpace(os.Getenv("LISTEN_ADDR")),
		JWTSecret:  strings.TrimSpace(os.Getenv("JWT_SECRET")),
		BOTToken:   normalizeBotToken(os.Getenv("BOT_TOKEN")),
		BOTUser:    strings.TrimSpace(os.Getenv("BOT_USER")),
		ShortName:  strings.TrimSpace(os.Getenv("SHORT_NAME")),
		TGChannel:     strings.TrimSpace(os.Getenv("CHANNEL_ID")),
		TGChannelLink: strings.TrimSpace(os.Getenv("CHANNEL_LINK")),

		YooKassaShopID:    strings.TrimSpace(os.Getenv("YOU_KASSA_ID")),
		YooKassaSecretKey: strings.TrimSpace(os.Getenv("YOU_KASSA_SECRET_KEY")),
		YooKassaReturnURL: strings.TrimSpace(os.Getenv("YOU_KASSA_RETURN_URL")),

		KieAPIKey:      strings.TrimSpace(os.Getenv("KIE_API_KEY")),
		KieCallbackURL: strings.TrimSpace(os.Getenv("KIE_CALLBACK_URL")),
		UploadsDir:     strings.TrimSpace(os.Getenv("UPLOADS_DIR")),
		PublicURL:      strings.TrimRight(strings.TrimSpace(os.Getenv("PUBLIC_URL")), "/"),
	}
	if cfg.KieCallbackURL == "" && cfg.PublicURL != "" {
		cfg.KieCallbackURL = cfg.PublicURL + "/api/kie/callback/yWiJwdBfHLxqbtEd9wixxZc9"
	}
	if cfg.UploadsDir == "" {
		cfg.UploadsDir = "/app/uploads"
	}

	return cfg, nil
}

func normalizeBotToken(s string) string {
	s = strings.TrimSpace(s)
	s = strings.Trim(s, `"'`)
	return strings.TrimSpace(s)
}
