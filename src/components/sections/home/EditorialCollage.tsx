import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { ImageWithGrain } from '@/components/shared/ImageWithGrain';

export function EditorialCollage() {
  return (
    <Section className="py-12 md:py-20">
      <Container wide>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large left image */}
          <ScrollReveal className="col-span-2 row-span-2" delay={0}>
            <ImageWithGrain
              alt="Urban documentation"
              aspectRatio="aspect-[1/1]"
              bgColor="bg-charcoal"
              label="Urban Documentation / 2025"
            />
          </ScrollReveal>

          {/* Top right */}
          <ScrollReveal delay={0.1}>
            <ImageWithGrain
              alt="Street typography"
              aspectRatio="aspect-[4/5]"
              bgColor="bg-concrete"
              label="Street Type"
            />
          </ScrollReveal>

          {/* Top far right */}
          <ScrollReveal delay={0.15}>
            <ImageWithGrain
              alt="Transit graphics"
              aspectRatio="aspect-[4/5]"
              bgColor="bg-asphalt"
              label="Transit Lines"
            />
          </ScrollReveal>

          {/* Bottom right */}
          <ScrollReveal delay={0.2}>
            <ImageWithGrain
              alt="Skate culture"
              aspectRatio="aspect-[4/5]"
              bgColor="bg-concrete"
              label="Concrete Sessions"
            />
          </ScrollReveal>

          {/* Bottom far right */}
          <ScrollReveal delay={0.25}>
            <ImageWithGrain
              alt="Print process"
              aspectRatio="aspect-[4/5]"
              bgColor="bg-charcoal"
              label="Print Process"
            />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
