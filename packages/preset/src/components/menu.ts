// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/menu/index.ts
import { MenuTokenSections } from "@primeuix/themes/lara/menu"
export const root: MenuTokenSections.Root = {
  background: "{context.menu.background}",
  borderColor: "{context.menu.border.color}",
  color: "{context.menu.color}",
  borderRadius: "{context.menu.border.radius}",
  shadow: "{context.menu.shadow}",
}

export const list: MenuTokenSections.List = {
  padding: "{context.menu.list.padding}",
  gap: "{context.menu.list.gap}",
}

export const item: MenuTokenSections.Item = {
  focusBackground: "{context.menu.item.focus.background}",
  color: "{context.menu.item.color}",
  focusColor: "{context.menu.item.focus.color}",
  padding: "{context.menu.item.padding}",
  borderRadius: "{context.menu.item.border.radius}",
  gap: "{context.menu.item.gap}",
  icon: {
    color: "{context.menu.item.icon.color}",
    focusColor: "{context.menu.item.icon.focus.color}",
  },
}

export const submenuLabel: MenuTokenSections.SubmenuLabel = {
  padding: "{context.menu.submenu.label.padding}",
  fontWeight: "{context.menu.submenu.label.font.weight}",
  background: "{context.menu.submenu.label.background}",
  color: "{context.menu.submenu.label.color}",
}

export const separator: MenuTokenSections.Separator = {
  borderColor: "{context.menu.separator.border.color}",
}

export const css: MenuTokenSections.CSS = ({ dt }) => `
.p-menu-submenu-label {
  border-bottom: ${dt("{context.menu.submenu.label.border.bottom}")};
  margin-bottom: ${dt("{context.menu.submenu.label.margin.bottom}")};
}

.p-menu-item-link{
  font-weight: ${dt("{context.menu.item.link.font.weight}")};
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
