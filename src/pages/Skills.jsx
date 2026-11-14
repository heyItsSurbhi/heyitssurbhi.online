import { skillGroups, toolGroups } from '../data/about';
import { path } from '../data/employment';
import AvatarScene from '../components/AvatarScene';
import usePageMeta from '../hooks/usePageMeta';

export default function Skills() {
  usePageMeta('Skills');

  return (
    <main id="main">
      <section className="stage stage-board">
        <div className="stage-copy">
          <p className="kicker">Skills · how the work gets done</p>
          <ol className="path">
            {path.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <h1>Core skills and technical expertise.</h1>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.id} className="skill-group">
                <p className="kicker">{group.label}</p>
                <ul className="skill-row">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
            {toolGroups.map((group) => (
              <p key={group.id}>
                <strong>{group.label}: </strong>
                {group.tools.join(', ')}
              </p>
            ))}
          </div>
        </div>
        <div className="stage-visual">
          <AvatarScene scene="skills" />
        </div>
      </section>
    </main>
  );
}
