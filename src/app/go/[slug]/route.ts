import { after } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  SIG_SUPABASE_URL,
  SIG_SUPABASE_PUBLISHABLE_KEY,
  isBotUserAgent,
  deviceFromUserAgent,
} from '@/lib/sig/config';

// New-style sb_publishable_* keys are opaque (not JWTs): they go in the
// apikey header only — a Bearer Authorization header would be rejected.
const SUPABASE_HEADERS = {
  apikey: SIG_SUPABASE_PUBLISHABLE_KEY,
};

function redirect(location: string) {
  return new Response(null, {
    status: 302,
    headers: { Location: location, 'Cache-Control': 'no-store' },
  });
}

async function recordClick(slug: string, req: NextRequest) {
  const ua = req.headers.get('user-agent');
  const city = req.headers.get('x-vercel-ip-city');
  const body = {
    slug,
    user_agent: ua?.slice(0, 1000) ?? null,
    referrer: req.headers.get('referer')?.slice(0, 1000) ?? null,
    country: req.headers.get('x-vercel-ip-country') ?? null,
    city: city ? decodeURIComponent(city).slice(0, 200) : null,
    device: deviceFromUserAgent(ua),
  };
  try {
    await fetch(`${SIG_SUPABASE_URL}/rest/v1/sig_clicks`, {
      method: 'POST',
      headers: { ...SUPABASE_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    // Tracking must never break the redirect; drop the click on error.
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const homepage = new URL('/', req.url).toString();

  if (!/^[a-z0-9-]{1,64}$/.test(slug)) return redirect(homepage);

  let destination: string | null = null;
  try {
    const res = await fetch(
      `${SIG_SUPABASE_URL}/rest/v1/sig_links?slug=eq.${slug}&select=destination`,
      { headers: SUPABASE_HEADERS, cache: 'no-store' }
    );
    if (res.ok) {
      const rows: { destination: string }[] = await res.json();
      destination = rows[0]?.destination ?? null;
    }
  } catch {
    // Supabase unreachable → fall through to homepage.
  }

  // RLS only exposes active links, so missing and inactive both land here.
  if (!destination) return redirect(homepage);

  if (!isBotUserAgent(req.headers.get('user-agent'))) {
    after(() => recordClick(slug, req));
  }

  return redirect(destination);
}
