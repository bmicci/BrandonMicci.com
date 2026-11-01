import { ogCard, ogSize } from '@/components/bm/ogCard';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Writing by Brandon Micci';

export default async function OpengraphImage() {
  return ogCard({
    eyebrow: 'Writing',
    title: 'Articles & Frameworks',
    sub: 'AI operating models, governance, delivery and adoption at enterprise scale.',
    titleSize: 88,
  });
}
