import { useEffect, useState } from 'react';

/**
 * Returns true when the window has been scrolled past `threshold` pixels.
 * @param {number} [threshold=24]
 * @returns {boolean}
 */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > threshold);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
