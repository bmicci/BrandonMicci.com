'use client';

import Image from 'next/image';
import { useState } from 'react';

const EMAIL = 'brandon@brandonmicci.com';
const PHONE_DISPLAY = '(469) 708-8925';
const PHONE_LINK = '+14697088925';
const LINKEDIN = 'https://www.linkedin.com/in/brandonmicci';
const V1CE = 'https://link.v1ce.co/brandon.micci';

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  const execSubject = encodeURIComponent('Executive Opportunities – Brandon Micci');
  const speakSubject = encodeURIComponent('Speaking / Advisory Engagement – Brandon Micci');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <section aria-labelledby="contact-heading" className="mx-auto w-full max-w-3xl">
      <div className="rounded-3xl p-[1px] bg-gradient-to-r from-[#0E1B33] via-[#143057] to-[#0A0F1F] shadow-[0_0_25px_-10px_rgba(0,180,255,0.4)]">
        <div className="rounded-3xl bg-black/40 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center gap-4 p-6">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/headshot.webp"
                alt="Brandon Micci"
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 id="contact-heading" className="text-xl font-semibold text-white">
                Contact Brandon Micci
              </h1>
              <p className="text-sm text-white/70">
                VP, Head of AI Products • Enterprise AI Transformation Leader
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid gap-3 px-6 pb-6">
            <a
              href={`mailto:${EMAIL}?subject=${execSubject}`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
            >
              <span className="mr-2">✉️</span>
              Executive Inquiries — {EMAIL}
            </a>

            <a
              href={`mailto:${EMAIL}?subject=${speakSubject}`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
            >
              <span className="mr-2">🎤</span>
              Speaking & Advisory — {EMAIL}
            </a>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/brandon-micci.vcf"
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-r from-[#0E1B33] to-[#0A0F1F] px-4 py-3 text-sm font-medium text-white hover:from-[#143057] hover:to-[#0D1730] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
              >
                <span className="mr-2">📇</span>
                Download vCard
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white hover:bg-white/[0.1] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition"
              >
                <span className="mr-2">📎</span>
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>

          {/* Footer links */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 px-6 py-4 gap-3 sm:gap-0">
            <p className="text-xs text-white/60">
              Typical response time: <span className="text-white/80">within one business day</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href={V1CE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-cyan-400 transition"
              >
                v1ce Card
              </a>

              <a
                href={`tel:${PHONE_LINK}`}
                className="text-white/75 hover:text-cyan-400 transition"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
