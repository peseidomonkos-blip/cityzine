'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ProductGrid } from '@/components/commerce/ProductGrid';
import { CategoryFilter } from '@/components/commerce/CategoryFilter';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { products } from '@/data/products';
import type { ProductCategory } from '@/types';

type FilterOption = 'all' | ProductCategory;

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterOption>('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <>
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <Container>
          {/* Title */}
          <div className="py-12 md:py-20">
            <ScrollReveal>
              <h1 className="text-display text-6xl md:text-8xl lg:text-9xl text-white">
                Catalog<span className="text-gray">.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-4 text-sm text-muted max-w-md">
                Tees, stickers, and zines. Every piece made with intention.
              </p>
            </ScrollReveal>
          </div>

          {/* Filter */}
          <div className="mb-10 border-b border-white/10 pb-4">
            <CategoryFilter active={filter} onChange={setFilter} />
          </div>

          {/* Grid */}
          <ProductGrid products={filtered} columns={3} />

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-display text-lg text-muted">
                Nothing here yet.
              </p>
            </div>
          )}

          <div className="h-20" />
        </Container>
      </main>
      <Footer />
    </>
  );
}
