import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kevinsportfolio/',  // Make sure the base path is correct for GitHub Pages
  build: {
    outDir: 'dist',  // Ensure the build output folder is 'dist'
    assetsDir: '',  // Ensure assets are placed directly in the dist folder (optional, but useful)
  },
});
