DROP TABLE IF EXISTS inapp_notifications;
DROP TABLE IF EXISTS notifications_sent;

ALTER TABLE users
    DROP COLUMN IF EXISTS saved_payment_method_id,
    DROP COLUMN IF EXISTS channel_subscribed;
