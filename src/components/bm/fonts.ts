import {
  IBM_Plex_Mono,
  Inter,
  Inter_Tight,
  Source_Serif_4,
} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter-tight',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
  variable: '--font-source-serif',
});

export const bmFontVars = `${inter.variable} ${interTight.variable} ${plexMono.variable} ${sourceSerif.variable}`;
