import type { Metadata } from 'next';
import { SIG_SUPABASE_URL } from '@/lib/sig/config';
import { updateSigLink } from './actions';

export const metadata: Metadata = {
  title: { absolute: 'Signature Links Admin' },
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

type SigLink = {
  slug: string;
  destination: string;
  label: string | null;
  active: boolean;
  updated_at: string;
};

async function loadLinks(secretKey: string): Promise<SigLink[]> {
  const res = await fetch(
    `${SIG_SUPABASE_URL}/rest/v1/sig_links?select=*&order=slug`,
    {
      headers: { apikey: secretKey },
      cache: 'no-store',
    }
  );
  if (!res.ok) throw new Error(`Failed to load links: ${res.status}`);
  return res.json();
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '6px 10px',
  borderRadius: 8,
  border: '1px solid #334155',
  background: '#0f172a',
  color: '#e2e8f0',
  fontSize: 14,
};

export default async function SigAdminPage() {
  const secretKey = process.env.SIG_SUPABASE_SECRET_KEY;
  if (!secretKey) {
    return (
      <div className="container text-slate-100" style={{ maxWidth: 680 }}>
        <h1 className="text-2xl font-bold mt-4 mb-2">Signature links</h1>
        <p className="text-slate-300">
          <code>SIG_SUPABASE_SECRET_KEY</code> is not configured, so link
          editing is disabled. Add it (the Supabase secret/service-role key) to
          the environment and redeploy.
        </p>
      </div>
    );
  }

  const links = await loadLinks(secretKey);

  return (
    <div
      className="container text-slate-100"
      style={{ maxWidth: 680, paddingBottom: 64 }}
    >
      <h1 className="text-2xl font-bold mt-4 mb-1">Signature links</h1>
      <p className="text-sm text-slate-300 mb-6">
        Each slug is what the signature links to via{' '}
        <code>brandonmicci.com/go/&lt;slug&gt;</code>. Changes take effect on
        the next click — no redeploy, no re-pasting the signature.
      </p>

      {links.map((link) => (
        <form
          key={link.slug}
          action={updateSigLink}
          style={{
            border: '1px solid #1e293b',
            borderRadius: 12,
            padding: '14px 16px',
            marginBottom: 14,
            background: 'rgba(15, 23, 42, 0.6)',
          }}
        >
          <input type="hidden" name="slug" value={link.slug} />
          <div className="flex items-center justify-between mb-2">
            <strong style={{ fontSize: 15 }}>/go/{link.slug}</strong>
            <label className="text-sm text-slate-300">
              <input
                type="checkbox"
                name="active"
                defaultChecked={link.active}
                style={{ marginRight: 6 }}
              />
              active
            </label>
          </div>
          <label className="block text-xs text-slate-400 mb-1">
            Destination
            <input
              name="destination"
              defaultValue={link.destination}
              style={inputStyle}
              required
            />
          </label>
          <label className="block text-xs text-slate-400 mb-2">
            Label
            <input
              name="label"
              defaultValue={link.label ?? ''}
              style={inputStyle}
            />
          </label>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">
              updated {new Date(link.updated_at).toLocaleString('en-US')}
            </span>
            <button
              type="submit"
              style={{
                padding: '6px 16px',
                borderRadius: 8,
                border: 'none',
                background: '#3B82F6',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Save
            </button>
          </div>
        </form>
      ))}
    </div>
  );
}
