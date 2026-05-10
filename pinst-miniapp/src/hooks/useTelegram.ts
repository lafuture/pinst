import { useState, useEffect } from 'react'
import WebApp from '@twa-dev/sdk'

const safe = <T>(fn: () => T, fallback: T): T => {
  try { return fn() } catch { return fallback }
}

function getTgUser() {
  // Try native window.Telegram.WebApp first (most reliable in real Telegram context)
  const nativeUser = safe(() => (window as any)?.Telegram?.WebApp?.initDataUnsafe?.user, undefined)
  if (nativeUser) return nativeUser
  return safe(() => WebApp.initDataUnsafe?.user, undefined)
}

export const useTelegram = () => {
  const [user, setUser] = useState(() => getTgUser())
  const colorScheme = safe(() => WebApp.colorScheme, 'dark' as const)

  useEffect(() => {
    const tg = (window as any)?.Telegram?.WebApp
    console.log('[pinst][tg] window.Telegram.WebApp exists:', !!tg)
    console.log('[pinst][tg] initData length:', tg?.initData?.length ?? 0)
    console.log('[pinst][tg] initDataUnsafe.user:', JSON.stringify(tg?.initDataUnsafe?.user ?? null))
    console.log('[pinst][tg] @twa-dev/sdk user:', JSON.stringify(WebApp.initDataUnsafe?.user ?? null))

    if (user) {
      console.log('[pinst][tg] user already resolved on mount:', JSON.stringify(user))
      return
    }

    const resolved = getTgUser()
    if (resolved) {
      console.log('[pinst][tg] resolved after mount:', JSON.stringify(resolved))
      setUser(resolved)
      return
    }

    console.warn('[pinst][tg] user not available yet, starting poll')
    let attempts = 0
    const id = setInterval(() => {
      attempts++
      const u = getTgUser()
      if (u) {
        console.log(`[pinst][tg] resolved after ${attempts} poll attempts:`, JSON.stringify(u))
        setUser(u)
        clearInterval(id)
      } else if (attempts >= 20) {
        console.error('[pinst][tg] user still null after 2s — not running inside Telegram?')
        clearInterval(id)
      }
    }, 100)
    return () => clearInterval(id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onClose = () => safe(() => WebApp.close(), undefined)
  const onReady = () => safe(() => WebApp.ready(), undefined)
  const expandApp = () => safe(() => WebApp.expand(), undefined)
  const showAlert = (msg: string) => safe(() => WebApp.showAlert(msg), undefined)
  const showConfirm = (msg: string, cb: (ok: boolean) => void) =>
    safe(() => WebApp.showConfirm(msg, cb), undefined)
  const hapticFeedback = (type: 'light' | 'medium' | 'heavy') =>
    safe(() => WebApp.HapticFeedback.impactOccurred(type), undefined)

  const setColors = () => {
    safe(() => WebApp.setHeaderColor('#0a0a0f'), undefined)
    safe(() => WebApp.setBackgroundColor('#0a0a0f'), undefined)
  }

  return {
    user,
    colorScheme,
    onClose,
    onReady,
    expandApp,
    showAlert,
    showConfirm,
    hapticFeedback,
    setColors,
    WebApp,
  }
}
