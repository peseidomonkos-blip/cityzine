import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import Link from 'next/link';

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="text-center space-y-8">
          <ScrollReveal>
            <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-white">
              Explore the
              <br />
              full collection<span className="text-gray">.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm text-gray max-w-md mx-auto">
              Tees, stickers, zines. Every piece is a fragment of street culture,
              printed and pressed for people who get it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link href="/shop">
              <Button size="lg">View Now</Button>
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
