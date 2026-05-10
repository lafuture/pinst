import { type ReactNode, type CSSProperties } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  style?: CSSProperties
  fullWidth?: boolean
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  style,
  fullWidth = true,
}: ButtonProps) {
  const base: CSSProperties = {
    border: 'none',
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 600,
    padding: '16px 24px',
    width: fullWidth ? '100%' : 'auto',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'Inter, sans-serif',
    opacity: disabled ? 0.5 : 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  }

  const variants: Record<string, CSSProperties> = {
    primary: {
      background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      color: '#ffffff',
      boxShadow: '0 0 30px rgba(139,92,246,0.5)',
    },
    secondary: {
      background: 'rgba(139,92,246,0.1)',
      border: '1px solid rgba(139,92,246,0.3)',
      color: '#a78bfa',
    },
    ghost: {
      background: 'transparent',
      color: 'rgba(255,255,255,0.3)',
      fontSize: 14,
      padding: '10px 16px',
    },
  }

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
    </button>
  )
}
