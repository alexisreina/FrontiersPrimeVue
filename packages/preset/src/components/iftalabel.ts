// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/iftalabel/index.ts
import type { IftaLabelTokenSections } from "@primeuix/themes/types/iftalabel"

export const root: IftaLabelTokenSections.Root = {
  top: "calc(0.375rem - 0.5px)",
  fontSize: "0.625rem",
  fontWeight: "300",
}

export const input: IftaLabelTokenSections.Input = {
  paddingTop: "calc(1.125rem - 0.5px)",
  paddingBottom: "0.375rem",
}

export default { root, input }
