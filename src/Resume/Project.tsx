import type { FunctionComponent } from "preact";
import { h } from "preact";
import type { Results } from "./results";
import { Project as Container, Name, Description, Website, Repository, Technologies } from "./elements";

export const Project: FunctionComponent<Results["projects"][0]> = ({
  name,
  description,
  website,
  repository,
  technologies
}) => (
  <Container key={name}>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Website to={website} />
    <Repository to={repository} />
    <Technologies>{technologies.join(`, `)}</Technologies>
  </Container>
);
