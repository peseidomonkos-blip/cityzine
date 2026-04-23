'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  url: string;
  title: string;
  pageScale?: number;
}

function LazyPage({
  pageNumber,
  width,
  pageScale = 1,
}: {
  pageNumber: number;
  width: number;
  pageScale?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px' } // Start loading 600px before it enters viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const needsScale = pageScale > 1;

  return (
    <div ref={ref} className={`relative mb-3 last:mb-0 shadow-sm${needsScale ? ' overflow-hidden' : ''}`}>
      {isVisible ? (
        <div style={needsScale ? { transform: `scale(${pageScale})`, transformOrigin: 'top left' } : undefined}>
        <Page
          pageNumber={pageNumber}
          width={width || undefined}
          loading={
            <div
              className="bg-concrete animate-pulse flex items-center justify-center"
              style={{ width: width || '100%', aspectRatio: '210 / 297' }}
            >
              <span className="text-editorial text-muted text-[0.6rem]">
                PAGE {String(pageNumber).padStart(2, '0')}
              </span>
            </div>
          }
          className="pdf-page"
        />
        </div>
      ) : (
        <div
          className="bg-concrete flex items-center justify-center"
          style={{ width: width || '100%', aspectRatio: '210 / 297' }}
        >
          <span className="text-editorial text-muted text-[0.6rem]">
            PAGE {String(pageNumber).padStart(2, '0')}
          </span>
        </div>
      )}
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.svg')" }}
      />
    </div>
  );
}

export function PdfViewer({ url, title, pageScale = 1 }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setError(false);
    },
    []
  );

  const onDocumentLoadError = useCallback(() => {
    setError(true);
  }, []);

  const pageWidth = Math.min(containerWidth, 800);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-sm text-center space-y-4">
          <div className="w-12 h-12 mx-auto border border-asphalt flex items-center justify-center">
            <span className="text-muted text-lg">×</span>
          </div>
          <p className="text-editorial text-muted text-[0.65rem] tracking-widest">
            PDF UNAVAILABLE
          </p>
          <p className="text-sm text-gray leading-relaxed">
            This issue could not be loaded. The PDF may not be uploaded yet or
            the file path may be incorrect.
          </p>
          <a
            href={url}
            download
            className="inline-block text-editorial text-[0.65rem] text-white hover:text-gray transition-colors duration-300 border-b border-white/20 pb-0.5"
          >
            TRY DIRECT DOWNLOAD →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading={
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="w-6 h-6 border border-asphalt border-t-white animate-spin" />
            <p className="text-editorial text-muted text-[0.65rem] tracking-widest">
              LOADING {title}
            </p>
          </div>
        }
        className="flex flex-col items-center"
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <LazyPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              pageScale={pageScale}
            />
          ))}
      </Document>

      {numPages && (
        <div className="flex justify-center pt-6 pb-2">
          <span className="text-editorial text-muted text-[0.6rem] tracking-widest">
            {numPages} {numPages === 1 ? 'PAGE' : 'PAGES'}
          </span>
        </div>
      )}
    </div>
  );
}
