// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/tag/index.ts
import type { TagTokenSections } from "@primeuix/themes/types/tag"

export const root: TagTokenSections.Root = {
  fontWeight: "400",
}

export const colorScheme: TagTokenSections.ColorScheme = {
  light: {
    primary: {
      background: "{blue.300}",
      color: "{text.color}",
    },
    secondary: {
      background: "{surface.200}",
      color: "{text.color}",
    },
    success: {
      background: "{green.300}",
      color: "{text.color}",
    },
    info: {
      background: "{cyan.300}",
      color: "{text.color}",
    },
    warn: {
      background: "{orange.300}",
      color: "{text.color}",
    },
    danger: {
      background: "{red.300}",
      color: "{text.color}",
    },
    contrast: {
      background: "{purple.300}",
      color: "{text.color}",
    },
  },
  dark: {
    primary: {
      background: "{blue.300}",
      color: "{text.color}",
    },
    secondary: {
      background: "{surface.200}",
      color: "{text.color}",
    },
    success: {
      background: "{green.300}",
      color: "{text.color}",
    },
    info: {
      background: "{cyan.300}",
      color: "{text.color}",
    },
    warn: {
      background: "{orange.300}",
      color: "{text.color}",
    },
    danger: {
      background: "{red.300}",
      color: "{text.color}",
    },
    contrast: {
      background: "{purple.300}",
      color: "{text.color}",
    },
  },
}

export const css: TagTokenSections.CSS = `
  .p-tag {
    line-height: 1rem;
  }
`

export default { root, colorScheme, css }
