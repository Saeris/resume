import type { IconType } from "react-icons";
import { GoLink, GoMail, GoRepo } from "react-icons/go";
import {
  SiLinkedin,
  SiGithub,
  SiApollographql,
  SiFigma,
  SiGraphql,
  SiTrpc,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiRollupdotjs,
  SiStorybook,
  SiStyledcomponents,
  SiTypescript,
  SiWebpack
} from "react-icons/si";

export interface Content {
  fullName: string;
  pronouns: string;
  location: string;
  timezone: string;
  contacts: Array<[Icon: IconType, url: string]>;
  summary: string;
  skills: Array<[Icon: IconType, skill: string]>;
  jobs: Array<{
    role: string;
    company: string | null;
    timeframe: string;
    highlights: string[];
  }>;

  projects: Array<{
    name: string;
    Icon: IconType;
    link: string;
    description: string;
  }>;
  schools: Array<{
    name: string;
    degree: string;
  }>;
}

export const content: Content = {
  fullName: `Drake Costa`,
  pronouns: `he/him`,
  location: `Portland, Oregon`,
  timezone: `Pacific Time (UTC -08:00)`,
  contacts: [
    [GoMail, `drake@saeris.io`],
    [SiGithub, `github.com/saeris`],
    [SiLinkedin, `linkedin.com/in/saeris`]
  ],
  summary: `Full-Stack TypeScript engineer with 10+ years of experience building user-facing applications using technologies such as React, Next.js, Node.js and GraphQL. My key areas of focus are Developer Experience, Design Systems and Accessibility. I strive to architect elegant and scalable solutions based on the latest technologies and practices.`,
  skills: [
    [SiTypescript, `TypeScript`],
    [SiNextdotjs, `Next.js`],
    [SiReact, `React`],
    [SiRedux, `Redux`],
    [SiApollographql, `Apollo`],
    [SiGraphql, `GraphQL`],
    [SiPostgresql, `PostgreSQL`],
    [SiTrpc, `tRPC`],
    [SiNodedotjs, `Node.js`],
    [SiStyledcomponents, `Styled-Components`],
    [SiJest, `Jest`],
    [SiWebpack, `Webpack`],
    [SiRollupdotjs, `Rollup`],
    [SiStorybook, `Storybook`],
    [SiFigma, `Figma`]
  ],
  jobs: [
    {
      role: `Design Engineering Consultant`,
      company: `Self-Employed`,
      timeframe: `July 2023 - Present`,
      highlights: [
        `Provided individualized training to designers and engineers in the use of Figma, implementation of design systems, and strategies for streamlining handoff processes.`,
        `Created UI mockups, code examples, supporting documentation and infographics tailored to illustrate concepts such as the relationships between designs built in Figma and their implementation in React/HTML/CSS.`
      ]
    },
    {
      role: `Senior Software Engineer I`,
      company: `M1 Finance`,
      timeframe: `Aug 2022 - May 2023`,
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
      company: `Nike`,
      timeframe: `Oct 2020 - Jul 2021`,
      highlights: [
        `Responsible for the development of a Next.js based micro-frontend application platform as a member of a platform team, which enabled dozens of product teams to build and ship features independently.`,
        `Migrated several internal libraries to TypeScript, including a design system consisting of over 200 components, and mentored teammates in the usage of TypeScript.`,
        `Established and applied new code quality standards using ESLint and TypeScript through the creation of a shared configuration package.`,
        `Created a CLI tool which unified the developer tooling interface in order to standardize the build, linting, and unit testing of applications and libraries while reducing dependency churn.`
      ]
    },
    {
      role: `Full Stack Engineer`,
      company: `CodeSandbox`,
      timeframe: `May 2019 - Mar 2020`,
      highlights: [
        `Developed user interface for Template Sandboxes, a core product feature which enables users to easily build and share their own customizable and reusable starter projects.`,
        `Established internal dogfooding process for using the product to prototype and build new features, such as a crash handler page which streamlined user's ability to file bug reports.`,
        `Documented coding style guidelines and refactored legacy components to adhere to industry standard best practices.`
      ]
    }
  ],
  projects: [
    {
      name: `Discordkit`,
      Icon: GoRepo,
      link: `github.com/discordkit/discordkit`,
      description: `TypeScript SDK for Discord's public REST API. Features a functional architecture optimized for tiny bundle sizes and schema definitions providing out-of-the-box validation. Built as a monorepo with automated publishing and includes 500+ integration tests.`
    },
    {
      name: `Valimock`,
      Icon: GoRepo,
      link: `github.com/saeris/valimock`,
      description: `Schema-based data mocking library for Valibot using Faker.js. I built this library alongside a PR that added a reflection API to Valibot which enabled third-party authors to create their own tools and integrations.`
    },
    {
      name: `Worbik`,
      Icon: GoLink,
      link: `worbik.saeris.gg`,
      description: `Daily word puzzle mini-game built with the latest features of Next.js and Vercel, such as Edge Functions, Edge Config, Cron Jobs, and the Next.js 13 App router.`
    }
  ],
  schools: [
    {
      name: `Renton Technical College`,
      degree: `Bachelors - Computer Network Engineering`
    },
    {
      name: `Las Positas College`,
      degree: `Associates - Visual Communications`
    }
  ]
};
