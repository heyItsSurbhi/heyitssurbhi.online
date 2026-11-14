import { Link, useParams } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { site } from '../data/site';
import { evidenceStatusLabel, isFilled, isPreview, statusLabel } from '../lib/content';
import Placeholder from '../components/Placeholder';
import StatusLabel from '../components/StatusLabel';
import DecisionTrail from '../components/DecisionTrail';
import MetricBlock from '../components/MetricBlock';
import FlowDiagram from '../components/FlowDiagram';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

const toc = [
  { id: 'brief', label: 'Executive brief' },
  { id: 'problem', label: 'Problem' },
  { id: 'decision', label: 'Decision' },
  { id: 'approach', label: 'Approach' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'results', label: 'Results' },
  { id: 'artifacts', label: 'Artifacts' },
];

function ListBlock({ items, fallback }) {
  if (!items?.length) {
    return <Placeholder value={null} label={fallback} block />;
  }
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === 'string' ? <Placeholder value={item} /> : item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);
  const preview = isPreview(site);

  usePageMeta(
    study ? (isFilled(study.title) ? study.title : 'Case study template') : 'Not found',
    study?.problem
  );

  if (!study || (!study.publicationReady && !preview)) {
    return (
      <main id="main" className="page-hero">
        <div className="wrap-narrow">
          <h1>Case study not published</h1>
          <p>
            This study is unavailable. Return to <Link to="/">the work index</Link>.
          </p>
        </div>
      </main>
    );
  }

  const brief = study.executiveBrief || {};
  const understanding = study.understanding || {};
  const decision = study.decision || {};
  const approach = study.approach || {};
  const delivery = study.delivery || {};
  const results = study.results || {};

  return (
    <main id="main">
      <article>
        <header className="page-hero">
          <div className="wrap with-avatar avatar-end">
            <div>
            <p className="kicker">
              <Link to="/#work">Work</Link>
              {' / '}
              {statusLabel(study.status)}
            </p>
            <StatusLabel status={study.status} template={study.isTemplate} />
            <h1>
              <Placeholder value={study.title} label="[Case study title]" />
            </h1>
            <p className="lede">
              60-second read: problem, ownership, the call, and what is evidenced.
            </p>
            {study.isTemplate && (
              <p className="placeholder-block">
                This is a structure template, not a real engagement. Replace every bracketed field
                before publication. Do not invent a success story.
              </p>
            )}
            <nav className="toc" aria-label="On this page">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
            </div>
            <AvatarScene scene="cases" size="sm" />
          </div>
        </header>

        <section id="brief" className="section">
          <div className="wrap">
            <p className="kicker">A. Executive brief</p>
            <h2>What a hiring manager should know first</h2>
            <div className="brief-grid">
              <div className="panel">
                <h3>User and business problem</h3>
                <Placeholder value={brief.userBusinessProblem} block />
              </div>
              <div className="panel">
                <h3>Stakes and constraints</h3>
                <Placeholder value={brief.stakesConstraints} block />
              </div>
              <div className="panel">
                <h3>Role and decision authority</h3>
                <p>
                  <Placeholder value={brief.role} />
                </p>
                <p>
                  <Placeholder value={brief.decisionAuthority} />
                </p>
              </div>
              <div className="panel">
                <h3>Team and timeline</h3>
                <p>
                  <Placeholder value={brief.team} />
                </p>
                <p>
                  <Placeholder value={brief.timeline || study.timeframe} />
                </p>
              </div>
              <div className="panel">
                <h3>Outcome and evidence status</h3>
                <p>
                  <Placeholder value={brief.outcome} />
                </p>
                <p className="muted">{evidenceStatusLabel(brief.evidenceStatus)}</p>
              </div>
              <div className="panel">
                <h3>My contribution</h3>
                <Placeholder value={study.contribution} block />
              </div>
            </div>
            <DecisionTrail
              evidence={study.problem}
              options={decision.options?.map((option) => option.name).filter(Boolean).join(' · ')}
              decision={isFilled(decision.chosen?.name) ? decision.chosen.name : study.pivotalDecision}
              outcome={study.outcomeSummary}
            />
          </div>
        </section>

        <section id="problem" className="section">
          <div className="wrap-narrow">
            <p className="kicker">B. Understanding the problem</p>
            <h2>Who was stuck, and what we actually knew</h2>
            {(understanding.segments || []).map((segment, index) => (
              <div className="panel" key={index} style={{ marginBottom: '1rem' }}>
                <h3>Segment and job to be done</h3>
                <p>
                  <Placeholder value={segment.name} />
                </p>
                <p>
                  <Placeholder value={segment.jobToBeDone} />
                </p>
              </div>
            ))}
            <h3>Research methods</h3>
            <ListBlock items={understanding.researchMethods} fallback="[Research methods]" />
            <h3>Sample limitations</h3>
            <Placeholder value={understanding.sampleLimitations} block />
            <h3>Quantitative evidence</h3>
            {(understanding.quantitativeEvidence || []).map((item, index) => (
              <p key={index}>
                <Placeholder value={item.finding} />{' '}
                <span className="muted">
                  ({evidenceStatusLabel(item.evidenceStatus)}
                  {isFilled(item.source) ? ` · ${item.source}` : ''})
                </span>
              </p>
            ))}
            <h3>Qualitative evidence</h3>
            {(understanding.qualitativeEvidence || []).map((item, index) => (
              <p key={index}>
                <Placeholder value={item.finding} />{' '}
                <span className="muted">
                  ({evidenceStatusLabel(item.evidenceStatus)}
                  {isFilled(item.source) ? ` · ${item.source}` : ''})
                </span>
              </p>
            ))}
            <h3>Assumptions that changed</h3>
            <ListBlock items={understanding.assumptionsThatChanged} fallback="[Assumptions that changed]" />
            <p className="contrib">
              My contribution:{' '}
              <Placeholder value={study.contribution} />
            </p>
          </div>
        </section>

        <section id="decision" className="section">
          <div className="wrap-narrow">
            <p className="kicker">C. The pivotal decision</p>
            <h2>Options, trade-offs, and the call</h2>
            {(decision.options || []).map((option) => (
              <div className="panel" key={option.name} style={{ marginBottom: '0.75rem' }}>
                <h3>
                  <Placeholder value={option.name} />
                </h3>
                <Placeholder value={option.description} block />
              </div>
            ))}
            <h3>Evaluation criteria</h3>
            <ListBlock items={decision.criteria} fallback="[Criteria]" />
            <h3>Trade-offs</h3>
            <ListBlock items={decision.tradeoffs} fallback="[Trade-offs]" />
            <div className="panel" style={{ borderColor: 'var(--amber)' }}>
              <h3>Chosen approach</h3>
              <p>
                <strong>
                  <Placeholder value={decision.chosen?.name} />
                </strong>
              </p>
              <Placeholder value={decision.chosen?.reasoning} block />
            </div>
            <h3>Deliberately excluded</h3>
            <ListBlock items={decision.excluded} fallback="[Non-goals]" />
          </div>
        </section>

        <section id="approach" className="section">
          <div className="wrap-narrow">
            <p className="kicker">D. Product and technical approach</p>
            <h2>How the system was supposed to work</h2>
            <h3>Workflow</h3>
            <ol>
              {(approach.journey || []).map((step, index) => (
                <li key={index}>
                  <Placeholder value={step.actor} /> — <Placeholder value={step.step} />
                </li>
              ))}
            </ol>
            <h3>System flow</h3>
            <FlowDiagram diagram={approach.diagram} />
            <h3>Integrations and dependencies</h3>
            <ListBlock items={approach.integrations} fallback="[Integrations]" />
            <h3>Technical risks and failure modes</h3>
            {(approach.technicalRisks || []).map((item, index) => (
              <p key={index}>
                <Placeholder value={item.risk} /> — <Placeholder value={item.handling} />
              </p>
            ))}
            <div className="brief-grid" style={{ marginTop: '1rem' }}>
              <div className="panel">
                <h3>My decisions</h3>
                <ListBlock items={approach.myDecisions} fallback="[Product judgements I owned]" />
              </div>
              <div className="panel">
                <h3>Engineering ownership</h3>
                <ListBlock
                  items={approach.engineeringOwnership}
                  fallback="[What engineering owned]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="section">
          <div className="wrap-narrow">
            <p className="kicker">E. Delivery and alignment</p>
            <h2>What shipped, who disagreed, and how quality was protected</h2>
            <h3>MVP scope</h3>
            <Placeholder value={delivery.mvpScope} block />
            <h3>Outcome-based roadmap</h3>
            {(delivery.roadmap || []).map((item, index) => (
              <p key={index}>
                <Placeholder value={item.theme} /> — signal:{' '}
                <Placeholder value={item.signal} />
              </p>
            ))}
            <h3>Example user story</h3>
            <Placeholder value={delivery.userStory?.story} block />
            <ListBlock items={delivery.userStory?.acceptance} fallback="[Acceptance criteria]" />
            <h3>Stakeholder disagreement</h3>
            <Placeholder value={delivery.stakeholderDisagreement} block />
            <h3>How it was resolved</h3>
            <Placeholder value={delivery.resolution} block />
            <h3>Release, quality, adoption</h3>
            <Placeholder value={delivery.releaseApproach} block />
            <ListBlock items={delivery.qualityChecks} fallback="[Quality checks]" />
            <Placeholder value={delivery.adoptionPlan} block />
            <p className="contrib">
              My contribution:{' '}
              <Placeholder value={study.contribution} />
            </p>
          </div>
        </section>

        <section id="results" className="section">
          <div className="wrap">
            <p className="kicker">F. Results and learning</p>
            <h2>What changed, what is still a hypothesis</h2>
            <div className="card-grid">
              {(results.metrics || []).map((metric, index) => (
                <MetricBlock key={index} metric={metric} />
              ))}
            </div>
            <div className="wrap-narrow" style={{ marginTop: '2rem', width: '100%' }}>
              <h3>Unexpected findings</h3>
              <ListBlock items={results.unexpectedFindings} fallback="[Unexpected findings]" />
              <h3>What I would change next</h3>
              <ListBlock items={results.wouldChangeNext} fallback="[What I would change]" />
            </div>
          </div>
        </section>

        <section id="artifacts" className="section">
          <div className="wrap">
            <p className="kicker">G. Supporting artifacts</p>
            <h2>Sanitised materials</h2>
            <div className="card-grid">
              {(study.artifacts || []).map((artifact) => (
                <article
                  key={artifact.id}
                  className={`artifact${artifact.status === 'available' ? ' is-available' : ''}`}
                >
                  <h3>{artifact.title}</h3>
                  {artifact.status === 'available' && artifact.href ? (
                    <p>
                      <a href={artifact.href}>Open artifact</a>
                    </p>
                  ) : (
                    <p className="placeholder">Placeholder — file not attached</p>
                  )}
                  <p className="muted">
                    <Placeholder value={artifact.note} />
                  </p>
                </article>
              ))}
            </div>
            <p className="muted" style={{ marginTop: '1.5rem' }}>
              Confidentiality:{' '}
              <Placeholder value={study.confidentiality} />
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
