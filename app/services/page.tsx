import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import { Process } from "@/components/sections/HomeSections";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { Contact2 } from "@/components/ui/contact-2";
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
    <main id="main-content" className="relative bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageJsonLd) }}
      />
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden bg-hero-gradient rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-white/55 uppercase tracking-widest relative z-10">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-600" />
          <span className="text-white font-black">Services</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-white tracking-[-0.035em] mb-8 leading-[0.95]">
          What I <span className="text-brush text-3xl md:text-6xl lg:text-8xl ml-4 text-brand-orange">build</span>.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-200 max-w-2xl font-medium">
          Practical AI systems for startups and growing businesses: automation,
          internal software, product builds, and workflows that save real time.
        </p>
      </div>

      <Services />
      <Process />
      <StickyFeatureSection />

      {/* Pristine White FAQ Accordion Block */}
      <section className="py-32 px-6 bg-white text-black relative -mt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-heading font-black tracking-[-0.035em] mb-6 text-brand-plum leading-[0.95]">
               How I <br /> <span className="text-brush text-3xl md:text-5xl mt-2 text-brand-orange">work</span>.
             </h2>
             <p className="text-zinc-900 font-medium leading-relaxed">Clear answers on process, timelines, delivery, and how the work is handled.</p>
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            {serviceFaqs.map((faq, i) => (
               <div key={i} className="group p-8 bg-zinc-50 border border-zinc-200 hover:border-brand-plum/30 transition-all duration-300 rounded-xl">
                  <h3 className="text-xl font-black font-heading mb-4 flex items-center gap-4 text-brand-plum group-hover:text-brand-orange transition-colors">
                     <CheckCircle2 className="text-brand-orange shrink-0 group-hover:scale-110 transition-transform" />
                     {faq.q}
                  </h3>
                  <p className="text-zinc-900 font-medium pl-10 leading-relaxed transition-colors">{faq.a}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-zinc-50 border-t border-zinc-200">
        <Contact2 
          title="Book a Discovery Call."
          description="Tell me what you need built, automated, fixed, or shipped."
        />
      </section>

      <Footer />
    </main>
  );
}
