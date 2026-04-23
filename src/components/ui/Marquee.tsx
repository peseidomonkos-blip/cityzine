import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  repeat?: number;
}

export function Marquee({ children, className, repeat = 4 }: MarqueeProps) {
  return (
    <div
      className={cn(
        'overflow-hidden border-y border-white/10 py-4',
        className
      )}
    >
      <div className="animate-marquee flex whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 px-4">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
