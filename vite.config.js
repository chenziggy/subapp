import { defineConfig,splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
          Vue: 'Vue',
          // 'vue-router': 'VueRouter'
        }
      }
    }
  },
  plugins: [
    splitVendorChunkPlugin(),
    vue()
  ],
})
