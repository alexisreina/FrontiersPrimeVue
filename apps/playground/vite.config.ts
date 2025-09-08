import path from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import tailwindcss from "@tailwindcss/vite"

const presetDistDir = path.resolve(__dirname, "../../packages/preset/dist")

function watchPresetDistPlugin() {
  return {
    name: "watch-preset-dist",
    configureServer(server) {
      // Watch preset dist and trigger full reload on changes
      server.watcher.add(presetDistDir)
      server.watcher.on("all", (event, file) => {
        if (file && file.startsWith(presetDistDir)) {
          server.ws.send({ type: "full-reload" })
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [vue(), tailwindcss(), watchPresetDistPlugin()],
  resolve: {
    dedupe: ["vue", "@primeuix/styles", "@primeuix/themes", "@primeuix/utils"],
    alias: {
      "frontiers-primevue-preset": path.resolve(
        __dirname,
        "../../packages/preset/dist/index.js"
      ),
    },
  },
  server: {
    fs: {
      allow: [presetDistDir, path.resolve(__dirname, "../../")],
    },
  },
})
