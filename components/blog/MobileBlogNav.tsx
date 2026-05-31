"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Compass, X, ChevronUp, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function MobileBlogNav() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [activeText, setActiveText] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for content to render, then extract headings
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('article h2, article h3'));
      const headingData = elements.map((elem) => {
        if (!elem.id) {
          elem.id = elem.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '';
        }
        return {
          id: elem.id,
          text: elem.textContent || '',
          level: Number(elem.tagName.charAt(1))
        };
      }).filter(h => h.id);

      setHeadings(headingData);
      if (headingData.length > 0) {
        setActiveId(headingData[0].id);
        setActiveText(headingData[0].text);
      }

      const callback = (entries: IntersectionObserverEntry[]) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const currentId = visibleEntries[0].target.id;
          setActiveId(currentId);
          const matched = headingData.find(h => h.id === currentId);
          if (matched) {
            setActiveText(matched.text);
          }
        }
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.5
      });

      elements.forEach(elem => observer.observe(elem));

      return () => observer.disconnect();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (headings.length === 0) return null;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element, { offset: -100 });
      } else {
        const offset = 80; // header height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setActiveId(id);
      const matched = headings.find(h => h.id === id);
      if (matched) setActiveText(matched.text);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Bottom Bar */}
      <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 lg:hidden">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
          className="flex w-full max-w-md items-center justify-between rounded-full border border-white/10 bg-zinc-950/90 px-5 py-3.5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:bg-zinc-900/90 active:scale-95"
        >
          <div className="flex items-center gap-3 overflow-hidden text-left">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
              <Compass className="h-4 w-4" />
            </div>
            <div className="overflow-hidden">
              <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-zinc-400">Current Section</div>
              <div className="truncate text-xs font-bold text-white max-w-[200px] xs:max-w-[260px]">
                {activeText || 'Introduction'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            <span>Explore</span>
            <ChevronUp className={cn("h-3 w-3 transition-transform duration-300", isOpen && "rotate-180")} />
          </div>
        </motion.button>
      </div>

      {/* Bottom Sheet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-45 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Content Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-h-[75vh] rounded-t-[2.5rem] border-t border-white/10 bg-zinc-950 p-6 text-white shadow-[0_-20px_50px_rgba(0,0,0,0.4)] lg:hidden flex flex-col"
            >
              {/* Drag Handle & Header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Compass className="h-5 w-5 text-brand-orange" />
                  <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-zinc-300">
                    Table of Contents
                  </h4>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Scrollable list */}
              <div className="overflow-y-auto pr-1 flex-1 py-2">
                <ul className="flex flex-col gap-1.5">
                  {headings.map((heading) => {
                    const isActive = activeId === heading.id;
                    return (
                      <li key={heading.id}>
                        <button
                          onClick={() => handleScrollTo(heading.id)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all",
                            heading.level === 3 ? "pl-8 text-xs text-zinc-400" : "text-sm font-semibold text-zinc-200",
                            isActive 
                              ? "bg-brand-orange/10 text-brand-orange border-l-2 border-brand-orange" 
                              : "hover:bg-white/5"
                          )}
                        >
                          <span className="truncate pr-4">{heading.text}</span>
                          {isActive && <Check className="h-4 w-4 shrink-0 text-brand-orange" />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
