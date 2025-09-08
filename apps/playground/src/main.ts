import { createApp } from "vue"
import PrimeVue from "primevue/config"
import FrontiersPreset from "frontiers-primevue-preset"
import "./assets/styles/fonts.css"
import "./assets/styles/tailwind.css"

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
