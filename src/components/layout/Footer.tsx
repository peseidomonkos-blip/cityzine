import Link from 'next/link';
import { Container } from './Container';
import { footerNav, socialLinks } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-display text-2xl text-white hover:text-gray transition-colors"
            >
              CITYZINE
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Independent street culture brand rooted in print, urban art, and
              creative community.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-editorial text-gray">Navigate</h3>
            <nav className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social + Newsletter */}
          <div className="space-y-4">
            <h3 className="text-editorial text-gray">Connect</h3>
            <nav className="flex flex-col gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} CITYZINE. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              { label: 'Terms & Conditions', href: '/legal/terms' },
              { label: 'Privacy Policy',     href: '/legal/privacy' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-muted hover:text-white transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
