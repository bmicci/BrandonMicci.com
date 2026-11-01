import Link from 'next/link';
import type { Metadata } from 'next';
import BmShell, { SITE_NAV } from '@/components/bm/BmShell';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <BmShell nav={SITE_NAV}>
      <section className="page-hero tall">
        <div className="wrap grid">
          <div className="copy">
            <div className="label">404</div>
            <h1>This page doesn’t exist.</h1>
            <p className="lead">
              It may have moved. These are good places to start.
            </p>
            <div className="actions">
              <Link className="btn" href="/">
                Home <span className="arrow"></span>
              </Link>
              <Link className="dl" href="/experience">
                Experience
              </Link>
              <Link className="dl" href="/case-studies">
                Case studies
              </Link>
              <Link className="dl" href="/articles">
                Writing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BmShell>
  );
}
