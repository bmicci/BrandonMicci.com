import { useEffect } from 'react';

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const { body } = document;
    if (!body) return;
    const prev = body.style.overflow;
    if (locked) body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = prev;
    };
  }, [locked]);
}
