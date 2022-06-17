import type { FlattenSimpleInterpolation } from "styled-components";
import styled, { css } from "styled-components";
import type { Theme } from "../../theme/theme";
import { Link } from "./Link";

const list = css`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const divider =
  (side = `right`) =>
  ({ theme }: { theme: Theme }): FlattenSimpleInterpolation =>
    css`
  padding-${side}: 1ch;
  border-${side}: 0.15rem solid ${theme.colors.secondary};
`;

const gradient = ({ theme }: { theme: Theme }): FlattenSimpleInterpolation => css`
  @media screen {
    background: linear-gradient(300deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const overview = ({ theme }: { theme: Theme }): FlattenSimpleInterpolation => css`
  display: grid;
  grid-column-gap: 1ch;
  align-items: baseline;
  width: 100%;
  color: ${theme.colors.primary};
  font-size: ${theme.sizes.body};
  font-weight: ${theme.weights.light};
  line-height: ${theme.sizes.header};
`;

export const Main = styled.main(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 8.5in;
    min-height: 100vh;
    padding: 0.25in 0.5in;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    box-decoration-break: clone;

    @media screen {
      display: grid;
      grid-gap: ${theme.sizes.small};
    }
  `
);

export const Navigation = styled.header(
  ({ theme }) => css`
    display: grid;
    grid-template:
      "fullname"
      "title"
      "contact";
    width: 100%;

    @media print {
      grid-template:
        "fullname contact" min-content
        "title contact" min-content / minmax(0, 1fr) max-content;
      margin-bottom: ${theme.sizes.tiny};
    }
  `
);

export const Fullname = styled.h1(
  ({ theme }) => css`
    ${gradient};
    grid-area: fullname;
    margin: 0;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.title};
    font-size: ${theme.sizes.title};
    line-height: 3rem;
    text-transform: uppercase;

    @media screen {
      text-align: center;
    }

    @media print {
      font-size: 5.2rem;
      line-height: 5rem;
    }
  `
);

export const Title = styled.h2(
  ({ theme }) => css`
    ${gradient};
    grid-area: title;
    margin: 0;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.subtitle};
    font-weight: ${theme.weights.extralight};

    @media screen {
      text-align: center;
    }

    @media print {
      font-size: 3.52rem;
      line-height: 3rem;
    }
  `
);

export const Contact = styled.address(
  () => css`
    grid-area: contact;
    display: grid;
    justify-content: space-around;
    width: 100%;
    font-style: normal;

    @media screen {
      grid-template-columns: repeat(4, minmax(0, max-content));
      grid-gap: 1ch;
      margin: 0.75rem 0;
    }
  `
);

export const Service = styled(Link)<{
  label?: string;
  children?: ChildNode;
}>(
  ({ theme, label = `` }) => css`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.header};

    svg {
      font-size: ${theme.sizes.header};

      @media print {
        margin-right: 1ch;
      }
    }

    @media screen {
      font-size: 0;

      &:after {
        content: "${label}";
        margin-left: 1ch;
        color: ${theme.colors.secondary};
        font-size: ${theme.sizes.header};
        text-transform: uppercase;
        user-select: none;
      }
    }
  `
);

export const Content = styled.article(
  ({ theme }) => css`
    position: relative;
    display: grid;
    grid-template:
      "summary"
      "expertise"
      "experience"
      "projects"
      "education";
    grid-row-gap: ${theme.sizes.tiny};
    grid-column-gap: 2ch;
    width: 100%;

    @media print {
      grid-template:
        "summary summary"
        "projects expertise"
        "projects experience"
        "education experience" / 30% minmax(0, 70%);
    }
  `
);

const Section = styled.section(
  () => css`
    position: relative;
    break-inside: avoid;
  `
);

export const Summary = styled(Section)`
  grid-area: summary;

  @media print {
    display: none;
  }
`;

export const Expertise = styled(Section)`
  grid-area: expertise;
`;

export const Experience = styled(Section)(
  ({ theme }) => css`
    grid-area: experience;

    @media print {
      h3 {
        font-size: 0;

        &:after {
          content: "Relevant Experience:";
          font-size: ${theme.sizes.header};
        }
      }
    }
  `
);

export const Location = styled.div(
  () => css`
    grid-area: location;
  `
);

export const Technologies = styled.div(
  ({ theme }) => css`
    grid-area: technologies;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small};
    font-weight: ${theme.weights.light};
    line-height: ${theme.sizes.label};

    &:before {
      content: "Technologies: ";
      color: ${theme.colors.text};
      user-select: none;
    }
  `
);

export const Name = styled.div(
  ({ theme }) => css`
    grid-area: name;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.label};
    font-weight: ${theme.weights.semibold};

    @media screen {
      ${divider()};
    }
  `
);

export const Description = styled.div(
  ({ theme }) => css`
    grid-area: description;
    color: ${theme.colors.primary};
  `
);

export const Projects = styled(Section)`
  grid-area: projects;
`;

export const Education = styled(Section)`
  grid-area: education;
`;

export const Header = styled.h3(
  ({ theme }) => css`
    position: relative;
    ${gradient};
    margin: 0;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.header};
    font-weight: ${theme.weights.light};
  `
);

export const Break = styled.hr(
  ({ theme }) => css`
    margin: 0.5rem 0;
    border: 0.1rem solid ${theme.colors.accent};
  `
);

export const Text = styled.p(
  ({ theme }) => css`
    margin-bottom: 0.5em;
    font-size: ${theme.sizes.body};
  `
);

export const Skills = styled.ul(
  ({ theme }) => css`
    ${list};
    display: grid;
    grid-template-columns: repeat(6, minmax(max-content, 1fr));
    grid-column-gap: ${theme.sizes.header};
  `
);

export const Skill = styled.li(
  ({ theme }) => css`
    font-size: ${theme.sizes.body};
    font-variant: small-caps;
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    ${list};
    display: grid;
    grid-gap: ${theme.sizes.label};

    @media print {
      grid-gap: ${theme.sizes.tiny};
    }
  `
);

export const Note = styled.aside(
  ({ theme }) => css`
    display: none;
    justify-content: center;
    margin-top: ${theme.sizes.tiny};
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.body};
    font-weight: ${theme.weights.light};
    font-variant: small-caps;

    @media Print {
      display: flex;
    }
  `
);

export const Schools = styled.ul(
  () => css`
    ${list};
  `
);

export const Footer = styled.footer(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    margin-top: 1rem;

    @media print {
      display: none;
    }
  `
);
