// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/chip/index.ts
import type { ChipTokenSections } from "@primeuix/themes/types/chip"

export const root: ChipTokenSections.Root = {
  borderRadius: "3rem",
  paddingX: "0.25rem",
  paddingY: "0.25rem",
  gap: "0",
}

export const image: ChipTokenSections.Image = {
  width: "1.5rem",
  height: "1.5rem",
}

export const icon: ChipTokenSections.Icon = {
  size: "1rem",
}

export const removeIcon: ChipTokenSections.RemoveIcon = {
  size: "1rem",
}

export const colorScheme: ChipTokenSections.ColorScheme = {
  light: {
    root: {
      background: "{surface.800}",
      color: "{surface.0}",
    },
    icon: {
      color: "{surface.0}",
    },
    removeIcon: {
      color: "{surface.0}",
    },
  },
  dark: {
    root: {
      background: "{surface.800}",
      color: "{surface.0}",
    },
    icon: {
      color: "{surface.0}",
    },
    removeIcon: {
      color: "{surface.0}",
    },
  },
}

export const css: ChipTokenSections.CSS = ({ dt }) => `
  .p-chip-icon {
    font-size: ${dt("chip.icon.size")};
    line-height: 1;
    margin-inline-start: calc(var(--p-chip-padding-y) / 2);
  }
  .p-chip-label {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300;
    padding-inline: 0.75rem;
  }
  .p-chip-image {
    margin-inline-start: calc(-1 * var(--p-chip-padding-y) + var(--p-chip-padding-y) / 2);
  }
  .p-chip-remove-icon {
    margin-inline-end: calc(var(--p-chip-padding-y) / 2);
  }
`

export default {
  root,
  image,
  icon,
  removeIcon,
  colorScheme,
  css,
}
