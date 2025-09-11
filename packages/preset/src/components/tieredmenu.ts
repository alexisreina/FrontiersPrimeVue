// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/tieredmenu/index.ts
import type { TieredMenuTokenSections } from "@primeuix/themes/lara/tieredmenu"

export const root: TieredMenuTokenSections.Root = {
  background: "{context.menu.background}",
  borderColor: "{context.menu.border.color}",
  color: "{context.menu.color}",
  borderRadius: "{context.menu.border.radius}",
  shadow: "{context.menu.shadow}",
}

export const list: TieredMenuTokenSections.List = {
  padding: "{context.menu.list.padding}",
  gap: "{context.menu.list.gap}",
}

export const item: TieredMenuTokenSections.Item = {
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

export const submenuIcon: TieredMenuTokenSections.SubmenuIcon = {
  size: "1rem",
  color: "{context.menu.item.icon.color}",
  focusColor: "{context.menu.item.icon.focus.color}",
  activeColor: "{context.menu.item.icon.focus.color}",
}

export const separator: TieredMenuTokenSections.Separator = {
  borderColor: "{context.menu.separator.border.color}",
}

export const css: TieredMenuTokenSections.CSS = ({ dt }) => `
.p-tieredmenu-submenu-label {
  border-bottom:  ${dt("{context.menu.separator.border.color}")};
  margin-bottom: ${dt("{context.menu.separator.margin.bottom}")};
}

.p-tieredmenu-item-link{
   font-weight: ${dt("{context.menu.item.link.font.weight}")};
}
.p-tieredmenu-root-list:not(:has(> .p-tieredmenu-submenu-label:first-child)) > .p-tieredmenu-item:first-child .p-tieredmenu-item-content {
  border-radius: ${dt("{{context.menu.border.radius}}")} ${dt("{{context.menu.border.radius}}")} 0 0;
`

export default {
  root,
  list,
  item,
  submenuIcon,
  separator,
  css,
}
