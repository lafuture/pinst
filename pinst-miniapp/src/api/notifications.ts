import client from './client'

export interface InAppNotification {
  id: number
  kind: string
  title: string
  message: string
  cta_label?: string | null
  cta_action?: string | null
  created_at: string
}

export const listNotifications = () =>
  client.get<{ items: InAppNotification[] }>('/api/notifications')

export const markNotificationSeen = (id: number) =>
  client.post(`/api/notifications/${id}/seen`)

export const recheckChannel = () =>
  client.post<{ subscribed: boolean; granted: number }>('/api/channel/recheck')
