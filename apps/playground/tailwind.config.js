/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[class="p-dark"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [],
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
    },
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1920px",
    },
  },
}``
