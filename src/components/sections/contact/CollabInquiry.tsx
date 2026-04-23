import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function CollabInquiry() {
  return (
    <ScrollReveal delay={0.2}>
      <div className="border border-white/10 p-8 space-y-4">
        <span className="text-editorial text-gray">Collaborate</span>
        <h3 className="font-display text-xl text-white">
          Want to work together?
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          We&apos;re open to collaborations with artists, photographers, skaters,
          brands, and anyone who shares our vision. Wholesale inquiries welcome.
        </p>
        <a
          href="mailto:cityzine@city-zine.eu"
          className="inline-block text-editorial text-white hover:text-gray transition-colors"
        >
          cityzine@city-zine.eu
        </a>
      </div>
    </ScrollReveal>
  );
}
