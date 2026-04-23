import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function CultureSection() {
  return (
    <Section className="relative overflow-hidden">
      {/* Full-bleed dark background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollReveal>
            <span className="text-editorial text-gray">Our Manifesto</span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
              To document the world around us, which isn&apos;t visible for everyone.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="font-display text-2xl text-gray">7</p>
                <p className="text-editorial text-muted mt-1">Issues</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="font-display text-2xl text-white">4</p>
                <p className="text-editorial text-muted mt-1">Garments</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="font-display text-2xl text-white">&infin;</p>
                <p className="text-editorial text-muted mt-1">Streets</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
