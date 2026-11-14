import { Link } from 'react-router-dom';
import StatusLabel from './StatusLabel';
import Placeholder from './Placeholder';
import { isFilled } from '../lib/content';

export default function CaseStudyCard({ study, secondary = false }) {
  return (
    <Link
      to={`/work/${study.slug}`}
      className={`study-card${secondary ? ' is-secondary' : ''}`}
    >
      <StatusLabel status={study.status} template={study.isTemplate} />
      <h3>
        <Placeholder value={study.title} label="[Case study title]" />
      </h3>
      <p>
        <strong>Problem. </strong>
        <Placeholder value={study.problem} />
      </p>
      <p>
        <strong>Ownership. </strong>
        <Placeholder value={study.ownership} />
      </p>
      <p>
        <strong>Pivotal decision. </strong>
        <Placeholder value={study.pivotalDecision} />
      </p>
      <p>
        <strong>
          {study.outcomeKind === 'verified' ? 'Verified outcome. ' : 'Status. '}
        </strong>
        <Placeholder value={study.outcomeSummary} />
      </p>
      <div className="study-meta">
        {isFilled(study.timeframe) ? study.timeframe : 'Timeline not yet recorded'}
        {study.isTemplate ? ' · Template — not a real engagement' : ''}
      </div>
    </Link>
  );
}
