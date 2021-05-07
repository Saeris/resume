import type { FunctionComponent } from "preact";
import { h } from "preact";
import { Icons } from "./Icons";
import { Logo } from "./Logo";
import { Job } from "./Job";
import { Project } from "./Project";
import { School } from "./School";
import { results } from "./results";
import {
  Main,
  Navigation,
  Fullname,
  Title,
  Contact,
  Service,
  Content,
  Summary,
  Expertise,
  Experience,
  Projects,
  Education,
  Header,
  Break,
  Text,
  Skills,
  Skill,
  List,
  Schools,
  Footer
} from "./elements";

export const Resume: FunctionComponent = () => {
  const { data } = results;
  return (
    <Main>
      <Navigation>
        <Fullname>{data.fullName}</Fullname>
        <Title>{data.title}</Title>
        <Contact>
          {data.contacts.map(({ label, to }) => (
            // @ts-expect-error
            <Service key={label} label={label} to={to}>
              {Icons[label]} {to.replace(`https://www.`, ``)}
            </Service>
          ))}
        </Contact>
      </Navigation>
      <Content>
        <Summary>
          <Header>Summary:</Header>
          <Break />
          <Text>{data.summary}</Text>
        </Summary>
        <Expertise>
          <Header>Expertise:</Header>
          <Break />
          <Skills>
            {data.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </Skills>
        </Expertise>
        <Experience>
          <Header>Experience:</Header>
          <Break />
          <List>
            {data.jobs.map((props) => (
              <Job key={props.role} {...props} />
            ))}
          </List>
        </Experience>
        <Projects>
          <Header>Projects:</Header>
          <Break />
          <List>
            {data.projects.map((props) => (
              <Project key={props.name} {...props} />
            ))}
          </List>
        </Projects>
        <Education>
          <Header>Education:</Header>
          <Break />
          <Schools>
            {data.schools.map((props) => (
              <School key={props.name} {...props} />
            ))}
          </Schools>
        </Education>
      </Content>
      <Footer>
        <a title="Saeris.io - Home" href="/">
          <Logo />
        </a>
      </Footer>
    </Main>
  );
};
