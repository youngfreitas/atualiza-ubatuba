import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Caminho relativo: funciona no GitHub Pages (https://usuario.github.io/atualiza-ubatuba/)
  base: './',
  plugins: [react()],
})
