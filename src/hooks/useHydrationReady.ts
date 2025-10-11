'use client';
import { useEffect, useState } from 'react';

export function useHydrationReady(delay = 1) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);
  // Optionally delay one more frame for heavy effects
  useEffect(() => {
    if (!ready || delay <= 0) return;
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [ready, delay]);
  return ready;
}
