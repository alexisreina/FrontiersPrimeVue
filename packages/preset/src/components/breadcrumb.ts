// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/breadcrumb/index.ts
import type { BreadcrumbTokenSections } from "@primeuix/themes/lara/breadcrumb"

export const root: BreadcrumbTokenSections.Root = {
  padding: "1.25rem",
  background: "transparent",
  gap: "0rem",
  transitionDuration: "{transition.duration}",
}

export const item: BreadcrumbTokenSections.Item = {
  color: "{breadcrumb.text.color}",
  hoverColor: "{breadcrumb.text.color}",
  borderRadius: "0.25rem",
  icon: {
    color: "{breadcrumb.text.color}",
    hoverColor: "{breadcrumb.text.color}",
  },
}

export const separator: BreadcrumbTokenSections.Separator = {
  color: "{breadcrumb.text.color}",
}

export const css: BreadcrumbTokenSections.CSS = ({ dt }) => `
.p-breadcrumb-item-link{
  padding: 0 0.25rem;
}
.p-breadcrumb-item-link:hover {
 background-color: ${dt("breadcrumb.background.hover.color")};
}
.p-breadcrumb-item{
  font-size: 0.75rem;
}
.p-breadcrumb-separator-icon, .p-breadcrumb-item-icon {
 width: 0.75rem;
 height: 0.75rem;
 font-size: 0.75rem;
}
`

export default {
  root,
  item,
  separator,
  css,
}

// 1. PrimeVue breadcrumbs does not change form in mobile version by default.
