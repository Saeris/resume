import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components'
import {
  FaEnvelope as Email,
  FaLinkedin as LinkedIn,
  FaTwitter as Twitter,
  FaGithub as GitHub
} from "react-icons/fa";
import { theme } from "./theme"
import { extractCSSVars } from "./extractCSSVars";
import { register, unregister } from "./serviceWorker";
import { GlobalStyles } from "./global";
import { Logo } from "./Logo";
import {
  Main,
  Navigation,
  Fullname,
  Title,
  Contact,
  Service,
  Content,
  Section,
  Header,
  Break,
  Text,
  Skills,
  Skill,
  Jobs,
  Job,
  JobOverview,
  Role,
  Type,
  Company,
  Timeframe,
  Location,
  JobMeta,
  Industry,
  Technologies,
  Highlights,
  Highlight,
  Projects,
  Project,
  ProjectOverview,
  Name,
  Description,
  Website,
  Repository,
  Schools,
  School,
  Graduated,
  Footer
} from "./elements";

const App = () => (
  <ThemeProvider theme={extractCSSVars(theme)}>
    <GlobalStyles />
    <Main>
      <Navigation>
        <Fullname>Drake Costa</Fullname>
        <Title>Full-Stack JavaScript Engineer</Title>
        <Contact>
          <Service label="Email" to="drake@saeris.io">
            <Email /> drake@saeris.io
          </Service>
          <Service label="LinkedIn" to="https://www.linkedin.com/in/Saeris">
            <LinkedIn /> linkedin.com/in/Saeris
          </Service>
          <Service label="Twitter" to="https://www.twitter.com/Saeris">
            <Twitter /> twitter.com/Saeris
          </Service>
          <Service label="GitHub" to="https://www.github.com/Saeris">
            <GitHub /> github.com/Saeris
          </Service>
        </Contact>
      </Navigation>
      <Content>
        <Section>
          <Header>Summary:</Header>
          <Break />
          <Text>
            Self-taught software engineer and second-career developer,
            previously having worked as a game designer. Educational background
            in graphic design. Avid photographer, competitive online gamer, and
            craft beer enthusiast. Highly values learning and bringing people
            together.
          </Text>
        </Section>
        <Section>
          <Header>Expertise:</Header>
          <Break />
          <Skills>
            <Skill>JavaScript (ES6)</Skill>
            <Skill>TypeScript</Skill>
            <Skill>React / Preact</Skill>
            <Skill>Gatsby</Skill>
            <Skill>Apollo</Skill>
            <Skill>GraphQL</Skill>
            <Skill>Serverless</Skill>
            <Skill>Node.js / Hapi.js</Skill>
            <Skill>CSS / Sass</Skill>
            <Skill>Webpack / Babel</Skill>
            <Skill>Figma</Skill>
            <Skill>Adobe Photoshop</Skill>
            <Skill>Adobe Illustrator</Skill>
          </Skills>
        </Section>
        <Section>
          <Header>Experience:</Header>
          <Break />
          <Jobs>
            <Job>
              <JobOverview>
                <Role>Front-End Engineer</Role>
                <Company>CodeSandbox</Company>
                <Type>Contract</Type>
                <Timeframe>May 2019 - Present</Timeframe>
                <Location>Remote</Location>
              </JobOverview>
              <JobMeta>
                <Industry>Software Development Tools</Industry>
                <Technologies>
                  React, TypeScript, Styled-Components, Reakit, Apollo, GraphQL
                </Technologies>
              </JobMeta>
              <Highlights>
                <Highlight />
                <Highlight />
                <Highlight />
              </Highlights>
            </Job>

            <Job>
              <JobOverview>
                <Role>Full-Stack Engineer</Role>
                <Type>Freelance</Type>
                <Timeframe>Oct 2012 - May 2019</Timeframe>
                <Location>Pleasanton, CA</Location>
              </JobOverview>
              <JobMeta>
                <Industry>Open Source Software Development</Industry>
                <Technologies>
                  React, Vue, Apollo, GraphQL, AWS, Serverless
                </Technologies>
              </JobMeta>
              <Highlights>
                <Highlight>
                  Developed multiple GraphQL example applications (see projects)
                  and educational content published online by Serverless, Inc on
                  their blog
                </Highlight>
                <Highlight>
                  Contributed to open source projects such as adding Hapi.js 17
                  support to Prisma GraphQL Playground and new UI features to
                  CodeSandbox
                </Highlight>
              </Highlights>
            </Job>

            <Job>
              <JobOverview>
                <Role>Front-End Developer</Role>
                <Type>Full-Time</Type>
                <Company>4-Tell</Company>
                <Timeframe>Oct 2016 - Dec 2016</Timeframe>
                <Location>Portland, OR</Location>
              </JobOverview>
              <JobMeta>
                <Industry>eCommerce SaaS</Industry>
                <Technologies>
                  Aurelia, Redux, GraphQL, Highcharts, Microsoft Azure
                </Technologies>
              </JobMeta>
              <Highlights>
                <Highlight>
                  Translated UI mock-ups into a working prototype built with the
                  Aurelia framework, Redux, and Webpack for a retail analytics
                  product
                </Highlight>
                <Highlight>
                  Set up Continuous Integration / Deployment pipeline,
                  collaborated with the CTO on API design, and evaluated using
                  GraphQL in Azure
                </Highlight>
              </Highlights>
            </Job>

            <Job>
              <JobOverview>
                <Role>Developer III</Role>
                <Type>Full-Time</Type>
                <Company>Catalyst DevWorks</Company>
                <Timeframe>Aug 2015 - Feb 2016</Timeframe>
                <Location>Beaverton, OR</Location>
              </JobOverview>
              <JobMeta>
                <Industry>Software Engineering Services</Industry>
                <Technologies>
                  Aurelia, Sass, Apache Velocity, Liferay, Grunt
                </Technologies>
              </JobMeta>
              <Highlights>
                <Highlight>
                  Responsible for front-end development of various UI components
                  for Regence Blue-Cross and Asuris Health at Cambia Health
                  Solutions
                </Highlight>
                <Highlight>
                  Overhauled Node.js / Grunt build process and project
                  organization, optimizing Node package usage (from 6+ Gb down
                  to ~250 Mb) and reducing automated build times in Jenkins
                  (from over 1 hour down to ~15 minutes), enabling faster
                  iteration and higher productivity
                </Highlight>
                <Highlight>
                  Mentored junior engineers in the use of Aurelia,
                  component-based architectures, CSS Flexbox, and ES6 JavaScript
                  best-practices
                </Highlight>
              </Highlights>
            </Job>

            <Job>
              <JobOverview>
                <Role>Front-End Developer</Role>
                <Type>Contract</Type>
                <Company>Sellpoints</Company>
                <Timeframe>Dec 2014 – May 2015</Timeframe>
                <Location>Emeryville, CA</Location>
              </JobOverview>
              <JobMeta>
                <Industry>Online Marketing & Advertising</Industry>
                <Technologies>HTML, CSS, jQuery</Technologies>
              </JobMeta>
              <Highlights>
                <Highlight>
                  Coded a prototype front-end for an IBM Watson powered search
                  results page for CES 2015, which helped to secure a $7.5
                  million Series C
                </Highlight>
                <Highlight>
                  Trained a dozen co-workers from sales and management to use an
                  internally developed content management system, enabling the
                  company to meet a huge deadline for a contract with Walmart,
                  equivalent to a year’s worth of normal work in a period of
                  three months
                </Highlight>
                <Highlight>
                  Automated a set of common and repetitive tasks for the
                  production team via a JavaScript browser extension, saving
                  hours of work daily
                </Highlight>
              </Highlights>
            </Job>
          </Jobs>
        </Section>
        <Section>
          <Header>Projects:</Header>
          <Break />
          <Projects>
            <Project>
              <ProjectOverview>
                <Name>Mini Movie DB Client</Name>
                <Description>Simple Clone of The Movie DB</Description>
                <Website to="https://mini-movie-db.netlify.com/" />
                <Repository to="https://github.com/Saeris/mini-movie-db" />
              </ProjectOverview>
              <Technologies>
                Preact, Apollo, GraphQL, Serverless, Travis CI, CodeSandbox
              </Technologies>
            </Project>

            <Project>
              <ProjectOverview>
                <Name>Compendium</Name>
                <Description>Magic: The Gathering Card Database</Description>
                <Website to="http://www.mtgcompendium.com/" />
                <Repository to="https://github.com/Saeris/Scribe" />
              </ProjectOverview>
              <Technologies>
                Preact, Apollo, GraphQL, AWS Lambda, Join-Monster, Knex.js,
                MySQL
              </Technologies>
            </Project>

            <Project>
              <ProjectOverview>
                <Name>GraphQL Scalars</Name>
                <Description>Type-Safety and Validation Library</Description>
                <Website to="https://codesandbox.io/s/github/Saeris/graphql-scalars/tree/master/example" />
                <Repository to="https://github.com/Saeris/graphql-scalars" />
              </ProjectOverview>
              <Technologies>GraphQL, Joi, Jest, Webpack</Technologies>
            </Project>

            <Project>
              <ProjectOverview>
                <Name>GraphQL Directives</Name>
                <Description>Apollo Schema Directives Library</Description>
                <Website to="https://codesandbox.io/s/github/Saeris/graphql-directives" />
                <Repository to="https://github.com/Saeris/graphql-directives" />
              </ProjectOverview>
              <Technologies>Apollo Server, GraphQL</Technologies>
            </Project>

            <Project>
              <ProjectOverview>
                <Name>React/Vue Mana</Name>
                <Description>
                  Magic: The Gathering Mana Symbols Component Libraries
                </Description>
                <Website to="https://react-mana.saeris.io/" />
                <Repository to="https://github.com/Saeris/react-mana" />
              </ProjectOverview>
              <Technologies>React, Vue, Emotion, Jest</Technologies>
            </Project>

            <Project>
              <ProjectOverview>
                <Name>React/Vue Keyrune</Name>
                <Description>
                  Magic: The Gathering Set Icons Component Libraries
                </Description>
                <Website to="https://react-keyrune.saeris.io/" />
                <Repository to="https://github.com/Saeris/react-keyrune" />
              </ProjectOverview>
              <Technologies>React, Vue, Emotion, Sass, Jest</Technologies>
            </Project>

            <Project>
              <ProjectOverview>
                <Name>Vue Spinners</Name>
                <Description>Loading Indicators Component Library</Description>
                <Website to="https://vue-spinners.saeris.io/" />
                <Repository to="https://github.com/Saeris/vue-spinners" />
              </ProjectOverview>
              <Technologies>Vue, Emotion, CodeSandbox</Technologies>
            </Project>
          </Projects>
        </Section>
        <Section>
          <Header>Education:</Header>
          <Break />
          <Schools>
            <School>
              <Name>Las Positas Community College</Name>
              <Description>AA - Visual Communications</Description>
              <Graduated>May 2010</Graduated>
              <Location>Livermore, CA</Location>
            </School>
          </Schools>
        </Section>
      </Content>
      <Footer>
        <a href="/">
          <Logo />
        </a>
      </Footer>
    </Main>
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === `development`) {
  unregister();
} else {
  register();
}
