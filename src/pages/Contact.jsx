import { site } from '../data/site';
import { downloadCv } from '../lib/downloadCv';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

export default function Contact() {
  usePageMeta('Contact');

  return (
    <main id="main">
      <section className="stage">
        <div className="stage-copy">
          <p className="kicker">Contact me</p>
          <h1>Your move.</h1>
          <p>If you are hiring for a product manager who has owned the messy middle, start here.</p>
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
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                Send email
              </a>
            </article>
            <article>
              <h2>Phone</h2>
              <p>{site.phoneDisplay}</p>
              <a className="btn btn-secondary" href={`tel:${site.phoneTel}`}>
                Call me
              </a>
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
