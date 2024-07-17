import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import nav from './plugins/nav'
import mobile from './plugins/mobile'

import 'vuetify/styles'
import './assets/import.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(vuetify)

app.use(nav, pinia)
app.use(mobile, pinia)

app.mount('#app')
