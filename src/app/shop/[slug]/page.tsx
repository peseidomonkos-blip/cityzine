import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ProductGallery } from '@/components/commerce/ProductGallery';
import { ProductGrid } from '@/components/commerce/ProductGrid';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { getProductBySlug, getProducts } from '@/lib/shopify';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  // Get related products (same category, excluding current)
  const allProducts = await getProducts();
  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <Container>
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Gallery */}
              <ScrollReveal>
                <ProductGallery product={product} />
              </ScrollReveal>

              {/* Product Info */}
              <ScrollReveal delay={0.15}>
                <div className="space-y-6 md:sticky md:top-28">
                  <div className="space-y-3">
                    <Badge>{product.category}</Badge>
                    <h1 className="text-display text-3xl md:text-4xl text-white">
                      {product.name}
                    </h1>
                  </div>

                  <p className="text-sm text-gray leading-relaxed">
                    {product.description}
                  </p>

                  {/* Details */}
                  {product.details && (
                    <div className="pt-6 border-t border-white/10 space-y-3">
                      <span className="text-editorial text-gray">Details</span>
                      <ul className="space-y-2">
                        {product.details.map((detail) => (
                          <li
                            key={detail}
                            className="text-sm text-muted flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-white rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="py-16 md:py-24 border-t border-white/10">
              <ScrollReveal>
                <SectionLabel>You Might Also Like</SectionLabel>
              </ScrollReveal>
              <div className="mt-8">
                <ProductGrid
                  products={related}
                  columns={3}
                />
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
