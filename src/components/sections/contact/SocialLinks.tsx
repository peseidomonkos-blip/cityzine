import { socialLinks } from '@/data/navigation';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function SocialLinks() {
  return (
    <ScrollReveal delay={0.15}>
      <div className="space-y-4">
        <span className="text-editorial text-gray">Follow Us</span>
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg text-white hover:text-gray transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
