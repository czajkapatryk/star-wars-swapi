import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vuetify from 'vite-plugin-vuetify'

console.log('VITE_API_BASE_URL:', process.env.VITE_API_BASE_URL)
export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
      '~/components': '/src/components',
      '@/filters/commands/debounce': '/src/filters/commands/debounce.ts',
    },
  },
  optimizeDeps: {
    include: ['vue', 'pinia', 'axios'],
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: false,
  },
})
