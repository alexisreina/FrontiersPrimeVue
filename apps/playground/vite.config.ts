import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "node:path"

export default defineConfig({
  plugins: [vue()],
  resolve: {
    dedupe: ["vue", "@primeuix/styles", "@primeuix/themes", "@primeuix/utils"],
    alias: {
      "frontiers-primevue-preset": path.resolve(
        __dirname,
        "../../packages/preset/dist/index.js"
      ),
    },
  },
})
