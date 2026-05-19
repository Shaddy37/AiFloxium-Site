"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { BRAND_NAME, BRAND_SIGNATURE_NAME, CALENDLY_URL } from '@/lib/site';

const links = [
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Tools", href: "/tools" },
  { name: "Consulting", href: "/ai-consulting" },
  { name: "Resources", href: "/resources" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const headerTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 22,
  mass: 0.5,
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { type: "spring" as const, damping: 30, stiffness: 300 } 
  },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { scrolled, scrollY } = useScroll({ threshold: 50 });
  const lastScrollY = React.useRef(0);
  const [visible, setVisible] = React.useState(true);
  const [isLight, setIsLight] = React.useState(false);

  // Handle scroll-related effects (visibility and theme checking)
  React.useEffect(() => {
    // 1. Update Visibility
    if (scrollY > lastScrollY.current && scrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY.current = scrollY;

    // 2. Update Theme based on section under navbar
    const checkTheme = () => {
      const lightSections = document.querySelectorAll('section[data-theme="light"]');
      let currentIsLight = false;

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the top of a light section has passed the navbar top 
        // OR if the navbar is currently within a light section
        if (rect.top <= 40 && rect.bottom >= 40) {
          currentIsLight = true;
        }
      });

      setIsLight(currentIsLight);
    };

    checkTheme();
  }, [scrollY]);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.header
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={navVariants}
      transition={headerTransition}
      className={cn(
        'fixed top-0 z-[100] mx-auto w-full border-b border-transparent transition-all duration-500',
        {
          'bg-brand-bg/80 supports-[backdrop-filter]:bg-brand-bg/40 border-brand-plum/10 backdrop-blur-xl md:top-4 md:max-w-5xl md:rounded-full md:border md:shadow-[0_0_40px_rgba(0,0,0,0.6)] left-1/2 -translate-x-1/2':
            !open && !isLight,
          'bg-white/90 border-gray-200 backdrop-blur-xl md:top-4 md:max-w-5xl md:rounded-full md:border md:shadow-[0_10px_30px_rgba(0,0,0,0.08)] left-1/2 -translate-x-1/2':
            scrolled && !open && isLight,
          'bg-brand-bg': open,
        },
      )}
    >
      <motion.nav
        className={cn(
          'container mx-auto flex h-20 w-full items-center justify-between px-6',
        )}
        animate={{
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
        }}
        transition={headerTransition}
      >
        <Link href="/" className="relative group z-[110]" onClick={() => setOpen(false)}>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
              <Image
                src="/brand/aifloxium-logo.png"
                alt="AIFLOXIUM founder logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
              "text-lg font-heading font-black tracking-widest uppercase transition-all duration-300",
              isLight && !open 
                ? "text-brand-plum" 
                : "bg-gradient-to-r from-white via-white to-brand-plum bg-clip-text text-transparent drop-shadow-sm"
            )}>
                {BRAND_NAME}
              </span>
              <span
                className={cn(
                  'mt-1 text-[9px] font-bold uppercase tracking-[0.25em] transition-colors',
                  isLight && !open ? 'text-zinc-500' : 'text-white/70'
                )}
              >
                by {BRAND_SIGNATURE_NAME}
              </span>
            </div>
          </motion.div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link 
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }), 
                  "rounded-full px-5 text-xs font-bold uppercase tracking-widest transition-all",
                  isLight && !open 
                    ? "text-zinc-700 hover:text-brand-plum hover:bg-brand-plum/5" 
                    : "text-zinc-100/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="ml-4 flex items-center gap-3"
          >
            <Link 
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }), 
                "rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 px-6 text-xs font-bold uppercase tracking-widest transition-all shadow-lg border-none"
              )}
            >
              Book a Call
            </Link>
          </motion.div>
        </div>

        <Button 
          size="icon" 
          variant="ghost" 
          onClick={() => setOpen(!open)} 
          className={cn(
            "lg:hidden z-[110] transition-colors",
            isLight && !open ? "text-brand-plum" : "text-white"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <MenuToggleIcon open={open} className="size-6" duration={300} />
        </Button>
      </motion.nav>

      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="bg-brand-bg fixed inset-0 z-[105] flex flex-col overflow-hidden pt-24 md:hidden"
          >
            <div className="flex h-full w-full flex-col justify-between gap-y-8 p-10">
              <div className="grid gap-y-4">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-black text-white hover:text-brand-orange transition-colors uppercase italic tracking-tighter"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex flex-col gap-4 mb-8"
              >
                <Link 
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="w-full h-16 rounded-3xl bg-brand-orange text-white flex items-center justify-center font-bold uppercase tracking-widest text-sm hover:bg-brand-orange/90 transition-all shadow-xl shadow-brand-orange/10"
                >
                  Book a Discovery Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
