"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CALENDLY_URL } from '@/lib/site';

type NavLinkItem = {
  name: string;
  href: string;
};

const navLinks: NavLinkItem[] = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Tools", href: "/tools" },
  { name: "Comparisons", href: "/vs" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Monitor scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Visible state: hide on scroll down, show on scroll up
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

  // Body overflow locking
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

  // Stagger variants for mobile menu
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { type: "spring" as const, stiffness: 380, damping: 35 } 
    },
    exit: { 
      x: "100%", 
      transition: { ease: [0.22, 1, 0.36, 1] as const, duration: 0.3 } 
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15 + i * 0.05,
        ease: [0.22, 1, 0.36, 1] as const,
        duration: 0.4
      }
    })
  };

  const btnVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
        duration: 0.4
      }
    }
  };


  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: visible ? 0 : -100, 
          opacity: visible ? 1 : 0 
        }}
        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-[background-color,border-color,padding] duration-300 ease-[var(--ease-out)]",
          scrolled 
            ? "bg-[#0a0608]/85 backdrop-blur-md border-b border-white/5 py-4" 
            : "bg-transparent"
        )}
      >
        {/* Left: Cursive Brand Name */}
        <Link href="/" className="font-dancing text-2xl md:text-3xl text-white tracking-wide cursor-pointer z-50">
          Aifloxium
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-white/80 hover:text-[#E0AAFF] text-[11px] xl:text-xs uppercase tracking-widest transition-colors duration-200 ease-[var(--ease-out)] font-inter font-semibold py-2"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop Consultation Button / Mobile Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Button */}
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-white text-black px-6 py-2.5 rounded-full font-semibold text-xs tracking-wider hover:bg-[#E0AAFF] transition-[transform,background-color,filter] duration-200 ease-[var(--ease-out)] active:scale-[0.97] button-glow font-inter uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0608]"
          >
            Book a call
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-between w-6 h-[18px] cursor-pointer focus:outline-none z-50 relative"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.4s' }}
              className={cn(
                "w-full h-[1.5px] bg-white rounded-full origin-left",
                open && "rotate-45 translate-y-[4.5px] translate-x-[2px]"
              )}
            />
            <span
              style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s' }}
              className={cn(
                "w-full h-[1.5px] bg-white rounded-full",
                open && "opacity-0 scale-0"
              )}
            />
            <span
              style={{ transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.4s' }}
              className={cn(
                "w-full h-[1.5px] bg-white rounded-full origin-left",
                open && "-rotate-45 -translate-y-[4.5px] translate-x-[2px]"
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Slide Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[340px] z-40 bg-[#0a0608]/95 backdrop-blur-xl border-l border-white/10 flex flex-col justify-between p-10 pt-32 lg:hidden"
            >
              <div className="flex flex-col gap-6 overflow-y-auto pb-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-white/90 hover:text-[#E0AAFF] text-2xl font-instrument italic tracking-wide block py-2 transition-colors duration-200 ease-[var(--ease-out)]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={btnVariants} className="w-full mt-8">
                <Link
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="w-full h-12 bg-white text-black font-semibold rounded-full flex items-center justify-center text-xs tracking-wider uppercase hover:bg-[#E0AAFF] button-glow transition-[transform,background-color,filter] duration-200 ease-[var(--ease-out)] active:scale-[0.97] font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0608]"
                >
                  Book a call
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
