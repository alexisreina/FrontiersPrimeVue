// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/tieredmenu/index.ts
import type { TieredMenuTokenSections } from "@primeuix/themes/lara/tieredmenu"

export const root: TieredMenuTokenSections.Root = {
  background: "{gray.0}",
  borderColor: "{gray.500}",
  color: "{gray.500}",
  borderRadius: "{content.border.radius}",
  shadow: "{elevation.$light.bottom.40}",
}

export const list: TieredMenuTokenSections.List = {
  padding: "0 0 0.25rem",
  gap: "0",
}

export const item: TieredMenuTokenSections.Item = {
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

export const submenu: TieredMenuTokenSections.Submenu = {
  mobileIndent: "1.25rem",
}

export const submenuIcon: TieredMenuTokenSections.SubmenuIcon = {
  size: "1rem",
  color: "{gray.500}",
  focusColor: "{gray.900}",
  activeColor: "{gray.900}",
}

export const separator: TieredMenuTokenSections.Separator = {
  borderColor: "{gray.500}",
}

export const css: TieredMenuTokenSections.CSS = ({ dt }) => `
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
  submenu,
  submenuIcon,
  separator,
  css,
}
