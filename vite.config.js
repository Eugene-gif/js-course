import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  server: {
    open: true,
    host: true,
  },
  resolve: {
    alias: { '@': resolve(__dirname, './src') }
  },
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'objects.html'),
        contacts: resolve(__dirname, 'contacts.html'),
      },
    },
  },
});