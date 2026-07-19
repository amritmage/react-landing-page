import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    if (hash) return undefined;
    window.scrollTo({ top: 0, left: 0 });
    return undefined;
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return undefined;

    const id = hash.replace('#', '');
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [pathname, hash, search]);

  return null;
};

export default ScrollToHash;
