import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Vision, Founder } from "@/components/sections/HomeSections";
import { Accordion05 } from "@/components/ui/accordion-05";
import { TrendingUp, Database, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Muhammad Shadab Shams | AI Automation Expert',
  description: 'I am an AI automation expert specializing in n8n workflows and enterprise automation. I engineer custom workflow architectures that reduce operational costs by up to 80%.',
  keywords: ['AI automation expert', 'n8n workflow automation', 'custom AI workflow solutions'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Muhammad Shadab Shams | AI Automation Expert',
    description: 'I am an AI automation expert specializing in n8n workflows and enterprise automation. I engineer custom workflow architectures that reduce operational costs by up to 80%.',
    type: 'website',
    url: 'https://aifloxium.online/about',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Shadab Shams - AI Automation Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Muhammad Shadab Shams | AI Automation Expert',
    description: 'I am an AI automation expert specializing in n8n workflows and enterprise automation.',
    images: ['/og-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-32 px-6 container mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/20 blur-[150px] rounded-full pointer-events-none -z-10" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tighter mb-6 md:mb-8 leading-[0.9]">
          THE <span className="block md:inline">AUTOMATOR</span> <br /><span className="text-gradient">BEHIND AIFLOXIUM.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
          I am <span className="text-white font-bold">Muhammad Shadab Shams</span>, the founder of AIFLOXIUM. I build intelligent systems that work 24/7 so businesses do not have to.
        </p>
      </div>

      <Vision />

      {/* Clean White Timeline Section */}
      <section className="py-24 md:py-32 bg-white text-black clip-path-slant-top-bottom relative z-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-xl md:text-4xl font-heading font-black tracking-tight mb-4">THE AIFLOXIUM TIMELINE</h2>
            <p className="text-zinc-600 font-medium">From custom scripts to full-scale enterprise architectures.</p>
          </div>
          
          <div className="space-y-16 pl-4 md:pl-0 border-l-2 md:border-l-0 border-zinc-200">
            {[
              { year: "Phase 1: Inception", title: "Custom Scripts & Basic Logic", desc: "Started by identifying massive operational inefficiencies in local businesses and deploying Python-based scraping and automation vectors.", icon: <Cpu /> },
              { year: "Phase 2: Integration", title: "API & Data Pipeline Mastery", desc: "Graduated to connecting disparate enterprise tools across finance and CRMs, reducing cross-platform manual data entry by 85%.", icon: <Database /> },
              { year: "Phase 3: Supremacy", title: "AI Agent & RAG Architectures", desc: "Present day. Deploying massive intelligence systems, autonomous agents, and RAG architectures that allow companies to instantly query their own proprietary data.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:items-center">
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 w-full h-full">
                   <div className="w-0.5 h-full bg-zinc-200" />
                   <div className="absolute top-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg -translate-y-1/2">
                      {item.icon}
                   </div>
                </div>
                
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest block mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold font-heading mb-4">{item.title}</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed bg-zinc-50 p-6 rounded-2xl">{item.desc}</p>
                </div>
                
                {/* Mobile icon dot */}
                <div className="md:hidden absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-black border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-heading font-black tracking-tight mb-4">MY STORY</h2>
            <p className="text-zinc-500 font-medium">Everything you need to know about who I am and what I do.</p>
          </div>
          <Accordion05 />
        </div>
      </section>

      <Founder />
      <Footer />
    </main>
  );
}
