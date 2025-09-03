// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/inputtext/index.ts
import type {
  InputTextDesignTokens,
  InputTextTokenSections,
} from "@primeuix/themes/types/inputtext"

export const root: InputTextTokenSections.Root = {
  background: "{surface.0}",
  disabledBackground: "{surface.300}",
  filledBackground: "{surface.0}",
  filledHoverBackground: "{surface.0}",
  filledFocusBackground: "{surface.0}",
  borderColor: "{surface.300}",
  hoverBorderColor: "{surface.300}",
  focusBorderColor: "{surface.300}",
  invalidBorderColor: "{red.600}",
  color: "{surface.950}",
  disabledColor: "{surface.700}",
  placeholderColor: "{surface.300}",
  invalidPlaceholderColor: "{red.600}",
  shadow: "none",
  paddingX: "1rem",
  paddingY: "0.8125rem",
  borderRadius: "0.5rem",
  focusRing: {
    width: "0.125rem",
    style: "solid",
    color: "{blue.600}",
    offset: "0.125rem",
    shadow: "none",
  },
  // transitionDuration: "{form.field.transition.duration}",
  // sm: {
  //   fontSize: "{form.field.sm.font.size}",
  //   paddingX: "{form.field.sm.padding.x}",
  //   paddingY: "{form.field.sm.padding.y}",
  // },
  // lg: {
  //   fontSize: "{form.field.lg.font.size}",
  //   paddingX: "{form.field.lg.padding.x}",
  //   paddingY: "{form.field.lg.padding.y}",
  // },
}

export default {
  root,
} satisfies InputTextDesignTokens

// Notes:
// 1. Edited paddings to match the design system
