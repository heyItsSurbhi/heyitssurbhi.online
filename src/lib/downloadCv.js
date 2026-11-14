import { site } from '../data/site';
import { about, skillGroups, summary, toolGroups } from '../data/about';
import { employment, path } from '../data/employment';
import { engagements } from '../data/engagements';

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 50;
const MARGIN_TOP = 48;
const MARGIN_BOTTOM = 46;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const WIDTH = {
  ' ': 278,
  '.': 278,
  ',': 278,
  ':': 278,
  ';': 278,
  "'": 191,
  '"': 355,
  'i': 278,
  'l': 278,
  'j': 278,
  't': 333,
  'f': 333,
  'r': 333,
  'I': 278,
  'J': 500,
  'm': 833,
  'w': 722,
  'M': 833,
  'W': 944,
  '-': 333,
  '|': 260,
};

function clean(value) {
  return String(value ?? '')
    .replace(/\u2192/g, ' to ')
    .replace(/[\u2013\u2014\u2212]/g, '-')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2026/g, '...')
    .replace(/[\u00b7\u2022]/g, '|')
    .replace(/\s+/g, ' ')
    .trim();
}

function measure(text, size, bold) {
  let units = 0;
  for (const ch of text) {
    const upper = ch >= 'A' && ch <= 'Z';
    units += WIDTH[ch] ?? (upper ? 667 : 500);
  }
  return (units / 1000) * size * (bold ? 1.06 : 1);
}

function wrap(text, size, width, bold) {
  const words = clean(text).split(' ').filter(Boolean);
  if (!words.length) return [''];
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (measure(next, size, bold) <= width) line = next;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function pdfText(value) {
  return `(${clean(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')})`;
}

function blocks() {
  const items = [
    { type: 'name', text: site.name },
    { type: 'role', text: site.headline },
    { type: 'meta', text: `${site.location}  ·  ${site.relocationPreference}` },
    { type: 'meta', text: `${site.phoneDisplay}  |  ${site.email}  |  ${site.linkedin}` },
    { type: 'rule' },
    { type: 'h', text: 'Professional summary' },
    ...summary.map((paragraph) => ({ type: 'p', text: paragraph })),
    { type: 'h', text: 'Experience' },
  ];

  for (const role of employment) {
    const company = role.company.startsWith('Tata') ? 'Tata Consultancy Services' : role.company;
    items.push({
      type: 'sub',
      text: `${company}  |  ${role.roleTitle}${role.focus ? `  |  ${role.focus}` : ''}`,
    });
    items.push({
      type: 'meta',
      text: `${role.start} - ${role.end}${role.teamOrClient ? `  |  Client: ${role.teamOrClient}` : ''}${role.domain ? `  |  ${role.domain}` : ''}`,
    });
    for (const point of role.highlights) items.push({ type: 'li', text: point });
  }

  items.push({ type: 'h', text: 'Selected work' });
  for (const study of engagements) {
    items.push({ type: 'sub', text: `${study.title}  |  ${study.client}` });
    items.push({ type: 'meta', text: `${study.where}  |  ${study.when}  |  ${study.domain}` });
    items.push({ type: 'p', text: study.summary });
    items.push({ type: 'p', text: study.problem });
    items.push({ type: 'p', text: study.decision });
    for (const step of study.plan) items.push({ type: 'li', text: step });
    for (const item of study.criteria) items.push({ type: 'li', text: item });
    items.push({ type: 'p', text: study.outcome });
    if (study.tags?.length) items.push({ type: 'meta', text: study.tags.join('  |  ') });
  }

  items.push({ type: 'h', text: 'Core skills and technical expertise' });
  for (const group of skillGroups) {
    items.push({ type: 'sub', text: group.label });
    items.push({ type: 'p', text: group.skills.join('  |  ') });
  }
  items.push({ type: 'h', text: 'Product management tools' });
  for (const group of toolGroups) {
    items.push({ type: 'sub', text: group.label });
    items.push({ type: 'p', text: group.tools.join(', ') });
  }

  items.push({ type: 'h', text: 'Certifications' });
  for (const item of about.education.filter((entry) => entry.group === 'certification')) {
    items.push({ type: 'li', text: item.credential });
  }
  items.push({ type: 'h', text: 'Education' });
  for (const item of about.education.filter((entry) => entry.group === 'education')) {
    items.push({ type: 'li', text: `${item.credential}  |  ${item.institution}  |  ${item.period}` });
  }
  items.push({ type: 'h', text: 'Languages' });
  for (const language of about.languages) {
    items.push({ type: 'li', text: `${language.name} - ${language.level}` });
  }

  items.push({ type: 'h', text: 'Path' });
  items.push({ type: 'p', text: path.join('  to  ') });
  return items;
}

const STYLE = {
  name: { font: 'F2', size: 20, leading: 24, before: 0, after: 3, bold: true },
  role: { font: 'F1', size: 10, leading: 13, before: 2, after: 2, bold: false },
  meta: { font: 'F1', size: 8.5, leading: 11, before: 1, after: 1, bold: false, gray: true },
  h: { font: 'F2', size: 11, leading: 14, before: 14, after: 5, bold: true, rule: true },
  sub: { font: 'F2', size: 10, leading: 13, before: 8, after: 1, bold: true },
  p: { font: 'F1', size: 9.5, leading: 12.4, before: 1, after: 3, bold: false },
  li: { font: 'F1', size: 9.5, leading: 12.4, before: 0, after: 2, bold: false, indent: 12 },
};

function layout(items) {
  const pages = [];
  let lines = [];
  let y = PAGE_H - MARGIN_TOP;

  const newPage = () => {
    pages.push(lines);
    lines = [];
    y = PAGE_H - MARGIN_TOP;
  };

  for (const item of items) {
    if (item.type === 'rule') {
      if (y - 10 < MARGIN_BOTTOM) newPage();
      lines.push({ rule: true, y });
      y -= 10;
      continue;
    }
    const style = STYLE[item.type];
    const bullet = item.type === 'li' ? '-  ' : '';
    const bulletWidth = bullet ? measure(bullet, style.size, false) : 0;
    const width = CONTENT_W - (style.indent || 0) - bulletWidth;
    const wrapped = wrap(item.text, style.size, width, style.bold);
    const blockHeight = style.before + wrapped.length * style.leading + style.after;
    const keepWithNext = item.type === 'h' || item.type === 'sub';
    if (y - blockHeight < MARGIN_BOTTOM || (keepWithNext && y - blockHeight - 28 < MARGIN_BOTTOM)) {
      newPage();
    }
    y -= style.before;
    wrapped.forEach((text, index) => {
      lines.push({
        text: index === 0 ? `${bullet}${text}` : text,
        x: MARGIN_X + (style.indent || 0) + (index === 0 ? 0 : bulletWidth),
        y,
        ...style,
      });
      y -= style.leading;
    });
    y -= style.after;
  }
  pages.push(lines);
  return pages;
}

function pageStream(lines, pageNumber, pageCount) {
  const parts = ['0.1 0.1 0.1 rg'];
  for (const line of lines) {
    if (line.rule) {
      const ruleY = (line.y - 4).toFixed(2);
      parts.push(
        `0.72 G 0.6 w ${MARGIN_X} ${ruleY} m ${(MARGIN_X + CONTENT_W).toFixed(2)} ${ruleY} l S 0.1 0.1 0.1 rg`
      );
      continue;
    }
    const color = line.gray ? '0.28 0.28 0.28 rg' : '0.1 0.1 0.1 rg';
    parts.push(
      `${color} /${line.font} ${line.size} Tf 1 0 0 1 ${line.x.toFixed(2)} ${line.y.toFixed(2)} Tm ${pdfText(line.text)} Tj`
    );
  }
  const footer = `${site.name}  |  ${site.title}`;
  parts.push(
    `0.45 0.45 0.45 rg /F1 8 Tf 1 0 0 1 ${MARGIN_X} 28 Tm ${pdfText(footer)} Tj 1 0 0 1 ${(PAGE_W - MARGIN_X - 36).toFixed(2)} 28 Tm ${pdfText(`${pageNumber} / ${pageCount}`)} Tj`
  );
  return parts.join('\n');
}

export function buildCvPdf() {
  const pages = layout(blocks());
  const font1 = 3;
  const font2 = 4;
  let nextId = 5;
  const chunks = [];
  const offsets = [0];
  let length = 0;

  const add = (id, body) => {
    const chunk = `${id} 0 obj\n${body}\nendobj\n`;
    offsets[id] = length;
    chunks.push(chunk);
    length += chunk.length;
  };

  const header = '%PDF-1.4\n';
  chunks.push(header);
  length += header.length;

  const pageIds = pages.map(() => {
    const contentId = nextId;
    const pageId = nextId + 1;
    nextId += 2;
    return { contentId, pageId };
  });

  add('1', '<< /Type /Catalog /Pages 2 0 R >>');
  add(
    '2',
    `<< /Type /Pages /Kids [${pageIds.map((page) => `${page.pageId} 0 R`).join(' ')}] /Count ${pages.length} >>`
  );
  add(String(font1), '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  add(String(font2), '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');

  pages.forEach((lines, index) => {
    const { contentId, pageId } = pageIds[index];
    const stream = pageStream(lines, index + 1, pages.length);
    add(String(contentId), `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    add(
      String(pageId),
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Contents ${contentId} 0 R /Resources << /Font << /F1 ${font1} 0 R /F2 ${font2} 0 R >> >> >>`
    );
  });

  const total = nextId - 1;
  const xrefAt = length;
  let xref = `xref\n0 ${total + 1}\n0000000000 65535 f \n`;
  for (let id = 1; id <= total; id += 1) {
    xref += `${String(offsets[id]).padStart(10, '0')} 00000 n \n`;
  }
  chunks.push(`${xref}trailer\n<< /Size ${total + 1} /Root 1 0 R >>\nstartxref\n${xrefAt}\n%%EOF`);
  return new TextEncoder().encode(chunks.join(''));
}

export function downloadCv() {
  const bytes = buildCvPdf();
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Surbhi_Mundhe_CV.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
