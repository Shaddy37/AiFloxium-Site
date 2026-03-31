import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "DMCA Policy | Aifloxium",
  description: "DMCA Copyright Policy for Aifloxium AI Agency - Information about our copyright protection and takedown procedures.",
};

export default function DmcaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">DMCA Policy</h1>
          
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-400 text-lg mb-8">
              Welcome to <span className="text-white">https://aifloxium.online</span> (the &quot;Site&quot;). We respect the intellectual property rights of others just as we expect others to respect our rights. Pursuant to the Digital Millennium Copyright Act, Title 17, United States Code, Section 512(c), a copyright owner or their agent may submit a takedown notice to us via our DMCA Agent listed below.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Notice of Infringement - Claim</h2>
              <p className="text-zinc-400 mb-4">To submit a good faith infringement claim to us, you must submit the notice to us that sets forth the following information:</p>
              <ol className="text-zinc-400 list-decimal pl-6 space-y-2">
                <li>A physical or electronic signature of the copyright owner (or someone authorized to act on behalf of the owner);</li>
                <li>Identification of the copyrighted work claimed to have been infringed;</li>
                <li>Identification of the infringing material to be removed, and information reasonably sufficient to permit the service provider to locate the material;</li>
                <li>Information reasonably sufficient to permit the service provider to contact the complaining party, including your name, physical address, email address, phone number, and fax number;</li>
                <li>A statement that the complaining party has a good faith belief that the use of the material is unauthorized by the copyright agent; and</li>
                <li>A statement that the information in the notification is accurate, and, under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner.</li>
              </ol>
              <p className="text-zinc-400 mt-4">
                Title 17 USC Section 512(f) provides civil damage penalties, including costs and attorney fees, against any person who knowingly and materially misrepresents certain information in a notification of infringement under 17 USC Section 512(c)(3).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Counter Notification - Restoration of Material</h2>
              <p className="text-zinc-400 mb-4">
                If you have received a notice of material being taken down because of a copyright infringement claim, you may provide us with a counter-notification to have the material in question restored to the site. Said notification must be given in writing to our DMCA Agent and must contain substantially the following elements pursuant to 17 USC Section 512(g)(3):
              </p>
              <ol className="text-zinc-400 list-decimal pl-6 space-y-2">
                <li>Your physical or electronic signature.</li>
                <li>A description of the material that has been taken down and the original location of the material before it was taken down.</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled.</li>
                <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal district court for the judicial district in which the address is located.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Repeat Infringer Policy</h2>
              <p className="text-zinc-400">
                We take copyright infringement very seriously. Pursuant to the repeat infringer policy requirements of the Digital Millennium Copyright Act, we maintain a list of DMCA notices from copyright holders and make a good faith effort to identify any repeat infringers. Those who violate our internal repeat infringer policy will have their accounts terminated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Copyright for Media</h2>
              <p className="text-zinc-400">
                All media, including videos, audio files, and AI-generated content, are protected under international copyright laws. Unauthorized duplication or distribution is strictly prohibited and may result in legal action under the DMCA.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">AI Content Ownership</h2>
              <p className="text-zinc-400">
                Content generated using AI tools is owned by AIFloxium unless otherwise agreed. Users are prohibited from using AI-generated outputs for commercial purposes or public distribution without explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
              <p className="text-zinc-400">
                We reserve the right to modify the contents of this page and its policy for handling DMCA claims at any time for any reason. You are encouraged to check back to review this policy frequently for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-zinc-400">
                If you have any questions about this DMCA Policy, get in touch with us at <span className="text-white">muhammadshadabshams@gmail.com</span> or <span className="text-white">info@aifloxium.online</span>
              </p>
            </section>

            <p className="text-zinc-500 text-sm mt-12">Last Updated: October 10, 2025</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
