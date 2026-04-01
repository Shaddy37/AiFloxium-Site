import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { servicesData } from "@/lib/services-data";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Aifloxium`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Aifloxium`,
      description: service.description,
      type: "website",
      url: `https://aifloxium.online/services/${slug}`,
    },
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
      "@type": "Organization",
      "name": "Aifloxium",
      "url": "https://aifloxium.online"
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

  return (
    <main className="relative bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        {/* Ambient grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px 60px),
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px 60px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, white, transparent)",
          }}
        />
        {/* Radial centre glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-zinc-600 text-sm mb-12 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-400">{service.title}</span>
          </nav>

          {/* Section pill */}
          <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full w-max mb-8">
            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
            <span className="text-zinc-400 tracking-[0.2em] font-medium text-xs uppercase">Service</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-heading font-black text-white tracking-tighter leading-[0.9] mb-8">
            {service.title.toUpperCase()}.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl leading-relaxed mb-12">
            {service.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-zinc-100 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-white/10 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ─── WHAT IT IS ──────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-zinc-600 tracking-[0.2em] font-medium text-xs uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" /> What it is
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter leading-[1.1] mb-8">
              The technology behind<br />
              <span className="text-gradient">the results.</span>
            </h2>
          </div>
          <div>
            <p className="text-zinc-400 text-lg font-medium leading-relaxed">
              {service.whatItIs}
            </p>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─────────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ─── HOW IT WORKS ────────────────────────────────────── */}
      <section className="py-28 px-6 bg-zinc-950/40">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-zinc-600 tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" /> Process
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter leading-[1.0]">
              How I deliver it.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[1.7rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

            <div className="flex flex-col gap-0">
              {service.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-8 md:gap-12 group">
                  {/* Step number bubble */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full border border-white/10 bg-zinc-950 flex items-center justify-center font-mono text-xs text-zinc-500 group-hover:border-white/30 group-hover:text-white transition-all z-10">
                    {step.step}
                  </div>
                  {/* Content */}
                  <div className="pb-12 flex-1">
                    <h3 className="text-xl font-heading font-bold text-white tracking-tight mb-3 group-hover:text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 font-medium leading-relaxed">
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
            <p className="text-zinc-600 tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" /> Use Cases
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter">
              Real problems I solve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.useCases.map((useCase, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-zinc-950/60 hover:border-white/15 hover:bg-zinc-900/40 transition-all group"
              >
                <CheckCircle2 className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors shrink-0 mt-0.5" />
                <p className="text-zinc-400 font-medium leading-relaxed group-hover:text-zinc-200 transition-colors">
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ──────────────────────────────────────── */}
      <section className="py-28 px-6 bg-zinc-950/40">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-zinc-600 tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" /> Tech Stack
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter">
              Built with the right tools.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {service.techStack.map((tech, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/5 bg-zinc-950/60 hover:border-white/15 transition-all group"
              >
                <p className="font-mono text-zinc-600 text-xs mb-2">
                  {String(i + 1).padStart(2, "0")} {"//"}
                </p>
                <p className="font-heading font-bold text-white text-lg tracking-tight group-hover:text-zinc-100 transition-colors">
                  {tech.name}
                </p>
                <p className="text-zinc-500 text-sm font-medium mt-1">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-zinc-600 tracking-[0.2em] font-medium text-xs uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" /> FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tighter">
              Questions answered.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-white/5 bg-zinc-950/60 hover:border-white/10 hover:bg-zinc-900/40 transition-all group cursor-default"
              >
                <h3 className="text-lg font-heading font-bold text-white tracking-tight mb-3 flex items-start gap-4">
                  <span className="font-mono text-zinc-700 text-sm shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-zinc-500 font-medium leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />

          <p className="text-zinc-600 tracking-[0.2em] font-medium text-xs uppercase mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-zinc-800" /> Start Today
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter leading-[0.95] mb-8">
            {service.ctaHeading}
          </h2>
          <p className="text-zinc-400 text-xl font-medium max-w-xl mx-auto leading-relaxed mb-12">
            {service.ctaSubtext}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black font-bold text-sm uppercase tracking-widest px-10 py-5 rounded-full hover:bg-zinc-100 transition-colors"
          >
            Book a Free Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── NEXT SERVICE ────────────────────────────────────── */}
      <section className="border-t border-white/5">
        <Link
          href={`/services/${nextService.slug}`}
          className="group flex items-center justify-between px-8 md:px-16 py-12 hover:bg-zinc-950/60 transition-colors"
        >
          <div>
            <p className="text-zinc-600 text-xs font-mono uppercase tracking-widest mb-2">Next Service</p>
            <p className="text-white font-heading font-black text-2xl md:text-4xl tracking-tighter">
              {nextService.title}
            </p>
          </div>
          <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all">
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
