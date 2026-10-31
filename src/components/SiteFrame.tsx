'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import BackgroundRoot from '@/components/BackgroundRoot';
import FloatingCTA from '@/components/FloatingCTA';
import { BM_ROUTES } from '@/components/bm/routes';

// The portfolio pages draw their own header, menu, main and footer. Every other page
// gets the site-wide chrome. Deciding on the client keeps this right after
// client-side navigation, when the root layout does not re-render.
export default function SiteFrame({
  children,
  footer,
}: {
  children: ReactNode;
  footer: ReactNode;
}) {
  if (BM_ROUTES.includes(usePathname())) return <>{children}</>;
  return (
    <>
      <Navigation />
      <Breadcrumbs />
      <BackgroundRoot />
      <FloatingCTA />
      <main id="main" className="mt-8 md:mt-14">
        {children}
      </main>
      {footer}
    </>
  );
}
