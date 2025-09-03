// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/message/index.ts
import type { MessageTokenSections } from "@primeuix/themes/types/message"

export const root: MessageTokenSections.Root = {
  borderRadius: "0",
  borderWidth: "1px",
}

export const content: MessageTokenSections.Content = {
  padding: "1rem 1.5rem",
  gap: "0.5rem",
  sm: {
    padding: "0.75rem 0.875rem",
  },
  lg: {
    padding: "1.125rem 1.625rem",
  },
}

export const colorScheme: MessageTokenSections.ColorScheme = {
  light: {
    info: {
      background: "{blue.50}",
      borderColor: "{blue.300}",
      color: "{surface.900}",
      shadow: "none",
      closeButton: {
        hoverBackground: "{blue.100}",
        focusRing: {
          color: "{focus.ring.color}",
          shadow: "0 0 0 0.2rem {blue.200}",
        },
      },
      outlined: {
        color: "{blue.600}",
        borderColor: "{blue.600}",
      },
      simple: {
        color: "{blue.600}",
      },
    },
    success: {
      background: "{green.50}",
      borderColor: "{green.300}",
      color: "{surface.900}",
      shadow: "none",
      closeButton: {
        hoverBackground: "{green.100}",
        focusRing: {
          color: "{focus.ring.color}",
          shadow: "0 0 0 0.2rem {green.200}",
        },
      },
      outlined: {
        color: "{green.700}",
        borderColor: "{green.600}",
      },
      simple: {
        color: "{green.700}",
      },
    },
    warn: {
      background: "{orange.50}",
      borderColor: "{orange.300}",
      color: "{surface.900}",
      shadow: "none",
      closeButton: {
        hoverBackground: "{orange.100}",
        focusRing: {
          color: "{focus.ring.color}",
          shadow: "0 0 0 0.2rem {orange.200}",
        },
      },
      outlined: {
        color: "{orange.600}",
        borderColor: "{orange.600}",
      },
      simple: {
        color: "{orange.400}",
      },
    },
    error: {
      background: "{red.50}",
      borderColor: "{red.300}",
      color: "{surface.900}",
      shadow: "none",
      closeButton: {
        hoverBackground: "{red.100}",
        focusRing: {
          color: "{focus.ring.color}",
          shadow: "0 0 0 0.2rem {red.200}",
        },
      },
      outlined: {
        color: "{red.600}",
        borderColor: "{red.600}",
      },
      simple: {
        color: "{red.600}",
      },
    },
    secondary: {
      background: "{surface.100}",
      borderColor: "{surface.300}",
      color: "{surface.800}",
      shadow: "none",
      closeButton: {
        hoverBackground: "{surface.200}",
        focusRing: {
          color: "{focus.ring.color}",
          shadow: "0 0 0 0.2rem {surface.200}",
        },
      },
      outlined: {
        color: "{surface.600}",
        borderColor: "{surface.600}",
      },
      simple: {
        color: "{surface.500}",
      },
    },
    contrast: {
      background: "{surface.900}",
      borderColor: "{surface.700}",
      color: "{surface.0}",
      shadow: "none",
      closeButton: {
        hoverBackground: "{surface.800}",
        focusRing: {
          color: "{focus.ring.color}",
          shadow: "0 0 0 0.2rem {surface.400}",
        },
      },
      outlined: {
        color: "{surface.900}",
        borderColor: "{surface.900}",
      },
      simple: {
        color: "{surface.900}",
      },
    },
  },
}

export const extend: MessageTokenSections.Extend = {
  before: {
    borderWidth: "6px",
    infoBackground: "{blue.600}",
    successBackground: "{green.600}",
    warnBackground: "{orange.600}",
    errorBackground: "{red.600}",
    secondaryBackground: "{surface.600}",
    contrastBackground: "{surface.700}",
  },
}

export const css: MessageTokenSections.CSS = ({ dt }) => `
  div[data-pc-name="message"] {
    position: relative;
  }
  div[data-pc-name="message"]::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: ${dt("message.before.borderWidth")};
    height: 100%;
    outline: 1px solid;
  }
  div[data-p*="info"]::before {
    background-color: ${dt("message.before.colorScheme.info.background")};
    outline-color: ${dt("message.before.colorScheme.info.background")};
  }
  div[data-p*="success"]::before {
    background-color: ${dt("message.before.colorScheme.success.background")};
    outline-color: ${dt("message.before.colorScheme.success.background")};
  }
  div[data-p*="warn"]::before {
    background-color: ${dt("message.before.colorScheme.warn.background")};
    outline-color: ${dt("message.before.colorScheme.warn.background")};
  }
  div[data-p*="error"]::before {
    background-color: ${dt("message.before.colorScheme.error.background")};
    outline-color: ${dt("message.before.colorScheme.error.background")};
  }
  div[data-p*="secondary"]::before {
    background-color: ${dt("message.before.colorScheme.secondary.background")};
    outline-color: ${dt("message.before.colorScheme.secondary.background")};
  }
  div[data-p*="contrast"]::before {
    background-color: ${dt("message.before.colorScheme.contrast.background")};
    outline-color: ${dt("message.before.colorScheme.contrast.background")};
  }
  div[data-p*="simple"]::before, div[data-p*="outlined"]::before {
    content: none;
  }
`

export default {
  root,
  content,
  colorScheme,
  extend,
  css,
}
