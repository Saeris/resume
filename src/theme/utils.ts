import type { DefaultTheme, FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

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

export const media = {
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
    if (size.min === undefined) return media.lessThan(size);
    // eslint-disable-next-line no-undefined
    if (size.max === undefined) return media.greaterThan(size);
    return media.between(size, size);
  }
} as Media;

const createProps = (namespace: string, props: Record<string, string | number>): FlattenSimpleInterpolation =>
  Object.entries(props).reduce(
    (declartions, [key, value]) =>
      css`
        ${declartions}--${namespace}-${key}: ${value};
      `,
    css``
  );

const createVars = <T>(namespace: keyof DefaultTheme, props: T): T =>
  Object.keys(props).reduce(
    (declartions, key) => ({
      ...declartions,
      [key]: `var(--${String(namespace)}-${key})`
    }),
    {}
  ) as unknown as T;

export const extractCSSProps = (theme: DefaultTheme): FlattenSimpleInterpolation => css`
  :root {
    ${Object.entries(theme).map(([key, value]: [string, Record<string, string | number>]) => createProps(key, value))}
  }
`;

export const extractCSSVars = (theme: DefaultTheme): DefaultTheme =>
  Object.entries(theme).reduce<DefaultTheme>((modified, [key, value]) => {
    modified[key] = createVars(key as keyof DefaultTheme, value);
    return modified;
  }, Object.create(theme));
