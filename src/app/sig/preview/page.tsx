import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Email Signature Preview' },
  robots: { index: false, follow: false },
};

function loadSignature() {
  const file = path.join(process.cwd(), 'public', 'sig', 'signature.html');
  const raw = fs.readFileSync(file, 'utf8');
  // Strip the authoring comment so the preview (and copy-paste) is just the signature markup.
  const html = raw.replace(/^<!--[\s\S]*?-->\s*/, '');
  return { html, bytes: Buffer.byteLength(html, 'utf8') };
}

function MockEmail({ dark, html }: { dark: boolean; html: string }) {
  const frame = dark
    ? { bg: '#111827', text: '#e5e7eb', meta: '#9ca3af', border: '#374151' }
    : { bg: '#ffffff', text: '#1f2937', meta: '#6b7280', border: '#e5e7eb' };
  return (
    <div
      style={{
        background: frame.bg,
        color: frame.text,
        border: `1px solid ${frame.border}`,
        borderRadius: 12,
        padding: '20px 24px',
        fontFamily:
          "-apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontSize: 14,
        lineHeight: 1.5,
      }}
    >
      <div
        style={{
          borderBottom: `1px solid ${frame.border}`,
          paddingBottom: 12,
          marginBottom: 16,
        }}
      >
        <div style={{ fontWeight: 600 }}>Re: Following up from Tuesday</div>
        <div style={{ color: frame.meta, fontSize: 12, marginTop: 2 }}>
          Brandon Micci &lt;brandon@brandonmicci.com&gt; · to Jane
        </div>
      </div>
      <p style={{ margin: '0 0 4px' }}>Jane,</p>
      <p style={{ margin: '0 0 4px' }}>
        Great speaking with you — sending over the materials we discussed.
      </p>
      <p style={{ margin: '0 0 20px' }}>Best,</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default function SignaturePreviewPage() {
  const { html, bytes } = loadSignature();
  const kb = (bytes / 1024).toFixed(1);
  // Serve the headshot from this deployment so the preview works locally and
  // on branch previews, where the production URL may not exist yet.
  const localHtml = html.replace(
    'src="https://brandonmicci.com/sig/headshot.png"',
    'src="/sig/headshot.png"'
  );
  return (
    <div
      className="container text-slate-100"
      style={{ maxWidth: 760, paddingBottom: 64 }}
    >
      <h1 className="text-2xl font-bold mt-4 mb-2">Email signature preview</h1>
      <p className="text-sm text-slate-300 mb-6">
        Signature HTML: {kb} KB (limit 15 KB). Source of truth:{' '}
        <code>public/sig/signature.html</code>. To install: select and copy the
        signature block below (light version), then paste into Gmail → Settings
        → Signature.
      </p>

      <h2 className="text-lg font-semibold mb-2">Light</h2>
      <MockEmail dark={false} html={localHtml} />

      <h2 className="text-lg font-semibold mt-8 mb-2">
        Dark background (worst case — no color inversion)
      </h2>
      <p className="text-sm text-slate-300 mb-2">
        Gmail and Apple Mail recolor dark text automatically in dark mode; this
        panel checks the un-inverted worst case (accents, links, image edges).
      </p>
      <MockEmail dark html={localHtml} />

      <h2 className="text-lg font-semibold mt-8 mb-2">Images blocked</h2>
      <MockEmail
        dark={false}
        html={localHtml.replace(
          'src="/sig/headshot.png"',
          'src="about:invalid"'
        )}
      />
    </div>
  );
}
