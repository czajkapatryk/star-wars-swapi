import { App } from 'vue'
import { Pinia } from 'pinia'
import { useMobileStore } from '@/store/mobile'

export default {
  install: (app: App, pinia: Pinia) => {
    const mobileStore = useMobileStore(pinia)

    const updateIsMobile = () => {
      mobileStore.updateIsMobile()
    }

    updateIsMobile()

    window.addEventListener('resize', updateIsMobile)

    app.unmount = () => {
      window.removeEventListener('resize', updateIsMobile)
    }
  },
}
