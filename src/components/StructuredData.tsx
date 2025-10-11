'use client';

export default function StructuredData() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Brandon Micci",
      jobTitle: "VP, Head of AI Products",
      url: "https://brandonmicci.com",
      sameAs: [
        "https://www.linkedin.com/in/brandonmicci",
        "https://github.com/bmicci"
      ],
      knowsAbout: [
        "Enterprise AI Strategy", "LLM Deployment", "Data Platforms",
        "Digital Transformation", "AI Product Management"
      ],
      worksFor: {
        "@type": "Organization",
        name: "JPMorgan Chase",
        url: "https://www.jpmorganchase.com"
      },
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Head of AI Products",
          description: "Scaled enterprise AI and LLM products to 27K+ users."
        },
        {
          "@type": "Occupation",
          name: "AI/Digital Transformation Leader",
          description: "Fortune 500 AI at scale, platform strategy, ROI acceleration."
        }
      ],
      affiliation: [
        { "@type": "Organization", name: "Ernst & Young (EY)" },
        { "@type": "Organization", name: "Southwest Airlines" },
        { "@type": "Organization", name: "Capgemini" },
        { "@type": "Organization", name: "Citi" },
        { "@type": "Organization", name: "Capital One" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Brandon Micci",
      url: "https://brandonmicci.com",
      logo: "https://brandonmicci.com/android-chrome-192x192.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Brandon Micci - AI Executive Portfolio",
      url: "https://brandonmicci.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://brandonmicci.com/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <>
      {data.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
