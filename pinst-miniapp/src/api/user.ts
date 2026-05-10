import client from './client'
import type { User } from '../types'

export const getMe = () => client.get<User>('/api/profile')
