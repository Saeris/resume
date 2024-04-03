import React from "react";
import {
  GoCalendar,
  GoClock,
  GoLocation,
  GoMortarBoard,
  GoOrganization
} from "react-icons/go";
import { Link } from "../components";
import { content } from "../content";
import styles from "./resume.module.css";

const Resume: React.FC = () => (
  <>
    <header className={styles.header}>
      <section>
        <div>
          <h1>{content.fullName}</h1>
          <h2>{content.pronouns}</h2>
        </div>
        <div>
          <span>
            <GoLocation />
            {content.location}
          </span>
          <span>
            <GoClock />
            {content.timezone}
          </span>
        </div>
      </section>
      <address>
        {content.contacts.map(([Icon, url]) => (
          <Link key={url} to={`https://${url}`}>
            <Icon />
            {url}
          </Link>
        ))}
      </address>
    </header>

    <main className={styles.content}>
      <section>
        <p>{content.summary}</p>
      </section>

      <section className={styles.skills}>
        <h3>Skills</h3>
        <ul>
          {content.skills.map(([Icon, skill]) => (
            <li key={skill}>
              <Icon />
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.jobs}>
        <h3>Experience</h3>
        <ul>
          {content.jobs.map(({ role, company, timeframe, highlights }) => (
            <li key={company}>
              <article>
                <header>
                  <h4>{role}</h4>
                  <aside>
                    <span>
                      <GoOrganization />
                      {company}
                    </span>
                    <span>
                      <GoCalendar />
                      {timeframe}
                    </span>
                  </aside>
                </header>
                {Array.isArray(highlights) && highlights.length > 0 ? (
                  <ul>
                    {highlights.map((highlight) => (
                      <li key={highlight}>
                        <p>{highlight}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ul>
        <footer>
          <Link to="https://www.linkedin.com/in/saeris">
            Full work history available on LinkedIn
          </Link>
        </footer>
      </section>

      <section className={styles.projects}>
        <h3>Projects</h3>
        <ul>
          {content.projects.map(({ name, description, Icon, link }) => (
            <li key={name}>
              <article>
                <header>
                  <h4>{name}</h4>
                  <Link to={`https://${link}`}>
                    <Icon />
                    {link}
                  </Link>
                </header>
                <p>{description}</p>
              </article>
            </li>
          ))}
        </ul>
        <footer>
          <Link to="https://www.github.com/saeris">
            Additional projects available on GitHub
          </Link>
        </footer>
      </section>

      <section className={styles.education}>
        <h3>Education</h3>
        <ul>
          {content.schools.map(({ name, degree }) => (
            <li key={name}>
              <article>
                <h4>{name}</h4>
                <span>
                  <GoMortarBoard />
                  {degree}
                </span>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  </>
);

export default Resume;
