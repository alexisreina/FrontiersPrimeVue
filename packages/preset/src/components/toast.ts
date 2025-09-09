// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/toast/index.ts
import type { ToastTokenSections } from "@primeuix/themes/types/toast"

export const root: ToastTokenSections.Root = {
  borderWidth: "1px 1px 1px 8px",
}

export const content: ToastTokenSections.Content = {
  padding: "1rem",
}

export const detail: ToastTokenSections.Detail = {
  fontWeight: "300",
  fontSize: "1rem",
}

export const colorScheme: ToastTokenSections.ColorScheme = {
  light: {
    root: {
      blur: "0px",
    },
    info: {
      background: "{surface.900}",
      borderColor: "{blue.300}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{blue.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {blue.200}",
        },
      },
    },
    success: {
      background: "{surface.900}",
      borderColor: "{green.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{green.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {green.200}",
        },
      },
    },
    warn: {
      background: "{surface.900}",
      borderColor: "{orange.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{orange.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {orange.200}",
        },
      },
    },
    error: {
      background: "{surface.900}",
      borderColor: "{red.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{red.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {red.200}",
        },
      },
    },
    secondary: {
      background: "{surface.900}",
      borderColor: "{surface.900}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{surface.800}",
        focusRing: {
          shadow: "0 0 0 0.2rem {surface.400}",
        },
      },
    },
    contrast: {
      background: "{surface.900}",
      borderColor: "{purple.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{purple.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {purple.200}",
        },
      },
    },
  },
  dark: {
    root: {
      blur: "0px",
    },
    info: {
      background: "{surface.900}",
      borderColor: "{blue.300}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{blue.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {blue.200}",
        },
      },
    },
    success: {
      background: "{surface.900}",
      borderColor: "{green.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{green.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {green.200}",
        },
      },
    },
    warn: {
      background: "{surface.900}",
      borderColor: "{orange.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{orange.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {orange.200}",
        },
      },
    },
    error: {
      background: "{surface.900}",
      borderColor: "{red.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{red.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {red.200}",
        },
      },
    },
    secondary: {
      background: "{surface.900}",
      borderColor: "{surface.900}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{surface.800}",
        focusRing: {
          shadow: "0 0 0 0.2rem {surface.400}",
        },
      },
    },
    contrast: {
      background: "{surface.900}",
      borderColor: "{purple.400}",
      color: "{surface.0}",
      detailColor: "{surface.0}",
      shadow: "{elevation.$light.bottom.30}",
      closeButton: {
        hoverBackground: "{purple.100}",
        focusRing: {
          shadow: "0 0 0 0.2rem {purple.200}",
        },
      },
    },
  },
}

export const css: ToastTokenSections.CSS = ({ dt }) => `
  .p-toast-message-info .p-toast-message-icon {
    color: ${dt("toast.info.border.color")};
  }
  .p-toast-message-success .p-toast-message-icon {
    color: ${dt("toast.success.border.color")};
  }
  .p-toast-message-warn .p-toast-message-icon {
    color: ${dt("toast.warn.border.color")};
  }
  .p-toast-message-error .p-toast-message-icon {
    color: ${dt("toast.error.border.color")};
  }
  .p-toast-message-contrast .p-toast-message-icon {
    color: ${dt("toast.contrast.border.color")};
  }
`

export default {
  root,
  content,
  detail,
  colorScheme,
  css,
}
