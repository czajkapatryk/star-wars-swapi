import { App } from 'vue'
import { Pinia } from 'pinia'
import { useNavStore } from '../store/nav'

export default {
  install: (app: App, pinia: Pinia) => {
    const navStore = useNavStore(pinia)
    app.config.globalProperties.$nav = navStore
    app.provide('nav', navStore)
  },
}
