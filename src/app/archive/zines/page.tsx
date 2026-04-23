import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArchiveItem } from '@/components/archive/ArchiveItem';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { zineArchive } from '@/data/archive';

export const metadata: Metadata = {
  title: 'Zines — Archive — CITYZINE',
  description: 'Every issue of CITYZINE, preserved. A digital library of sold-out print editions.',
};

export default function ZinesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-editorial text-muted text-[0.65rem] tracking-widest uppercase mb-6">
                Digital Archive — {zineArchive.length} Issues
              </p>
              <h1 className="text-display text-7xl md:text-[10rem] text-white leading-[0.85] mb-8">
                ARCHIVE<span className="text-gray">.</span>
              </h1>
              <p className="text-sm text-gray leading-relaxed max-w-sm">
                Every issue of CITYZINE (so far), preserved in full. Browse the complete run — if sold out in real life, available online.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-nav */}
        <ArchiveNav active="zines" />

        {/* Issue list */}
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-screen-xl mx-auto">
            {zineArchive.map((zine, index) => (
              <ArchiveItem key={zine.id} zine={zine} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
