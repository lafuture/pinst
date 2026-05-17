package handlers

import (
	"context"
	"io"
	"log"
	"net/http"
	"path/filepath"
	"strings"
	"time"
)

// mirrorImage downloads the remote image from kie.ai and saves it to local storage,
// returning a stable HTTPS URL served by this server.
// tempfile.aiquickdraw.com URLs cannot be loaded by Telegram WebApp (mixed content / CSP).
// Falls back to the original URL if download or save fails.
func (h *Handler) mirrorImage(ctx context.Context, remoteURL, taskID string) string {
	if h.storage == nil {
		return remoteURL
	}

	dlCtx, cancel := context.WithTimeout(ctx, 60*time.Second)
	defer cancel()

	req, err := http.NewRequestWithContext(dlCtx, http.MethodGet, remoteURL, nil)
	if err != nil {
		log.Printf("mirrorImage: build request id=%s: %v", taskID, err)
		return remoteURL
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Printf("mirrorImage: download id=%s url=%s: %v", taskID, remoteURL, err)
		return remoteURL
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Printf("mirrorImage: download id=%s status=%d", taskID, resp.StatusCode)
		return remoteURL
	}

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Printf("mirrorImage: read body id=%s: %v", taskID, err)
		return remoteURL
	}

	ext := extFromContentType(resp.Header.Get("Content-Type"), remoteURL)
	localURL, err := h.storage.SaveBytes(data, ext)
	if err != nil {
		log.Printf("mirrorImage: save id=%s: %v", taskID, err)
		return remoteURL
	}

	log.Printf("mirrorImage: saved id=%s -> %s", taskID, localURL)
	return localURL
}

func extFromContentType(ct, url string) string {
	switch {
	case strings.Contains(ct, "png"):
		return ".png"
	case strings.Contains(ct, "webp"):
		return ".webp"
	case strings.Contains(ct, "gif"):
		return ".gif"
	case strings.Contains(ct, "jpeg"), strings.Contains(ct, "jpg"):
		return ".jpg"
	}
	switch strings.ToLower(filepath.Ext(url)) {
	case ".png", ".webp", ".gif", ".jpg", ".jpeg":
		return strings.ToLower(filepath.Ext(url))
	}
	return ".jpg"
}
