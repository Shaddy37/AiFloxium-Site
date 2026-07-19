import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { ChevronRight, ArrowRight } from "lucide-react";
import { PERSON_NAME, CALENDLY_URL } from "@/lib/site";
import { absoluteUrl, buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

const Trust = dynamic(() => import('@/components/sections/HomeSections').then(m => ({ default: m.Trust })));
const PricingSection = dynamic(() => import('@/components/sections/HomeSections').then(m => ({ default: m.Pricing })));

export const metadata: Metadata = buildPageMetadata({
  title: `Pricing | ${PERSON_NAME}`,
  description:
    'Custom-scoped AI automation projects from $800 to $5,000+. Most systems recoup their entire investment in under 30 days.',
  path: '/pricing',
  keywords: [
    'AI automation pricing',
    'n8n workflow cost',
    'AI voice agent pricing',
    'automation investment'
  ]
});

const pricingJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' }
    ])
  ]
};

const pricingFaqs = [
  {
    q: "What determines the cost of a project?",
    a: "Scope, complexity, number of integrations, and timeline. I provide a fixed quote after a free scoping call so there are no surprises."
  },
  {
    q: "How long does it take to see ROI?",
    a: "Most clients recoup their investment in under 30 days through reclaimed labor hours and reduced operational friction."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. I offer post-launch support, maintenance, and iteration packages to keep your system running smoothly."
  },
  {
    q: "What if I need custom features later?",
    a: "Systems are built to be extensible. Additional features can be scoped and added as separate projects at agreed rates."
  }
];

export default function PricingPage() {
  return (
    <main className="relative bg-[var(--background)] text-white min-h-screen selection:bg-[#7B2CBF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <div className="pt-40 pb-24 px-6 container mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-purple-glow)] opacity-50 blur-[150px] rounded-full pointer-events-none -z-10" />
        
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-white font-bold">Pricing</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-instrument text-white tracking-tight mb-8 leading-[1.05]">
          Pricing <span className="font-instrument text-[#E0AAFF] italic">philosophy.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-inter font-light leading-relaxed">
          Every business is unique. I provide custom scoping, ensuring most systems recoup their entire investment in under 30 days.
        </p>
      </div>

      <Trust />
      <PricingSection />

      {/* FAQ */}
      <section className="py-24 px-6 bg-[var(--background)] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--brand-purple-glow)] opacity-30 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <p className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-[0.25em] mb-4 font-inter">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-instrument text-white tracking-tight leading-[1.05]">
              Pricing <span className="font-instrument text-[#E0AAFF] italic">questions.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-[#7B2CBF]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold font-inter mb-2 text-white">{faq.q}</h3>
                <p className="text-zinc-400 font-inter font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--background)] border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-instrument text-white tracking-tight mb-6 leading-[1.05]">
            Get your free <span className="font-instrument text-[#E0AAFF] italic">blueprint.</span>
          </h2>
          <p className="text-zinc-400 font-inter font-light max-w-xl mx-auto mb-10">
            Free 15-minute scoping call. No obligation, just a clear plan and a fixed price.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] button-glow transition-all duration-300 font-inter"
          >
            Get My Free System Blueprint
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
