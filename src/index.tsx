import React from "react";
import { hydrate, render } from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  FaEnvelope as Email,
  FaLinkedin as LinkedIn,
  FaTwitter as Twitter,
  FaGithub as GitHub
} from "react-icons/fa";
// @ts-ignore
import MDX from "@mdx-js/runtime";
import { theme } from "./theme";
import { extractCSSVars } from "./extractCSSVars";
import { register, unregister } from "./serviceWorker";
import { GlobalStyles } from "./global";
import { SEO } from "./SEO";
import { Link } from "./Link";
import { Logo } from "./Logo";
import { results } from "./results";
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

const Icons: Record<string, JSX.Element> = {
  Email: <Email />,
  LinkedIn: <LinkedIn />,
  Twitter: <Twitter />,
  GitHub: <GitHub />
};

const App = () => {
  const { data } = results;
  return (
    <ThemeProvider theme={extractCSSVars(theme)}>
      <GlobalStyles />
      <SEO />
      <Main>
        <Navigation>
          <Fullname>{data.fullName}</Fullname>
          <Title>{data.title}</Title>
          <Contact>
            {data.contacts.map(service => (
              <Service key={service.label} {...service}>
                {Icons[service.label]} {service.to.replace(`https://www.`, ``)}
              </Service>
            ))}
          </Contact>
        </Navigation>
        <Content>
          <Section>
            <Header>Summary:</Header>
            <Break />
            <Text>{data.summary}</Text>
          </Section>
          <Section>
            <Header>Expertise:</Header>
            <Break />
            <Skills>
              {data.skills.map(skill => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </Skills>
          </Section>
          <Section>
            <Header>Experience:</Header>
            <Break />
            <Jobs>
              {data.jobs.map(
                (
                  {
                    role,
                    company,
                    type,
                    print,
                    timeframe,
                    location,
                    industry,
                    technologies,
                    highlights
                  },
                  i
                ) => (
                  <Job key={i} print={print}>
                    <JobOverview>
                      <Role>{role}</Role>
                      <Type>{type}</Type>
                      {company && <Company>{company}</Company>}
                      <Timeframe>{timeframe}</Timeframe>
                      <Location>{location}</Location>
                    </JobOverview>
                    <JobMeta>
                      <Industry>{industry}</Industry>
                      <Technologies>{technologies.join(`, `)}</Technologies>
                    </JobMeta>
                    <Highlights>
                      {highlights.map((highlight, i) => (
                        <MDX key={i} components={{ p: Highlight, a: Link }}>
                          {highlight}
                        </MDX>
                      ))}
                    </Highlights>
                  </Job>
                )
              )}
            </Jobs>
          </Section>
          <Section>
            <Header>Projects:</Header>
            <Break />
            <Projects>
              {data.projects.map(
                ({ name, description, website, repository, technologies }) => (
                  <Project key={name}>
                    <ProjectOverview>
                      <Name>{name}</Name>
                      <Description>{description}</Description>
                      <Website to={website} />
                      <Repository to={repository} />
                    </ProjectOverview>
                    <Technologies>{technologies.join(`, `)}</Technologies>
                  </Project>
                )
              )}
            </Projects>
          </Section>
          <Section>
            <Header>Education:</Header>
            <Break />
            <Schools>
              {data.schools.map(
                ({ name, description, graduated, location }) => (
                  <School key={name}>
                    <Name>{name}</Name>
                    <Description>{description}</Description>
                    <Graduated>{graduated}</Graduated>
                    <Location>{location}</Location>
                  </School>
                )
              )}
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
};

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

if (process.env.NODE_ENV === `development`) {
  unregister();
} else {
  register();
}
