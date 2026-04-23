'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import type { Product } from '@/types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const hasImage = product.images.length > 0 && !product.images[0].includes('placeholder');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Link href={`/shop/${product.slug}`} className="group block">
        {/* Image */}
        <div
          className="relative overflow-hidden image-grain mb-4 transition-colors duration-300"
          style={{
            aspectRatio: '3 / 4',
            backgroundColor: product.bgColor ?? '#2a2825',
            border: '1px solid rgba(0,0,0,0.12)',
          }}
        >
          {hasImage ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <span className="font-display text-lg text-white/20 text-center uppercase tracking-wider">
                {product.name}
              </span>
            </div>
          )}

          {/* Quick view bar */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/90 backdrop-blur-sm px-4 py-3">
            <span className="text-editorial text-black text-[0.65rem]">
              View Product
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-sm text-white group-hover:text-gray transition-colors duration-300">
              {product.name}
            </h3>
          </div>
          <Badge>{product.category}</Badge>
        </div>
      </Link>
    </motion.div>
  );
}
