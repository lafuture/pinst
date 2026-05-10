interface GenerationCounterProps {
  remaining: number
  limit: number
}

export default function GenerationCounter({ remaining, limit }: GenerationCounterProps) {
  const used = limit - remaining
  const percent = (used / limit) * 100
  const isLow = remaining <= 3
  const barColor = isLow ? '#ef4444' : '#8b5cf6'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>Генерации</span>
        <span
          style={{
            background: 'rgba(139,92,246,0.2)',
            border: '1px solid rgba(139,92,246,0.4)',
            borderRadius: 100,
            color: isLow ? '#ef4444' : '#a78bfa',
            fontSize: 12,
            padding: '4px 12px',
            fontWeight: 600,
          }}
        >
          {remaining} / {limit}
        </span>
      </div>
      <div
        style={{
          height: 6,
          borderRadius: 100,
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${percent}%`,
            borderRadius: 100,
            background: barColor,
            boxShadow: `0 0 8px ${barColor}80`,
            transition: 'width 0.4s ease',
          }}
        />
      </div>
    </div>
  )
}
