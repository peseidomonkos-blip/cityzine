import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function BrandIntro() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <SectionLabel>About the Project</SectionLabel>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal delay={0.1}>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              Print of the city<span className="text-gray">.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6 md:pt-4">
              <p className="text-sm text-gray leading-relaxed">
                CITYZINE started as a fanzine capturing our everyday life in the city.
              </p>
              <p className="text-sm text-gray leading-relaxed">
                Every tee, every sticker, every printed page was inspired by the urban
                environment. Our products reflect our hobbies and what we are passionate about.
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className="text-editorial text-muted">
                  Print &middot; Culture &middot; Community
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
