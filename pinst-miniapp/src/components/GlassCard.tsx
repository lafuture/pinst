import { type ReactNode, type CSSProperties } from 'react'

interface GlassCardProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: () => void
}

export default function GlassCard({ children, style, className, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(139,92,246,0.2)',
        borderRadius: 20,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
