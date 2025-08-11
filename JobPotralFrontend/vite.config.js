import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
port: 3000, // dev server port
strictPort: false // set true to fail if 3000 is taken (no auto-increment)
},
})
