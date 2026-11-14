import { Link } from 'react-router-dom';
import { isPreview } from '../lib/content';
import { site } from '../data/site';

export default function PreviewBanner() {
  if (!isPreview(site)) return null;

  return (
    <div className="preview-banner">
      <div className="wrap">
        Development preview — missing facts are marked in amber. This is not ready to send to hiring
        managers.{' '}
        <Link to="/#checklist">Publication checklist</Link>
      </div>
    </div>
  );
}
