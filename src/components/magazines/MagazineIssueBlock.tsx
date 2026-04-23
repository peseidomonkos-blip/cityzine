'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { MagazineIssue, AvailabilityStatus } from '@/data/magazines';
import { statusLabel } from '@/data/magazines';

interface Props {
  issue: MagazineIssue;
  index: number;
}

const statusStyle: Record<AvailabilityStatus, string> = {
  'available':         'text-white border-white/40',
  'limited':           'text-[#C5A96A] border-[#C5A96A]/40',
  'select-stockists':  'text-[#A89E92] border-[#A89E92]/40',
  'out-now':           'text-white border-white/60',
  'sold-out':          'text-muted border-white/10',
};

export function MagazineIssueBlock({ issue, index }: Props) {
  const isSoldOut = issue.status === 'sold-out';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.4, 0, 0.2, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 py-16 md:py-20 border-b border-white/10 last:border-0"
    >
      {/* Left — cover */}
      <div className="flex flex-col gap-6">
        <div className="relative w-full max-w-[260px]">
          {issue.coverImage ? (
            <div className={isSoldOut ? 'opacity-40 grayscale' : ''}>
              <Image
                src={issue.coverImage}
                alt={issue.title}
                width={260}
                height={368}
                style={{ width: '100%', height: 'auto' }}
                className="shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          ) : (
            /* Placeholder cover for unreleased issues */
            <div className="w-full aspect-[260/368] bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-editorial text-muted text-[0.6rem] tracking-widest">
                FORTHCOMING
              </span>
            </div>
          )}
        </div>

        {/* Status badge */}
        <span className={`self-start text-editorial text-[0.6rem] tracking-[0.18em] border px-3 py-1.5 uppercase ${statusStyle[issue.status]}`}>
          {statusLabel[issue.status]}
        </span>
      </div>

      {/* Right — info + links */}
      <div className="flex flex-col justify-between gap-10 lg:pt-2">

        {/* Header */}
        <div className="space-y-5">
          <div className="flex items-start gap-5">
            <div>
              <p className="text-editorial text-muted text-[0.6rem] tracking-widest uppercase mb-2">
                {issue.year}{issue.pageCount ? ` — ${issue.pageCount} pages` : ''}
              </p>
              <h2 className="text-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                {issue.title}
              </h2>
            </div>
          </div>

          <div className="w-10 h-px bg-white/20" />

          <p className="text-sm text-gray leading-relaxed max-w-md">
            {issue.description}
          </p>
        </div>

        {/* Stockist links */}
        {issue.links.length > 0 && (
          <div className="space-y-3">
            <p className="text-editorial text-muted text-[0.55rem] tracking-[0.2em] uppercase">
              {isSoldOut ? 'Available as' : 'Available via'}
            </p>
            <div className="flex flex-col gap-0">
              {issue.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between py-3 border-b border-white/8 hover:border-white/25 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-300 shrink-0" />
                    <span className="text-sm text-gray group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                    {link.note && (
                      <span className="text-editorial text-muted text-[0.55rem] tracking-wide hidden sm:inline">
                        {link.note}
                      </span>
                    )}
                  </div>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors duration-300 text-sm">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
