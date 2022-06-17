import React from "react";
import { Markdown } from "../Markdown";
import { Link } from "../Link";
import type { Results } from "../../../content";
import { Technologies, Location } from "../elements";
import {
  Job as Container,
  JobOverview,
  Role,
  Type,
  Company,
  Timeframe,
  JobMeta,
  Industry,
  Highlights,
  Highlight
} from "./elements";

export const Job: React.FC<Results["jobs"][0]> = ({
  role,
  company,
  type,
  print,
  timeframe,
  location,
  industry,
  technologies,
  highlights
}) => (
  <Container print={print}>
    <JobOverview>
      <Role showDivider={Boolean(company)}>{role}</Role>
      {company ? <Company>{company}</Company> : null}
      <Type>{type}</Type>
      <Timeframe>{timeframe}</Timeframe>
      <Location>{location}</Location>
    </JobOverview>
    <JobMeta>
      {industry ? <Industry>{industry}</Industry> : null}
      <Technologies>{technologies.join(`, `)}</Technologies>
    </JobMeta>
    {highlights.length > 0 ? (
      <Highlights>
        {highlights.map((highlight) => (
          <Highlight key={highlight}>
            <Markdown markdown={highlight} components={{ a: Link }} />
          </Highlight>
        ))}
      </Highlights>
    ) : null}
  </Container>
);
