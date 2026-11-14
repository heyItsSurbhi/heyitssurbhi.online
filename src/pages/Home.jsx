import { useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { about, skillGroups, summary, toolGroups } from '../data/about';
import { employment, path } from '../data/employment';
import { engagements } from '../data/engagements';
import { downloadCv } from '../lib/downloadCv';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

const journey = employment;

function CopyButton({ value, label }) {
  const [done, setDone] = useState(false);

  return (
    <button
      type="button"
      className="btn btn-secondary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          window.setTimeout(() => setDone(false), 1400);
        } catch {
          setDone(false);
        }
      }}
    >
      {done ? 'Copied' : label}
    </button>
  );
}

export default function Home() {
  usePageMeta('Home', site.metaDescription);

  return (
    <main id="main">
      <section id="about" className="chapter stage">
        <div className="stage-copy">
          <p className="kicker">About me · {site.focus}</p>
          <h1>{site.title}</h1>
          <div className="chip-row">
            <span>
              <small>Location</small>
              {site.location}
            </span>
            <span>
              <small>Relocation</small>
              {site.relocationPreference}
            </span>
          </div>
          {summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              See the path
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact me
            </a>
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="intro" />
        </div>
      </section>

      <section id="experience" className="chapter career">
        <div className="career-grid">
          <div className="career-copy">
            <p className="kicker">Experience</p>
            <h1>From Software Engineer to Lead Product Owner.</h1>
            <p>{summary[0]}</p>
            <p>
              Altimetrik, client Citibank: Senior Product Owner from June 2024, Lead Product Owner
              from January 2026. Tata Consultancy Services: Software Engineer on ALDO, then Product
              Owner for ALDO and GE HealthCare from January 2022.
            </p>
            <p>{summary[1]}</p>
            <div className="where-row">
              <div>
                <p className="kicker">Location</p>
                <strong>{site.location}</strong>
              </div>
              <div>
                <p className="kicker">Relocation</p>
                <strong>{site.relocationPreference}</strong>
              </div>
            </div>
          </div>
          <div className="stage-visual career-visual">
            <AvatarScene scene="work" />
          </div>
          <div className="career-rail">
            <p className="kicker">Career journey</p>
            {journey.map((role, index) => {
              const company = role.company.startsWith('Tata') ? 'TCS' : role.company;
              return (
                <div key={role.id}>
                  {index > 0 && (
                    <div className="rail-arrow" aria-hidden="true">
                      ↓
                    </div>
                  )}
                  <article className="rail-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h2>{company}</h2>
                    <p className="muted">
                      {role.teamOrClient ? `Client: ${role.teamOrClient}` : 'Internship'}
                      {role.domain ? ` · Domain: ${role.domain}` : ''}
                    </p>
                    <p className="role-line">
                      {role.end === 'Present' ? 'Current role' : 'Role'}: {role.roleTitle}
                      {role.focus ? ` | ${role.focus}` : ''}
                    </p>
                    <p className="muted">
                      {role.start} – {role.end}
                    </p>
                    <ul className="rail-points">
                      {role.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              );
            })}
            <p className="path-line">{path.join(' → ')}</p>
          </div>
        </div>
      </section>

      <section id="work" className="chapter work-chapter">
        <div className="work-intro">
          <p className="kicker">Case studies</p>
          <h1>Citibank, GE HealthCare, and ALDO.</h1>
          <p>
            Seven case studies in card view. Each card has the heading and the problem statement.
            Read more opens the full write-up: decision, action plan, acceptance criteria, and
            scorecard.
          </p>
        </div>
        <div className="study-grid">
          {engagements.map((study, index) => (
            <article key={study.slug} className="study-tile" style={{ animationDelay: `${index * 0.08}s` }}>
              <p className="kicker">
                Case study {study.index} · {study.domain}
              </p>
              <h2>{study.title}</h2>
              <p className="muted">
                {study.where} · Client: {study.client}
              </p>
              <p className="kicker study-problem-label">Problem statement</p>
              <p className="study-problem">{study.problem}</p>
              <Link className="show-details" to={`/work/${study.slug}`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="chapter stage stage-board">
        <div className="stage-copy">
          <p className="kicker">Expertise</p>
          <h1>Core skills and technical expertise.</h1>
          <p>
            Product discovery and strategy, roadmap ownership, AI-powered products, and the
            TypeScript, Angular, HTML, CSS, and JavaScript foundation I started with as a developer.
          </p>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.id} className="skill-group">
                <p className="kicker">{group.label}</p>
                <ul className="skill-row">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="skill-group">
              <p className="kicker">Product management tools</p>
              {toolGroups.map((group) => (
                <p key={group.id}>
                  <strong>{group.label}: </strong>
                  {group.tools.join(', ')}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="skills" />
        </div>
      </section>

      <section id="education" className="chapter stage">
        <div className="stage-copy">
          <p className="kicker">Education</p>
          <h1>Certifications, education, and languages.</h1>
          <div className="journey">
            <p className="kicker">Certifications</p>
            {about.education
              .filter((item) => item.group === 'certification')
              .map((item) => (
                <article key={item.id}>
                  <h2>{item.credential}</h2>
                  <p className="muted">{item.period}</p>
                </article>
              ))}
            <p className="kicker">Education</p>
            {about.education
              .filter((item) => item.group === 'education')
              .map((item) => (
                <article key={item.id}>
                  <h2>
                    {item.credential}
                    <span>{item.institution}</span>
                  </h2>
                  <p className="muted">{item.period}</p>
                </article>
              ))}
            <p className="kicker">Languages</p>
            {about.languages.map((language) => (
              <article key={language.id}>
                <h2>
                  {language.name}
                  <span>Language</span>
                </h2>
                <p className="muted">{language.level}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="education" />
        </div>
      </section>

      <section id="contact" className="chapter stage">
        <div className="stage-copy">
          <p className="kicker">Contact me</p>
          <h1>Your move.</h1>
          <p>
            {site.title} · {site.focus}. {site.relocationPreference}. {site.openTo}.
          </p>
          <div className="contact-grid">
            <article>
              <h2>LinkedIn</h2>
              <p>Surbhi Mundhe</p>
              <a className="btn btn-secondary" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </article>
            <article>
              <h2>Email</h2>
              <p>{site.email}</p>
              <div className="card-actions">
                <a className="btn btn-primary" href={`mailto:${site.email}`}>
                  Send email
                </a>
                <CopyButton value={site.email} label="Copy email" />
              </div>
            </article>
            <article>
              <h2>Phone</h2>
              <p>{site.phoneDisplay}</p>
              <div className="card-actions">
                <a className="btn btn-secondary" href={`tel:${site.phoneTel}`}>
                  Call me
                </a>
                <CopyButton value={site.phoneDisplay} label="Copy number" />
              </div>
            </article>
            <article>
              <h2>Resume</h2>
              <p>PDF of the profile on this site.</p>
              <button type="button" className="btn btn-secondary" onClick={downloadCv}>
                Download CV
              </button>
            </article>
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="contact" />
        </div>
      </section>
    </main>
  );
}
