'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function SmoothLink({
  toId,
  className,
  children,
}: {
  toId: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();
  
  const onClick = (e: React.MouseEvent) => {
    // Only prevent default if we're already on the homepage
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(toId);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    }
    // Otherwise, let Next.js handle the navigation to /#section
  };
  
  // Always link to homepage + hash so it works from any page
  return (
    <Link href={`/#${toId}`} onClick={onClick} className={className} scroll={false}>
      {children}
    </Link>
  );
}
