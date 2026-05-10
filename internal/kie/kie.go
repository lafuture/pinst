package kie

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

const (
	createTaskURL   = "https://api.kie.ai/api/v1/jobs/createTask"
	chatCompleteURL = "https://api.kie.ai/gpt-5-2/v1/chat/completions"
)

type Client struct {
	apiKey string
	hc     *http.Client
}

func New(apiKey string) *Client {
	return &Client{apiKey: apiKey, hc: &http.Client{Timeout: 30 * time.Second}}
}

type createTaskResp struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
	Data struct {
		TaskID string `json:"taskId"`
	} `json:"data"`
}

// CreateImageTask submits a nano-banana-2 image task with a callback URL and returns the kie task_id.
// The result will arrive asynchronously via POST to callbackURL — see KieCallback in models.
func (c *Client) CreateImageTask(ctx context.Context, prompt string, imageURLs []string, aspectRatio, callbackURL, resolution string) (string, error) {
	if c.apiKey == "" {
		return "", errors.New("KIE_API_KEY not set")
	}
	if callbackURL == "" {
		return "", errors.New("KIE_CALLBACK_URL not set")
	}
	if aspectRatio == "" {
		aspectRatio = "auto"
	}
	if resolution == "" {
		resolution = "2K"
	}
	body := map[string]any{
		"model":       "nano-banana-2",
		"callBackUrl": callbackURL,
		"input": map[string]any{
			"prompt":        prompt,
			"image_input":   imageURLs,
			"aspect_ratio":  aspectRatio,
			"resolution":    resolution,
			"output_format": "png",
		},
	}
	raw, err := json.Marshal(body)
	if err != nil {
		return "", err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, createTaskURL, bytes.NewReader(raw))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+c.apiKey)

	resp, err := c.hc.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		b, _ := io.ReadAll(resp.Body)
		return "", fmt.Errorf("kie createTask: status %d body=%s", resp.StatusCode, string(b))
	}

	var ct createTaskResp
	if err := json.NewDecoder(resp.Body).Decode(&ct); err != nil {
		return "", err
	}
	if ct.Code != 200 || ct.Data.TaskID == "" {
		return "", fmt.Errorf("kie createTask: code=%d msg=%s", ct.Code, ct.Msg)
	}
	return ct.Data.TaskID, nil
}

// KieCallback is the body kie.ai POSTs to callBackUrl on task completion.
type KieCallback struct {
	Code int    `json:"code"`
	Msg  string `json:"msg"`
	Data struct {
		State      string `json:"state"`
		TaskID     string `json:"taskId"`
		ResultJSON string `json:"resultJson"`
		FailMsg    string `json:"failMsg"`
		FailCode   int    `json:"failCode"`
	} `json:"data"`
}

// ExtractImageURL pulls the first image URL out of the callback's resultJson.
func ExtractImageURL(resultJSON string) (string, error) {
	var out struct {
		ResultUrls []string `json:"resultUrls"`
	}
	if err := json.Unmarshal([]byte(resultJSON), &out); err != nil {
		return "", fmt.Errorf("bad resultJson: %w", err)
	}
	if len(out.ResultUrls) == 0 {
		return "", errors.New("empty resultUrls")
	}
	return strings.TrimSpace(strings.ReplaceAll(out.ResultUrls[0], `\/`, "/")), nil
}

// TokenUsage holds input/output token counts returned by the API.
type TokenUsage struct {
	InputTokens  int
	OutputTokens int
}

func (c *Client) Chat(ctx context.Context, messages []map[string]any) (string, TokenUsage, error) {
	if c.apiKey == "" {
		return "", TokenUsage{}, errors.New("KIE_API_KEY not set")
	}
	body := map[string]any{
		"messages":         messages,
		"stream":           false,
		"include_thoughts": false,
		"reasoning_effort": "low",
	}
	raw, err := json.Marshal(body)
	if err != nil {
		return "", TokenUsage{}, err
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, chatCompleteURL, bytes.NewReader(raw))
	if err != nil {
		return "", TokenUsage{}, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+c.apiKey)

	hc := &http.Client{Timeout: 90 * time.Second}
	resp, err := hc.Do(req)
	if err != nil {
		return "", TokenUsage{}, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		b, _ := io.ReadAll(resp.Body)
		return "", TokenUsage{}, fmt.Errorf("kie chat: status %d body=%s", resp.StatusCode, string(b))
	}
	var out struct {
		Choices []struct {
			Message struct {
				Role    string `json:"role"`
				Content string `json:"content"`
			} `json:"message"`
		} `json:"choices"`
		Usage struct {
			PromptTokens     int `json:"prompt_tokens"`
			CompletionTokens int `json:"completion_tokens"`
		} `json:"usage"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&out); err != nil {
		return "", TokenUsage{}, err
	}
	if len(out.Choices) == 0 {
		return "", TokenUsage{}, errors.New("kie chat: empty choices")
	}
	usage := TokenUsage{InputTokens: out.Usage.PromptTokens, OutputTokens: out.Usage.CompletionTokens}
	return out.Choices[0].Message.Content, usage, nil
}

// ChatStream calls the gpt-5-2 chat completions endpoint with stream=true.
// onDelta is invoked for every content chunk; the full assembled reply and token usage are returned.
func (c *Client) ChatStream(ctx context.Context, messages []map[string]any, onDelta func(string) error) (string, TokenUsage, error) {
	if c.apiKey == "" {
		return "", TokenUsage{}, errors.New("KIE_API_KEY not set")
	}
	body := map[string]any{
		"messages":         messages,
		"stream":           true,
		"include_thoughts": false,
		"reasoning_effort": "low",
		"stream_options":   map[string]any{"include_usage": true},
	}
	raw, err := json.Marshal(body)
	if err != nil {
		return "", TokenUsage{}, err
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, chatCompleteURL, bytes.NewReader(raw))
	if err != nil {
		return "", TokenUsage{}, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+c.apiKey)
	req.Header.Set("Accept", "text/event-stream")

	hc := &http.Client{Timeout: 5 * time.Minute}
	resp, err := hc.Do(req)
	if err != nil {
		return "", TokenUsage{}, err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		b, _ := io.ReadAll(resp.Body)
		return "", TokenUsage{}, fmt.Errorf("kie chat stream: status %d body=%s", resp.StatusCode, string(b))
	}

	var full strings.Builder
	var usage TokenUsage
	reader := bufio.NewReader(resp.Body)
	for {
		line, err := reader.ReadString('\n')
		if len(line) > 0 {
			line = strings.TrimRight(line, "\r\n")
			if strings.HasPrefix(line, "data:") {
				payload := strings.TrimSpace(strings.TrimPrefix(line, "data:"))
				if payload == "" || payload == "[DONE]" {
					if payload == "[DONE]" {
						return full.String(), usage, nil
					}
				} else {
					var ev struct {
						Choices []struct {
							Delta struct {
								Content string `json:"content"`
							} `json:"delta"`
							FinishReason *string `json:"finish_reason"`
						} `json:"choices"`
						Usage *struct {
							PromptTokens     int `json:"prompt_tokens"`
							CompletionTokens int `json:"completion_tokens"`
						} `json:"usage"`
					}
					if jerr := json.Unmarshal([]byte(payload), &ev); jerr == nil {
						if ev.Usage != nil {
							usage = TokenUsage{InputTokens: ev.Usage.PromptTokens, OutputTokens: ev.Usage.CompletionTokens}
						}
						if len(ev.Choices) > 0 {
							chunk := ev.Choices[0].Delta.Content
							if chunk != "" {
								full.WriteString(chunk)
								if onDelta != nil {
									if cerr := onDelta(chunk); cerr != nil {
										return full.String(), usage, cerr
									}
								}
							}
						}
					}
				}
			}
		}
		if err != nil {
			if errors.Is(err, io.EOF) {
				return full.String(), usage, nil
			}
			return full.String(), usage, err
		}
	}
}
