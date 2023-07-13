import "react";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined;
    [key: `&${string}`]: CSSProperties;
  }
}
