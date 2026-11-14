const PLACEHOLDER_PATTERN = /^\s*\[.*\]\s*$/;

export function isFilled(value) {
  if (value == null) return false;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return false;
    if (PLACEHOLDER_PATTERN.test(trimmed)) return false;
    if (trimmed.startsWith('[')) return false;
  }
  if (Array.isArray(value)) return value.length > 0 && value.some((item) => isFilled(item));
  if (typeof value === 'object') {
    return Object.values(value).some((item) => isFilled(item));
  }
  return true;
}

export function textOrPlaceholder(value, fallback) {
  return isFilled(value) ? value : fallback;
}

export function isPreview(site) {
  return site.preview !== false;
}

export function hasResume(site) {
  return isFilled(site.resumeFile);
}

export function publishedCaseStudies(caseStudies, { preview } = {}) {
  return caseStudies.filter((study) => {
    if (study.publicationReady) return true;
    return preview && study.showInPreview;
  });
}

export function featuredCaseStudies(caseStudies, { preview } = {}) {
  return publishedCaseStudies(caseStudies, { preview })
    .filter((study) => study.featured !== false)
    .slice(0, 3);
}

export function verifiedMetrics(caseStudies) {
  const metrics = [];
  caseStudies.forEach((study) => {
    (study.results?.metrics || []).forEach((metric) => {
      if (metric.evidenceStatus === 'verified' && isFilled(metric.result) && isFilled(metric.name)) {
        metrics.push({
          ...metric,
          caseStudySlug: study.slug,
          caseStudyTitle: study.title,
        });
      }
    });
  });
  return metrics;
}

export function matchesFocus(study, focusId) {
  if (!focusId || focusId === 'all') return true;
  return (study.focuses || []).includes(focusId);
}

export function orderByFocus(caseStudies, focusId) {
  if (!focusId || focusId === 'all') return caseStudies;
  const matched = [];
  const rest = [];
  caseStudies.forEach((study) => {
    if (matchesFocus(study, focusId)) matched.push(study);
    else rest.push(study);
  });
  return [...matched, ...rest];
}

export function statusLabel(status) {
  const labels = {
    shipped: 'Shipped product',
    pilot: 'Pilot',
    prototype: 'Prototype',
    'independent-product-study': 'Independent product study',
  };
  return labels[status] || status;
}

export function evidenceStatusLabel(status) {
  const labels = {
    verified: 'Verified result',
    estimate: 'Estimate',
    target: 'Target',
    hypothesis: 'Hypothesis',
    unfilled: 'Not yet evidenced',
    'in-progress': 'In progress',
  };
  return labels[status] || status;
}

export function buildPublicationChecklist({ site, employment, caseStudies, about }) {
  const realStudies = caseStudies.filter((study) => study.publicationReady && !study.isTemplate);
  const items = [
    {
      id: 'name',
      done: isFilled(site.name) && !String(site.name).startsWith('['),
      label: 'Confirm the public name',
    },
    {
      id: 'title',
      done: isFilled(site.title),
      label: 'Add an accurate professional title (do not assume Senior Product Manager)',
    },
    {
      id: 'statement',
      done: isFilled(site.supportingStatement),
      label: 'Write a supporting statement from verified experience only',
    },
    {
      id: 'employment',
      done: employment.some((role) => role.publicationReady),
      label: 'Add verified employment history with role, team scope, and individual contribution',
    },
    {
      id: 'case-study',
      done: realStudies.length > 0,
      label: 'Add at least one real case study with publicationReady: true',
    },
    {
      id: 'metrics',
      done: realStudies.some((study) =>
        (study.results?.metrics || []).some((metric) => metric.evidenceStatus !== 'unfilled' && isFilled(metric.name))
      ),
      label: 'Record metrics as verified, estimate, target, or hypothesis — never as invented outcomes',
    },
    {
      id: 'resume',
      done: hasResume(site),
      label: 'Add a resume PDF under public/resume and set site.resumeFile',
    },
    {
      id: 'email',
      done: isFilled(site.email),
      label: 'Add a working email address',
    },
    {
      id: 'linkedin',
      done: isFilled(site.linkedin),
      label: 'Add a LinkedIn URL',
    },
    {
      id: 'location',
      done: isFilled(site.location) || isFilled(site.relocationPreference),
      label: 'Add location or relocation preference only if it should be public',
      optional: true,
    },
    {
      id: 'about',
      done: isFilled(about.problemsSolved) && isFilled(about.howIDecide),
      label: 'Complete the About narrative from real experience',
    },
    {
      id: 'confidentiality',
      done: realStudies.length > 0 && realStudies.every((study) => isFilled(study.confidentiality)),
      label: 'Review confidentiality notes on every publishable case study',
    },
    {
      id: 'template',
      done: !caseStudies.some((study) => study.isTemplate && study.publicationReady),
      label: 'Keep the example template unpublished (publicationReady: false)',
    },
    {
      id: 'preview',
      done: site.preview === false,
      label: 'Set site.preview to false only after the items above are complete',
    },
  ];

  return {
    items,
    remaining: items.filter((item) => !item.done && !item.optional),
    readyToPublish: items.filter((item) => !item.optional).every((item) => item.done),
  };
}
