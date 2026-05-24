import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [tanstackStart(), react(), tsconfigPaths(), tailwindcss(), cloudflare()],
  optimizeDeps: {
    disabled: true,
    exclude: [
      '@tanstack/react-start',
      '@tanstack/react-router',
      '@tanstack/react-router-devtools',
      '@tanstack/start-server-core',
      '@tanstack/start-plugin-core',
      '@tanstack/start-manifest',
      '@tanstack/start-static-server-functions',
    ],
  },
});
