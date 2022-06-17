export const breakpoints = {
  mobileSmall: { min: 0, max: 320 },
  mobileMedium: { min: 321, max: 375 },
  mobileLarge: { min: 376, max: 425 },
  tablet: { min: 426, max: 768 },
  laptop: { min: 769, max: 1024 },
  laptopLarge: { min: 1025, max: 1440 },
  desktop: { min: 1441, max: 1920 },
  // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
  desktopLarge: { min: 1921, max: 999e308 }
} as const;
