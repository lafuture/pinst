package telegram

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

type Client struct {
	token       string
	channelID   string
	channelLink string
	appURL      string
	http        *http.Client
}

func New(token, channelID, channelLink, appURL string) *Client {
	return &Client{
		token:       token,
		channelID:   channelID,
		channelLink: channelLink,
		appURL:      appURL,
		http:        &http.Client{Timeout: 10 * time.Second},
	}
}

func (c *Client) Configured() bool    { return c.token != "" }
func (c *Client) AppURL() string      { return c.appURL }
func (c *Client) ChannelID() string   { return c.channelID }
func (c *Client) ChannelLink() string { return c.channelLink }
func (c *Client) ChannelChecks() bool { return c.token != "" && c.channelID != "" }

type Button struct {
	Text   string
	WebApp string
	URL    string
}

func (c *Client) SendMessage(ctx context.Context, chatID int64, text string, btn *Button) error {
	if c.token == "" {
		return fmt.Errorf("telegram token not set")
	}
	payload := map[string]any{
		"chat_id":    chatID,
		"text":       text,
		"parse_mode": "HTML",
	}
	if btn != nil {
		kb := map[string]any{"text": btn.Text}
		if btn.WebApp != "" {
			kb["web_app"] = map[string]string{"url": btn.WebApp}
		} else if btn.URL != "" {
			kb["url"] = btn.URL
		}
		payload["reply_markup"] = map[string]any{
			"inline_keyboard": [][]map[string]any{{kb}},
		}
	}

	data, err := json.Marshal(payload)
	if err != nil {
		return err
	}
	apiURL := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", c.token)
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, apiURL, bytes.NewReader(data))
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "application/json")
	resp, err := c.http.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		return fmt.Errorf("tg api %d: %s", resp.StatusCode, body)
	}
	return nil
}

type chatMemberResp struct {
	OK     bool `json:"ok"`
	Result struct {
		Status string `json:"status"`
	} `json:"result"`
	Description string `json:"description"`
}

// IsSubscribed reports whether the user is a subscriber of the configured channel.
// If channel checks are not configured, returns (false, nil).
func (c *Client) IsSubscribed(ctx context.Context, userID int64) (bool, error) {
	if !c.ChannelChecks() {
		return false, nil
	}
	apiURL := fmt.Sprintf(
		"https://api.telegram.org/bot%s/getChatMember?chat_id=%s&user_id=%d",
		c.token, c.channelID, userID,
	)
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, apiURL, nil)
	if err != nil {
		return false, err
	}
	resp, err := c.http.Do(req)
	if err != nil {
		return false, err
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	var r chatMemberResp
	if err := json.Unmarshal(body, &r); err != nil {
		return false, fmt.Errorf("parse: %w", err)
	}
	if !r.OK {
		return false, fmt.Errorf("getChatMember: %s", r.Description)
	}
	switch r.Result.Status {
	case "creator", "administrator", "member", "restricted":
		return true, nil
	}
	return false, nil
}
