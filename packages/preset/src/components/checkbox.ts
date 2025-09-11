// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/checkbox/index.ts
import type { CheckboxTokenSections } from "@primeuix/themes/types/checkbox"

export const root: CheckboxTokenSections.Root = {
  hoverBorderColor: "{input.hover.border.color}",
  checkedBackground: "{input.checked.background}",
  checkedHoverBackground: "{input.checked.hover.background}",
  checkedBorderColor: "{input.checked.border.color}",
  checkedHoverBorderColor: "{input.checked.hover.border.color}",
  checkedFocusBorderColor: "{input.checked.focus.border.color}",
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
