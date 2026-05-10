CREATE TABLE generations (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    tg_id       BIGINT      NOT NULL,
    image_url   TEXT        NOT NULL,
    prompt      TEXT,
    mode        VARCHAR(32) NOT NULL DEFAULT 'simple',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX generations_tg_id_created_at_idx ON generations (tg_id, created_at DESC);
