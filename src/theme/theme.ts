import { breakpoints, colors, fonts, sizes, weights } from "./tokens";
import { media } from "./utils";

export const theme = Object.defineProperties(
  {
    fonts,
    sizes,
    weights,
    colors
  },
  {
    media: {
      value: media
    },
    breakpoints: {
      value: breakpoints
    }
  }
);

export type Theme = typeof theme;
