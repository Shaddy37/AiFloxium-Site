import type { Metadata } from 'next';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import { Contact2 } from '@/components/ui/contact-2';
import { CALENDLY_URL, PERSON_NAME, SITE_URL } from '@/lib/site';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Contact | ${PERSON_NAME}`,
  description:
    'Book a discovery call or send project details for automation, internal tools, and AI workflow work.',
  path: '/contact',
  keywords: ['contact', 'book discovery call', 'Calendly', 'AI automation consultation']
});

const contactBreadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' }
]);

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  "url": `${SITE_URL}/contact`,
  "name": `Contact | ${PERSON_NAME}`,
  "description": "Book a discovery call or send project details for automation, internal tools, and AI workflow work.",
  "mainEntity": {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#service`
  }
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumbJsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
        suppressHydrationWarning
      />
      <Navbar />

      <section className="container mx-auto px-6 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="relative overflow-hidden rounded-[3rem] bg-hero-gradient px-6 py-16 text-white md:px-10 md:py-20">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-plum-glow opacity-60 blur-[120px]" />
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-brand-orange">
              Contact
            </p>
            <h1 className="mb-6 text-4xl font-heading font-black uppercase tracking-tighter md:text-6xl">
              BOOK THE CALL OR SEND THE BRIEF.
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-200 md:text-xl">
              Claim your free 15-minute system map session or send project context below. Scoping response guaranteed within 24 hours.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-brand-orange px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-orange/90"
            >
              Schedule Free Scoping Call ($0)
            </a>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-200">
        <Contact2
          title="Start With The Right Next Step."
          description="Claim your free 15-minute system map session below or share your project details to get a direct scoping response."
        />
      </section>

      <Footer />
    </main>
  );
}
