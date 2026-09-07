// Smart-signature configuration: Supabase endpoint and the bot/link-scanner
// user-agent list. Keep the bot list here so it can grow without touching
// route logic.

export const SIG_SUPABASE_URL =
  process.env.SIG_SUPABASE_URL ?? 'https://ptrcyxqybzqwwkridvze.supabase.co';

// Publishable key — safe to ship in code. Row-level security limits it to
// reading active sig_links and inserting sig_clicks.
export const SIG_SUPABASE_PUBLISHABLE_KEY =
  process.env.SIG_SUPABASE_PUBLISHABLE_KEY ??
  'sb_publishable_bBd2t8suh63RkjR94k7ZIA_Tnan3U4-';

// Email-client image proxies, corporate link scanners, and social preview
// bots. Matched case-insensitively against the User-Agent; hits still get
// redirected but produce no sig_clicks row.
const BOT_UA_PATTERNS: RegExp[] = [
  /GoogleImageProxy/i, // Gmail image proxy
  /Google-Safety/i,
  /GoogleDocs/i,
  /SafeLinks/i, // Outlook SafeLinks
  /BingPreview/i,
  /ms-?office/i,
  /Microsoft Office/i,
  /Outlook/i,
  /Slackbot|Slack-ImgProxy/i,
  /LinkedInBot/i,
  /Twitterbot/i,
  /facebookexternalhit|Facebot/i,
  /WhatsApp/i,
  /TelegramBot/i,
  /Discordbot/i,
  /SkypeUriPreview/i,
  /Barracuda|Mimecast|Proofpoint|MessageLabs|Symantec/i,
  /bot|crawler|spider|scanner|preview|monitor|curl\/|wget\//i,
];

export function isBotUserAgent(ua: string | null): boolean {
  if (!ua) return true; // no UA at all → almost certainly not a human click
  return BOT_UA_PATTERNS.some((re) => re.test(ua));
}

export function deviceFromUserAgent(
  ua: string | null
): 'mobile' | 'desktop' | 'unknown' {
  if (!ua) return 'unknown';
  return /Mobi|Android|iPhone|iPad|iPod/i.test(ua) ? 'mobile' : 'desktop';
}
