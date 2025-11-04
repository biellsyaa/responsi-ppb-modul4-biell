// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Service worker akan auto-update saat ada versi baru
      registerType: "autoUpdate",

      // Asset tambahan yang akan dicache
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],

      // Manifest PWA
      manifest: {
        name: "My PWA Demo",
        short_name: "MyPWA",
        description: "Contoh PWA untuk praktikum",
        theme_color: "#1976d2",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },

      // Workbox config untuk caching otomatis
      workbox: {
        // Semua file js, css, html, png, svg akan dicache
        globPatterns: ["**/*.{js,css,html,png,svg}"]
      }
    })
  ],

  // Konfigurasi dev server
  server: {
    port: 5174
  },

  // Optional: build options kalau mau customize
  build: {
    outDir: "dist",
    sourcemap: true
  }
});
