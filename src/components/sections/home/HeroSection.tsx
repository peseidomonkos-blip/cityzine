'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle gradient at bottom for text legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="pt-24 md:pt-0">
          {['CITY', 'ZINE'].map((line, i) => (
            <div key={line} className="overflow-hidden">
              <motion.h1
                className="font-[family-name:var(--font-barlow)] font-black text-[22vw] md:text-[18vw] lg:text-[15vw] text-[#F2EDE6] leading-[0.88] tracking-tight uppercase drop-shadow-sm"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
                {i === 1 && <span className="text-[#C5BDB0]">.</span>}
              </motion.h1>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-[#DDD7CD]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
