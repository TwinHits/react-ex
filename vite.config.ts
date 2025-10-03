import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Force single minified file instead of code-splitting
        manualChunks: undefined,
      },
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      thresholds: {
        global: {
          branches: 33,
          functions: 33,
          lines: 43,
          statements: 43,
        },
      },
    },
  },
});
