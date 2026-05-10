import { useState, useEffect } from 'react'
import { getMe } from '../api/user'
import { initAuth, resetAuth } from '../api/auth'
import { saveToken } from '../api/client'
import type { User } from '../types'

// Module-level cache so subscription state persists across tab switches
let cachedUser: User | null = null
let cacheReady = false
let fetchPromise: Promise<void> | null = null
const listeners = new Set<() => void>()

const notifyListeners = () => listeners.forEach(fn => fn())

const fetchUser = async () => {
  try {
    await initAuth()
    try {
      const res = await getMe()
      console.log('[pinst][api] /api/user/me response:', JSON.stringify(res.data))
      cachedUser = res.data
    } catch (err: any) {
      if (err?.response?.status === 401) {
        saveToken('')
        resetAuth()
        await initAuth()
        const res = await getMe()
        console.log('[pinst][api] /api/user/me retry response:', JSON.stringify(res.data))
        cachedUser = res.data
      } else {
        throw err
      }
    }
  } catch (err: any) {
    console.warn('[pinst] fetchUser failed:', err?.response?.status, err?.message)
    cachedUser = null
  } finally {
    cacheReady = true
    fetchPromise = null
    notifyListeners()
  }
}

export const useSubscription = () => {
  const [, rerender] = useState(0)

  useEffect(() => {
    const update = () => rerender(n => n + 1)
    listeners.add(update)
    if (!cacheReady && !fetchPromise) {
      fetchPromise = fetchUser()
    }
    return () => { listeners.delete(update) }
  }, [])

  const refetch = () => {
    cacheReady = false
    cachedUser = null
    fetchPromise = fetchUser()
  }

  return {
    user: cachedUser,
    loading: !cacheReady,
    error: null,
    refetch,
  }
}
