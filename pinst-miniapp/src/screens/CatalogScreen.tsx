import { useState, useRef } from 'react'
import ScreenTopBar from '../components/ScreenTopBar'
import GlassCard from '../components/GlassCard'
import Button from '../components/Button'
import LoadingSpinner from '../components/LoadingSpinner'
import Toast, { type ToastType } from '../components/Toast'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'
import { createSimple, streamTask, sendPhotoToChatByURL } from '../api/generation'
import { SECTIONS, type Pack } from '../catalog'
import UploadIcon from '../components/UploadIcon'

type AspectRatio = 'auto' | '1:1' | '3:4' | '9:16' | '16:9'

const RATIO_OPTIONS: { value: AspectRatio; label: string }[] = [
  { value: 'auto', label: 'Auto' },
  { value: '1:1',  label: '1:1'  },
  { value: '3:4',  label: '3:4'  },
  { value: '9:16', label: '9:16' },
  { value: '16:9', label: '16:9' },
]
const COUNT_OPTIONS = [1, 2, 3, 4, 5]

const labelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.4)',
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin: 0,
}

const CARD_W = 160

// ─── Pack Detail (with embedded create form) ──────────────────────────────────

type DetailStep = 'form' | 'loading' | 'result'

function PackDetail({ pack, onBack, closing }: { pack: Pack; onBack: () => void; closing: boolean }) {
  const selfInputRef = useRef<HTMLInputElement>(null)
  const partnerInputRef = useRef<HTMLInputElement>(null)
  const { hapticFeedback } = useTelegram()
  const { user: subUser } = useSubscription()
  const seriesLocked = !subUser?.subscription || subUser.subscription === 'lite'

  // Form state
  const [selfPhotos, setSelfPhotos] = useState<File[]>([])
  const [selfPreviews, setSelfPreviews] = useState<string[]>([])
  const [partnerPhotos, setPartnerPhotos] = useState<File[]>([])
  const [partnerPreviews, setPartnerPreviews] = useState<string[]>([])
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('auto')
  const [photoCount, setPhotoCount] = useState(1)
  const [step, setStep] = useState<DetailStep>('form')
  const [resultUrls, setResultUrls] = useState<string[]>([])
  const [sentUrls, setSentUrls] = useState<Set<string>>(new Set())
  const [sendingUrl, setSendingUrl] = useState<string | null>(null)
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: ToastType }>({ visible: false, message: '', type: 'default' })

  const canGenerate = pack.photoMode === 'couple'
    ? selfPhotos.length > 0 && partnerPhotos.length > 0
    : selfPhotos.length > 0

  const showToast = (message: string, type: ToastType = 'default') => setToast({ visible: true, message, type })
  const hideToast = () => setToast(t => ({ ...t, visible: false }))

  const handleAddPhotos = (files: File[]) => {
    setSelfPhotos(prev => [...prev, ...files].slice(0, 10))
    setSelfPreviews(prev => [...prev, ...files.map(f => URL.createObjectURL(f))].slice(0, 10))
  }
  const handleRemovePhoto = (idx: number) => {
    hapticFeedback('light')
    setSelfPhotos(prev => prev.filter((_, i) => i !== idx))
    setSelfPreviews(prev => prev.filter((_, i) => i !== idx))
  }
  const handleAddPartnerPhotos = (files: File[]) => {
    setPartnerPhotos(prev => [...prev, ...files].slice(0, 10))
    setPartnerPreviews(prev => [...prev, ...files.map(f => URL.createObjectURL(f))].slice(0, 10))
  }
  const handleRemovePartnerPhoto = (idx: number) => {
    hapticFeedback('light')
    setPartnerPhotos(prev => prev.filter((_, i) => i !== idx))
    setPartnerPreviews(prev => prev.filter((_, i) => i !== idx))
  }

  const buildFormData = (): FormData => {
    const fd = new FormData()
    for (const f of selfPhotos) fd.append('photo', f)
    if (pack.photoMode === 'couple') {
      for (const f of partnerPhotos) fd.append('partner_photo', f)
    }
    if (pack.prompt) fd.append('prompt', pack.prompt)
    fd.append('preset', pack.preset.id)
    if (aspectRatio !== 'auto') fd.append('aspect_ratio', aspectRatio)
    return fd
  }

  const handleGenerate = async () => {
    if (!canGenerate) return
    hapticFeedback('medium')
    setStep('loading')
    try {
      const submissions = await Promise.all(
        Array.from({ length: photoCount }, () => createSimple(buildFormData()))
      )
      const results = await Promise.all(submissions.map(s => streamTask(s.data.task_id)))
      const urls: string[] = []
      for (const t of results) {
        if (t.state !== 'success' || !t.image_url) throw new Error(t.error || 'task failed')
        urls.push(t.image_url)
      }
      setResultUrls(urls)
      setStep('result')
      hapticFeedback('heavy')
    } catch (err: any) {
      showToast(err?.response?.data?.error || err?.message || 'Ошибка генерации', 'error')
      setStep('form')
    }
  }

  const handleSendToChat = async (url: string) => {
    if (sendingUrl || sentUrls.has(url)) return
    hapticFeedback('medium')
    setSendingUrl(url)
    try {
      await sendPhotoToChatByURL(url)
      hapticFeedback('heavy')
      setSentUrls(prev => new Set(prev).add(url))
      showToast('Фото отправлено в чат', 'success')
    } catch {
      showToast('Не удалось отправить', 'error')
    } finally {
      setSendingUrl(null)
    }
  }

  const handleAgain = () => {
    hapticFeedback('light')
    setSelfPhotos([]); setSelfPreviews([])
    setPartnerPhotos([]); setPartnerPreviews([])
    setResultUrls([]); setSentUrls(new Set())
    setStep('form')
  }

  const handleBack = () => {
    if (step === 'result' || step === 'loading') {
      if (step === 'loading') return
      handleAgain()
    } else {
      onBack()
    }
  }

  return (
    <div
      className={closing ? 'pack-detail-exit' : 'pack-detail-enter'}
      style={{ position: 'absolute', inset: 0, zIndex: 10, background: '#0a0a0f', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <Toast message={toast.message} type={toast.type} visible={toast.visible} onHide={hideToast} />

      {/* ── Top bar ── */}
      <div style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: 'max(14px, env(safe-area-inset-top)) 16px 14px',
        borderBottom: '1px solid rgba(139,92,246,0.12)',
        background: 'rgba(10,10,15,0.96)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}>
        <button
          type="button"
          onClick={handleBack}
          style={{
            background: 'rgba(10,10,20,0.85)',
            border: '1.5px solid rgba(139,92,246,0.25)',
            borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center',
            justifyContent: 'center', width: 40, height: 40, flexShrink: 0, cursor: 'pointer', padding: 0,
            boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div>
          <h1 style={{ color: '#fff', fontSize: 17, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>{pack.name}</h1>
        </div>
      </div>

      {/* ── Loading ── */}
      {step === 'loading' && (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <GlassCard style={{ padding: 24, width: '100%' }}>
            <LoadingSpinner message={photoCount > 1 ? `Генерируем ${photoCount} фотографии…` : 'Создаём твоё фото...'} />
          </GlassCard>
        </div>
      )}

      {/* ── Result ── */}
      {step === 'result' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
          {resultUrls.length === 1 ? (
            <div style={{ flex: 1, minHeight: 0, padding: '12px 16px 0' }}>
              <div style={{ height: '100%', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(139,92,246,0.3)', boxShadow: '0 0 40px rgba(139,92,246,0.2)' }}>
                <img src={resultUrls[0]} alt="result" style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
              </div>
            </div>
          ) : (
            <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 8, padding: '12px 16px 0', overflowX: 'auto' }}>
              {resultUrls.map((url, i) => (
                <div key={i} style={{ flexShrink: 0, width: 'calc(100% - 32px)', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(139,92,246,0.3)' }}>
                  <img src={url} alt={`result ${i + 1}`} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          )}
          <div style={{ padding: '12px 16px', paddingBottom: 'max(16px, calc(16px + env(safe-area-inset-bottom)))', display: 'flex', flexDirection: 'column', gap: 8, background: 'linear-gradient(to top, rgba(10,10,15,0.95) 70%, transparent)' }}>
            <Button onClick={() => handleSendToChat(resultUrls[0])} disabled={!!sendingUrl || sentUrls.has(resultUrls[0])}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {sentUrls.has(resultUrls[0]) ? '✓ Отправлено в чат' : sendingUrl ? 'Отправляю...' : 'Отправить в чат'}
            </Button>
            <Button variant="ghost" onClick={handleAgain}>Создать ещё</Button>
          </div>
        </div>
      )}

      {/* ── Form ── */}
      {step === 'form' && (
        <div style={{
          flex: 1, overflowY: 'auto', overflowX: 'hidden',
          WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
          padding: '16px 16px',
          paddingBottom: 'max(24px, calc(24px + env(safe-area-inset-bottom)))',
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          {/* Photo upload card */}
          <GlassCard style={{ padding: 14 }}>
            <input ref={selfInputRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) { handleAddPhotos([f]); e.target.value = '' } }} />
            {pack.photoMode === 'couple' && (
              <input ref={partnerInputRef} type="file" accept="image/*" style={{ display: 'none' }}
                onChange={e => { const f = e.target.files?.[0]; if (f) { handleAddPartnerPhotos([f]); e.target.value = '' } }} />
            )}

            {pack.photoMode === 'couple' ? (
              <div style={{ display: 'flex', gap: 10 }}>
                {([
                  { label: 'Твоё фото', preview: selfPreviews[0], onPick: () => selfInputRef.current?.click(), onRemove: () => handleRemovePhoto(0) },
                  { label: 'Фото партнёра', preview: partnerPreviews[0], onPick: () => partnerInputRef.current?.click(), onRemove: () => handleRemovePartnerPhoto(0) },
                ] as const).map(slot => (
                  <div key={slot.label} style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ ...labelStyle, marginBottom: 8 }}>{slot.label}</p>
                    <div style={{ position: 'relative', paddingTop: slot.preview ? 7 : 0, paddingRight: slot.preview ? 7 : 0 }}>
                      <div
                        onClick={slot.onPick}
                        style={{
                          borderRadius: 16, overflow: 'hidden',
                          aspectRatio: '3/4', cursor: 'pointer',
                          border: slot.preview
                            ? '1.5px solid rgba(139,92,246,0.6)'
                            : '2px dashed rgba(139,92,246,0.4)',
                          background: slot.preview ? 'transparent' : 'rgba(139,92,246,0.06)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'border-color 0.15s',
                        }}
                      >
                        {slot.preview
                          ? <img src={slot.preview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                          : <UploadIcon size={48} />
                        }
                      </div>
                      {slot.preview && (
                        <button
                          type="button"
                          onClick={e => { e.stopPropagation(); slot.onRemove() }}
                          style={{
                            position: 'absolute', top: 0, right: 0,
                            width: 22, height: 22, borderRadius: '50%',
                            background: 'rgba(15,10,30,0.95)',
                            border: '1.5px solid rgba(139,92,246,0.35)',
                            color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 700,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', padding: 0, lineHeight: 1,
                            backdropFilter: 'blur(6px)',
                          }}
                        >×</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p style={{ ...labelStyle, marginBottom: 10 }}>Твоё фото</p>
                <div style={{ position: 'relative', width: '100%', paddingTop: selfPreviews[0] ? 7 : 0, paddingRight: selfPreviews[0] ? 7 : 0 }}>
                  <div
                    onClick={() => selfInputRef.current?.click()}
                    style={{
                      borderRadius: 18, overflow: 'hidden',
                      width: '100%', aspectRatio: '1/1', cursor: 'pointer',
                      border: selfPreviews[0]
                        ? '1.5px solid rgba(139,92,246,0.6)'
                        : '2px dashed rgba(139,92,246,0.4)',
                      background: selfPreviews[0] ? 'transparent' : 'rgba(139,92,246,0.05)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                  >
                    {selfPreviews[0]
                      ? <img src={selfPreviews[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      : <UploadIcon size={60} />
                    }
                  </div>
                  {selfPreviews[0] && (
                    <button
                      type="button"
                      onClick={e => { e.stopPropagation(); handleRemovePhoto(0) }}
                      style={{
                        position: 'absolute', top: 0, right: 0,
                        width: 22, height: 22, borderRadius: '50%',
                        background: 'rgba(15,10,30,0.95)',
                        border: '1.5px solid rgba(139,92,246,0.35)',
                        color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', padding: 0, lineHeight: 1,
                        backdropFilter: 'blur(6px)',
                      }}
                    >×</button>
                  )}
                </div>
              </div>
            )}
          </GlassCard>

          {/* Ratio + Count controls */}
          <GlassCard style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Aspect ratio */}
            <div>
              <p style={{ ...labelStyle, marginBottom: 6 }}>Соотношение сторон</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 5 }}>
                {RATIO_OPTIONS.map(r => {
                  const active = aspectRatio === r.value
                  return (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => { hapticFeedback('light'); setAspectRatio(r.value) }}
                      style={{
                        height: 28, padding: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: active ? 'rgba(139,92,246,0.22)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${active ? 'rgba(139,92,246,0.65)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: 6, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                        boxShadow: active ? '0 0 10px rgba(139,92,246,0.2)' : 'none',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span style={{
                        fontSize: 11, fontWeight: active ? 700 : 500, lineHeight: 1,
                        color: active ? '#c4b5fd' : 'rgba(255,255,255,0.38)',
                      }}>{r.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Photo count */}
            <div>
              <p style={{ ...labelStyle, marginBottom: 6 }}>Количество фото</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 5 }}>
                {COUNT_OPTIONS.map(n => {
                  const disabled = seriesLocked && n > 1
                  const active = photoCount === n
                  return (
                    <button
                      key={n}
                      type="button"
                      onClick={() => { if (!disabled) { hapticFeedback('light'); setPhotoCount(n) } }}
                      style={{
                        height: 28, padding: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: active ? 'rgba(139,92,246,0.22)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${active ? 'rgba(139,92,246,0.65)' : 'rgba(255,255,255,0.08)'}`,
                        borderRadius: 6, cursor: disabled ? 'not-allowed' : 'pointer',
                        fontFamily: 'Inter, sans-serif', opacity: disabled ? 0.32 : 1,
                        boxShadow: active ? '0 0 10px rgba(139,92,246,0.2)' : 'none',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span style={{
                        fontSize: 11, fontWeight: active ? 700 : 500,
                        color: active ? '#c4b5fd' : 'rgba(255,255,255,0.45)',
                      }}>{n}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </GlassCard>

          {/* Generate button */}
          <Button onClick={handleGenerate} disabled={!canGenerate}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            {photoCount > 1 ? `Создать ${photoCount} фото` : 'Создать фото'}
          </Button>

          {!canGenerate && (
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, textAlign: 'center', margin: 0 }}>
              Сначала загрузи хотя бы одно фото
            </p>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Catalog ──────────────────────────────────────────────────────────────────

export default function CatalogScreen() {
  const { hapticFeedback } = useTelegram()
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null)
  const [closing, setClosing] = useState(false)

  const handleOpenPack = (pack: Pack) => {
    hapticFeedback('light')
    setClosing(false)
    setSelectedPack(pack)
  }

  const handleBack = () => {
    hapticFeedback('light')
    setClosing(true)
    setTimeout(() => { setSelectedPack(null); setClosing(false) }, 250)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100dvh - 84px)', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <ScreenTopBar title="Пресеты" subtitle="Готовые эстетики для старта" profileButton />

      <div style={{
        flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch', overscrollBehavior: 'none', scrollbarWidth: 'none',
        paddingBottom: 'max(24px, calc(24px + env(safe-area-inset-bottom)))',
      }}>
        {SECTIONS.map(section => (
          <div key={section.title} style={{ marginTop: 24 }}>
            <p style={{ color: '#ffffff', fontSize: 22, fontWeight: 700, margin: '0 0 14px', paddingLeft: 16, letterSpacing: -0.3 }}>
              {section.title}
            </p>
            <div style={{
              display: 'flex', gap: 12, overflowX: 'auto', overflowY: 'visible',
              scrollbarWidth: 'none', paddingLeft: 16, paddingRight: 16,
              paddingTop: 3, paddingBottom: 6, touchAction: 'pan-x pan-y',
            }}>
              {section.packs.map(pack => (
                <button
                  key={pack.id}
                  type="button"
                  onClick={() => handleOpenPack(pack)}
                  style={{ flexShrink: 0, width: CARD_W, background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ width: CARD_W, height: Math.round(CARD_W * 4 / 3), background: '#1a1a2e', overflow: 'hidden' }}>
                      {pack.image && <img src={pack.image} alt={pack.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                    </div>
                    <div style={{ background: '#141420', padding: '10px 12px 12px', boxSizing: 'border-box', overflow: 'hidden' }}>
                      <p style={{ color: '#ffffff', fontSize: 13, fontWeight: 700, margin: 0, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {pack.name}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedPack && (
        <PackDetail pack={selectedPack} onBack={handleBack} closing={closing} />
      )}
    </div>
  )
}
