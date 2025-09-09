// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/avatar/index.ts
import type { AvatarTokenSections } from "@primeuix/themes/lara/avatar"

export const root: AvatarTokenSections.Root = {
  width: "1.5rem",
  height: "1.5rem",
  fontSize: "0.875rem",
  background: "transparent",
  color: "{avatar.text.color}",
  borderRadius: "{content.border.radius}",
}

export const icon: AvatarTokenSections.Icon = {
  size: "1rem",
}

export const group: AvatarTokenSections.Group = {
  borderColor: "{content.background}",
  offset: "-0.75rem",
}

export const lg: AvatarTokenSections.Lg = {
  width: "2.5rem",
  height: "2.5rem",
  fontSize: "1.25rem",
  icon: {
    size: "1.5rem",
  },
  group: {
    offset: "-1rem",
  },
}

export const xl: AvatarTokenSections.Xl = {
  width: "3rem",
  height: "3rem",
  fontSize: "1.5rem",
  icon: {
    size: "2rem",
  },
  group: {
    offset: "-1.5rem",
  },
}

export const css: AvatarTokenSections.CSS = ({ dt }) => `
.p-avatar:has(> .p-avatar-label){
    border: 1px solid ${dt("avatar.text.color")};
  }

`

export default {
  root,
  icon,
  group,
  lg,
  xl,
  css,
}

// NOTES
// 1. We have only 3 sizes: sm, md, lg -> Mapped into 24px(2xs), 40px(S), 48px(M)
// But it is possible to override the size with the style/class prop
// 2. PrimeVue Avatar component does not have internal image validation, as we have in Brink. It does not treat "label" prop as a fallback when image is not downloaded correctly. Actually, when we pass "label" prop, it takes precedence over the image - such bahaviour will introduce extra complexity on client app.
