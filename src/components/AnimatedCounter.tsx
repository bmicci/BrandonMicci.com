'use client';

import { useEffect, useRef } from 'react';

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
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) {
      el.current.textContent = `${format ? format(value) : value}${suffix}`;
      return;
    }

    let start: number | null = null;
    const startVal = 0;
    const diff = value - startVal;

    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      const current = Math.round(startVal + diff * p);
      el.current!.textContent = `${format ? format(current) : current}${suffix}`;
      if (p < 1) requestAnimationFrame(step);
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [value, suffix, duration, format]);

  return <span ref={el} aria-hidden="true" />;
}
