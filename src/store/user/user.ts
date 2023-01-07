import { defineStore } from 'pinia'
import type { UserState } from '@/store/user/types'

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    sessionId: '123'
  }),
  persist: true,
  getters: {
    getSessionId(): string {
      return this.sessionId
    }
  },
  actions: {
    setSessionId(sessionId: string): void {
      this.sessionId = sessionId
    }
  }
})
