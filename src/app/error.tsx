'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { bmFontVars } from '@/components/bm/fonts';
import '@/components/bm/bm.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={`bm ${bmFontVars}`}>
      <section className="page-hero tall">
        <div className="wrap grid">
          <div className="copy">
            <div className="label">Error</div>
            <h1>Something went wrong.</h1>
            <p className="lead">
              The page didn’t load. Try again, or go back to the homepage.
            </p>
            <div className="actions">
              <button className="btn" type="button" onClick={() => reset()}>
                Try again
              </button>
              <Link className="dl" href="/">
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
