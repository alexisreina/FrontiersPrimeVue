// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/base/index.ts
import type { LaraBaseTokenSections } from "@primeuix/themes/lara/base"

const primitive: LaraBaseTokenSections.Primitive = {
  gray: {
    50: "#f7f7f7",
    100: "#f0f0f0",
    200: "#e6e6e6",
    300: "#d5d5d5",
    400: "#bfbfbf",
    500: "#a2a2a2",
    600: "#878787",
    700: "#6b6b6b",
    800: "#545454",
    900: "#282828",
    950: "#0c0c0c",
  },
  blue: {
    50: "#eef5ff",
    100: "#cee1ff",
    200: "#aecbff",
    300: "#6d9efd",
    400: "#3673f7",
    500: "#0c4ded",
    600: "#003bde",
    700: "#002fca",
    800: "#0024b0",
    900: "#001991",
    950: "#001959",
  },
  red: {
    50: "#fff3f3",
    100: "#ffd6d7",
    200: "#feb9bb",
    300: "#fa8589",
    400: "#f2575d",
    500: "#e7323b",
    600: "#d51a2c",
    700: "#c91329",
    800: "#9f0223",
    900: "#7d0022",
    950: "#59001e",
  },
  orange: {
    50: "#fff6ec",
    100: "#ffedd5",
    200: "#ffe4be",
    300: "#ffcb8d",
    400: "#ffb062",
    500: "#ff8b33",
    600: "#e56000",
    700: "#d14900",
    800: "#a93f0c",
    900: "#822907",
    950: "#591804",
  },
  purple: {
    50: "#f9f5ff",
    100: "#efe4ff",
    200: "#e4d3ff",
    300: "#c6acff",
    400: "#a589fa",
    500: "#856df0",
    600: "#6c51dc",
    700: "#553cc2",
    800: "#402ba3",
    900: "#2d1d7f",
    950: "#1d1359",
  },
  green: {
    50: "#f6fff7",
    100: "#e5fae5",
    200: "#bdf0bc",
    300: "#96e392",
    400: "#74d56d",
    500: "#54c247",
    600: "#459d3a",
    700: "#228e3c",
    800: "#2c8147",
    900: "#287753",
    950: "#1b5958",
  },
  cyan: {
    50: "#eefeff",
    100: "#d3f8fa",
    200: "#b8f2f5",
    300: "#80e7ed",
    400: "#42d6e0",
    500: "#20bbc5",
    600: "#1898a4",
    700: "#058899",
    800: "#04798b",
    900: "#046379",
    950: "#004659",
  },
}

const semantic: LaraBaseTokenSections.Semantic & SemanticExtensions = {
  disabledOpacity: "0.5",
  primary: {
    50: "{blue.50}",
    100: "{blue.100}",
    200: "{blue.200}",
    300: "{blue.300}",
    400: "{blue.400}",
    500: "{blue.500}",
    600: "{blue.600}",
    700: "{blue.700}",
    800: "{blue.800}",
    900: "{blue.900}",
    950: "{blue.950}",
  },
  overlay: {
    popover: {
      borderRadius: "{border.radius.lg}",
      shadow: "{elevation.$light.bottom.20}",
      padding: "1.5rem 1rem 1rem",
    },
  },
  list: {
    // padding: "0.5rem 0",
    // gap: "0",
    // header: {
    //   padding: "0.625rem 1rem 0 1rem",
    // },
    option: {
      padding: "1rem 1rem",
      // borderRadius: "0",
    },
    optionGroup: {
      padding: "1rem 1rem",
      fontWeight: "300",
    },
  },
  focusRing: {
    width: "0.125rem",
    style: "solid",
    color: "{blue.600}",
    offset: "0.125rem",
  },
  formField: {
    paddingX: "1rem",
    paddingY: "calc(0.625rem - 0.5px)",
    sm: {
      fontSize: "0.875rem",
      paddingX: "0.75rem",
      paddingY: "0.5rem",
    },
    lg: {
      fontSize: "1.125rem",
      paddingX: "1.125rem",
      paddingY: "0.75rem",
    },
    focusRing: {
      width: "0.125rem",
      style: "solid",
      color: "{blue.600}",
      offset: "0.125rem",
      shadow: "none",
    },
  },
  colorScheme: {
    light: {
      surface: {
        0: "#ffffff",
        50: "{gray.50}",
        100: "{gray.100}",
        200: "{gray.200}",
        300: "{gray.300}",
        400: "{gray.400}",
        500: "{gray.500}",
        600: "{gray.600}",
        700: "{gray.700}",
        800: "{gray.800}",
        900: "{gray.900}",
        950: "{gray.950}",
      },
      primary: {
        color: "{primary.600}",
        contrastColor: "#ffffff",
        hoverColor: "{primary.700}",
        activeColor: "{primary.800}",
      },
      text: {
        color: "{surface.900}",
        hoverColor: "{surface.800}",
        mutedColor: "{surface.500}",
        hoverMutedColor: "{surface.600}",
        secondaryColor: "{surface.700}",
      },
      formField: {
        background: "{surface.0}",
        disabledBackground: "{surface.0}",
        filledBackground: "{surface.0}",
        filledHoverBackground: "{surface.0}",
        filledFocusBackground: "{surface.0}",
        borderColor: "{surface.300}",
        hoverBorderColor: "{surface.300}",
        focusBorderColor: "{surface.300}",
        invalidBorderColor: "{red.600}",
        color: "{text.color}",
        disabledColor: "{surface.300}",
        placeholderColor: "{text.secondary.color}",
        invalidPlaceholderColor: "{red.600}",
        floatLabelColor: "{text.secondary.color}",
        floatLabelFocusColor: "{text.secondary.color}",
        floatLabelActiveColor: "{text.secondary.color}",
        floatLabelInvalidColor: "{red.600}",
      },
      list: {
        option: {
          focusBackground: "{surface.50}",
          selectedBackground: "{surface.0}",
          color: "{surface.700}",
          focusColor: "{surface.900}",
          selectedColor: "{surface.900}",
          selectedFocusColor: "{surface.900}",
          icon: {
            color: "{surface.700}",
            focusColor: "{surface.900}",
          },
        },
      },
      input: {
        hoverBorderColor: "{form.field.border.color}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.900}",
        checkedBorderColor: "{surface.900}",
        checkedHoverBorderColor: "{surface.900}",
        checkedFocusBorderColor: "{surface.900}",
        inputtextInvalidBackground: "{red.50}",
      },
      avatar: {
        textColor: "{surface.500}",
      },
      overlay: {
        select: {
          background: "{surface.0}",
          borderColor: "{surface.300}",
          color: "{text.color}",
        },
        popover: {
          background: "{surface.0}",
          borderColor: "{surface.300}",
          color: "{text.color}",
        },
        modal: {
          background: "{surface.0}",
          borderColor: "{surface.300}",
          color: "{text.color}",
        },
      },
      breadcrumb: {
        textColor: "{surface.800}",
        backgroundHoverColor: "{gradient.$dark.16}",
      },
    },
    dark: {
      // Same as in light mode
      surface: {
        0: "#ffffff",
        50: "{gray.50}",
        100: "{gray.100}",
        200: "{gray.200}",
        300: "{gray.300}",
        400: "{gray.400}",
        500: "{gray.500}",
        600: "{gray.600}",
        700: "{gray.700}",
        800: "{gray.800}",
        900: "{gray.900}",
        950: "{gray.950}",
      },
      formField: {
        background: "transparent",
        disabledBackground: "transparent",
        filledBackground: "transparent",
        filledHoverBackground: "transparent",
        filledFocusBackground: "transparent",
        borderColor: "{surface.0}",
        hoverBorderColor: "{surface.0}",
        focusBorderColor: "{surface.0}",
        invalidBorderColor: "{red.600}",
        color: "{surface.0}",
        disabledColor: "{surface.0}",
        placeholderColor: "{surface.0}",
        invalidPlaceholderColor: "{red.600}",
        floatLabelColor: "{surface.0}",
        floatLabelFocusColor: "{surface.0}",
        floatLabelActiveColor: "{surface.0}",
        floatLabelInvalidColor: "{red.600}",
      },
      avatar: {
        textColor: "{surface.0}",
      },
      // Styling night mode is tricky here - To Discuss
      // list: {
      //   option: {
      //     focusBackground: "{surface.50}",
      //     selectedBackground: "{surface.0}",
      //     color: "{surface.700}",
      //     focusColor: "{surface.900}",
      //     selectedColor: "{surface.900}",
      //     selectedFocusColor: "{surface.900}",
      //     icon: {
      //       color: "{surface.700}",
      //       focusColor: "{surface.900}",
      //     },
      //   },
      // },
      input: {
        hoverBorderColor: "{form.field.border.color}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}",
        checkedBorderColor: "{surface.0}",
        checkedHoverBorderColor: "{surface.0}",
        checkedFocusBorderColor: "{surface.0}",
        inputtextInvalidBackground: "rgba(159, 2, 35, 0.50)",
      },
      breadcrumb: {
        textColor: "{surface.0}",
        backgroundHoverColor: "{gradient.$light.16}",
      },
    },
  },
}

export default { primitive, semantic }

type SemanticExtensions = {
  colorScheme: {
    light?: {
      text?: {
        secondaryColor?: string
      }
      input?: {
        hoverBorderColor?: string
        checkedBackground?: string
        checkedHoverBackground?: string
        checkedBorderColor?: string
        checkedHoverBorderColor?: string
        checkedFocusBorderColor?: string
        inputtextInvalidBackground?: string
      }
      avatar?: {
        textColor?: string
      }
      breadcrumb?: {
        textColor?: string
        backgroundHoverColor?: string
      }
    }
    dark?: {
      text?: {
        secondaryColor?: string
      }
      input?: {
        hoverBorderColor?: string
        checkedBackground?: string
        checkedHoverBackground?: string
        checkedBorderColor?: string
        checkedHoverBorderColor?: string
        checkedFocusBorderColor?: string
        inputtextInvalidBackground?: string
      }
      avatar?: {
        textColor?: string
      }
      breadcrumb?: {
        textColor?: string
        backgroundHoverColor?: string
      }
    }
  }
}

// $success-50: $green-50;
// $success-20: $green-20;
// $success-0: $green-0;
// $warning-50: $orange-50;
// $warning-20: $orange-20;
// $warning-0: $orange-0;
// $error-50: $red-50;
// $error-20: $red-30;
// $error-0: $red-0;
// $info-50: $blue-50;
// $info-20: $blue-20;
// $info-0: $blue-0;

// $text-primary: $grey-90;
// $text-secondary: $grey-80;
// $text-tertiary: $grey-70;
// $bg-primary: $grey-0;
// $bg-secondary: $grey-10;
// $accessibility-blue: $blue-50;
// $accessibility-white: $grey-0;
// $black: $grey-90;
// $white: $grey-0;
