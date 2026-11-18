import localFont from 'next/font/local';

// Self-hosted instead of next/font/google so production builds never depend
// on downloading from Google Fonts (a failed fetch broke a deploy). Files are
// the same latin subsets Google serves, from the Fontsource packages; see
// fonts/LICENSE.txt.
const inter = localFont({
  src: [
    { path: './fonts/inter-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/inter-latin-500-normal.woff2', weight: '500' },
    { path: './fonts/inter-latin-600-normal.woff2', weight: '600' },
  ],
  display: 'swap',
  variable: '--font-inter',
});
const interTight = localFont({
  src: [
    { path: './fonts/inter-tight-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/inter-tight-latin-500-normal.woff2', weight: '500' },
    { path: './fonts/inter-tight-latin-600-normal.woff2', weight: '600' },
  ],
  display: 'swap',
  variable: '--font-inter-tight',
});
const plexMono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500' },
  ],
  display: 'swap',
  variable: '--font-plex-mono',
});
const sourceSerif = localFont({
  src: './fonts/source-serif-4-latin-400-italic.woff2',
  weight: '400',
  style: 'italic',
  display: 'swap',
  variable: '--font-source-serif',
});

export const bmFontVars = `${inter.variable} ${interTight.variable} ${plexMono.variable} ${sourceSerif.variable}`;
