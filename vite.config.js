import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base:"/pedroli.github.io" ,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/App.jsx'
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'axios'
    ]
  }
})


