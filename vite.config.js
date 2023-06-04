import { defineConfig,splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    // rollupOptions: {
      // external: ['vue'],
      // output: {
      //   globals: {
      //     vue: 'Vue',
      //   },
      // },
    // },
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    viteExternalsPlugin({
      vue: 'Vue',
      'vue-router': 'VueRouter'
    })
  ],
})
