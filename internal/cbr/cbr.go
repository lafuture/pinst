// Package cbr fetches the USD/RUB rate from the Central Bank of Russia (cbr.ru)
// and caches it for one hour. A fixed markup of +10 RUB is applied on top.
package cbr

import (
	"bytes"
	"encoding/xml"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"sync"
	"time"
)

const (
	rateURL  = "https://www.cbr.ru/scripts/XML_daily.asp"
	cacheTTL = time.Hour
	markup   = 10.0
)

type cache struct {
	mu        sync.Mutex
	rate      float64 // 0 until first successful fetch
	updatedAt time.Time
}

var c = &cache{rate: 80.0 + markup} // cold-start fallback until first successful fetch

// USDToRub returns the current USD→RUB rate from CBR plus a +10 RUB markup.
// The rate is refreshed at most once per hour.
// On error: returns the last successfully fetched rate, or 0 if CBR was never reached.
func USDToRub() float64 {
	c.mu.Lock()
	defer c.mu.Unlock()

	if time.Since(c.updatedAt) < cacheTTL {
		return c.rate
	}

	rate, err := fetchUSD()
	if err != nil {
		if c.rate > 0 {
			log.Printf("[cbr] fetch failed, using last known %.4f: %v", c.rate, err)
		} else {
			log.Printf("[cbr] fetch failed, no previous rate available: %v", err)
		}
		// retry in 5 min instead of waiting a full hour
		c.updatedAt = time.Now().Add(-cacheTTL + 5*time.Minute)
		return c.rate
	}

	c.rate = rate + markup
	c.updatedAt = time.Now()
	log.Printf("[cbr] USD/RUB updated: %.4f (with markup: %.4f)", rate, c.rate)
	return c.rate
}

// valCurs mirrors the CBR XML envelope.
type valCurs struct {
	XMLName xml.Name `xml:"ValCurs"`
	Valutes []valute `xml:"Valute"`
}

type valute struct {
	CharCode string `xml:"CharCode"`
	Nominal  int    `xml:"Nominal"`
	Value    string `xml:"Value"`
}

func fetchUSD() (float64, error) {
	client := &http.Client{Timeout: 10 * time.Second}
	req, err := http.NewRequest(http.MethodGet, rateURL, nil)
	if err != nil {
		return 0, fmt.Errorf("new request: %w", err)
	}
	req.Header.Set("User-Agent", "Mozilla/5.0 (compatible; pinst-bot/1.0)")
	resp, err := client.Do(req)
	if err != nil {
		return 0, fmt.Errorf("http get: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return 0, fmt.Errorf("cbr status %d", resp.StatusCode)
	}

	// CBR returns windows-1251 XML; Go's xml decoder only handles UTF-8.
	// All fields we need (CharCode, Nominal, Value) are ASCII, so we strip
	// non-ASCII bytes before parsing — no external dependency required.
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, fmt.Errorf("read body: %w", err)
	}
	body = bytes.Replace(body,
		[]byte(`encoding="windows-1251"`),
		[]byte(`encoding="utf-8"`), 1)
	for i, b := range body {
		if b > 127 {
			body[i] = ' '
		}
	}

	var doc valCurs
	if err := xml.NewDecoder(bytes.NewReader(body)).Decode(&doc); err != nil {
		return 0, fmt.Errorf("xml decode: %w", err)
	}

	for _, v := range doc.Valutes {
		if v.CharCode != "USD" {
			continue
		}
		// CBR uses comma as decimal separator
		s := strings.ReplaceAll(v.Value, ",", ".")
		var rate float64
		if _, err := fmt.Sscanf(s, "%f", &rate); err != nil {
			return 0, fmt.Errorf("parse value %q: %w", v.Value, err)
		}
		if v.Nominal > 1 {
			rate /= float64(v.Nominal)
		}
		return rate, nil
	}
	return 0, fmt.Errorf("USD not found in CBR response")
}
