export default function PublicationChecklist({ checklist }) {
  return (
    <section className="section" id="checklist" aria-labelledby="checklist-heading">
      <div className="wrap">
        <p className="kicker">Before publication</p>
        <h2 id="checklist-heading">Missing content</h2>
        <p className="muted">
          {checklist.readyToPublish
            ? 'Required fields are complete. Review confidentiality, then set site.preview to false.'
            : `${checklist.remaining.length} required item${checklist.remaining.length === 1 ? '' : 's'} still open. Do not send this site to hiring managers yet.`}
        </p>
        <ol className="checklist">
          {checklist.items.map((item) => (
            <li key={item.id}>
              <span className={item.done ? 'mark' : 'open'} aria-hidden="true">
                {item.done ? '✓' : '○'}
              </span>
              <span>
                {item.label}
                {item.optional ? ' (optional)' : ''}
                <span className="muted"> — {item.done ? 'complete' : 'missing'}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
