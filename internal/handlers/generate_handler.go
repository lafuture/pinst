package handlers

import (
	"context"
	"fmt"
	"log"
	"mime/multipart"
	"net/http"
	"strings"
	"time"

	"github.com/google/uuid"
	"pinst/internal/auth"
)

var validAspect = map[string]struct{}{
	"auto": {}, "1:1": {}, "3:4": {}, "9:16": {}, "16:9": {},
}

func parseAspect(r *http.Request) string {
	a := strings.TrimSpace(r.FormValue("aspect_ratio"))
	if _, ok := validAspect[a]; !ok || a == "" {
		return "auto"
	}
	return a
}

func (h *Handler) uploadFiles(files []*multipart.FileHeader) ([]string, error) {
	if len(files) == 0 {
		return nil, nil
	}
	urls := make([]string, 0, len(files))
	for _, fh := range files {
		u, err := h.storage.SaveMultipart(fh)
		if err != nil {
			return nil, fmt.Errorf("save upload %q: %w", fh.Filename, err)
		}
		urls = append(urls, u)
	}
	return urls, nil
}

func (h *Handler) authedUserID(w http.ResponseWriter, r *http.Request) (int64, bool) {
	uid, ok := auth.UserIDFromContext(r.Context())
	if !ok {
		writeError(w, http.StatusUnauthorized, "unauthorized")
		return 0, false
	}
	if h.kie == nil || h.cfg.KieAPIKey == "" {
		writeError(w, http.StatusInternalServerError, "kie not configured")
		return 0, false
	}
	if h.cfg.KieCallbackURL == "" {
		writeError(w, http.StatusInternalServerError, "callback url not configured")
		return 0, false
	}
	if h.storage == nil {
		writeError(w, http.StatusInternalServerError, "storage not configured")
		return 0, false
	}
	return uid, true
}

// submitImageTask снимает квоту, создаёт задачу в БД и кладёт ID в KieTasks.
// Воркер ProcessKieTasks подхватит задачу и отправит в kie.ai.
// При ошибке возвращает квоту. Результат придёт через KieCallbackHandler.
func (h *Handler) submitImageTask(ctx context.Context, tgID int64, prompt string, mediaURLs []string, mode, aspect string) (string, int, error) {
	if len(mediaURLs) == 0 {
		return "", http.StatusBadRequest, fmt.Errorf("no media urls")
	}
	ok, err := h.db.DecrementRemainingPhoto(ctx, tgID)
	if err != nil {
		return "", http.StatusInternalServerError, fmt.Errorf("quota check: %w", err)
	}
	if !ok {
		return "", http.StatusPaymentRequired, fmt.Errorf("no remaining generations")
	}

	id := uuid.NewString()
	if err := h.db.CreateKieTask(ctx, id, tgID, mode, prompt, mediaURLs, aspect); err != nil {
		if rerr := h.db.RefundRemainingPhoto(ctx, tgID); rerr != nil {
			log.Printf("submitImageTask: refund tg_id=%d: %v", tgID, rerr)
		}
		return "", http.StatusInternalServerError, fmt.Errorf("db error: %w", err)
	}

	select {
	case h.KieTasks <- id:
	default:
		if dbErr := h.db.MarkKieTaskFailed(ctx, id, "queue full"); dbErr != nil {
			log.Printf("submitImageTask: MarkKieTaskFailed id=%s: %v", id, dbErr)
		}
		if rerr := h.db.RefundRemainingPhoto(ctx, tgID); rerr != nil {
			log.Printf("submitImageTask: refund tg_id=%d: %v", tgID, rerr)
		}
		return "", http.StatusServiceUnavailable, fmt.Errorf("queue full")
	}

	h.fireAfterGenerationTriggers(ctx, tgID)

	return id, http.StatusAccepted, nil
}

// fireAfterGenerationTriggers — отправляет push-уведомления об остатке квоты.
// Запускается в горутине, чтобы не блокировать ответ сабмита.
func (h *Handler) fireAfterGenerationTriggers(parent context.Context, tgID int64) {
	if h.notif == nil {
		return
	}
	go func() {
		ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
		defer cancel()
		_ = parent
		u, err := h.db.GetUser(ctx, tgID)
		if err != nil {
			log.Printf("after-gen: GetUser tg_id=%d err=%v", tgID, err)
			return
		}
		plan := ""
		if u.Subscription != nil {
			plan = *u.Subscription
		}
		// Если subscription_end_at прошёл — считаем пользователя free.
		if u.SubscriptionEndAt != nil && u.SubscriptionEndAt.Before(time.Now()) {
			plan = ""
		}
		h.notif.AfterGeneration(ctx, tgID, u.RemainingPhoto, plan, u.SubscriptionEndAt)
	}()
}

func promptForReference(userPrompt string, faceCount int) string {
	if faceCount <= 0 {
		return userPrompt
	}
	return fmt.Sprintf(`СТРУКТУРА РЕФЕРЕНСОВ:
- Изображение 1: референс сцены (поза, композиция, освещение, стиль)
- Изображения 2–%d: один и тот же человек с разных ракурсов (референс лица)

ЗАДАЧА: %s

---

АБСОЛЮТНЫЙ ПРИОРИТЕТ — ИДЕНТИЧНОСТЬ ЛИЦА:
- Используй ВСЕ изображения человека для точного восстановления черт лица
- Определи УСТОЙЧИВЫЕ, ПОВТОРЯЮЩИЕСЯ черты на всех ракурсах (форма глаз, структура носа, пропорции губ, линия челюсти, костная структура)
- Сохраняй УНИКАЛЬНЫЕ особенности: родинки, веснушки, асимметрии, шрамы, морщины
- НЕ усредняй черты и НЕ смешивай характеристики разных людей
- НЕ «улучшай», не украшай и не стилизуй лицо
- НЕ меняй этнические маркеры, возраст и пол
- Лицо должно быть моментально узнаваемо как ОДНА и та же личность

ЧЕКЛИСТ ВОССТАНОВЛЕНИЯ ЛИЦА:
✓ Форма, цвет и расстояние между глазами
✓ Переносица, ширина и форма кончика носа
✓ Толщина и контур губ
✓ Линия челюсти и подбородок
✓ Выраженность скул
✓ Тон и текстура кожи
✓ Пропорции и симметрия лица
✓ Особые приметы (родинки, асимметрии и т.д.)

---

КОМПОЗИЦИЯ СЦЕНЫ:
- Используй изображение 1 как ВДОХНОВЕНИЕ, а не точную копию
- Сохраняй: общий стиль, настроение, качество освещения, цветовую палитру
- Адаптируй: угол камеры (±10–15°), положение объекта, детали фона

ОБЯЗАТЕЛЬНАЯ ВАРИАЦИЯ:
Создай НОВОЕ фото, вдохновлённое референсом:
- Немного другой угол камеры или фокусное расстояние
- Естественная вариация позы (та же энергетика, другие микродвижения)
- Вариация освещения (то же качество, сдвинутое направление/интенсивность)
- Детали фона могут меняться
- Результат должен ощущаться как другой кадр той же фотосессии

---

ОДЕЖДА И СТИЛЬ:
- Строго следуй описанию задачи
- Обеспечь реалистичное поведение и посадку ткани
- Поддерживай естественный, непринуждённый вид

---

ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ:
- Фотореалистичное качество с высокой детализацией
- Никаких искажений лица и AI-артефактов
- Никакого эффекта «зловещей долины»
- Никакого морфинга между разными личностями
- Чистый, естественный рендер кожи
- Правильные анатомические пропорции

---

ВАЛИДАЦИЯ:
Лицо должно быть моментально узнаваемо как тот же человек. Если нет — идентичность лица не сохранена.`, faceCount+1, userPrompt)
}

func promptForModelOnly(userPrompt string, faceCount int) string {
	n := faceCount
	if n <= 0 {
		n = 1
	}
	return fmt.Sprintf(`СТРУКТУРА РЕФЕРЕНСОВ:
- Изображения 1–%d: один и тот же человек с разных ракурсов (референс лица и внешности)

ЗАДАЧА: %s

---

АБСОЛЮТНЫЙ ПРИОРИТЕТ — ИДЕНТИЧНОСТЬ ЛИЦА:
- Используй ВСЕ изображения человека для точного восстановления черт лица
- Определи УСТОЙЧИВЫЕ, ПОВТОРЯЮЩИЕСЯ черты на всех ракурсах (форма глаз, структура носа, пропорции губ, линия челюсти, костная структура)
- Сохраняй УНИКАЛЬНЫЕ особенности: родинки, веснушки, асимметрии, шрамы, морщины
- НЕ усредняй черты и НЕ смешивай характеристики разных людей
- НЕ «улучшай», не украшай и не стилизуй лицо
- НЕ меняй этнические маркеры, возраст и пол
- Лицо должно быть моментально узнаваемо как ОДНА и та же личность

ЧЕКЛИСТ ВОССТАНОВЛЕНИЯ ЛИЦА:
✓ Форма, цвет и расстояние между глазами
✓ Переносица, ширина и форма кончика носа
✓ Толщина и контур губ
✓ Линия челюсти и подбородок
✓ Выраженность скул
✓ Тон и текстура кожи
✓ Пропорции и симметрия лица
✓ Особые приметы (родинки, асимметрии и т.д.)

---

СЦЕНА И КОМПОЗИЦИЯ:
- Полная творческая свобода согласно описанию задачи
- Поза, фон, освещение, одежда — строго по описанию задачи
- Сцена должна выглядеть естественной, живой и профессионально снятой

---

ОДЕЖДА И СТИЛЬ:
- Строго следуй описанию задачи
- Обеспечь реалистичное поведение и посадку ткани
- Поддерживай естественный, непринуждённый вид

---

ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ:
- Фотореалистичное качество с высокой детализацией
- Никаких искажений лица и AI-артефактов
- Никакого эффекта «зловещей долины»
- Чистый, естественный рендер кожи
- Правильные анатомические пропорции

---

ВАЛИДАЦИЯ:
Лицо должно быть моментально узнаваемо как тот же человек. Если нет — идентичность лица не сохранена.`, n, userPrompt)
}
