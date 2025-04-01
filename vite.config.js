import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/kevinsportfolio/',
  build: {
    outDir: 'dist', // Ensure the build output is in the 'dist' folder
  },
})
