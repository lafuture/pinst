package storage

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"strings"
)

type Storage struct {
	dir       string
	publicURL string
}

func New(dir, publicURL string) (*Storage, error) {
	if dir == "" {
		return nil, fmt.Errorf("uploads dir is empty")
	}
	if err := os.MkdirAll(dir, 0o755); err != nil {
		return nil, fmt.Errorf("mkdir %s: %w", dir, err)
	}
	return &Storage{dir: dir, publicURL: strings.TrimRight(publicURL, "/")}, nil
}

func (s *Storage) Dir() string { return s.dir }

func randName() (string, error) {
	var b [16]byte
	if _, err := rand.Read(b[:]); err != nil {
		return "", err
	}
	return hex.EncodeToString(b[:]), nil
}

func extensionFromHeader(h *multipart.FileHeader) string {
	ext := strings.ToLower(filepath.Ext(h.Filename))
	switch ext {
	case ".jpg", ".jpeg", ".png", ".webp", ".gif":
		return ext
	}
	switch h.Header.Get("Content-Type") {
	case "image/jpeg":
		return ".jpg"
	case "image/png":
		return ".png"
	case "image/webp":
		return ".webp"
	case "image/gif":
		return ".gif"
	}
	return ".jpg"
}

// SaveMultipart writes a multipart upload to disk and returns its public URL.
func (s *Storage) SaveMultipart(fh *multipart.FileHeader) (string, error) {
	src, err := fh.Open()
	if err != nil {
		return "", err
	}
	defer src.Close()

	name, err := randName()
	if err != nil {
		return "", err
	}
	ext := extensionFromHeader(fh)
	fname := name + ext

	full := filepath.Join(s.dir, fname)
	dst, err := os.OpenFile(full, os.O_WRONLY|os.O_CREATE|os.O_EXCL, 0o644)
	if err != nil {
		return "", err
	}
	if _, err := io.Copy(dst, src); err != nil {
		dst.Close()
		os.Remove(full)
		return "", err
	}
	if err := dst.Close(); err != nil {
		return "", err
	}

	if s.publicURL == "" {
		return "/uploads/" + fname, nil
	}
	return s.publicURL + "/uploads/" + fname, nil
}

// SaveBase64 saves a base64 dataURL or raw base64 to disk and returns the public URL.
func (s *Storage) SaveBytes(data []byte, ext string) (string, error) {
	if ext == "" {
		ext = ".jpg"
	}
	name, err := randName()
	if err != nil {
		return "", err
	}
	fname := name + ext
	full := filepath.Join(s.dir, fname)
	if err := os.WriteFile(full, data, 0o644); err != nil {
		return "", err
	}
	if s.publicURL == "" {
		return "/uploads/" + fname, nil
	}
	return s.publicURL + "/uploads/" + fname, nil
}

// FileServer returns an http.Handler that serves files from the storage dir.
func (s *Storage) FileServer() http.Handler {
	return http.StripPrefix("/uploads/", http.FileServer(http.Dir(s.dir)))
}

func (s *Storage) Path(name string) string {
	return filepath.Join(s.dir, path.Base(name))
}
