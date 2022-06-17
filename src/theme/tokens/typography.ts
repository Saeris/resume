import "typeface-orbitron";
import "typeface-titillium-web";

export const fonts = {
  title: `'Orbitron', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  body: `'Titillium Web', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif`
} as const;

export const sizes = {
  title: `3.95rem`,
  subtitle: `2.65rem`,
  header: `2.1rem`,
  label: `1.8rem`,
  body: `1.6rem`,
  small: `1.4rem`,
  tiny: `1.2rem`
} as const;

export const weights = {
  extrabold: 800,
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  extralight: 200,
  thin: 100
} as const;
