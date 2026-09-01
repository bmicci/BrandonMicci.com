'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const BREADCRUMB_PATHS: Record<string, BreadcrumbItem[]> = {
  '/': [{ name: 'Home', href: '/' }],
  '/contact': [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
  ],
  '/privacy': [
    { name: 'Home', href: '/' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  '/experience': [
    { name: 'Home', href: '/' },
    { name: 'Executive Experience', href: '/experience' },
  ],
  '/case-studies': [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  '/contactcard': [
    { name: 'Home', href: '/' },
    { name: 'Digital Business Card', href: '/contactcard' },
  ],
  '/articles': [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
  ],
  '/articles/ai-operating-model': [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'The AI Operating Model', href: '/articles/ai-operating-model' },
  ],
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbs = BREADCRUMB_PATHS[pathname];

  // Don't show breadcrumbs on the homepage, or on unmapped routes (e.g. 404) —
  // a lone "Home" crumb marked as the current page would misdescribe those.
  if (pathname === '/' || !breadcrumbs) {
    return null;
  }

  return (
    <>
      <style jsx>{`
        .breadcrumbs {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem 0;
        }

        .breadcrumb-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .breadcrumb-link {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .breadcrumb-link:hover {
          color: rgba(0, 212, 255, 0.9);
        }

        .breadcrumb-link.current {
          color: rgba(255, 255, 255, 0.9);
          pointer-events: none;
        }

        .breadcrumb-separator {
          color: rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .breadcrumbs {
            padding: 0.75rem 1.5rem 0;
          }

          .breadcrumb-link {
            font-size: 0.8125rem;
          }
        }
      `}</style>

      <nav
        className="breadcrumbs"
        aria-label="Breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="breadcrumb-list">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={item.href}
                className="breadcrumb-item"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span
                    className="breadcrumb-link current"
                    itemProp="name"
                    aria-current="page"
                  >
                    {isFirst && <Home size={14} />}
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="breadcrumb-link"
                      itemProp="item"
                    >
                      {isFirst && <Home size={14} />}
                      <span itemProp="name">{item.name}</span>
                    </Link>
                    <meta itemProp="position" content={String(index + 1)} />
                    <span className="breadcrumb-separator" aria-hidden="true">
                      <ChevronRight size={14} />
                    </span>
                  </>
                )}
                {isLast && (
                  <meta itemProp="position" content={String(index + 1)} />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
