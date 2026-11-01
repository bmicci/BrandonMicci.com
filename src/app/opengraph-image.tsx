import { ogCard, ogSize } from '@/components/bm/ogCard';

export const size = ogSize;
export const contentType = 'image/png';
export const alt =
  'Brandon Micci, enterprise AI and business transformation executive';

export default async function OpengraphImage() {
  return ogCard({
    eyebrow: 'Enterprise AI · Data · Transformation',
    title: 'Making enterprise AI deliver measurable results.',
    sub: 'Seventeen years leading AI, data and transformation at JPMorgan Chase, Citi, Southwest Airlines, EY and Capital One.',
    titleSize: 76,
  });
}
