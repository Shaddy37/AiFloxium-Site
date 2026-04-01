import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | AIFLOXIUM - AI Automation by Muhammad Shadab Shams",
  description: "Terms of Use for AIFLOXIUM AI Automation Agency - Terms and conditions governing the use of our services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">Terms of Use</h1>
          
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-400 text-lg mb-8">
              These Terms govern your access to, and usage of all content, Products, and Services available at <span className="text-white">https://aifloxium.online</span> website (the &quot;Service&quot;) operated by <span className="text-white font-bold">Muhammad Shadab Shams</span> trading as AIFLOXIUM (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
            </p>
            <p className="text-zinc-400 text-lg mb-8">
              Your access to our services is subject to your acceptance, without modification, of all of the terms and conditions contained herein and all other operating rules and policies published and that may be published from time to time by us.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-zinc-400">
                The Agreement does not transfer from Us to you any of Ours or third-party intellectual property, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with AIFLOXIUM and its licensors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-zinc-400">
                In using the Services, you may use third-party services, products, software, embeds, or applications developed by a third-party (&quot;Third-Party Services&quot;).
              </p>
              <p className="text-zinc-400 mt-4">
                If you use any third-party services, you understand that any use of a third-party service is at your own risk, and we shall not be responsible or liable to anyone for third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Accounts</h2>
              <p className="text-zinc-400">
                Where the use of any part of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account. You will be solely responsible and liable for any activity that occurs under your account. You are responsible for keeping your account information up-to-date and for keeping your password secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Links To Other Websites</h2>
              <p className="text-zinc-400">
                Our Service may contain links to third-party websites or services that are not owned or controlled by AIFLOXIUM. AIFLOXIUM assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-zinc-400">
                We may terminate or suspend your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate the Agreement or your AIFLOXIUM account, you may simply discontinue using our Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-zinc-400">
                Our Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. AIFLOXIUM and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Jurisdiction and Applicable Law</h2>
              <p className="text-zinc-400">
                Except to the extent any applicable law provides otherwise, the Agreement and any access to or use of our Services will be governed by the laws of New York. The proper venue for any disputes arising out of or relating to the Agreement and any access to or use of our Services will be the state and federal courts located in New York.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes</h2>
              <p className="text-zinc-400">
                AIFLOXIUM reserves the right, at our sole discretion, to modify or replace these Terms at any time. If we make changes that are material, we will let you know by posting on our website, or by sending you an email or other communication before the changes take effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-zinc-400">
                If you have any questions about these Terms of Use, please contact us at <span className="text-white">muhammadshadabshams@gmail.com</span> or <span className="text-white">info@aifloxium.online</span>
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
