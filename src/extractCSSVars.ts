import type { DefaultTheme, FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

const createProps = (namespace: string, props: Record<string, string | number>): FlattenSimpleInterpolation =>
  Object.entries(props).reduce(
    (declartions, [key, value]) => css`${declartions}--${namespace}-${key}: ${value};`,
    css``
  );

const createVars = <T>(namespace: keyof DefaultTheme, props: T): T =>
  (Object.keys(props).reduce(
    (declartions, key) => ({
      ...declartions,
      [key]: `var(--${String(namespace)}-${key})`
    }),
    {}
  ) as unknown) as T;

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
