import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-[rgba(15,23,42,0.92)] to-[rgba(10,14,30,0.92)] p-8 md:p-12 shadow-2xl backdrop-blur-md text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
          404
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-white/85 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Try one of these instead:
        </p>

        <div className="mt-8 flex flex-col gap-3 max-w-md mx-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-r from-[#0E1B33] to-[#0A0F1F] px-5 py-3 text-sm font-medium text-white hover:from-[#14274d] hover:to-[#0f1a2f] transition"
          >
            Go to home
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/15 transition"
          >
            View case studies
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.08] hover:border-white/15 transition"
          >
            Contact Brandon
          </Link>
        </div>
      </section>
    </div>
  );
}
