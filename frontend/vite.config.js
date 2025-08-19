import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/static/',
  build: {
    manifest: 'manifest.json',
    rollupOptions: {
      input: {
        main: resolve('./src/main.jsx'),
      }
    }
  },
  plugins: [react()],
  server: {
    origin: 'http://localhost:5173',
  }
})
