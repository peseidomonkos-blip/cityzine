import { cn } from '@/lib/utils';

interface ImageWithGrainProps {
  alt: string;
  className?: string;
  label?: string;
  aspectRatio?: string;
  bgColor?: string;
}

export function ImageWithGrain({
  alt,
  className,
  label,
  aspectRatio = 'aspect-[3/4]',
  bgColor = 'bg-concrete',
}: ImageWithGrainProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden image-grain group',
        aspectRatio,
        bgColor,
        className
      )}
    >
      {/* Placeholder styled block - replace with next/image when real assets are available */}
      <div className="absolute inset-0 flex items-end p-4">
        {label && (
          <span className="text-editorial text-white/40 text-[0.6rem]">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
