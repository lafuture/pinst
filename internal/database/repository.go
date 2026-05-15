package database

import (
	"context"
	"encoding/json"
	"errors"
	"time"

	"github.com/jackc/pgx/v5"
)

var (
	ErrUserNotFound = errors.New("user not found")
)

type User struct {
	TgID                 int64      `json:"tg_id"`
	TgUsername           *string    `json:"tg_username,omitempty"`
	FirstName            string     `json:"first_name"`
	CreatedAt            time.Time  `json:"created_at"`
	Subscription         *string    `json:"subscription"`
	SubscriptionEndAt    *time.Time `json:"subscription_end_at"`
	SubscriptionStartAt  *time.Time `json:"subscription_at"`
	LimitsPhoto          int        `json:"limits_photo"`
	LimitsChat           int        `json:"limits_chat"`
	RemainingPhoto       int        `json:"remaining_photo"`
	RemainingChat        int        `json:"remaining_chat"`
	UsedPhoto            int        `json:"used_photo"`
	UsedChat             int        `json:"used_chat"`
	UsedTrial            int        `json:"used_trial"`
	ReferralInvited      int        `json:"referral_invited"`
	ReferralBonus        int        `json:"referral_bonus"`
	ReferrerID           int64      `json:"referrer_id"`
	ChannelSubscribed    bool       `json:"channel_subscribed"`
	SavedPaymentMethodID *string    `json:"saved_payment_method_id,omitempty"`
	ChatSpentRub         float64    `json:"chat_spent_rub"`
}

// UpsertUser создаёт или обновляет пользователя.
// Если пользователь новый и передан referrerID — начисляет бонус обеим сторонам (один раз).
// Возвращает (tgID, isNew, error).
func (p *Postgres) UpsertUser(ctx context.Context, tgID int64, tgUsername, firstName string, referrerID int64) (int64, bool, error) {
	const q = `
		INSERT INTO users (tg_id, tg_username, first_name, referrer_id)
		VALUES ($1, $2, $3, $4)
		ON CONFLICT (tg_id) DO UPDATE SET
			tg_username = COALESCE(EXCLUDED.tg_username, users.tg_username),
			first_name = CASE
				WHEN EXCLUDED.first_name <> '' THEN EXCLUDED.first_name
				ELSE users.first_name
			END
		RETURNING tg_id, (xmax = 0) AS is_new`

	var out int64
	var isNew bool
	var uname any = tgUsername
	if tgUsername == "" {
		uname = nil
	}

	err := p.Pool.QueryRow(ctx, q, tgID, uname, firstName, referrerID).Scan(&out, &isNew)
	if err != nil {
		return 0, false, err
	}

	if isNew && referrerID != 0 && referrerID != tgID {
		_ = p.applyReferralBonus(ctx, tgID, referrerID)
	}

	return out, isNew, nil
}

// GrantPhotos добавляет n генераций (увеличивает remaining_photo и limits_photo).
func (p *Postgres) GrantPhotos(ctx context.Context, tgID int64, n int) error {
	if n <= 0 {
		return nil
	}
	const q = `
		UPDATE users SET
			limits_photo    = limits_photo + $2,
			remaining_photo = remaining_photo + $2
		WHERE tg_id = $1`
	_, err := p.Pool.Exec(ctx, q, tgID, n)
	return err
}

// SetChannelSubscribed помечает пользователя как подписанного на канал.
func (p *Postgres) SetChannelSubscribed(ctx context.Context, tgID int64, val bool) error {
	const q = `UPDATE users SET channel_subscribed = $2 WHERE tg_id = $1`
	_, err := p.Pool.Exec(ctx, q, tgID, val)
	return err
}

// SetSavedPaymentMethod сохраняет id привязанного способа оплаты YooKassa.
func (p *Postgres) SetSavedPaymentMethod(ctx context.Context, tgID int64, methodID string) error {
	const q = `UPDATE users SET saved_payment_method_id = NULLIF($2, '') WHERE tg_id = $1`
	_, err := p.Pool.Exec(ctx, q, tgID, methodID)
	return err
}

// WasNotified проверяет, было ли отправлено уведомление данного типа+ключа.
func (p *Postgres) WasNotified(ctx context.Context, tgID int64, kind, key string) (bool, error) {
	const q = `SELECT 1 FROM notifications_sent WHERE tg_id = $1 AND kind = $2 AND key = $3`
	var x int
	err := p.Pool.QueryRow(ctx, q, tgID, kind, key).Scan(&x)
	if errors.Is(err, pgx.ErrNoRows) {
		return false, nil
	}
	if err != nil {
		return false, err
	}
	return true, nil
}

// MarkNotified помечает уведомление как отправленное. ON CONFLICT — no-op.
func (p *Postgres) MarkNotified(ctx context.Context, tgID int64, kind, key string) error {
	const q = `
		INSERT INTO notifications_sent (tg_id, kind, key)
		VALUES ($1, $2, $3)
		ON CONFLICT DO NOTHING`
	_, err := p.Pool.Exec(ctx, q, tgID, kind, key)
	return err
}

// TryClaimNotification атомарно отмечает уведомление и возвращает true,
// если оно ещё не было отправлено. Используется для защиты от гонок.
func (p *Postgres) TryClaimNotification(ctx context.Context, tgID int64, kind, key string) (bool, error) {
	const q = `
		INSERT INTO notifications_sent (tg_id, kind, key)
		VALUES ($1, $2, $3)
		ON CONFLICT DO NOTHING`
	tag, err := p.Pool.Exec(ctx, q, tgID, kind, key)
	if err != nil {
		return false, err
	}
	return tag.RowsAffected() > 0, nil
}

type InAppNotification struct {
	ID        int64     `json:"id"`
	Kind      string    `json:"kind"`
	Title     string    `json:"title"`
	Message   string    `json:"message"`
	CtaLabel  *string   `json:"cta_label,omitempty"`
	CtaAction *string   `json:"cta_action,omitempty"`
	CreatedAt time.Time `json:"created_at"`
}

// EnqueueInApp кладёт уведомление, которое miniapp покажет при следующем заходе.
func (p *Postgres) EnqueueInApp(ctx context.Context, tgID int64, kind, title, message string, ctaLabel, ctaAction string) error {
	const q = `
		INSERT INTO inapp_notifications (tg_id, kind, title, message, cta_label, cta_action)
		VALUES ($1, $2, $3, $4, NULLIF($5, ''), NULLIF($6, ''))`
	_, err := p.Pool.Exec(ctx, q, tgID, kind, title, message, ctaLabel, ctaAction)
	return err
}

func (p *Postgres) ListPendingInApp(ctx context.Context, tgID int64) ([]InAppNotification, error) {
	const q = `
		SELECT id, kind, title, message, cta_label, cta_action, created_at
		FROM inapp_notifications
		WHERE tg_id = $1 AND seen_at IS NULL
		ORDER BY created_at ASC`
	rows, err := p.Pool.Query(ctx, q, tgID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	out := make([]InAppNotification, 0)
	for rows.Next() {
		var n InAppNotification
		if err := rows.Scan(&n.ID, &n.Kind, &n.Title, &n.Message, &n.CtaLabel, &n.CtaAction, &n.CreatedAt); err != nil {
			return nil, err
		}
		out = append(out, n)
	}
	return out, rows.Err()
}

func (p *Postgres) MarkInAppSeen(ctx context.Context, id, tgID int64) error {
	const q = `UPDATE inapp_notifications SET seen_at = NOW() WHERE id = $1 AND tg_id = $2`
	_, err := p.Pool.Exec(ctx, q, id, tgID)
	return err
}

func (p *Postgres) applyReferralBonus(ctx context.Context, newUserID, referrerID int64) error {
	const qReferrer = `
		UPDATE users SET
			referral_bonus   = referral_bonus + 3,
			referral_invited = referral_invited + 1,
			limits_photo     = limits_photo + 3,
			remaining_photo  = remaining_photo + 3
		WHERE tg_id = $1`

	const qNewUser = `
		UPDATE users SET
			referral_bonus  = referral_bonus + 3,
			limits_photo    = limits_photo + 3,
			remaining_photo = remaining_photo + 3
		WHERE tg_id = $1`

	_, err1 := p.Pool.Exec(ctx, qReferrer, referrerID)
	_, err2 := p.Pool.Exec(ctx, qNewUser, newUserID)
	return errors.Join(err1, err2)
}

func (p *Postgres) CreatePayment(ctx context.Context, id string, tgID int64, plan, amount string) error {
	const q = `
		INSERT INTO payments (id, tg_id, plan, amount, status)
		VALUES ($1, $2, $3, $4, 'pending')
		ON CONFLICT (id) DO NOTHING`
	_, err := p.Pool.Exec(ctx, q, id, tgID, plan, amount)
	return err
}

func (p *Postgres) GetPayment(ctx context.Context, id string) (tgID int64, plan, status string, err error) {
	const q = `SELECT tg_id, plan, status FROM payments WHERE id = $1`
	err = p.Pool.QueryRow(ctx, q, id).Scan(&tgID, &plan, &status)
	if errors.Is(err, pgx.ErrNoRows) {
		err = ErrUserNotFound
	}
	return
}

func (p *Postgres) SetPaymentStatus(ctx context.Context, id, status string) error {
	const q = `UPDATE payments SET status = $2, updated_at = NOW() WHERE id = $1`
	_, err := p.Pool.Exec(ctx, q, id, status)
	return err
}

var planLimits = map[string]int{
	"lite": 30,
	"pro":  100,
}

func (p *Postgres) ActivateSubscription(ctx context.Context, tgID int64, plan string) error {
	limit := planLimits[plan]
	const q = `
		UPDATE users SET
			subscription          = $2,
			subscription_start_at = NOW(),
			subscription_end_at   = NOW() + INTERVAL '30 days',
			limits_photo          = $3,
			remaining_photo       = $3
		WHERE tg_id = $1`
	_, err := p.Pool.Exec(ctx, q, tgID, plan, limit)
	return err
}

type Generation struct {
	ID        string    `json:"id"`
	ImageURL  string    `json:"image_url"`
	Prompt    *string   `json:"prompt"`
	Mode      string    `json:"mode"`
	CreatedAt time.Time `json:"created_at"`
}

func (p *Postgres) AddGeneration(ctx context.Context, tgID int64, imageURL, prompt, mode string) (string, error) {
	const q = `
		INSERT INTO generations (tg_id, image_url, prompt, mode)
		VALUES ($1, $2, NULLIF($3,''), $4)
		RETURNING id`
	var id string
	if err := p.Pool.QueryRow(ctx, q, tgID, imageURL, prompt, mode).Scan(&id); err != nil {
		return "", err
	}
	return id, nil
}

func (p *Postgres) ListGenerations(ctx context.Context, tgID int64, limit int) ([]Generation, error) {
	if limit <= 0 || limit > 200 {
		limit = 50
	}
	const q = `
		SELECT id::text, image_url, prompt, mode, created_at
		FROM generations
		WHERE tg_id = $1
		ORDER BY created_at DESC
		LIMIT $2`
	rows, err := p.Pool.Query(ctx, q, tgID, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	out := make([]Generation, 0)
	for rows.Next() {
		var g Generation
		if err := rows.Scan(&g.ID, &g.ImageURL, &g.Prompt, &g.Mode, &g.CreatedAt); err != nil {
			return nil, err
		}
		out = append(out, g)
	}
	return out, rows.Err()
}

func (p *Postgres) GetGeneration(ctx context.Context, id string, tgID int64) (*Generation, error) {
	const q = `
		SELECT id::text, image_url, prompt, mode, created_at
		FROM generations
		WHERE id = $1 AND tg_id = $2`
	var g Generation
	err := p.Pool.QueryRow(ctx, q, id, tgID).Scan(&g.ID, &g.ImageURL, &g.Prompt, &g.Mode, &g.CreatedAt)
	if err != nil {
		return nil, err
	}
	return &g, nil
}

func (p *Postgres) GetGenerationByURL(ctx context.Context, imageURL string, tgID int64) (*Generation, error) {
	const q = `
		SELECT id::text, image_url, prompt, mode, created_at
		FROM generations
		WHERE image_url = $1 AND tg_id = $2
		LIMIT 1`
	var g Generation
	err := p.Pool.QueryRow(ctx, q, imageURL, tgID).Scan(&g.ID, &g.ImageURL, &g.Prompt, &g.Mode, &g.CreatedAt)
	if err != nil {
		return nil, err
	}
	return &g, nil
}

func (p *Postgres) DecrementRemainingPhoto(ctx context.Context, tgID int64) (bool, error) {
	const q = `
		UPDATE users SET
			remaining_photo = remaining_photo - 1,
			used_photo = used_photo + 1
		WHERE tg_id = $1 AND remaining_photo > 0`
	tag, err := p.Pool.Exec(ctx, q, tgID)
	if err != nil {
		return false, err
	}
	return tag.RowsAffected() > 0, nil
}

func (p *Postgres) RefundRemainingPhoto(ctx context.Context, tgID int64) error {
	const q = `
		UPDATE users SET
			remaining_photo = remaining_photo + 1,
			used_photo = GREATEST(used_photo - 1, 0)
		WHERE tg_id = $1`
	_, err := p.Pool.Exec(ctx, q, tgID)
	return err
}

func (p *Postgres) DecrementRemainingChat(ctx context.Context, tgID int64) (bool, error) {
	const q = `
		UPDATE users SET
			remaining_chat = remaining_chat - 1,
			used_chat = used_chat + 1
		WHERE tg_id = $1 AND remaining_chat > 0`
	tag, err := p.Pool.Exec(ctx, q, tgID)
	if err != nil {
		return false, err
	}
	return tag.RowsAffected() > 0, nil
}

func (p *Postgres) SetUserModel(ctx context.Context, tgID int64, photos []string) error {
	const q = `
		INSERT INTO user_models (tg_id, photos, updated_at)
		VALUES ($1, $2::jsonb, NOW())
		ON CONFLICT (tg_id) DO UPDATE
			SET photos = EXCLUDED.photos, updated_at = NOW()`
	raw, err := json.Marshal(photos)
	if err != nil {
		return err
	}
	_, err = p.Pool.Exec(ctx, q, tgID, string(raw))
	return err
}

func (p *Postgres) GetUserModel(ctx context.Context, tgID int64) ([]string, error) {
	const q = `SELECT photos FROM user_models WHERE tg_id = $1`
	var raw []byte
	err := p.Pool.QueryRow(ctx, q, tgID).Scan(&raw)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	var out []string
	if err := json.Unmarshal(raw, &out); err != nil {
		return nil, err
	}
	return out, nil
}

func (p *Postgres) DeleteUserModel(ctx context.Context, tgID int64) error {
	_, err := p.Pool.Exec(ctx, `DELETE FROM user_models WHERE tg_id = $1`, tgID)
	return err
}

type KieTask struct {
	TaskID     string
	KieTaskID  *string
	TgID       int64
	State      string
	Mode       string
	Prompt     string
	MediaURLs  []string
	Aspect     string
	Resolution string
	ImageURL   *string
	Error      *string
	Retries    int
	CreatedAt  time.Time
}

func (p *Postgres) CreateKieTask(ctx context.Context, taskID string, tgID int64, mode, prompt string, mediaURLs []string, aspect, resolution string) error {
	raw, err := json.Marshal(mediaURLs)
	if err != nil {
		return err
	}
	if resolution == "" {
		resolution = "2K"
	}
	const q = `
		INSERT INTO kie_tasks (task_id, tg_id, mode, prompt, media_urls, aspect, resolution, state)
		VALUES ($1, $2, $3, $4, $5::jsonb, $6, $7, 'queued')`
	_, err = p.Pool.Exec(ctx, q, taskID, tgID, mode, prompt, string(raw), aspect, resolution)
	return err
}

func (p *Postgres) SetKieTaskKieID(ctx context.Context, id, kieTaskID string) error {
	const q = `UPDATE kie_tasks SET kie_task_id=$2, updated_at=NOW() WHERE task_id=$1`
	_, err := p.Pool.Exec(ctx, q, id, kieTaskID)
	return err
}

func (p *Postgres) GetKieTaskByKieID(ctx context.Context, kieTaskID string) (KieTask, error) {
	const q = `
		SELECT task_id, kie_task_id, tg_id, state, mode, prompt, media_urls, aspect, resolution, image_url, error, retries, created_at
		FROM kie_tasks WHERE kie_task_id = $1`
	var t KieTask
	var raw []byte
	err := p.Pool.QueryRow(ctx, q, kieTaskID).Scan(
		&t.TaskID, &t.KieTaskID, &t.TgID, &t.State, &t.Mode, &t.Prompt, &raw, &t.Aspect, &t.Resolution,
		&t.ImageURL, &t.Error, &t.Retries, &t.CreatedAt)
	if errors.Is(err, pgx.ErrNoRows) {
		return KieTask{}, ErrUserNotFound
	}
	if err != nil {
		return KieTask{}, err
	}
	if err := json.Unmarshal(raw, &t.MediaURLs); err != nil {
		return KieTask{}, err
	}
	return t, nil
}

func (p *Postgres) IncrementKieTaskRetries(ctx context.Context, id string) error {
	const q = `UPDATE kie_tasks SET retries=retries+1, updated_at=NOW() WHERE task_id=$1`
	_, err := p.Pool.Exec(ctx, q, id)
	return err
}

func (p *Postgres) GetKieTask(ctx context.Context, taskID string) (KieTask, error) {
	const q = `
		SELECT task_id, kie_task_id, tg_id, state, mode, prompt, media_urls, aspect, resolution, image_url, error, retries, created_at
		FROM kie_tasks WHERE task_id = $1`
	var t KieTask
	var raw []byte
	err := p.Pool.QueryRow(ctx, q, taskID).Scan(
		&t.TaskID, &t.KieTaskID, &t.TgID, &t.State, &t.Mode, &t.Prompt, &raw, &t.Aspect, &t.Resolution,
		&t.ImageURL, &t.Error, &t.Retries, &t.CreatedAt)
	if errors.Is(err, pgx.ErrNoRows) {
		return KieTask{}, ErrUserNotFound
	}
	if err != nil {
		return KieTask{}, err
	}
	if err := json.Unmarshal(raw, &t.MediaURLs); err != nil {
		return KieTask{}, err
	}
	return t, nil
}

func (p *Postgres) MarkKieTaskSuccess(ctx context.Context, taskID, imageURL string) error {
	const q = `
		UPDATE kie_tasks SET state='success', image_url=$2, updated_at=NOW()
		WHERE task_id=$1 AND state IN ('queued','running')`
	_, err := p.Pool.Exec(ctx, q, taskID, imageURL)
	return err
}

func (p *Postgres) MarkKieTaskFailed(ctx context.Context, taskID, errMsg string) error {
	const q = `
		UPDATE kie_tasks SET state='failed', error=$2, updated_at=NOW()
		WHERE task_id=$1 AND state IN ('queued','running')`
	_, err := p.Pool.Exec(ctx, q, taskID, errMsg)
	return err
}

func (p *Postgres) ReplaceKieTaskID(ctx context.Context, oldID, newID string) error {
	const q = `
		UPDATE kie_tasks SET task_id=$2, retries=retries+1, updated_at=NOW()
		WHERE task_id=$1`
	_, err := p.Pool.Exec(ctx, q, oldID, newID)
	return err
}

const chatTTL = `30 minutes`

type ChatMessage struct {
	Role      string    `json:"role"`
	Content   string    `json:"content"`
	CreatedAt time.Time `json:"ts"`
}

func (p *Postgres) AppendChatMessage(ctx context.Context, tgID int64, role, content string) error {
	_, err := p.Pool.Exec(ctx,
		`INSERT INTO chat_history (tg_id, role, content) VALUES ($1, $2, $3)`,
		tgID, role, content)
	if err != nil {
		return err
	}
	// Purge messages older than TTL for this user (best-effort)
	_, _ = p.Pool.Exec(ctx,
		`DELETE FROM chat_history WHERE tg_id = $1 AND created_at < NOW() - INTERVAL '`+chatTTL+`'`,
		tgID)
	return nil
}

func (p *Postgres) RecentChatMessages(ctx context.Context, tgID int64, limit int) ([]ChatMessage, error) {
	if limit <= 0 || limit > 50 {
		limit = 10
	}
	const q = `
		SELECT role, content, created_at FROM (
			SELECT role, content, created_at
			FROM chat_history
			WHERE tg_id = $1
			  AND created_at > NOW() - INTERVAL '` + chatTTL + `'
			ORDER BY created_at DESC
			LIMIT $2
		) t ORDER BY created_at ASC`
	rows, err := p.Pool.Query(ctx, q, tgID, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	out := make([]ChatMessage, 0)
	for rows.Next() {
		var m ChatMessage
		if err := rows.Scan(&m.Role, &m.Content, &m.CreatedAt); err != nil {
			return nil, err
		}
		out = append(out, m)
	}
	return out, rows.Err()
}

// AddChatSpent increments chat_spent_rub for the user by the given amount.
func (p *Postgres) AddChatSpent(ctx context.Context, tgID int64, rubles float64) error {
	_, err := p.Pool.Exec(ctx,
		`UPDATE users SET chat_spent_rub = chat_spent_rub + $2 WHERE tg_id = $1`,
		tgID, rubles)
	return err
}

func (p *Postgres) ClearChatHistory(ctx context.Context, tgID int64) error {
	_, err := p.Pool.Exec(ctx, `DELETE FROM chat_history WHERE tg_id = $1`, tgID)
	return err
}

func (p *Postgres) GetRecentChatHistory(ctx context.Context, tgID int64) ([]ChatMessage, error) {
	return p.RecentChatMessages(ctx, tgID, 50)
}

func (p *Postgres) GetUser(ctx context.Context, tgID int64) (User, error) {
	const q = `
	SELECT tg_id, tg_username, first_name, created_at,
	       subscription, subscription_end_at, subscription_start_at,
	       limits_photo, limits_chat,
	       remaining_photo, remaining_chat,
	       used_photo, used_chat, used_trial,
	       referral_invited, referral_bonus,
	       channel_subscribed, saved_payment_method_id,
	       chat_spent_rub
	FROM users WHERE tg_id = $1`

	var u User
	err := p.Pool.QueryRow(ctx, q, tgID).Scan(
		&u.TgID, &u.TgUsername, &u.FirstName, &u.CreatedAt,
		&u.Subscription, &u.SubscriptionEndAt, &u.SubscriptionStartAt,
		&u.LimitsPhoto, &u.LimitsChat,
		&u.RemainingPhoto, &u.RemainingChat,
		&u.UsedPhoto, &u.UsedChat, &u.UsedTrial,
		&u.ReferralInvited, &u.ReferralBonus,
		&u.ChannelSubscribed, &u.SavedPaymentMethodID,
		&u.ChatSpentRub,
	)
	if errors.Is(err, pgx.ErrNoRows) {
		return User{}, ErrUserNotFound
	}
	if err != nil {
		return User{}, err
	}

	return u, nil
}

// ── Scheduler queries ────────────────────────────────────────────────────────

type SchedulerUser struct {
	TgID                 int64
	FirstName            string
	CreatedAt            time.Time
	Subscription         *string
	SubscriptionStartAt  *time.Time
	SubscriptionEndAt    *time.Time
	UsedPhoto            int
	RemainingPhoto       int
	LimitsPhoto          int
	SavedPaymentMethodID *string
}

func scanSchedulerUsers(rows pgx.Rows) ([]SchedulerUser, error) {
	defer rows.Close()
	out := make([]SchedulerUser, 0)
	for rows.Next() {
		var u SchedulerUser
		if err := rows.Scan(
			&u.TgID, &u.FirstName, &u.CreatedAt,
			&u.Subscription, &u.SubscriptionStartAt, &u.SubscriptionEndAt,
			&u.UsedPhoto, &u.RemainingPhoto, &u.LimitsPhoto,
			&u.SavedPaymentMethodID,
		); err != nil {
			return nil, err
		}
		out = append(out, u)
	}
	return out, rows.Err()
}

const schedulerSelect = `
	SELECT tg_id, first_name, created_at,
	       subscription, subscription_start_at, subscription_end_at,
	       used_photo, remaining_photo, limits_photo,
	       saved_payment_method_id
	FROM users `

// UsersForOnboarding1h возвращает пользователей, у которых registered ≥ 1 час назад
// и которые ещё ничего не сгенерировали.
func (p *Postgres) UsersForOnboarding1h(ctx context.Context) ([]SchedulerUser, error) {
	const q = schedulerSelect + `
		WHERE created_at <= NOW() - INTERVAL '1 hour'
		  AND created_at >  NOW() - INTERVAL '7 days'
		  AND used_photo = 0`
	rows, err := p.Pool.Query(ctx, q)
	if err != nil {
		return nil, err
	}
	return scanSchedulerUsers(rows)
}

// UsersInactive1d — прошёл 1 день, генераций нет, доступные есть, нет подписки.
func (p *Postgres) UsersInactive1d(ctx context.Context) ([]SchedulerUser, error) {
	const q = schedulerSelect + `
		WHERE created_at <= NOW() - INTERVAL '1 day'
		  AND created_at >  NOW() - INTERVAL '7 days'
		  AND used_photo = 0
		  AND remaining_photo > 0
		  AND subscription IS NULL`
	rows, err := p.Pool.Query(ctx, q)
	if err != nil {
		return nil, err
	}
	return scanSchedulerUsers(rows)
}

// UsersExpiringIn3Days — активные подписчики, у которых subscription_end_at в окне 2.5–3.5 дней.
func (p *Postgres) UsersExpiringIn3Days(ctx context.Context) ([]SchedulerUser, error) {
	const q = schedulerSelect + `
		WHERE subscription IS NOT NULL
		  AND subscription_end_at IS NOT NULL
		  AND subscription_end_at > NOW()
		  AND subscription_end_at BETWEEN NOW() + INTERVAL '2 days 12 hours'
		                              AND NOW() + INTERVAL '3 days 12 hours'`
	rows, err := p.Pool.Query(ctx, q)
	if err != nil {
		return nil, err
	}
	return scanSchedulerUsers(rows)
}

// UsersSubscriptionExpired — был подписан, но subscription_end_at прошёл и не продлили.
// Признак "не продлили": subscription_end_at в прошлом и subscription IS NOT NULL.
// (ActivateSubscription заменяет subscription_end_at на NOW()+30d, поэтому "истёкшие" остаются с прошедшей датой.)
func (p *Postgres) UsersSubscriptionExpired(ctx context.Context) ([]SchedulerUser, error) {
	const q = schedulerSelect + `
		WHERE subscription IS NOT NULL
		  AND subscription_end_at IS NOT NULL
		  AND subscription_end_at < NOW()
		  AND subscription_end_at > NOW() - INTERVAL '14 days'`
	rows, err := p.Pool.Query(ctx, q)
	if err != nil {
		return nil, err
	}
	return scanSchedulerUsers(rows)
}

// UsersForAutoRenewal — активные подписчики, у которых subscription_end_at в ближайшие 2 часа
// и есть сохранённый метод оплаты. Планировщик использует TryClaimNotification для идемпотентности.
func (p *Postgres) UsersForAutoRenewal(ctx context.Context) ([]SchedulerUser, error) {
	const q = schedulerSelect + `
		WHERE subscription IS NOT NULL
		  AND subscription_end_at IS NOT NULL
		  AND subscription_end_at BETWEEN NOW() AND NOW() + INTERVAL '2 hours'
		  AND saved_payment_method_id IS NOT NULL
		  AND saved_payment_method_id <> ''`
	rows, err := p.Pool.Query(ctx, q)
	if err != nil {
		return nil, err
	}
	return scanSchedulerUsers(rows)
}

// UsersActiveLite10d — Lite-подписчики, активны ≥ 10 дней, использовали ≥ 15 фото.
func (p *Postgres) UsersActiveLite10d(ctx context.Context) ([]SchedulerUser, error) {
	const q = schedulerSelect + `
		WHERE subscription = 'lite'
		  AND subscription_start_at IS NOT NULL
		  AND subscription_start_at <= NOW() - INTERVAL '10 days'
		  AND subscription_end_at > NOW()
		  AND used_photo >= 15`
	rows, err := p.Pool.Query(ctx, q)
	if err != nil {
		return nil, err
	}
	return scanSchedulerUsers(rows)
}

// ── Dashboard metrics ─────────────────────────────────────────────────────────

type ChartPoint struct {
	Date  string  `json:"date"`
	Value float64 `json:"value"`
}

const litePriceRub = 349.0
const proPriceRub = 899.0

type DashboardMetrics struct {
	// Block 1: Users
	TotalUsers    int `json:"total_users"`
	NewUsersToday int `json:"new_users_today"`
	FreeTotal     int `json:"free_total"`
	FreeNewToday  int `json:"free_new_today"`
	LiteTotal     int `json:"lite_total"`
	LiteNewToday  int `json:"lite_new_today"`
	ProTotal      int `json:"pro_total"`
	ProNewToday   int `json:"pro_new_today"`

	// Block 2: Revenue
	MRR          float64 `json:"mrr"`
	NewMRR       float64 `json:"new_mrr"`
	NRR          float64 `json:"nrr"`
	ChurnRate    float64 `json:"churn_rate"`
	RevenueChurn float64 `json:"revenue_churn"`
	LTVAvg       float64 `json:"ltv_avg"`

	// Block 3: Retention
	RetentionM1    float64 `json:"retention_m1"`
	RetentionM3    float64 `json:"retention_m3"`
	FreeToPaidPct  float64 `json:"free_to_paid_pct"`
	ReachedPayPct  float64 `json:"reached_pay_pct"`

	// Block 4: Activity
	DAU         int     `json:"dau"`
	MAU         int     `json:"mau"`
	DAUMAURatio float64 `json:"dau_mau_ratio"`

	// Block 5: Costs & P&L
	PhotoCostTotal float64 `json:"photo_cost_total"`
	PhotoCostMonth float64 `json:"photo_cost_month"`
	PhotoCostToday float64 `json:"photo_cost_today"`
	ChatCostTotal  float64 `json:"chat_cost_total"`
	Gens2K         int     `json:"gens_2k"`
	Gens4K         int     `json:"gens_4k"`
}

func (p *Postgres) GetDashboardMetrics(ctx context.Context) (*DashboardMetrics, error) {
	m := &DashboardMetrics{}

	// Block 1: Users
	const qUsers = `
		SELECT
			COUNT(*),
			COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE),
			COUNT(*) FILTER (WHERE subscription IS NULL OR subscription_end_at <= NOW()),
			COUNT(*) FILTER (WHERE (subscription IS NULL OR subscription_end_at <= NOW()) AND created_at >= CURRENT_DATE),
			COUNT(*) FILTER (WHERE subscription = 'lite' AND subscription_end_at > NOW()),
			COUNT(*) FILTER (WHERE subscription = 'lite' AND subscription_end_at > NOW() AND subscription_start_at >= CURRENT_DATE),
			COUNT(*) FILTER (WHERE subscription = 'pro'  AND subscription_end_at > NOW()),
			COUNT(*) FILTER (WHERE subscription = 'pro'  AND subscription_end_at > NOW() AND subscription_start_at >= CURRENT_DATE)
		FROM users`
	if err := p.Pool.QueryRow(ctx, qUsers).Scan(
		&m.TotalUsers, &m.NewUsersToday,
		&m.FreeTotal, &m.FreeNewToday,
		&m.LiteTotal, &m.LiteNewToday,
		&m.ProTotal, &m.ProNewToday,
	); err != nil {
		return nil, err
	}

	// Block 2: Revenue — MRR, New MRR, NRR, Churn, LTV
	m.MRR = float64(m.LiteTotal)*litePriceRub + float64(m.ProTotal)*proPriceRub

	// MRR at start of current calendar month (subs active on that day)
	var liteAtSOM, proAtSOM int
	const qSOM = `
		SELECT
			COUNT(*) FILTER (WHERE subscription = 'lite'),
			COUNT(*) FILTER (WHERE subscription = 'pro')
		FROM users
		WHERE subscription IS NOT NULL
		  AND subscription_start_at < DATE_TRUNC('month', NOW())
		  AND subscription_end_at   > DATE_TRUNC('month', NOW())`
	if err := p.Pool.QueryRow(ctx, qSOM).Scan(&liteAtSOM, &proAtSOM); err != nil {
		return nil, err
	}
	mrrSOM := float64(liteAtSOM)*litePriceRub + float64(proAtSOM)*proPriceRub

	// New MRR = subscriptions that started this month (first-time payers), active now
	var liteNew, proNew int
	const qNewMRR = `
		SELECT
			COUNT(*) FILTER (WHERE subscription = 'lite'),
			COUNT(*) FILTER (WHERE subscription = 'pro')
		FROM users
		WHERE subscription IS NOT NULL
		  AND subscription_start_at >= DATE_TRUNC('month', NOW())
		  AND subscription_end_at > NOW()
		  AND tg_id NOT IN (
			  SELECT DISTINCT tg_id FROM payments
			  WHERE status = 'paid' AND created_at < DATE_TRUNC('month', NOW())
		  )`
	if err := p.Pool.QueryRow(ctx, qNewMRR).Scan(&liteNew, &proNew); err != nil {
		return nil, err
	}
	m.NewMRR = float64(liteNew)*litePriceRub + float64(proNew)*proPriceRub

	// Churned this month = were active at SOM, now expired and not renewed
	var liteChurned, proChurned int
	const qChurn = `
		SELECT
			COUNT(*) FILTER (WHERE subscription = 'lite'),
			COUNT(*) FILTER (WHERE subscription = 'pro')
		FROM users
		WHERE subscription IS NOT NULL
		  AND subscription_start_at < DATE_TRUNC('month', NOW())
		  AND subscription_end_at   > DATE_TRUNC('month', NOW())
		  AND subscription_end_at  <= NOW()`
	if err := p.Pool.QueryRow(ctx, qChurn).Scan(&liteChurned, &proChurned); err != nil {
		return nil, err
	}
	churnedMRR := float64(liteChurned)*litePriceRub + float64(proChurned)*proPriceRub

	subsAtSOM := liteAtSOM + proAtSOM
	if subsAtSOM > 0 {
		m.ChurnRate = float64(liteChurned+proChurned) / float64(subsAtSOM) * 100
		m.RevenueChurn = churnedMRR / mrrSOM * 100
	}
	if mrrSOM > 0 {
		m.NRR = m.MRR / mrrSOM * 100
	} else {
		m.NRR = 100
	}

	// LTV avg = total paid / distinct paying users
	var ltvAvg float64
	const qLTV = `
		SELECT COALESCE(AVG(u_total), 0) FROM (
			SELECT tg_id, SUM(amount::numeric) AS u_total
			FROM payments WHERE status = 'paid'
			GROUP BY tg_id
		) t`
	if err := p.Pool.QueryRow(ctx, qLTV).Scan(&ltvAvg); err != nil {
		return nil, err
	}
	m.LTVAvg = ltvAvg

	// Block 3: Retention
	// M1 cohort: registered 25-35 days ago, active sub now
	var m1Cohort, m1Retained int
	const qM1 = `
		SELECT COUNT(*),
		       COUNT(*) FILTER (WHERE subscription IS NOT NULL AND subscription_end_at > NOW())
		FROM users
		WHERE created_at BETWEEN NOW() - INTERVAL '35 days' AND NOW() - INTERVAL '25 days'`
	if err := p.Pool.QueryRow(ctx, qM1).Scan(&m1Cohort, &m1Retained); err != nil {
		return nil, err
	}
	if m1Cohort > 0 {
		m.RetentionM1 = float64(m1Retained) / float64(m1Cohort) * 100
	}

	// M3 cohort: registered 80-100 days ago, active sub now
	var m3Cohort, m3Retained int
	const qM3 = `
		SELECT COUNT(*),
		       COUNT(*) FILTER (WHERE subscription IS NOT NULL AND subscription_end_at > NOW())
		FROM users
		WHERE created_at BETWEEN NOW() - INTERVAL '100 days' AND NOW() - INTERVAL '80 days'`
	if err := p.Pool.QueryRow(ctx, qM3).Scan(&m3Cohort, &m3Retained); err != nil {
		return nil, err
	}
	if m3Cohort > 0 {
		m.RetentionM3 = float64(m3Retained) / float64(m3Cohort) * 100
	}

	// Free → Paid this month: new payers this month who never paid before / free users before SOM
	var newPayers, freeBeforeSOM int
	const qF2P = `
		WITH new_p AS (
			SELECT DISTINCT tg_id FROM payments
			WHERE status = 'paid' AND created_at >= DATE_TRUNC('month', NOW())
			  AND tg_id NOT IN (
				SELECT DISTINCT tg_id FROM payments
				WHERE status = 'paid' AND created_at < DATE_TRUNC('month', NOW())
			  )
		)
		SELECT
			(SELECT COUNT(*) FROM new_p),
			(SELECT COUNT(*) FROM users
			 WHERE created_at < DATE_TRUNC('month', NOW())
			   AND tg_id NOT IN (
				 SELECT DISTINCT tg_id FROM payments
				 WHERE status = 'paid' AND created_at < DATE_TRUNC('month', NOW())
			   ))`
	if err := p.Pool.QueryRow(ctx, qF2P).Scan(&newPayers, &freeBeforeSOM); err != nil {
		return nil, err
	}
	if freeBeforeSOM > 0 {
		m.FreeToPaidPct = float64(newPayers) / float64(freeBeforeSOM) * 100
	}

	// % reached payment (ever paid / total users)
	var everpaid int
	const qPaid = `SELECT COUNT(DISTINCT tg_id) FROM payments WHERE status = 'paid'`
	if err := p.Pool.QueryRow(ctx, qPaid).Scan(&everpaid); err != nil {
		return nil, err
	}
	if m.TotalUsers > 0 {
		m.ReachedPayPct = float64(everpaid) / float64(m.TotalUsers) * 100
	}

	// Block: Costs & P&L
	const qCosts = `
		SELECT
			COALESCE(SUM(CASE WHEN resolution='2K' THEN 4.8 WHEN resolution='4K' THEN 7.2 ELSE 4.8 END), 0),
			COALESCE(SUM(CASE WHEN resolution='2K' AND created_at >= DATE_TRUNC('month',NOW()) THEN 4.8
			                  WHEN resolution='4K' AND created_at >= DATE_TRUNC('month',NOW()) THEN 7.2
			                  ELSE 0 END), 0),
			COALESCE(SUM(CASE WHEN resolution='2K' AND created_at >= CURRENT_DATE THEN 4.8
			                  WHEN resolution='4K' AND created_at >= CURRENT_DATE THEN 7.2
			                  ELSE 0 END), 0),
			COUNT(*) FILTER (WHERE resolution='2K' AND state='success'),
			COUNT(*) FILTER (WHERE resolution='4K' AND state='success')
		FROM kie_tasks
		WHERE state = 'success'`
	if err := p.Pool.QueryRow(ctx, qCosts).Scan(
		&m.PhotoCostTotal, &m.PhotoCostMonth, &m.PhotoCostToday,
		&m.Gens2K, &m.Gens4K,
	); err != nil {
		return nil, err
	}

	var chatSpentTotal float64
	if err := p.Pool.QueryRow(ctx, `SELECT COALESCE(SUM(chat_spent_rub),0) FROM users`).Scan(&chatSpentTotal); err != nil {
		return nil, err
	}
	m.ChatCostTotal = chatSpentTotal

	// Block 4: DAU / MAU (active = made a generation or sent a chat message)
	const qDAU = `
		SELECT COUNT(DISTINCT tg_id) FROM (
			SELECT tg_id FROM generations  WHERE created_at >= CURRENT_DATE
			UNION
			SELECT tg_id FROM chat_history WHERE role = 'user' AND created_at >= CURRENT_DATE
		) t`
	if err := p.Pool.QueryRow(ctx, qDAU).Scan(&m.DAU); err != nil {
		return nil, err
	}

	const qMAU = `
		SELECT COUNT(DISTINCT tg_id) FROM (
			SELECT tg_id FROM generations  WHERE created_at >= NOW() - INTERVAL '30 days'
			UNION
			SELECT tg_id FROM chat_history WHERE role = 'user' AND created_at >= NOW() - INTERVAL '30 days'
		) t`
	if err := p.Pool.QueryRow(ctx, qMAU).Scan(&m.MAU); err != nil {
		return nil, err
	}
	if m.MAU > 0 {
		m.DAUMAURatio = float64(m.DAU) / float64(m.MAU) * 100
	}

	return m, nil
}

// GetChartData returns daily time series for a given metric over the last `days` days.
// Supported metrics: new_users, revenue, gens, dau, mrr
func (p *Postgres) GetChartData(ctx context.Context, metric string, days int) ([]ChartPoint, error) {
	if days <= 0 || days > 365 {
		days = 30
	}

	var query string
	switch metric {
	case "new_users":
		query = `
			WITH days AS (
				SELECT d::date AS d FROM generate_series(
					CURRENT_DATE - ($1-1) * '1 day'::interval,
					CURRENT_DATE, '1 day'::interval
				) d
			)
			SELECT days.d::text, COUNT(u.tg_id)::float8
			FROM days LEFT JOIN users u ON u.created_at::date = days.d
			GROUP BY days.d ORDER BY days.d`
	case "revenue":
		query = `
			WITH days AS (
				SELECT d::date AS d FROM generate_series(
					CURRENT_DATE - ($1-1) * '1 day'::interval,
					CURRENT_DATE, '1 day'::interval
				) d
			)
			SELECT days.d::text, COALESCE(SUM(p.amount::numeric), 0)::float8
			FROM days
			LEFT JOIN payments p ON p.updated_at::date = days.d AND p.status = 'paid'
			GROUP BY days.d ORDER BY days.d`
	case "gens":
		query = `
			WITH days AS (
				SELECT d::date AS d FROM generate_series(
					CURRENT_DATE - ($1-1) * '1 day'::interval,
					CURRENT_DATE, '1 day'::interval
				) d
			)
			SELECT days.d::text, COUNT(g.id)::float8
			FROM days LEFT JOIN generations g ON g.created_at::date = days.d
			GROUP BY days.d ORDER BY days.d`
	case "dau":
		query = `
			WITH days AS (
				SELECT d::date AS d FROM generate_series(
					CURRENT_DATE - ($1-1) * '1 day'::interval,
					CURRENT_DATE, '1 day'::interval
				) d
			),
			active AS (
				SELECT created_at::date AS d, tg_id FROM generations
				WHERE created_at >= CURRENT_DATE - $1 * '1 day'::interval
				UNION
				SELECT created_at::date AS d, tg_id FROM chat_history
				WHERE role = 'user' AND created_at >= CURRENT_DATE - $1 * '1 day'::interval
			)
			SELECT days.d::text, COUNT(DISTINCT active.tg_id)::float8
			FROM days LEFT JOIN active ON active.d = days.d
			GROUP BY days.d ORDER BY days.d`
	case "mrr":
		query = `
			WITH days AS (
				SELECT d::date AS d FROM generate_series(
					CURRENT_DATE - ($1-1) * '1 day'::interval,
					CURRENT_DATE, '1 day'::interval
				) d
			)
			SELECT days.d::text,
				COALESCE(SUM(
					CASE WHEN u.subscription='lite' THEN 349
					     WHEN u.subscription='pro'  THEN 899
					     ELSE 0 END
				), 0)::float8
			FROM days
			LEFT JOIN users u ON u.subscription IS NOT NULL
				AND u.subscription_start_at::date <= days.d
				AND u.subscription_end_at::date   >  days.d
			GROUP BY days.d ORDER BY days.d`
	default:
		return nil, nil
	}

	rows, err := p.Pool.Query(ctx, query, days)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	out := make([]ChartPoint, 0)
	for rows.Next() {
		var pt ChartPoint
		if err := rows.Scan(&pt.Date, &pt.Value); err != nil {
			return nil, err
		}
		out = append(out, pt)
	}
	return out, rows.Err()
}
