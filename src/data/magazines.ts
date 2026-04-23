export type AvailabilityStatus =
  | 'available'
  | 'limited'
  | 'select-stockists'
  | 'out-now'
  | 'sold-out';

export interface StockistLink {
  label: string;
  url: string;
  note?: string;
}

export interface MagazineIssue {
  id: string;
  slug: string;
  issueNumber: string;
  title: string;
  year: number;
  description: string;
  pageCount?: number;
  coverImage?: string;
  status: AvailabilityStatus;
  links: StockistLink[];
}

// ─── STATUS LABELS ───────────────────────────────────────────────────────────
export const statusLabel: Record<AvailabilityStatus, string> = {
  available:           'Available',
  limited:             'Limited',
  'select-stockists':  'Select Stockists',
  'out-now':           'Out Now',
  'sold-out':          'Sold Out',
};

// ─── ISSUES ──────────────────────────────────────────────────────────────────
export const magazineIssues: MagazineIssue[] = [
  {
    id: 'ext_001',
    slug: 'langos-01',
    issueNumber: '01',
    title: 'Lángos',
    year: 2025,
    description:
      'A graffiti magazine from the European scene — writers, walls, and cities from Budapest to Berlin. Available at select stockists across Hungary, Germany, the Netherlands, and Italy.',
    coverImage: '/archive/covers/langos cover.jpg',
    status: 'select-stockists',
    links: [
      { label: '@bazisstore', url: 'https://bazisstore.hu/termek/elorendelheto-langos-magazin/', note: '🇭🇺 Hungary' },
      { label: '@dedicatedsyndicate', url: 'https://www.dedicated-store.com/graffiti-magazine/1976-langos-magazin.html', note: '🇩🇪 Germany' },
      { label: '@mrgraffiti.shop', url: 'https://www.mrgraffiti.nl/product/langos-issue-1/', note: '🇳🇱 Netherlands' },
      { label: '@thegraffitibenchshop', url: 'https://thegraffitibench.com/collections/magazine/products/langos-magazine-1', note: '🇮🇹 Italy' },
    ],
  },
  {
    id: 'ext_003',
    slug: 'concrete-hittaz',
    issueNumber: '01',
    title: 'Concrete Hittaz',
    year: 2025,
    description:
      'Street culture from the concrete up — raw photography, urban documentation, and the culture that lives between the walls.',
    coverImage: '/archive/covers/concrete hittaz cover.png',
    status: 'available',
    links: [],
  },
  {
    id: 'ext_002',
    slug: 'ugly-pieces-01',
    issueNumber: '01',
    title: 'Ugly Pieces',
    year: 2025,
    description:
      'By Ugly Faces. Raw documentation of the streets — pieces, spots, and the hands behind them.',
    coverImage: '/archive/covers/ugly cover.jpg',
    status: 'available',
    links: [],
  },
];
