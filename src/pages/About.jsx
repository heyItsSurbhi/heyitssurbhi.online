import { summary } from '../data/about';
import { path } from '../data/employment';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

export default function About() {
  usePageMeta('About');

  return (
    <main id="main">
      <section className="stage">
        <div className="stage-copy">
          <p className="kicker">About me</p>
          <h1>Lead Product Owner</h1>
          {summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ol className="path">
            {path.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="intro" />
        </div>
      </section>
    </main>
  );
}
