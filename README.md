# Frontiers PrimeVue

Frontiers PrimeVue custom theme and project showcase (only for development)

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** >= 22.18.0
- **pnpm** 10.15.0 (recommended package manager)

## 🚀 Quick Start

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd FrontiersPrimeVue
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the showcase

### Alternative Setup

If you need to clean and reinstall everything:

```bash
# Clean all node_modules and reinstall
pnpm setup
```

## 🌐 Live Demo

The project is deployed and accessible at:

**🚀 [Live Showcase](https://frontiers-prime-vue-showcase.vercel.app/)**

Visit the live deployment to explore all components, themes, and features without setting up the project locally.

## 📁 Project Structure

```
FrontiersPrimeVue/
├── apps/
│   └── showcase/              # Main showcase application (git subtree)
│       ├── components/        # Vue components
│       ├── doc/              # Component documentation
│       ├── pages/            # Nuxt.js pages
│       ├── assets/           # Static assets
│       ├── themes/           # Theme configurations
│       └── nuxt.config.js    # Nuxt configuration
├── packages/                 # Shared packages (if any)
├── pnpm-workspace.yaml      # PNPM workspace configuration
└── package.json             # Root package.json
```

> **ℹ️ Important:** The `apps/showcase/` directory is managed as a git subtree from our forked PrimeVue repository. See the [Developer Guidelines](./Guidelines.md) for subtree management instructions.

## 🎯 Available Scripts

### Root Level Commands

```bash
# Development
pnpm dev              # Start showcase in development mode
pnpm hot:dev          # Start with hot reload environment

# Build & Preview
pnpm build:showcase   # Build the showcase for production
pnpm preview         # Preview the built showcase

# Maintenance
pnpm setup           # Clean and reinstall everything
pnpm clean           # Remove node_modules, dist, and lock files
pnpm init            # Install dependencies
pnpm link            # Link workspace packages
```

### Showcase App Commands

```bash
# Navigate to showcase directory first
cd apps/showcase

# Then run:
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run generate     # Generate static site
```

## 👩‍💻 For Developers

- **[Developer Guidelines](./Guidelines.md)** - Essential development workflows, git subtree management, and best practices

## 🔗 Links and Resources

- **PrimeVue Official Documentation**: [https://primevue.org/](https://primevue.org/)
- **Nuxt.js Documentation**: [https://nuxt.com/](https://nuxt.com/)
- **PrimeVue GitHub**: [https://github.com/primefaces/primevue](https://github.com/primefaces/primevue)
- **Component API Documentation**: Available in the showcase application
