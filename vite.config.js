/**
 * Vite Configuration - Configuration para sa React dev server at Laravel proxy
 */

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname), '')
  
  const apiUrl = env.VITE_API_URL || 'http://localhost:8000'
  const port = parseInt(env.VITE_PORT) || 5173
  const apiPrefix = env.VITE_API_PREFIX || '/api'
  const apiVersion = env.VITE_API_VERSION || 'v1'
  const useProxy = env.VITE_USE_PROXY !== 'false'
  
  return {
    plugins: [react()],
    server: {
      port,
      proxy: useProxy ? {
        // Proxy pattern: /api/v1/* → http://127.0.0.1:8000/api/v1/*
        [`${apiPrefix}/${apiVersion}`]: {
          target: apiUrl,
          changeOrigin: true,
          secure: false,
          configure: (proxy) => {
            proxy.on('error', (err) => console.log('❌ Proxy error:', err.message))
            proxy.on('proxyReq', (proxyReq, req) => {
              proxyReq.setHeader('Accept', 'application/json')
              proxyReq.setHeader('Content-Type', 'application/json')
              console.log(`➡️  ${req.method} ${req.url} → ${apiUrl}${req.url}`)
            })
            proxy.on('proxyRes', (proxyRes, req) => {
              console.log(`⬅️  ${proxyRes.statusCode} ${req.url}`)
            })
          },
        },
      } : undefined,
    },
  };
})
