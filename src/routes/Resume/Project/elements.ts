import type { FlattenSimpleInterpolation } from "styled-components";
import styled, { css } from "styled-components";
import type { Theme } from "../../../theme/theme";
import { divider, overview } from "../elements";
import { RepositoryLink, WebsiteLink } from "./ProjectLinks";

export const Project = styled.li<{ print: boolean }>(
  ({ print }) => css`
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
      display: ${print ? `inherit` : `none`};
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

export const Website = styled(WebsiteLink)(
  ({ to = `` }) => css`
    ${linkText};
    grid-area: website;

    &:after {
      content: "${String(to).replace(`https://`, ``)}";
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

export const Repository = styled(RepositoryLink)(
  ({ to = `` }) => css`
    ${linkText};
    grid-area: repository;

    &:after {
      content: "${String(to).replace(`https://`, ``)}";
      @media screen {
        content: "Repository";
      }
    }
  `
);
