// Package notifications собирает в одном месте всю логику триггеров:
// какие уведомления, кому, при каких условиях, как часто отправлять.
package notifications

import (
	"context"
	"fmt"
	"log"
	"time"

	"pinst/internal/database"
	"pinst/internal/telegram"
)

// Kinds — уникальные ключи типов уведомлений (для notifications_sent / inapp_notifications).
const (
	KindWelcomeSubscribed   = "welcome_subscribed"   // зашёл, был уже подписан → 3 генерации (in-app)
	KindWelcomeUnsubscribed = "welcome_unsubscribed" // зашёл, не подписан → 1 генерация + TG
	KindChannelBonus        = "channel_bonus"        // подписался после регистрации → +2
	KindOnboarding1h        = "onboarding_1h"
	KindInactive1d          = "inactive_1d"
	KindLowQuota            = "low_quota"       // осталась 1 (free)
	KindQuotaExhausted      = "quota_exhausted" // 0 (free)
	KindSubExpiringWithCard = "sub_expiring_card"
	KindSubExpiringNoCard   = "sub_expiring_nocard"
	KindSubExpired          = "sub_expired"
	KindLiteUpsell10d       = "lite_upsell_10d"
	KindQuotaUpsellLite     = "quota_upsell_lite"
	KindQuotaUpsellPro      = "quota_upsell_pro"
)

type Service struct {
	db  *database.Postgres
	tg  *telegram.Client
	log *log.Logger
}

func New(db *database.Postgres, tg *telegram.Client) *Service {
	return &Service{db: db, tg: tg, log: log.Default()}
}

// ── helpers ──────────────────────────────────────────────────────────────────

func (s *Service) once(ctx context.Context, tgID int64, kind, key string) bool {
	claimed, err := s.db.TryClaimNotification(ctx, tgID, kind, key)
	if err != nil {
		s.log.Printf("notifications: claim %s/%s tg_id=%d: %v", kind, key, tgID, err)
		return false
	}
	return claimed
}

func (s *Service) sendTG(ctx context.Context, chatID int64, text string, btn *telegram.Button) {
	if !s.tg.Configured() {
		return
	}
	if err := s.tg.SendMessage(ctx, chatID, text, btn); err != nil {
		s.log.Printf("notifications: tg chat=%d: %v", chatID, err)
	}
}

func (s *Service) appBtn(label string) *telegram.Button {
	url := s.tg.AppURL()
	if url == "" {
		return nil
	}
	return &telegram.Button{Text: label, WebApp: url}
}

func (s *Service) inApp(ctx context.Context, tgID int64, kind, title, msg, ctaLabel, ctaAction string) {
	if err := s.db.EnqueueInApp(ctx, tgID, kind, title, msg, ctaLabel, ctaAction); err != nil {
		s.log.Printf("notifications: enqueue inapp tg_id=%d kind=%s: %v", tgID, kind, err)
	}
}

func subKey(start *time.Time) string {
	if start == nil {
		return "nostart"
	}
	return start.UTC().Format(time.RFC3339)
}

func monthKey(t time.Time) string { return t.UTC().Format("2006-01") }

// ── 1. Регистрация ───────────────────────────────────────────────────────────

// HandleSignup вызывается из auth-обработчика при первом входе в miniapp.
// subscribed = результат проверки подписки на канал (или false, если не настроено).
// Возвращает количество выданных генераций.
func (s *Service) HandleSignup(ctx context.Context, tgID int64, firstName string, subscribed bool) int {
	if subscribed {
		// Ветка A: уже подписан → 3 генерации + in-app уведомление
		if err := s.db.GrantPhotos(ctx, tgID, 3); err != nil {
			s.log.Printf("notifications: grant 3 tg_id=%d: %v", tgID, err)
		}
		_ = s.db.SetChannelSubscribed(ctx, tgID, true)
		_ = s.db.MarkNotified(ctx, tgID, KindWelcomeSubscribed, "")
		s.inApp(ctx, tgID, KindWelcomeSubscribed,
			"Добро пожаловать в Pinst ✨",
			"У тебя 3 бесплатные генерации — попробуй прямо сейчас.",
			"Создать фото", "/create",
		)
		return 3
	}

	// Ветка B: не подписан → 1 генерация + TG-сообщение + in-app баннер
	if err := s.db.GrantPhotos(ctx, tgID, 1); err != nil {
		s.log.Printf("notifications: grant 1 tg_id=%d: %v", tgID, err)
	}
	_ = s.db.MarkNotified(ctx, tgID, KindWelcomeUnsubscribed, "")

	// In-app баннер — кнопка открывает канал, второй кнопкой "Я подписался" пересчитает бонус
	ctaAction := s.tg.ChannelLink()
	if ctaAction == "" {
		ctaAction = "/create"
	}
	s.inApp(ctx, tgID, KindWelcomeUnsubscribed,
		"Добро пожаловать в Pinst ✨",
		"У тебя 1 бесплатная генерация.\nПодпишись на наш канал и получи ещё 2 в подарок 🎁",
		"Подписаться на канал", ctaAction,
	)
	return 1
}

// HandleChannelRecheck вызывается, когда miniapp просит пересчитать подписку
// (например, после клика "Подписаться"). Возвращает: granted, nowSubscribed.
func (s *Service) HandleChannelRecheck(ctx context.Context, tgID int64) (granted int, subscribed bool) {
	u, err := s.db.GetUser(ctx, tgID)
	if err != nil {
		return 0, false
	}
	if u.ChannelSubscribed {
		return 0, true
	}
	ok, err := s.tg.IsSubscribed(ctx, tgID)
	if err != nil {
		s.log.Printf("notifications: IsSubscribed tg_id=%d: %v", tgID, err)
		return 0, false
	}
	if !ok {
		return 0, false
	}
	// Подписался впервые — выдаём бонус ровно один раз
	if !s.once(ctx, tgID, KindChannelBonus, "") {
		_ = s.db.SetChannelSubscribed(ctx, tgID, true)
		return 0, true
	}
	if err := s.db.GrantPhotos(ctx, tgID, 2); err != nil {
		s.log.Printf("notifications: grant +2 tg_id=%d: %v", tgID, err)
	}
	_ = s.db.SetChannelSubscribed(ctx, tgID, true)

	s.inApp(ctx, tgID, KindChannelBonus,
		"Спасибо за подписку 🎉",
		"Отлично! Теперь у тебя 3 генерации.",
		"Создать фото", "/create",
	)
	return 2, true
}

// ── 3. Триггеры во время freemium ───────────────────────────────────────────

// AfterGeneration вызывается сразу после успешного списания одной генерации.
// remaining — сколько осталось у пользователя; isPaid — есть ли активная подписка;
// plan — "lite"/"pro"/"" для free; subEndAt — когда закончится период.
func (s *Service) AfterGeneration(
	ctx context.Context,
	tgID int64,
	remaining int,
	plan string,
	subEndAt *time.Time,
) {
	// Free-юзер
	if plan == "" {
		switch {
		case remaining == 1:
			if !s.once(ctx, tgID, KindLowQuota, "") {
				return
			}
			s.sendTG(ctx, tgID,
				"🔔 Осталась <b>1 генерация</b>.\n\n"+
					"Оформи подписку и продолжай создавать без пауз.",
				s.appBtn("Открыть Pinst"),
			)
		case remaining == 0:
			if !s.once(ctx, tgID, KindQuotaExhausted, "") {
				return
			}
			s.sendTG(ctx, tgID,
				"😔 Генерации закончились.\n\n"+
					"Оформи подписку и продолжай создавать контент.",
				s.appBtn("Выбрать тариф"),
			)
		}
		return
	}

	// Платная подписка: апсейл «закончились раньше времени»
	if remaining > 0 || subEndAt == nil {
		return
	}
	daysLeft := int(time.Until(*subEndAt).Hours() / 24)
	if daysLeft < 5 {
		return
	}
	key := monthKey(time.Now())

	switch plan {
	case "lite":
		if !s.once(ctx, tgID, KindQuotaUpsellLite, key) {
			return
		}
		s.sendTG(ctx, tgID,
			"🚀 Генерации закончились раньше времени.\n\n"+
				"Это значит ты активно создаёшь контент — самое время перейти на <b>Pro</b>: "+
				"100 генераций и 4K-качество за 899 ₽/мес.",
			s.appBtn("Перейти на Pro"),
		)
	case "pro":
		if !s.once(ctx, tgID, KindQuotaUpsellPro, key) {
			return
		}
		s.sendTG(ctx, tgID,
			"🚀 Генерации закончились раньше времени.\n\n"+
				"Это значит ты активно создаёшь контент — самое время продлить подписку.",
			s.appBtn("Продлить"),
		)
	}
}

// ── Scheduler triggers ───────────────────────────────────────────────────────

func (s *Service) FireOnboarding1h(ctx context.Context, u database.SchedulerUser) {
	if !s.once(ctx, u.TgID, KindOnboarding1h, "") {
		return
	}
	text := "У тебя ещё не сделано ни одного фото! Вот как это работает:\n\n" +
		"1️⃣ Нажми «Создать» в меню\n" +
		"2️⃣ Загрузи своё фото\n" +
		"3️⃣ Загрузи референс из Pinterest или напиши промпт\n" +
		"4️⃣ Получи результат за 30 секунд ✨"
	s.sendTG(ctx, u.TgID, text, s.appBtn("Открыть Pinst"))
}

func (s *Service) FireInactive1d(ctx context.Context, u database.SchedulerUser) {
	if !s.once(ctx, u.TgID, KindInactive1d, "") {
		return
	}
	text := fmt.Sprintf(
		"Привет, %s! 🎨\n\nУ тебя ещё есть бесплатные генерации. "+
			"Создай первое фото в Pinterest-эстетике — это займёт меньше минуты.",
		u.FirstName,
	)
	s.sendTG(ctx, u.TgID, text, s.appBtn("Создать фото"))
}

func (s *Service) FireExpiring(ctx context.Context, u database.SchedulerUser) {
	key := subKey(u.SubscriptionStartAt)
	hasCard := u.SavedPaymentMethodID != nil && *u.SavedPaymentMethodID != ""
	dateStr := "—"
	if u.SubscriptionEndAt != nil {
		dateStr = u.SubscriptionEndAt.Format("02.01.2006")
	}

	if hasCard {
		if !s.once(ctx, u.TgID, KindSubExpiringWithCard, key) {
			return
		}
		s.sendTG(ctx, u.TgID,
			fmt.Sprintf("🔔 Подписка заканчивается <b>%s</b>.\n\nКарта сохранена — всё продлится автоматически. Ничего делать не нужно ✅", dateStr),
			nil,
		)
		return
	}
	if !s.once(ctx, u.TgID, KindSubExpiringNoCard, key) {
		return
	}
	s.sendTG(ctx, u.TgID,
		fmt.Sprintf("🔔 Подписка заканчивается <b>%s</b>.\n\nПродли за 1 клик, чтобы не потерять доступ к генерациям.", dateStr),
		s.appBtn("Перейти в приложение"),
	)
}

func (s *Service) FireExpired(ctx context.Context, u database.SchedulerUser) {
	key := subKey(u.SubscriptionStartAt)
	if !s.once(ctx, u.TgID, KindSubExpired, key) {
		return
	}
	s.sendTG(ctx, u.TgID,
		"😔 Подписка закончилась.\n\nПродли за 1 клик и продолжай создавать контент — все твои фото в галерее сохранены.",
		s.appBtn("Перейти в приложение"),
	)
}

func (s *Service) FireLiteUpsell10d(ctx context.Context, u database.SchedulerUser) {
	key := subKey(u.SubscriptionStartAt)
	if !s.once(ctx, u.TgID, KindLiteUpsell10d, key) {
		return
	}
	text := fmt.Sprintf(
		"🔥 Ты уже использовал %d из %d генераций.\n\n"+
			"Переходи на <b>Pro</b>:\n"+
			"• 100 генераций в месяц\n"+
			"• Качество 4K HD\n"+
			"• Серии фото в одном стиле\n\n"+
			"Pro — 899 ₽/мес.",
		u.UsedPhoto, u.LimitsPhoto,
	)
	s.sendTG(ctx, u.TgID, text, s.appBtn("Перейти на Pro"))
}
