import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { servicesData } from "@/lib/services-data";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { BRAND_NAME, CALENDLY_URL, PERSON_NAME, SITE_URL } from "@/lib/site";
import { buildBreadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    ...buildPageMetadata({
      title: `${service.title} | ${PERSON_NAME}`,
      description: service.description,
      path: `/services/${slug}`,
      keywords: [service.title, 'AI automation services', 'workflow automation', 'AIFLOXIUM']
    }),
    other: {
      'service-price-note': service.description
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const nextService = servicesData[(currentIndex + 1) % servicesData.length];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": PERSON_NAME,
      "url": SITE_URL,
      "worksFor": {
        "@type": "Organization",
        "name": BRAND_NAME
      }
    },
    "serviceType": "AI Automation",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": service.useCases.map((uc) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": uc
        }
      }))
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${slug}` }
  ]);

  return (
    <main className="relative bg-brand-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden bg-hero-gradient rounded-b-[3rem]">
        {/* Ambient grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(88, 28, 135, 0.1) 1px, transparent 1px 60px),
              linear-gradient(rgba(88, 28, 135, 0.1) 1px, transparent 1px 60px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, white, transparent)",
          }}
        />
        {/* Radial centre glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand-plum-glow opacity-40 blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-zinc-600 text-sm mb-12 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-plum">{service.title}</span>
          </nav>

          {/* Section pill */}
          <div className="flex items-center gap-3 border border-brand-plum/20 bg-brand-plum/5 px-4 py-1.5 rounded-full w-max mb-8">
            <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-white tracking-[0.2em] font-medium text-xs uppercase">Service</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase">
            {service.title.split(' ').slice(0, -1).join(' ')} <span className="text-brush text-3xl md:text-6xl lg:text-8xl ml-2">{service.title.split(' ').pop()}</span>.
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium max-w-2xl leading-relaxed mb-12">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-brand-orange/90 transition-all shadow-[0_0_20px_rgba(255,107,0,0.3)] border-none"
            >
              Book a Discovery Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-brand-plum/20 bg-brand-plum/5 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-brand-plum/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-plum/20 to-transparent" />

      {/* ─── WHAT IT IS ──────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-plum tracking-[0.2em] font-medium text-xs uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand-plum/30" /> What it is
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-orange tracking-tighter leading-[1.1] mb-8">
              WHAT THIS SERVICE DOES<br />
              <span className="text-brush text-2xl md:text-4xl mt-2">AND HOW IT HELPS.</span>
            </h2>
          </div>
          <div>
            <p className="text-white text-lg font-medium leading-relaxed">
              {service.whatItIs}
            </p>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-plum/20 to-transparent" />

      {/* ─── HOW IT WORKS ────────────────────────────────────── */}
      <section className="py-28 px-6 bg-brand-plum/5">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-brand-plum tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand-plum/30" /> Process
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-orange tracking-tighter leading-[1.0]">
              HOW I DELIVER IT.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.7rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-plum/30 via-brand-plum/10 to-transparent hidden md:block" />

            <div className="flex flex-col gap-0">
              {service.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-8 md:gap-12 group">
                  {/* Step number bubble */}
                  <div className="flex-shrink-0 w-14 h-14 border border-brand-plum/20 bg-brand-bg flex items-center justify-center font-bold text-sm text-brand-orange group-hover:border-brand-orange transition-all z-10 rounded-xl group-hover:bg-brand-plum/10">
                    {step.step}
                  </div>
                  {/* Content */}
                  <div className="pb-12 flex-1">
                    <h3 className="text-xl font-heading font-bold text-brand-orange tracking-tight mb-3 group-hover:text-brand-orange transition-colors uppercase">
                      {step.title}
                    </h3>
                    <p className="text-white font-medium leading-relaxed group-hover:text-white transition-colors">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ───────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-brand-plum tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand-plum/30" /> Use Cases
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-orange tracking-tighter">
              REAL PROBLEMS I SOLVE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.useCases.map((useCase, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 border border-brand-plum/20 bg-brand-plum/5 hover:border-brand-plum/40 hover:bg-brand-plum/10 transition-all group rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-white font-medium leading-relaxed group-hover:text-white transition-colors">
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ──────────────────────────────────────── */}
      <section className="py-28 px-6 bg-brand-plum/5">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-brand-plum tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand-plum/30" /> Tech Stack
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-orange tracking-tighter">
              BUILT WITH THE RIGHT TOOLS.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {service.techStack.map((tech, i) => (
              <div
                key={i}
                className="p-6 border border-brand-plum/20 bg-brand-bg hover:border-brand-plum/40 transition-all group rounded-xl"
              >
                <p className="font-mono text-brand-orange text-xs mb-2 font-black tracking-widest">
                  {String(i + 1).padStart(2, "0")} {"//"}
                </p>
                <p className="font-heading font-bold text-white text-lg tracking-tight group-hover:text-brand-orange transition-colors uppercase">
                  {tech.name}
                </p>
                <p className="text-white text-sm font-medium mt-1 uppercase tracking-widest">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-brand-plum tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-brand-plum/30" /> FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-orange tracking-tighter">
              QUESTIONS ANSWERED.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-8 border border-brand-plum/20 bg-brand-plum/5 hover:border-brand-orange/30 hover:bg-brand-plum/10 transition-all group cursor-default rounded-2xl"
              >
                <h3 className="text-lg font-heading font-bold text-brand-orange tracking-tight mb-3 flex items-start gap-4 uppercase group-hover:text-brand-orange transition-colors">
                  <span className="font-bold text-brand-plum text-sm shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-white font-medium leading-relaxed pl-10 group-hover:text-white transition-colors">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden bg-hero-gradient mt-20 rounded-t-[3rem]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-plum-glow opacity-60 blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-plum/20 to-transparent mb-24" />

          <p className="text-brand-plum tracking-[0.2em] font-bold text-xs uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-brand-plum/30" /> Start Today
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-brand-orange tracking-tighter leading-[0.95] mb-8 uppercase">
            {service.ctaHeading.split(' ').slice(0, -2).join(' ')} <span className="text-brush text-2xl md:text-4xl ml-2">{service.ctaHeading.split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-white text-xl font-medium max-w-xl mx-auto leading-relaxed mb-12">
            {service.ctaSubtext}
          </p>

          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-orange text-white font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-brand-orange/90 transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)] border-none"
          >
            Book a Discovery Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── NEXT SERVICE ────────────────────────────────────── */}
      <section className="border-t border-brand-plum/10 bg-brand-bg">
        <Link
          href={`/services/${nextService.slug}`}
          className="group flex items-center justify-between px-8 md:px-16 py-12 hover:bg-brand-plum/5 transition-colors"
        >
          <div>
            <p className="text-brand-plum text-xs font-black uppercase tracking-widest mb-2">Next Service</p>
            <p className="text-white font-heading font-black text-2xl md:text-4xl tracking-tighter uppercase group-hover:text-brand-orange transition-colors">
              {nextService.title}
            </p>
          </div>
          <div className="w-14 h-14 rounded-full border border-brand-plum/20 flex items-center justify-center group-hover:border-brand-orange group-hover:bg-brand-orange/10 transition-all">
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
