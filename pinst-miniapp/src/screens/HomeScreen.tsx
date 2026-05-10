import { useNavigate } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import GenerationCounter from '../components/GenerationCounter'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'

const PLAN_LABELS: Record<string, string> = {
  lite: 'Lite',
  pro: 'Pro',
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}

export default function HomeScreen() {
  const navigate = useNavigate()
  const { user: tgUser, hapticFeedback } = useTelegram()
  const { user, loading } = useSubscription()

  const remaining = user?.remaining_photo ?? 0
  const limit = user?.limits_photo ?? 15
  const isLow = remaining <= 3

  const handleCreate = () => {
    hapticFeedback('light')
    navigate('/create')
  }

  const handleGallery = () => {
    hapticFeedback('light')
    navigate('/gallery')
  }

  const handleTariffs = () => {
    hapticFeedback('light')
    navigate('/tariffs')
  }

  return (
    <div
      style={{
        padding: '24px 16px',
        paddingBottom: 'max(80px, calc(80px + env(safe-area-inset-bottom)))',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0 }}>Добро пожаловать</p>
          <h1 style={{ color: '#ffffff', fontSize: 24, fontWeight: 600, margin: '4px 0 0' }}>
            {tgUser?.first_name || user?.first_name || ''} ✦
          </h1>
        </div>
        <button
          onClick={() => { hapticFeedback('light'); navigate('/profile') }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            position: 'fixed',
            top: 'max(16px, env(safe-area-inset-top))',
            right: 16,
            zIndex: 100,
          }}
        >
          {tgUser?.photo_url ? (
            <img
              src={tgUser.photo_url}
              alt="avatar"
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '2px solid rgba(139,92,246,0.5)',
                objectFit: 'cover',
              }}
            />
          ) : (
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                color: '#fff',
                border: '2px solid rgba(139,92,246,0.5)',
              }}
            >
              {(tgUser?.first_name?.[0] || 'P').toUpperCase()}
            </div>
          )}
        </button>
      </div>

      {/* Counter card */}
      <GlassCard style={{ padding: 20 }}>
        {loading ? (
          <div style={{ height: 60, background: 'rgba(139,92,246,0.1)', borderRadius: 12, animation: 'pulse 1.5s ease-in-out infinite' }} />
        ) : (
          <GenerationCounter remaining={remaining} limit={limit} />
        )}

        {isLow && !loading && (
          <div
            style={{
              marginTop: 12,
              padding: '10px 14px',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ color: '#ef4444', fontSize: 13 }}>Генерации заканчиваются</span>
            <button
              onClick={handleTariffs}
              style={{
                background: 'none',
                border: 'none',
                color: '#ef4444',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
                padding: 0,
              }}
            >
              Пополнить
            </button>
          </div>
        )}
      </GlassCard>

      {/* Subscription status */}
      <GlassCard style={{ padding: 16 }}>
        {loading ? (
          <div style={{ height: 40, background: 'rgba(139,92,246,0.1)', borderRadius: 12, animation: 'pulse 1.5s ease-in-out infinite' }} />
        ) : user?.subscription ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                }}
              />
              <div>
                <p style={{ color: '#ffffff', fontSize: 14, fontWeight: 500, margin: 0 }}>
                  {PLAN_LABELS[user.subscription]}
                </p>
                {user.subscription_end_at && (
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: '2px 0 0' }}>
                    до {formatDate(user.subscription_end_at)}
                  </p>
                )}
              </div>
            </div>
            <span
              style={{
                background: 'rgba(139,92,246,0.2)',
                border: '1px solid rgba(139,92,246,0.4)',
                borderRadius: 100,
                color: '#a78bfa',
                fontSize: 11,
                padding: '3px 10px',
              }}
            >
              Активна
            </span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#ef4444',
                  boxShadow: '0 0 8px rgba(239,68,68,0.6)',
                }}
              />
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, margin: 0 }}>Нет подписки</p>
            </div>
            <button
              onClick={handleTariffs}
              style={{
                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                border: 'none',
                borderRadius: 12,
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
                padding: '8px 14px',
                cursor: 'pointer',
              }}
            >
              Подключить
            </button>
          </div>
        )}
      </GlassCard>

      {/* Main CTA */}
      <Button onClick={handleCreate} style={{ marginTop: 4 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M5 12H19" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
        Создать фото
      </Button>

      {/* Gallery shortcut */}
      <Button variant="secondary" onClick={handleGallery}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#a78bfa" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#a78bfa" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#a78bfa" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#a78bfa" strokeWidth="2"/>
        </svg>
        Моя галерея
      </Button>
    </div>
  )
}
