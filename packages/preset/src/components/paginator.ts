// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/paginator/index.ts
import { PaginatorTokenSections } from "@primeuix/themes/lara/paginator"

export const root: PaginatorTokenSections.Root = {
  padding: "0",
  gap: "0.25rem",
  borderRadius: "0",
  background: "transparent",
  color: "{gray.800}",
}

export const navButton: PaginatorTokenSections.NavButton = {
  background: "transparent",
  hoverBackground: "{gray.200}",
  selectedBackground: "{gray.200}",
  color: "{gray.800}",
  hoverColor: "{gray.900}",
  selectedColor: "{gray.900}",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
}

export const css: PaginatorTokenSections.CSS = ({ dt }) => `
  .p-paginator-pages{
   margin: 0 1rem;
  }
  .p-paginator-pages,
  .p-paginator-prev,
  .p-paginator-next,
  .p-paginator-first,
  .p-paginator-last{
    font-weight: 700;
    font-size: 0.875rem;
  }
`

export default {
  root,
  navButton,
  css,
}
