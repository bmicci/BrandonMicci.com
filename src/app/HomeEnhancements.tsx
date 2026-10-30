'use client';

import { useEffect } from 'react';

// Progressive enhancement for the homepage: theme toggle, phone menu and the
// scroll motion. The page is complete without it; with reduced motion the
// animations are skipped.
export default function HomeEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    const page = document.querySelector<HTMLElement>('.bm');
    if (!page) return;
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | Element | MediaQueryList,
      type: K | string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    // theme: the inline script in layout.tsx applies it on a full load; this
    // covers arriving here by client-side navigation. Leaving restores the
    // default so other pages are unaffected.
    try {
      let t = localStorage.getItem('bm-theme');
      if (!t)
        t = matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      root.classList.toggle('dark', t === 'dark');
    } catch {}
    cleanups.push(() => root.classList.remove('dark'));

    // theme toggle
    const themeBtn = page.querySelector<HTMLButtonElement>('.theme');
    const label = () =>
      themeBtn?.setAttribute(
        'aria-label',
        root.classList.contains('dark')
          ? 'Switch to light mode'
          : 'Switch to dark mode'
      );
    label();
    if (themeBtn)
      on(themeBtn, 'click', () => {
        const dark = root.classList.toggle('dark');
        try {
          localStorage.setItem('bm-theme', dark ? 'dark' : 'light');
        } catch {}
        label();
      });

    // phone menu
    const burger = page.querySelector<HTMLButtonElement>('.burger');
    const menu = page.querySelector<HTMLElement>('#menu');
    const setMenu = (open: boolean) => {
      root.classList.toggle('menu-open', open);
      document.body.classList.toggle('bm-lock', open);
      burger?.setAttribute('aria-expanded', String(open));
      burger?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) menu?.querySelector('a')?.focus({ preventScroll: true });
    };
    if (burger)
      on(burger, 'click', () => setMenu(!root.classList.contains('menu-open')));
    if (menu)
      on(menu, 'click', (e) => {
        if ((e.target as Element).closest('a')) setMenu(false);
      });
    on(window, 'keydown', (e) => {
      if (
        (e as KeyboardEvent).key === 'Escape' &&
        root.classList.contains('menu-open')
      ) {
        setMenu(false);
        burger?.focus();
      }
    });
    on(matchMedia('(min-width: 901px)'), 'change', (e) => {
      if ((e as MediaQueryListEvent).matches) setMenu(false);
    });
    cleanups.push(() => setMenu(false));

    // motion
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('IntersectionObserver' in window) {
      root.classList.add('m');
      cleanups.push(() => root.classList.remove('m'));
      page
        .querySelectorAll(
          '.sec-head, .sec-body > p, .quad > div, .roles li, .firms li, .about .sig, .quotes figure, .art, .topics li, .formats, .contact .l, .contact .r, .hero .copy > *'
        )
        .forEach((el) => el.classList.add('rv'));
      const count = (el: HTMLElement | null) => {
        if (!el) return;
        const txt = el.textContent ?? '';
        const m = txt.match(/[\d,]+/);
        if (!m || m.index === undefined) return;
        const end = +m[0].replace(/,/g, '');
        const pre = txt.slice(0, m.index);
        const post = txt.slice(m.index + m[0].length);
        const t0 = performance.now();
        const step = (t: number) => {
          const k = Math.min(1, (t - t0) / 1400);
          const v = Math.round(end * (1 - Math.pow(1 - k, 3)));
          el.textContent = pre + v.toLocaleString('en-US') + post;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add('in');
            io.unobserve(e.target);
            if (e.target.classList.contains('fig') && !reduce)
              count(e.target.querySelector<HTMLElement>('.n'));
          }),
        { threshold: 0.2 }
      );
      page.querySelectorAll('.rv, .fig').forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());

      // career progress rail
      const body = page.querySelector<HTMLElement>('.career .sec-body');
      const bar = page.querySelector<HTMLElement>('.rail i');
      if (body && bar && !reduce) {
        const rail = () => {
          const r = body.getBoundingClientRect();
          const p = Math.min(
            1,
            Math.max(0, (innerHeight * 0.7 - r.top) / r.height)
          );
          bar.style.setProperty('--p', p * 100 + '%');
        };
        on(window, 'scroll', rail, { passive: true });
        rail();
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
