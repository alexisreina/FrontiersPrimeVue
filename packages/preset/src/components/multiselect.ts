// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/multiselect/index.ts
import type { MultiSelectTokenSections } from "@primeuix/themes/lara/multiselect"
const css: MultiSelectTokenSections.CSS = ({ dt }) => `
 .p-multiselect-option[aria-selected="true"] {
 color:${dt("list.option.selectedColor")};
`

export default { css }

// 1. Extra css for checked unfocused variant - By default when selected is keeps default color. I had to style by aria-label, because data-selected wasnt updating
