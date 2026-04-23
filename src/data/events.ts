export type EventMediaType = 'image' | 'video';

export interface EventMedia {
  id: string;
  type: EventMediaType;
  src: string;       // path relative to /public
  thumb?: string;    // optional static thumbnail for videos
  caption?: string;
  width?: number;
  height?: number;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;       // e.g. "March 2024"
  location?: string;
  description?: string;
  media: EventMedia[];
}

// ─── ADD YOUR EVENTS HERE ────────────────────────────────────────────────────
// To add an event:
//   1. Drop photos into /public/events/<event-id>/
//   2. Drop videos into /public/events/<event-id>/ (mp4 recommended)
//   3. Add an entry below following the same pattern.
// ─────────────────────────────────────────────────────────────────────────────

export const events: EventItem[] = [
  // Example (remove or replace when you have real content):
  // {
  //   id: 'launch-party-2024',
  //   title: 'Issue 03 Launch Party',
  //   date: 'November 2024',
  //   location: 'Budapest',
  //   description: 'Behind the scenes from the Issue 03 release night.',
  //   media: [
  //     { id: 'm1', type: 'image', src: '/events/launch-party-2024/01.jpg', caption: 'The crowd.' },
  //     { id: 'm2', type: 'video', src: '/events/launch-party-2024/clip.mp4', thumb: '/events/launch-party-2024/clip-thumb.jpg' },
  //   ],
  // },
];
