import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProductGrid } from '@/components/commerce/ProductGrid';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { getFeaturedProducts } from '@/lib/shopify';
import Link from 'next/link';

export async function FeaturedMerch() {
  const featured = await getFeaturedProducts();

  return (
    <Section>
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <ScrollReveal>
              <SectionLabel>Latest Drops</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display text-3xl md:text-4xl text-white mt-4">
                Featured
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              href="/shop"
              className="text-editorial text-gray hover:text-gray transition-colors"
            >
              View All &rarr;
            </Link>
          </ScrollReveal>
        </div>

        <ProductGrid products={featured} columns={3} />
      </Container>
    </Section>
  );
}
