// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path"


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     headers: {
//       'Content-Security-Policy': "script-src 'self' 'unsafe-inline';",
//     },
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })





import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from 'url'

// Manually define __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Content-Security-Policy': "script-src 'self' 'unsafe-inline';",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
