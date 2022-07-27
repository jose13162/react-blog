import { styled } from "Src/stitches.config";

export const StyledNavigationItems = styled("ul", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "2rem",
});