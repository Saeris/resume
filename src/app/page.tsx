/* eslint-disable multiline-ternary */
import React from "react";
import type { NextPage } from "next";
import { Icons, Logo, Link } from "../components";
import { content } from "../content";
import styles from "../components/Shared.module.css";

const Resume: NextPage = () => (
  <>
    <header className={styles.nav}>
      <div>
        <h1 className={styles.gradient}>{content.fullName}</h1>
        <h2 className={styles.gradient}>{content.title}</h2>
      </div>
      <address>
        {content.contacts.map(({ label, to }) => (
          <Link key={label} to={to}>
            {Icons[label]} {to.replace(`https://www.`, ``)}
          </Link>
        ))}
      </address>
    </header>
    <main className={styles.content}>
      <aside>
        <section className={styles.skills}>
          <h3>Expertise:</h3>
          <ul>
            {content.skills.map(([Icon, skill]) => (
              <li className={styles.skill} key={skill}>
                <Icon />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.projects}>
          <h3>Projects:</h3>
          <ul>
            {content.projects.map(
              ({ name, description, website, repository, technologies }) => (
                <li>
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <aside>{technologies.join(`, `)}</aside>
                  {website && (
                    <Link to={website}>{website.replace(`https://`, ``)}</Link>
                  )}
                  {repository && (
                    <Link to={repository}>
                      {repository.replace(`https://`, ``)}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </section>
        <section className={styles.education}>
          <h3>Education:</h3>
          <ul>
            {content.schools.map(
              ({ name, description, graduated, location }) => (
                <li>
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <aside>
                    <span>{location}</span>
                    <span>{graduated}</span>
                  </aside>
                </li>
              )
            )}
          </ul>
        </section>
      </aside>
      <article>
        <section className={styles.summary}>
          <h3>Summary:</h3>
          <p>{content.summary}</p>
        </section>
        <section className={styles.jobs}>
          <h3>Experience:</h3>
          <ul>
            {content.jobs.map(
              ({
                role,
                company,
                type,
                timeframe,
                technologies,
                highlights
              }) => (
                <li>
                  <div>
                    <div>
                      <h4>{role}</h4>
                      {company && <span>{company}</span>}
                    </div>
                    <div>
                      <span>{type}</span>
                      <span
                        style={{
                          "--content": `"${timeframe.replace(/\//g, `.`)}"`
                        }}
                      >
                        {timeframe}
                      </span>
                    </div>
                  </div>
                  <aside>
                    <span>{technologies.join(`, `)}</span>
                  </aside>
                  {highlights.length > 0 ? (
                    <ul>
                      {highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            )}
          </ul>
          <aside>Additional Experience Available Upon Request</aside>
        </section>
      </article>
    </main>
    <footer className={styles.footer}>
      <Link title="Saeris.io - Home" to="/">
        <Logo />
      </Link>
    </footer>
  </>
);

export default Resume;
