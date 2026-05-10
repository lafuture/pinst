ALTER TABLE users
    ADD COLUMN IF NOT EXISTS channel_subscribed BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS saved_payment_method_id VARCHAR(128);

CREATE TABLE IF NOT EXISTS notifications_sent (
    tg_id   BIGINT       NOT NULL,
    kind    VARCHAR(64)  NOT NULL,
    key     VARCHAR(128) NOT NULL DEFAULT '',
    sent_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    PRIMARY KEY (tg_id, kind, key)
);

CREATE TABLE IF NOT EXISTS inapp_notifications (
    id         BIGSERIAL    PRIMARY KEY,
    tg_id      BIGINT       NOT NULL,
    kind       VARCHAR(64)  NOT NULL,
    title      TEXT         NOT NULL DEFAULT '',
    message    TEXT         NOT NULL,
    cta_label  TEXT,
    cta_action TEXT,
    seen_at    TIMESTAMPTZ,
    created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS inapp_notifications_pending_idx
    ON inapp_notifications (tg_id, created_at)
    WHERE seen_at IS NULL;
