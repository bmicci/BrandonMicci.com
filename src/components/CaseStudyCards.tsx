'use client';

export default function CaseStudyCards() {
  const caseStudies = [
    {
      title: "Scaled LLM to 27K+ Users",
      description: "Deployed multi-tenant guardrailed LLM platform; governance & ROI tracking built-in.",
      outcome: "Outcome: 30% cycle-time reduction",
      icon: "🚀"
    },
    {
      title: "$400M+ Revenue Generated",
      description: "Led enterprise AI strategy that secured major Fortune 500 contracts and partnerships.",
      outcome: "Outcome: 10-year strategic engagement",
      icon: "💰"
    },
    {
      title: "Fortune 500 Digital Transformation",
      description: "Modernized legacy systems across multiple industries while building adoption communities.",
      outcome: "Outcome: 250% ROI in 6 months",
      icon: "🏢"
    },
    {
      title: "Enterprise AI Architecture",
      description: "Designed and deployed petabyte-scale analytics architectures across global infrastructure.",
      outcome: "Outcome: 20% workforce optimization",
      icon: "⚡"
    },
    {
      title: "Cross-Industry Innovation",
      description: "Built transformative solutions spanning financial services, aviation, and consulting.",
      outcome: "Outcome: Industry-leading adoption",
      icon: "🌐"
    },
    {
      title: "C-Suite Advisory",
      description: "Translated complex AI strategies into clear business roadmaps and competitive advantages.",
      outcome: "Outcome: Strategic competitive edge",
      icon: "🎯"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {caseStudies.map((study, index) => (
        <article key={index} className="rounded-xl ring-1 ring-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors">
          <div className="text-2xl mb-3">{study.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
          <p className="opacity-80 mb-4">{study.description}</p>
          <div className="text-sm opacity-80 font-medium text-brand-cyan">{study.outcome}</div>
        </article>
      ))}
    </div>
  );
}
