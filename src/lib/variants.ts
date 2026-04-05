export interface DrinkVariant {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  frameCount: number;
  sequenceBaseUrl: string;
  modeOverride?: 'dark' | 'light';
}

export const DRINK_VARIANTS: DrinkVariant[] = [
  {
    id: 'cherry',
    name: 'CHERRY',
    subtitle: 'VINTAGE SODA',
    description: 'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    themeColor: '#D32F2F',
    frameCount: 240,
    sequenceBaseUrl: 'https://omqaodalyvzbrvckcumi.supabase.co/storage/v1/object/public/assets/soda/frame_',
  },
  {
    id: 'grape',
    name: 'GRAPE',
    subtitle: 'FUNCTIONAL SODA',
    description: 'A modern functional soda brand inspired by classic flavors but made with better ingredients.',
    themeColor: '#7B1FA2',
    frameCount: 240,
    sequenceBaseUrl: 'https://omqaodalyvzbrvckcumi.supabase.co/storage/v1/object/public/assets/soda2/frame_',
  },
  {
    id: 'lemon',
    name: 'LEMON',
    subtitle: 'GINGER SODA',
    description: 'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    themeColor: '#FBC02D',
    frameCount: 240,
    sequenceBaseUrl: 'https://omqaodalyvzbrvckcumi.supabase.co/storage/v1/object/public/assets/soda3/frame_',
  },
];

export function getFrameUrl(variant: DrinkVariant, frameIndex: number): string {
  const paddedIndex = String(frameIndex).padStart(4, '0');
  return `${variant.sequenceBaseUrl}${paddedIndex}.webp`;
}

export function getAllFrameUrls(variant: DrinkVariant): string[] {
  const urls: string[] = [];
  for (let i = 1; i <= variant.frameCount; i++) {
    urls.push(getFrameUrl(variant, i));
  }
  return urls;
}
