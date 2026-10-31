import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import BmEnhancements from './BmEnhancements';
import { bmFontVars } from './fonts';
import './bm.css';

export type BmNavItem = { href: string; label: string };

// Header, phone menu and footer shared by the portfolio pages. The homepage
// links to its own sections; the inner pages link across the site.
export const HOME_NAV: BmNavItem[] = [
  { href: '#career', label: 'Career' },
  { href: '#results', label: 'Results' },
  { href: '#writing', label: 'Writing' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#contact', label: 'Contact' },
];

export const SITE_NAV: BmNavItem[] = [
  { href: '/experience', label: 'Experience' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/articles', label: 'Writing' },
  { href: '#contact', label: 'Contact' },
];

function NavLink({
  item,
  current,
  children,
}: {
  item: BmNavItem;
  current?: string;
  children: ReactNode;
}) {
  const aria = item.href === current ? ('page' as const) : undefined;
  if (item.href.startsWith('#'))
    return (
      <a href={item.href} aria-current={aria}>
        {children}
      </a>
    );
  return (
    <Link href={item.href} aria-current={aria}>
      {children}
    </Link>
  );
}

export default function BmShell({
  nav,
  current,
  home = false,
  children,
}: {
  nav: BmNavItem[];
  current?: string;
  home?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`bm ${bmFontVars}`}>
      <header className="top">
        <div className="wrap">
          {home ? (
            <a className="wordmark" href="#main">
              Brandon Micci
            </a>
          ) : (
            <Link className="wordmark" href="/">
              Brandon Micci
            </Link>
          )}
          <div className="right">
            <nav aria-label="Primary">
              {nav.map((item) => (
                <NavLink key={item.href} item={item} current={current}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              className="icon-btn theme"
              type="button"
              aria-label="Switch to dark mode"
            >
              <svg
                className="moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
              </svg>
              <svg
                className="sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </button>
            <button
              className="icon-btn burger"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div
        className="menu"
        id="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <ol>
          {(home
            ? nav
            : [{ href: '/', label: 'Home' } as BmNavItem, ...nav]
          ).map((item, i) => (
            <li key={item.href} style={{ '--i': i } as CSSProperties}>
              <NavLink item={item} current={current}>
                <small>{String(i + 1).padStart(2, '0')}</small>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ol>
        <div className="foot">
          <a className="btn" href="#contact">
            Get in touch <span className="arrow"></span>
          </a>
          <span>brandon@brandonmicci.com · Dallas, Texas</span>
        </div>
      </div>

      <main id="main">{children}</main>

      <footer>
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} Brandon Micci · Dallas, Texas
          </span>
          <nav aria-label="Footer">
            {home ? null : <Link href="/">Home</Link>}
            <Link href="/experience">Experience</Link>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/articles">Writing</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
          <p className="disc">
            Views expressed on this site are my own and do not represent those
            of any current or former employer.
          </p>
        </div>
      </footer>
      <BmEnhancements />
    </div>
  );
}

// The closing contact band, the same on every portfolio page.
export function BmContact({ intro }: { intro?: string }) {
  return (
    <section className="contact" id="contact">
      <div className="wrap grid">
        <div className="l">
          <div className="label onNavy">Contact</div>
          <h2>Let’s compare notes.</h2>
          <p>
            {intro ??
              'For speaking invitations, podcasts, panels, and conversations with other leaders working on enterprise AI.'}
          </p>
        </div>
        <div className="r">
          <a href="mailto:brandon@brandonmicci.com">
            brandon@brandonmicci.com <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/brandonmicci"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/brandonmicci <span>LinkedIn</span>
          </a>
          <a
            href="/BrandonMicciResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <span>PDF</span>
          </a>
          <a
            href="/executive-brief.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Executive brief <span>PDF, one page</span>
          </a>
        </div>
      </div>
    </section>
  );
}
