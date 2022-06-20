export interface Results {
  fullName: string;
  title: string;
  contacts: { label: string; to: string }[];
  summary: string;
  skills: string[];
  jobs: {
    role: string;
    type: "Full-Time" | "Contract" | "Freelance" | "Volunteer";
    company: string | null;
    print: boolean;
    timeframe: string;
    location: string;
    industry: string | null;
    technologies: string[];
    highlights: string[];
  }[];
  projects: {
    name: string;
    description: string;
    website: string | null;
    repository: string | null;
    technologies: string[];
    print: boolean;
  }[];
  schools: { name: string; description: string; graduated: string; location: string }[];
}

export const results: { data: Results } = {
  data: {
    fullName: `Drake Costa`,
    title: `Full-Stack Typescript Engineer`,
    contacts: [
      { label: `Email`, to: `drake@saeris.io` },
      { label: `LinkedIn`, to: `https://www.linkedin.com/in/saeris` },
      { label: `Twitter`, to: `https://www.twitter.com/saeris` },
      { label: `GitHub`, to: `https://www.github.com/saeris` }
    ],
    summary: `Self-taught software engineer with a background in graphic design and game development. Enthusiastic about developer experience, tooling, and web accessibility. Avid photographer and competitive online gamer. Highly values learning and bringing people together.`,
    skills: [
      // Languages
      `Typescript`,
      `JavaScript`,
      `HTML + CSS`,
      `Nodejs`,
      `GraphQL`,
      `PostgreSQL`,
      // Libraries
      `Nextjs`,
      `React`,
      `Styled-Components`,
      `React-Query`,
      `Ariakit`,
      `Apollo`,
      // Tools
      `Prisma`,
      `Jest`,
      `Webpack + Babel`,
      `Storybook`,
      `GitHub Actions`,
      `Figma`
    ],
    jobs: [
      {
        role: `Web Team Lead`,
        type: `Volunteer`,
        company: `FanimeCon`,
        print: true,
        timeframe: `5/21 - Present`,
        location: `Remote`,
        industry: `Pop Culture Convention`,
        technologies: [`Nextjs`, `React`, `Typescript`, `Nodejs`, `Wordpress`, `MySQL`],
        highlights: [
          `Leading technical effort to modernize FanimeCon's website and content publishing pipeline by leveraging Nextjs, Markdown and GitHub.`,
          `Authoring documentation targeting a non-technical audience of volunteers to perform tasks such as publishing and site maintenance.`,
          `Collaborating with other teams to edit, format and publish site content within strict deadlines.`
        ]
      },
      {
        role: `Senior Software Engineer`,
        type: `Full-Time`,
        company: `One Finance`,
        print: false,
        timeframe: `8/21 - 10/21`,
        location: `Remote`,
        industry: `Online Banking`,
        technologies: [`Nodejs`, `React`, `Typescript`, `Styled-Components`, `ESLint`],
        highlights: [
          `Contributed to credit products UI, optimized SVG icon library, and set up an automated build and publish pipeline using GitLab CI and GitLab Package Registry.`,
          `Mentored junior engineers on the web front-end team in UI design patterns utilizing React and Typescript.`,
          `Worked with members of the design and engineering teams to improve onboarding processes, documentation, and inter-team communication.`
        ]
      },
      {
        role: `Software Engineer II @ Nike`,
        type: `Contract`,
        company: `VanderHouwen`,
        print: true,
        timeframe: `10/20 - 7/21`,
        location: `Remote`,
        industry: `Online Retail`,
        technologies: [
          `Nodejs`,
          `React`,
          `Nextjs`,
          `Typescript`,
          `Babel`,
          `Rollup`,
          `ESLint`,
          `Jest`,
          `Open CLI Framework`
        ],
        highlights: [
          `Established and applied new code-quality standards using ESLint and Typescript through the creation of a shared configuration package.`,
          `Automated code-quality checks using Git hooks and deferred package versioning in CI.`,
          `Created a CLI tool providing a unified interface for dev tooling to combat dependency churn and begin to standardize how applications and libraries are built, linted, and unit tested.`,
          `Mentored colleagues in and migrated multiple internal core libraries to Typescript.`,
          `Served as a core contributor on a team responsible for shipping a new Nextjs powered micro-frontend application platform.`
        ]
      },
      {
        role: `Front-End Engineer`,
        type: `Contract`,
        company: `CodeSandbox`,
        print: true,
        timeframe: `05/19 - 03/20`,
        location: `Remote`,
        industry: `Software Development Tools`,
        technologies: [`React`, `Typescript`, `Styled-Components`, `Reakit`, `Apollo`, `GraphQL`],
        highlights: [
          `Responsible for front-end work on [Custom Templates](https://codesandbox.io/post/Templates), enabling users to [build and share](https://codesandbox.io/post/hello-template-universe-goodbye-project-setup) their own reusable starter projects.`,
          `Built a 'crash handler' page, prototyped within CodeSandbox, providing users with a [tool to file crash reports](https://codesandbox.io/post/CodeSadbox) with pre-filled details. The dog-fooding process used to develop this feature is now used internally to quickly iterate on new UI features.`,
          `Established coding style guidelines and implemented them alongside a refactor of dozens of components to React Hooks / TypeScript.`
        ]
      },
      {
        role: `Full-Stack Engineer`,
        type: `Freelance`,
        company: null,
        print: false,
        timeframe: `01/17 - 05/19`,
        location: `Pleasanton, CA`,
        industry: `Open Source Software Development`,
        technologies: [`React`, `Vue`, `Apollo`, `GraphQL`, `AWS`],
        highlights: [`Published multiple GraphQL example applications and libraries (see projects)`]
      },
      {
        role: `Front-End Developer`,
        type: `Full-Time`,
        company: `4-Tell`,
        print: false,
        timeframe: `10/16 - 12/16`,
        location: `Portland, OR`,
        industry: `eCommerce SaaS`,
        technologies: [`Aurelia`, `Redux`, `GraphQL`],
        highlights: []
      },
      {
        role: `Developer III`,
        type: `Full-Time`,
        company: `Catalyst DevWorks`,
        print: true,
        timeframe: `08/15 - 02/16`,
        location: `Beaverton, OR`,
        industry: `Software Engineering Services`,
        technologies: [`JavaScript`, `Aurelia`, `Scss`, `Apache Velocity`, `Liferay`],
        highlights: [
          `Responsible for front-end development of various UI components for [Regence Blue-Cross](https://www.regence.com/web/regence_individual/) and [Asuris Health](https://www.asuris.com/) at Cambia Health Solutions`,
          `Overhauled build process and project organization, optimizing package usage (from 6+ Gb down to ~250 Mb) reducing build times in Jenkins from over 1 hour down to ~15 minutes.`,
          `Mentored junior engineers in the use of Aurelia, component-based architectures, CSS Flexbox, and JavaScript best-practices`
        ]
      },
      {
        role: `Front-End Developer`,
        type: `Contract`,
        company: `Sellpoints`,
        print: false,
        timeframe: `12/14 – 05/15`,
        location: `Emeryville, CA`,
        industry: `Online Marketing & Advertising`,
        technologies: [`HTML`, `CSS`, `jQuery`],
        highlights: [
          `Coded a prototype front-end for an IBM Watson powered search results page for CES 2015, [which helped to secure a $7.5 million Series C](https://www-03.ibm.com/press/us/en/pressrelease/46950.wss)`,
          `Trained a dozen co-workers from sales and management to use an internally developed content management system, enabling the company to meet a huge deadline for a contract with Walmart, equivalent to a year’s worth of normal work in a period of three months`,
          `Automated a set of common and repetitive tasks for the production team via a JavaScript browser extension, saving hours of work daily`
        ]
      }
    ],
    projects: [
      {
        name: `Apollo Server Vercel`,
        description: `Apollo Server integration for Vercel`,
        website: `https://apollo-server-vercel.saeris.io`,
        repository: `https://github.com/Saeris/apollo-server-vercel`,
        technologies: [`Apollo Server`, `GraphQL`, `Typescript`, `Nextjs`, `Jest`],
        print: true
      },
      {
        name: `Worbik`,
        description: `Daily Word Puzzle Mini-Game`,
        website: `https://worbik.saeris.io`,
        repository: null,
        technologies: [`Nextjs`, `React`, `Ariakit`, `Typescript`],
        print: true
      },
      {
        name: `Proxy Tokens`,
        description: `Design Token utils for generating CSS Variables`,
        website: null,
        repository: `https://github.com/Saeris/proxy-tokens`,
        technologies: [`Styled-Components`, `Typescript`],
        print: true
      },
      {
        name: `Rachel Taylor Design`,
        description: `Portfolio Website built with Gatsby`,
        website: `https://rtaylor.design`,
        repository: `https://github.com/Saeris/gatsby-process`,
        technologies: [`Gatsby`, `Typescript`, `Reakit`, `Styled-Components`],
        print: true
      },
      {
        name: `GraphQL Scalars`,
        description: `Type-Safety and Validation Library`,
        website: `https://graphql-scalars.saeris.io`,
        repository: `https://github.com/Saeris/graphql-scalars`,
        technologies: [`TypeScript`, `GraphQL`, `Joi`, `Jest`, `Webpack`],
        print: true
      },
      {
        name: `GraphQL Directives`,
        description: `Apollo Schema Directives Library`,
        website: `https://graphql-directives.saeris.io`,
        repository: `https://github.com/Saeris/graphql-directives`,
        technologies: [`Apollo Server`, `TypeScript`, `GraphQL`],
        print: true
      },
      {
        name: `Scryfall API`,
        description: `GraphQL wrapper for the Scryfall Magic: The Gathering API`,
        website: `https://scryfall.saeris.io`,
        repository: `https://github.com/Saeris/Scryfall-API`,
        technologies: [`Apollo Server`, `GraphQL`, `TypeScript`, `Lambda Functions`],
        print: false
      },
      {
        name: `Mini Movie DB API`,
        description: `GraphQL wrapper for the TheMovieDB API`,
        website: `https://tmdb-api.saeris.io`,
        repository: `https://github.com/Saeris/tmdb-api`,
        technologies: [`Apollo Server`, `GraphQL`, `TypeScript`, `Lambda Functions`],
        print: true
      },
      {
        name: `React Mana`,
        description: `Magic: The Gathering Mana Symbols Component Library`,
        website: `https://react-mana.saeris.io`,
        repository: `https://github.com/Saeris/react-mana`,
        technologies: [`React`, `Emotion`, `Jest`],
        print: false
      },
      {
        name: `React Keyrune`,
        description: `Magic: The Gathering Set Icons Component Library`,
        website: `https://react-keyrune.saeris.io`,
        repository: `https://github.com/Saeris/react-keyrune`,
        technologies: [`React`, `Emotion`, `Sass`, `Jest`],
        print: false
      },
      {
        name: `Vue Spinners`,
        description: `Loading Indicators Component Library`,
        website: `https://vue-spinners.saeris.io`,
        repository: `https://github.com/Saeris/vue-spinners`,
        technologies: [`Vue`, `Emotion`, `CodeSandbox`],
        print: false
      }
    ],
    schools: [
      {
        name: `Las Positas Community College`,
        description: `AA - Visual Communications`,
        graduated: `May 2010`,
        location: `Livermore, CA`
      }
    ]
  }
};
