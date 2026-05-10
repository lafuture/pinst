package auth

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"net/url"
	"sort"
	"strconv"
	"strings"
	"time"
)

var (
	ErrInvalidInitData = errors.New("invalid init data signature")
	ErrInitDataExpired = errors.New("init data auth_date too old")
)

type WebAppUser struct {
	ID                    int64  `json:"id"`
	IsBot                 bool   `json:"is_bot,omitempty"`
	FirstName             string `json:"first_name"`
	LastName              string `json:"last_name,omitempty"`
	Username              string `json:"username,omitempty"`
	LanguageCode          string `json:"language_code,omitempty"`
	IsPremium             bool   `json:"is_premium,omitempty"`
	AddedToAttachmentMenu bool   `json:"added_to_attachment_menu,omitempty"`
	AllowsWriteToPM       bool   `json:"allows_write_to_pm,omitempty"`
	PhotoURL              string `json:"photo_url,omitempty"`
}

func ValidateInitData(initData, botToken string, maxAge time.Duration) (*WebAppUser, string, error) {
	values, err := url.ParseQuery(initData)
	if err != nil {
		return nil, "", fmt.Errorf("parse init_data query: %w", err)
	}

	startParam := values.Get("start_param")

	receivedHash := values.Get("hash")
	if receivedHash == "" {
		return nil, "", fmt.Errorf("%w: no hash field in init_data", ErrInvalidInitData)
	}

	if maxAge > 0 {
		authDateStr := values.Get("auth_date")
		authUnix, err := strconv.ParseInt(authDateStr, 10, 64)
		if err != nil {
			return nil, "", fmt.Errorf("%w: auth_date invalid %q: %v", ErrInvalidInitData, authDateStr, err)
		}
		authTime := time.Unix(authUnix, 0)
		age := time.Since(authTime)
		if age > maxAge {
			return nil, "", fmt.Errorf("%w: auth_at=%s utc_now=%s age=%v max=%v",
				ErrInitDataExpired, authTime.UTC().Format(time.RFC3339), time.Now().UTC().Format(time.RFC3339), age.Round(time.Second), maxAge)
		}
	}

	var keys []string
	for k := range values {
		if k == "hash" {
			continue
		}
		keys = append(keys, k)
	}
	sort.Strings(keys)

	var pairs string
	for i, k := range keys {
		if i > 0 {
			pairs += "\n"
		}
		pairs += k + "=" + values.Get(k)
	}

	mac := hmac.New(sha256.New, []byte("WebAppData"))
	mac.Write([]byte(botToken))
	secretKey := mac.Sum(nil)

	mac2 := hmac.New(sha256.New, secretKey)
	mac2.Write([]byte(pairs))
	computed := hex.EncodeToString(mac2.Sum(nil))
	receivedNorm := strings.ToLower(strings.TrimSpace(receivedHash))

	if !hmac.Equal([]byte(computed), []byte(receivedNorm)) {
		botID := ""
		if i := strings.IndexByte(botToken, ':'); i > 0 {
			botID = botToken[:i]
		}
		_ = botID
		return nil, "", fmt.Errorf("%w: signature mismatch (keys in check_string: %s)",
			ErrInvalidInitData, strings.Join(keys, ","))
	}

	rawUser := values.Get("user")
	if rawUser == "" {
		return nil, "", fmt.Errorf("%w: missing user field", ErrInvalidInitData)
	}

	var u WebAppUser
	if err := json.Unmarshal([]byte(rawUser), &u); err != nil {
		return nil, "", fmt.Errorf("user json: %w", err)
	}
	if u.ID == 0 {
		return nil, "", fmt.Errorf("%w: user.id is 0 after parse", ErrInvalidInitData)
	}
	return &u, startParam, nil
}

func safePrefix(s string, n int) string {
	if len(s) <= n {
		return s
	}
	return s[:n]
}
