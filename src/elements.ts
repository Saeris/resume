import styled, { css } from "styled-components";
import { Link } from "./Link";

const list = css`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const divider = css`
  padding-right: 1ch;
  border-right: 0.15rem solid #5961ac;
  box-sizing: border-box;
`;

const gradient = css`
  background: linear-gradient(
    300deg,
    rgb(37, 154, 214) 0%,
    rgb(86, 103, 176) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const overview = css`
  display: grid;
  grid-column-gap: 1ch;
  width: 100%;
	color: #2d89c9;
  font-size: 1.6rem;
  font-weight: 300;
	line-height: 2.1rem;
`;

export const Main = styled.main(
  () => css`
    display: grid;
    grid-template-rows:
      [header-start]
      min-content
      [header-end content-start]
      1fr
      [content-end footer-start]
      min-content
      [footer-end];
    width: 100%;
    max-width: 8.5in;
    min-height: 100vh;
    padding: 0.25in 0.5in;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: "Titillium Web", sans-serif;
    color: #95a4bb;
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
  () => css`
    ${gradient};
    margin: 0;
    font-family: "Orbitron", sans-serif;
    font-size: 3.8rem;
    line-height: 3rem;
    text-transform: uppercase;
  `
);

export const Title = styled.h2(
  () => css`
    ${gradient};
    margin: 0;
    font-size: 2.6rem;
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
  ({ label = `` }) => css`
    display: inline-flex;
    align-items: center;
    font-size: 0;
    text-decoration: none;

    svg {
      color: #2691d0;
      font-size: 2.1rem;
    }

    &:after {
      content: '${label}';
      margin-left: 1ch;
      color: #5961ac;
      font-size: 2.1rem;
      text-transform: uppercase;
      user-select: none;
    }
  `
);

export const Content = styled.article(
  () => css`
    grid-row: content;
    display: grid;
    grid-row-gap: 1rem;
    width: 100%;
  `
);

export const Section = styled.section(() => css``);

export const Header = styled.h3(
  () => css`
    ${gradient};
    margin: 0;
    font-size: 2.1rem;
    font-weight: 300;
  `
);

export const Break = styled.hr(
  () => css`
    margin: 0.5rem 0;
    border: 0.1rem solid #d5dce4;
  `
);

export const Text = styled.p(
  () => css`
    margin-bottom: 0.5em;
    font-size: 1.6rem;
    text-indent: 2ch;
  `
);

export const Skills = styled.ul(
  () => css`
    ${list};
    display: grid;
    grid-template-columns: repeat(5, minmax(max-content, 1fr));
    grid-column-gap: 1ch;
  `
);

export const Skill = styled.li(
  () => css`
    font-size: 1.6rem;
    font-variant: small-caps;
  `
);

export const Jobs = styled.ul(
  () => css`
    ${list};
    display: grid;
    grid-gap: 1em;
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
  () => css`
    grid-area: role;
    color: #5961ac;
    font-size: 1.8rem;
    font-weight: 500;
  `
);

export const Type = styled.div(
  () => css`
    ${divider};
    grid-area: type;
    color: #95a4bb;
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
  () => css`
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
		color: #2d89c9;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.8rem;
  `
);

export const Industry = styled.div(
  () => css`
    grid-area: industry;

    &:before {
      content: "Industry: ";
      color: #95a4bb;
      user-select: none;
    }
  `
);

export const Technologies = styled.div(
  () => css`
    grid-area: technologies;
    color: #2d89c9;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.8rem;

    &:before {
      content: "Technologies: ";
      color: #95a4bb;
      user-select: none;
    }
  `
);

export const Highlights = styled.ul(
  () => css`
    padding-left: 3ch;
    font-size: 1.6rem;
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
  () => css`
    ${divider};
    grid-area: name;
    color: #5961ac;
    font-size: 1.8rem;
    font-weight: 500;
  `
);

export const Description = styled.div(
  () => css`
    grid-area: description;
    color: #2d89c9;
  `
);

const linkText = css`
  align-self: flex-start;
  color: #2d89c9;
  font-size: 0;

  &:after {
    font-size: 1.6rem;
    text-decoration: underline;
    user-select: none;
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

export const Footer = styled.footer(() => css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5rem;
	margin-top: 1rem;
`)