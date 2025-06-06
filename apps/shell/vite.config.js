import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4200,
    proxy: {
      '/fiber/': {
        target: 'http://localhost:4201',
        changeOrigin: true,
      },
      '/stack/': {
        target: 'http://localhost:4202',
        changeOrigin: true,
      },
    },
  },
})
