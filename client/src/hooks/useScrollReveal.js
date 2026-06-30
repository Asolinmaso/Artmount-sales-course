import { useEffect, useRef, useState } from 'react';

/**
 * Hook that returns a ref and visibility state driven by IntersectionObserver.
 * Visibility toggles true on entering the viewport and false on leaving,
 * so content appears when scrolling down and disappears when scrolling up.
 *
 * @param {Object} options
 * @param {number} options.threshold  – fraction of element visible before triggering (default 0.15)
 * @param {string} options.rootMargin – rootMargin for IntersectionObserver (default '0px')
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle — appear on enter, disappear on leave
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

/**
 * Utility that counts from 0 up to `end` over `duration` ms when `active` becomes true.
 * Resets to 0 when `active` becomes false (scroll-up disappear).
 */
export function useCountUp(end, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) {
      // Reset when hidden so it re-animates next time
      cancelAnimationFrame(rafRef.current);
      setCount(0);
      return;
    }

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, end, duration]);

  return count;
}
