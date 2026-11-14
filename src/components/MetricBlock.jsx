import Placeholder from './Placeholder';
import { evidenceStatusLabel, isFilled } from '../lib/content';

export default function MetricBlock({ metric }) {
  const flagClass =
    metric.evidenceStatus === 'verified' ? 'metric-flag verified' : 'metric-flag';

  return (
    <article className="metric">
      <p className={flagClass}>{evidenceStatusLabel(metric.evidenceStatus)}</p>
      <h3>
        <Placeholder value={metric.name} label="[Metric name]" />
      </h3>
      <dl className="dl">
        <dt>Definition</dt>
        <dd>
          <Placeholder value={metric.definition} />
        </dd>
        <dt>Baseline</dt>
        <dd>
          <Placeholder value={metric.baseline} />
        </dd>
        <dt>
          {metric.evidenceStatus === 'verified'
            ? 'Result'
            : metric.evidenceStatus === 'target'
              ? 'Target'
              : metric.evidenceStatus === 'hypothesis'
                ? 'Hypothesised change'
                : metric.evidenceStatus === 'estimate'
                  ? 'Estimate'
                  : 'Value'}
        </dt>
        <dd>
          <Placeholder value={metric.result} />
        </dd>
        <dt>Timeframe</dt>
        <dd>
          <Placeholder value={metric.timeframe} />
        </dd>
        <dt>Source</dt>
        <dd>
          <Placeholder value={metric.source} />
        </dd>
        <dt>Attribution limits</dt>
        <dd>
          <Placeholder value={metric.attributionLimits} />
        </dd>
      </dl>
      {metric.evidenceStatus !== 'verified' && isFilled(metric.result) && (
        <p className="muted">This number is not presented as an achieved outcome.</p>
      )}
    </article>
  );
}
