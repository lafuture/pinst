import client, { getToken } from './client'
import type { Generation } from '../types'

export type CreateMode = 'simple' | 'reference' | 'retouch'

export interface TaskCreated {
  task_id: string
}

export interface TaskStatus {
  task_id: string
  state: 'queued' | 'running' | 'success' | 'failed'
  mode: string
  image_url?: string
  error?: string
}

export const createSimple = (data: FormData) =>
  client.post<TaskCreated>('/api/create/simple', data)

export const createReference = (data: FormData) =>
  client.post<TaskCreated>('/api/create/reference', data)

export const createRetouch = (data: FormData) =>
  client.post<TaskCreated>('/api/create/retouch', data)

export const getTask = (taskId: string) =>
  client.get<TaskStatus>(`/api/task/${taskId}`)

export const setModel = (data: FormData) =>
  client.post<{ photos: string[] }>('/api/set/model', data)

export const clearModel = () =>
  client.delete<{ photos: string[] }>('/api/set/model')

export const getGallery = () => client.get<Generation[]>('/api/gallery')

export const sendPhotoToChat = (id: string) =>
  client.post<{ status: string }>(`/api/gallery/${id}/send`)

export const sendPhotoToChatByURL = (imageURL: string) =>
  client.post<{ status: string }>('/api/gallery/send', { image_url: imageURL })

// streamTask opens an SSE connection to /api/task/{id}/stream and resolves
// when the backend pushes the result (triggered by the kie.ai callback).
export function streamTask(taskId: string, signal?: AbortSignal): Promise<TaskStatus> {
  const base = (import.meta.env.VITE_API_URL ?? '') as string
  const url = `${base}/api/task/${encodeURIComponent(taskId)}/stream`
  const token = getToken()

  return new Promise((resolve, reject) => {
    const controller = new AbortController()
    if (signal) {
      signal.addEventListener('abort', () => controller.abort())
    }

    fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok || !res.body) {
          return res.json().then(
            j => reject(new Error(j?.error ?? `HTTP ${res.status}`)),
            () => reject(new Error(`HTTP ${res.status}`)),
          )
        }
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buf = ''

        const pump = (): Promise<void> =>
          reader.read().then(({ done, value }) => {
            if (done) {
              reject(new Error('stream closed without result'))
              return
            }
            buf += decoder.decode(value, { stream: true })
            const parts = buf.split('\n\n')
            buf = parts.pop() ?? ''
            for (const part of parts) {
              const line = part.trim()
              if (line.startsWith('data:')) {
                const json = line.slice('data:'.length).trim()
                try {
                  const status: TaskStatus = JSON.parse(json)
                  resolve(status)
                  reader.cancel()
                } catch {
                  reject(new Error('invalid SSE payload'))
                }
                return
              }
            }
            return pump()
          })

        pump().catch(err => {
          if (err?.name !== 'AbortError') reject(err)
        })
      })
      .catch(err => {
        if (err?.name !== 'AbortError') reject(err)
      })
  })
}
