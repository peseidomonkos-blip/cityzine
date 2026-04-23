import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'text-editorial inline-block border border-white/20 px-3 py-1 text-[0.65rem]',
        className
      )}
    >
      {children}
    </span>
  );
}
