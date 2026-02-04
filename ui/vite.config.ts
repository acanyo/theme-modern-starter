import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Icons({
      compiler: "svelte",
    }),
  ],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "TeageUI",
      fileName: "index",
      cssFileName: "index",
    },
  },
  server: {
    port: 5174,
    proxy: {
      "/apis": {
        target: "http://localhost:8090",
        changeOrigin: true,
      },
      "/upload": {
        target: "http://localhost:8090",
        changeOrigin: true,
      },
    },
  },
});
