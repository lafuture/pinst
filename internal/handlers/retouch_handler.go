package handlers

import (
	"log"
	"net/http"
	"strings"
)

func (h *Handler) CreateRetouchHandler(w http.ResponseWriter, r *http.Request) {
	tgID, ok := h.authedUserID(w, r)
	if !ok {
		return
	}
	if err := r.ParseMultipartForm(64 << 20); err != nil {
		writeError(w, http.StatusBadRequest, "invalid form")
		return
	}

	photos, ok := r.MultipartForm.File["photo"]
	if !ok || len(photos) == 0 {
		writeError(w, http.StatusBadRequest, "photo required")
		return
	}
	urls, err := h.uploadFiles(photos)
	if err != nil {
		log.Printf("CreateRetouch: upload tg_id=%d: %v", tgID, err)
		writeError(w, http.StatusInternalServerError, "upload failed")
		return
	}

	user := strings.TrimSpace(r.FormValue("prompt"))
	prompt := `ЗАДАЧА: Обработка и улучшение фотографии

---

АБСОЛЮТНЫЙ ПРИОРИТЕТ — ИДЕНТИЧНОСТЬ ЛИЦА:
- Сохраняй лицо без каких-либо изменений черт и пропорций
- НЕ меняй форму глаз, носа, губ, линию челюсти и скулы
- Сохраняй уникальные особенности: родинки, асимметрии, веснушки, морщины
- НЕ «улучшай» и не «исправляй» черты лица
- Результат должен быть моментально узнаваем как тот же человек

---

ЧТО УЛУЧШАТЬ:
- Детализация и чёткость изображения
- Естественный, ровный тон кожи без пластикового эффекта
- Аккуратная ретушь: убрать временные дефекты (прыщи, усталость), сохранить постоянные черты
- Коррекция экспозиции, баланса белого, контраста — если нужно
- Общее качество фото до уровня профессиональной съёмки

---

ЧТО НЕ МЕНЯТЬ:
- Идентичность и черты лица
- Поза и положение тела
- Фон и окружение
- Одежда и аксессуары
- Общая атмосфера и настроение снимка

---

ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ:
- Фотореалистичный результат, без AI-артефактов
- Естественная текстура кожи (не over-retouched)
- Сохранение исходного разрешения и пропорций`
	if user != "" {
		prompt += "\n\nДОПОЛНИТЕЛЬНО: " + user
	}

	taskID, status, err := h.submitImageTask(r.Context(), tgID, prompt, urls, "retouch", "auto")
	if err != nil {
		log.Printf("CreateRetouch: tg_id=%d: %v", tgID, err)
		writeError(w, status, err.Error())
		return
	}
	writeJSON(w, status, map[string]string{"task_id": taskID})
}
