import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type ToastType = 'error' | 'success' | 'default'

interface ToastProps {
  message: string
  type?: ToastType
  visible: boolean
  onHide: () => void
}

const glassByType: Record<ToastType, { border: string; glow: string; text: string }> = {
  default: {
    border: 'rgba(255,255,255,0.22)',
    glow: 'rgba(139,92,246,0.12)',
    text: 'rgba(255,255,255,0.92)',
  },
  success: {
    border: 'rgba(74,222,128,0.35)',
    glow: 'rgba(34,197,94,0.15)',
    text: 'rgba(220,252,231,0.98)',
  },
  error: {
    border: 'rgba(248,113,113,0.4)',
    glow: 'rgba(239,68,68,0.12)',
    text: 'rgba(254,242,242,0.98)',
  },
}

export default function Toast({ message, type = 'default', visible, onHide }: ToastProps) {
  useEffect(() => {
    if (visible) {
      const t = setTimeout(onHide, 2800)
      return () => clearTimeout(t)
    }
  }, [visible, onHide])

  const g = glassByType[type]

  return (
    <AnimatePresence>
      {visible && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            pointerEvents: 'none',
            paddingBottom: 'calc(88px + env(safe-area-inset-bottom))',
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 380 }}
            style={{
              pointerEvents: 'auto',
              maxWidth: 320,
              width: 'fit-content',
              minWidth: 0,
              padding: '8px 14px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.01em',
              lineHeight: 1.35,
              color: g.text,
              textAlign: 'center',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(24px) saturate(1.6)',
              WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
              border: `1px solid ${g.border}`,
              boxShadow: `
                0 4px 24px rgba(0,0,0,0.35),
                0 0 0 1px rgba(255,255,255,0.06) inset,
                0 1px 0 rgba(255,255,255,0.12) inset,
                0 -8px 32px ${g.glow}
              `,
            }}
          >
            {message}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
