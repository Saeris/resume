import type React from "react";
import type { IconType } from "react-icons";
import {
  SiApollographql,
  SiBabel,
  SiCodesandbox,
  SiCss3,
  SiEslint,
  SiFigma,
  SiFramer,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedux,
  SiRollupdotjs,
  SiStorybook,
  SiStyledcomponents,
  SiThreedotjs,
  SiTypescript,
  SiWebpack
} from "react-icons/si";
import { AriakitIcon } from "./components/AriakitIcon";

export interface Content {
  fullName: string;
  title: string;
  contacts: { label: string; to: string }[];
  summary: string;
  skills: [IconType | React.FC, string][];
  jobs: {
    role: string;
    type: "Full-Time" | "Contract" | "Freelance" | "Volunteer";
    company: string | null;
    timeframe: string;
    technologies: string[];
    highlights: string[];
  }[];
  projects: {
    name: string;
    description: string;
    website: string | null;
    repository: string | null;
    technologies: string[];
  }[];
  schools: {
    name: string;
    description: string;
    graduated: string | null;
    location: string;
  }[];
}

export const content: Content = {
  fullName: `Drake Costa`,
  title: `Full-Stack TypeScript Engineer`,
  contacts: [
    { label: `Email`, to: `drake@saeris.io` },
    { label: `GitHub`, to: `https://www.github.com/saeris` },
    { label: `Twitter`, to: `https://www.twitter.com/saeris` },
    { label: `LinkedIn`, to: `https://www.linkedin.com/in/saeris` }
  ],
  summary: `Self-taught software engineer with over a decade of experience. Educational background in graphic design and a prior career in game development. Enthusiastic about design systems, accessibility, and developer experience. Highly values learning and bringing people together.`,
  skills: [
    [SiTypescript, `TypeScript`],
    [SiJavascript, `JavaScript`],
    [SiHtml5, `HTML`],
    [SiCss3, `CSS`],
    [SiNodedotjs, `Node.js`],
    [SiGraphql, `GraphQL`],
    [SiPrisma, `Prisma`],
    [SiPostgresql, `PostgreSQL`],
    [SiReact, `React`],
    [SiRedux, `Redux`],
    [SiNextdotjs, `Next.js`],
    [AriakitIcon, `Ariakit`],
    [SiApollographql, `Apollo`],
    [SiReactquery, `React-Query`],
    [SiStyledcomponents, `Styled-Components`],
    [SiFramer, `Framer Motion`],
    [SiThreedotjs, `Three.js`],
    [SiCodesandbox, `CodeSandbox`],
    [SiWebpack, `Webpack`],
    [SiBabel, `Babel`],
    [SiEslint, `ESLint`],
    [SiRollupdotjs, `Rollup`],
    [SiJest, `Jest`],
    [SiGithubactions, `GitHub Actions`],
    [SiStorybook, `Storybook`],
    [SiFigma, `Figma`]
  ],
  jobs: [
    {
      role: `Senior Software Engineer I`,
      type: `Full-Time`,
      company: `M1 Finance`,
      timeframe: `8.22 - 5.23`,
      technologies: [
        `React`,
        `TypeScript`,
        `GraphQL`,
        `Ariakit`,
        `Styled-Components`,
        `Storybook`,
        `Figma`
      ],
      highlights: [
        `Shipped a multi-phase design system foundations project in under four months for our Web, iOS and Android platforms as part of a cross-functional team of designers and engineers.`,

        `Developed a scalable design token theming solution with code examples and documentation to support the migration of our legacy web application.`,

        `Collaborated with design team to migrate over 450 icons and illustrations to SVG, reducing our component library's bundle size from 36mb down to 3.2mb, a savings of 1125%.`,

        `Directed discussions on accessibility, design tokens, and design documentation as leading member of a weekly cross-functional design system committee.`,

        `Mentored peers in WAI-ARIA accessible user interface patterns such as keyboard interactions, tab focus management, and ARIA attributes.`,

        `Built internal tools including interactive code-snippet sticker sheets in Storybook, a modern GraphQL IDE with custom authentication support, and image asset optimization scripts.`
      ]
    },
    {
      role: `Software Engineer II`,
      type: `Contract`,
      company: `VanderHouwen on assignment at Nike`,
      timeframe: `10.20 - 7.21`,
      technologies: [
        `Node.js`,
        `React`,
        `Next.js`,
        `TypeScript`,
        `Babel`,
        `Rollup`,
        `ESLint`,
        `Jest`,
        `Open CLI Framework`
      ],
      highlights: [
        `Responsible for the development of a Next.js based micro-frontend application platform as a member of a platform team, which enabled dozens of product teams to build and ship features independently.`,
        `Migrated several internal libraries to TypeScript, including a design system consisting of over 200 components, and mentored teammates in the usage of TypeScript.`,
        `Established and applied new code quality standards using ESLint and TypeScript through the creation of a shared configuration package.`,
        `Created a CLI tool which unified the developer tooling interface in order to standardize the build, linting, and unit testing of applications and libraries while reducing dependency churn.`
      ]
    },
    {
      role: `Front-End Engineer`,
      type: `Contract`,
      company: `CodeSandbox`,
      timeframe: `05.19 - 03.20`,
      technologies: [
        `React`,
        `TypeScript`,
        `Styled-Components`,
        `Ariakit`,
        `Apollo`,
        `GraphQL`
      ],
      highlights: [
        `Developed user interface for Template Sandboxes, a core product feature which enables users to easily build and share their own customizable and reusable starter projects.`,
        `Established internal dogfooding process for using the product to prototype and build new features, such as a crash handler page which streamlined user's ability to file bug reports.`,
        `Documented coding style guidelines and refactored legacy components to adhere to industry standard best practices.`
      ]
    }
  ],
  projects: [
    {
      name: `Worbik`,
      description: `Daily Word Puzzle Mini-Game`,
      website: `https://worbik.saeris.io`,
      repository: null,
      technologies: [`Nextjs`, `Typescript`, `Vercel Platform`]
    },
    {
      name: `saeris.gg`,
      description: `Personal Link Sharing Microsite`,
      website: `https://saeris.gg`,
      repository: `https://github.com/saeris/saeris.gg`,
      technologies: [`Next.js`, `TypeScript`, `Three.js`, `CSS Modules`]
    },
    {
      name: `Discordkit`,
      description: `A Type-Safe REST API Client for Discord`,
      website: null,
      repository: `https://github.com/Saeris/discordkit`,
      technologies: [`TypeScript`, `Zod`]
    },
    {
      name: `Proxy Tokens`,
      description: `Design Token Utility to Generate CSS Variables`,
      website: null,
      repository: `https://github.com/Saeris/proxy-tokens`,
      technologies: [`Styled-Components`, `TypeScript`]
    }
  ],
  schools: [
    {
      name: `Renton Technical College`,
      description: `BAS - Computer Network Engineering`,
      graduated: `April 2023 - Present`,
      location: `Renton, WA`
    },
    {
      name: `Las Positas Community College`,
      description: `AA - Visual Communications`,
      graduated: `Graduated May 2010`,
      location: `Livermore, CA`
    }
  ]
};
