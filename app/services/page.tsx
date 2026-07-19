import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import { Contact2 } from "@/components/ui/contact-2";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { PERSON_NAME, CALENDLY_URL } from "@/lib/site";
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
    <main id="main-content" className="relative bg-[var(--background)] text-black min-h-screen selection:bg-[#7B2CBF]/20 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageJsonLd) }}
      />
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden bg-[var(--background)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-purple-glow)] opacity-50 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-black uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-black">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-black" />
          <span className="text-black font-bold">Services</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-instrument text-black tracking-tight mb-8 leading-[1.05]">
          What I <span className="font-instrument text-[#7B2CBF] italic">build.</span>
        </h1>
        <p className="text-lg md:text-xl text-black max-w-2xl font-inter font-light leading-relaxed">
          Practical AI systems for startups and growing businesses: automation,
          internal software, product builds, and workflows that save real time.
        </p>
      </div>

      <Services />

      {/* Process Timeline — Vertical */}
      <section className="py-24 md:py-32 px-6 bg-[var(--background)] text-black relative border-t border-black/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#7B2CBF]/5 blur-[130px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <p className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-3 font-inter">
              <span className="w-8 h-[1px] bg-[#7B2CBF]/40 inline-block" />
              Delivery Process
              <span className="w-8 h-[1px] bg-[#7B2CBF]/40 inline-block" />
            </p>
            <h2 className="text-4xl md:text-6xl font-instrument text-black tracking-tight leading-[1.05]">
              How I <span className="font-instrument text-[#7B2CBF] italic">deliver.</span>
            </h2>
            <p className="text-black font-inter font-light mt-4 max-w-xl mx-auto">A structured approach from discovery to deployment, designed for speed without cutting corners.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7B2CBF]/40 via-[#7B2CBF]/20 to-transparent" />

            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "I review your workflows, tools, bottlenecks, and business constraints. You get a clear picture of what's worth automating and what should stay human.",
                color: "from-[#7B2CBF] to-[#5a1c97]",
                items: ["Workflow mapping session", "Tool stack inventory", "ROI opportunity scoring"]
              },
              {
                step: "02",
                title: "Architecture & Scope",
                desc: "I design the system architecture, define data flows, and produce a detailed scope document with timelines and cost projections before any code is written.",
                color: "from-[#9F4EFF] to-[#7B2CBF]",
                items: ["System architecture design", "Technology selection", "Scope & timeline proposal"]
              },
              {
                step: "03",
                title: "Build & Iterate",
                desc: "I build the system in focused sprints with regular check-ins. You see progress weekly and can adjust direction as we go.",
                color: "from-[#E0AAFF] to-[#9F4EFF]",
                items: ["Agile sprint delivery", "Weekly progress reviews", "Mid-flight adjustments"]
              },
              {
                step: "04",
                title: "Deploy & Handoff",
                desc: "The system goes live. I provide full documentation, recorded walkthroughs, and remain available for support and iteration as needed.",
                color: "from-[#7B2CBF] to-[#3c1763]",
                items: ["Production deployment", "Documentation & walkthroughs", "Ongoing support option"]
              }
            ].map((phase, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-16 last:mb-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Circle on the line */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#7B2CBF] border-[3px] border-[var(--background)] -translate-x-1/2 z-10 shadow-[0_0_12px_rgba(123,44,191,0.4)]" />
                
                {/* Content side */}
                <div className="md:w-[calc(50%-2rem)] ml-16 md:ml-0">
                  <div className="bg-black/[0.02] border border-black/5 rounded-2xl p-8 hover:border-[#7B2CBF]/30 hover:bg-black/[0.04] transition-all duration-500 liquid-glass">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-wider font-inter">{phase.step}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-[#7B2CBF]/20 to-transparent" />
                    </div>
                    <h3 className="text-2xl font-semibold font-inter mb-3 text-black">{phase.title}</h3>
                    <p className="text-black font-inter font-light leading-relaxed mb-6">{phase.desc}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-black font-inter">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7B2CBF] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty side for alignment */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Block */}
      <section className="py-24 px-6 bg-[var(--background)] text-black relative border-t border-black/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-purple-glow)] opacity-30 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="w-full lg:w-1/3">
            <p className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-[0.25em] mb-4 font-inter">Common Questions</p>
            <h2 className="text-4xl md:text-5xl font-instrument text-black tracking-tight mb-6 leading-[1.05]">
              How I <br /> <span className="font-instrument text-[#7B2CBF] italic">work.</span>
            </h2>
            <p className="text-black font-inter font-light leading-relaxed">Clear answers on process, timelines, delivery, and how the work is handled.</p>
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            {serviceFaqs.map((faq, i) => (
              <div key={i} className="group p-8 bg-black/[0.02] border border-black/5 hover:border-black/20 hover:bg-black/5 transition-all duration-300 rounded-[1.5rem] liquid-glass">
                <h3 className="text-xl font-medium font-inter mb-4 text-black flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#7B2CBF] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-black font-inter font-light leading-relaxed pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--background)] border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(123,44,191,0.05)_0%,_transparent_70%)] pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-[9px] font-semibold text-[#7B2CBF] uppercase tracking-[0.25em] mb-4 font-inter">Start Building</p>
          <h2 className="text-4xl md:text-6xl font-instrument text-black tracking-tight mb-6 leading-[1.05]">
            Ready to <span className="font-instrument text-[#7B2CBF] italic">ship?</span>
          </h2>
          <p className="text-black font-inter font-light max-w-xl mx-auto mb-10">
            Tell me what you need built, automated, fixed, or shipped. I will scope it, cost it, and ship it.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#7B2CBF] button-glow transition-all duration-300 font-inter"
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
