import { css, DefaultTheme } from "styled-components";

const createProps = (
  namespace: string,
  props: Record<string, string | number>
) =>
  Object.entries(props).reduce((declartions, [key, value]) => {
    return css`
		${declartions}
		--${namespace}-${key}: ${value};
	`;
  }, css``);

const createVars = <T>(namespace: string, props: T): T =>
  Object.keys(props).reduce((declartions, key) => {
    return {
      ...declartions,
      [key]: `var(--${namespace}-${key})`
    };
  }, ({} as T));

export const extractCSSProps = ({
  fonts,
  sizes,
  weights,
  colors
}: DefaultTheme) => css`
  :root {
    ${fonts ? createProps(`fonts`, fonts) : ``};
    ${sizes ? createProps(`sizes`, sizes) : ``};
    ${weights ? createProps(`weights`, weights) : ``};
    ${colors ? createProps(`colors`, colors) : ``};
  }
`;

export const extractCSSVars = ({
  fonts,
  sizes,
  weights,
  colors,
  ...theme
}: DefaultTheme): DefaultTheme => ({
  ...theme,
  fonts: createVars(`fonts`, fonts),
  sizes: createVars(`sizes`, sizes),
  weights: createVars(`weights`, weights),
  colors: createVars(`colors`, colors)
});
