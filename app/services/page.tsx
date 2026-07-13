import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import { Process } from "@/components/sections/HomeSections";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { Contact2 } from "@/components/ui/contact-2";
import { RadarScanner } from "@/components/sections/RadarScanner";
import { Pricing, Trust } from "@/components/sections/HomeSections";
import ProjectsPageClient from '@/components/pages/ProjectsPageClient';
import { CheckCircle2, ChevronRight } from "lucide-react";
import { PERSON_NAME } from "@/lib/site";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Services | ${PERSON_NAME}`,
  description:
    'Automation systems, internal tools, voice workflows, SEO systems, and product-minded implementation support for startups and SMBs.',
  path: '/services',
  keywords: [
    'AI automation services',
    'n8n workflow automation',
    'AI workflow automation',
    'AI skills'
  ]
});

const serviceFaqs = [
  {
    q: "How do you handle sensitive business data?",
    a: "I design around the tools and hosting model that fit the project. When data is sensitive, I keep the implementation explicit about where data flows and what touches third-party services."
  },
  {
    q: "How long does a typical project take?",
    a: "Smaller workflow builds can move quickly. Larger internal tools, agentic systems, or multi-step integrations take longer depending on scope, handoff needs, and number of moving parts."
  },
  {
    q: "Do you support what you build after launch?",
    a: "Yes. I can stay involved for stabilization, iteration, and support, or hand the system over cleanly if your team wants to run it."
  },
  {
    q: "Can you work with our existing stack?",
    a: "Usually yes. A lot of the job is integrating what already exists so the business gets leverage without a total rebuild."
  }
];

const servicesPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'AIFLOXIUM Services',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'n8n Workflow Automation',
          url: absoluteUrl('/services/n8n-workflow-automation')
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Autonomous Voice Agents',
          url: absoluteUrl('/services/autonomous-voice-agents')
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Vibe Coding (Claude)',
          url: absoluteUrl('/services/vibe-coding')
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'AI-Powered SEO',
          url: absoluteUrl('/services/seo-optimization')
        }
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: serviceFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    }
  ]
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="relative bg-white text-zinc-900 min-h-screen selection:bg-[#7B2CBF] selection:text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageJsonLd) }}
      />
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden bg-gradient-to-b from-black via-[#0a0608] to-[#0a0608] rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2CBF]/10 opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-white font-bold">Services</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-instrument text-white tracking-tight mb-8 leading-[1.05]">
          What I <span className="font-instrument text-[#E0AAFF] italic">build.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-inter font-light leading-relaxed">
          Practical AI systems for startups and growing businesses: automation,
          internal software, product builds, and workflows that save real time.
        </p>
      </div>

      <Services />
      <Process />
      <StickyFeatureSection />

      {/* FAQ Accordion Block */}
      <section className="py-32 px-6 bg-white text-zinc-900 relative border-t border-zinc-100">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-instrument text-zinc-900 tracking-tight mb-6 leading-[1.05]">
              How I <br /> <span className="font-instrument text-[#7B2CBF] italic">work.</span>
            </h2>
            <p className="text-zinc-600 font-inter font-light leading-relaxed">Clear answers on process, timelines, delivery, and how the work is handled.</p>
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            {serviceFaqs.map((faq, i) => (
              <div key={i} className="group p-8 bg-zinc-50 border border-zinc-200 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-300 rounded-2xl liquid-glass-light shadow-sm">
                <h3 className="text-xl font-semibold font-inter mb-4 flex items-center gap-4 text-zinc-900 group-hover:text-[#7B2CBF] transition-colors">
                  <CheckCircle2 className="text-[#7B2CBF] shrink-0 group-hover:scale-110 transition-transform" />
                  {faq.q}
                </h3>
                <p className="text-zinc-600 font-inter font-light pl-10 leading-relaxed transition-colors">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Merged AI Consulting Section --- */}
      <section id="consulting" className="relative bg-white pt-24 pb-12 border-t border-zinc-100">
        <div className="container mx-auto px-6 max-w-6xl mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-instrument text-zinc-900 tracking-tight leading-[1.05]">
            Strategic <span className="font-instrument text-[#7B2CBF] italic">consulting.</span>
          </h2>
          <p className="text-zinc-600 font-inter font-light leading-relaxed max-w-2xl mt-4">
            For teams that know they need better systems but want a clear plan before they invest in the build.
          </p>
        </div>
        <RadarScanner />
        <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-16 py-20 mt-8 border-t border-zinc-100">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-instrument text-zinc-900 tracking-tight mb-8 leading-[1.05]">
              The delivery <br /> <span className="font-instrument text-[#7B2CBF] italic">roadmap.</span>
            </h2>
            <p className="text-zinc-500 font-inter font-light leading-relaxed">A structured way to go from confusion to a build-ready plan.</p>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { w: "01", t: "Current-State Review", d: "I review the workflow, tools, bottlenecks, and business constraints so the real problem is defined clearly." },
              { w: "02", t: "Feasibility & Scope", d: "I map what should be automated, what should stay human, and what the best implementation path looks like." },
              { w: "03", t: "Build Plan", d: "You get a concrete delivery roadmap with scope, priorities, and the tradeoffs that matter before build work starts." },
              { w: "04", t: "Execution Option", d: "Your team can use the roadmap internally, or I can stay involved and build the system with you." }
            ].map((wk, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-300 shadow-sm">
                  <span className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-wider mb-4 block font-inter">Step {wk.w}</span>
                  <h3 className="text-lg font-semibold font-inter mb-3 text-zinc-900">{wk.t}</h3>
                  <p className="text-zinc-500 font-inter font-light leading-relaxed text-sm">{wk.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Merged Projects Section --- */}
      <section id="projects" className="relative bg-white border-t border-zinc-100 py-12">
        <ProjectsPageClient />
      </section>

      {/* --- Merged Pricing Section --- */}
      <section id="pricing" className="relative bg-white border-t border-zinc-100 pb-12">
        <Trust />
        <Pricing />
      </section>

      
      <section className="bg-white border-t border-zinc-100">
        <Contact2 
          title="Book a Discovery Call."
          description="Tell me what you need built, automated, fixed, or shipped."
        />
      </section>

      <Footer />
    </main>
  );
}
