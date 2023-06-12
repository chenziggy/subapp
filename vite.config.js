import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import UnoCSS from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import handle from './vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:8090',
  build: {
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        manualChunks(id) {
          if (id.includes('entry')) {
            return 'entry'
          }
        }
      }
    }
  },
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'}),
    vue(),
    UnoCSS(),
    handle(),
    splitVendorChunkPlugin(),
    viteExternalsPlugin({
      vue: 'Vue',
      'vue-router': 'VueRouter'
    })
  ]
})
