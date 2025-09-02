// https://github.com/primefaces/primeuix/blob/main/packages/themes/src/presets/lara/button/index.ts
import type { ButtonTokenSections } from "@primeuix/themes/lara/button"
const root: ButtonTokenSections.Root = {
  roundedBorderRadius: "8rem",
  borderRadius: "8rem",
  paddingY: "0.5rem",
  paddingX: "1.5rem",
  iconOnlyWidth: "1.5rem",
  gap: "0.5rem",
  focusRing: {
    width: "1.25rem",
    style: "solid",
    offset: "1.25rem",
  },
  sm: {
    fontSize: "0.875rem",
    paddingY: "0.25rem",
    paddingX: "1rem",
    iconOnlyWidth: "1rem",
  },
  lg: {
    fontSize: "1.125rem",
    paddingX: "2rem",
    paddingY: "0.5rem",
    iconOnlyWidth: "1.5rem",
  },
  label: {
    fontWeight: "500",
  },
  raisedShadow: "none",
  primary: {
    background: "{blue.600}",
    hoverBackground: "{blue.800}",
    activeBackground: "{blue.600}",
    borderColor: "{blue.600}",
    hoverBorderColor: "{blue.800}",
    activeBorderColor: "{blue.600}",
    // color: "{green.500}",
    // hoverColor: "{green.500}",
    // activeColor: "{green.800}",
  },
  secondary: {
    background: "{gray.900}",
    hoverBackground: "{blue.950}",
    activeBackground: "{gray.900}",
    borderColor: "{gray.900}",
    hoverBorderColor: "{blue.950}",
    activeBorderColor: "{gray.900}",
    color: "rgba(255, 255, 255, 1)",
    hoverColor: "rgba(255, 255, 255, 1)",
    activeColor: "rgba(255, 255, 255, 1)",
  },
  info: {
    background: "{cyan.600}",
    hoverBackground: "{cyan.800}",
    activeBackground: "{cyan.600}",
    borderColor: "{cyan.600}",
    hoverBorderColor: "{cyan.800}",
    activeBorderColor: "{cyan.600}",
    // color: "{green.500}",
    // hoverColor: "{green.500}",
    // activeColor: "{green.800}",
  },
  success: {
    background: "{green.600}",
    hoverBackground: "{green.800}",
    activeBackground: "{green.600}",
    borderColor: "{green.600}",
    hoverBorderColor: "{green.800}",
    activeBorderColor: "{green.600}",
    // color: "{green.500}",
    // hoverColor: "{green.500}",
    // activeColor: "{green.800}",
  },
  warn: {
    background: "{orange.600}",
    hoverBackground: "{orange.800}",
    activeBackground: "{orange.600}",
    borderColor: "{orange.600}",
    hoverBorderColor: "{orange.800}",
    activeBorderColor: "{orange.600}",
    // color: "{green.500}",
    // hoverColor: "{green.500}",
    // activeColor: "{green.800}",
  },
  help: {
    background: "{primitive.purple.600}",
    hoverBackground: "{primitive.purple.800}",
    activeBackground: "{primitive.purple.600}",
    borderColor: "{primitive.purple.600}",
    hoverBorderColor: "{primitive.purple.800}",
    activeBorderColor: "{primitive.purple.600}",
    // color: "{green.500}",
    // hoverColor: "{green.500}",
    // activeColor: "{green.800}",
  },
  danger: {
    background: "{red.600}",
    hoverBackground: "{red.800}",
    activeBackground: "{red.600}",
    borderColor: "{red.600}",
    hoverBorderColor: "{red.800}",
    activeBorderColor: "{red.600}",
    // color: "{green.500}",
    // hoverColor: "{green.500}",
    // activeColor: "{green.800}",
  },
  contrast: {
    background: "rgba(255, 255, 255, 1)",
    hoverBackground: "rgba(255, 255, 255, 0.72)",
    activeBackground: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    hoverBorderColor: "rgba(255, 255, 255, 0.72)",
    activeBorderColor: "rgba(255, 255, 255, 1)",
    color: "{gray.950}",
    hoverColor: "{gray.950}",
    activeColor: "{gray.950}",
  },
}
export default { root }

// NOTES:
//  1. Default button and rounded will have same border radious - we dont need default without
//  2. Removed button with shadow bellow
//  3. We have discrapencies between color pallet included in - https://www.figma.com/design/jDOnqag4paB2kiJtu2AbqK/Foundations?node-id=4670-28718&m=dev

// Questions:
// How to use custom icons - there is a slot property for icons
// Why focus ring is not applied ?
// Why colors are not applied ?
