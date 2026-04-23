'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { mainNav } from '@/data/navigation';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black"
        >
          <div className="flex h-full flex-col px-6 py-6">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-white p-2 hover:text-gray transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2">
              {mainNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-display text-6xl sm:text-7xl text-white hover:text-gray transition-colors duration-300 block py-3"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-editorial text-muted pb-6"
            >
              Street Culture / Print / Apparel
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
