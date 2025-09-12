// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/progressbar/index.ts
import type { ProgressBarTokenSections } from "@primeuix/themes/types/progressbar"

export const root: ProgressBarTokenSections.Root = {
  height: "0.5rem",
}

export const value: ProgressBarTokenSections.Value = {
  background:
    "repeating-linear-gradient(45deg, {primary-color} 0, {primary-color} 0.5rem, color-mix(in srgb, {primary-color} 72%, white 28%) 0.5rem, color-mix(in srgb, {primary-color} 72%, white 28%) 1rem)",
}

export const label: ProgressBarTokenSections.Label = {
  color: "transparent",
}

export default {
  root,
  value,
  label,
}
