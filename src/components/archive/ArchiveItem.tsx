'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import type { ZineItem } from '@/data/archive';

const PdfCover = dynamic(
  () => import('./PdfCover').then((mod) => ({ default: mod.PdfCover })),
  { ssr: false, loading: () => <div className="w-full aspect-[3/4] bg-white/5" /> }
);

interface ArchiveItemProps {
  zine: ZineItem;
  index: number;
}

export function ArchiveItem({ zine, index }: ArchiveItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={`/archive/${zine.slug}`}
        className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-10 py-10 md:py-12 border-b border-white/10 hover:border-white/25 transition-colors duration-500"
      >
        {/* Issue number */}
        <div className="shrink-0 w-16 md:w-24">
          <span className="text-display text-4xl md:text-6xl text-asphalt group-hover:text-gray transition-colors duration-500">
            {zine.issue}
          </span>
        </div>

        {/* Cover thumbnail — static image or PDF-rendered */}
        <div className="shrink-0 w-24 md:w-32 hidden sm:block overflow-hidden">
          {zine.coverImage ? (
            <Image
              src={zine.coverImage}
              alt={zine.title}
              width={128}
              height={180}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : zine.coverPdfUrl ? (
            <PdfCover url={zine.coverPdfUrl} width={128} />
          ) : null}
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3 md:pt-1">
          <div className="flex items-baseline gap-4">
            <h2 className="text-display text-xl md:text-2xl text-white">
              {zine.title}
            </h2>
            <span className="text-editorial text-muted text-[0.6rem] shrink-0">{zine.year}</span>
          </div>
          <p className="text-sm text-gray leading-relaxed max-w-lg">
            {zine.description}
          </p>
          <div className="flex items-center gap-3 pt-1">
            {zine.pageCount > 0 && (
              <>
                <span className="text-editorial text-muted text-[0.6rem]">
                  {zine.pageCount} pages
                </span>
                <span className="text-muted">·</span>
              </>
            )}
            <span className="text-editorial text-muted text-[0.6rem]">Sold out</span>
            <span className="text-muted">·</span>
            <span className="text-editorial text-muted text-[0.6rem]">Free to read</span>
          </div>
        </div>

        {/* CTA */}
        <div className="shrink-0 flex items-center md:pt-2">
          <span className="text-editorial text-muted group-hover:text-white transition-colors duration-300 text-xs">
            Read&nbsp;→
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
