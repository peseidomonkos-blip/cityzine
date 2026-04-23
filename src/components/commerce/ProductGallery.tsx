'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = product.images.length > 0;

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div
        className="relative overflow-hidden image-grain"
        style={{
          aspectRatio: '3 / 4',
          backgroundColor: product.bgColor ?? '#2a2825',
          border: '1px solid rgba(0,0,0,0.12)',
        }}
      >
        {hasImages ? (
          <Image
            src={product.images[activeIndex]}
            alt={`${product.name} — image ${activeIndex + 1}`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
            priority
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <span className="font-display text-2xl md:text-3xl text-white/15 text-center uppercase tracking-wider">
              {product.name}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {product.images.length > 1 && (
        <div className="flex gap-2">
          {product.images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                backgroundColor: product.bgColor ?? '#2a2825',
                border: '1px solid rgba(0,0,0,0.12)',
              }}
              className={cn(
                'relative w-16 h-20 overflow-hidden transition-all duration-200',
                activeIndex === i
                  ? 'border-2 border-white'
                  : 'border border-white/10 hover:border-white/30'
              )}
            >
              <Image
                src={src}
                alt={`${product.name} thumbnail ${i + 1}`}
                fill
                className="object-contain p-1"
                sizes="64px"
                quality={80}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
