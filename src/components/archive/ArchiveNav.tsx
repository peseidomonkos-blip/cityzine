import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ArchiveNavProps {
  active: 'zines' | 'events';
}

const tabs = [
  { label: 'Zines', href: '/archive/zines', value: 'zines' as const },
  { label: 'Events', href: '/archive/events', value: 'events' as const },
];

export function ArchiveNav({ active }: ArchiveNavProps) {
  return (
    <div className="px-6 md:px-12 border-b border-white/10">
      <div className="max-w-screen-xl mx-auto flex gap-1">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.href}
            className={cn(
              'text-editorial px-4 py-4 text-sm transition-all duration-300 border-b-2 -mb-px',
              active === tab.value
                ? 'text-white border-white'
                : 'text-muted hover:text-white border-transparent'
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
