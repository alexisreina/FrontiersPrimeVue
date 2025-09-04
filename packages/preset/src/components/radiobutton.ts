// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/radiobutton/index.ts
import type { RadioButtonTokenSections } from "@primeuix/themes/types/radiobutton"

export const root: RadioButtonTokenSections.Root = {
  hoverBorderColor: "{input.hoverBorderColor}",
  checkedBackground: "{input.checked.background}",
  checkedHoverBackground: "{input.checked.hover.background}",
  checkedBorderColor: "{input.checked.border.color}",
  checkedHoverBorderColor: "{input.checked.hover.border.color}",
  checkedFocusBorderColor: "{input.checked.focus.border.color}",
}

export const icon: RadioButtonTokenSections.Icon = {
  size: "0.75rem",
  sm: {
    size: "0.5rem",
  },
  lg: {
    size: "1rem",
  },
}

export default { root, icon }
