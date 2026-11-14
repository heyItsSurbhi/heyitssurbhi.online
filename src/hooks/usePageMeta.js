import { useEffect } from 'react';
import { site } from '../data/site';

export default function usePageMeta(title, description) {
  useEffect(() => {
    const pageTitle = title ? `${title} · ${site.name}` : `${site.name} · ${site.title}`;
    document.title = pageTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description || site.metaDescription);
    }
  }, [title, description]);
}
