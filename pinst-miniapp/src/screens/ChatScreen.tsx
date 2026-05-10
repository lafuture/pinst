import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { APP_HEADER_TOP } from '../components/ScreenTopBar'
import { useTelegram } from '../hooks/useTelegram'
import { useSubscription } from '../hooks/useSubscription'
import { streamChat, ensureChatSessionReset, getChatHistory } from '../api/chat'

interface Message {
  id: string
  role: 'user' | 'ai'
  text: string
  ts: number
}

const SUGGESTIONS = [
  'Помоги написать промпт для генерации',
    'Придумай идеи для контента на неделю',
  'Помоги написать пост для соцсетей',
  'Как сочетать цвета в одежде?',
]

const TICK_MS = 18

function renderText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i} style={{ fontWeight: 700 }}>{part.slice(2, -2)}</strong>
      : part
  )
}

export default function ChatScreen() {
  const navigate = useNavigate()
  const { hapticFeedback } = useTelegram()
  const { user, loading: subLoading } = useSubscription()
  const hasSubscription = subLoading || !!user?.subscription
  const [messages, setMessages] = useState<Message[]>([])
  const [historyLoading, setHistoryLoading] = useState(true)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Typewriter state
  const receivedRef = useRef('')       // full text received from stream
  const shownLenRef = useRef(0)        // how many chars are currently displayed
  const streamDoneRef = useRef(false)  // whether SSE stream has ended
  const typeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const streamingAiIdRef = useRef<string | null>(null)
  const isStreamingRef = useRef(false)

  // On first mount: reset session history, then load it
  useEffect(() => {
    let cancelled = false
    async function init() {
      await ensureChatSessionReset()
      if (cancelled) return
      const history = await getChatHistory()
      if (cancelled) return
      setHistoryLoading(false)
      if (history.length > 0) {
        setMessages(history.map((m, i) => ({
          id: `hist_${i}`,
          role: m.role === 'assistant' ? 'ai' : 'user',
          text: m.content,
          ts: new Date(m.ts).getTime(),
        })))
      } else {
        setMessages([{
          id: '0', role: 'ai',
          text: 'Привет! Я Pinst AI — помогу тебе придумать описание для поста, идею для фотосессии или расскажу про тренды 💜',
          ts: Date.now(),
        }])
      }
    }
    init()
    return () => { cancelled = true }
  }, [])

  const stopTypewriter = useCallback(() => {
    if (typeTimerRef.current !== null) {
      clearInterval(typeTimerRef.current)
      typeTimerRef.current = null
    }
  }, [])

  const startTypewriter = useCallback((aiId: string) => {
    stopTypewriter()
    typeTimerRef.current = setInterval(() => {
      const target = receivedRef.current
      const shown = shownLenRef.current
      const lag = target.length - shown

      if (lag <= 0) {
        if (streamDoneRef.current) {
          stopTypewriter()
          streamingAiIdRef.current = null
          isStreamingRef.current = false
        }
        return
      }

      // Catch up gradually if falling behind, otherwise 1 char per tick
      const step = lag > 40 ? 3 : lag > 15 ? 2 : 1
      const newLen = shown + step
      shownLenRef.current = newLen
      const text = target.slice(0, newLen)
      setMessages(prev => prev.map(m => m.id === aiId ? { ...m, text } : m))
    }, TICK_MS)
  }, [stopTypewriter])

  // Scroll: instant while typewriter is running, smooth otherwise
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: isStreamingRef.current ? 'instant' : 'smooth' })
  }, [messages, loading])

  const send = useCallback(async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    hapticFeedback('light')
    setInput('')

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: trimmed, ts: Date.now() }
    const aiId = (Date.now() + 1).toString()
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    receivedRef.current = ''
    shownLenRef.current = 0
    streamDoneRef.current = false
    streamingAiIdRef.current = null
    isStreamingRef.current = false
    let firstChunk = true

    try {
      await streamChat({ prompt: trimmed }, {
        onDelta: chunk => {
          receivedRef.current += chunk
          if (firstChunk) {
            firstChunk = false
            streamingAiIdRef.current = aiId
            isStreamingRef.current = true
            setLoading(false)
            setMessages(prev => [...prev, { id: aiId, role: 'ai', text: '', ts: Date.now() }])
            startTypewriter(aiId)
          }
        },
      })
    } catch (err: any) {
      stopTypewriter()
      const reply = err?.message ? `Ошибка: ${err.message}` : 'Не удалось получить ответ. Попробуй ещё раз.'
      if (firstChunk) {
        setMessages(prev => [...prev, { id: aiId, role: 'ai', text: reply, ts: Date.now() }])
      } else {
        // Show full text immediately on error
        setMessages(prev => prev.map(m => m.id === aiId ? { ...m, text: receivedRef.current } : m))
      }
      streamingAiIdRef.current = null
      isStreamingRef.current = false
    } finally {
      streamDoneRef.current = true
      hapticFeedback('light')
      setLoading(false)
      // Typewriter will stop itself once it finishes showing remaining text
    }
  }, [loading, hapticFeedback, startTypewriter, stopTypewriter])

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: 12,
          paddingTop: APP_HEADER_TOP,
          borderBottom: '1px solid rgba(139,92,246,0.12)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
          background: 'rgba(10,10,15,0.94)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 2,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1, minWidth: 0 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(139,92,246,0.5)',
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12C2 14.1 2.64 16.06 3.74 17.69L2.29 21.71L6.31 20.26C7.94 21.36 9.9 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="rgba(255,255,255,0.15)" stroke="#ffffff" strokeWidth="1.5"/>
              <circle cx="8.5" cy="12" r="1.2" fill="#ffffff"/>
              <circle cx="12" cy="12" r="1.2" fill="#ffffff"/>
              <circle cx="15.5" cy="12" r="1.2" fill="#ffffff"/>
            </svg>
          </div>
          <div>
            <p style={{ color: '#ffffff', fontSize: 15, fontWeight: 600, margin: 0 }}>Pinst AI</p>
            <p style={{ color: '#22c55e', fontSize: 11, margin: '2px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px rgba(34,197,94,0.7)' }} />
              Онлайн
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => { hapticFeedback('light'); navigate('/tariffs') }}
            aria-label="Купить подписку"
            style={{
              visibility: hasSubscription ? 'hidden' : 'visible',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              border: 'none',
              boxShadow: '0 0 14px rgba(168,85,247,0.7), 0 0 28px rgba(236,72,153,0.35)',
              cursor: 'pointer',
              padding: '0 14px',
              height: 34,
              borderRadius: 100,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              color: '#ffffff',
              fontSize: 13,
              fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.01em',
            }}
          >
            Купить
          </button>
          <button
            type="button"
            onClick={() => { hapticFeedback('light'); navigate('/profile') }}
            aria-label="Профиль"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
              border: '1.5px solid rgba(139,92,246,0.45)',
              cursor: 'pointer',
              padding: 0,
              width: 40,
              height: 40,
              borderRadius: '50%',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(139,92,246,0.5)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
          padding: '16px 16px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {historyLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%',
              border: '2.5px solid rgba(139,92,246,0.2)',
              borderTopColor: '#8b5cf6',
              animation: 'spin 0.7s linear infinite',
            }} />
          </div>
        ) : messages.map(msg => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            {msg.role === 'ai' && (
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginRight: 8, alignSelf: 'flex-end',
                boxShadow: '0 0 10px rgba(139,92,246,0.45)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 14.1 2.64 16.06 3.74 17.69L2.29 21.71L6.31 20.26C7.94 21.36 9.9 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="rgba(255,255,255,0.2)" stroke="#ffffff" strokeWidth="1.5"/>
                  <circle cx="8.5" cy="12" r="1.1" fill="#ffffff"/>
                  <circle cx="12" cy="12" r="1.1" fill="#ffffff"/>
                  <circle cx="15.5" cy="12" r="1.1" fill="#ffffff"/>
                </svg>
              </div>
            )}
            <div
              style={{
                maxWidth: '78%',
                background: msg.role === 'user'
                  ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
                  : 'rgba(255,255,255,0.06)',
                border: msg.role === 'ai' ? '1px solid rgba(139,92,246,0.18)' : 'none',
                borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                padding: '10px 14px',
                boxShadow: msg.role === 'user' ? '0 4px 16px rgba(139,92,246,0.35)' : 'none',
              }}
            >
              <p style={{
                color: '#ffffff',
                fontSize: 14,
                margin: 0,
                lineHeight: 1.55,
                whiteSpace: 'pre-line',
                fontFamily: 'Inter, sans-serif',
              }}>
                {renderText(msg.text)}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator — only while waiting for first chunk */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}
            >
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                boxShadow: '0 0 10px rgba(139,92,246,0.45)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 14.1 2.64 16.06 3.74 17.69L2.29 21.71L6.31 20.26C7.94 21.36 9.9 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="rgba(255,255,255,0.2)" stroke="#ffffff" strokeWidth="1.5"/>
                  <circle cx="8.5" cy="12" r="1.1" fill="#ffffff"/>
                  <circle cx="12" cy="12" r="1.1" fill="#ffffff"/>
                  <circle cx="15.5" cy="12" r="1.1" fill="#ffffff"/>
                </svg>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(139,92,246,0.18)',
                borderRadius: '18px 18px 18px 4px',
                padding: '12px 16px',
                display: 'flex', gap: 5, alignItems: 'center',
              }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#a78bfa',
                    animation: 'pulse 1.2s ease-in-out infinite',
                    animationDelay: `${i * 0.18}s`,
                  }} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Suggestions (only at start) */}
        {messages.length === 1 && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}
          >
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => send(s)}
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  borderRadius: 100,
                  color: '#c4b5fd',
                  fontSize: 12,
                  padding: '7px 14px',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.15s ease',
                }}
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '10px 12px',
        paddingBottom: 'max(12px, calc(12px + env(safe-area-inset-bottom)))',
        borderTop: '1px solid rgba(139,92,246,0.12)',
        flexShrink: 0,
        display: 'flex',
        gap: 10,
        alignItems: 'flex-end',
        background: 'rgba(10,10,15,0.8)',
      }}>
        <textarea
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Спроси о стиле, пресетах..."
          rows={1}
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: 20,
            color: '#ffffff',
            fontSize: 14,
            padding: '10px 16px',
            resize: 'none',
            outline: 'none',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.5,
            maxHeight: 100,
            overflowY: 'auto',
          }}
        />
        <button
          onClick={() => send(input)}
          disabled={!input.trim() || loading}
          style={{
            width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
            background: input.trim() && !loading
              ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)'
              : 'rgba(255,255,255,0.07)',
            border: 'none', cursor: input.trim() && !loading ? 'pointer' : 'default',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: input.trim() && !loading ? '0 0 14px rgba(139,92,246,0.5)' : 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke={input.trim() && !loading ? '#ffffff' : 'rgba(255,255,255,0.3)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
