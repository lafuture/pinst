import client from './client'
import type { PaymentLink, Plan, PaymentMethod } from '../types'

export const createPayment = (plan: Plan, method: PaymentMethod) =>
  client.post<PaymentLink>('/api/payment/create', { plan, method })
