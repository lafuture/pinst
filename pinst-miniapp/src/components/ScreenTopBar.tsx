import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'

/** Одинаковый верхний отступ с кнопкой профиля (App.tsx, position: fixed top) */
export const APP_HEADER_TOP = 'max(12px, env(safe-area-inset-top))' as const

const barBase: React.CSSProperties = {
  paddingLeft: 16,
  paddingBottom: 12,
  paddingTop: APP_HEADER_TOP,
  borderBottom: '1px solid rgba(139,92,246,0.12)',
  flexShrink: 0,
  display: 'flex',
  gap: 12,
  background: 'rgba(10,10,15,0.94)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  zIndex: 2,
}

const iconWrapStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 16px rgba(139,92,246,0.5)',
  flexShrink: 0,
}

interface ScreenTopBarProps {
  /** Без иконки — только заголовок (например «Каталог», «Создать») */
  icon?: ReactNode
  title: string
  subtitle?: ReactNode
  /** Доп. строка под подзаголовком (например чип пресета) */
  extra?: ReactNode
  /** Профиль в шапке справа; по вертикали по центру блока заголовка (каталог / создать) */
  profileButton?: boolean
}

export default function ScreenTopBar({ icon, title, subtitle, extra, profileButton }: ScreenTopBarProps) {
  const navigate = useNavigate()
  const { hapticFeedback } = useTelegram()
  const { user, loading } = useSubscription()
  const hasSubscription = loading || !!user?.subscription

  const barStyle: React.CSSProperties = {
    ...barBase,
    paddingRight: profileButton ? 16 : 52,
    alignItems: profileButton ? 'center' : 'flex-start',
  }

  return (
    <div style={barStyle}>
      {icon != null && <div style={iconWrapStyle}>{icon}</div>}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: extra ? 6 : 0 }}>
        <div>
          <p style={{ color: '#ffffff', fontSize: 15, fontWeight: 600, margin: 0 }}>{title}</p>
          {subtitle != null && subtitle !== '' && (
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, margin: '2px 0 0', lineHeight: 1.35, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {subtitle}
            </p>
          )}
        </div>
        {extra}
      </div>
      {profileButton && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => { hapticFeedback('light'); navigate('/tariffs') }}
            aria-label="Купить подписку"
            style={{
              visibility: hasSubscription ? 'hidden' : 'visible',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              border: 'none',
              boxShadow: '0 0 14px rgba(168,85,247,0.7), 0 0 28px rgba(236,72,153,0.35)',
              cursor: 'pointer',
              padding: '0 14px',
              height: 34,
              borderRadius: 100,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              color: '#ffffff',
              fontSize: 13,
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            Купить
          </button>
          <button
            type="button"
            onClick={() => { hapticFeedback('light'); navigate('/profile') }}
            aria-label="Профиль"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
              border: '1.5px solid rgba(139,92,246,0.45)',
              cursor: 'pointer',
              padding: 0,
              width: 40,
              height: 40,
              borderRadius: '50%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(139,92,246,0.5)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export const screenShellStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100dvh - 84px)',
  position: 'relative',
  zIndex: 1,
}

export const screenScrollStyle: React.CSSProperties = {
  flex: 1,
  minHeight: 0,
  overflowY: 'auto',
  overflowX: 'hidden',
  WebkitOverflowScrolling: 'touch',
  overscrollBehavior: 'none',
  padding: '16px 16px',
  paddingBottom: 'max(24px, calc(24px + env(safe-area-inset-bottom)))',
}
