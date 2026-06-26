import { defineConfig } from 'vite';

// base:'./' keeps asset paths relative so the build can be dropped onto any
// static host (and is a friendly baseline for a WeChat mini-game migration).
export default defineConfig({
  base: './',
  server: {
    host: true,
    port: 5173,
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
