import { employment } from '../data/employment';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

export default function Experience() {
  usePageMeta('Experience');

  return (
    <main id="main">
      <section className="stage">
        <div className="stage-copy">
          <p className="kicker">Work experience</p>
          <h1>Three domains. One thread — own the product.</h1>
          <div className="journey">
            {employment.map((role) => (
              <article key={role.id}>
                <h2>
                  {role.roleTitle}
                  <span>
                    {role.company}
                    {role.teamOrClient ? ` · ${role.teamOrClient}` : ''}
                  </span>
                </h2>
                <p className="muted">
                  {role.start} – {role.end}
                  {role.domain ? ` · ${role.domain}` : ''}
                </p>
                <ul className="rail-points">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="work" />
        </div>
      </section>
    </main>
  );
}
