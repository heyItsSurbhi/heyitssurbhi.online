import { site } from '../data/site';
import { isFilled } from '../lib/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>{site.name} · {site.title}</p>
        <p>
          <a href="/#work">Case studies</a>
          {' · '}
          <a href="/#about">About</a>
          {' · '}
          <a href="/#contact">Contact</a>
          {isFilled(site.email) && (
            <>
              {' · '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
