import "typeface-orbitron";
import "typeface-titillium-web";

export interface Range {
  min?: number;
  max?: number;
}

export interface Media {
  between: (lowerBound: Range, upperBound: Range, excludeLarge?: boolean) => string;
  greaterThan: (size: Range) => string;
  lessThan: (size: Range) => string;
  size: (size: Range) => string;
}

export const theme = Object.defineProperties(
  {
    fonts: {
      title: `'Orbitron', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
      body: `'Titillium Web', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`
    } as const,
    sizes: {
      title: `3.95rem`,
      subtitle: `2.6rem`,
      header: `2.1rem`,
      label: `1.8rem`,
      body: `1.6rem`,
      small: `1.4rem`,
      tiny: `1.2rem`
    } as const,
    weights: {
      extrabold: 800,
      bold: 700,
      semibold: 600,
      medium: 500,
      regular: 400,
      light: 300,
      extralight: 200,
      thin: 100
    } as const,
    colors: {
      primary: `#127cbb`,
      secondary: `#4b54a0`,
      accent: `#d5dce4`,
      text: `#33568b`,
      white: `#fff`,
      black: `#000`
    } as const
  },
  {
    media: {
      value: {
        between(lowerBound, upperBound, excludeLarge = false) {
          if (excludeLarge && lowerBound.min && upperBound.min) {
            return `@media (min-width: ${lowerBound.min}px) and (max-width: ${upperBound.min - 1}px)`;
          }
          if (upperBound.max === Infinity && lowerBound.min) {
            return `@media (min-width: ${lowerBound.min}}px)`;
          }
          return `@media (min-width: ${lowerBound.min ? lowerBound.min : 0}px) and (max-width: ${
            upperBound.max ? upperBound.max : Infinity
          }px)`;
        },

        greaterThan(size) {
          return `@media (min-width: ${size.min ? size.min : 0}px)`;
        },

        lessThan(size) {
          return `@media (max-width: ${size.min ? size.min : 1 - 1}px)`;
        },

        size(size) {
          // eslint-disable-next-line no-undefined
          if (size.min === undefined) return theme.media.lessThan(size);
          // eslint-disable-next-line no-undefined
          if (size.max === undefined) return theme.media.greaterThan(size);
          return theme.media.between(size, size);
        }
      } as Media
    },
    breakpoints: {
      value: {
        mobileSmall: { min: 0, max: 320 },
        mobileMedium: { min: 321, max: 375 },
        mobileLarge: { min: 376, max: 425 },
        tablet: { min: 426, max: 768 },
        laptop: { min: 769, max: 1024 },
        laptopLarge: { min: 1025, max: 1440 },
        desktop: { min: 1441, max: 1920 },
        // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
        desktopLarge: { min: 1921, max: 999e308 }
      } as const
    }
  }
);

export type Theme = typeof theme;
