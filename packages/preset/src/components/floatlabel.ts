// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/floatlabel/index.ts
import type { FloatLabelTokenSections } from "@primeuix/themes/types/floatlabel"

export const root: FloatLabelTokenSections.Root = {
  fontWeight: "300",
  active: {
    fontSize: "0.625rem",
    fontWeight: "300",
  },
}

export const inside: FloatLabelTokenSections.In = {
  input: {
    paddingTop: "calc(1.125rem - 0.5px)",
    paddingBottom: "0.375rem",
  },
  active: {
    top: "calc(0.375rem - 0.5px)",
  },
}

export default { root, in: inside }
