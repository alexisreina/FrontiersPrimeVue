// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/dialog/index.ts
import type { DialogTokenSections } from "@primeuix/themes/types/dialog"

export const header: DialogTokenSections.Header = {
  padding: "2rem 1rem 2rem 2rem",
  gap: "0.5rem",
}

export const title: DialogTokenSections.Title = {
  fontSize: "1.125rem",
  fontWeight: "600",
}

export const content: DialogTokenSections.Content = {
  padding: "0.5rem 2rem 1.5rem",
}

export const footer: DialogTokenSections.Footer = {
  padding: "1.5rem 2rem",
  gap: "1rem",
}

export const css: DialogTokenSections.CSS = ({ dt }) => `
  .p-dialog-header-actions {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
  .p-dialog-close-button > svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`

export default {
  header,
  title,
  content,
  footer,
  css,
}
