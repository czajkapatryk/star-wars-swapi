import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: true,
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
    deps: {
      optimizer: {
        web: {
          include: ['vuetify'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'vuetify', 'pinia', 'axios'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~/': path.resolve(__dirname, 'src'),
      '~/features/filters/commands/debounce':
        '/src/features/filters/commands/debounce.ts',
      '~/components': '/src/components',
      'vuetify/styles': 'vuetify/lib/styles/main.css',
    },
  },
})
