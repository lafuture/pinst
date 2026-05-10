import { useLocation, useNavigate } from 'react-router-dom'
import { useTelegram } from '../hooks/useTelegram'

export default function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const { hapticFeedback } = useTelegram()

  const go = (path: string) => {
    hapticFeedback('light')
    navigate(path)
  }

  const isCreate = location.pathname === '/create'
  const isCatalog = location.pathname === '/catalog'
  const isChat = location.pathname === '/chat'

  const iconColor = (active: boolean) => active ? '#a78bfa' : 'rgba(255,255,255,0.4)'
  const labelColor = (active: boolean) => active ? '#a78bfa' : 'rgba(255,255,255,0.4)'

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: 84,
        background: 'rgba(10,10,15,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(139,92,246,0.15)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 14px)',
        zIndex: 100,
      }}
    >
      {/* Каталог */}
      <button
        onClick={() => go('/catalog')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          padding: '0 0 10px', flex: 1,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="7" height="7" rx="2" stroke={iconColor(isCatalog)} strokeWidth="1.8" fill={isCatalog ? 'rgba(139,92,246,0.2)' : 'none'} />
          <rect x="14" y="3" width="7" height="7" rx="2" stroke={iconColor(isCatalog)} strokeWidth="1.8" fill={isCatalog ? 'rgba(139,92,246,0.2)' : 'none'} />
          <rect x="3" y="14" width="7" height="7" rx="2" stroke={iconColor(isCatalog)} strokeWidth="1.8" fill={isCatalog ? 'rgba(139,92,246,0.2)' : 'none'} />
          <rect x="14" y="14" width="7" height="7" rx="2" stroke={iconColor(isCatalog)} strokeWidth="1.8" fill={isCatalog ? 'rgba(139,92,246,0.2)' : 'none'} />
        </svg>
        <span style={{ fontSize: 10, color: labelColor(isCatalog), fontFamily: 'Inter, sans-serif', fontWeight: isCatalog ? 600 : 400 }}>
          Каталог
        </span>
      </button>

      {/* Создать — поднята над панелью */}
      <button
        onClick={() => go('/create')}
        style={{
          flex: 1,
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          padding: '0 0 8px',
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
            boxShadow: isCreate
              ? '0 0 24px rgba(139,92,246,0.9), 0 4px 16px rgba(0,0,0,0.5)'
              : '0 0 16px rgba(139,92,246,0.6), 0 4px 12px rgba(0,0,0,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'translateY(-14px)',
            border: '3px solid #0a0a0f',
            transition: 'box-shadow 0.2s ease',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span style={{ fontSize: 10, color: labelColor(isCreate), fontFamily: 'Inter, sans-serif', fontWeight: isCreate ? 600 : 400, marginTop: -10 }}>
          Создать
        </span>
      </button>

      {/* Чат */}
      <button
        onClick={() => go('/chat')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          padding: '0 0 10px', flex: 1,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 15C21 15.5 20.8 16 20.4 16.4C20 16.8 19.5 17 19 17H7L3 21V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C19.5 3 20 3.2 20.4 3.6C20.8 4 21 4.5 21 5V15Z"
            stroke={iconColor(isChat)} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            fill={isChat ? 'rgba(139,92,246,0.2)' : 'none'}
          />
          {isChat && (
            <>
              <circle cx="8.5" cy="10" r="1" fill="#a78bfa"/>
              <circle cx="12" cy="10" r="1" fill="#a78bfa"/>
              <circle cx="15.5" cy="10" r="1" fill="#a78bfa"/>
            </>
          )}
        </svg>
        <span style={{ fontSize: 10, color: labelColor(isChat), fontFamily: 'Inter, sans-serif', fontWeight: isChat ? 600 : 400 }}>
          Чат
        </span>
      </button>
    </div>
  )
}
