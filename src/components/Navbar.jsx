import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { downloadCv } from '../lib/downloadCv';
import { useTheme } from '../theme';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Expertise' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Moon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M15.5 2.5a8.8 8.8 0 1 0 6 14.2A8.2 8.2 0 0 1 15.5 2.5z"
      />
    </svg>
  );
}

function Sun() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2.2v2.4M12 19.4v2.4M2.2 12h2.4M19.4 12h2.4M5.1 5.1l1.7 1.7M17.2 17.2l1.7 1.7M18.9 5.1l-1.7 1.7M6.8 17.2l-1.7 1.7" />
      </g>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H4V20h2.5V9zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.8.8-2.1 1.5-.1.3-.1.7-.1 1.1V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.3-1.8 2.4 0 4.3 1.6 4.3 5.1V20z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        d="M4 6.5h16v11H4z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.7" d="M4.5 7l7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8.2 3.5h2.1l1.2 3.1-1.6 1a12 12 0 0 0 5.5 5.5l1-1.6 3.1 1.2v2.1c0 .8-.6 1.6-1.4 1.7A15.2 15.2 0 0 1 6.5 4.9c.1-.8.9-1.4 1.7-1.4z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  const [progress, setProgress] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const dark = theme === 'black';

  useEffect(() => {
    const mark = () => {
      const line = window.innerHeight * 0.34;
      let current = 'about';
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.78) section.classList.add('is-in');
        if (rect.top <= line && rect.bottom > line) current = link.id;
      });
      setActive(current);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    mark();
    window.addEventListener('scroll', mark, { passive: true });
    window.addEventListener('resize', mark);
    return () => {
      window.removeEventListener('scroll', mark);
      window.removeEventListener('resize', mark);
    };
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="wordmark" to="/#about" onClick={() => setOpen(false)}>
          {site.name}
        </Link>
        <nav id="site-nav" aria-label="Primary">
          <ul className={`nav-links${open ? ' is-open' : ''}`}>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  className={location.pathname === '/' && active === link.id ? 'is-active' : ''}
                  aria-current={location.pathname === '/' && active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-end">
          <button
            type="button"
            className={`theme-switch${dark ? '' : ' is-sun'}`}
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to white theme' : 'Switch to black theme'}
          >
            <span className="theme-knob">{dark ? <Moon /> : <Sun />}</span>
          </button>
          <a
            className="icon-btn"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a className="icon-btn" href={`mailto:${site.email}`} aria-label="Email">
            <MailIcon />
          </a>
          <a className="icon-btn" href={`tel:${site.phoneTel}`} aria-label="Call">
            <PhoneIcon />
          </a>
          <button type="button" className="cv-link" onClick={downloadCv}>
            Download CV
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <span className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
