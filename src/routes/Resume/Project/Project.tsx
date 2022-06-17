import React from "react";
import type { Results } from "../../../content";
import { Name, Description, Technologies } from "../elements";
import { Project as Container, Website, Repository } from "./elements";

export const Project: React.FC<Results["projects"][0]> = ({
  name,
  description,
  website,
  repository,
  technologies,
  print
}) => (
  <Container key={name} print={print}>
    <Name>{name}</Name>
    <Description>{description}</Description>
    {website ? <Website to={website} /> : null}
    {repository ? <Repository to={repository} /> : null}
    <Technologies>{technologies.join(`, `)}</Technologies>
  </Container>
);
