import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => defineConfig({
  base: './',
  plugins: [react()],
  server: mode === 'development' ? {
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'https://deeksharambh2026-production.up.railway.app/',
        changeOrigin: true,
      },
      '/ws': {
        target: 'https://deeksharambh2026-production.up.railway.app/',
        ws: true,
      },
    },
  } : undefined,
})
