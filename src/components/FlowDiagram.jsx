import Placeholder from './Placeholder';
import { isFilled } from '../lib/content';

export default function FlowDiagram({ diagram }) {
  if (!diagram) return null;

  const nodes = Object.fromEntries((diagram.nodes || []).map((node) => [node.id, node]));

  return (
    <figure>
      <div className="flow" role="img" aria-label={isFilled(diagram.caption) ? diagram.caption : 'System flow diagram'}>
        {(diagram.edges || []).map((edge, index) => (
          <div key={`${edge.from}-${edge.to}-${index}`}>
            {index === 0 && (
              <div className="flow-node">
                <Placeholder value={nodes[edge.from]?.label} label="[Node]" />
              </div>
            )}
            <div className="flow-edge">↓ {edge.label}</div>
            <div className="flow-node">
              <Placeholder value={nodes[edge.to]?.label} label="[Node]" />
            </div>
          </div>
        ))}
      </div>
      <figcaption className="muted">
        <Placeholder value={diagram.caption} label="[Diagram caption]" />
      </figcaption>
    </figure>
  );
}
