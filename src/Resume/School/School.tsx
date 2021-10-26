import type { FunctionComponent } from "preact";
import { h } from "preact";
import type { Results } from "../content";
import { Name, Description, Location } from "../elements";
import { School as Container, Graduated } from "./elements";

export const School: FunctionComponent<Results["schools"][0]> = ({ name, description, graduated, location }) => (
  <Container>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Graduated>{graduated}</Graduated>
    <Location>{location}</Location>
  </Container>
);
