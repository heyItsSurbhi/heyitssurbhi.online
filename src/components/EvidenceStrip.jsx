import { Link } from 'react-router-dom';

export default function EvidenceStrip({ metrics }) {
  if (!metrics.length) return null;

  return (
    <section className="section" aria-labelledby="evidence-heading">
      <div className="wrap">
        <p className="kicker">Verified evidence only</p>
        <h2 id="evidence-heading">What has been measured</h2>
        <div className="evidence-strip">
          {metrics.map((metric) => (
            <article key={`${metric.caseStudySlug}-${metric.name}`} className="evidence-item">
              <strong>{metric.result}</strong>
              <p>
                {metric.name}
                {metric.timeframe ? ` · ${metric.timeframe}` : ''}
              </p>
              <p>
                <Link to={`/work/${metric.caseStudySlug}#results`}>Source and limits</Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
