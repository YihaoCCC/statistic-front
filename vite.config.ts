import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    open: false,
    proxy: {
      '/my-back': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/mxg-api': {
        target: 'https://api.muxiaoguo.cn/',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/test/, '')
        }
      }
    }
  }
})
