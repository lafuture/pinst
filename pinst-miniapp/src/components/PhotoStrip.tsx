import { useRef, type DragEvent, type ChangeEvent } from 'react'
import UploadIcon from './UploadIcon'

interface PhotoStripProps {
  files: File[]
  previews: string[]
  onAdd: (files: File[]) => void
  onRemove: (index: number) => void
  onError?: (msg: string) => void
  maxPhotos?: number
}

const MAX_SIZE = 10 * 1024 * 1024
const THUMB_W = 75
const THUMB_H = 100

export default function PhotoStrip({
  files,
  previews,
  onAdd,
  onRemove,
  onError,
  maxPhotos = 10,
}: PhotoStripProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const canAdd = files.length < maxPhotos
  const single = maxPhotos === 1

  const validate = (incoming: File[]): File[] =>
    incoming.filter(f => {
      if (!f.type.startsWith('image/')) { onError?.('Загружай только изображения'); return false }
      if (f.size > MAX_SIZE) { onError?.('Файл слишком большой. Максимум 10 МБ'); return false }
      return true
    })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files || [])
    const valid = validate(picked).slice(0, maxPhotos - files.length)
    if (valid.length) onAdd(valid)
    e.target.value = ''
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files)
    const valid = validate(dropped).slice(0, maxPhotos - files.length)
    if (valid.length) onAdd(valid)
  }

  /* ── Add tile (used both as empty-state and "add more" button) ── */
  const addTile = (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
      style={{
        flexShrink: 0,
        width: THUMB_W,
        height: THUMB_H,
        borderRadius: 14,
        border: '2px dashed rgba(139,92,246,0.55)',
        background: 'rgba(139,92,246,0.07)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        cursor: 'pointer',
        transition: 'border-color 0.15s, background 0.15s',
        padding: 0,
      }}
    >
      <UploadIcon size={44} />
    </button>
  )

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={!single}
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      <div style={{
        display: 'flex',
        gap: 8,
        overflowX: 'auto',
        paddingTop: 10,
        paddingBottom: 8,
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        alignItems: 'flex-start',
      }}>
        {/* Photo thumbnails */}
        {previews.map((src, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              position: 'relative',
              width: THUMB_W,
              height: THUMB_H,
            }}
          >
            <div style={{
              width: THUMB_W,
              height: THUMB_H,
              borderRadius: 14,
              overflow: 'hidden',
              border: '1.5px solid rgba(139,92,246,0.5)',
              boxShadow: '0 4px 18px rgba(0,0,0,0.4), 0 0 0 0px rgba(139,92,246,0)',
            }}>
              <img
                src={src}
                alt={`photo ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>


            {/* delete button */}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); onRemove(i) }}
              style={{
                position: 'absolute',
                top: -7,
                right: -7,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: 'rgba(15,10,30,0.95)',
                border: '1.5px solid rgba(139,92,246,0.35)',
                color: 'rgba(255,255,255,0.75)',
                fontSize: 13,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                padding: 0,
                lineHeight: 1,
                zIndex: 3,
                backdropFilter: 'blur(6px)',
              }}
            >×</button>
          </div>
        ))}

        {/* Add tile */}
        {canAdd && addTile}
      </div>

      {/* count hint — only for multi */}
      {!single && files.length > 0 && (
        <p style={{
          fontSize: 11,
          color: 'rgba(255,255,255,0.2)',
          margin: '2px 0 0',
          fontFamily: 'Inter, sans-serif',
        }}>
          {files.length} / {maxPhotos} фото
        </p>
      )}
    </div>
  )
}
