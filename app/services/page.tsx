import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import { Process } from "@/components/sections/HomeSections";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { Contact2 } from "@/components/ui/contact-2";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'Custom AI Agent Development Agency | Aifloxium Services',
  description: 'We provide managed AI automation services including Custom Large Language Model (LLM) implementation, AI workflow automation, and predictive analytics for enterprises.',
  keywords: ['custom AI agent development agency', 'managed AI automation services', 'AI workflow automation', 'Enterprise-grade NLP integration'],
  openGraph: {
    title: 'Custom AI Agent Development Agency | Aifloxium Services',
    description: 'We provide managed AI automation services including Custom LLM implementation, AI workflow automation, and predictive analytics for enterprises.',
    type: 'website',
    url: 'https://aifloxium.online/services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aifloxium Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Agent Development Agency | Aifloxium Services',
    description: 'Managed AI automation services including LLM implementation and workflow automation.',
    images: ['/og-image.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-6 container mx-auto">
        <h1 className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter mb-8 bg-gradient-to-br from-white to-zinc-600 text-transparent bg-clip-text">CAPABILITIES.</h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium">
          Strategic implementation of high-availability AI systems designed to irreversibly transform your operations.
        </p>
      </div>

      <Services />
      <Process />
      <StickyFeatureSection />

      {/* Pristine White FAQ Accordion Block */}
      <section className="py-32 px-6 bg-white text-black relative -mt-4 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">INTEGRATION <br /> DIRECTIVES.</h2>
             <p className="text-zinc-600 font-medium leading-relaxed">Everything you need to know about our enterprise AI automation services, security protocols, and deployment timelines.</p>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            {[
              { q: "How do you ensure proprietary data remains secure?", a: "We utilize isolated, single-tenant cloud architectures for all RAG and LLM models. Your data is never cross-trained on public language models." },
              { q: "What is the typical timeframe for a workflow deployment?", a: "MVP logic scripts can be integrated in 7 days. Full-scale autonomous agents and multi-platform RAG architectures take 3 to 6 weeks depending on database complexity." },
              { q: "Does Aifloxium maintain the systems post-launch?", a: "Yes. All our complex deployments include rigorous SLA uptime guarantees, persistent monitoring, and iterative optimizations." },
              { q: "Can you modernize our legacy systems?", a: "Our exact specialty is legacy system AI modernization. We build custom API wrappers and middleware vectors that allow modern LLMs to query your ancient mainframes." }
            ].map((faq, i) => (
               <div key={i} className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-4">
                     <CheckCircle2 className="text-zinc-400 group-hover:text-white shrink-0" />
                     {faq.q}
                  </h3>
                  <p className="text-zinc-600 group-hover:text-zinc-400 font-medium pl-10 leading-relaxed">{faq.a}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-zinc-950/20 border-t border-white/5">
        <Contact2 
          title="Schedule Your Systems Audit."
          description="Speak directly with our engineering team from Sargodha, Pakistan, and start your automation journey today."
        />
      </section>

      <Footer />
    </main>
  );
}
