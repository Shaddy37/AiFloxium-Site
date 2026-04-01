"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

const links = [
  { name: "Services", href: "/services" },
  { name: "Consulting", href: "/ai-consulting" },
  { name: "Projects", href: "/projects" },
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
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { scrolled, scrollY } = useScroll({ threshold: 50 });
  const lastScrollY = React.useRef(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (scrollY > lastScrollY.current && scrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    lastScrollY.current = scrollY;
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
        'fixed top-0 z-[100] mx-auto w-full border-b border-transparent',
        {
          'bg-black/80 supports-[backdrop-filter]:bg-black/40 border-white/5 backdrop-blur-xl md:top-4 md:max-w-5xl md:rounded-full md:border md:shadow-[0_0_40px_rgba(0,0,0,0.6)] left-1/2 -translate-x-1/2':
            scrolled && !open,
          'bg-black': open,
        },
      )}
    >
      <motion.nav
        className={cn(
          'container mx-auto flex h-20 w-full items-center justify-between px-6',
        )}
        animate={{
          height: scrolled ? 64 : 80,
          paddingTop: scrolled ? 8 : 12,
          paddingBottom: scrolled ? 8 : 12,
        }}
        transition={headerTransition}
      >
        <Link href="/" className="relative group flex items-center gap-3 z-[110]" onClick={() => setOpen(false)}>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-black border border-white/20"
          >
            <Image 
              src="/logo.svg" 
              alt="AIFLOXIUM" 
              width={36} 
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
          <span className="text-xl font-heading font-black tracking-widest text-white uppercase italic">AIFLOXIUM</span>
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
                  "text-zinc-400 hover:text-white rounded-full px-5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/5"
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
              href="#initiate" 
              className={cn(
                buttonVariants({ variant: "default" }), 
                "rounded-full bg-white text-black hover:bg-zinc-200 px-6 text-xs font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              )}
            >
              Book an Audit
            </Link>
          </motion.div>
        </div>

        <Button 
          size="icon" 
          variant="ghost" 
          onClick={() => setOpen(!open)} 
          className="lg:hidden text-white hover:bg-transparent z-[110]"
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
            className="bg-black fixed inset-0 z-[105] flex flex-col overflow-hidden pt-24 md:hidden"
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
                      className="text-4xl font-black text-white hover:text-zinc-500 transition-colors uppercase italic tracking-tighter"
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
                  href="#initiate" 
                  onClick={() => setOpen(false)}
                  className="w-full h-16 rounded-3xl bg-white text-black flex items-center justify-center font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
                >
                  Book a Systems Audit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
