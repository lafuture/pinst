import client, { getToken } from './client'
import { initAuth } from './auth'

export interface ChatRequest {
  prompt: string
  image_url?: string
}

export interface ChatResponse {
  reply: string
}

export const sendChat = (req: ChatRequest) =>
  client.post<ChatResponse>('/api/chat', req)

export interface HistoryMessage {
  role: 'user' | 'assistant'
  content: string
  ts: string // ISO timestamp
}

export async function getChatHistory(): Promise<HistoryMessage[]> {
  try {
    const res = await client.get<HistoryMessage[]>('/api/chat/history')
    return res.data ?? []
  } catch {
    return []
  }
}

async function clearChatHistory(): Promise<void> {
  try {
    await client.delete('/api/chat/history')
  } catch { /* ignore */ }
}

// Called once per JS session (module-level flag resets on app restart).
// Clears history on first chat mount → "reset on re-entry" behaviour.
let _sessionReset = false
export async function ensureChatSessionReset(): Promise<void> {
  if (_sessionReset) return
  _sessionReset = true
  await initAuth()
  await clearChatHistory()
}

export interface StreamChatHandlers {
  onDelta: (chunk: string) => void
  onDone?: (full: string) => void
  onError?: (err: Error) => void
  signal?: AbortSignal
}

const BASE = (import.meta as any).env?.VITE_API_URL ?? ''

// streamChat opens an SSE connection to /api/chat. The server emits `delta`
// events with content chunks and a final `done` event with the full reply.
export async function streamChat(req: ChatRequest, handlers: StreamChatHandlers): Promise<string> {
  const token = getToken()
  const res = await fetch(`${BASE}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'text/event-stream',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(req),
    signal: handlers.signal,
  })
  if (!res.ok || !res.body) {
    let msg = `chat failed: ${res.status}`
    try {
      const j = await res.json()
      if (j?.error) msg = j.error
    } catch { /* ignore */ }
    throw new Error(msg)
  }

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buf = ''
  let full = ''

  const handleEvent = (event: string, dataRaw: string) => {
    if (!dataRaw) return
    let data: any
    try { data = JSON.parse(dataRaw) } catch { return }
    if (event === 'delta' && typeof data.content === 'string') {
      full += data.content
      handlers.onDelta(data.content)
    } else if (event === 'done') {
      if (typeof data.reply === 'string' && data.reply.length > full.length) {
        full = data.reply
      }
    } else if (event === 'error') {
      throw new Error(data.error || 'chat failed')
    }
  }

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buf += decoder.decode(value, { stream: true })
    let idx
    while ((idx = buf.indexOf('\n\n')) !== -1) {
      const block = buf.slice(0, idx)
      buf = buf.slice(idx + 2)
      let ev = 'message'
      const dataLines: string[] = []
      for (const line of block.split('\n')) {
        if (line.startsWith('event:')) ev = line.slice(6).trim()
        else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
      }
      handleEvent(ev, dataLines.join('\n'))
    }
  }

  handlers.onDone?.(full)
  return full
}
