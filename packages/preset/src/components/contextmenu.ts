// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/contextmenu/index.ts
import type { ContextMenuTokenSections } from "@primeuix/themes/lara/contextmenu"

export const root: ContextMenuTokenSections.Root = {
  background: "{gray.0}",
  borderColor: "{gray.500}",
  color: "{gray.500}",
  borderRadius: "{content.border.radius}",
  shadow: "{elevation.$light.bottom.40}",
}

export const list: ContextMenuTokenSections.List = {
  padding: "0 0 0.25rem",
  gap: "0",
}

export const item: ContextMenuTokenSections.Item = {
  focusBackground: "{gray.50}",
  activeBackground: "{gray.50}",
  color: "{gray.700}",
  focusColor: "{gray.900}",
  activeColor: "{gray.900}",
  padding: "0.75rem 1rem",
  borderRadius: "0",
  gap: "0.5rem",
  icon: {
    color: "{gray.700}",
    focusColor: "{gray.900}",
    activeColor: "{gray.900}",
  },
}

export const submenu: ContextMenuTokenSections.Submenu = {
  mobileIndent: "1.25rem",
}

export const submenuIcon: ContextMenuTokenSections.SubmenuIcon = {
  size: "1rem",
  color: "{gray.500}",
  focusColor: "{gray.900}",
  activeColor: "{gray.900}",
}

export const separator: ContextMenuTokenSections.Separator = {
  borderColor: "{gray.500}",
}

export const css: ContextMenuTokenSections.CSS = ({ dt }) => `
.p-contextmenu-submenu-label {
  border-bottom: 1px solid ${dt("{gray.500}")};
  margin-bottom: 5px;
}

.p-contextmenu-item-link{
  font-weight: 300;
}
`

export default {
  root,
  list,
  item,
  submenuIcon,
  separator,
  css,
}
// Notes
// 1. Disabled state is only available through custom slot
