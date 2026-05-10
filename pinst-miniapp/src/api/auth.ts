import axios from 'axios'
import { saveToken } from './client'

const BASE = import.meta.env.VITE_API_URL ?? ''

let _promise: Promise<void> | null = null

function getInitData(): string {
  try {
    // Try Telegram WebApp directly from window (most reliable)
    const tg = (window as any)?.Telegram?.WebApp
    if (tg?.initData) return tg.initData
  } catch {}
  return ''
}

async function doAuth(): Promise<void> {
  const initData = getInitData()
  console.log('[pinst][auth] initData', initData ? `length=${initData.length}` : 'EMPTY')
  if (!initData) {
    console.error('[pinst][auth] initData is empty — Telegram WebApp not available or not inside Telegram')
    return
  }
  // Log raw user field from initData before sending
  try {
    const params = new URLSearchParams(initData)
    const rawUser = params.get('user')
    console.log('[pinst][auth] initData user field:', rawUser)
    console.log('[pinst][auth] initData auth_date:', params.get('auth_date'))
  } catch (e) {
    console.warn('[pinst][auth] failed to parse initData fields:', e)
  }
  const res = await axios.post<{ token: string }>(`${BASE}/api/auth/telegram`, {
    init_data: initData,
  })
  console.log('[pinst][auth] server response status:', res.status)
  saveToken(res.data.token)
  console.log('[pinst][auth] auth ok, token saved')
}

export const resetAuth = () => { _promise = null }

export const initAuth = (): Promise<void> => {
  if (!_promise) {
    _promise = doAuth().catch((err) => {
      console.warn('[pinst] auth error:', err?.response?.status, err?.message)
      _promise = null
    })
  }
  return _promise
}
