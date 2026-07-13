import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildPageMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: 'DMCA Policy | AIFLOXIUM',
  description:
    'DMCA copyright policy for AIFLOXIUM, including takedown and counter-notification procedures.',
  path: '/dmca'
});

const dmcaWebPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${absoluteUrl('/dmca')}#webpage`,
  url: absoluteUrl('/dmca'),
  name: 'DMCA Policy | AIFLOXIUM',
  description:
    'DMCA copyright policy for AIFLOXIUM, including takedown and counter-notification procedures.',
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

export default function DmcaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dmcaWebPageJsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-white text-zinc-800 selection:bg-[#7B2CBF] selection:text-zinc-900 pt-40 pb-24 font-inter">
        <div className="container mx-auto px-6 max-w-4xl">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-zinc-500 uppercase tracking-widest relative z-10 font-inter">
            <Link href="/" className="transition-colors hover:text-zinc-900">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-zinc-300" />
            <span className="text-zinc-900 font-bold">DMCA Policy</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-instrument text-zinc-900 mb-8 tracking-tight">DMCA Policy</h1>
          
          <div className="prose prose-invert prose-purple max-w-none font-inter font-light">
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Welcome to <span className="text-zinc-900">https://www.aifloxium.online</span> (the &quot;Site&quot;), operated by me, <span className="text-zinc-900 font-semibold">Muhammad Shadab Shams</span>, trading as AIFLOXIUM. I respect the intellectual property rights of others just as I expect others to respect my rights. Pursuant to the Digital Millennium Copyright Act, Title 17, United States Code, Section 512(c), a copyright owner or their agent may submit a takedown notice to me via my DMCA Agent listed below.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Notice of Infringement - Claim</h2>
              <p className="text-zinc-500 mb-4 leading-relaxed font-light">To submit a good faith infringement claim, you must submit the notice setting forth the following information:</p>
              <ol className="text-zinc-500 list-decimal pl-6 space-y-2 font-light">
                <li>A physical or electronic signature of the copyright owner (or someone authorized to act on behalf of the owner);</li>
                <li>Identification of the copyrighted work claimed to have been infringed;</li>
                <li>Identification of the infringing material to be removed, and information reasonably sufficient to permit me to locate the material;</li>
                <li>Information reasonably sufficient to permit me to contact you, including your name, physical address, email address, phone number, and fax number;</li>
                <li>A statement that you have a good faith belief that the use of the material is unauthorized by the copyright agent; and</li>
                <li>A statement that the information in the notification is accurate, and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
              </ol>
              <p className="text-zinc-500 mt-4 leading-relaxed font-light">
                Title 17 USC Section 512(f) provides civil damage penalties, including costs and attorney fees, against any person who knowingly and materially misrepresents certain information in a notification of infringement under 17 USC Section 512(c)(3).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Counter Notification - Restoration of Material</h2>
              <p className="text-zinc-500 mb-4 leading-relaxed font-light font-light">
                If you have received a notice of material being taken down because of a copyright infringement claim, you may provide me with a counter-notification to have the material in question restored to the site. Said notification must be given in writing to my DMCA Agent and must contain substantially the following elements pursuant to 17 USC Section 512(g)(3):
              </p>
              <ol className="text-zinc-500 list-decimal pl-6 space-y-2 font-light">
                <li>Your physical or electronic signature.</li>
                <li>A description of the material that has been taken down and the original location of the material before it was taken down.</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled.</li>
                <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal district court for the judicial district in which the address is located.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Repeat Infringer Policy</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                I take copyright infringement very seriously. Pursuant to the repeat infringer policy requirements of the Digital Millennium Copyright Act, I maintain a list of DMCA notices from copyright holders and make a good faith effort to identify any repeat infringers. Those who violate my repeat infringer policy will have their accounts terminated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Copyright for Media</h2>
              <p className="text-zinc-500 leading-relaxed font-light font-light">
                All media, including videos, audio files, and AI-generated content, are protected under international copyright laws. Duplication or distribution is prohibited and may result in legal action under the DMCA.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">AI Content Ownership</h2>
              <p className="text-zinc-500 leading-relaxed font-light font-light">
                Content generated using AI tools is owned by AIFLOXIUM unless otherwise agreed. Users are prohibited from using AI-generated outputs for commercial purposes or public distribution without explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Modifications</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                I reserve the right to modify the contents of this page and my policy for handling DMCA claims at any time for any reason. You are encouraged to check back to review this policy frequently for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-[#7B2CBF] font-inter tracking-wide mb-4">Contact Us</h2>
              <p className="text-zinc-500 leading-relaxed font-light">
                If you have any questions about this DMCA Policy, please get in touch with me at <span className="text-zinc-900 font-medium">muhammadshadabshams@gmail.com</span> or <span className="text-zinc-900 font-medium">info@aifloxium.online</span>
              </p>
            </section>

            <p className="text-zinc-400 text-xs mt-12 font-mono">Last Updated: October 10, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
