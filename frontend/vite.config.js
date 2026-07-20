import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'https://deeksharambh2026-production.up.railway.app',
        changeOrigin: true
      },
      '/ws': {
        target: 'https://deeksharambh2026-production.up.railway.app',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
