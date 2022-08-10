import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import viteCompression from 'vite-plugin-compression'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/dolphinscheduler/ui/' : '/',
  plugins: [
    vue(),
    vueJsx(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    proxy: {
      '/dolphinscheduler': {
        target: loadEnv('development', './').VITE_APP_DEV_WEB_URL,
        changeOrigin: true
      }
    }
  }
})
