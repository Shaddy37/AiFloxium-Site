"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CALENDLY_URL } from '@/lib/site';

type NavLinkItem = {
  name: string;
  href: string;
};

const navLinks: NavLinkItem[] = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Tools", href: "/tools/automation-roi-calculator" },
  { name: "Comparisons", href: "/vs" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

// Custom easing for high-end feel
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Monitor scroll for floating island & hide/show behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Floating island state
      setScrolled(currentScrollY > 40);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body overflow locking for mobile menu
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const menuVariants: Variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 280, damping: 30, mass: 0.8 } 
    },
    exit: { 
      y: "-100%", 
      opacity: 0,
      transition: { ease: easeOutExpo, duration: 0.5 } 
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        ease: easeOutExpo,
        duration: 0.6
      }
    })
  };

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: visible ? 0 : -100, 
          opacity: visible ? 1 : 0 
        }}
        transition={{ ease: easeOutExpo, duration: 0.6 }}
        className={cn(
          "fixed inset-x-0 z-50 flex justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled ? "top-4 sm:top-6" : "top-0 sm:top-2"
        )}
      >
        <div 
          className={cn(
            "w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            scrolled ? "max-w-4xl" : "max-w-7xl"
          )}
        >
          {/* Double-Bezel Architecture */}
          <div className={cn(
            "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full",
            scrolled 
              ? "p-[1px] bg-gradient-to-b from-black/10 to-black/0 shadow-[0_12px_40px_rgba(0,0,0,0.1)]" 
              : "p-0 bg-transparent shadow-none"
          )}>
            <header
              className={cn(
                "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] relative",
                scrolled 
                  ? "px-4 py-2 sm:py-2.5 rounded-full bg-[var(--background)] shadow-[0_0_0_1px_rgba(0,0,0,1)_inset,0_0_0_1.5px_rgba(0,0,0,0.03)_inset]" 
                  : "px-4 sm:px-8 py-6 bg-transparent"
              )}
            >
              {/* Brand */}
              <Link 
                href="/" 
                className="relative z-50 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50 rounded-lg px-2 py-1 -ml-2"
                aria-label="Home"
              >
                <span className="font-sans font-bold text-xl sm:text-2xl tracking-tighter text-black">
                  Aifloxium<span className="text-[var(--glow-primary)]">.</span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative px-3 py-1.5 text-sm font-medium text-black/70 hover:text-black transition-colors duration-300 rounded-full hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* CTA & Mobile Toggle */}
              <div className="flex items-center gap-2 sm:gap-3 z-50">
                <Link
                  href="/contact"
                  className={cn(
                    "relative group items-center justify-center rounded-full text-sm font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
                    scrolled 
                      ? "hidden sm:flex px-4 py-2 sm:px-5 sm:py-2.5" 
                      : "hidden sm:flex px-5 py-2.5 sm:px-6 sm:py-3 bg-[var(--foreground)] text-[var(--background)] hover:scale-[0.98] active:scale-95 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)]"
                  )}
                  style={{
                    background: scrolled ? 'transparent' : 'var(--foreground)',
                    color: scrolled ? 'var(--foreground)' : 'var(--background)'
                  }}
                >
                  {scrolled && (
                    <div className="absolute inset-0 rounded-full border border-[var(--foreground)]/20 bg-[var(--foreground)]/5 transition-colors group-hover:bg-[var(--foreground)]/10" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    Book a call
                  </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9 items-center rounded-full bg-[var(--foreground)]/5 hover:bg-[var(--foreground)]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/30"
                  aria-expanded={open}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  <span
                    className={cn(
                      "w-4 h-[1.5px] bg-[var(--foreground)] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      open ? "rotate-45 translate-y-[6.5px]" : ""
                    )}
                  />
                  <span
                    className={cn(
                      "w-4 h-[1.5px] bg-[var(--foreground)] rounded-full transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      open ? "opacity-0" : "opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "w-4 h-[1.5px] bg-[var(--foreground)] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      open ? "-rotate-45 -translate-y-[6.5px]" : ""
                    )}
                  />
                </button>
              </div>
            </header>
          </div>
        </div>
      </motion.div>

      {/* MOBILE FULL-SCREEN OVERLAY MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[var(--background)]/95 backdrop-blur-3xl lg:hidden flex flex-col justify-center px-6"
          >
            {/* Background ambient light */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 via-transparent to-transparent pointer-events-none" />

            <nav className="flex flex-col gap-6 w-full max-w-sm mx-auto relative z-10" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-3xl sm:text-4xl font-medium text-black/80 hover:text-black transition-colors border-b border-black/5 focus-visible:outline-none focus-visible:text-black"
                  >
                    <span>{link.name}</span>
                    <svg className="w-5 h-5 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              className="mt-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeOutExpo }}
            >
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full h-14 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-full flex items-center justify-center text-sm tracking-wide hover:opacity-90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/50"
              >
                Book a consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

