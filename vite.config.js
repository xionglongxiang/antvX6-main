import { defineConfig } from 'vite';
import requireTransform from 'vite-plugin-require-transform';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.tsx?$|.jsx?$|.vue$/
    })
  ],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    }
  }
})
