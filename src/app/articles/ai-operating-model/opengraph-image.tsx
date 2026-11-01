import { ogCard, ogSize } from '@/components/bm/ogCard';

export const size = ogSize;
export const contentType = 'image/png';
export const alt =
  "Your AI Strategy Isn't the Problem. Your Operating Model Is. — Brandon Micci";

export default async function OpengraphImage() {
  return ogCard({
    eyebrow: 'Writing · AI operating model',
    title: 'Your AI Strategy Isn’t the Problem. Your Operating Model Is.',
    sub: 'What it actually takes to run AI at enterprise scale.',
    titleSize: 66,
  });
}
