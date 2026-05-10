import { useState, useEffect, useMemo, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import GenerationCounter from '../components/GenerationCounter'
import Toast, { type ToastType } from '../components/Toast'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'
import { getGallery, sendPhotoToChat } from '../api/generation'
import type { Generation } from '../types'

const MOCK_GALLERY: Generation[] = [
  { id: '1', image_url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80', created_at: new Date(Date.now() - 2 * 86400000).toISOString() },
  { id: '2', image_url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80', created_at: new Date(Date.now() - 5 * 86400000).toISOString() },
  { id: '3', image_url: 'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=400&q=80', created_at: new Date(Date.now() - 7 * 86400000).toISOString() },
  { id: '4', image_url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', created_at: new Date(Date.now() - 10 * 86400000).toISOString() },
  { id: '5', image_url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80', created_at: new Date(Date.now() - 12 * 86400000).toISOString() },
  { id: '6', image_url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80', created_at: new Date(Date.now() - 14 * 86400000).toISOString() },
]

const PLAN_LABELS: Record<string, string> = { lite: 'Lite', pro: 'Pro' }

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })
}

function formatShort(iso: string) {
  return new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}

export default function ProfileScreen() {
  const navigate = useNavigate()
  const { user: tgUser, hapticFeedback, WebApp } = useTelegram()
  const { user, loading } = useSubscription()
  const [gallery, setGallery] = useState<Generation[]>([])
  const [galleryLoading, setGalleryLoading] = useState(true)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [selected, setSelected] = useState<Generation | null>(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [refToast, setRefToast] = useState<{ visible: boolean; message: string; type: ToastType }>({
    visible: false,
    message: '',
    type: 'default',
  })
  const hideRefToast = useCallback(() => setRefToast(t => ({ ...t, visible: false })), [])

  const botUsername = import.meta.env.VITE_BOT_USERNAME || 'pinst_ai_bot'
  const referralLink = useMemo(() => {
    if (tgUser?.id == null) return ''
    return `https://t.me/${botUsername}?startapp=r${tgUser.id}`
  }, [tgUser?.id, botUsername])

  const copyReferralLink = async () => {
    hapticFeedback('medium')
    try {
      await navigator.clipboard.writeText(referralLink)
      setRefToast({ visible: true, message: 'Скопировано', type: 'default' })
    } catch {
      setRefToast({ visible: true, message: 'Не удалось скопировать', type: 'error' })
    }
  }

  const shareReferralLink = () => {
    hapticFeedback('light')
    const text = encodeURIComponent('Заходи в Pinst — фото в стиле Pinterest прямо в Telegram 🎨')
    const url = encodeURIComponent(referralLink)
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`
    // openTelegramLink открывает нативный диалог выбора чата внутри Telegram
    const tg = (window as any)?.Telegram?.WebApp
    if (tg?.openTelegramLink) {
      tg.openTelegramLink(shareUrl)
    } else {
      WebApp.openLink(shareUrl)
    }
  }

  useEffect(() => {
    getGallery()
      .then(r => setGallery(r.data))
      .catch(() => setGallery(MOCK_GALLERY))
      .finally(() => setGalleryLoading(false))
  }, [])

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

  const openHistory = () => {
    hapticFeedback('light')
    setHistoryOpen(true)
  }

  return (
    <div
      style={{
        padding: '20px 16px',
        paddingBottom: 'max(90px, calc(90px + env(safe-area-inset-bottom)))',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Toast message={refToast.message} type={refToast.type} visible={refToast.visible} onHide={hideRefToast} />

      {/* User */}
      <GlassCard style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {tgUser?.photo_url ? (
            <img src={tgUser.photo_url} alt="avatar" style={{
              width: 56, height: 56, borderRadius: '50%',
              border: '2px solid rgba(139,92,246,0.5)', objectFit: 'cover', flexShrink: 0,
            }} />
          ) : (
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, color: '#fff', flexShrink: 0,
              border: '2px solid rgba(139,92,246,0.4)',
            }}>
              {(user?.first_name?.[0] || tgUser?.first_name?.[0] || '?').toUpperCase()}
            </div>
          )}
          <div>
            <p style={{ color: '#ffffff', fontSize: 16, fontWeight: 600, margin: 0 }}>
              {user?.first_name || tgUser?.first_name || ''}
            </p>
            {(user?.username || tgUser?.username) && (
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: '3px 0 0' }}>
                @{user?.username || tgUser?.username}
              </p>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Subscription */}
      <GlassCard style={{ padding: 16 }}>
        <p style={sectionLabel}>Подписка</p>
        {loading ? (
          <div style={{ height: 70, background: 'rgba(139,92,246,0.08)', borderRadius: 10, animation: 'pulse 1.5s ease-in-out infinite' }} />
        ) : user?.subscription ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#ffffff', fontSize: 17, fontWeight: 600 }}>{PLAN_LABELS[user.subscription]}</span>
                <span style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 100, color: '#22c55e', fontSize: 11, padding: '2px 8px' }}>Активна</span>
              </div>
              {user.subscription_end_at && (
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>до {formatDate(user.subscription_end_at)}</span>
              )}
            </div>
            <GenerationCounter remaining={user.remaining_photo} limit={user.limits_photo} />
            <div style={{ marginTop: 12 }}>
              <Button variant="secondary" onClick={() => { hapticFeedback('light'); navigate('/tariffs') }} style={{ width: '100%', padding: '11px 12px', fontSize: 13 }}>
                Сменить тариф
              </Button>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: (user?.remaining_photo ?? 0) > 0 ? 12 : 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ef4444', boxShadow: '0 0 6px rgba(239,68,68,0.6)' }} />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Нет подписки</span>
              </div>
              <button onClick={() => { hapticFeedback('light'); navigate('/tariffs') }} style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', border: 'none', borderRadius: 100, color: '#fff', fontSize: 13, fontWeight: 700, padding: '0 14px', height: 34, cursor: 'pointer', fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em', boxShadow: '0 0 14px rgba(168,85,247,0.7), 0 0 28px rgba(236,72,153,0.35)' }}>
                Подключить
              </button>
            </div>
            {(user?.remaining_photo ?? 0) > 0 && (
              <GenerationCounter remaining={user!.remaining_photo} limit={user!.remaining_photo} />
            )}
          </>
        )}
      </GlassCard>

      {/* Referral */}
      <GlassCard style={{ padding: 16 }}>
        <p style={sectionLabel}>Реферальная программа</p>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          <div style={{
            flex: 1,
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.18)',
            borderRadius: 12,
            padding: '10px 12px',
            textAlign: 'center',
          }}>
            <p style={{ color: '#a78bfa', fontSize: 22, fontWeight: 700, margin: 0, lineHeight: 1 }}>
              {user?.referral_invited ?? 0}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, margin: '4px 0 0' }}>приглашено друзей</p>
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.18)',
            borderRadius: 12,
            padding: '10px 12px',
            textAlign: 'center',
          }}>
            <p style={{ color: '#a78bfa', fontSize: 22, fontWeight: 700, margin: 0, lineHeight: 1 }}>
              {user?.referral_bonus ?? 0}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, margin: '4px 0 0' }}>получено генераций</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 8, marginBottom: 12 }}>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: 12,
              padding: '8px 10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: 11,
                lineHeight: 1.35,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                wordBreak: 'break-all',
              }}
            >
              {referralLink}
            </span>
          </div>
          <button
            type="button"
            onClick={copyReferralLink}
            aria-label="Копировать ссылку"
            style={{
              flexShrink: 0,
              width: 36,
              height: 36,
              alignSelf: 'center',
              borderRadius: 10,
              background: 'rgba(139,92,246,0.12)',
              border: '1px solid rgba(139,92,246,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="9" y="9" width="13" height="13" rx="2" stroke="#a78bfa" strokeWidth="2"/>
              <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5" stroke="#a78bfa" strokeWidth="2"/>
            </svg>
          </button>
        </div>
        <Button onClick={shareReferralLink} style={{ width: '100%', padding: '11px 12px', fontSize: 13 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 12V20H20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 16V4M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Поделиться в Telegram
        </Button>
      </GlassCard>

      {/* History button */}
      <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
        <button
          onClick={openHistory}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', padding: '16px 16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(139,92,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#8b5cf6" strokeWidth="1.8"/>
                <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#8b5cf6" strokeWidth="1.8"/>
                <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#8b5cf6" strokeWidth="1.8"/>
                <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#8b5cf6" strokeWidth="1.8"/>
              </svg>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ color: '#ffffff', fontSize: 15, fontWeight: 500, margin: 0 }}>История генераций</p>
              {!galleryLoading && (
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: '2px 0 0' }}>
                  {gallery.length} {gallery.length === 1 ? 'фото' : gallery.length >= 2 && gallery.length <= 4 ? 'фото' : 'фото'}
                </p>
              )}
            </div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </GlassCard>

      {/* Support */}
      <GlassCard style={{ padding: 14 }}>
        <button
          onClick={() => {
            hapticFeedback('light')
            try {
              const tg = (window as any)?.Telegram?.WebApp
              if (tg?.openTelegramLink) {
                tg.openTelegramLink('https://t.me/balooBoss')
              } else {
                WebApp.openLink('https://t.me/balooBoss')
              }
            } catch {
              try { WebApp.openLink('https://t.me/balooBoss') } catch {}
            }
          }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 0 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(139,92,246,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15C21 15.5 20.8 16 20.4 16.4C20 16.8 19.5 17 19 17H7L3 21V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C19.5 3 20 3.2 20.4 3.6C20.8 4 21 4.5 21 5V15Z" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ color: '#ffffff', fontSize: 14 }}>Написать в поддержку</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </GlassCard>

      {/* ── History modal (full-screen) ── */}
      {createPortal(<AnimatePresence>
        {historyOpen && (
          <motion.div
            key="history"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              position: 'fixed', inset: 0,
              background: '#0f0f18',
              zIndex: 200,
              display: 'flex', flexDirection: 'column',
            }}
          >
              {/* Header */}
              <div style={{
                padding: 'max(16px, calc(12px + env(safe-area-inset-top))) 20px 12px',
                flexShrink: 0,
                display: 'flex', alignItems: 'center', gap: 12,
                borderBottom: '1px solid rgba(139,92,246,0.12)',
              }}>
                <button
                  onClick={() => setHistoryOpen(false)}
                  style={{
                    background: 'rgba(15,15,24,0.9)',
                    border: '1.5px solid rgba(139,92,246,0.45)',
                    borderRadius: '50%',
                    width: 38, height: 38,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', padding: 0, flexShrink: 0,
                    boxShadow: '0 0 0 1px rgba(139,92,246,0.15), 0 2px 12px rgba(0,0,0,0.4)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 600, margin: 0 }}>История генераций</h3>
              </div>

              {/* Grid */}
              <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', padding: '12px 16px', paddingBottom: 'max(32px, calc(32px + env(safe-area-inset-bottom)))' }}>
                {galleryLoading ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} style={{ aspectRatio: '1', borderRadius: 10, background: 'rgba(139,92,246,0.08)', animation: 'pulse 1.5s ease-in-out infinite', animationDelay: `${i * 0.08}s` }} />
                    ))}
                  </div>
                ) : gallery.length === 0 ? (
                  <div style={{ padding: '40px 0', textAlign: 'center' }}>
                    <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 15, margin: '0 0 12px' }}>Ещё нет генераций</p>
                    <button
                      onClick={() => { setHistoryOpen(false); navigate('/create') }}
                      style={{ background: 'none', border: 'none', color: '#a78bfa', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                    >
                      Создать первое →
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                    {gallery.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04, duration: 0.18 }}
                        onClick={() => { hapticFeedback('light'); setSelected(item) }}
                        style={{ aspectRatio: '1', borderRadius: 10, overflow: 'hidden', cursor: 'pointer', position: 'relative', border: '1px solid rgba(139,92,246,0.12)' }}
                      >
                        <img src={item.image_url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span style={{ position: 'absolute', bottom: 4, right: 5, fontSize: 9, color: 'rgba(255,255,255,0.6)', background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)', padding: '2px 5px', borderRadius: 5 }}>
                          {formatShort(item.created_at)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}

      {/* ── Photo viewer ── */}
      {createPortal(<AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', zIndex: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          >
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={selected.image_url} alt="" style={{ maxWidth: '100%', maxHeight: '72vh', borderRadius: 20, objectFit: 'contain' }} />
            <div style={{ display: 'flex', gap: 10, marginTop: 20, width: '100%', paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}>
              <Button onClick={handleSendToChat} disabled={sending || sent} style={{ flex: 1 }}>
                {sent ? '✓ Отправлено' : sending ? 'Отправляю...' : 'Отправить в чат'}
              </Button>
              <Button variant="secondary" onClick={() => { setSelected(null); setSent(false) }} style={{ flex: 1 }}>Закрыть</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </div>
  )
}

const sectionLabel: React.CSSProperties = {
  color: 'rgba(255,255,255,0.35)',
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin: '0 0 12px',
}
