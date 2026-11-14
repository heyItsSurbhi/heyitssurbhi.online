/**
 * Case studies.
 *
 * Copy `templateCaseStudy` when adding a real study.
 * Set publicationReady: true only when facts, contribution, and evidence
 * status are honest. Do not invent outcomes.
 *
 * Metric evidenceStatus must be one of:
 *   'verified' | 'estimate' | 'target' | 'hypothesis' | 'unfilled' | 'in-progress'
 *
 * Project status must be one of:
 *   'shipped' | 'pilot' | 'prototype' | 'independent-product-study'
 *
 * focuses may include: 'ai-complex' | 'healthcare-commerce' | 'platforms-scale'
 * Leave focuses empty until the work actually involved that problem space.
 */

export const templateCaseStudy = {
  slug: 'case-study-template',
  isTemplate: true,
  showInPreview: true,
  publicationReady: false,
  featured: true,
  type: 'independent-study',
  status: 'independent-product-study',
  title: '[Case study title]',
  timeframe: '[Start – end, or “in progress”]',
  problem:
    '[The user and business problem in one or two sentences. Do not write a success story here.]',
  ownership: '[What you personally owned — decisions, not the whole team’s delivery]',
  pivotalDecision: '[The decision that changed direction. State the choice, not the result.]',
  outcomeSummary:
    '[Verified outcome, or current status if the work is unfinished. Never present a target as a result.]',
  outcomeKind: 'unfilled',
  focuses: [],
  relevanceNotes: {
    'ai-complex':
      '[Optional: why this work is relevant to AI or complex systems. Leave empty if it is not.]',
    'healthcare-commerce':
      '[Optional: why this work is relevant to healthcare or commerce. Leave empty if it is not.]',
    'platforms-scale':
      '[Optional: why this work is relevant to platforms and scale. Leave empty if it is not.]',
  },
  transferableNotes: [],
  confidentiality:
    '[What was sanitised or omitted. Remove confidential names, figures, and screenshots.]',
  contribution:
    '[One sentence that separates your contribution from the team’s. Repeat this honestly throughout.]',
  executiveBrief: {
    userBusinessProblem: '[Who was stuck, and what business cost did that create?]',
    stakesConstraints: '[Time, risk, regulation, data, or organisational limits.]',
    role: '[Your role on this work — use the real title]',
    decisionAuthority: '[What you could decide vs what you could only recommend]',
    team: '[Functions involved and approximate team scope, if known]',
    timeline: '[Duration and any phases]',
    outcome: '[What changed, or “not yet measured”]',
    evidenceStatus: 'unfilled',
  },
  understanding: {
    segments: [
      {
        name: '[Customer / user segment]',
        jobToBeDone: '[Job to be done]',
      },
    ],
    researchMethods: ['[Method, e.g. five operational interviews]'],
    sampleLimitations: '[Who was not represented, and how that limits claims]',
    quantitativeEvidence: [
      {
        finding: '[Quantitative observation]',
        source: '[System, study, or “not yet collected”]',
        evidenceStatus: 'unfilled',
      },
    ],
    qualitativeEvidence: [
      {
        finding: '[Qualitative observation]',
        source: '[Interview, support, field note, or “not yet collected”]',
        evidenceStatus: 'unfilled',
      },
    ],
    assumptionsThatChanged: [
      '[An assumption you started with, and what replaced it]',
    ],
  },
  decision: {
    options: [
      {
        name: '[Option A]',
        description: '[What this option would have meant in practice]',
      },
      {
        name: '[Option B]',
        description: '[What this option would have meant in practice]',
      },
      {
        name: '[Option C — include a “do nothing / delay” option if it was real]',
        description: '[Cost of inaction]',
      },
    ],
    criteria: ['[Criterion used to compare options]'],
    tradeoffs: ['[What you would give up by choosing each leading option]'],
    chosen: {
      name: '[Chosen option]',
      reasoning: '[Why this option was the least-wrong choice given the criteria]',
    },
    excluded: ['[What you deliberately did not build or pursue, and why]'],
  },
  approach: {
    journey: [
      { actor: '[User or operator]', step: '[What they do]' },
      { actor: '[System or team]', step: '[What happens next]' },
    ],
    diagram: {
      caption: '[Plain-language description of the flow]',
      nodes: [
        { id: 'user', label: '[User / operator]' },
        { id: 'product', label: '[Product surface]' },
        { id: 'system', label: '[System of record / model / partner]' },
      ],
      edges: [
        { from: 'user', to: 'product', label: '[Action]' },
        { from: 'product', to: 'system', label: '[Dependency]' },
      ],
    },
    integrations: ['[API, partner, or data dependency]'],
    technicalRisks: [
      {
        risk: '[Failure mode]',
        handling: '[How the product should fail, degrade, or escalate]',
      },
    ],
    myDecisions: ['[A product or technical judgement you personally made]'],
    engineeringOwnership: ['[What engineering owned; do not claim it as yours]'],
  },
  delivery: {
    mvpScope: '[The smallest release that could test the decision]',
    roadmap: [
      {
        theme: '[Outcome theme, not a feature list]',
        signal: '[How you would know it worked]',
      },
    ],
    userStory: {
      story: 'As a [user], I want [capability] so that [outcome].',
      acceptance: ['[Given / when / then]'],
    },
    stakeholderDisagreement: '[A real disagreement, or “[None recorded yet]”]',
    resolution: '[How you resolved it — evidence, prototype, staged rollout, etc.]',
    releaseApproach: '[Phased, pilot, feature-flagged, or other]',
    qualityChecks: ['[Check that protected users or the business]'],
    adoptionPlan: '[Who had to change behaviour, and how you supported that]',
  },
  results: {
    metrics: [
      {
        name: '[Metric name]',
        definition: '[Exact definition — numerator, denominator, unit]',
        baseline: '[Baseline value or “unknown”]',
        result: '[Result, target, or “not yet measured”]',
        timeframe: '[Measurement window]',
        source: '[Dashboard, study, finance, or “not instrumented”]',
        evidenceStatus: 'unfilled',
        attributionLimits:
          '[Other factors that could explain the number. Required for any verified result.]',
      },
    ],
    unexpectedFindings: ['[What surprised you, or “[None recorded yet]”]'],
    wouldChangeNext: ['[What you would do differently with the same problem]'],
  },
  artifacts: [
    {
      id: 'research-synthesis',
      title: 'Research synthesis',
      kind: 'research',
      status: 'placeholder',
      href: null,
      note: '[Attach a sanitised summary, or leave as a placeholder]',
    },
    {
      id: 'experiment-brief',
      title: 'Experiment brief',
      kind: 'experiment',
      status: 'placeholder',
      href: null,
      note: '[Hypothesis, success metric, and guardrails]',
    },
    {
      id: 'roadmap',
      title: 'Outcome-based roadmap excerpt',
      kind: 'roadmap',
      status: 'placeholder',
      href: null,
      note: '[Themes and signals, not a feature dump]',
    },
    {
      id: 'prd',
      title: 'PRD excerpt',
      kind: 'prd',
      status: 'placeholder',
      href: null,
      note: '[Problem, decision, and non-goals only]',
    },
    {
      id: 'decision-log',
      title: 'Decision log',
      kind: 'decision-log',
      status: 'placeholder',
      href: null,
      note: '[Date, options, choice, owner]',
    },
    {
      id: 'launch-review',
      title: 'Launch review',
      kind: 'launch-review',
      status: 'placeholder',
      href: null,
      note: '[What shipped, what was deferred, what will be measured]',
    },
  ],
};

export const caseStudies = [templateCaseStudy];
