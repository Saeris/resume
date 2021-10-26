import type { FlattenSimpleInterpolation } from "styled-components";
import styled, { css } from "styled-components";
import type { Theme } from "../../theme";
import { divider, overview } from "../elements";
import type { LinkProps } from "../Link";
import { Link } from "../Link";

export const Project = styled.li(
  () => css`
    ${overview};
    grid-template:
      "name description website repository"
      "technologies technologies technologies technologies" /
      max-content minmax(max-content, 1fr) max-content 12ch;
    grid-row-gap: 0.4rem;

    @media print {
      grid-template:
        "name"
        "description"
        "technologies"
        "website"
        "repository";

      &:nth-of-type(n + 6) {
        display: none;
      }
    }
  `
);

const linkText = ({ theme }: { theme: Theme }): FlattenSimpleInterpolation => css`
  align-self: flex-start;
  color: ${theme.colors.primary};
  font-size: 0;

  &:after {
    font-size: ${theme.sizes.body};
    text-decoration: underline;
    user-select: none;
  }
`;

export const Website = styled(Link).attrs<LinkProps>(({ to = `` }) => ({
  children: `- Website: ${to}`
}))<LinkProps>(
  ({ to = `` }) => css`
    ${linkText};
    grid-area: website;

    &:after {
      content: "${to.replace(`https://`, ``)}";
      @media screen {
        ${divider()};
        content: "Website";
        justify-self: flex-end;
        direction: rtl;
        right: 0;
      }
    }
  `
);

export const Repository = styled(Link).attrs<LinkProps>(({ to = `` }) => ({
  children: `- Repository: ${to}`
}))<LinkProps>(
  ({ to = `` }) => css`
    ${linkText};
    grid-area: repository;

    &:after {
      content: "${to.replace(`https://`, ``)}";
      @media screen {
        content: "Repository";
      }
    }
  `
);
