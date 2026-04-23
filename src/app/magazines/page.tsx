import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MagazineIssueBlock } from '@/components/magazines/MagazineIssueBlock';
import { magazineIssues } from '@/data/magazines';

export const metadata: Metadata = {
  title: 'Magazines — CITYZINE',
  description: 'Current issues, selected stockists, and places to find a copy of CITYZINE.',
};

export default function MagazinesPage() {
  const currentIssues = magazineIssues.filter((i) => i.status !== 'sold-out');
  const pastIssues = magazineIssues.filter((i) => i.status === 'sold-out');

  return (
    <>
      <Header />
      <main>

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-editorial text-muted text-[0.65rem] tracking-widest uppercase mb-6">
              Print Editions — {magazineIssues.length} Issues
            </p>
            <h1 className="text-display text-7xl md:text-[9rem] text-white leading-[0.85] mb-10">
              MAGAZINES<span className="text-gray">.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-screen-xl">
              <p className="text-sm text-gray leading-relaxed max-w-sm">
                A running list of available issues and where to get them.
                Each entry links directly to stockists, partners, and online retailers.
              </p>
              <p className="text-editorial text-muted text-[0.6rem] leading-relaxed max-w-xs md:text-right">
                Availability depends on stockist inventory.<br />
                Links are updated as new distribution points are confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* ── Current & upcoming issues ──────────────────────────────────── */}
        {currentIssues.length > 0 && (
          <section className="px-6 md:px-12">
            <div className="max-w-screen-xl mx-auto">
              <div className="pt-10 pb-4">
                <p className="text-editorial text-muted text-[0.55rem] tracking-[0.22em] uppercase">
                  Current & Upcoming
                </p>
              </div>
              {currentIssues.map((issue, i) => (
                <MagazineIssueBlock key={issue.id} issue={issue} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* ── Past issues ───────────────────────────────────────────────── */}
        {pastIssues.length > 0 && (
          <section className="px-6 md:px-12 mt-4">
            <div className="max-w-screen-xl mx-auto">
              <div className="pt-10 pb-4 border-t border-white/10">
                <p className="text-editorial text-muted text-[0.55rem] tracking-[0.22em] uppercase">
                  Past Issues
                </p>
              </div>
              {pastIssues.map((issue, i) => (
                <MagazineIssueBlock key={issue.id} issue={issue} index={i} />
              ))}
            </div>
          </section>
        )}


      </main>
      <Footer />
    </>
  );
}
