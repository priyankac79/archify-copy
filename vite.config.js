import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/archify-copy/', // Replace <repo> with your GitHub repository name
});
