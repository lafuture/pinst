import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  listNotifications,
  markNotificationSeen,
  recheckChannel,
  type InAppNotification,
} from '../api/notifications'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'

const POLL_MS = 60_000

export default function InAppNotificationOverlay() {
  const [queue, setQueue] = useState<InAppNotification[]>([])
  const [busy, setBusy] = useState(false)
  const navigate = useNavigate()
  const { hapticFeedback } = useTelegram()
  const { user, refetch } = useSubscription()

  const fetchQueue = async () => {
    try {
      const res = await listNotifications()
      const items = res.data.items ?? []
      if (items.length > 0) hapticFeedback('medium')
      setQueue(items)
    } catch {
      /* silent */
    }
  }

  // Делаем первый запрос только когда auth завершился и user доступен (токен есть).
  // Без этого первый fetch уходит без токена → 401, а следующий только через 60s.
  useEffect(() => {
    if (!user) return
    void fetchQueue()
    const t = setInterval(fetchQueue, POLL_MS)
    return () => clearInterval(t)
  }, [user?.telegram_id])

  const current = queue[0]
  if (!current) return null

  const dismiss = async () => {
    if (busy) return
    setBusy(true)
    hapticFeedback('light')
    const id = current.id
    setQueue(q => q.slice(1))
    try {
      await markNotificationSeen(id)
    } catch {
      /* ignore */
    } finally {
      setBusy(false)
    }
  }

  const openUrl = (url: string) => {
    try {
      // Внутри Telegram WebApp window.open не работает — используем Telegram API
      const tg = (window as any)?.Telegram?.WebApp
      if (tg?.openTelegramLink && url.includes('t.me')) {
        tg.openTelegramLink(url)
      } else if (tg?.openLink) {
        tg.openLink(url)
      } else {
        window.open(url, '_blank')
      }
    } catch {
      window.open(url, '_blank')
    }
  }

  const handleCta = async () => {
    if (busy) return
    setBusy(true)
    hapticFeedback('medium')
    const action = current.cta_action ?? '/create'

    // Для welcome_unsubscribed: кнопка открывает канал, но НЕ убирает уведомление —
    // иначе "Я подписался — проверить" исчезнет раньше времени.
    if (current.kind === 'welcome_unsubscribed') {
      if (action.startsWith('http://') || action.startsWith('https://')) {
        openUrl(action)
      }
      setBusy(false)
      return
    }

    // Для всех остальных: действие + убрать уведомление
    const id = current.id
    try { await markNotificationSeen(id) } catch { /* ignore */ }
    setQueue(q => q.slice(1))

    if (action.startsWith('http://') || action.startsWith('https://')) {
      openUrl(action)
    } else if (action.startsWith('/')) {
      navigate(action)
    }

    if (
      current.kind === 'welcome_subscribed' ||
      current.kind === 'channel_bonus'
    ) {
      try { refetch() } catch { /* ignore */ }
    }

    setBusy(false)
  }

  const handleSubscribeRecheck = async () => {
    if (busy) return
    setBusy(true)
    hapticFeedback('medium')
    try {
      const res = await recheckChannel()
      if (res.data.subscribed) {
        // Убираем текущее уведомление (welcome_unsubscribed) и обновляем профиль
        const id = current.id
        try { await markNotificationSeen(id) } catch { /* ignore */ }
        setQueue(q => q.slice(1))
        try { refetch() } catch { /* ignore */ }
        // Подтягиваем новые уведомления (channel_bonus уже лежит на сервере)
        await fetchQueue()
      }
    } catch {
      /* ignore */
    } finally {
      setBusy(false)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 600,
        background: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, #13121f 0%, #0a0a0f 100%)',
          border: '1px solid rgba(139,92,246,0.3)',
          borderRadius: '24px 24px 0 0',
          padding: '28px 24px',
          paddingBottom: 'max(28px, calc(28px + env(safe-area-inset-bottom)))',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 44, marginBottom: 14 }}>
          {iconForKind(current.kind)}
        </div>
        {current.title && (
          <p style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>
            {current.title}
          </p>
        )}
        <p style={{
          color: 'rgba(255,255,255,0.65)', fontSize: 14, margin: '0 0 22px', lineHeight: 1.5,
        }}>
          {current.message}
        </p>

        {current.cta_label && (
          <button
            onClick={handleCta}
            disabled={busy}
            style={primaryBtn}
          >
            {current.cta_label}
          </button>
        )}

        {current.kind === 'welcome_unsubscribed' && (
          <button
            onClick={handleSubscribeRecheck}
            disabled={busy}
            style={{ ...secondaryBtn, marginTop: 10 }}
          >
            Я подписался — проверить
          </button>
        )}

        {!current.cta_label && (
          <button
            onClick={dismiss}
            disabled={busy}
            style={primaryBtn}
          >
            Понятно
          </button>
        )}

        {current.cta_label && (
          <button
            onClick={dismiss}
            disabled={busy}
            style={{ ...textBtn, marginTop: 10 }}
          >
            Позже
          </button>
        )}
      </div>
    </div>
  )
}

function iconForKind(kind: string): string {
  switch (kind) {
    case 'welcome_subscribed': return '✨'
    case 'welcome_unsubscribed': return '🎁'
    case 'channel_bonus': return '🎉'
    case 'low_quota': return '🔔'
    case 'quota_exhausted': return '😔'
    case 'sub_expired': return '⏰'
    case 'lite_upsell_10d': return '🔥'
    default: return '✨'
  }
}

const primaryBtn: React.CSSProperties = {
  width: '100%',
  background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  border: 'none',
  borderRadius: 14,
  color: '#fff',
  fontSize: 16,
  fontWeight: 600,
  padding: '15px 24px',
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
  boxShadow: '0 0 24px rgba(139,92,246,0.5)',
}

const secondaryBtn: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 14,
  color: '#fff',
  fontSize: 15,
  fontWeight: 500,
  padding: '13px 24px',
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
}

const textBtn: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  color: 'rgba(255,255,255,0.55)',
  fontSize: 14,
  fontWeight: 500,
  padding: '10px',
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
}
