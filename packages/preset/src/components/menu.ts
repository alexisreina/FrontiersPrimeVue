// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/menu/index.ts
import { MenuTokenSections } from "@primeuix/themes/lara/menu"
export const root: MenuTokenSections.Root = {
  background: "{gray.0}",
  borderColor: "{gray.500}",
  color: "{gray.500}",
  borderRadius: "{content.border.radius}",
  shadow: "{elevation.$light.bottom.40}",
}

export const list: MenuTokenSections.List = {
  padding: "0 0 0.25rem",
  gap: "0",
}

export const item: MenuTokenSections.Item = {
  focusBackground: "{gray.50}",
  color: "{gray.700}",
  focusColor: "{gray.900}",
  padding: "0.75rem 1rem",
  borderRadius: "0",
  gap: "0.5rem",
  icon: {
    color: "{gray.700}",
    focusColor: "{gray.900}",
  },
}

export const submenuLabel: MenuTokenSections.SubmenuLabel = {
  padding: "0.75rem 1rem 0.5rem",
  fontWeight: "500",
  background: "{gray.0}",
  color: "{gray.900}",
}

export const separator: MenuTokenSections.Separator = {
  borderColor: "{gray.500}",
}

export const css: MenuTokenSections.CSS = ({ dt }) => `
.p-menu-submenu-label {
  border-bottom: 1px solid ${dt("{gray.500}")};
  margin-bottom: 5px;
}

.p-menu-item-link{
  font-weight: 300;
}

`

export default {
  root,
  list,
  item,
  submenuLabel,
  separator,
  css,
}

// Notes
// 1. Disabled state is only available through custom slot
