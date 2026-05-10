CREATE TABLE kie_tasks (
    task_id    TEXT        PRIMARY KEY,
    tg_id      BIGINT      NOT NULL,
    state      VARCHAR(16) NOT NULL DEFAULT 'queued',
    mode       VARCHAR(32) NOT NULL,
    prompt     TEXT        NOT NULL,
    media_urls JSONB       NOT NULL,
    aspect     VARCHAR(16) NOT NULL DEFAULT 'auto',
    image_url  TEXT,
    error      TEXT,
    retries    INT         NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX kie_tasks_tg_id_idx ON kie_tasks (tg_id, created_at DESC);
