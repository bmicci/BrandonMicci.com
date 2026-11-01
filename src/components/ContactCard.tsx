'use client';

import Image from 'next/image';
import Link from 'next/link';
import { track } from '@vercel/analytics';

// Digital business card, reached by NFC tap and from the email signature.
const LINKEDIN = 'https://linkedin.com/in/brandonmicci';
const EMAIL = 'brandon@brandonmicci.com';

export default function ContactCard() {
  const t = (action: string) => track('contact_card_action', { action });
  return (
    <div className="card">
      <Image
        className="card-photo"
        src="/headshot.webp"
        alt="Brandon Micci"
        width={96}
        height={96}
        priority
      />
      <h1>Brandon Micci</h1>
      <p className="card-title">
        Head of AI Strategy &amp; Business Transformation
      </p>
      <ul className="card-facts">
        <li>
          <b>27,000+</b>employees on an enterprise LLM platform
        </li>
        <li>
          <b>$50M+</b>documented savings
        </li>
        <li>
          <b>17+ years</b>in financial services, consulting and aviation
        </li>
      </ul>
      <div className="card-actions">
        <a
          className="btn"
          href="/brandon-micci.vcf"
          download
          onClick={() => t('save_contact')}
        >
          Save contact <span className="arrow"></span>
        </a>
        <a href={`mailto:${EMAIL}`} onClick={() => t('email')}>
          {EMAIL} <span>Email</span>
        </a>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => t('linkedin')}
        >
          linkedin.com/in/brandonmicci <span>LinkedIn</span>
        </a>
        <Link href="/" onClick={() => t('view_ai_portfolio')}>
          brandonmicci.com <span>Website</span>
        </Link>
      </div>
    </div>
  );
}
