import { defineStore } from 'pinia'

export const useMobileStore = defineStore('mobile', {
  state: () => ({
    isMobile: false,
  }),
  actions: {
    updateIsMobile() {
      this.isMobile = window.innerWidth < 768
    },
  },
})
