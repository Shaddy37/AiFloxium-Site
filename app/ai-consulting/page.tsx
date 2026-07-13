import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { Trust, Pricing } from "@/components/sections/HomeSections";
import { Contact2 } from "@/components/ui/contact-2";
import { RadarScanner } from "@/components/sections/RadarScanner";
import { PERSON_NAME, SITE_URL } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `AI Consulting | ${PERSON_NAME}`,
  description:
    'Advisory for teams planning automation, internal tools, AI workflows, or product execution without guessing their next move.',
  path: '/ai-consulting',
  keywords: [
    'AI consulting for business automation',
    'AI digital transformation consultancy',
    'how to automate enterprise business processes with AI'
  ]
});

const consultingGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/ai-consulting#service`,
      name: 'AI Consulting',
      description:
        'Strategic AI consulting for teams planning automation, internal tools, AI workflows, or product execution without guessing their next move.',
      serviceType: 'AI Consulting',
      provider: {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}#service`
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      },
      url: `${SITE_URL}/ai-consulting`
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is AI consulting with AIFLOXIUM best for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Teams that know they need better systems but want a clear plan before they invest in build work. Most engagements target operations, internal tools, AI workflows, or product execution where the next move is unclear.'
          }
        },
        {
          '@type': 'Question',
          name: 'What does the consulting engagement deliver?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A delivery roadmap that defines the current state, feasibility, scope, and a build plan. Teams can either execute internally with the roadmap or stay engaged for full implementation.'
          }
        }
      ]
    }
  ]
};

export default function AIConsultingPage() {
  return (
    <main id="main-content" className="relative bg-white min-h-screen text-zinc-900 selection:bg-[#7B2CBF] selection:text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingGraphJsonLd) }}
      />
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden bg-gradient-to-b from-black to-[#0a0608] rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2CBF]/10 opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-zinc-900">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-zinc-900 font-bold">AI Consulting</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-instrument text-zinc-900 tracking-tight mb-8 leading-[1.05]">
          Strategic <br/><span className="font-instrument text-[#E0AAFF] italic">consulting.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl font-inter font-light leading-relaxed">
          For teams that know they need better systems but want a clear plan
          before they invest in the build.
        </p>
      </div>

      <RadarScanner />

      {/* Audit Roadmap Section */}
      <section className="py-32 bg-white text-zinc-900 relative -mt-4 border-t border-white/5 shadow-2xl">
         <div className="container mx-auto px-6 max-w-6xl flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
               <h2 className="text-3xl md:text-5xl font-instrument text-zinc-900 tracking-tight mb-8 leading-[1.05]">
                The delivery <br /> <span className="font-instrument text-[#E0AAFF] italic">roadmap.</span>
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
                  <div key={i} className="group p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-500 liquid-glass">
                     <span className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-wider mb-4 block font-inter">Week {wk.w}</span>
                     <h3 className="text-xl font-semibold font-inter mb-4 text-zinc-900">{wk.t}</h3>
                     <p className="text-zinc-500 font-inter font-light leading-relaxed">{wk.d}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <Trust />
      <Pricing />
      
      <section className="bg-white border-t border-white/5">
        <Contact2 
          title="Book a Consulting Call."
          description="Bring the workflow, product, or systems problem. I will help define the right implementation path."
        />
      </section>

      <Footer />
    </main>
  );
}
