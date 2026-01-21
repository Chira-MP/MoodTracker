import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import { VitePWA } from "vite-plugin-pwa" // <--- Am adăugat asta

export default defineConfig({
  base: "/MoodTracker/",

  plugins: [
    vue(),
    vueDevTools(),
    // Configurarea PWA de mai jos:
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true // Permite testarea PWA și în timpul dezvoltării
      },
      manifest: {
        name: "MoodTracker App",
        short_name: "MoodTracker",
        description: "Monitorizează-ți starea de spirit zilnic",
        theme_color: "#42b883",
        icons: [
          {
            src: "favicon.ico", // Folosim favicon-ul tău momentan ca să nu dea eroare
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },

  define: {
    __VUE_OPTIONS_API__: false
  }
})
