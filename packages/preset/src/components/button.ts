// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/button/index.ts
import type { ButtonTokenSections } from "@primeuix/themes/lara/button"
const root: ButtonTokenSections.Root = {
  roundedBorderRadius: "8rem",
  borderRadius: "8rem",
  paddingY: "0.5rem",
  paddingX: "1.5rem",
  iconOnlyWidth: "1.5rem",
  gap: "0.5rem",
  focusRing: {
    width: "1.25rem",
    style: "solid",
    offset: "1.25rem",
  },
  sm: {
    fontSize: "0.875rem",
    paddingY: "0.25rem",
    paddingX: "1rem",
    iconOnlyWidth: "1rem",
  },
  lg: {
    fontSize: "1.125rem",
    paddingX: "2rem",
    paddingY: "0.5rem",
    iconOnlyWidth: "1.5rem",
  },
  label: {
    fontWeight: "500",
  },
  raisedShadow: "{elevation.$light.bottom.10}",
}
export const colorScheme: ButtonTokenSections.ColorScheme = {
  light: {
    root: {
      primary: {
        background: "{blue.600}",
        hoverBackground: "{blue.800}",
        activeBackground: "{blue.600}",
        borderColor: "{blue.600}",
        hoverBorderColor: "{blue.800}",
        activeBorderColor: "{blue.600}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      secondary: {
        background: "{gray.900}",
        hoverBackground: "{gray.950}",
        activeBackground: "{gray.900}",
        borderColor: "{gray.900}",
        hoverBorderColor: "{gray.950}",
        activeBorderColor: "{gray.900}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      info: {
        background: "{cyan.600}",
        hoverBackground: "{cyan.800}",
        activeBackground: "{cyan.600}",
        borderColor: "{cyan.600}",
        hoverBorderColor: "{cyan.800}",
        activeBorderColor: "{cyan.600}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      success: {
        background: "{green.600}",
        hoverBackground: "{green.800}",
        activeBackground: "{green.600}",
        borderColor: "{green.600}",
        hoverBorderColor: "{green.800}",
        activeBorderColor: "{green.600}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      warn: {
        background: "{orange.600}",
        hoverBackground: "{orange.800}",
        activeBackground: "{orange.600}",
        borderColor: "{orange.600}",
        hoverBorderColor: "{orange.800}",
        activeBorderColor: "{orange.600}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      help: {
        background: "{purple.600}",
        hoverBackground: "{purple.800}",
        activeBackground: "{purple.600}",
        borderColor: "{purple.600}",
        hoverBorderColor: "{purple.800}",
        activeBorderColor: "{purple.600}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      danger: {
        background: "{red.600}",
        hoverBackground: "{red.800}",
        activeBackground: "{red.600}",
        borderColor: "{red.600}",
        hoverBorderColor: "{red.800}",
        activeBorderColor: "{red.600}",
        color: "{surface.0}",
        hoverColor: "{surface.0}",
        activeColor: "{surface.0}",
      },
      contrast: {
        background: "{surface.0}",
        hoverBackground: "rgba(255, 255, 255, 0.72)",
        activeBackground: "{surface.0}",
        borderColor: "{surface.0}",
        hoverBorderColor: "rgba(255, 255, 255, 0.72)",
        activeBorderColor: "{surface.0}",
        color: "{gray.950}",
        hoverColor: "{gray.950}",
        activeColor: "{gray.950}",
      },
    },
    outlined: {
      primary: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{blue.600}",
        color: "{blue.600}",
      },
      secondary: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{gray.900}",
        color: "{gray.900}",
      },
      success: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{green.600}",
        color: "{green.600}",
      },
      info: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{cyan.600}",
        color: "{cyan.600}",
      },
      warn: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{orange.600}",
        color: "{orange.600}",
      },
      help: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{purple.600}",
        color: "{purple.600}",
      },
      danger: {
        hoverBackground: "{gradient.$dark.8}",
        activeBackground: "transparent",
        borderColor: "{red.600}",
        color: "{red.600}",
      },
      contrast: {
        hoverBackground: "{gradient.$light.8}",
        activeBackground: "transparent",
        borderColor: "{surface.0}",
        color: "{surface.0}",
      },
    },
    text: {
      primary: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{blue.600}",
      },
      secondary: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{gray.900}",
      },
      success: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{green.600}",
      },
      info: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{cyan.600}",
      },
      warn: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{orange.600}",
      },
      help: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{purple.600}",
      },
      danger: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{red.600}",
      },
      contrast: {
        hoverBackground: "transparent",
        activeBackground: "transparent",
        color: "{surface.0}",
      },
    },
    link: {
      color: "{primary.color}",
      hoverColor: "{primary.color}",
      activeColor: "{primary.color}",
    },
  },
}
export default { root, colorScheme }

// NOTES:
//  1. Default button and rounded will have same border radius - we dont need default without
//  2. Customized raised type shadow
//  3. Outline button discrapencies - Prime vue does not change border color on hover.
//  4. Text button discrapencies - Prime vue change only background color on hover, not text color + underline
//  5. Type link behaves like our text button - but it does not have color schemes
//  6. Icon button discrapencies - We cannot apply custom padding to icon only button, so it gets weird in case of small and large size - we will need something custom
