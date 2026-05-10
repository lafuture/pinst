CREATE TABLE payments (
    id         VARCHAR(255) PRIMARY KEY,
    tg_id      BIGINT       NOT NULL REFERENCES users(tg_id),
    plan       VARCHAR(50)  NOT NULL,
    amount     VARCHAR(20)  NOT NULL,
    status     VARCHAR(50)  NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX payments_tg_id_idx ON payments(tg_id);
