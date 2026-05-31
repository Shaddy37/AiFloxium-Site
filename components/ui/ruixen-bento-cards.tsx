"use client"

import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { CornerPlusIcons } from "@/components/ui/geometric-elements"

import { motion } from "framer-motion"
import { ArrowUpRight, Globe, Bot, LayoutTemplate, BrainCircuit } from "lucide-react"

const cardContents = [
  {
    title: "Lead Gen on Autopilot",
    description:
      "You shouldn't be chasing leads manually. I build AI systems that find, qualify, and book them — while you sleep. First response in under 90 seconds.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "3D Websites Built with AI",
    description:
      "A premium 3D site used to cost $10K and take months. Using Claude Code and Codex I ship the same quality — faster, cheaper, and better than a traditional agency.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Social Content, Automated",
    description:
      "Posting consistently is a full-time job. I build AI pipelines that write, format, and schedule your content across LinkedIn, Instagram, and X — without touching it yourself.",
    icon: <LayoutTemplate className="w-6 h-6" />,
  },
  {
    title: "Whatever AI Can Do for Your Business — I'll Build It",
    description:
      "CRM automation, invoice processing, internal tools, custom GPTs, voice agents, content pipelines — I find the right tool and ship the system.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
  icon?: React.ReactNode
  index: number
}> = ({
  className = "",
  title,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "liquid-glass rounded-xl p-6 lg:p-5 min-h-[200px] lg:min-h-[160px] flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,255,255,0.05)]",
        index === 3
          ? "border-brand-orange/30 bg-brand-orange/[0.02] hover:border-brand-orange/60 hover:bg-brand-orange/[0.05]"
          : "hover:border-brand-orange/30",
        className
      )}
    >
      <Link href="/services" className="h-full flex flex-col justify-between">
        <CornerPlusIcons className="opacity-40 group-hover:opacity-100 transition-opacity text-white" />

        {/* Icon and Title */}
        <div className="relative z-10 space-y-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white liquid-glass border border-white/10 group-hover:bg-brand-orange/20 transition-all duration-500 drop-shadow-md">
            {icon}
          </div>
          <h3
            className="text-xl font-black font-heading tracking-tighter text-white uppercase group-hover:text-brand-orange transition-colors duration-300 drop-shadow-md"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
          >
            {title}
          </h3>
          <p
            className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium group-hover:text-white transition-colors drop-shadow-md"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
          >
            {description}
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-orange/80 group-hover:text-brand-orange transition-colors drop-shadow-md">
          See how it works <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </Link>
    </motion.div>
  )
}

export default function RuixenBentoCards() {
  return (
    <section 
      id="bottlenecks" 
      data-theme="dark" 
      className="bg-black relative overflow-hidden lg:aspect-[1920/1080] lg:max-h-[1080px] lg:h-auto w-full max-w-[1920px] mx-auto min-h-screen py-16 lg:py-12 px-6 lg:px-16 flex flex-col justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260520_111942_8fc50f9e-4dfd-45c1-81bb-d93342a23d87.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      </div>

      <div className="container mx-auto relative z-10">

        {/* Narrative Header */}
        <div className="max-w-4xl mb-12 lg:mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-12 h-[1px] bg-brand-plum/30" />
            <h2 className="text-white tracking-[0.3em] font-black text-xs uppercase drop-shadow-md">
              What I Do For Your Business
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter leading-[0.85] mb-6 uppercase drop-shadow-xl"
            style={{ textShadow: "0px 4px 20px rgba(0,0,0,0.8)" }}
          >
            YOUR BUSINESS<br />
            <span className="relative inline-block mt-2">
              <span className="text-brush text-4xl md:text-7xl lg:text-8xl text-brand-orange">RUNS ON AI.</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-brand-orange/50 rounded-full"
              />
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-200 font-medium leading-tight max-w-2xl drop-shadow-md"
            style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.8)" }}
          >
            Tell me what you want — leads, a website, content, automation, anything.
            I implement AI to make it happen. No fluff, no templates. Just results.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
          <PlusCard {...cardContents[0]} index={0} className="lg:col-span-1" />
          <PlusCard {...cardContents[1]} index={1} className="lg:col-span-1" />
          <PlusCard {...cardContents[2]} index={2} className="lg:col-span-1" />
          <PlusCard {...cardContents[3]} index={3} className="lg:col-span-1 border-brand-orange/30 bg-brand-orange/[0.05] hover:border-brand-orange/60 hover:bg-brand-orange/[0.1]" />
        </div>
      </div>
    </section>
  )
}
