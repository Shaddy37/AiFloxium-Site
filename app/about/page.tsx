import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Vision, Founder } from "@/components/sections/HomeSections";
import CapabilitiesEngineered from '@/components/sections/CapabilitiesEngineered';
import { Accordion05 } from "@/components/ui/accordion-05";
import { TrendingUp, Database, Cpu, ChevronRight } from "lucide-react";
import { DEFAULT_DESCRIPTION, PERSON_NAME, SITE_URL } from "@/lib/site";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `About ${PERSON_NAME} | Agentic Systems Developer`,
  description: DEFAULT_DESCRIPTION,
  path: '/about',
  keywords: [
    'Muhammad Shadab Shams',
    'Agentic Systems Developer',
    'Agentic OS',
    'custom AI systems'
  ]
});

const aboutBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
]);

const aboutPageJsonLd = {
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: `About ${PERSON_NAME} | Agentic Systems Developer`,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`
  },
  about: {
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: PERSON_NAME
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`
  }
};

const aboutGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [aboutBreadcrumbJsonLd, aboutPageJsonLd]
};

export default function AboutPage() {
  return (
    <main id="main-content" className="relative bg-[var(--background)] text-white min-h-screen selection:bg-[#7B2CBF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutGraphJsonLd) }}
      />
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-32 px-6 container mx-auto relative overflow-hidden bg-[var(--background)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-purple-glow)] opacity-50 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-white font-bold">About</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-instrument text-white tracking-tight mb-6 md:mb-8 leading-[1.05]">
          The person <span className="font-instrument text-[#E0AAFF] italic">building</span> <br />Aifloxium.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-inter font-light leading-relaxed">
          I am <span className="text-white font-semibold">{PERSON_NAME}</span>, an Agentic Systems Developer. Previously building self-hosted workflows, I transitioned to Agentic AI with the emergence of Claude Code. Today, I use developer frameworks like Antigravity, Claude Code, and OpenAI Codex to build agentic operating systems, vibe-coded dashboards, and apply AI directly to existing databases.
        </p>
      </div>

      <Vision />
      <CapabilitiesEngineered />

      {/* Cinematic Timeline Section */}
      <section className="py-24 md:py-32 bg-[var(--background)] text-white relative z-20 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-xl md:text-4xl font-instrument tracking-tight mb-4">How the work evolved</h2>
            <p className="text-white/60 font-inter font-light">My progression from workflow scripting to autonomous agentic architectures.</p>
          </div>
          
          <div className="space-y-16 pl-4 md:pl-0 border-l border-white/10 md:border-l-0">
            {[
              { year: "Phase 1", title: "Workflow Automation Foundations", desc: "Engineered high-volume data integration pipelines and workflow scripts, helping businesses automate repetitive operations and manual data tasks.", icon: <Cpu className="w-5 h-5 text-[#E0AAFF]" /> },
              { year: "Phase 2", title: "Shift to Agentic AI & Vibe Coding", desc: "Adopted tools like Antigravity, Claude Code, and OpenAI Codex to build agentic operating systems, custom vibe-coded dashboards, and dynamic multi-agent tools.", icon: <Database className="w-5 h-5 text-[#E0AAFF]" /> },
              { year: "Phase 3", title: "Applied AI Systems & Voice Agents", desc: "Applying intelligent AI reasoning layers directly to client databases, running conversational Voice AI agents (<500ms latency), and delivering white-label AI backends for global clients.", icon: <TrendingUp className="w-5 h-5 text-[#E0AAFF]" /> }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:items-center">
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 w-full h-full">
                  <div className="w-[1px] h-full bg-white/10" />
                  <div className="absolute top-0 w-12 h-12 bg-[#0a0608] border border-white/10 text-white rounded-full flex items-center justify-center shadow-lg -translate-y-1/2 glass-card">
                    {item.icon}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <span className="text-xs font-semibold text-[#E0AAFF] uppercase tracking-wider block mb-2 font-inter">{item.year}</span>
                  <h3 className="text-2xl font-semibold font-inter mb-4 text-white">{item.title}</h3>
                  <p className="text-white/70 font-inter font-light leading-relaxed bg-white/5 p-6 rounded-[1.5rem] border border-white/5 shadow-sm glass-card">{item.desc}</p>
                </div>
                
                {/* Mobile icon dot */}
                <div className="md:hidden absolute -left-[21px] top-0 w-3.5 h-3.5 rounded-full bg-[#E0AAFF] border-[3px] border-[#0a0608]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-purple-glow)] opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-instrument text-white tracking-tight mb-4">Working style</h2>
            <p className="text-zinc-400 font-inter font-light">How I approach technical execution, code quality, and system delivery.</p>
          </div>
          <div className="dark">
            <Accordion05 />
          </div>
        </div>
      </section>

      <Founder />
      <Footer />
    </main>
  );
}
