'use client';
import { useEffect } from 'react';

export default function HashScrollOnLoad() {
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
  return null;
}
