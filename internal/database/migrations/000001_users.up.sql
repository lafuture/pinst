CREATE TABLE users(
    tg_id BIGINT PRIMARY KEY,
    tg_username VARCHAR(255),
    first_name VARCHAR(255) NOT NULL DEFAULT '',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    subscription          VARCHAR(50),
    subscription_end_at   TIMESTAMPTZ,
    subscription_start_at TIMESTAMPTZ,
    limits_photo       INT    NOT NULL DEFAULT 0,
    limits_chat       INT    NOT NULL DEFAULT 0,
    remaining_photo     INT    NOT NULL DEFAULT 0,
    remaining_chat     INT    NOT NULL DEFAULT 0,
    used_photo          INT    NOT NULL DEFAULT 0,
    used_chat          INT    NOT NULL DEFAULT 0,
    used_trial    INT    NOT NULL DEFAULT 0,
    referral_invited INT NOT NULL DEFAULT 0,
    referral_bonus   INT NOT NULL DEFAULT 0,
    referrer_id      BIGINT NOT NULL DEFAULT 0
);
