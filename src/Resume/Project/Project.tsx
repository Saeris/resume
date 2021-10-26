import type { FunctionComponent } from "preact";
import { h } from "preact";
import type { Results } from "../content";
import { Name, Description, Technologies } from "../elements";
import { Project as Container, Website, Repository } from "./elements";

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
