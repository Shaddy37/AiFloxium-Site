"use client";

import React, { useEffect, useState } from 'react';
import { Compass, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function MobileTopTOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
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
      }

      const callback = (entries: IntersectionObserverEntry[]) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visibleEntries[0].target.id);
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
    }
  };

  return (
    <div className="mb-8 rounded-3xl border border-brand-plum/10 bg-brand-plum/5 p-5 shadow-sm lg:hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-left"
      >
        <div className="flex items-center gap-2.5">
          <Compass className="h-5 w-5 text-brand-plum" />
          <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-brand-plum">
            Table of Contents
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-500">
          <span>{isExpanded ? 'Hide' : 'Show'}</span>
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isExpanded && "rotate-180")} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-4 flex flex-col gap-1 border-t border-brand-plum/10 pt-4">
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <li key={heading.id}>
                    <button
                      onClick={() => handleScrollTo(heading.id)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all",
                        heading.level === 3 ? "pl-6 text-xs text-zinc-500" : "text-sm font-semibold text-zinc-700",
                        isActive 
                          ? "bg-brand-plum/5 text-brand-plum font-bold" 
                          : "hover:bg-brand-plum/5"
                      )}
                    >
                      <span className="truncate pr-4">{heading.text}</span>
                      {isActive && <Check className="h-3.5 w-3.5 shrink-0 text-brand-plum" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
