import "primeicons/primeicons.css"
import "@primeuix/styles"
import "./assets/styles/fonts.css"
import "./assets/styles/tailwind.css"

import { createApp } from "vue"
import PrimeVue from "primevue/config"
import FrontiersPreset from "frontiers-primevue-preset"

import App from "./App.vue"

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: FrontiersPreset,
    options: {
      darkModeSelector: ".p-dark",
    },
  },
})

app.mount("#app")
