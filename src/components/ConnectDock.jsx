import { useState } from 'react';
import { site } from '../data/site';
import { downloadCv } from '../lib/downloadCv';

const reasons = [
  'Job opportunity',
  'Product role',
  'Case-study walkthrough',
  'Consulting',
  'Networking',
];

export default function ConnectDock() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState(null);

  const close = () => {
    setOpen(false);
    setReason(null);
  };

  const subject = reason ? `${reason} — Surbhi Mundhe` : 'Hello Surbhi';

  return (
    <div className="connect-dock">
      {open && (
        <div className="connect-panel" role="dialog" aria-label="Connect">
          <div className="connect-head">
            <strong>Connect</strong>
            <button type="button" onClick={close}>
              Close
            </button>
          </div>
          {!reason ? (
            <>
              <p>Hi. How would you like to connect?</p>
              <div className="connect-options">
                {reasons.map((item) => (
                  <button key={item} type="button" onClick={() => setReason(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="connect-reason">{reason}</p>
              <p>Good. How should we continue?</p>
              <div className="connect-options">
                <a className="connect-primary" href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}>
                  Send email
                </a>
                <a href={`tel:${site.phoneTel}`}>Call Surbhi</a>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <button type="button" onClick={downloadCv}>
                  Download CV
                </button>
              </div>
              <button type="button" className="text-btn" onClick={() => setReason(null)}>
                Start over
              </button>
            </>
          )}
        </div>
      )}
      <button
        type="button"
        className="connect-fab"
        aria-expanded={open}
        aria-label={open ? 'Close connect' : 'Open connect'}
        onClick={() => (open ? close() : setOpen(true))}
      >
        {open ? '×' : 'Hi'}
      </button>
    </div>
  );
}
