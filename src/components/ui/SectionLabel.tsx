import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      <div className="h-px w-8 bg-white/30" />
      <span className="text-editorial text-gray">{children}</span>
    </div>
  );
}
