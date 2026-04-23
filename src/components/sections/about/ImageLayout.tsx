import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { ImageWithGrain } from '@/components/shared/ImageWithGrain';

export function ImageLayout() {
  return (
    <Section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large image spanning 2 rows */}
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <ImageWithGrain
              alt="CITYZINE in the wild"
              aspectRatio="aspect-[16/10]"
              bgColor="bg-charcoal"
              label="In the wild — 2025"
              className="h-full"
            />
          </ScrollReveal>

          {/* Stacked right images */}
          <ScrollReveal delay={0.1}>
            <ImageWithGrain
              alt="Print process"
              aspectRatio="aspect-[4/3]"
              bgColor="bg-concrete"
              label="Print process"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ImageWithGrain
              alt="Community"
              aspectRatio="aspect-[4/3]"
              bgColor="bg-asphalt"
              label="Community"
            />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
