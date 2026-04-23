/**
 * CITYZINE Archive — Digital Zine Library
 *
 * HOW TO ADD A NEW ARCHIVED ISSUE:
 * ─────────────────────────────────
 * 1. Place your PDF file in:  public/archive/<slug>.pdf
 * 2. Add a new entry to the `zineArchive` array below.
 *    The route /archive/<slug> will be auto-generated at build time.
 */

export interface ZineItem {
  id: string;
  slug: string;
  issue: string;
  title: string;
  year: number;
  description: string;
  pageCount: number;
  pdfUrl: string;
  coverImage?: string;
  coverPdfUrl?: string; // separate cover PDF shown as page 0 in the viewer
  pdfPageScale?: number; // scale correction if PDF was exported at wrong page size (e.g. A3 instead of A4)
}

export const zineArchive: ZineItem[] = [
  {
    id: 'zine_001',
    slug: 'vol-01',
    issue: '01',
    title: 'CITYZINE 1',
    year: 2022,
    description:
      'The first issue. Photographed by Gránásy Gergely and Benczédi Benedek. Street photography, urban documentation.',
    pageCount: 34,
    pdfUrl: 'https://wagv8hvkndth0ocv.public.blob.vercel-storage.com/vol-01.pdf',
    coverImage: '/archive/covers/cover-vol-01.jpg',
  },
  {
    id: 'zine_002',
    slug: 'vol-02',
    issue: '02',
    title: 'CITYZINE 2',
    year: 2023,
    description:
      'The second issue. Turn in the direction of becoming something more community based.',
    pageCount: 40,
    pdfUrl: 'https://wagv8hvkndth0ocv.public.blob.vercel-storage.com/vol-02.pdf',
    coverImage: '/archive/covers/cover-vol-02.jpg',
  },
  {
    id: 'zine_003',
    slug: 'vol-03',
    issue: '03',
    title: 'CITYZINE 3',
    year: 2024,
    description:
      'The third issue, now available for everyone to send in pictures.',
    pageCount: 45,
    pdfUrl: 'https://wagv8hvkndth0ocv.public.blob.vercel-storage.com/vol-03.pdf',
    coverImage: '/archive/covers/cover-vol-03.jpg',
  },
  {
    id: 'zine_004',
    slug: 'vol-04',
    issue: '04',
    title: 'CITYZINE 4',
    year: 2025,
    description:
      'The fourth issue. 17 photographers. Photos from all around the world.',
    pageCount: 44,
    pdfUrl: 'https://wagv8hvkndth0ocv.public.blob.vercel-storage.com/vol-04.pdf',
    coverImage: '/archive/covers/cover-vol-04.png',
    pdfPageScale: 1.41422, // PDF exported at A3, photos fill A4 area (top-left ~70.7%)
  },
];
