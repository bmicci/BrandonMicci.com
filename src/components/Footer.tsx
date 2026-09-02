import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <style>{`
        .site-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 3rem;
          padding: 2rem 1.5rem;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem 1.5rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover,
        .footer-link:focus-visible {
          color: rgba(0, 212, 255, 0.9);
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.75rem;
        }

        @media (max-width: 640px) {
          .site-footer {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>

      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/experience" className="footer-link">
            Executive Experience
          </Link>
          <Link href="/articles" className="footer-link">
            Articles
          </Link>
          <Link href="/case-studies" className="footer-link">
            Case Studies
          </Link>
          <Link href="/contact" className="footer-link">
            Contact
          </Link>
          <Link href="/privacy" className="footer-link">
            Privacy Policy
          </Link>
        </nav>
        <p className="footer-copyright">
          &copy; {year} Brandon Micci. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
