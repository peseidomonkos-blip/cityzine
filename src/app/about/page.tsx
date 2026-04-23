import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BrandStory } from '@/components/sections/about/BrandStory';
import { Marquee } from '@/components/ui/Marquee';

export const metadata: Metadata = {
  title: 'About',
  description:
    'CITYZINE is an independent street culture brand rooted in print, urban art, and creative community.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <BrandStory />

        <Marquee className="my-8">
          <span className="text-editorial text-gray text-xs">
            Print the City
          </span>
          <span className="text-gray">&bull;</span>
          <span className="text-editorial text-gray text-xs">
            Wear the Culture
          </span>
          <span className="text-gray">&bull;</span>
          <span className="text-editorial text-gray text-xs">
            Document Everything
          </span>
          <span className="text-gray">&bull;</span>
          <span className="text-editorial text-gray text-xs">
            Stay Independent
          </span>
        </Marquee>
      </main>
      <Footer />
    </>
  );
}
