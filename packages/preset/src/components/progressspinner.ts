// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/progressspinner/index.ts
import type { ProgressSpinnerTokenSections } from "@primeuix/themes/types/progressspinner"

export const colorScheme: ProgressSpinnerTokenSections.ColorScheme = {
  light: {
    root: {
      colorOne: "{primary.500}",
      colorTwo: "{primary.500}",
      colorThree: "{primary.500}",
      colorFour: "{primary.500}",
    },
  },
  dark: {
    root: {
      colorOne: "{primary.400}",
      colorTwo: "{primary.400}",
      colorThree: "{primary.400}",
      colorFour: "{primary.400}",
    },
  },
}

export default { colorScheme }
