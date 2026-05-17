import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Vision, Founder } from "@/components/sections/HomeSections";
import { Accordion05 } from "@/components/ui/accordion-05";
import { TrendingUp, Database, Cpu } from "lucide-react";
import { DEFAULT_DESCRIPTION, PERSON_NAME } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${PERSON_NAME} | AI Automation Engineer`,
  description: DEFAULT_DESCRIPTION,
  path: '/about',
  keywords: [
    'Muhammad Shadab Shams',
    'AI automation engineer',
    'n8n workflow automation',
    'custom AI systems'
  ]
});

export default function AboutPage() {
  return (
    <main className="relative bg-brand-bg min-h-screen">
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-32 px-6 container mx-auto relative overflow-hidden bg-hero-gradient rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-80 blur-[150px] rounded-full pointer-events-none -z-10" />
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-tighter mb-6 md:mb-8 leading-[0.9]">
          THE PERSON <span className="text-brush text-3xl md:text-6xl lg:text-8xl ml-4">BUILDING</span> <br /><span className="text-gradient">AIFLOXIUM.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
          I am <span className="text-white font-bold">{PERSON_NAME}</span>. I build
          automation systems, internal tools, and practical AI products for teams
          that need real execution, not just ideas.
        </p>
      </div>

      <Vision />

      {/* Cinematic Timeline Section */}
      <section className="py-24 md:py-32 bg-brand-bg text-white relative z-20 border-y border-brand-plum/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-xl md:text-4xl font-heading font-black tracking-tight mb-4 uppercase">HOW THE WORK EVOLVED</h2>
            <p className="text-zinc-400 font-medium">From single automations to full systems and shipped products.</p>
          </div>
          
          <div className="space-y-16 pl-4 md:pl-0 border-l-2 md:border-l-0 border-brand-plum/10">
            {[
              { year: "Phase 1", title: "Automation Foundations", desc: "Started with workflow fixes, scraping, and repetitive task automation for businesses that were spending too much time on manual work.", icon: <Cpu /> },
              { year: "Phase 2", title: "Integrations & Internal Systems", desc: "Moved into deeper tool integration, data flows, and business systems that connected CRMs, operations, and reporting.", icon: <Database /> },
              { year: "Phase 3", title: "AI Products & Agentic Workflows", desc: "Current focus: product-grade builds, AI agents, content systems, and software that can be shipped as real business infrastructure.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:items-center">
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 w-full h-full">
                   <div className="w-0.5 h-full bg-brand-plum/10" />
                   <div className="absolute top-0 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg -translate-y-1/2">
                      {item.icon}
                   </div>
                </div>
                
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <span className="text-sm font-bold text-brand-orange uppercase tracking-widest block mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-white">{item.title}</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed bg-brand-plum/10 p-6 rounded-2xl border border-brand-plum/20">{item.desc}</p>
                </div>
                
                {/* Mobile icon dot */}
                <div className="md:hidden absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-brand-orange border-4 border-brand-bg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-plum-glow opacity-30 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-heading font-black tracking-tight mb-4">WORKING STYLE</h2>
            <p className="text-zinc-400 font-medium">How I approach projects, delivery, and technical execution.</p>
          </div>
          <Accordion05 />
        </div>
      </section>

      <Founder />
      <Footer />
    </main>
  );
}
