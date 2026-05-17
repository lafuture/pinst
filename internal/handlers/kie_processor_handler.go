package handlers

import (
	"context"
	"log"
	"sync"
	"time"
)

const (
	kieWorkers    = 32
	kieRetryMax   = 2
	kieRetryDelay = 15 * time.Second
)

// ProcessKieTasks запускает пул из kieWorkers горутин, каждая читает task ID из KieTasks
// и отправляет задачу в kie.ai. Аналог ProcessKieTasks в AiBot.
func (h *Handler) ProcessKieTasks(ctx context.Context) {
	var wg sync.WaitGroup
	for i := 0; i < kieWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for {
				select {
				case <-ctx.Done():
					return
				case id, ok := <-h.KieTasks:
					if !ok {
						return
					}
					log.Printf("ProcessKieTasks: received id=%s", id)
					h.processOneKieTask(ctx, id)
				}
			}
		}()
	}
	wg.Wait()
}

func (h *Handler) processOneKieTask(ctx context.Context, id string) {
	task, err := h.db.GetKieTask(ctx, id)
	if err != nil {
		log.Printf("processOneKieTask: GetKieTask id=%s: %v", id, err)
		return
	}

	if task.Retries >= kieRetryMax {
		log.Printf("processOneKieTask: max retries reached id=%s", id)
		if dbErr := h.db.MarkKieTaskFailed(ctx, id, "max retries exceeded"); dbErr != nil {
			log.Printf("processOneKieTask: MarkKieTaskFailed id=%s: %v", id, dbErr)
		}
		if dbErr := h.db.RefundRemainingPhoto(ctx, task.TgID); dbErr != nil {
			log.Printf("processOneKieTask: refund tg_id=%d: %v", task.TgID, dbErr)
		}
		h.notifier.notify(id)
		return
	}

	if h.kieAcquire != nil {
		h.kieAcquire()
	}

	kieTaskID, err := h.SendToNanoBananaPro(ctx, task.Prompt, task.MediaURLs, task.Aspect, task.Resolution)
	if err != nil {
		log.Printf("processOneKieTask: SendToNanoBananaPro id=%s: %v", id, err)
		// Инкрементируем счётчик чтобы ограничить повторы при сетевых ошибках (аналог stateKeyKieRetry в AiBot).
		if dbErr := h.db.IncrementKieTaskRetries(ctx, id); dbErr != nil {
			log.Printf("processOneKieTask: IncrementRetries id=%s: %v", id, dbErr)
		}
		tryRequeueKieTask(h, ctx, id)
		return
	}

	if dbErr := h.db.SetKieTaskKieID(ctx, id, kieTaskID); dbErr != nil {
		log.Printf("processOneKieTask: SetKieTaskKieID id=%s kie_task_id=%s: %v", id, kieTaskID, dbErr)
	}
	log.Printf("processOneKieTask: submitted id=%s kie_task_id=%s", id, kieTaskID)
}

// SendToNanoBananaPro отправляет задачу в kie.ai (nano-banana-2) и возвращает kie task_id.
func (h *Handler) SendToNanoBananaPro(ctx context.Context, prompt string, mediaURLs []string, aspect, resolution string) (string, error) {
	return h.kie.CreateImageTask(ctx, prompt, mediaURLs, aspect, h.cfg.KieCallbackURL, resolution)
}

// resolutionForUser возвращает разрешение для генерации на основе подписки.
// lite → 2K, pro → 4K, free → 2K.
func (h *Handler) resolutionForUser(ctx context.Context, tgID int64) string {
	u, err := h.db.GetUser(ctx, tgID)
	if err != nil {
		return "2K"
	}
	if u.Subscription != nil && *u.Subscription == "pro" {
		return "4K"
	}
	return "2K"
}

// ProcessKieResults запускает пул из kieWorkers горутин для обработки успешных результатов.
// Аналог пула kieResults-воркеров в AiBot (32 горутины).
func (h *Handler) ProcessKieResults(ctx context.Context) {
	var wg sync.WaitGroup
	for i := 0; i < kieWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for {
				select {
				case <-ctx.Done():
					return
				case res, ok := <-h.kieResults:
					if !ok {
						return
					}
					bgCtx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
					h.processOneKieResult(bgCtx, res)
					cancel()
				}
			}
		}()
	}
	wg.Wait()
}

func (h *Handler) processOneKieResult(ctx context.Context, res kieResult) {
	task, err := h.db.GetKieTask(ctx, res.taskID)
	if err != nil {
		log.Printf("processOneKieResult: GetKieTask id=%s: %v", res.taskID, err)
		return
	}
	finalURL := h.mirrorImage(ctx, res.imageURL, res.taskID)
	if err := h.db.MarkKieTaskSuccess(ctx, res.taskID, finalURL); err != nil {
		log.Printf("processOneKieResult: MarkKieTaskSuccess id=%s: %v", res.taskID, err)
	}
	if _, err := h.db.AddGeneration(ctx, task.TgID, finalURL, task.Prompt, task.Mode); err != nil {
		log.Printf("processOneKieResult: AddGeneration id=%s: %v", res.taskID, err)
	}
	h.notifier.notify(res.taskID)
	log.Printf("processOneKieResult: success id=%s url=%s", res.taskID, finalURL)
}

// tryRequeueKieTask повторно ставит задачу в очередь после kieRetryDelay.
// Аналог tryRequeueKieTask в AiBot.
func tryRequeueKieTask(h *Handler, ctx context.Context, id string) {
	go func() {
		select {
		case <-ctx.Done():
			return
		case <-time.After(kieRetryDelay):
			select {
			case h.KieTasks <- id:
				log.Printf("tryRequeueKieTask: requeued id=%s", id)
			default:
				log.Printf("tryRequeueKieTask: queue full, id=%s dropped", id)
			}
		}
	}()
}
