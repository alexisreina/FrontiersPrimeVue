/** @type {import('tailwindcss').Config} */
import PrimeUI from "tailwindcss-primeui"

export default {
  darkMode: ["selector", '[class="p-dark"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [PrimeUI],
  theme: {
    extend: {
      fontFamily: {
        "museo": [
          "Museo Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        "frontiers-icon": ["Frontiers Iconography", "monospace"],
      },
      fontWeight: {
        light: "300",
        medium: "500",
        bold: "700",
      },
    },
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1920px",
    },
  },
}
