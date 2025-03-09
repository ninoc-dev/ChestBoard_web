import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist'
  },
  base: 'https://github.com/ninoc-dev/ChestBoard_web/',
  server: {
    port: 3000,
    open: true
  }
})