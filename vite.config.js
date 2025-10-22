// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // permite acesso via o seu túnel ngrok
    allowedHosts: ['2b77bad85091.ngrok-free.app'],

    // se estiver acessando de outra máquina/rede
    host: true,

    // HMR estável pelo túnel (websocket)
    hmr: {
      host: '2b77bad85091.ngrok-free.app',
      protocol: 'wss',
      clientPort: 443,
    },
  },
})
