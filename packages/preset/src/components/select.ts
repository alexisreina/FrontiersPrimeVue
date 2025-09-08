// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/select/index.ts
import type { SelectTokenSections } from "@primeuix/themes/lara/select"

const css: SelectTokenSections.CSS = ({ dt }) => `
 .p-select-option[aria-selected="true"], .p-select-option[aria-selected="true"] > .p-select-option-check-icon {
 color:${dt("list.option.selectedColor")};
`

export default { css }

// 1. Extra css for checkmark variant - By default when selected is keeps default color. I had to style by aria-label, because data-selected wasnt updating
