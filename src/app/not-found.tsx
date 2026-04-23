import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-20">
        <Container className="text-center py-32">
          <h1 className="text-display text-8xl md:text-[12rem] text-white leading-none">
            404
          </h1>
          <p className="mt-4 text-sm text-muted">
            This page doesn&apos;t exist. Maybe it never did.
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button variant="outline">Back Home</Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
