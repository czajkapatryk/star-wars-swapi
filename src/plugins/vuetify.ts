import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import type { ThemeDefinition } from 'vuetify'
import { App } from 'vue'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#ffe300',
    ltPrimary: '#ffe300',
    ltsPrimary: '#ffe30010',
    primaryVariant: '#e30075',
    ltPrimaryVariant: '#e3007570',
    ltsPrimaryVariant: '#e3007510',
    secondary: '#000000',
    tertiary: '#ffffff',
    muted: '#717171',
  },
}

const vuetify = createVuetify({
  defaults: {
    VTooltip: {
      activator: 'parent',
      contentClass: 'c-tooltip--info',
    },
    VDialog: {
      attach: true,
    },
    VBtn: {
      density: 'default',
    },
    VTextField: {
      color: '#717171',
      variant: 'outlined',
      density: 'compact',
    },
    VSelect: {
      noDataText: 'No data',
      variant: 'outlined',
      density: 'compact',
      itemValue: 'id',
      itemTitle: 'name',
    },
    VForm: {
      class: 'c-form',
    },
    VDataTable: {
      loadingText: 'Loading...',
    },
  },
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default {
  install: (app: App) => {
    app.use(vuetify)
  },
}
