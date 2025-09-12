// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/selectbutton/index.ts
import type { SelectButtonTokenSections } from "@primeuix/themes/lara/selectbutton"
export const root: SelectButtonTokenSections.Root = {
  borderRadius: "8rem",
}

export const css: SelectButtonTokenSections.CSS = ({ dt }) => `
  .p-selectbutton{
   border: 1px solid ${dt("selectbutton.border.color")};
  }

  .p-selectbutton > .p-togglebutton {
   border: none;
   border-radius: 8rem;
   background: transparent;
   color: ${dt("selectbutton.color")};
   font-weight: 300;
   font-size: 1rem;
   padding: 0.25rem 1rem;
  }

  .p-selectbutton > .p-togglebutton.p-togglebutton-lg {
   padding: 0.5rem 1.5rem;
  }

  .p-selectbutton > .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover  {
   background: transparent;
   color: ${dt("selectbutton.hover.color")};
  }

  .p-selectbutton > .p-togglebutton.p-togglebutton-checked {
   background: ${dt("selectbutton.color")};
   color: ${dt("selectbutton.active.color")}
  }
`

export default {
  root,
  css,
}
