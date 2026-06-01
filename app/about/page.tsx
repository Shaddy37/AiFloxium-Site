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
    <main id="main-content" className="relative bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutGraphJsonLd) }}
      />
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-32 px-6 container mx-auto relative overflow-hidden bg-hero-gradient rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-80 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/55 uppercase tracking-widest relative z-10">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
          <span className="text-white font-black">About</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white tracking-[-0.035em] mb-6 md:mb-8 leading-[0.95]">
          The person <span className="text-brush text-3xl md:text-6xl lg:text-8xl ml-4 text-brand-orange">building</span> <br /><span className="text-brand-orange">AIFLOXIUM</span>.
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl font-medium leading-relaxed">
          I am <span className="text-white font-bold">{PERSON_NAME}</span>, an Agentic Systems Developer. Previously building self-hosted workflows, I transitioned to Agentic AI with the emergence of Claude Code. Today, I use developer frameworks like Antigravity, Claude Code, and OpenAI Codex to build agentic operating systems, vibe-coded dashboards, and apply AI directly to existing databases.
        </p>
      </div>

      <Vision />
      <CapabilitiesEngineered />

      {/* Cinematic Timeline Section */}
      <section className="py-24 md:py-32 bg-zinc-50 text-brand-plum relative z-20 border-y border-zinc-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-xl md:text-4xl font-heading font-black tracking-[-0.035em] mb-4">How the work evolved</h2>
            <p className="text-zinc-600 font-medium">From single automations to full systems and shipped products.</p>
          </div>
          
          <div className="space-y-16 pl-4 md:pl-0 border-l-2 md:border-l-0 border-zinc-200">
            {[
              { year: "Phase 1", title: "Workflow Automation Foundations", desc: "Engineered high-volume data integration pipelines and workflow scripts, helping businesses automate repetitive operations and manual data tasks.", icon: <Cpu /> },
              { year: "Phase 2", title: "Shift to Agentic AI & Vibe Coding", desc: "Adopted tools like Antigravity, Claude Code, and OpenAI Codex to build agentic operating systems, custom vibe-coded dashboards, and dynamic multi-agent tools.", icon: <Database /> },
              { year: "Phase 3", title: "Applied AI Systems & Voice Agents", desc: "Applying intelligent AI reasoning layers directly to client databases, running conversational Voice AI agents (<500ms latency), and delivering white-label AI backends for global clients.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 md:items-center">
                <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 w-full h-full">
                   <div className="w-0.5 h-full bg-zinc-200" />
                   <div className="absolute top-0 w-12 h-12 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg -translate-y-1/2">
                      {item.icon}
                   </div>
                </div>
                
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                  <span className="text-sm font-bold text-brand-orange uppercase tracking-widest block mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold font-heading mb-4 text-brand-plum">{item.title}</h3>
                  <p className="text-zinc-700 font-medium leading-relaxed bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">{item.desc}</p>
                </div>
                
                {/* Mobile icon dot */}
                <div className="md:hidden absolute -left-[25px] top-0 w-4 h-4 rounded-full bg-brand-orange border-4 border-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-t border-brand-plum/10" data-theme="dark">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-plum-glow opacity-30 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-4xl font-heading font-black tracking-[-0.035em] mb-4 text-white">Working style</h2>
            <p className="text-zinc-400 font-medium">How I approach projects, delivery, and technical execution.</p>
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
