"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SlideTabsProps {
  tabs?: { label: string; href: string }[];
  className?: string;
}

export const SlideTabs: React.FC<SlideTabsProps> = ({ 
  tabs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Consulting", href: "/ai-consulting" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
  ],
  className,
}) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
            const { width } = selectedTab.getBoundingClientRect();
            setPosition({
                left: selectedTab.offsetLeft,
                width,
                opacity: 1,
            });
        }
      }}
      className={cn(
        "relative mx-auto flex w-fit rounded-full border border-white/20 bg-black/50 p-1",
        className
      )}
    >
      {tabs.map((tab, i) => (
         <Tab
            key={tab.href}
            ref={(el) => { tabsRef.current[i] = el; }}
            setPosition={setPosition}
            onClick={() => setSelected(i)}
            href={tab.href}
          >
            {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: (pos: { left: number; width: number; opacity: number }) => void;
  onClick: () => void;
  href: string;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, href }, ref) => {
    const handleMouseEnter = () => {
      const element = ref as React.RefObject<HTMLLIElement>;
      if (!element?.current) return;

      const { width } = element.current.getBoundingClientRect();

      setPosition({
        left: element.current.offsetLeft,
        width,
        opacity: 1,
      });
    };

    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        className="relative z-10 block cursor-pointer px-4 py-2 text-xs uppercase text-white/70 hover:text-white transition-colors md:px-5 md:py-2.5 md:text-xs font-medium tracking-widest"
      >
        <Link href={href}>
          {children}
        </Link>
      </li>
    );
  }
);

Tab.displayName = "Tab";

interface CursorProps {
  position: { left: number; width: number; opacity: number };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-8 rounded-full bg-white md:h-9"
    />
  );
};
