import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' https://www.youtube.com"
    }
  }
});