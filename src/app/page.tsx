import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { Marquee } from '@/components/ui/Marquee';
import { BrandIntro } from '@/components/sections/home/BrandIntro';
import { FeaturedMerch } from '@/components/sections/home/FeaturedMerch';
import { CultureSection } from '@/components/sections/home/CultureSection';
import { CTASection } from '@/components/sections/home/CTASection';
import { FeaturedZines } from '@/components/sections/home/FeaturedZines';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Video background: hero only */}
        <div className="relative">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/videos/hero.mp4"
          />
          <div className="relative">
            <HeroSection />
          </div>
        </div>

        <Marquee repeat={20}>
          <span className="text-editorial text-gray text-xs font-black">CITYZINE</span>
          <span className="text-gray">&bull;</span>
        </Marquee>
        <FeaturedZines />
        <BrandIntro />
        <FeaturedMerch />
        <CultureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
