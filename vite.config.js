import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  }
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
