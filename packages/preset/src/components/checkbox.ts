// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/checkbox/index.ts
import type { CheckboxTokenSections } from "@primeuix/themes/types/checkbox"

export const root: CheckboxTokenSections.Root = {
  width: "1.5rem",
  height: "1.5rem",
  hoverBorderColor: "{input.hoverBorderColor}",
  checkedBackground: "{input.checkedBackground}",
  checkedHoverBackground: "{input.checkedHoverBackground}",
  checkedBorderColor: "{input.checkedBorderColor}",
  checkedHoverBorderColor: "{input.checkedHoverBorderColor}",
  checkedFocusBorderColor: "{input.checkedFocusBorderColor}",
}

export const icon: CheckboxTokenSections.Icon = {
  size: "0.75rem",
  sm: {
    size: "0.5rem",
  },
  lg: {
    size: "1rem",
  },
}

export default { root, icon }
