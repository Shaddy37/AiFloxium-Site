import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: 'Privacy Policy | AIFLOXIUM',
  description:
    'Privacy policy for AIFLOXIUM. Learn how Muhammad Shadab Shams collects, uses, and protects your information.',
  path: '/privacy'
});

const privacyWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absoluteUrl('/privacy')}#webpage`,
  url: absoluteUrl('/privacy'),
  name: 'Privacy Policy | AIFLOXIUM',
  description:
    'Privacy policy for AIFLOXIUM. Learn how Muhammad Shadab Shams collects, uses, and protects your information.',
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

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyWebPageJsonLd) }}
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
            <span className="text-white font-bold">Privacy Policy</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-instrument text-white mb-8 tracking-tight">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-purple max-w-none font-inter font-light relative z-10 glass-card p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.01]">
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Welcome to <span className="text-white">https://www.aifloxium.online</span> (the &quot;Site&quot;), operated by me, <span className="text-white font-semibold">Muhammad Shadab Shams</span>, as AIFLOXIUM. I understand that privacy online is important to users of my Site, especially when conducting business. This statement governs my privacy policies concerning those users of the Site (&quot;Visitors&quot;) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by me (collectively, &quot;Services&quot;) (&quot;Authorized Customers&quot;).
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Personally Identifiable Information</h2>
              <p className="text-white/60 leading-relaxed">
                Refers to any information that can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profile, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">What Personally Identifiable Information is collected?</h2>
              <p className="text-white/60 leading-relaxed">
                I may collect basic user profile information from all of my Visitors. I collect the following additional information from my Authorized Customers: the name, email address, phone number, address, and social media profile information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">What organizations are collecting the information?</h2>
              <p className="text-white/60 leading-relaxed">
                In addition to my direct collection of information, my third-party service vendors (such as credit card companies, clearinghouses, and banks) who may provide such services as credit, insurance, and escrow services may collect this information from my Visitors and Authorized Customers. I do not control how these third parties use such information, but I do ask them to disclose how they use personal information provided to them by Visitors and Authorized Customers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">How does the Site use Personally Identifiable Information?</h2>
              <p className="text-white/60 leading-relaxed">
                I use Personally Identifiable Information to customize the Site, make appropriate service offerings, and fulfill buying and selling requests on the Site. I may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Cookies</h2>
              <p className="text-white/60 leading-relaxed">
                A cookie is a string of information that a website stores on a visitor&apos;s computer, and that the visitor&apos;s browser provides to the website each time the visitor returns. I use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Your Rights</h2>
              <ul className="text-white/60 list-disc pl-6 space-y-2 font-light">
                <li>The right to access</li>
                <li>The right to rectification</li>
                <li>The right to erasure</li>
                <li>The right to restrict processing</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>The right to complain to a supervisory authority</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Children&apos;s Privacy</h2>
              <p className="text-white/60 leading-relaxed">
                My Service does not address &quot;Children&quot;, anyone under the age of 18 years, and I do not knowingly collect personally identifiable information from children under 18 years. If you are a parent or guardian and you are aware that your child has provided me with Personal Information, please get in touch with me immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Contact Us</h2>
              <p className="text-white/60 leading-relaxed">
                If you have any questions about this Privacy Policy, please get in touch with me at <span className="text-white font-medium">muhammadshadabshams@gmail.com</span> or <span className="text-white font-medium">info@aifloxium.online</span>
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
