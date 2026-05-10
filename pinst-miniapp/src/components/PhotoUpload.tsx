import { useRef, useState, type DragEvent, type ChangeEvent } from 'react'

interface PhotoUploadProps {
  onFile: (file: File) => void
  preview?: string
  label?: string
  sublabel?: string
  size?: 'large' | 'small'
  onError?: (msg: string) => void
  /** Показать кнопку сброса поверх превью (например, «Твоё фото» без модели) */
  onClear?: () => void
}

export default function PhotoUpload({
  onFile,
  preview,
  label = 'Загрузи своё фото',
  sublabel = 'Нажми или перетащи сюда',
  size = 'large',
  onError,
  onClear,
}: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      onError?.('Загружай только изображения')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      onError?.('Файл слишком большой. Максимум 10 МБ')
      return
    }
    onFile(file)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  const height = size === 'large' ? 220 : 140

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={e => { e.preventDefault(); setDragging(true) }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
      style={{
        border: `2px dashed ${dragging ? 'rgba(139,92,246,0.8)' : 'rgba(139,92,246,0.4)'}`,
        borderRadius: 20,
        background: preview
          ? 'transparent'
          : dragging
          ? 'rgba(139,92,246,0.12)'
          : 'rgba(139,92,246,0.05)',
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onChange}
      />
      {preview ? (
        <>
          <img
            src={preview}
            alt="preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {onClear && (
            <button
              type="button"
              aria-label="Удалить фото"
              onClick={e => {
                e.stopPropagation()
                onClear()
              }}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                width: 28,
                height: 28,
                borderRadius: '50%',
                border: '1px solid rgba(139,92,246,0.45)',
                background: 'rgba(10,10,15,0.75)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                fontSize: 16,
                fontWeight: 700,
                lineHeight: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                fontFamily: 'Inter, sans-serif',
              }}
            >
              ×
            </button>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <div
            style={{
              width: size === 'large' ? 56 : 40,
              height: size === 'large' ? 56 : 40,
              borderRadius: '50%',
              background: 'rgba(139,92,246,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px',
            }}
          >
            <svg width={size === 'large' ? 24 : 18} height={size === 'large' ? 24 : 18} viewBox="0 0 24 24" fill="none">
              <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 16.7C21.2 15.8 22 14.5 22 13C22 10.8 20.2 9 18 9C17.7 9 17.4 9 17.1 9.1C16.5 6.7 14.4 5 12 5C9 5 6.5 7.5 6.5 10.5C6.5 10.7 6.5 10.9 6.5 11.1C4.5 11.6 3 13.4 3 15.5C3 17.4 4.1 19 5.7 19.7" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={{ color: '#a78bfa', fontSize: size === 'large' ? 15 : 13, fontWeight: 500, margin: 0 }}>
            {label}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, margin: '4px 0 0' }}>
            {sublabel}
          </p>
        </div>
      )}
    </div>
  )
}
