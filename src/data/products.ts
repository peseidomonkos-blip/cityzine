import type { Product } from '@/types';

export const products: Product[] = [
  // ─── TEES ───────────────────────────────────────────────────────────────────
  {
    id: 'prod_001',
    slug: 'speaker-tee-white',
    name: 'Speaker Tee — White',
    price: 4800,
    description:
      'DJ sound system illustration on the back, bubble-letter CITY ZINE logo on the chest. Black screen print on heavyweight white cotton.',
    category: 'tees',
    images: [
      '/products/tees/speaker-tee-white.jpg',
      '/products/tees/speaker-tee-white-front.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    bgColor: '#ffffff',
    details: [
      'Heavyweight cotton',
      'Screen-printed front & back',
      'Relaxed fit',
    ],
  },
  {
    id: 'prod_002',
    slug: 'speaker-tee-black',
    name: 'Speaker Tee — Black',
    price: 4800,
    description:
      'Same speaker illustration, inverted. White print on black heavyweight cotton. The night version.',
    category: 'tees',
    images: [
      '/products/tees/speaker-tee-black.jpg',
      '/products/tees/speaker-tee-black-front.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    bgColor: '#000000',
    details: [
      'Heavyweight cotton',
      'Screen-printed front & back',
      'Relaxed fit',
    ],
  },
  {
    id: 'prod_003',
    slug: 'nascar-tee',
    name: 'NASCAR Tee',
    price: 5200,
    description:
      'Race car #73 smashing through a brick wall. Checkered flag, debris, chaos. Small CITYZINE chest print on front. White cotton.',
    category: 'tees',
    images: [
      '/products/tees/nascar-tee.jpg',
      '/products/tees/nascar-artwork.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    bgColor: '#ffffff',
    details: [
      'Heavyweight cotton',
      'Front chest logo + full back print',
      'Original illustration',
      'Limited run',
    ],
  },
  {
    id: 'prod_004',
    slug: 'target-tee',
    name: 'Target Tee',
    price: 4800,
    description:
      'Shooting target graphic on the back, CITYZINE bullet motif on the chest. Clean, minimal, confrontational.',
    category: 'tees',
    images: ['/products/tees/target-tee.jpg'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: false,
    bgColor: '#ffffff',
    details: [
      'Heavyweight cotton',
      'Screen-printed front & back',
      'White base',
    ],
  },

  {
    id: 'prod_008',
    slug: 'langos-tee',
    name: 'Lángos Tee',
    price: 4800,
    description:
      'CITYZINE x Lángos collaboration tee. Limited run.',
    category: 'tees',
    images: ['/archive/Clothes/langos_polo.jpg'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    featured: true,
    bgColor: '#ffffff',
    details: [
      'Heavyweight cotton',
      'CITYZINE x Lángos collab',
      'Limited run',
    ],
  },

  // ─── STICKERS ───────────────────────────────────────────────────────────────
  {
    id: 'prod_005',
    slug: 'budapest-transit-sticker-pack',
    name: 'Budapest Transit Sticker Pack',
    price: 1200,
    description:
      'Three illustrated Budapest transit stickers — HÉV suburban rail, Metro Line 3, and the Millennium Underground. Die-cut vinyl.',
    category: 'stickers',
    images: [
      '/products/stickers/hev-train.jpg',
      '/products/stickers/metro-3.jpg',
      '/products/stickers/millennium-metro.jpg',
    ],
    inStock: true,
    featured: true,
    bgColor: '#ffffff',
    details: [
      '3 die-cut stickers',
      'Premium vinyl',
      'Weather-resistant',
      'Original transit illustrations',
    ],
  },
  {
    id: 'prod_006',
    slug: 'cityzine-logo-sticker-pack',
    name: 'CITYZINE Logo Sticker Pack',
    price: 900,
    description:
      'Three variations of the CITYZINE circle logo — classic, inverted black, and warped edition. Slap them everywhere.',
    category: 'stickers',
    images: [
      '/products/stickers/logo-circle.jpg',
      '/products/stickers/logo-black.jpg',
      '/products/stickers/logo-warp.jpg',
    ],
    inStock: true,
    featured: false,
    bgColor: '#ffffff',
    details: [
      '3 logo stickers',
      'Premium vinyl',
      'Weather-resistant',
    ],
  },

  // ─── OTHER ──────────────────────────────────────────────────────────────────
  {
    id: 'prod_007',
    slug: 'cityzine-lighter',
    name: 'CITYZINE Lighter',
    price: 900,
    description:
      'Standard lighter with the CITY-ZINE.EU wrap. Keep it, lose it, find someone else\'s. That\'s the point.',
    category: 'other',
    images: ['/products/stickers/lighter-wrap.jpg'],
    inStock: true,
    featured: false,
    bgColor: '#000000',
    details: [
      'Standard windproof lighter',
      'Screen-printed logo wrap',
      'Sold individually',
    ],
  },
];
