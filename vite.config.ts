import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, '../../src/main/resources/static'),
    emptyOutDir: true, // Clear the directory before building
  },
  server: {
    proxy: {
      '/products': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '/transactions': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
