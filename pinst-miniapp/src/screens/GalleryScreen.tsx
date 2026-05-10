import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { useTelegram } from '../hooks/useTelegram'
import { getGallery, sendPhotoToChat } from '../api/generation'
import type { Generation } from '../types'


function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}

export default function GalleryScreen() {
  const navigate = useNavigate()
  const { hapticFeedback } = useTelegram()
  const [items, setItems] = useState<Generation[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Generation | null>(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    getGallery()
      .then(res => setItems(res.data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  const handleOpen = (item: Generation) => {
    hapticFeedback('light')
    setSelected(item)
    setSent(false)
  }

  const handleSendToChat = async () => {
    if (!selected || sending) return
    hapticFeedback('medium')
    setSending(true)
    try {
      await sendPhotoToChat(selected.id)
      hapticFeedback('heavy')
      setSent(true)
    } catch {
      hapticFeedback('heavy')
    } finally {
      setSending(false)
    }
  }

  return (
    <div
      style={{
        height: 'calc(100dvh - 84px)',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        padding: '24px 16px',
        paddingBottom: 'max(100px, calc(100px + env(safe-area-inset-bottom)))',
        position: 'relative',
        zIndex: 1,
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ color: '#ffffff', fontSize: 22, fontWeight: 600, margin: '0 0 20px' }}>
        Мои фото
      </h2>

      {loading ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
          }}
        >
          {[1, 2, 3, 4].map(i => (
            <div
              key={i}
              style={{
                aspectRatio: '1',
                borderRadius: 12,
                background: 'rgba(139,92,246,0.08)',
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 80,
            gap: 20,
            textAlign: 'center',
          }}
        >
          {/* Empty state SVG */}
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="35" height="35" rx="8" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5"/>
            <rect x="55" y="10" width="35" height="35" rx="8" fill="rgba(139,92,246,0.08)" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5"/>
            <rect x="10" y="55" width="35" height="35" rx="8" fill="rgba(139,92,246,0.06)" stroke="rgba(139,92,246,0.2)" strokeWidth="1.5"/>
            <rect x="55" y="55" width="35" height="35" rx="8" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5"/>
            <circle cx="50" cy="50" r="16" fill="rgba(139,92,246,0.15)" style={{ filter: 'blur(6px)' }}/>
          </svg>
          <div>
            <p style={{ color: '#ffffff', fontSize: 17, fontWeight: 500, margin: 0 }}>Здесь появятся твои фото</p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: '6px 0 0' }}>
              Создай первое прямо сейчас
            </p>
          </div>
          <Button onClick={() => { hapticFeedback('light'); navigate('/create') }} style={{ maxWidth: 220 }}>
            Создать первое
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 10,
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.2 }}
              onClick={() => handleOpen(item)}
              style={{
                aspectRatio: '1',
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                border: '1px solid rgba(139,92,246,0.15)',
              }}
            >
              <img
                src={item.image_url}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  bottom: 6,
                  right: 8,
                  fontSize: 10,
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(4px)',
                  padding: '2px 6px',
                  borderRadius: 6,
                }}
              >
                {formatDate(item.created_at)}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.95)',
              zIndex: 300,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selected.image_url}
              alt=""
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                borderRadius: 20,
                objectFit: 'contain',
              }}
            />

            <div
              onClick={e => e.stopPropagation()}
              style={{
                marginTop: 24,
                width: '100%',
                paddingBottom: 'max(16px, env(safe-area-inset-bottom))',
              }}
            >
              <Button onClick={handleSendToChat} disabled={sending || sent} style={{ width: '100%' }}>
                {sent ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Отправлено в чат
                  </>
                ) : sending ? (
                  'Отправляю...'
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Отправить в чат
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
