// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/inputtext/index.ts
import type { InputTextTokenSections } from "@primeuix/themes/types/inputtext"

const css: InputTextTokenSections.CSS = ({ dt }) => `
  .p-inputtext:disabled {
    border-color: ${dt("surface.200")};
  }
  .p-inputtext.p-variant-filled:disabled {
    background-color: ${dt("surface.50")};
  }
  .p-inputtext.p-invalid, .p-inputtext.p-variant-filled.p-invalid, .p-inputtext.p-variant-filled.p-invalid:hover {
    background-color: ${dt("input.inputtextInvalidBackground")};
    border-color: ${dt("red.600")};
  }
`

export default { css }

// // Notes:
// 1. It is not possible to set white focus ring for dark value
