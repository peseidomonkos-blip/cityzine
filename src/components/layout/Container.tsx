import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function Container({ children, className, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        wide ? 'max-w-[1440px]' : 'max-w-7xl',
        className
      )}
    >
      {children}
    </div>
  );
}
