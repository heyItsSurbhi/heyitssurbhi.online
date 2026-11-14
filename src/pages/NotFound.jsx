import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');

  return (
    <main id="main" className="page-hero">
      <div className="wrap-narrow">
        <h1>This page is not part of the room</h1>
        <p>
          Return to <Link to="/">the work index</Link>.
        </p>
      </div>
    </main>
  );
}
