'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  // final numeric value to animate to
  value: number;
  // suffix to show visually (e.g., 'M+', 'K+', '%', '+')
  suffix?: string;
  // duration in ms
  duration?: number;
  // optional format (e.g., 400 -> $400)
  format?: (n: number) => string | number;
};

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 1200,
  format,
}: Props) {
  const finalText = `${format ? format(value) : value}${suffix}`;
  const [display, setDisplay] = useState(finalText);
  const elRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    if (typeof window === 'undefined') return;
    const el = elRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      hasAnimated.current = true;
      return;
    }

    const rect = el.getBoundingClientRect();
    const inViewOnLoad = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewOnLoad) {
      // Above the fold on first paint — skip animation to avoid 0-flash / LCP hit
      hasAnimated.current = true;
      return;
    }

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      let start: number | null = null;
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min(1, (t - start) / duration);
        const current = Math.round(value * p);
        setDisplay(`${format ? format(current) : current}${suffix}`);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            animate();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, duration, format]);

  return (
    <span ref={elRef} aria-hidden="true">
      {display}
    </span>
  );
}
