import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { CollabInquiry } from '@/components/sections/contact/CollabInquiry';
import { SocialLinks } from '@/components/sections/contact/SocialLinks';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CITYZINE. Collaborations, wholesale, and general inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20 md:pt-24">
        <Container>
          <div className="py-12 md:py-20">
            <ScrollReveal>
              <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-white">
                Get in
                <br />
                touch<span className="text-gray">.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-sm text-muted max-w-md">
                Questions, ideas, feedback, or just want to say what&apos;s up.
                We read everything.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-20 md:pb-32">
            {/* Left: Form */}
            <ScrollReveal delay={0.1}>
              <ContactForm />
            </ScrollReveal>

            {/* Right: Social + Collab */}
            <div className="space-y-12">
              <SocialLinks />
              <CollabInquiry />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
