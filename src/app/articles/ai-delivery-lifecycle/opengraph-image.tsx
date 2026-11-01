import { ogCard, ogSize } from '@/components/bm/ogCard';

export const size = ogSize;
export const contentType = 'image/png';
export const alt =
  "Your AI Pilot Didn't Fail. It Was Never Designed to Ship. — Brandon Micci";

export default async function OpengraphImage() {
  return ogCard({
    eyebrow: 'Writing · AI delivery lifecycle',
    title: 'Your AI Pilot Didn’t Fail. It Was Never Designed to Ship.',
    sub: 'A delivery lifecycle designed for AI, from experiment to operations.',
    titleSize: 66,
  });
}
