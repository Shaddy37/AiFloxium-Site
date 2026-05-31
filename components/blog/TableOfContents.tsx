"use client";

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from the MDX container
    const elements = Array.from(document.querySelectorAll('article h2, article h3'));
    const headingData = elements.map((elem) => {
      if (!elem.id) {
        // Generate an ID if it doesn't have one
        elem.id = elem.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || '';
      }
      return {
        id: elem.id,
        text: elem.textContent || '',
        level: Number(elem.tagName.charAt(1))
      };
    }).filter(h => h.id); // ensure it has an id

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeadings(headingData);

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Find all intersecting headings
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by DOM position (closest to top)
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -60% 0px',
      threshold: 1.0
    });

    elements.forEach(elem => observer.observe(elem));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block pr-6">
      <h4 className="text-sm font-bold uppercase tracking-widest text-brand-plum mb-6">On this page</h4>
      <div className="relative border-l border-zinc-200">
        <ul className="flex flex-col gap-3 relative">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li
                key={heading.id}
                className={cn(
                  "relative pl-4 transition-all duration-300",
                  heading.level === 3 ? "ml-4 text-sm" : "text-base font-medium",
                  isActive ? "text-brand-orange font-bold" : "text-zinc-500 hover:text-brand-plum"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-toc"
                    className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-brand-orange"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(heading.id);
                    if (element) {
                      if ((window as any).lenis) {
                        (window as any).lenis.scrollTo(element, { offset: -100 });
                      } else {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setActiveId(heading.id);
                  }}
                  className="block w-full line-clamp-2"
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
