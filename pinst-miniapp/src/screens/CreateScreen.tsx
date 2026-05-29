import { useState, useCallback, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import GlassCard from '../components/GlassCard'
import ScreenTopBar, { screenScrollStyle, screenShellStyle } from '../components/ScreenTopBar'
import Button from '../components/Button'
import PhotoStrip from '../components/PhotoStrip'
import LoadingSpinner from '../components/LoadingSpinner'
import Toast, { type ToastType } from '../components/Toast'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'
import { createSimple, createReference, createRetouch, streamTask, sendPhotoToChatByURL } from '../api/generation'
import UploadIcon from '../components/UploadIcon'

type Mode = 'simple' | 'reference' | 'enhance'
type Step = 'upload' | 'loading' | 'result'
type AspectRatio = 'auto' | '1:1' | '3:4' | '9:16' | '16:9'
type RetouchStyle = 'enhance' | 'summer' | 'glam'

interface ModelPhoto {
  dataUrl: string
}

interface SavedModel {
  id: string
  photos: ModelPhoto[]
  savedAt: string
}

const MODELS_KEY = 'pinst_models'
const ACTIVE_KEY = 'pinst_active_model_id'

const RATIO_OPTIONS: { value: AspectRatio; label: string; hint: string }[] = [
  { value: 'auto',  label: 'Auto',  hint: 'Определяется автоматически' },
  { value: '1:1',   label: '1:1',   hint: 'Аватарки, квадратные посты' },
  { value: '3:4',   label: '3:4',   hint: 'Портреты, Pinterest' },
  { value: '9:16',  label: '9:16',  hint: 'Reels, TikTok, Stories' },
  { value: '16:9',  label: '16:9',  hint: 'Обложки каналов, YouTube, широкие посты' },
]

const COUNT_OPTIONS = [1, 2, 3, 4, 5]

const resizeAndCompress = (file: File, maxPx = 1200, quality = 0.82): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = e => {
      const img = new Image()
      img.onerror = reject
      img.onload = () => {
        let { width, height } = img
        if (width > maxPx || height > maxPx) {
          const r = Math.min(maxPx / width, maxPx / height)
          width = Math.round(width * r)
          height = Math.round(height * r)
        }
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        canvas.getContext('2d')!.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.src = e.target!.result as string
    }
    reader.readAsDataURL(file)
  })

const base64ToBlob = (dataUrl: string): Blob => {
  const [header, data] = dataUrl.split(',')
  const mime = header.match(/:(.*?);/)![1]
  const binary = atob(data)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return new Blob([bytes], { type: mime })
}

const loadModels = (): SavedModel[] => {
  try {
    const old = localStorage.getItem('pinst_model')
    if (old) {
      const parsed = JSON.parse(old) as { photos: ModelPhoto[]; savedAt: string }
      const migrated: SavedModel = { id: `model_${Date.now()}`, ...parsed }
      localStorage.setItem(MODELS_KEY, JSON.stringify([migrated]))
      localStorage.setItem(ACTIVE_KEY, migrated.id)
      localStorage.removeItem('pinst_model')
      return [migrated]
    }
    const stored = localStorage.getItem(MODELS_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const loadActiveId = (): string | null => localStorage.getItem(ACTIVE_KEY)

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })

interface TempPhoto {
  id: string
  file: File
  preview: string
}


export default function CreateScreen() {
  const location = useLocation()
  const routeState = location.state as { preset?: { id: string; name: string }; hidePrompt?: boolean } | null
  const routePreset = routeState?.preset
  const hidePrompt = routeState?.hidePrompt === true
  const { hapticFeedback } = useTelegram()
  const { user: subUser } = useSubscription()
  const seriesLocked = !subUser?.subscription || subUser.subscription === 'lite'

  const [mode, setMode] = useState<Mode>('simple')
  const [step, setStep] = useState<Step>('upload')
  const [selfPhotos, setSelfPhotos] = useState<File[]>([])
  const [selfPreviews, setSelfPreviews] = useState<string[]>([])
  const [refPhotos, setRefPhotos] = useState<File[]>([])
  const [refPreviews, setRefPreviews] = useState<string[]>([])
  const [enhancePhoto, setEnhancePhoto] = useState<File | null>(null)
  const [enhancePreview, setEnhancePreview] = useState('')
  const [retouchStyle, setRetouchStyle] = useState<RetouchStyle>('enhance')
  const [presetDismissed, setPresetDismissed] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('auto')
  const [photoCount, setPhotoCount] = useState(1)

  const activePreset = !presetDismissed && routePreset ? routePreset : null

  useEffect(() => {
    setPresetDismissed(false)
    setPrompt('')
  }, [routeState?.preset?.id])

  const dismissPreset = useCallback(() => {
    hapticFeedback('light')
    setPresetDismissed(true)
    setPrompt('')
  }, [hapticFeedback])

  const [resultUrls, setResultUrls] = useState<string[]>([])
  const [selectedUrls, setSelectedUrls] = useState<Set<string>>(new Set())
  const [sentUrls, setSentUrls] = useState<Set<string>>(new Set())
  const [sendingUrl, setSendingUrl] = useState<string | null>(null)
  const [toast, setToast] = useState<{ visible: boolean; message: string; type: ToastType }>({
    visible: false, message: '', type: 'default',
  })

  // Model state
  const [models, setModels] = useState<SavedModel[]>(loadModels)
  const [activeModelId, setActiveModelId] = useState<string | null>(loadActiveId)
  const [tempPhotos, setTempPhotos] = useState<TempPhoto[]>([])
  const [modelSheetOpen, setModelSheetOpen] = useState(false)
  const [savingModel, setSavingModel] = useState(false)

  const activeModel = models.find(m => m.id === activeModelId) ?? null
  const modelInputRef = useRef<HTMLInputElement>(null)

  const showToast = useCallback((message: string, type: ToastType = 'default') => {
    setToast({ visible: true, message, type })
  }, [])
  const hideToast = useCallback(() => setToast(t => ({ ...t, visible: false })), [])

  const handleAddSelfPhotos = (files: File[]) => {
    const previews = files.map(f => URL.createObjectURL(f))
    setSelfPhotos(prev => [...prev, ...files].slice(0, 10))
    setSelfPreviews(prev => [...prev, ...previews].slice(0, 10))
  }
  const handleRemoveSelfPhoto = (idx: number) => {
    hapticFeedback('light')
    setSelfPhotos(prev => prev.filter((_, i) => i !== idx))
    setSelfPreviews(prev => prev.filter((_, i) => i !== idx))
  }
  const handleAddRefPhotos = (files: File[]) => {
    const previews = files.map(f => URL.createObjectURL(f))
    setRefPhotos(prev => [...prev, ...files].slice(0, 10))
    setRefPreviews(prev => [...prev, ...previews].slice(0, 10))
  }
  const handleRemoveRefPhoto = (idx: number) => {
    hapticFeedback('light')
    setRefPhotos(prev => prev.filter((_, i) => i !== idx))
    setRefPreviews(prev => prev.filter((_, i) => i !== idx))
  }

  const handleAddModelPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const valid = files.filter(f => {
      if (!f.type.startsWith('image/')) { showToast('Только изображения', 'error'); return false }
      if (f.size > 10 * 1024 * 1024) { showToast('Файл слишком большой (макс 10 МБ)', 'error'); return false }
      return true
    })
    setTempPhotos(prev => [...prev, ...valid.map(f => ({
      id: `${Date.now()}_${Math.random()}`,
      file: f,
      preview: URL.createObjectURL(f),
    }))])
    e.target.value = ''
  }

  const handleRemoveModelPhoto = (id: string) => {
    setTempPhotos(prev => prev.filter(p => p.id !== id))
  }

  const handleSaveModel = async () => {
    if (tempPhotos.length === 0) return
    setSavingModel(true)
    try {
      const photos: ModelPhoto[] = await Promise.all(
        tempPhotos.map(async ({ file }) => ({ dataUrl: await resizeAndCompress(file) }))
      )
      const newModel: SavedModel = { id: `model_${Date.now()}`, photos, savedAt: new Date().toISOString() }
      const updated = [newModel, ...models]
      localStorage.setItem(MODELS_KEY, JSON.stringify(updated))
      localStorage.setItem(ACTIVE_KEY, newModel.id)
      setModels(updated)
      setActiveModelId(newModel.id)
      setTempPhotos([])
      setModelSheetOpen(false)
      hapticFeedback('heavy')
      showToast('Модель сохранена!', 'success')
    } catch {
      showToast('Не удалось сохранить модель', 'error')
    }
    setSavingModel(false)
  }

  const handleSelectModel = (id: string) => {
    hapticFeedback('medium')
    localStorage.setItem(ACTIVE_KEY, id)
    setActiveModelId(id)
    setModelSheetOpen(false)
    showToast('Модель выбрана', 'success')
  }

  const handleDeleteModel = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation()
    hapticFeedback('medium')
    const updated = models.filter(m => m.id !== id)
    localStorage.setItem(MODELS_KEY, JSON.stringify(updated))
    setModels(updated)
    if (activeModelId === id) {
      const newActiveId = updated[0]?.id ?? null
      if (newActiveId) localStorage.setItem(ACTIVE_KEY, newActiveId)
      else localStorage.removeItem(ACTIVE_KEY)
      setActiveModelId(newActiveId)
    }
    showToast('Модель удалена', 'default')
  }

  const openModelSetup = () => { hapticFeedback('light'); setModelSheetOpen(true) }
  const closeModelSheet = () => { setModelSheetOpen(false); setTempPhotos([]) }

  const switchMode = (m: Mode) => {
    hapticFeedback('light')
    setMode(m)
    if (m !== 'reference') { setRefPhotos([]); setRefPreviews([]) }
    if (m !== 'enhance') { setEnhancePhoto(null); setEnhancePreview('') }
    setModelSheetOpen(false)
    setTempPhotos([])
  }

  const handleEnhanceFile = (file: File) => {
    setEnhancePhoto(file)
    const reader = new FileReader()
    reader.onload = e => setEnhancePreview(e.target?.result as string)
    reader.readAsDataURL(file)
  }

  const RETOUCH_STYLE_PROMPTS: Record<RetouchStyle, string> = {
    enhance: `ЗАДАЧА: Обработка и улучшение фотографии

---

АБСОЛЮТНЫЙ ПРИОРИТЕТ — ИДЕНТИЧНОСТЬ ЛИЦА:
- Сохраняй лицо без каких-либо изменений черт и пропорций
- НЕ меняй форму глаз, носа, губ, линию челюсти и скулы
- Сохраняй уникальные особенности: родинки, асимметрии, веснушки, морщины
- НЕ «улучшай» и не «исправляй» черты лица
- Результат должен быть моментально узнаваем как тот же человек

---

ЧТО УЛУЧШАТЬ:
- Детализация и чёткость изображения
- Естественный, ровный тон кожи без пластикового эффекта
- Аккуратная ретушь: убрать временные дефекты (прыщи, усталость), сохранить постоянные черты
- Коррекция экспозиции, баланса белого, контраста — если нужно
- Общее качество фото до уровня профессиональной съёмки

---

ЧТО НЕ МЕНЯТЬ:
- Идентичность и черты лица
- Поза и положение тела
- Фон и окружение
- Одежда и аксессуары
- Общая атмосфера и настроение снимка

---

ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ:
- Фотореалистичный результат, без AI-артефактов
- Естественная текстура кожи (не over-retouched)
- Сохранение исходного разрешения и пропорций`,
    summer: `PHOTO EDITING TASK — NOT A NEW PHOTO, JUST EDITING THE INPUT

====================
WHAT THIS IS
====================

Take the EXACT input photo as-is.
Do NOT change:
- The pose
- The position of the person
- The face angle and expression
- The framing and composition
- The outfit
- Any facial features
- Hair length or color

This is PHOTO RETOUCHING / EDITING only.
The person stays exactly as they are in the input photo.

====================
EDITING INSTRUCTIONS
====================

Apply these changes to the EXISTING photo:

1. TIME OF DAY → Change to night
   • Make the sky dark blue-black (night)
   • Darken the overall background
   • Keep background elements (flowers, bushes) but make them darker/moodier

2. WIND EFFECT → Add strong wind to the hair
   • Her existing long hair starts flying dramatically
   • Multiple strands lifted and blowing in the wind
   • Hair moves upward and to the side
   • Individual strands visible, caught mid-air
   • Natural wind physics — not fake, looks real

3. LIGHTING → Add warm golden rim light from behind
   • Strong warm golden/orange light source behind her (2700-3200K)
   • This backlight glows through her hair — each strand lit golden at the edges
   • Hair edges become luminous and warm
   • Front of face: slightly darker, natural night ambient light
   • Creates dramatic contrast: dark background vs. glowing golden-lit hair
   • Same dramatic backlight effect as reference photo 2

4. OVERALL MOOD → Night aesthetic
   • Cooler, darker shadows
   • Warm vs. dark contrast
   • Moody, cinematic, natural night feel
   • Slight grain/noise consistent with iPhone night photography

====================
WHAT STAYS 100% THE SAME
====================

- Her EXACT face — every feature unchanged
- Her EXACT pose and body position
- Her EXACT expression
- Her EXACT outfit (black top, Dior bag, necklace, jewelry)
- Her EXACT hair color and length
- Her EXACT skin tone and texture
- Composition and framing — identical to input

====================
TECHNICAL STYLE
====================

- Realistic iPhone night photo look
- Candid, natural feel
- Not overly retouched
- Natural skin texture preserved
- Sharp focus on face maintained
- Background bokeh natural
- Grain consistent with night iPhone photo

====================
VERIFICATION
====================

☐ Same pose as input? (not changed)
☐ Same face angle as input? (not changed)
☐ Same expression as input? (not changed)
☐ Same outfit as input? (not changed)
☐ Sky/background now dark (night)?
☐ Hair dramatically flying in wind?
☐ Warm golden rim light glowing through hair from behind?
☐ Hair edges luminous and golden-lit?
☐ Looks like a real night photo edit?
☐ Skin texture and face details preserved?
☐ Would she recognize herself and her pose instantly?

IF ANY = NO → RE-EDIT KEEPING ORIGINAL POSE AND FACE.

====================
OUTPUT
====================

The input photo edited to night time: same exact pose, same face, same expression,
same outfit — only the sky turned dark night, strong wind added making her long hair
fly dramatically, warm golden-orange rim light from behind glowing through her hair
creating luminous golden strand edges, dark moody background. Looks like the same
photo taken at night with wind. iPhone night photo aesthetic, natural grain, sharp face.

SAME PERSON. SAME POSE. SAME FACE. JUST NIGHT + WIND + GOLDEN BACKLIGHT ADDED.`,
    glam: `PHOTO EDITING TASK — EDIT THE INPUT PHOTO ONLY

====================
WHAT THIS IS
====================

Take the EXACT input photo as-is.
Do NOT change:
- The pose
- The face angle and expression
- The framing and composition
- The outfit
- Any facial features

This is LIGHTING EDIT only.

====================
EDITING INSTRUCTIONS
====================

EFFECT: Club/flash spotlight — person glows bright, background goes dark

1. SUBJECT BRIGHTNESS → Make the person glow
   • Dramatically brighten the person (face, skin, outfit)
   • Skin looks luminous, almost over-exposed in a natural way
   • Face bright and clear — like caught in a direct flash or spotlight
   • Skin has that glossy, dewy, slightly overlit club photo look
   • Eyes bright and alive
   • Hair lit from front — warm, bright, glowing strands

2. BACKGROUND → Darken dramatically
   • Push background to near black (#0A0A0A to #1A1A1A)
   • All background elements fade into darkness
   • Any people or objects behind = barely visible or invisible
   • Creates stark contrast: bright glowing subject vs dark void background
   • Vignette effect — darkness creeps in from all edges toward the subject

3. LIGHTING QUALITY → Club flash aesthetic
   • Looks like a flash photo taken in a dark club/bar
   • Natural flash overexposure on skin (not harsh — soft glow)
   • Slight warm tone on skin (golden/peach glow)
   • Whites slightly blown out naturally
   • Shadows under chin/neck deep and dark
   • High contrast between lit skin and dark surroundings

4. COLOR GRADING → Nightclub aesthetic
   • Warm golden/peach tones on skin
   • Cold dark blues/blacks in background
   • High contrast overall
   • Slight desaturation of background
   • Skin tones rich and warm
   • Can have slight film grain for authenticity

5. QUALITY UPGRADE:
   • Sharpen face and skin details
   • Clean up noise while keeping natural texture
   • Professional retouch quality
   • Skin natural but polished

====================
WHAT STAYS THE SAME
====================

- EXACT pose and position
- EXACT face and expression
- EXACT outfit
- EXACT hair color and style
- EXACT facial features — nothing changed
- Composition identical to input

====================
TECHNICAL SPECS
====================

- High contrast ratio (subject: very bright / background: very dark)
- Vignette strength: strong (background nearly black at edges)
- Skin brightness: +60-80% from original
- Background darkness: -80-90% from original
- Color temperature on subject: warm (3200-4000K feel)
- Background color: cold dark blue-black
- Grain: subtle, natural film grain

====================
VERIFICATION
====================

☐ Same pose as input?
☐ Same face and expression?
☐ Person visibly glowing / brightly lit?
☐ Skin luminous and dewy?
☐ Background near black / very dark?
☐ Strong contrast between bright subject and dark background?
☐ Looks like club flash photo aesthetic?
☐ Warm tones on skin?
☐ Natural, not fake or AI-looking?
☐ Would person recognize themselves instantly?

IF ANY = NO → RE-EDIT.

====================
OUTPUT
====================

Input photo edited with club flash spotlight effect: person glows brightly as if
caught in direct flash/spotlight, skin luminous and warm, face sharp and clear —
while background is pushed to near black, creating dramatic high-contrast nightclub
aesthetic. Strong vignette from edges. Warm golden skin tones vs cold dark background.
Natural film grain. Professional quality. Same pose, same face, same outfit — only
the lighting dramatically changed.

SAME PERSON. SAME POSE. SAME FACE.
EFFECT: GLOWING SUBJECT + DARK BACKGROUND.`,
  }

  const handleEnhance = async () => {
    if (!enhancePhoto) return
    hapticFeedback('medium')
    setStep('loading')
    try {
      const fd = new FormData()
      fd.append('photo', enhancePhoto)
      const stylePrompt = RETOUCH_STYLE_PROMPTS[retouchStyle]
      if (stylePrompt) fd.append('prompt', stylePrompt)
      const { data: { task_id } } = await createRetouch(fd)
      const t = await streamTask(task_id)
      if (t.state !== 'success' || !t.image_url) {
        throw new Error(t.error || 'task failed')
      }
      setResultUrls([t.image_url])
      setStep('result')
    } catch (err: any) {
      setStep('upload')
      showToast(err?.response?.data?.error || err?.message || 'Ошибка улучшения фото', 'error')
    }
  }

  const canGenerate = activeModel ? true : selfPhotos.length > 0

  const buildFormData = async (): Promise<FormData> => {
    const fd = new FormData()
    if (activeModel) {
      for (const p of activeModel.photos) fd.append('model_photo', base64ToBlob(p.dataUrl), 'model.jpg')
    } else {
      for (const f of selfPhotos) {
        const compressed = await resizeAndCompress(f)
        fd.append('photo', base64ToBlob(compressed), 'photo.jpg')
      }
    }
    if (mode === 'reference') {
      for (const f of refPhotos) {
        const compressed = await resizeAndCompress(f)
        fd.append('reference', base64ToBlob(compressed), 'ref.jpg')
      }
    }
    if (prompt) fd.append('prompt', prompt)
    if (activePreset && mode === 'simple') fd.append('preset', activePreset.id)
    if (aspectRatio !== 'auto') fd.append('aspect_ratio', aspectRatio)
    return fd
  }

  const handleGenerate = async () => {
    if (!canGenerate) return
    hapticFeedback('medium')
    setStep('loading')
    const call = mode === 'reference' ? createReference : createSimple
    try {
      const submissions = await Promise.all(
        Array.from({ length: photoCount }, () => buildFormData().then(fd => call(fd)))
      )
      const results = await Promise.all(
        submissions.map(s => streamTask(s.data.task_id))
      )
      const urls: string[] = []
      for (const t of results) {
        if (t.state !== 'success' || !t.image_url) {
          throw new Error(t.error || 'task failed')
        }
        urls.push(t.image_url)
      }
      setResultUrls(urls)
    } catch (err: any) {
      showToast(err?.response?.data?.error || err?.message || 'Ошибка генерации', 'error')
      setStep('upload')
      return
    }
    hapticFeedback('heavy')
    setStep('result')
  }

  useEffect(() => {
    setSelectedUrls(new Set(resultUrls))
  }, [resultUrls])

  const toggleSelected = (url: string) => {
    hapticFeedback('light')
    setSelectedUrls(prev => {
      if (prev.has(url) && prev.size === 1) return prev // минимум одно выбрано
      const next = new Set(prev)
      if (next.has(url)) next.delete(url)
      else next.add(url)
      return next
    })
  }

  const handleSendSelected = async () => {
    const toSend = resultUrls.filter(u => selectedUrls.has(u) && !sentUrls.has(u))
    if (!toSend.length) return
    hapticFeedback('medium')
    setSendingUrl('sending')
    try {
      for (const url of toSend) {
        await sendPhotoToChatByURL(url)
        setSentUrls(prev => new Set(prev).add(url))
      }
      hapticFeedback('heavy')
      showToast(toSend.length === 1 ? 'Фото отправлено в чат' : `${toSend.length} фото отправлены в чат`, 'success')
      setTimeout(() => handleAgain(), 1200)
    } catch {
      hapticFeedback('heavy')
      showToast('Не удалось отправить', 'error')
    } finally {
      setSendingUrl(null)
    }
  }

  const handleAgain = () => {
    hapticFeedback('light')
    setSelfPhotos([]); setSelfPreviews([])
    setRefPhotos([]); setRefPreviews([])
    setResultUrls([])
    setSentUrls(new Set())
    setStep('upload')
  }

  const presetChip = activePreset != null && mode === 'simple' ? (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5, flexShrink: 0,
      maxWidth: '58%', background: 'rgba(139,92,246,0.15)',
      border: '1px solid rgba(139,92,246,0.3)', borderRadius: 100,
      color: '#a78bfa', fontSize: 12, padding: '3px 4px 3px 10px',
    }}>
      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>{activePreset.name}</span>
      <button
        type="button"
        onClick={e => { e.stopPropagation(); dismissPreset() }}
        aria-label="Убрать пресет"
        style={{
          flexShrink: 0, border: 'none', background: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2px 2px 2px 4px', margin: 0, lineHeight: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 6L18 18M18 6L6 18" stroke="#a78bfa" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </button>
    </span>
  ) : null

  const scrollPad = {
    ...screenScrollStyle,
    paddingBottom: 'max(90px, calc(90px + env(safe-area-inset-bottom)))',
    gap: step === 'result' ? 10 : 14, display: 'flex', flexDirection: 'column',
  } as React.CSSProperties

  const stepWrap: React.CSSProperties = {
    flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden',
  }


  // ── Model sheet panel ──
  const modelSetupPanel = (
    <GlassCard style={{ padding: 16 }}>
      {models.length > 0 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <p style={{ ...labelStyle, margin: 0 }}>История моделей</p>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)' }}>
              {models.length} {models.length === 1 ? 'модель' : models.length < 5 ? 'модели' : 'моделей'}
            </span>
          </div>
          <div style={{
            display: 'flex', gap: 10, overflowX: 'auto',
            paddingBottom: 6, marginBottom: 18,
            WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
          }}>
            {models.map(model => {
              const isActive = model.id === activeModelId
              const thumb = model.photos[0]?.dataUrl
              return (
                <div key={model.id} style={{ flexShrink: 0, position: 'relative', width: 80 }}>
                  <button
                    type="button"
                    onClick={() => !isActive && handleSelectModel(model.id)}
                    style={{ display: 'block', width: 80, background: 'transparent', border: 'none', padding: 0, cursor: isActive ? 'default' : 'pointer' }}
                  >
                    <div style={{
                      width: 80, height: 96, borderRadius: 12, overflow: 'hidden',
                      border: isActive ? '2px solid #8b5cf6' : '1.5px solid rgba(255,255,255,0.1)',
                      boxShadow: isActive ? '0 0 16px rgba(139,92,246,0.5)' : 'none',
                      transition: 'border 0.15s, box-shadow 0.15s', position: 'relative',
                    }}>
                      {thumb
                        ? <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        : <div style={{ width: '100%', height: '100%', background: 'rgba(139,92,246,0.1)' }} />
                      }
                      {!isActive && (
                        <div style={{
                          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div style={{
                            background: 'rgba(255,255,255,0.15)', borderRadius: 20,
                            padding: '3px 8px', fontSize: 10,
                            color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                          }}>Выбрать</div>
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <div style={{
                        position: 'absolute', top: 6, left: 6, width: 22, height: 22,
                        borderRadius: '50%', background: '#8b5cf6', border: '2px solid #0a0a0f',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 6px rgba(139,92,246,0.6)',
                      }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <p style={{
                      margin: '5px 0 0', fontSize: 10, textAlign: 'center',
                      fontFamily: 'Inter, sans-serif',
                      color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.3)',
                      fontWeight: isActive ? 600 : 400,
                    }}>
                      {isActive ? '● ' : ''}{formatDate(model.savedAt)}
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={e => handleDeleteModel(model.id, e)}
                    style={{
                      position: 'absolute', top: -6, right: -6, width: 22, height: 22,
                      borderRadius: '50%', background: 'rgba(20,10,40,0.95)',
                      border: '1.5px solid rgba(255,255,255,0.18)',
                      color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', padding: 0, lineHeight: 1,
                    }}
                  >×</button>
                </div>
              )
            })}
          </div>
          <div style={{ height: 1, background: 'rgba(139,92,246,0.12)', marginBottom: 16 }} />
        </>
      )}

      {models.length === 0 ? (
        <>
          <p style={labelStyle}>Установить модель</p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: '0 0 14px', lineHeight: 1.5 }}>
            Добавь любое количество фото — они будут использоваться вместо загрузки каждый раз
          </p>
        </>
      ) : (
        <p style={{ ...labelStyle, marginBottom: 12 }}>Добавить новую модель</p>
      )}

      {tempPhotos.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          {tempPhotos.map(p => (
            <div key={p.id} style={{ position: 'relative' }}>
              <div style={{ width: 72, height: 72, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(139,92,246,0.3)' }}>
                <img src={p.preview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <button
                onClick={() => handleRemoveModelPhoto(p.id)}
                style={{
                  position: 'absolute', top: -7, right: -7, width: 22, height: 22,
                  borderRadius: '50%', background: 'rgba(15,10,30,0.95)',
                  border: '1.5px solid rgba(139,92,246,0.35)',
                  color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', padding: 0, lineHeight: 1,
                  backdropFilter: 'blur(6px)',
                }}
              >×</button>
            </div>
          ))}
        </div>
      )}

      <input ref={modelInputRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handleAddModelPhoto} />
      <button
        onClick={() => modelInputRef.current?.click()}
        style={{
          width: '100%', background: 'rgba(139,92,246,0.08)',
          border: '1.5px dashed rgba(139,92,246,0.4)', borderRadius: 12,
          color: '#a78bfa', fontSize: 14, fontWeight: 500, padding: '12px',
          cursor: 'pointer', fontFamily: 'Inter, sans-serif',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#8b5cf6" strokeWidth="2"/>
          <path d="M12 8V16M8 12H16" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {tempPhotos.length > 0 ? 'Добавить ещё' : 'Добавить фото'}
      </button>

      {tempPhotos.length > 0 && (
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <Button onClick={handleSaveModel} disabled={savingModel} style={{ flex: 1 }}>
            {savingModel ? 'Сохраняем…' : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16L21 8V19C21 20.1 20.1 21 19 21Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21V13H7V21" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 3V8H15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Сохранить
              </>
            )}
          </Button>
          <button
            onClick={() => setTempPhotos([])}
            style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, color: 'rgba(255,255,255,0.5)', fontSize: 13,
              padding: '0 16px', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
            }}
          >Отмена</button>
        </div>
      )}
    </GlassCard>
  )

  return (
    <div style={screenShellStyle}>
      <Toast message={toast.message} type={toast.type} visible={toast.visible} onHide={hideToast} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, overflow: 'hidden' }}>
        <AnimatePresence mode="wait">

          {/* ── LOADING ── */}
          {step === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              style={stepWrap}
            >
              <ScreenTopBar
                title={photoCount > 1 ? `Создаём ${photoCount} фото` : 'Создаём фото'}
                subtitle="Пару секунд…"
                profileButton
              />
              <div style={{ ...scrollPad, paddingTop: 8 }}>
                <GlassCard style={{ padding: 20 }}>
                  <LoadingSpinner message={photoCount > 1 ? `Генерируем ${photoCount} фотографии…` : 'Создаём твоё фото...'} />
                </GlassCard>
              </div>
            </motion.div>
          )}

          {/* ── RESULT ── */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              style={{ ...stepWrap, paddingBottom: 0 }}
            >
              <ScreenTopBar
                title={resultUrls.length > 1 ? `Готово ✦ ${resultUrls.length} фото` : 'Готово ✦'}
                subtitle={resultUrls.length > 1 ? 'Нажми на фото, чтобы снять выбор' : undefined}
                profileButton
              />

              {/* Carousel */}
              <div style={{
                flex: 1, minHeight: 0,
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                gap: 12,
                padding: '12px 16px 0',
              }}>
                {resultUrls.map((url, i) => {
                  const isSelected = selectedUrls.has(url)
                  const isSent = sentUrls.has(url)
                  const isLast = selectedUrls.size === 1 && isSelected
                  const single = resultUrls.length === 1
                  return (
                    <div
                      key={i}
                      onClick={() => !single && !isSent && toggleSelected(url)}
                      style={{
                        flex: '0 0 calc(100% - 32px)',
                        scrollSnapAlign: 'center',
                        position: 'relative',
                        borderRadius: 20,
                        overflow: 'hidden',
                        border: isSent
                          ? '2px solid rgba(139,92,246,0.7)'
                          : isSelected
                            ? '2px solid rgba(139,92,246,0.55)'
                            : '2px solid rgba(255,255,255,0.1)',
                        boxShadow: isSelected && !isSent
                          ? '0 0 32px rgba(139,92,246,0.25)'
                          : '0 0 16px rgba(0,0,0,0.3)',
                        cursor: (single || isSent || isLast) ? 'default' : 'pointer',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                      }}
                    >
                      <img
                        src={url}
                        alt={`result ${i + 1}`}
                        style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                      />

                      {/* Dim overlay when deselected (multi-photo only) */}
                      {!single && !isSelected && !isSent && (
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(0,0,0,0.52)',
                          transition: 'opacity 0.2s',
                        }} />
                      )}

                      {/* Sent overlay */}
                      {isSent && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(139,92,246,0.18)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}
                        >
                          <div style={{
                            width: 52, height: 52, borderRadius: '50%',
                            background: 'rgba(139,92,246,0.9)',
                            backdropFilter: 'blur(8px)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 24px rgba(139,92,246,0.5)',
                          }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17L4 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </motion.div>
                      )}

                      {/* Checkbox (multi-photo only) */}
                      {!single && !isSent && (
                        <div style={{
                          position: 'absolute', top: 12, right: 12,
                          width: 30, height: 30, borderRadius: '50%',
                          background: isSelected ? '#8b5cf6' : 'rgba(10,10,15,0.6)',
                          border: isSelected ? '2px solid #8b5cf6' : '2px solid rgba(255,255,255,0.4)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          backdropFilter: 'blur(8px)',
                          boxShadow: isSelected ? '0 0 14px rgba(139,92,246,0.7)' : 'none',
                          transition: 'all 0.15s ease',
                        }}>
                          {isSelected && (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M20 6L9 17L4 12" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      )}

                      {/* Counter badge (multi-photo only) */}
                      {!single && (
                        <div style={{
                          position: 'absolute', top: 12, left: 12,
                          background: 'rgba(10,10,15,0.65)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 20, padding: '3px 10px',
                          fontSize: 12, fontWeight: 600,
                          color: 'rgba(255,255,255,0.8)',
                        }}>
                          {i + 1} / {resultUrls.length}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Fixed bottom action panel */}
              <div style={{
                padding: '12px 16px',
                paddingBottom: 'max(12px, calc(12px + env(safe-area-inset-bottom)))',
                display: 'flex', flexDirection: 'column', gap: 8,
                background: 'linear-gradient(to top, rgba(10,10,15,0.95) 70%, transparent)',
              }}>
                {(() => {
                  const pendingCount = [...selectedUrls].filter(u => !sentUrls.has(u)).length
                  return (
                    <Button
                      onClick={handleSendSelected}
                      disabled={!!sendingUrl || pendingCount === 0}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {sendingUrl
                        ? 'Отправляю...'
                        : pendingCount === 0
                          ? '✓ Все отправлены'
                          : resultUrls.length === 1
                            ? 'Отправить фото'
                            : `Отправить выбранные (${pendingCount})`
                      }
                    </Button>
                  )
                })()}
                <Button variant="ghost" onClick={handleAgain}>Создать ещё</Button>
              </div>
            </motion.div>
          )}

          {/* ── UPLOAD FORM ── */}
          {step === 'upload' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              style={stepWrap}
            >
              <ScreenTopBar title="Создать фото" subtitle="Выбери режим и загрузи фото" profileButton />

              <div style={scrollPad}>
                {/* Mode toggle — hidden when coming from catalog */}
                {!hidePrompt && <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(139,92,246,0.15)',
                  borderRadius: 14, padding: 4, gap: 4,
                }}>
                  {([
                    { key: 'simple', label: 'Обычный', icon: '✦' },
                    { key: 'reference', label: 'Референс', icon: '◈' },
                    { key: 'enhance', label: 'Обработка', icon: '✧' },
                  ] as const).map(m => (
                    <button
                      key={m.key}
                      onClick={() => switchMode(m.key)}
                      style={{
                        background: mode === m.key ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'transparent',
                        border: 'none', borderRadius: 10,
                        color: mode === m.key ? '#ffffff' : 'rgba(255,255,255,0.4)',
                        fontSize: 12, fontWeight: mode === m.key ? 600 : 400,
                        padding: '9px 4px', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
                        transition: 'all 0.15s ease',
                        boxShadow: mode === m.key ? '0 0 12px rgba(139,92,246,0.4)' : 'none',
                      }}
                    >
                      <span style={{ fontSize: 13 }}>{m.icon}</span>
                      {m.label}
                    </button>
                  ))}
                </div>}

                <motion.div
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
                >
                  {/* Photo / Model — hidden in enhance mode */}
                  {mode !== 'enhance' && activeModel ? (
                    <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
                      <button
                        type="button"
                        onClick={openModelSetup}
                        style={{
                          width: '100%', background: 'transparent', border: 'none',
                          padding: '11px 14px', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <p style={{ ...labelStyle, margin: 0 }}>Моя модель</p>
                          {models.length > 1 && (
                            <span style={{
                              fontSize: 10, color: 'rgba(167,139,250,0.7)',
                              background: 'rgba(139,92,246,0.12)',
                              border: '1px solid rgba(139,92,246,0.2)',
                              borderRadius: 6, padding: '1px 6px', fontFamily: 'Inter, sans-serif',
                            }}>{models.length} сохранено</span>
                          )}
                        </div>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                          <path d="M11 4H4C3.4 4 3 4.4 3 5V20C3 20.6 3.4 21 4 21H19C19.6 21 20 20.6 20 20V13" stroke="rgba(167,139,250,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.5L21.5 5.5L12 15H9V12L18.5 2.5Z" stroke="rgba(167,139,250,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <div style={{ height: 1, background: 'rgba(139,92,246,0.1)' }} />
                      <div style={{ padding: '12px 14px 14px' }}>
                        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
                          {activeModel.photos.map((p, i) => (
                            <div key={i} style={{ flexShrink: 0 }}>
                              <div style={{ width: 58, height: 58, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(139,92,246,0.4)' }}>
                                <img src={p.dataUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              </div>
                            </div>
                          ))}
                        </div>
                        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 10, marginBottom: 0 }}>
                          Используется вместо своего фото
                        </p>
                      </div>
                    </GlassCard>
                  ) : mode !== 'enhance' ? (
                    <>
                      <button
                        type="button"
                        onClick={openModelSetup}
                        style={{
                          background: 'transparent', border: '1px solid rgba(139,92,246,0.25)',
                          borderRadius: 12, color: 'rgba(167,139,250,0.8)',
                          fontSize: 13, fontWeight: 500, padding: '10px 16px',
                          cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="3" width="18" height="18" rx="4" stroke="#a78bfa" strokeWidth="2"/>
                          <path d="M12 8V16M8 12H16" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        Установить модель
                      </button>
                      <GlassCard style={{ padding: 14 }}>
                        <p style={{ ...labelStyle, margin: '0 0 10px' }}>Твоё фото</p>
                        <PhotoStrip
                          files={selfPhotos}
                          previews={selfPreviews}
                          onAdd={handleAddSelfPhotos}
                          onRemove={handleRemoveSelfPhoto}
                          onError={msg => showToast(msg, 'error')}
                          maxPhotos={10}
                        />
                      </GlassCard>
                    </>
                  ) : null}

                  {/* Reference */}
                  <AnimatePresence mode="sync">
                    {mode === 'reference' && (
                      <motion.div
                        key="ref"
                        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}
                        style={{ flexShrink: 0 }}
                      >
                        <GlassCard style={{ padding: 14 }}>
                          <p style={{ ...labelStyle, margin: '0 0 10px' }}>Референс</p>
                          <PhotoStrip
                            files={refPhotos}
                            previews={refPreviews}
                            onAdd={handleAddRefPhotos}
                            onRemove={handleRemoveRefPhoto}
                            onError={msg => showToast(msg, 'error')}
                            maxPhotos={1}
                          />
                        </GlassCard>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Prompt + Ratio + Count — single combined card */}
                  {mode !== 'enhance' && (() => {
                    const showPrompt = !hidePrompt && mode !== 'reference'
                    return (
                    <GlassCard style={showPrompt ? { padding: 0, overflow: 'hidden' } : { padding: 14 }}>
                      {showPrompt && (
                        <>
                          <div style={{ padding: '10px 12px 6px' }}>
                            <p style={{ ...labelStyle, margin: '0 0 8px' }}>Промпт</p>
                            <div style={{ position: 'relative' }}>
                              <textarea
                                value={prompt}
                                onChange={e => setPrompt(e.target.value.slice(0, 200))}
                                placeholder='Например: осенний парк, мягкий свет, бежевые тона'
                                rows={3}
                                style={{
                                  width: '100%', background: 'rgba(255,255,255,0.04)',
                                  border: '1px solid rgba(139,92,246,0.2)', borderRadius: 10,
                                  color: '#ffffff', fontSize: 14, padding: '10px 11px',
                                  resize: 'none', outline: 'none',
                                  fontFamily: 'Inter, sans-serif', boxSizing: 'border-box', lineHeight: 1.5,
                                }}
                              />
                              <span style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 11, color: 'rgba(255,255,255,0.2)' }}>
                                {prompt.length}/200
                              </span>
                            </div>
                            {presetChip && <div style={{ marginTop: 8 }}>{presetChip}</div>}
                          </div>
                        </>
                      )}
                      <div style={showPrompt
                        ? { padding: '6px 12px 10px', display: 'flex', flexDirection: 'column', gap: 12 }
                        : { display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                                    height: 28,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: active ? 'rgba(139,92,246,0.22)' : 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${active ? 'rgba(139,92,246,0.65)' : 'rgba(255,255,255,0.08)'}`,
                                    borderRadius: 6, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                                    boxShadow: active ? '0 0 10px rgba(139,92,246,0.2)' : 'none',
                                    transition: 'all 0.15s ease', padding: 0,
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
                                    height: 28,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: active ? 'rgba(139,92,246,0.22)' : 'rgba(255,255,255,0.04)',
                                    border: `1px solid ${active ? 'rgba(139,92,246,0.65)' : 'rgba(255,255,255,0.08)'}`,
                                    borderRadius: 6, cursor: disabled ? 'not-allowed' : 'pointer',
                                    fontFamily: 'Inter, sans-serif', opacity: disabled ? 0.32 : 1,
                                    boxShadow: active ? '0 0 10px rgba(139,92,246,0.2)' : 'none',
                                    transition: 'all 0.15s ease', padding: 0,
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
                      </div>
                    </GlassCard>
                  )
                  })()}

                  {mode !== 'enhance' && (
                    <>
                      <Button onClick={handleGenerate} disabled={!canGenerate} style={{ marginTop: 2 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                        {photoCount > 1
                          ? `Создать ${photoCount} фото`
                          : mode === 'reference' ? 'Создать по референсу' : 'Создать фото'
                        }
                      </Button>
                      {!canGenerate && (
                        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, textAlign: 'center', margin: 0 }}>
                          Сначала загрузи хотя бы одно фото
                        </p>
                      )}
                    </>
                  )}

                  {/* ── Enhance mode ── */}
                  {mode === 'enhance' && (
                    <>
                      <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ padding: '10px 12px' }}>
                          <p style={{ ...labelStyle, margin: '0 0 8px' }}>Фото для обработки</p>
                          {enhancePreview ? (
                            <div style={{ position: 'relative' }}>
                              <button
                                type="button"
                                onClick={e => { e.stopPropagation(); setEnhancePhoto(null); setEnhancePreview('') }}
                                style={{
                                  position: 'absolute', top: -8, right: -8, zIndex: 10,
                                  width: 24, height: 24, borderRadius: '50%',
                                  background: 'rgba(20,10,40,0.95)',
                                  border: '1.5px solid rgba(255,255,255,0.18)',
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  cursor: 'pointer', padding: 0,
                                }}
                              >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                  <path d="M6 6L18 18M18 6L6 18" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                              </button>
                              <label style={{ display: 'block', cursor: 'pointer' }}>
                                <input
                                  type="file" accept="image/*" style={{ display: 'none' }}
                                  onChange={e => { const f = e.target.files?.[0]; if (f) handleEnhanceFile(f) }}
                                />
                                <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', aspectRatio: '1/1' }}>
                                  <img src={enhancePreview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                  <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'rgba(0,0,0,0.35)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    opacity: 0, transition: 'opacity 0.2s',
                                  }}
                                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                                    onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
                                  >
                                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(139,92,246,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <polyline points="17 8 12 3 7 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="12" y1="3" x2="12" y2="15" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          ) : (
                            <label style={{ display: 'block', cursor: 'pointer' }}>
                              <input
                                type="file" accept="image/*" style={{ display: 'none' }}
                                onChange={e => { const f = e.target.files?.[0]; if (f) handleEnhanceFile(f) }}
                              />
                              <div style={{
                                border: '1.5px dashed rgba(139,92,246,0.4)', borderRadius: 12,
                                aspectRatio: '1/1',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                background: 'rgba(139,92,246,0.04)',
                              }}>
                                <UploadIcon size={56} />
                              </div>
                            </label>
                          )}
                        </div>
                      </GlassCard>
                      <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.15)',
                        borderRadius: 14, padding: 4, gap: 4,
                      }}>
                        {([
                          {
                            key: 'enhance' as RetouchStyle, label: 'Улучшение',
                            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                          },
                          {
                            key: 'summer' as RetouchStyle, label: 'Летний вайб',
                            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><path d="M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
                          },
                          {
                            key: 'glam' as RetouchStyle, label: 'Гламур вайб',
                            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M6 3H18L22 9L12 21L2 9L6 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 9H22M6 3L9 9L12 3L15 9L18 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                          },
                        ]).map(s => (
                          <button
                            key={s.key}
                            onClick={() => { hapticFeedback('light'); setRetouchStyle(s.key) }}
                            style={{
                              background: retouchStyle === s.key ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'transparent',
                              border: 'none', borderRadius: 10,
                              color: retouchStyle === s.key ? '#ffffff' : 'rgba(255,255,255,0.4)',
                              fontSize: 11, fontWeight: retouchStyle === s.key ? 600 : 400,
                              padding: '9px 2px', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3,
                              flexDirection: 'column',
                              transition: 'all 0.15s ease',
                              boxShadow: retouchStyle === s.key ? '0 0 12px rgba(139,92,246,0.4)' : 'none',
                              lineHeight: 1.2,
                            }}
                          >
                            {s.icon}
                            {s.label}
                          </button>
                        ))}
                      </div>
                      <Button onClick={handleEnhance} disabled={!enhancePhoto}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
                        </svg>
                        Обработать фото
                      </Button>
                      {!enhancePhoto && (
                        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12, textAlign: 'center', margin: 0 }}>
                          Сначала загрузи фото
                        </p>
                      )}
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Model sheet */}
      {createPortal(
        <AnimatePresence>
          {modelSheetOpen && (
            <>
              <motion.div
                key="model-sheet-backdrop"
                role="presentation"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeModelSheet}
                style={{
                  position: 'fixed', inset: 0, zIndex: 250,
                  background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
                }}
              />
              <motion.div
                key="model-sheet"
                role="dialog"
                aria-modal="true"
                initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 32, stiffness: 380 }}
                style={{
                  position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 251,
                  maxHeight: 'min(88dvh, 560px)', overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  paddingBottom: 'max(20px, calc(16px + env(safe-area-inset-bottom)))',
                  paddingLeft: 16, paddingRight: 16, paddingTop: 10,
                  borderTopLeftRadius: 20, borderTopRightRadius: 20,
                  background: 'linear-gradient(180deg, rgba(16,16,24,0.98) 0%, #0a0a0f 100%)',
                  border: '1px solid rgba(139,92,246,0.2)', borderBottom: 'none',
                  boxShadow: '0 -12px 48px rgba(0,0,0,0.55)',
                }}
              >
                <div style={{
                  width: 36, height: 4, borderRadius: 4,
                  background: 'rgba(255,255,255,0.15)', margin: '0 auto 14px',
                }} />
                {modelSetupPanel}
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.4)',
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  margin: '0 0 10px',
}
