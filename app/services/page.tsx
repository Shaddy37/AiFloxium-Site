import { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Services from "@/components/sections/Services";
import { Process } from "@/components/sections/HomeSections";
import { StickyFeatureSection } from "@/components/ui/sticky-scroll-cards-section";
import { Contact2 } from "@/components/ui/contact-2";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'AI Skills & Automation Services | Muhammad Shadab Shams',
  description: 'I build AI automation systems including n8n workflows, voice agents, and autonomous agents that reclaim 40+ hours every week.',
  keywords: ['AI automation services', 'n8n workflow automation', 'AI workflow automation', 'AI skills'],
  openGraph: {
    title: 'AI Skills & Automation Services | Muhammad Shadab Shams',
    description: 'I build AI automation systems including n8n workflows, voice agents, and autonomous agents.',
    type: 'website',
    url: 'https://aifloxium.online/services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Skills & Automation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Skills & Automation Services | Muhammad Shadab Shams',
    description: 'I build AI automation systems including n8n workflows, voice agents, and autonomous agents.',
    images: ['/og-image.jpg'],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative bg-brand-bg min-h-screen">
      <Navbar />
      
      {/* Dark Cinematic Hero */}
      <div className="pt-40 pb-20 px-4 md:px-6 container mx-auto relative overflow-hidden bg-hero-gradient rounded-b-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-white tracking-tighter mb-8 leading-tight uppercase">
          CORE <span className="text-brush text-3xl md:text-6xl lg:text-8xl ml-4">SKILLS.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium">
          What I build, automate, and engineer for clients who demand results.
        </p>
      </div>

      <Services />
      <Process />
      <StickyFeatureSection />

      {/* Pristine White FAQ Accordion Block */}
      <section className="py-32 px-6 bg-white text-black relative -mt-4 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
             <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6 text-brand-plum">
               INTEGRATION <br /> <span className="text-brush text-3xl md:text-5xl mt-2">DIRECTIVES.</span>
             </h2>
             <p className="text-zinc-600 font-medium leading-relaxed">Everything you need to know about working with me, how I handle your data, and my delivery timelines.</p>
          </div>
          <div className="w-full lg:w-2/3 space-y-6">
            {[
              { q: "How do you ensure proprietary data remains secure?", a: "I utilize isolated, single-tenant cloud architectures for all RAG and LLM models. Your data is never cross-trained on public language models." },
              { q: "What is the typical timeframe for a workflow deployment?", a: "MVP logic scripts can be integrated in 7 days. Full-scale autonomous agents and multi-platform RAG architectures take 3 to 6 weeks depending on database complexity." },
              { q: "Do you maintain the systems post-launch?", a: "Yes. All my deployments include rigorous SLA uptime guarantees, persistent monitoring, and iterative optimizations." },
              { q: "Can you modernize our legacy systems?", a: "Yes, I specialize in legacy system AI modernization. I build custom API wrappers and middleware vectors that allow modern LLMs to query your existing infrastructure." }
            ].map((faq, i) => (
               <div key={i} className="group p-8 bg-gray-50 border border-gray-200 hover:bg-brand-plum hover:text-white transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-4 text-brand-plum group-hover:text-white transition-colors">
                     <CheckCircle2 className="text-brand-orange group-hover:text-white shrink-0" />
                     {faq.q}
                  </h3>
                  <p className="text-zinc-600 group-hover:text-white/80 font-medium pl-10 leading-relaxed transition-colors">{faq.a}</p>
               </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-brand-bg/20 border-t border-brand-plum/10">
        <Contact2 
          title="Schedule Your Systems Audit."
          description="Speak directly with me and start your automation journey today."
        />
      </section>

      <Footer />
    </main>
  );
}
