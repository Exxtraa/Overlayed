import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimizeDeps: {
    include: ['@imgly/background-removal'],
  },
  plugins: [react(), tailwindcss()],
})
