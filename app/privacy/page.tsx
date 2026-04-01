import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AIFLOXIUM - AI Automation by Muhammad Shadab Shams",
  description: "Privacy policy for AIFLOXIUM AI Automation Agency. Learn how Muhammad Shadab Shams collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-zinc-400 text-lg mb-8">
              Welcome to <span className="text-white">https://aifloxium.online</span> (the &quot;Site&quot;), operated by <span className="text-white font-bold">Muhammad Shadab Shams</span> as AIFLOXIUM. We understand that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies concerning those users of the Site (&quot;Visitors&quot;) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various services offered by AIFLOXIUM (collectively, &quot;Services&quot;) (&quot;Authorized Customers&quot;).
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Personally Identifiable Information</h2>
              <p className="text-zinc-400">
                Refers to any information that can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profile, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What Personally Identifiable Information is collected?</h2>
              <p className="text-zinc-400">
                We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the name, email address, phone number, address, social media profile information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">What organizations are collecting the information?</h2>
              <p className="text-zinc-400">
                In addition to our direct collection of information, our third-party service vendors (such as credit card companies, clearinghouses, and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them by Visitors and Authorized Customers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How does the Site use Personally Identifiable Information?</h2>
              <p className="text-zinc-400">
                We use Personally Identifiable Information to customize the Site, make appropriate service offerings, and fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p className="text-zinc-400">
                A cookie is a string of information that a website stores on a visitor&apos;s computer, and that the visitor&apos;s browser provides to the website each time the visitor returns. We use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <ul className="text-zinc-400 list-disc pl-6 space-y-2">
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
              <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
              <p className="text-zinc-400">
                Our Service does not address &quot;Children&quot;, anyone under the age of 18 years, and we do not knowingly collect personally identifiable information from children under 18 years. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please get in touch with us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-zinc-400">
                If you have any questions about this Privacy Policy, get in touch with us at <span className="text-white">muhammadshadabshams@gmail.com</span> or <span className="text-white">info@aifloxium.online</span>
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
