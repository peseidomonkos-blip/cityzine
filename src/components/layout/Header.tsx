'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { mainNav } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // On the home page, the header sits over the video — use light colors until scrolled
  const isHome = pathname === '/';
  const isOverVideo = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-[1440px] flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'font-[family-name:var(--font-barlow)] font-black text-xl md:text-2xl tracking-wide uppercase transition-colors duration-300',
              isOverVideo
                ? 'text-[#F2EDE6] hover:text-[#C5BDB0]'
                : 'text-white hover:text-gray'
            )}
          >
            CITYZINE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-editorial text-sm tracking-wide transition-colors duration-300',
                  isOverVideo
                    ? 'text-[#C5BDB0] hover:text-[#F2EDE6]'
                    : 'text-gray hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className={cn(
                'md:hidden p-2 transition-colors',
                isOverVideo
                  ? 'text-[#F2EDE6] hover:text-[#C5BDB0]'
                  : 'text-white hover:text-gray'
              )}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
