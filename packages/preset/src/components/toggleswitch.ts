// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/toggleswitch/index.ts
import type { ToggleSwitchTokenSections } from "@primeuix/themes/types/toggleswitch"

export const root: ToggleSwitchTokenSections.Root = {
  width: "2.625rem",
  height: "1.5rem",
  borderRadius: "2.625rem",
  gap: "0.125rem",
}

export const colorScheme: ToggleSwitchTokenSections.ColorScheme = {
  light: {
    root: {
      background: "{surface.500}",
      hoverBackground: "{surface.500}",
      checkedBackground: "{surface.900}",
      checkedHoverBackground: "{surface.900}",
      disabledBackground: "{surface.300}",
    },
    handle: {
      disabledBackground: "{surface.100}",
    },
  },
  dark: {
    root: {
      background: "{surface.600}",
      disabledBackground: "{surface.600}",
      hoverBackground: "{surface.600}",
      checkedBackground: "{surface.0}",
      checkedHoverBackground: "{surface.0}",
    },
    handle: {
      background: "{surface.900}",
      disabledBackground: "{surface.500}",
      hoverBackground: "{surface.900}",
      checkedBackground: "{surface.900}",
      checkedHoverBackground: "{surface.900}",
      color: "{surface.900}",
      hoverColor: "{surface.900}",
      checkedColor: "{surface.900}",
      checkedHoverColor: "{surface.900}",
    },
  },
}

export default { root, colorScheme }
