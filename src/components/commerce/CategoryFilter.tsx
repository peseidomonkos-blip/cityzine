'use client';

import { cn } from '@/lib/utils';
import type { ProductCategory } from '@/types';

type FilterOption = 'all' | ProductCategory;

interface CategoryFilterProps {
  active: FilterOption;
  onChange: (category: FilterOption) => void;
}

const options: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'tees', label: 'Tees' },
  { value: 'stickers', label: 'Stickers' },
  { value: 'other', label: 'Other' },
];

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            'text-editorial px-4 py-2 transition-all duration-300',
            active === opt.value
              ? 'text-white border-b-2 border-white'
              : 'text-muted hover:text-white border-b-2 border-transparent'
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
