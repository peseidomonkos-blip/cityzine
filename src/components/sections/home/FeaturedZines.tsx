'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { zineArchive } from '@/data/archive';
import { SectionLabel } from '@/components/ui/SectionLabel';

export function FeaturedZines() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % zineArchive.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeZine = zineArchive[activeIndex];

  return (
    <section className="bg-charcoal py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16 md:mb-20">
          <SectionLabel>From the Archive</SectionLabel>
          <Link
            href="/archive"
            className="text-editorial text-muted hover:text-white transition-colors duration-300 text-xs"
          >
            View all issues →
          </Link>
        </div>

        {/* Main layout: cover + info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Cover — big, high-res */}
          <div className="relative w-full max-w-[640px] mx-auto lg:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeZine.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              >
                <Image
                  src={activeZine.coverImage!}
                  alt={activeZine.title}
                  width={640}
                  height={905}
                  style={{ width: '100%', height: 'auto' }}
                  quality={95}
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Large background issue number watermark */}
            <AnimatePresence mode="wait">
              <motion.span
                key={activeZine.id + '-wm'}
                className="absolute -left-6 -bottom-8 text-display text-[12rem] leading-none text-white/[0.04] select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {activeZine.issue}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-between h-full lg:py-8 gap-10">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeZine.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-6"
              >
                {/* Issue label */}
                <p className="text-editorial text-muted text-[0.6rem] tracking-[0.2em]">
                  ISSUE {activeZine.issue} &mdash; {activeZine.year}
                </p>

                {/* Title */}
                <h2 className="text-display text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95]">
                  {activeZine.title}
                </h2>

                {/* Divider */}
                <div className="w-12 h-px bg-white/20" />

                {/* Description */}
                <p className="text-sm text-gray leading-relaxed max-w-md">
                  {activeZine.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-editorial text-muted text-[0.6rem]">
                  <span>{activeZine.pageCount} pages</span>
                  <span className="text-white/20">·</span>
                  <span>Sold out</span>
                  <span className="text-white/20">·</span>
                  <span>Free to read</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav dots + CTA */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                {zineArchive.map((zine, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="group flex items-center gap-2"
                    aria-label={`Show ${zine.title}`}
                  >
                    <span
                      className={`block transition-all duration-500 ${
                        i === activeIndex
                          ? 'w-8 h-px bg-white'
                          : 'w-3 h-px bg-white/25 group-hover:bg-white/50'
                      }`}
                    />
                    {i === activeIndex && (
                      <span className="text-editorial text-[0.55rem] text-muted tracking-widest">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <Link
                href={`/archive/${activeZine.slug}`}
                className="group inline-flex items-center gap-3 w-fit border border-white/20 hover:border-white/60 px-6 py-3 transition-colors duration-300"
              >
                <span className="text-editorial text-white text-xs tracking-widest">
                  READ ISSUE {activeZine.issue}
                </span>
                <span className="text-white/40 group-hover:text-white transition-colors duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
