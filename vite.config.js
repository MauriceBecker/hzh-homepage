import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'build',
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html')
    }
  }
});
