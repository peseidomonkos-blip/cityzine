'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Download } from 'lucide-react';
import type { ZineItem } from '@/data/archive';

// Dynamic import — react-pdf requires client-side rendering only
const PdfViewer = dynamic(
  () => import('./PdfViewer').then((mod) => ({ default: mod.PdfViewer })),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <div className="w-6 h-6 border border-asphalt border-t-white animate-spin" />
        <p className="text-editorial text-muted text-[0.65rem] tracking-widest">
          PREPARING VIEWER
        </p>
      </div>
    ),
  }
);

const PdfCover = dynamic(
  () => import('./PdfCover').then((mod) => ({ default: mod.PdfCover })),
  { ssr: false, loading: () => null }
);

interface ZineViewerProps {
  zine: ZineItem;
}

export function ZineViewer({ zine }: ZineViewerProps) {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Fixed minimal header */}
      <div className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 md:px-12 bg-charcoal/90 backdrop-blur-md border-b border-asphalt/40">
        <Link
          href="/archive"
          className="flex items-center gap-2 text-muted hover:text-white transition-colors duration-300 shrink-0"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          <span className="text-editorial text-[0.65rem]">Archive</span>
        </Link>

        <div className="flex-1 flex justify-center">
          <span className="text-editorial text-[0.65rem] text-white tracking-widest uppercase hidden sm:block">
            Issue {zine.issue} — {zine.title}
          </span>
        </div>

        <a
          href={zine.pdfUrl}
          download
          className="flex items-center gap-2 text-muted hover:text-white transition-colors duration-300 shrink-0"
          title="Download PDF"
        >
          <Download size={14} strokeWidth={1.5} />
          <span className="text-editorial text-[0.65rem] hidden sm:block">Download</span>
        </a>
      </div>

      {/* Issue intro */}
      <div className="pt-24 pb-8 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-editorial text-muted text-[0.6rem] tracking-widest">
            CITYZINE / ISSUE {zine.issue} / {zine.year}
          </p>
          <h1 className="text-display text-4xl md:text-6xl text-white leading-[0.9]">
            {zine.title}
          </h1>
          <p className="text-sm text-gray leading-relaxed max-w-md mx-auto">
            {zine.description}
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-editorial text-muted text-[0.6rem]">
              {zine.pageCount} pages
            </span>
            <span className="text-muted text-[0.5rem]">·</span>
            <span className="text-editorial text-muted text-[0.6rem]">
              Sold out — free to read
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center pb-8">
        <div className="h-px w-16 bg-asphalt/60" />
      </div>

      {/* PDF viewer */}
      <div className="px-4 md:px-8 pb-12">
        <div className="max-w-[840px] mx-auto space-y-2">
          {/* Cover page (separate file) shown as page 0 */}
          {zine.coverPdfUrl && (
            <div className="w-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <PdfCover url={zine.coverPdfUrl} width={840} />
            </div>
          )}
          <PdfViewer url={zine.pdfUrl} title={zine.title} pageScale={zine.pdfPageScale} />
        </div>
      </div>

      {/* End of issue */}
      <div className="pb-24 flex flex-col items-center gap-6">
        <div className="h-px w-24 bg-asphalt/40" />
        <p className="text-editorial text-muted text-[0.6rem] tracking-widest">
          END OF ISSUE {zine.issue}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/archive"
            className="text-editorial text-muted hover:text-white transition-colors duration-300 text-[0.65rem] flex items-center gap-2"
          >
            <ArrowLeft size={12} strokeWidth={1.5} />
            Back to Archive
          </Link>
          <a
            href={zine.pdfUrl}
            download
            className="text-editorial text-muted hover:text-white transition-colors duration-300 text-[0.65rem] flex items-center gap-2"
          >
            <Download size={12} strokeWidth={1.5} />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
