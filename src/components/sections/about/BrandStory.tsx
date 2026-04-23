import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function BrandStory() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
            The city is
            <br />
            there to look at<span className="text-gray">.</span>
          </h1>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-sm text-muted leading-relaxed">
                We&apos;re not a brand in the traditional sense. We&apos;re a collective
                document the city. Every zine is a time capsule of the streets we
                walk.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-sm text-muted leading-relaxed">
                Based nowhere specific. Found in the cities that matter. Independent
                by design, community by nature.
              </p>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-editorial text-gray w-20">Founded</span>
                  <span className="text-sm text-white">2019</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-editorial text-gray w-20">Focus</span>
                  <span className="text-sm text-white">
                    Print, Apparel, Street Culture
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-editorial text-gray w-20">Based</span>
                  <span className="text-sm text-white">The streets</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
