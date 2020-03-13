import styled, { css, DefaultTheme } from "styled-components";
import { Link } from "./Link";

const list = css`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const divider = ({ theme }: { theme: DefaultTheme }) => css`
  padding-right: 1ch;
  border-right: 0.15rem solid ${theme.colors.secondary};
  box-sizing: border-box;
`;

const gradient = ({ theme }: { theme: DefaultTheme }) => css`
  @media screen {
    background: linear-gradient(
      300deg,
      ${theme.colors.primary} 0%,
      ${theme.colors.secondary} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const overview = ({ theme }: { theme: DefaultTheme }) => css`
  display: grid;
  grid-column-gap: 1ch;
  align-items: baseline;
  width: 100%;
  color: ${theme.colors.primary};
  font-size: ${theme.sizes.body};
  font-weight: 300;
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
  `
);

export const Navigation = styled.header(
  () => css`
    grid-row: header;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
);

export const Fullname = styled.h1(
  ({ theme }) => css`
    ${gradient};
    margin: 0;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.title};
    font-size: ${theme.sizes.title};
    line-height: 3rem;
    text-transform: uppercase;
  `
);

export const Title = styled.h2(
  ({ theme }) => css`
    ${gradient};
    margin: 0;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.subtitle};
    font-weight: 200;
  `
);

export const Contact = styled.address(
  () => css`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, max-content));
    grid-gap: 1ch;
    justify-content: space-around;
    width: 100%;
    margin: 0.75rem 0;
    font-style: normal;
  `
);

export const Service = styled(Link)<{ label?: string }>(
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
        content: '${label}';
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
    grid-row: content;
    width: 100%;
  `
);

export const Section = styled.section(
  ({ theme }) => css`
    position: relative;
    break-inside: avoid;

    &:not(:last-child) {
      margin-bottom: ${theme.sizes.small};
    }
  `
);

export const Header = styled.h3(
  ({ theme }) => css`
    ${gradient};
    margin: 0;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.header};
    font-weight: 300;
    break-before:
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
    text-indent: 2ch;
  `
);

export const Skills = styled.ul(
  ({ theme }) => css`
    ${list};
    display: grid;
    grid-template-columns: repeat(5, minmax(max-content, 1fr));
    grid-column-gap: ${theme.sizes.header};

    @media print {
      grid-template-columns: repeat(8, minmax(max-content, 1fr));
    }
  `
);

export const Skill = styled.li(
  ({ theme }) => css`
    font-size: ${theme.sizes.body};
    font-variant: small-caps;
  `
);

export const Jobs = styled.ul(
  ({ theme }) => css`
    ${list};
    display: grid;
    grid-gap: ${theme.sizes.label};
  `
);

export const Job = styled.li(() => css``);

export const JobOverview = styled.div(
  () => css`
    ${overview};
    grid-template-columns:
      [role-start]
      max-content
      [role-end type-start]
      max-content
      [type-end company-start]
      minmax(max-content, 1fr)
      [company-end timeframe-start]
      max-content
      [timeframe-end location-start]
      12ch
      [location-end];
    margin-bottom: 0.4rem;
  `
);

export const Role = styled.div(
  ({ theme }) => css`
    grid-area: role;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.label};
    font-weight: 500;
  `
);

export const Type = styled.div(
  ({ theme }) => css`
    ${divider};
    grid-area: type;
    color: ${theme.colors.text};
  `
);

export const Company = styled.div(
  () => css`
    grid-area: company;
  `
);

export const Timeframe = styled.div(
  () => css`
    ${divider};
    grid-area: timeframe;
    justify-self: flex-end;
  `
);

export const Location = styled.div(
  () => css`
    grid-area: location;
  `
);

export const JobMeta = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns:
      [industry-start]
      max-content
      [industry-end technologies-start]
      minmax(max-content, 1fr)
      [technologies-end];
    grid-column-gap: 1ch;
    width: 100%;
    margin-bottom: 0.4rem;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small};
    font-weight: 300;
    line-height: ${theme.sizes.label};
  `
);

export const Industry = styled.div(
  ({ theme }) => css`
    grid-area: industry;

    &:before {
      content: "Industry: ";
      color: ${theme.colors.text};
      user-select: none;
    }
  `
);

export const Technologies = styled.div(
  ({ theme }) => css`
    grid-area: technologies;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small};
    font-weight: 300;
    line-height: ${theme.sizes.label};

    &:before {
      content: "Technologies: ";
      color: ${theme.colors.text};
      user-select: none;
    }
  `
);

export const Highlights = styled.ul(
  ({ theme }) => css`
    padding-left: 3ch;
    font-size: ${theme.sizes.body};
  `
);

export const Highlight = styled.li(() => css``);

export const Projects = styled.ul(
  () => css`
    ${list};
    display: grid;
    grid-gap: 1em;
  `
);

export const Project = styled.li(() => css``);

export const ProjectOverview = styled.div(
  () => css`
    ${overview};
    grid-template-columns:
      [name-start]
      max-content
      [name-end description-start]
      minmax(max-content, 1fr)
      [description-end website-start]
      max-content
      [website-end repository-start]
      12ch
      [repository-end];
    margin-bottom: 0.4rem;
  `
);

export const Name = styled.div(
  ({ theme }) => css`
    ${divider};
    grid-area: name;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.label};
    font-weight: 500;
  `
);

export const Description = styled.div(
  ({ theme }) => css`
    grid-area: description;
    color: ${theme.colors.primary};
  `
);

const linkText = ({ theme }: { theme: DefaultTheme }) => css`
  align-self: flex-start;
  color: ${theme.colors.primary};
  font-size: 0;

  &:after {
    font-size: ${theme.sizes.body};
    text-decoration: underline;
    user-select: none;
  }

  @media print {
    display: none;
  }
`;

export const Website = styled(Link).attrs(({ to = `` }) => ({
  children: `- Website: ${to}`
}))(
  () => css`
    ${linkText};
    grid-area: website;
    justify-self: flex-end;
    direction: rtl;

    &:after {
      ${divider};
      content: "Website";
      right: 0;
    }
  `
);

export const Repository = styled(Link).attrs(({ to = `` }) => ({
  children: `- Repository: ${to}`
}))(
  () => css`
    ${linkText};
    grid-area: repository;

    &:after {
      content: "Repository";
    }
  `
);

export const Schools = styled.ul(
  () => css`
    ${list};
  `
);

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
      12ch
      [location-end];
  `
);

export const Graduated = styled.div(
  () => css`
    ${divider};
    grid-area: graduated;
    justify-self: flex-end;
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
