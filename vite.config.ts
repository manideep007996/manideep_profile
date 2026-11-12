import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Deployed to https://manideep007996.github.io/manideep_profile/
  base: '/manideep_profile/',
});
