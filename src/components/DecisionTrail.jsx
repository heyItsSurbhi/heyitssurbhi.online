const STEPS = [
  { key: 'evidence', label: 'Evidence', text: 'What is known, and what is not.' },
  { key: 'options', label: 'Options', text: 'The real choices, including delay.' },
  { key: 'decision', label: 'Decision', text: 'The call, the trade-off, the non-goal.' },
  { key: 'outcome', label: 'Outcome', text: 'What changed — or what remains unmeasured.' },
];

export default function DecisionTrail({ evidence, options, decision, outcome }) {
  const copy = {
    evidence: evidence || STEPS[0].text,
    options: options || STEPS[1].text,
    decision: decision || STEPS[2].text,
    outcome: outcome || STEPS[3].text,
  };

  return (
    <ol className="decision-trail">
      {STEPS.map((step) => (
        <li key={step.key} className={`trail-step${step.key === 'decision' ? ' is-decision' : ''}`}>
          <strong>{step.label}</strong>
          {copy[step.key]}
        </li>
      ))}
    </ol>
  );
}
