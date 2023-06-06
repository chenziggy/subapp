import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('entry')) {
            return 'entry'
          }
        }
      }
    }
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    viteExternalsPlugin({
      vue: 'Vue',
      'vue-router': 'VueRouter'
    })
  ]
})
