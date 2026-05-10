import { useEffect, useState } from 'react'
import { initAuth } from './api/auth'
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useTelegram } from './hooks/useTelegram'
import { useSubscription } from './hooks/useSubscription'
import BottomNav from './components/BottomNav'
import DecorBackground from './components/DecorBackground'
import Toast from './components/Toast'
import InAppNotificationOverlay from './components/InAppNotificationOverlay'
import CatalogScreen from './screens/CatalogScreen'
import CreateScreen from './screens/CreateScreen'
import TariffsScreen from './screens/TariffsScreen'
import ProfileScreen from './screens/ProfileScreen'
import ChatScreen from './screens/ChatScreen'
import { APP_HEADER_TOP } from './components/ScreenTopBar'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div key={location.pathname} style={{ minHeight: '100%', height: '100%' }}>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/catalog" replace />} />
        <Route path="/catalog" element={<CatalogScreen />} />
        <Route path="/create" element={<CreateScreen />} />
        <Route path="/tariffs" element={<TariffsScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/chat" element={<ChatScreen />} />
        <Route path="*" element={<Navigate to="/catalog" replace />} />
      </Routes>
    </div>
  )
}

function BonusNotification() {
  const { user } = useSubscription()
  const { hapticFeedback } = useTelegram()
  const [bonusToShow, setBonusToShow] = useState(0)
  const [isInvited, setIsInvited] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!user || !user.telegram_id) return
    const keyBonus = `pinst_bonus_seen_${user.telegram_id}`
    const keyInvited = `pinst_invited_seen_${user.telegram_id}`
    const seenBonus = parseInt(localStorage.getItem(keyBonus) ?? '0', 10)
    const seenInvited = parseInt(localStorage.getItem(keyInvited) ?? '0', 10)
    if (user.referral_bonus > seenBonus) {
      setBonusToShow(user.referral_bonus - seenBonus)
      setIsInvited(user.referral_invited <= seenInvited)
      setVisible(true)
      hapticFeedback('medium')
    }
  }, [user?.telegram_id, user?.referral_bonus])

  const dismiss = () => {
    if (!user) return
    hapticFeedback('light')
    localStorage.setItem(`pinst_bonus_seen_${user.telegram_id}`, String(user.referral_bonus))
    localStorage.setItem(`pinst_invited_seen_${user.telegram_id}`, String(user.referral_invited))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 500,
      background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}>
      <div style={{
        background: 'linear-gradient(180deg, #13121f 0%, #0a0a0f 100%)',
        border: '1px solid rgba(139,92,246,0.3)',
        borderRadius: '24px 24px 0 0',
        padding: '28px 24px',
        paddingBottom: 'max(28px, calc(28px + env(safe-area-inset-bottom)))',
        width: '100%',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>🎁</div>
        <p style={{ color: '#ffffff', fontSize: 20, fontWeight: 700, margin: '0 0 8px' }}>
          +{bonusToShow} бонусных генераций!
        </p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, margin: '0 0 24px', lineHeight: 1.5 }}>
          {isInvited
            ? 'Тебя пригласили в Pinst — и ты получаешь бонусные генерации в подарок. Они уже на твоём счёте!'
            : 'Твой друг присоединился к Pinst по твоей реферальной ссылке. Генерации уже на твоём счёте.'}
        </p>
        <button
          onClick={dismiss}
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
            border: 'none', borderRadius: 14,
            color: '#fff', fontSize: 16, fontWeight: 600,
            padding: '15px 24px', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 0 24px rgba(139,92,246,0.5)',
          }}
        >
          Отлично!
        </button>
      </div>
    </div>
  )
}

function AppInner() {
  const navigate = useNavigate()
  const location = useLocation()
  const { onReady, expandApp, setColors, user: tgUser, hapticFeedback } = useTelegram()
  const [offline, setOffline] = useState(!navigator.onLine)

  const showProfileBtn =
    location.pathname !== '/profile' &&
    location.pathname !== '/tariffs' &&
    location.pathname !== '/chat' &&
    location.pathname !== '/catalog' &&
    location.pathname !== '/create'

  const isChat = location.pathname === '/chat'

  useEffect(() => {
    onReady()
    expandApp()
    setColors()
    initAuth()

    const handleOffline = () => setOffline(true)
    const handleOnline = () => setOffline(false)
    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)
    return () => {
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  return (
    <div
      style={{
        minHeight: '100dvh',
        height: '100dvh',
        background: '#0a0a0f',
        fontFamily: 'Inter, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <DecorBackground />

      {showProfileBtn && (
        <button
          type="button"
          className="app-fixed-profile-btn"
          onClick={() => {
            hapticFeedback('light')
            navigate('/profile')
          }}
          aria-label="Профиль"
          style={{
            /* fixed к viewport — одинаково на всех вкладках, не «плывёт» со скроллом #app-main-scroll */
            position: 'fixed',
            top: APP_HEADER_TOP,
            right: 'max(12px, env(safe-area-inset-right))',
            zIndex: 200,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            width: 40,
            height: 40,
            flexShrink: 0,
          }}
        >
          {tgUser?.photo_url ? (
            <img
              src={tgUser.photo_url}
              alt=""
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1.5px solid rgba(139,92,246,0.45)',
                objectFit: 'cover',
                display: 'block',
                boxShadow: '0 0 16px rgba(139,92,246,0.5)',
              }}
            />
          ) : (
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 600,
                color: '#fff',
                border: '1.5px solid rgba(139,92,246,0.45)',
                boxShadow: '0 0 16px rgba(139,92,246,0.5)',
              }}
            >
              {(tgUser?.first_name?.[0] || 'P').toUpperCase()}
            </div>
          )}
        </button>
      )}

      <div
        id="app-main-scroll"
        style={{
          /* 68px = высота BottomNav; чат заполняет область без лишних px — иначе родитель «дрожит» при скролле */
          height: 'calc(100dvh - 84px)',
          overflowY: isChat ? 'hidden' : 'auto',
          overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'none',
          position: 'relative',
        }}
      >
        <AnimatedRoutes />
      </div>

      <BottomNav />

      <Toast
        message="Нет соединения"
        type="error"
        visible={offline}
        onHide={() => {}}
      />

      <BonusNotification />
      <InAppNotificationOverlay />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
