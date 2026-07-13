import type { Metadata } from 'next';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import { EarthContactCTA } from '@/components/sections/EarthContactCTA';
import { PERSON_NAME, SITE_URL } from '@/lib/site';
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
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: `Contact | ${PERSON_NAME}`,
  description:
    'Book a discovery call or send project details for automation, internal tools, and AI workflow work.',
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`
  },
  about: {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}#service`
  }
};

const contactGraphJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [contactBreadcrumbJsonLd, contactPageJsonLd]
};

export default function ContactPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#0a0608] text-white selection:bg-[#7B2CBF] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactGraphJsonLd) }}
      />
      <Navbar />

      <EarthContactCTA />

      <Footer />
    </main>
  );
}
