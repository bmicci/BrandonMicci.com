'use client';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brandon Micci",
    "jobTitle": "VP, Head of AI Products",
    "worksFor": {
      "@type": "Organization",
      "name": "JPMorgan Chase",
      "url": "https://www.jpmorganchase.com"
    },
    "url": "https://brandonmicci.com",
    "image": "https://brandonmicci.com/headshot.webp",
    "sameAs": [
      "https://linkedin.com/in/brandonmicci"
    ],
    "email": "brandonmicci@brandonmicci.com",
    "description": "VP Head of AI Products at JPMorgan Chase with expertise in enterprise AI strategy, digital transformation, and Fortune 500 innovation leadership. Successfully deployed LLM solutions to 27K+ users and generated $400M+ in revenue.",
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Digital Transformation", 
      "Enterprise AI Strategy",
      "LLM Deployment",
      "Generative AI",
      "Data Analytics",
      "Cloud Computing",
      "Financial Technology",
      "Innovation Leadership"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "The George Washington University"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Brandon Micci - AI Strategy Consulting",
    "url": "https://brandonmicci.com",
    "logo": "https://brandonmicci.com/brainlogo.png",
    "image": "https://brandonmicci.com/headshot.webp",
    "description": "Expert AI strategy consulting and digital transformation leadership for Fortune 500 companies. Specializing in enterprise AI implementation, LLM deployment, and innovation leadership.",
    "founder": {
      "@type": "Person",
      "name": "Brandon Micci"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Strategy Consulting",
      "Digital Transformation Leadership",
      "Enterprise AI Implementation", 
      "LLM Deployment Strategy",
      "Innovation Leadership",
      "Technology Executive Advisory",
      "Fortune 500 AI Executive Search",
      "VP Head of AI Products Recruitment",
      "Enterprise AI Transformation Consulting"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brandon Micci - AI Executive Portfolio",
    "url": "https://brandonmicci.com",
    "description": "Professional portfolio of Brandon Micci, VP Head of AI Products at JPMorgan Chase, showcasing AI transformation leadership and innovation expertise.",
    "author": {
      "@type": "Person",
      "name": "Brandon Micci"
    },
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
