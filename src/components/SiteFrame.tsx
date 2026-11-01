'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import BackgroundRoot from '@/components/BackgroundRoot';
import { isPortfolioPath } from '@/components/bm/routes';

// Public pages draw their own header, menu, main and footer. The internal /sig
// tools keep the old background and footer. Deciding on the client keeps this right after
// client-side navigation, when the root layout does not re-render.
export default function SiteFrame({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) {
  if (isPortfolioPath(usePathname())) return <>{children}</>;
  return (
    <>
      <BackgroundRoot />
      <main id="main" className="mt-8 md:mt-14">
        {children}
      </main>
      {footer}
    </>
  );
}
