package handlers

import (
	"context"
	"encoding/json"
	"errors"
	"io"
	"log"
	"net/http"
	"strings"
	"time"

	"pinst/internal/auth"
	"pinst/internal/database"
	"pinst/internal/kie"

	"github.com/go-chi/chi/v5"
)

// KieCallbackHandler — публичный эндпоинт без JWT. kie.ai шлёт сюда POST по завершении задачи.
// При ошибке re-queue в KieTasks (как в AiBot DoKieCallback).
// При успехе — в kieResults; ProcessKieResults сохранит результат и уведомит SSE.
func (h *Handler) KieCallbackHandler(w http.ResponseWriter, r *http.Request) {
	r.Body = http.MaxBytesReader(w, r.Body, 1<<20)
	defer r.Body.Close()

	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "bad request", http.StatusBadRequest)
		return
	}

	var cb kie.KieCallback
	if err := json.Unmarshal(body, &cb); err != nil {
		log.Printf("KieCallback: bad json: %v", err)
		http.Error(w, "bad json", http.StatusBadRequest)
		return
	}
	// Всегда 200 — kie.ai не должен повторять попытки со своей стороны.
	w.WriteHeader(http.StatusOK)

	kieTaskID := strings.TrimSpace(cb.Data.TaskID)
	if kieTaskID == "" {
		log.Printf("KieCallback: empty taskId code=%d msg=%s", cb.Code, cb.Msg)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	task, err := h.db.GetKieTaskByKieID(ctx, kieTaskID)
	if errors.Is(err, database.ErrUserNotFound) {
		log.Printf("KieCallback: task not found kie_task_id=%s", kieTaskID)
		return
	}
	if err != nil {
		log.Printf("KieCallback: GetKieTaskByKieID kie_task_id=%s: %v", kieTaskID, err)
		return
	}

	state := strings.ToLower(cb.Data.State)
	failed := cb.Code != 200 || state == "fail" || state == "failed"

	if failed {
		log.Printf("KieCallback: failed id=%s kie_task_id=%s code=%d state=%s msg=%q failMsg=%q",
			task.TaskID, kieTaskID, cb.Code, cb.Data.State, cb.Msg, cb.Data.FailMsg)

		if task.Retries < kieRetryMax {
			if dbErr := h.db.IncrementKieTaskRetries(ctx, task.TaskID); dbErr != nil {
				log.Printf("KieCallback: IncrementRetries id=%s: %v", task.TaskID, dbErr)
			}
			select {
			case h.KieTasks <- task.TaskID:
				log.Printf("KieCallback: requeued id=%s (retry %d)", task.TaskID, task.Retries+1)
			default:
				// очередь переполнена — сразу фиксируем ошибку
				log.Printf("KieCallback: queue full, id=%s — marking failed", task.TaskID)
				errMsg := cb.Data.FailMsg
				if errMsg == "" {
					errMsg = cb.Msg
				}
				if dbErr := h.db.MarkKieTaskFailed(ctx, task.TaskID, errMsg); dbErr != nil {
					log.Printf("KieCallback: MarkKieTaskFailed id=%s: %v", task.TaskID, dbErr)
				}
				if dbErr := h.db.RefundRemainingPhoto(ctx, task.TgID); dbErr != nil {
					log.Printf("KieCallback: refund tg_id=%d: %v", task.TgID, dbErr)
				}
				h.notifier.notify(task.TaskID)
			}
			return
		}

		// Исчерпаны все попытки — финальная ошибка.
		errMsg := cb.Data.FailMsg
		if errMsg == "" {
			errMsg = cb.Msg
		}
		if dbErr := h.db.MarkKieTaskFailed(ctx, task.TaskID, errMsg); dbErr != nil {
			log.Printf("KieCallback: MarkKieTaskFailed id=%s: %v", task.TaskID, dbErr)
		}
		if dbErr := h.db.RefundRemainingPhoto(ctx, task.TgID); dbErr != nil {
			log.Printf("KieCallback: refund tg_id=%d id=%s: %v", task.TgID, task.TaskID, dbErr)
		}
		h.notifier.notify(task.TaskID)
		return
	}

	imageURL, err := kie.ExtractImageURL(cb.Data.ResultJSON)
	if err != nil {
		log.Printf("KieCallback: ExtractImageURL id=%s: %v", task.TaskID, err)
		_ = h.db.MarkKieTaskFailed(ctx, task.TaskID, err.Error())
		_ = h.db.RefundRemainingPhoto(ctx, task.TgID)
		h.notifier.notify(task.TaskID)
		return
	}

	select {
	case h.kieResults <- kieResult{taskID: task.TaskID, imageURL: imageURL}:
	default:
		// очередь результатов переполнена — обрабатываем inline
		finalURL := h.mirrorImage(ctx, imageURL, task.TaskID)
		if dbErr := h.db.MarkKieTaskSuccess(ctx, task.TaskID, finalURL); dbErr != nil {
			log.Printf("KieCallback: MarkKieTaskSuccess id=%s: %v", task.TaskID, dbErr)
		}
		if _, dbErr := h.db.AddGeneration(ctx, task.TgID, finalURL, task.Prompt, task.Mode); dbErr != nil {
			log.Printf("KieCallback: AddGeneration id=%s: %v", task.TaskID, dbErr)
		}
		h.notifier.notify(task.TaskID)
	}
	log.Printf("KieCallback: success tg_id=%d id=%s kie_task_id=%s", task.TgID, task.TaskID, kieTaskID)
}

type taskStatusResponse struct {
	TaskID   string  `json:"task_id"`
	State    string  `json:"state"`
	Mode     string  `json:"mode"`
	ImageURL *string `json:"image_url,omitempty"`
	Error    *string `json:"error,omitempty"`
}

// GetTaskHandler — JWT-защищённый поллинг-эндпоинт. task_id в URL = внутренний UUID.
func (h *Handler) GetTaskHandler(w http.ResponseWriter, r *http.Request) {
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
		log.Printf("GetTask: db id=%s: %v", taskID, err)
		writeError(w, http.StatusInternalServerError, "db error")
		return
	}
	if task.TgID != tgID {
		writeError(w, http.StatusForbidden, "forbidden")
		return
	}
	writeJSON(w, http.StatusOK, taskStatusResponse{
		TaskID:   task.TaskID,
		State:    task.State,
		Mode:     task.Mode,
		ImageURL: task.ImageURL,
		Error:    task.Error,
	})
}
