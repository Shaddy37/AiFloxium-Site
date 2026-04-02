'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const SCATTER_TRANSFORMS: Record<number, { x: string; y: string; rotate: number }> = {
  1: { x: '-15%', y: '60%', rotate: 8 },
  2: { x: '-30%', y: '30%', rotate: 4 },
  3: { x: '-20%', y: '40%', rotate: -6 },
  4: { x: '0%', y: '8%', rotate: -8 },
  5: { x: '0%', y: '-20%', rotate: 5 },
  6: { x: '0%', y: '20%', rotate: -3 },
  7: { x: '0%', y: '-40%', rotate: -5 },
  8: { x: '0%', y: '15%', rotate: 10 },
}

interface FancyLinkItem {
  label: string
  href: string
}

interface FancyTextHoverProps {
  links?: FancyLinkItem[]
  className?: string
}

function FancyWord({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fancy-word text-zinc-600 hover:text-white text-5xl md:text-7xl font-heading font-black uppercase no-underline transition-colors duration-250 ease-[cubic-bezier(0.76,0,0.24,1)] tracking-tighter"
    >
      {label.split('').map((char, i) => {
        const childIndex = i + 1
        const transform = SCATTER_TRANSFORMS[childIndex]
        const xPercent = hovered && transform ? parseFloat(transform.x) : 0
        const yPercent = hovered && transform ? parseFloat(transform.y) : 0
        const rotation = hovered && transform ? transform.rotate : 0

        return (
          <motion.span
            key={i}
            className="inline-block"
            animate={{
              x: xPercent,
              y: yPercent,
              rotate: rotation,
            }}
            transition={{
              duration: hovered ? 0.2 : 0.35,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {char}
          </motion.span>
        )
      })}
    </a>
  )
}

export default function FancyTextHover({ links = [], className }: FancyTextHoverProps) {
  return (
    <div
      className={cn('flex w-full flex-col items-center justify-center gap-4 py-2', className)}
    >
      {links.map((link) => (
        <FancyWord key={link.label} label={link.label} href={link.href} />
      ))}
    </div>
  )
}
