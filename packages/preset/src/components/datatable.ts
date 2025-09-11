// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/datatable/index.ts
import type { DataTableTokenSections } from "@primeuix/themes/types/datatable"

export const headerCell: DataTableTokenSections.HeaderCell = {
  padding: "1rem",
  sm: {
    padding: "0.75rem 1rem",
  },
  lg: {
    padding: "1.25rem 1rem",
  },
}

export const columnTitle: DataTableTokenSections.ColumnTitle = {
  fontWeight: "500",
}

export const bodyCell: DataTableTokenSections.BodyCell = {
  borderColor: "transparent",
  padding: "1rem",
  sm: {
    padding: "0.75rem 1rem",
  },
  lg: {
    padding: "1.25rem 1rem",
  },
}

export const columnFooter: DataTableTokenSections.ColumnFooter = {
  fontWeight: "500",
}

export const footerCell: DataTableTokenSections.FooterCell = {
  padding: "1rem",
  sm: {
    padding: "0.75rem 1rem",
  },
  lg: {
    padding: "1.25rem 1rem",
  },
}

export const footer: DataTableTokenSections.Footer = {
  borderWidth: "1px 0 0 0",
  padding: "1rem",
  sm: {
    padding: "0.75rem 1rem",
  },
  lg: {
    padding: "1.25rem 1rem",
  },
}

export const colorScheme: DataTableTokenSections.ColorScheme = {
  light: {
    root: {
      borderColor: "{content.border.color}",
    },
    header: {
      background: "{surface.0}",
      color: "{text.color}",
    },
    headerCell: {
      background: "{surface.0}",
      hoverBackground: "{surface.100}",
      color: "{text.color}",
    },
    footer: {
      background: "{surface.0}",
      color: "{text.color}",
    },
    footerCell: {
      background: "{surface.0}",
      color: "{text.color}",
    },
    row: {
      stripedBackground: "{surface.50}",
    },
    bodyCell: {
      selectedBorderColor: "{primary.100}",
    },
  },
}

export const paginatorBottom: DataTableTokenSections.PaginatorBottom = {
  borderWidth: "1px 0 0 0",
}

export const css: DataTableTokenSections.CSS = ({ dt }) => `
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-color: ${dt("datatable.border.color")};
  }
`

export default {
  headerCell,
  columnTitle,
  bodyCell,
  columnFooter,
  footerCell,
  footer,
  colorScheme,
  paginatorBottom,
  css,
}
