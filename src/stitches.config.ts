import { createStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      $background: "#ffffff",
      $backgroundDarker: "#f9fafb",
      $textColor: "#667085",
      $titleColor: "#101828",
      $buttonTextColor: "#ffffff",
      $primary: "#7f56d9",
    },
    borderStyles: {
      base: "1px solid #f2f4f7",
    },
  },
});
