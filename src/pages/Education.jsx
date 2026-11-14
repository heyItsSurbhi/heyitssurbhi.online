import { about } from '../data/about';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

export default function Education() {
  usePageMeta('Education');

  return (
    <main id="main">
      <section className="stage">
        <div className="stage-copy">
          <p className="kicker">Education</p>
          <h1>Credentials I can put on the table.</h1>
          <div className="journey">
            {about.education.map((item) => (
              <article key={item.id}>
                <h2>
                  {item.credential}
                  <span>{item.institution}</span>
                </h2>
                <p className="muted">{item.period}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="education" />
        </div>
      </section>
    </main>
  );
}
