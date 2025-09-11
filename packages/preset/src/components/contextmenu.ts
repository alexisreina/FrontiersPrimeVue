// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/contextmenu/index.ts
import type { ContextMenuTokenSections } from "@primeuix/themes/lara/contextmenu"

export const root: ContextMenuTokenSections.Root = {
  background: "{context.menu.background}",
  borderColor: "{context.menu.border.color}",
  color: "{context.menu.color}",
  borderRadius: "{context.menu.border.radius}",
  shadow: "{context.menu.shadow}",
}

export const list: ContextMenuTokenSections.List = {
  padding: "{context.menu.list.padding}",
  gap: "{context.menu.list.gap}",
}

export const item: ContextMenuTokenSections.Item = {
  focusBackground: "{context.menu.item.focus.background}",
  activeBackground: "{context.menu.item.focus.background}",
  color: "{context.menu.item.color}",
  focusColor: "{context.menu.item.focus.color}",
  activeColor: "{context.menu.item.focus.color}",
  padding: "{context.menu.item.padding}",
  borderRadius: "{context.menu.item.border.radius}",
  gap: "{context.menu.item.gap}",
  icon: {
    color: "{context.menu.item.icon.color}",
    focusColor: "{context.menu.item.icon.focus.color}",
    activeColor: "{context.menu.item.icon.focus.color}",
  },
}

export const submenuIcon: ContextMenuTokenSections.SubmenuIcon = {
  size: "1rem",
  color: "{context.menu.item.icon.color}",
  focusColor: "{context.menu.item.icon.focus.color}",
  activeColor: "{context.menu.item.icon.focus.color}",
}

export const separator: ContextMenuTokenSections.Separator = {
  borderColor: "{context.menu.separator.border.color}",
}

export const css: ContextMenuTokenSections.CSS = ({ dt }) => `
.p-contextmenu-submenu-label {
  border-bottom:  ${dt("{context.menu.separator.border.color}")};
  margin-bottom: ${dt("{context.menu.separator.margin.bottom}")};
}

.p-contextmenu-item-link{
  font-weight: ${dt("{context.menu.item.link.font.weight}")};
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
