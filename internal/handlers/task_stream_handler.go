package handlers

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"pinst/internal/auth"
	"pinst/internal/database"

	"github.com/go-chi/chi/v5"
)

// TaskStreamHandler streams task completion as a single SSE event.
// The frontend subscribes once; the event fires when the kie.ai callback arrives.
func (h *Handler) TaskStreamHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return
	}
	taskID := chi.URLParam(r, "task_id")
	if taskID == "" {
		writeError(w, http.StatusBadRequest, "missing task_id")
		return
	}

	task, err := h.db.GetKieTask(r.Context(), taskID)
	if errors.Is(err, database.ErrUserNotFound) {
		writeError(w, http.StatusNotFound, "task not found")
		return
	}
	if err != nil {
		log.Printf("TaskStream: db taskId=%s: %v", taskID, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	if task.TgID != tgID {
		writeError(w, http.StatusForbidden, "forbidden")
		return
	}

	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("X-Accel-Buffering", "no")

	// Disable the server-level write deadline for this long-lived connection.
	rc := http.NewResponseController(w)
	_ = rc.SetWriteDeadline(time.Time{})

	// Flush headers immediately so the client (and any proxy) knows the
	// connection is alive before the first data event arrives.
	w.WriteHeader(http.StatusOK)
	_ = rc.Flush()

	sendEvent := func(t database.KieTask) {
		resp := taskStatusResponse{
			TaskID:   t.TaskID,
			State:    t.State,
			Mode:     t.Mode,
			ImageURL: t.ImageURL,
			Error:    t.Error,
		}
		b, _ := json.Marshal(resp)
		fmt.Fprintf(w, "data: %s\n\n", b)
		_ = rc.Flush()
	}

	// Already done — reply immediately without registering a subscriber.
	if task.State == "success" || task.State == "failed" {
		sendEvent(task)
		return
	}

	ch := h.notifier.subscribe(taskID)
	defer h.notifier.unsubscribe(taskID, ch)

	// Re-read state after subscribing: if the task completed between the first
	// GetKieTask call and subscribe, the notification was already fired and lost.
	{
		t, err := h.db.GetKieTask(context.Background(), taskID)
		if err == nil && (t.State == "success" || t.State == "failed") {
			sendEvent(t)
			return
		}
	}

	timeout := time.NewTimer(5 * time.Minute)
	defer timeout.Stop()
	keepalive := time.NewTicker(25 * time.Second)
	defer keepalive.Stop()

	for {
		select {
		case <-ch:
			t, err := h.db.GetKieTask(context.Background(), taskID)
			if err != nil {
				log.Printf("TaskStream: GetKieTask after notify taskId=%s: %v", taskID, err)
				return
			}
			sendEvent(t)
			return
		case <-keepalive.C:
			// SSE comment — keeps proxy connections alive without triggering client logic.
			fmt.Fprintf(w, ": keepalive\n\n")
			_ = rc.Flush()
		case <-timeout.C:
			errStr := "timeout"
			sendEvent(database.KieTask{TaskID: taskID, State: "failed", Error: &errStr})
			return
		case <-r.Context().Done():
			return
		}
	}
}
