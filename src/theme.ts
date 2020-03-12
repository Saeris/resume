import "typeface-orbitron";
import "typeface-titillium-web";

export interface Bounds {
  min: number;
  max: number;
}

export interface Theme {
  media: {
    between: (lowerBound: Bounds, upperBound: Bounds, excludeLarge?: boolean) => string;
    greaterThan: (size: Bounds) => string;
    lessThan: (size: Bounds) => string;
    size: (size: Bounds) => string;
  };
  breakpoints: {
    mobileSmall: { min: 0; max: 320 };
    mobileMedium: { min: 321; max: 375 };
    mobileLarge: { min: 376; max: 425 };
    tablet: { min: 426; max: 768 };
    laptop: { min: 769; max: 1024 };
    laptopLarge: { min: 1025; max: 1440 };
    desktop: { min: 1441; max: 1920 };
    desktopLarge: { min: 1921; max: 999e308 };
  };
  fonts: {
    title: string;
    body: string;
  };
  sizes: {
    tiny: string;
    body: string;
    form: string;
    headline: string;
    subtitle: string;
    title: string;
  };
  weights: {
    thin: string | number;
    extralight: string | number;
    light: string | number;
    regular: string | number;
    medium: string | number;
    semibold: string | number;
    bold: string | number;
    extrabold: string | number;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    white: string;
    black: string;
  };
}

export const theme: Theme = {
  media: {
    between(lowerBound, upperBound, excludeLarge = false) {
      if (excludeLarge) {
        return `@media (min-width: ${lowerBound.min}px) and (max-width: ${upperBound.min - 1}px)`;
      }
      if (upperBound.max === Infinity) {
        return `@media (min-width: lowerBound.min}px)`;
      }
      return `@media (min-width: lowerBound.min}px) and (max-width: ${upperBound.max}px)`;
    },

    greaterThan(size) {
      return `@media (min-width: ${size.min}px)`;
    },

    lessThan(size) {
      return `@media (max-width: ${size.min - 1}px)`;
    },

    size(size) {
      if (size.min === null) return theme.media.lessThan(size);
      if (size.max === null) return theme.media.greaterThan(size);
      return theme.media.between(size, size);
    }
  },
  breakpoints: {
    mobileSmall: { min: 0, max: 320 },
    mobileMedium: { min: 321, max: 375 },
    mobileLarge: { min: 376, max: 425 },
    tablet: { min: 426, max: 768 },
    laptop: { min: 769, max: 1024 },
    laptopLarge: { min: 1025, max: 1440 },
    desktop: { min: 1441, max: 1920 },
    desktopLarge: { min: 1921, max: 999e308 }
  },
  fonts: {
    title: `'Orbitron', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
		body: `'Titillium Web', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
  sizes: {
    tiny: `1.8rem`,
    body: `2.15rem`,
    form: `2.8rem`,
    headline: `3.2rem`,
    subtitle: `3.75rem`,
    title: `4.8rem`
  },
  weights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  colors: {
    primary: `#2691d0`,
    secondary: `#5961ac`,
		accent: `#d5dce4`,
    text: `#33568b`,
    white: `#fff`,
    black: `#000`
  }
};
