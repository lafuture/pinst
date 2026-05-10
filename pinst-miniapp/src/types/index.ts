export interface User {
  telegram_id: number
  username: string
  first_name: string
  subscription: 'lite' | 'pro' | null
  subscription_end_at: string | null
  remaining_photo: number
  limits_photo: number
  referral_invited: number
  referral_bonus: number
}

export interface Generation {
  id: string
  image_url: string
  created_at: string
  prompt?: string
}

export interface PaymentLink {
  url: string
  payment_id: string
}

export type Plan = 'lite' | 'pro'
export type PaymentMethod = 'card' | 'sbp'
export type PaymentStatus = 'pending' | 'success' | 'failed'
