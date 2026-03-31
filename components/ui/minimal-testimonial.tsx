"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Working with them transformed our entire brand identity. The attention to detail was exceptional.",
    name: "Sarah Chen",
    role: "Founder at Zenith Digital",
    image: "/images/nano-banana/avatar-1.webp",
  },
  {
    quote: "A rare talent who combines strategic thinking with flawless execution. Highly recommended.",
    name: "Marcus Johnson",
    role: "CTO at NexaFlow Systems",
    image: "/images/nano-banana/avatar-2.webp",
  },
  {
    quote: "The most seamless collaboration I've experienced. They truly understand modern design.",
    name: "Elena Voss",
    role: "Operations Lead at Veridian Labs",
    image: "/images/nano-banana/avatar-3.webp",
  },
]


export function TestimonialsMinimal() {
  const [active, setActive] = useState(0)

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-12">
      <div className="glass-card relative rounded-[2.5rem] p-10 md:p-14 overflow-hidden border border-white/5 shadow-2xl">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Quote Section */}
        <div className="relative min-h-[160px] md:min-h-[140px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(12px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <p className="text-3xl md:text-4xl font-light leading-[1.2] tracking-tight text-gradient italic">
                 {'&quot;' + testimonials[active].quote + '&quot;'}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Author Row */}
        <div className="flex items-center gap-8 mt-12">
          {/* Avatars Container */}
          <div className="flex items-center gap-3 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "relative w-14 h-14 rounded-full overflow-hidden transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1)",
                  active === i 
                    ? "ring-2 ring-primary scale-110 shadow-[0_0_25px_rgba(var(--color-primary),0.3)] z-10" 
                    : "opacity-30 grayscale hover:opacity-100 hover:grayscale-0 hover:scale-105"
                )}
              >
                <Image 
                  src={t.image || "/placeholder.svg"} 
                  alt={t.name} 
                  fill 
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Active Author Info */}
          <div className="relative flex-1 min-h-[56px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <span className="text-lg font-bold text-foreground tracking-wide">{testimonials[active].name}</span>
                <span className="text-xs text-muted-foreground font-bold uppercase tracking-[0.2em] opacity-60 mt-1">{testimonials[active].role}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
