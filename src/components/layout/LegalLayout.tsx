import { Header } from './Header';
import { Footer } from './Footer';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="px-6 md:px-12 max-w-screen-md mx-auto">

          {/* Page title */}
          <div className="mb-12 md:mb-16 pb-8 border-b border-white/10">
            <p className="text-editorial text-muted text-[0.65rem] tracking-widest mb-4">
              Legal
            </p>
            <h1 className="text-display text-4xl md:text-6xl text-white leading-[0.9]">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-editorial text-muted text-[0.6rem] tracking-wide mt-6">
                Last updated: {lastUpdated}
              </p>
            )}
          </div>

          {/* Prose content */}
          <div className="prose-legal space-y-10">
            {children}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

/* ── Prose sub-components ─────────────────────────────────────────────────── */

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-display text-xl md:text-2xl text-white">{title}</h2>
      <div className="space-y-3 text-sm text-gray leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function LegalP({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-asphalt mt-1 shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
