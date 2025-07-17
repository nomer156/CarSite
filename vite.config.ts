import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(), // Vite + React
    // больше никаких react-router/dev плагинов
  ],
  resolve: {
    alias: {
      "@": "/src", // если вам удобно
    },
  },
  server: {
    port: 5173,
  },
});
