import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function makeNonce() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  // base64 for CSP nonces
  return Buffer.from(bytes).toString('base64');
}

export function middleware(req: NextRequest) {
  const nonce = makeNonce();

  // Forward nonce to server components (layout can read it)
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-csp-nonce', nonce);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  // Strict CSP with nonce — allows:
  // - our own scripts ('self') that carry the matching nonce
  // - Vercel Insights & Analytics
  // - Google Analytics endpoints
  res.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' https://vercel.live https://*.vercel-insights.com https://*.vercel-analytics.com https://www.googletagmanager.com https://www.google-analytics.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data: https:",
      "connect-src 'self' https: https://vercel.live https://*.vercel-insights.com https://*.vercel-analytics.com https://www.google-analytics.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; ')
  );

  // Strict HTTPS transport (HSTS)
  res.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );

  // Referrer policy
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Frame protection
  res.headers.set('X-Frame-Options', 'DENY');

  // MIME type sniffing protection
  res.headers.set('X-Content-Type-Options', 'nosniff');

  // Permissions policy (formerly Feature-Policy)
  res.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  // XSS protection (legacy but still useful)
  res.headers.set('X-XSS-Protection', '1; mode=block');

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
