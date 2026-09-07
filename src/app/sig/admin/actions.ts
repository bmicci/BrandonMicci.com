'use server';

import { revalidatePath } from 'next/cache';
import { SIG_SUPABASE_URL } from '@/lib/sig/config';

// Writes go through the secret key (server-only env var), which bypasses RLS.
// The page itself is gated by basic auth in src/proxy.ts.
export async function updateSigLink(formData: FormData) {
  const secretKey = process.env.SIG_SUPABASE_SECRET_KEY;
  if (!secretKey) throw new Error('SIG_SUPABASE_SECRET_KEY is not set');

  const slug = String(formData.get('slug') ?? '');
  const destination = String(formData.get('destination') ?? '').trim();
  const label = String(formData.get('label') ?? '').trim();
  const active = formData.get('active') === 'on';

  if (!/^[a-z0-9-]{1,64}$/.test(slug)) throw new Error('Invalid slug');
  if (!/^(https?:\/\/|tel:|mailto:)/.test(destination)) {
    throw new Error(
      'Destination must start with https://, http://, tel: or mailto:'
    );
  }

  const res = await fetch(
    `${SIG_SUPABASE_URL}/rest/v1/sig_links?slug=eq.${slug}`,
    {
      method: 'PATCH',
      headers: {
        apikey: secretKey,
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destination,
        label: label || null,
        active,
        updated_at: new Date().toISOString(),
      }),
    }
  );
  if (!res.ok)
    throw new Error(`Update failed: ${res.status} ${await res.text()}`);

  revalidatePath('/sig/admin');
}
