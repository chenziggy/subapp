import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import UnoCSS from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite'
import PiniaStore from './vite-plugin-pinia-store'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/subapp/zoom/',
  resolve: {
    alias: {
      '@': '/src',
      '@img': '/src/assets/img',
    },
  },
  build: {
    rollupOptions: {
      output: {
        minifyInternalExports: false,
        chunkFileNames(chunkInfo) {
          if (chunkInfo.name === 'entry')
            return 'assets/[name].js'

          return 'assets/[name]-[hash].js'
        },
        assetFileNames(assetInfo) {
          if (assetInfo.name === 'entry.css')
            return 'assets/[name][extname]'

          return 'assets/[name]-[hash][extname]'
        },
        manualChunks(id) {
          if (id.includes('entry'))
            return 'entry'
        },
      },
    },
  },
  plugins: [
    vue(),
    UnoCSS(),
    viteExternalsPlugin({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'pinia': 'Pinia',
    }),
    PiniaStore(),
    AutoImport({
      imports: ['vue'],
    }),
    Inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),
  ],
  server: {
    port: 5175,
    proxy: {
      '/subapp/zoom/assets': {
        target: 'http://localhost:5175/',
        changeOrigin: true,
        rewrite: path => path.replace(/\/assets/, '/src'),
      },
    },
    hmr: {
      clientPort: 5175,
    },
  },
})
