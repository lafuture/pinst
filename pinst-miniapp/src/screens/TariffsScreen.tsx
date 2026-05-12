import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import Toast from '../components/Toast'
import { useTelegram } from '../hooks/useTelegram'
import { createPayment } from '../api/payment'
import { initAuth } from '../api/auth'
import { getMe } from '../api/user'
import type { Plan } from '../types'

type ModalState = { open: boolean; plan: Plan | null }

const features = {
  lite: [
    '30 генераций в месяц',
    'Безлимитный ИИ ассистент',
    'Работа с референсом',
    'Обработка фото',
    'Пресеты эстетик',
  ],
  pro: [
    '100 генераций в месяц',
    'Качество 4K',
    'Серии фото',
  ],
}

const soon: string[] = []

export default function TariffsScreen() {
  const navigate = useNavigate()
  const { hapticFeedback } = useTelegram()
  const [modal, setModal] = useState<ModalState>({ open: false, plan: null })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<Plan | null>(null)
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = (message: string) => setToast({ visible: true, message })
  const hideToast = useCallback(() => setToast(t => ({ ...t, visible: false })), [])

  const handlePlan = (plan: Plan) => {
    hapticFeedback('light')
    setModal({ open: true, plan })
  }

  const handlePay = async (method: 'card' | 'sbp') => {
    if (!modal.plan) return
    hapticFeedback('medium')
    setLoading(true)

    try {
      await initAuth()
      console.log('[pinst][pay] createPayment plan=%s method=%s', modal.plan, method)
      const res = await createPayment(modal.plan, method)
      console.log('[pinst][pay] createPayment response:', JSON.stringify(res.data))
      const { url } = res.data

      const tg = (window as any)?.Telegram?.WebApp
      if (tg?.openLink) {
        tg.openLink(url)
      } else {
        window.open(url, '_blank')
      }

      // Ждём возврата пользователя из браузера оплаты.
      // Вебхук от ЮKassa обновляет подписку — при возврате просто проверяем профиль.
      const onReturn = async () => {
        if (document.hidden) return
        document.removeEventListener('visibilitychange', onReturn)
        clearTimeout(giveUp)
        // Небольшая задержка на случай, если вебхук ещё летит
        await new Promise(r => setTimeout(r, 1500))
        try {
          const profile = await getMe()
          setLoading(false)
          if (profile.data.subscription) {
            setModal({ open: false, plan: null })
            setSuccess(modal.plan)
            hapticFeedback('heavy')
          } else {
            showToast('Оплата обрабатывается — статус придёт в Telegram')
          }
        } catch {
          setLoading(false)
          showToast('Не удалось проверить статус — загляни в профиль')
        }
      }

      // Если пользователь так и не вернулся через 10 минут — снимаем лоадер
      const giveUp = setTimeout(() => {
        document.removeEventListener('visibilitychange', onReturn)
        setLoading(false)
        showToast('Время ожидания истекло. Проверь статус в профиле')
      }, 10 * 60 * 1000)

      document.addEventListener('visibilitychange', onReturn)
    } catch (err: any) {
      setLoading(false)
      const status = err?.response?.status
      const msg = err?.response?.data?.error || err?.message || 'unknown'
      console.error('[pinst][pay] error status=%s msg=%s', status, msg)
      showToast(`Ошибка ${status ?? ''}: ${msg}`)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          gap: 24,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(34,197,94,0.15)',
            border: '2px solid rgba(34,197,94,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 30px rgba(34,197,94,0.3)',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M5 12L10 17L19 8" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: 22, fontWeight: 600, margin: '0 0 8px' }}>
            Подписка активирована!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, margin: 0 }}>
            Осталось {success === 'pro' ? 100 : 30} генераций
          </p>
        </div>
        <Button onClick={() => { hapticFeedback('light'); navigate('/create') }}>
          Создать первое фото
        </Button>
      </motion.div>
    )
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
      }}
    >
      <Toast message={toast.message} type="error" visible={toast.visible} onHide={hideToast} />

      {/* Back */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => { hapticFeedback('light'); navigate(-1) }}
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: '50%',
            width: 36, height: 36,
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 style={{ color: '#ffffff', fontSize: 22, fontWeight: 600, margin: 0 }}>
          Выбери тариф
        </h2>
      </div>

      {/* Lite card */}
      <GlassCard style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <h3 style={{ color: '#ffffff', fontSize: 20, fontWeight: 600, margin: 0 }}>Lite</h3>
              <span
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  borderRadius: 100,
                  color: '#a78bfa',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 10px',
                }}
              >
                ☕ По цене чашки кофе
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0 }}>Ежемесячная подписка</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#ffffff', fontSize: 22, fontWeight: 700 }}>349 ₽</span>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: '2px 0 0' }}>/ месяц</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {features.lite.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5"/>
                <path d="M5 8L7 10L11 6" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>{f}</span>
            </div>
          ))}
        </div>
        <Button variant="secondary" onClick={() => handlePlan('lite')}>Выбрать Lite</Button>
      </GlassCard>

      {/* Pro card */}
      <GlassCard
        style={{
          padding: 20,
          border: '1px solid rgba(139,92,246,0.5)',
          boxShadow: '0 0 30px rgba(139,92,246,0.15)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <h3 style={{ color: '#ffffff', fontSize: 20, fontWeight: 600, margin: 0 }}>Pro</h3>
              <span
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                  borderRadius: 100,
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 600,
                  padding: '2px 10px',
                }}
              >
                🔥 Популярный
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: 0 }}>Ежемесячная подписка</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ color: '#ffffff', fontSize: 22, fontWeight: 700 }}>899 ₽</span>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: '2px 0 0' }}>/ месяц</p>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, margin: '0 0 10px' }}>Всё из Lite плюс:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {features.pro.map(f => {
            const isSoon = soon.includes(f)
            return (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke={isSoon ? 'rgba(139,92,246,0.3)' : 'rgba(139,92,246,0.5)'} strokeWidth="1.5"/>
                  <path d="M5 8L7 10L11 6" stroke={isSoon ? 'rgba(139,92,246,0.4)' : '#8b5cf6'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: isSoon ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.7)', fontSize: 14 }}>
                  {f}
                  {isSoon && (
                    <span
                      style={{
                        marginLeft: 6,
                        fontSize: 10,
                        color: 'rgba(139,92,246,0.5)',
                        background: 'rgba(139,92,246,0.1)',
                        borderRadius: 4,
                        padding: '1px 5px',
                      }}
                    >
                      soon
                    </span>
                  )}
                </span>
              </div>
            )
          })}
        </div>
        <Button onClick={() => handlePlan('pro')}>Выбрать Pro</Button>
      </GlassCard>

      {/* Payment modal */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 200,
              display: 'flex',
              alignItems: 'flex-end',
            }}
            onClick={() => !loading && setModal({ open: false, plan: null })}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                background: '#0f0f18',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                border: '1px solid rgba(139,92,246,0.2)',
                padding: '24px 20px',
                paddingBottom: 'max(24px, calc(24px + env(safe-area-inset-bottom)))',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 4,
                  borderRadius: 100,
                  background: 'rgba(255,255,255,0.2)',
                  margin: '0 auto -8px',
                }}
              />
              <h3 style={{ color: '#ffffff', fontSize: 18, fontWeight: 600, margin: 0, textAlign: 'center' }}>
                Способ оплаты
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: '-8px 0 0', textAlign: 'center' }}>
                Тариф {modal.plan === 'pro' ? 'Pro · 899 ₽/мес' : 'Lite · 349 ₽/мес'}
              </p>

              {loading ? (
                <div style={{ padding: '20px 0', textAlign: 'center' }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      border: '3px solid rgba(139,92,246,0.3)',
                      borderTopColor: '#8b5cf6',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                      margin: '0 auto 12px',
                    }}
                  />
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, margin: 0 }}>
                    Ожидаем оплату...
                  </p>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => handlePay('card')}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      borderRadius: 16,
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: 'rgba(139,92,246,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#8b5cf6" strokeWidth="2"/>
                        <path d="M2 10H22" stroke="#8b5cf6" strokeWidth="2"/>
                        <path d="M6 15H8M10 15H12" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ color: '#ffffff', fontSize: 15, fontWeight: 500, margin: 0 }}>Картой</p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: '2px 0 0' }}>разовая оплата</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handlePay('sbp')}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(139,92,246,0.2)',
                      borderRadius: 16,
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: 'rgba(139,92,246,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12H21M3 6H21M3 18H12" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <p style={{ color: '#ffffff', fontSize: 15, fontWeight: 500, margin: 0 }}>СБП</p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, margin: '2px 0 0' }}>разовая оплата</p>
                    </div>
                  </button>

                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
