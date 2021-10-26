import styled, { css } from "styled-components";
import { divider, overview } from "../elements";

export const School = styled.li(
  () => css`
    ${overview};
    grid-template-columns:
      [name-start]
      max-content
      [name-end description-start]
      minmax(max-content, 1fr)
      [description-end graduated-start]
      max-content
      [graduated-end location-start]
      13ch
      [location-end];

    @media print {
      grid-template:
        "name"
        "description"
        "location"
        "graduated";
    }
  `
);

export const Graduated = styled.div(
  () => css`
    grid-area: graduated;

    @media screen {
      ${divider()};
      justify-self: flex-end;
    }
  `
);
