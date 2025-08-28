# Frontiers PrimeVue Preset

A custom preset for PrimeVue components based on the Lara theme, designed specifically for the Frontiers project.

## 🚀 Installation

```bash
npm install frontiers-primevue-preset
# or
pnpm install frontiers-primevue-preset
# or
yarn add frontiers-primevue-preset
```

## 📖 Usage

### With PrimeVue Configuration

```javascript
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import FrontiersPreset from 'frontiers-primevue-preset';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: FrontiersPreset
    }
});
```

### With Nuxt.js

```javascript
// nuxt.config.js
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module'],
  primevue: {
    options: {
      theme: {
        preset: frontiersPreset
      }
    }
  }
});
```

## 🎨 What's Included

This preset extends the Lara theme with custom styling for all PrimeVue components:

- **Form Components**: Input, Select, Checkbox, Radio, etc.
- **Button Components**: Button, SplitButton, SpeedDial
- **Data Components**: DataTable, TreeTable, Timeline
- **Panel Components**: Card, Dialog, Fieldset
- **Navigation**: Menu, MenuBar, Breadcrumb
- **And many more...**

## 🛠️ Development

### Building the Package

```bash
# Build the package
pnpm build

# Watch for changes during development
pnpm dev

# Clean build artifacts
pnpm clean
```

### Project Structure

```
packages/preset/
├── src/
│   ├── components/     # Component-specific theme overrides
│   │   ├── button.ts   # Button component theme
│   │   ├── card.ts     # Card component theme
│   │   └── ...         # Other component themes
│   └── index.ts        # Main preset export
├── dist/               # Built output (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## 📋 Requirements

### Peer Dependencies

- `@primeuix/themes` >= 1.0.0

### Development Dependencies

- `typescript` ^5.0.0
- `rimraf` ^5.0.0

## 📝 License

ISC License

## 🤝 Contributing

This preset is part of the Frontiers PrimeVue project. See the main repository for contribution guidelines.

---

**Built for PrimeVue • Customized for Frontiers**
