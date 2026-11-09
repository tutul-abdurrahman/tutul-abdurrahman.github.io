import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const here = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: `${here}index.html`,
        work: `${here}work/index.html`,
        promptKit: `${here}prompt-kit/index.html`,
        demos: `${here}demos/index.html`,
      },
    },
  },
})
