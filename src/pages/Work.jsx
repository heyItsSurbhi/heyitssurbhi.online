import { Link } from 'react-router-dom';
import { domains } from '../data/employment';
import { caseStudies } from '../data/caseStudies';
import { site } from '../data/site';
import { isPreview, publishedCaseStudies } from '../lib/content';
import CaseStudyCard from '../components/CaseStudyCard';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

export default function Work() {
  usePageMeta('Case studies');
  const studies = publishedCaseStudies(caseStudies, { preview: isPreview(site) }).filter(
    (study) => !study.isTemplate
  );

  return (
    <main id="main">
      <section className="stage">
        <div className="stage-copy">
          <p className="kicker">Case studies</p>
          <h1>The rooms where the decision actually happened.</h1>
          <p>
            Four client contexts. I will publish a full decision write-up only when the problem,
            my contribution, and the evidence can be stated honestly.
          </p>
          <div className="domain-list">
            {domains.map((domain) => (
              <article key={domain.id}>
                <h2>
                  {domain.client}
                  <span>
                    {domain.name} · {domain.where}
                  </span>
                </h2>
                <p>{domain.note}</p>
              </article>
            ))}
          </div>
          {studies.length > 0 && (
            <div className="card-grid" style={{ marginTop: '1.5rem' }}>
              {studies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          )}
          <p className="muted">
            A blank decision template lives in the repo for the next write-up. It is not a shipped
            project. <Link to="/contact">Talk through one of these in a conversation.</Link>
          </p>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="cases" />
        </div>
      </section>
    </main>
  );
}
