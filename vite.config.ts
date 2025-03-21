import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@api': '/src/api',
      '@store': '/src/store',
      '@hooks': '/src/hooks',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://cinemaguide.skillbox.cc/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
