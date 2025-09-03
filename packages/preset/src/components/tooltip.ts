// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/tooltip/index.ts
import type { TooltipTokenSections } from "@primeuix/themes/types/tooltip"

export const root: TooltipTokenSections.Root = {
  maxWidth: "18rem",
  gutter: "0.25rem",
  padding: "0.65rem 0.5rem",
  borderRadius: "{border.radius.xs}",
}

export const colorScheme: TooltipTokenSections.ColorScheme = {
  light: {
    root: {
      background: "{surface.900}",
      color: "{surface.0}",
    },
  },
  dark: {
    root: {
      background: "{surface.700}",
      color: "{surface.0}",
    },
  },
}

export default { root, colorScheme }
