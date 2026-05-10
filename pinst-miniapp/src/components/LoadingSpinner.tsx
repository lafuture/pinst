import { useEffect, useState } from 'react'

interface LoadingSpinnerProps {
  message?: string
}

export default function LoadingSpinner({ message = 'Загрузка...' }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 95) return p
        return p + Math.random() * 3
      })
    }, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        padding: 40,
      }}
    >
      <div style={{ position: 'relative', width: 80, height: 80 }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 8,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: '#8b5cf6',
            borderRightColor: '#8b5cf6',
            animation: 'spin 1s linear infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 16,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderBottomColor: '#a78bfa',
            animation: 'spin 1.5s linear infinite reverse',
          }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#ffffff', fontSize: 16, fontWeight: 500, margin: 0 }}>{message}</p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, margin: '8px 0 0' }}>
          {Math.round(progress)}%
        </p>
      </div>
      <div
        style={{
          width: 160,
          height: 4,
          borderRadius: 100,
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            borderRadius: 100,
            background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}
