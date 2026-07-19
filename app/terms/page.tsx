import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: 'Terms of Use | AIFLOXIUM',
  description:
    'Terms of use for AIFLOXIUM services, deliverables, and website access.',
  path: '/terms'
});

const termsWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absoluteUrl('/terms')}#webpage`,
  url: absoluteUrl('/terms'),
  name: 'Terms of Use | AIFLOXIUM',
  description:
    'Terms of use for AIFLOXIUM services, deliverables, and website access.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/')}#organization`
  }
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsWebPageJsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[var(--background)] text-white selection:bg-[#7B2CBF] selection:text-white pt-40 pb-24 font-inter">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[var(--brand-purple-glow)] opacity-30 blur-[100px] rounded-full pointer-events-none" />
          
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/50 uppercase tracking-widest relative z-10 font-inter">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-white/30" />
            <span className="text-white font-bold">Terms</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-instrument text-white mb-8 tracking-tight">Terms of Use</h1>
          
          <div className="prose prose-invert prose-purple max-w-none font-inter font-light relative z-10 glass-card p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.01]">
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              These Terms govern your access to, and usage of all content, products, and services available at <span className="text-white font-medium">https://www.aifloxium.online</span> website (the &quot;Service&quot;) operated by me, <span className="text-white font-semibold">Muhammad Shadab Shams</span>, trading as AIFLOXIUM (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;).
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Your access to my services is subject to your acceptance, without modification, of all of the terms and conditions contained herein and all other operating rules and policies published and that may be published from time to time by me.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Intellectual Property</h2>
              <p className="text-white/60 leading-relaxed">
                The Agreement does not transfer from me to you any of my or third-party intellectual property, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with AIFLOXIUM and its licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Third-Party Services</h2>
              <p className="text-white/60 leading-relaxed">
                In using the Services, you may use third-party services, products, software, embeds, or applications developed by a third-party (&quot;Third-Party Services&quot;).
              </p>
              <p className="text-white/60 leading-relaxed mt-4">
                If you use any third-party services, you understand that any use of a third-party service is at your own risk, and I shall not be responsible or liable to anyone for third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Accounts</h2>
              <p className="text-white/60 leading-relaxed">
                Where the use of any part of my Services requires an account, you agree to provide me with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your account. You are responsible for keeping your account information up-to-date and for keeping your password secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Links To Other Websites</h2>
              <p className="text-white/60 leading-relaxed">
                My Service may contain links to third-party websites or services that are not owned or controlled by AIFLOXIUM. AIFLOXIUM assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Termination</h2>
              <p className="text-white/60 leading-relaxed">
                I may terminate or suspend your access to all or any part of my Services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate the Agreement or your AIFLOXIUM account, you may simply discontinue using my Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Disclaimer</h2>
              <p className="text-white/60 leading-relaxed">
                My Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. AIFLOXIUM and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Jurisdiction and Applicable Law</h2>
              <p className="text-white/60 leading-relaxed">
                Except to the extent any applicable law provides otherwise, the Agreement and any access to or use of my Services will be governed by the laws of New York. The proper venue for any disputes arising out of or relating to the Agreement and any access to or use of my Services will be the state and federal courts located in New York.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Changes</h2>
              <p className="text-white/60 leading-relaxed">
                AIFLOXIUM reserves the right, at my sole discretion, to modify or replace these Terms at any time. If I make changes that are material, I will let you know by posting on my website, or by sending you an email or other communication before the changes take effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Contact Us</h2>
              <p className="text-white/60 leading-relaxed">
                If you have any questions about these Terms of Use, please contact me at <span className="text-white font-medium">muhammadshadabshams@gmail.com</span> or <span className="text-white font-medium">info@aifloxium.online</span>
              </p>
            </section>

            <p className="text-white/40 text-xs mt-12 font-mono">Last Updated: October 10, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
