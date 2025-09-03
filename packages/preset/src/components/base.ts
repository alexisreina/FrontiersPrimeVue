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
    700: "#bd0b25",
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
    500: "#ff953e",
    600: "#e87626",
    700: "#cb5916",
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
    200: "#d8f5d4",
    300: "#bdedb2",
    400: "#a6df93",
    500: "#91cf7a",
    600: "#65c161",
    700: "#4bae60",
    800: "#389665",
    900: "#287863",
    950: "#1b5958",
  },
  cyan: {
    50: "#eefeff",
    100: "#d3f8fa",
    200: "#b8f2f5",
    300: "#80e7ed",
    400: "#52d9e1",
    500: "#31c7d1",
    600: "#1db5c3",
    700: "#139db0",
    800: "#0b8296",
    900: "#046379",
    950: "#004659",
  },
}

const semantic: LaraBaseTokenSections.Semantic & SemanticInput = {
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
  formField: {
    paddingX: "1rem",
    paddingY: "0.625rem",
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
      },
      formField: {
        background: "{surface.0}",
        disabledBackground: "{surface.300}",
        filledBackground: "{surface.0}",
        filledHoverBackground: "{surface.0}",
        filledFocusBackground: "{surface.0}",
        borderColor: "{surface.300}",
        hoverBorderColor: "{surface.300}",
        focusBorderColor: "{surface.300}",
        invalidBorderColor: "{red.600}",
        color: "{surface.950}",
        disabledColor: "{surface.700}",
        placeholderColor: "{surface.300}",
        invalidPlaceholderColor: "{red.600}",
      },
      input: {
        hoverBorderColor: "{form.field.border.color}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.900}",
        checkedBorderColor: "{surface.900}",
        checkedHoverBorderColor: "{surface.900}",
        checkedFocusBorderColor: "{surface.900}",
      },
    },
    dark: {
      input: {
        hoverBorderColor: "{form.field.border.color}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}",
        checkedBorderColor: "{surface.0}",
        checkedHoverBorderColor: "{surface.0}",
        checkedFocusBorderColor: "{surface.0}",
      },
    },
  },
}

export default { primitive, semantic }

type Input = {
  hoverBorderColor?: string
  checkedBackground?: string
  checkedHoverBackground?: string
  checkedBorderColor?: string
  checkedHoverBorderColor?: string
  checkedFocusBorderColor?: string
  inputTextBackground?: string
}

type SemanticInput = {
  colorScheme: {
    light?: {
      input?: Input
    }
    dark?: {
      input?: Input
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
