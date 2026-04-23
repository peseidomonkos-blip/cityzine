import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArchiveNav } from '@/components/archive/ArchiveNav';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events — Archive — CITYZINE',
  description: 'Behind the scenes. Launches, shoots, and moments from the CITYZINE world.',
};

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 border-b border-white/10">
          <div className="max-w-screen-xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-editorial text-muted text-[0.65rem] tracking-widest uppercase mb-6">
                Behind the Scenes — {events.length} Events
              </p>
              <h1 className="text-display text-7xl md:text-[10rem] text-white leading-[0.85] mb-8">
                EVENTS<span className="text-gray">.</span>
              </h1>
              <p className="text-sm text-gray leading-relaxed max-w-sm">
                Launches, shoots, and moments that didn't make the print.
                Raw documentation from the CITYZINE world.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-nav */}
        <ArchiveNav active="events" />

        {/* Content */}
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-screen-xl mx-auto">

            {events.length === 0 ? (
              /* Empty state */
              <div className="py-32 flex flex-col items-center gap-4 text-center">
                <p className="text-display text-5xl md:text-7xl text-white/5 select-none">
                  COMING SOON
                </p>
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="py-14 md:py-20 border-b border-white/10 last:border-0"
                >
                  {/* Event header */}
                  <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div>
                      <p className="text-editorial text-muted text-[0.6rem] tracking-widest mb-2">
                        {event.date}{event.location ? ` — ${event.location}` : ''}
                      </p>
                      <h2 className="text-display text-3xl md:text-5xl text-white leading-tight">
                        {event.title}
                      </h2>
                      {event.description && (
                        <p className="mt-3 text-sm text-gray leading-relaxed max-w-lg">
                          {event.description}
                        </p>
                      )}
                    </div>
                    <span className="text-editorial text-muted text-[0.6rem] shrink-0">
                      {event.media.length} items
                    </span>
                  </div>

                  {/* Media grid */}
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {event.media.map((item) => (
                      <div key={item.id} className="break-inside-avoid">
                        {item.type === 'image' ? (
                          <div className="relative overflow-hidden bg-charcoal">
                            <Image
                              src={item.src}
                              alt={item.caption ?? event.title}
                              width={item.width ?? 800}
                              height={item.height ?? 600}
                              style={{ width: '100%', height: 'auto' }}
                              className="block"
                            />
                            {item.caption && (
                              <p className="px-3 py-2 text-editorial text-muted text-[0.6rem]">
                                {item.caption}
                              </p>
                            )}
                          </div>
                        ) : (
                          <div className="relative overflow-hidden bg-charcoal">
                            <video
                              src={item.src}
                              poster={item.thumb}
                              controls
                              playsInline
                              className="w-full block"
                            />
                            {item.caption && (
                              <p className="px-3 py-2 text-editorial text-muted text-[0.6rem]">
                                {item.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
