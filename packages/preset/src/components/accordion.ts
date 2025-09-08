// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/accordion/index.ts
import type { AccordionTokenSections } from "@primeuix/themes/lara/accordion"

export const header: AccordionTokenSections.Header = {
  color: "{surface.700}",
  hoverColor: "{surface.900}",
  activeColor: "{surface.900}",
  activeHoverColor: "{surface.900}",
  padding: "1.5rem 1rem 1.5rem 0",
  fontWeight: "500",
  borderRadius: "0",
  borderWidth: "1px 0 0 0",
  borderColor: "{surface.300}",
  toggleIcon: {
    color: "{surface.700}",
    hoverColor: "{surface.900}",
    activeColor: "{surface.900}",
    activeHoverColor: "{surface.900}",
  },
  first: {
    topBorderRadius: "0",
    borderWidth: "1px 0 0 0",
  },
  last: {
    bottomBorderRadius: "0",
    activeBottomBorderRadius: "0",
  },
}

export const content: AccordionTokenSections.Content = {
  borderWidth: "0",
  borderColor: "{surface.300}",
  background: "transparent",
  color: "{surface.900}",
  padding: "0",
}

export const colorScheme: AccordionTokenSections.ColorScheme = {
  light: {
    header: {
      background: "transparent",
      hoverBackground: "transparent",
      activeBackground: "transparent",
      activeHoverBackground: "transparent",
    },
  },
  dark: {
    header: {
      background: "transparent",
      hoverBackground: "transparent",
      activeBackground: "transparent",
      activeHoverBackground: "transparent",
    },
  },
}

export const css: AccordionTokenSections.CSS = ({ dt }) => `
  .p-accordionpanel:last-child {
    border-bottom: 1px solid ${dt("surface.300")};
  }
`

export default { header, content, colorScheme, css }
