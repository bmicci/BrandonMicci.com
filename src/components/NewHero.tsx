'use client';

import Image from 'next/image';

export default function NewHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
        VP, Head of AI Products & Enterprise AI Transformation Leader
      </h1>
      <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-prose opacity-90">
        16+ years delivering <strong>$400M+</strong> in value to the enterprise, scaling AI to <strong>27K+</strong> users, and shipping outcomes that stick.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center justify-center px-5 py-3 rounded-lg min-h-[44px] bg-cyan-400/90 text-black font-medium hover:bg-cyan-300"
          href="https://www.linkedin.com/in/brandonmicci"
        >
          Connect on LinkedIn
        </a>
        <a className="inline-flex items-center justify-center px-5 py-3 rounded-lg min-h-[44px] ring-1 ring-white/20" href="/Brandon_Micci_AI_Executive_Brief_2025.pdf">
          Executive Brief
        </a>
      </div>

      {/* KPIs with stable widths */}
      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { value: '$400M+', label: 'Value Delivered' },
          { value: '27K+', label: 'AI Users' },
          { value: '30%', label: 'Typical ROI' },
          { value: '16+', label: 'Years Leading' },
        ].map((kpi) => (
          <li key={kpi.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-semibold [font-variant-numeric:tabular-nums]">
              {kpi.value}
            </div>
            <div className="text-xs sm:text-sm opacity-80">{kpi.label}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
