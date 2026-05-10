CREATE TABLE user_models (
    tg_id      BIGINT      PRIMARY KEY,
    photos     JSONB       NOT NULL DEFAULT '[]'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE chat_history (
    id         BIGSERIAL   PRIMARY KEY,
    tg_id      BIGINT      NOT NULL,
    role       VARCHAR(16) NOT NULL,
    content    TEXT        NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX chat_history_tg_id_created_at_idx ON chat_history (tg_id, created_at);
