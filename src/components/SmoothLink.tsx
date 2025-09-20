'use client';
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
  const reduced = usePrefersReducedMotion();
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(toId);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  };
  return (
    <a href={`#${toId}`} onClick={onClick} className={className}>
      {children}
    </a>
  );
}
