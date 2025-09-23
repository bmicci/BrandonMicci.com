'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

type NavItem = { label: string; href: string; scrollId?: string };

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Strategic Advantage',
    href: '#strategic-vision',
    scrollId: 'strategic-vision',
  },
  {
    label: 'Executive Experience',
    href: '#executive-experience',
    scrollId: 'executive-experience',
  },
  {
    label: 'Transformation Leadership',
    href: '#transformation-leadership',
    scrollId: 'transformation-leadership',
  },
  { label: 'Connect', href: '#connectwithme', scrollId: 'connectwithme' },
];

export default function AccessibleNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const reduced = usePrefersReducedMotion();

  // Lock background scroll when menu is open
  useLockBodyScroll(open);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Focus the first link when opening
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  // Click outside to close (mobile panel)
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const handleAnchor = (e: React.MouseEvent, id?: string) => {
    if (!id) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 60; // adjust for header height
    window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.7);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-link {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
          letter-spacing: -0.01em;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .brand-link:hover {
          color: white;
        }

        .desktop-nav {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 2rem;
          }
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.2s ease;
          border-radius: 4px;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link:focus-visible {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }

        .mobile-toggle {
          display: block;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 4px;
          transition: color 0.2s ease;
        }

        .mobile-toggle:hover {
          color: white;
        }

        .mobile-toggle:focus-visible {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }

        @media (min-width: 768px) {
          .mobile-toggle {
            display: none;
          }
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(0, 0, 0, 0.7);
        }

        @media (min-width: 768px) {
          .mobile-overlay {
            display: none;
          }
        }

        .mobile-panel {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 20rem;
          max-width: 85vw;
          background: rgba(0, 0, 0, 0.9);
          padding: 1.5rem;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .mobile-title {
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }

        .close-button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem;
          cursor: pointer;
          border-radius: 4px;
          transition: color 0.2s ease;
        }

        .close-button:hover {
          color: white;
        }

        .close-button:focus-visible {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          padding: 0.75rem 0;
          transition: color 0.2s ease;
          border-radius: 4px;
        }

        .mobile-nav-link:hover {
          color: white;
        }

        .mobile-nav-link:focus-visible {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }
      `}</style>

      <header className="nav-header">
        <nav role="navigation" aria-label="Main" className="nav-container">
          {/* Brand */}
          <Link href="/" className="brand-link">
            Brandon Micci
          </Link>

          {/* Desktop */}
          <ul className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.scrollId ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchor(e, item.scrollId)}
                    className="nav-link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="mobile-toggle"
          >
            Menu
          </button>
        </nav>

        {/* Mobile overlay */}
        {open && (
          <div role="dialog" aria-modal="true" className="mobile-overlay">
            <div ref={panelRef} className="mobile-panel">
              <div className="mobile-header">
                <span className="mobile-title">Menu</span>
                <button
                  className="close-button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>

              <ul className="mobile-nav-list">
                {NAV_ITEMS.map((item, i) => (
                  <li key={item.label}>
                    {item.scrollId ? (
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={(e) => handleAnchor(e, item.scrollId)}
                        className="mobile-nav-link"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        ref={
                          i === 0
                            ? (firstLinkRef as React.RefObject<HTMLAnchorElement>)
                            : undefined
                        }
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="mobile-nav-link"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
