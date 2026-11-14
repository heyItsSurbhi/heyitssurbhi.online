import { statusLabel } from '../lib/content';

export default function StatusLabel({ status, template = false }) {
  const className = [
    'status',
    `status-${status}`,
    template ? 'status-template' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={className}>{template ? 'Preview template' : statusLabel(status)}</span>;
}
