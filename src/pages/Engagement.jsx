import { Link, useParams } from 'react-router-dom';
import { engagements } from '../data/engagements';
import usePageMeta from '../hooks/usePageMeta';
import AvatarScene from '../components/AvatarScene';

export default function Engagement() {
  const { slug } = useParams();
  const study = engagements.find((item) => item.slug === slug);
  usePageMeta(study ? study.title : 'Case study', study?.summary);

  if (!study) {
    return (
      <main id="main" className="page-hero">
        <div className="wrap-narrow">
          <h1>That case study is not on this site.</h1>
          <p>
            <Link to="/#work">Back to the work</Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main id="main" className="engagement">
      <article className="wrap engagement-grid">
        <div>
          <p className="kicker">
            <Link to="/#work">Work</Link>
            {' · '}
            Case study {study.index} · {study.domain}
          </p>
          <h1>{study.title}</h1>
          <p className="lede">
            {study.where} · Client: {study.client}
            <br />
            {study.when}
          </p>
          <section>
            <h2>Business problem</h2>
            <p>{study.problem}</p>
          </section>
          <section>
            <h2>Options and decision</h2>
            <p>{study.decision}</p>
          </section>
          <section>
            <h2>Action plan</h2>
            <ol className="case-plan">
              {study.plan.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <h2>Acceptance criteria</h2>
            <ul className="case-criteria">
              {study.criteria.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Outcome and scorecard</h2>
            <p>{study.outcome}</p>
          </section>
          <p>
            <Link className="btn btn-secondary" to="/#work">
              Back to case studies
            </Link>
          </p>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="cases" />
        </div>
      </article>
    </main>
  );
}
