import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 本地跨域代理.
    proxy: {
      // '/localSenlan': {
      //   target: 'https://senlan.online',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/localSenlan/, 'localSenlan'),
      //   bypass(req, res, options) {
      //     const proxyUrl =
      //       new URL(options.rewrite(req.url) as string || '', (options.target) as string)?.href || ''
      //     console.log(proxyUrl)
      //   }
      // }
      '/localSenlan': 'https://senlan.online'
    }
  }
})
