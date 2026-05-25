import type { Metadata } from 'next';
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import PricingPageClient from "@/components/sections/PricingPageClient";
import { PERSON_NAME, SITE_URL, DEFAULT_DESCRIPTION } from "@/lib/site";
import { buildPageMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: `Pricing Plans & Retainers | ${PERSON_NAME}`,
  description:
    'Choose between one-off automation projects and monthly technical partner retainers. Risk-free audit and money-back guarantee included.',
  path: '/pricing',
  keywords: [
    'AI automation pricing',
    'n8n retainer pricing',
    'voice agent setup cost',
    'white label developer pricing',
    'AIFLOXIUM pricing',
    'AI development cost'
  ]
});

// JSON-LD Schemas for Search Engines
const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing' }
]);

const pricingProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AIFLOXIUM AI Automation Services & Retainers",
  "image": `${SITE_URL}/brand/aifloxium-logo.png`,
  "description": DEFAULT_DESCRIPTION,
  "brand": {
    "@type": "Brand",
    "name": "AIFLOXIUM"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "1500",
    "highPrice": "10000",
    "offerCount": "3",
    "url": `${SITE_URL}/pricing`,
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Automation Project",
        "price": "2000.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2000.00",
          "priceCurrency": "USD",
          "valueAddedTaxIncluded": "false"
        },
        "url": `${SITE_URL}/pricing`
      },
      {
        "@type": "Offer",
        "name": "Starter Automation Retainer",
        "price": "1500.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1500.00",
          "priceCurrency": "USD",
          "valueAddedTaxIncluded": "false"
        },
        "url": `${SITE_URL}/pricing`
      },
      {
        "@type": "Offer",
        "name": "Scale AI Project",
        "price": "4500.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "4500.00",
          "priceCurrency": "USD",
          "valueAddedTaxIncluded": "false"
        },
        "url": `${SITE_URL}/pricing`
      },
      {
        "@type": "Offer",
        "name": "Scale AI Retainer",
        "price": "5000.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "5000.00",
          "priceCurrency": "USD",
          "valueAddedTaxIncluded": "false"
        },
        "url": `${SITE_URL}/pricing`
      },
      {
        "@type": "Offer",
        "name": "Enterprise Hub Retainer",
        "price": "10000.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "10000.00",
          "priceCurrency": "USD",
          "valueAddedTaxIncluded": "false"
        },
        "url": `${SITE_URL}/pricing`
      }
    ]
  }
};

const pricingFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is AI-coded software or automated workflow quality low?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely not. We use Claude Code and cursor engines as force multipliers to skip boilerplate and scaffold applications at high speed. However, every single line of code, prompt structure, database schema, and logical flow is architected, thoroughly reviewed, and edge-case tested by a senior automation engineer. You get custom, production-grade systems in days instead of months.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if an API or integration breaks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We design strong systems with hardened error boundaries. For Scale AI and Enterprise tiers, we build automatic retries and redirect fail-safes directly into the workflows, alongside instant Slack alerting. If an external API changes or drops, we know about it within seconds and can deploy fixes before it disrupts your operations.'
      }
    },
    {
      '@type': 'Question',
      name: 'We have strict data privacy and compliance requirements. Can we use AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is our primary differentiator. AIFLOXIUM deploys self-hosted workflow automation engines (n8n) directly on your own secure virtual private servers (AWS, DigitalOcean, etc.). Your customer and business data never leaves your infrastructure, keeping your systems fully compliant and secure.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the Money-Back Guarantee and ROI Audit work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every engagement begins with a comprehensive Process Mapping and ROI Audit. If we analyze your existing operations and realize there is no viable path to save your team at least 10 hours per week or eliminate lead leakage, we will cancel the project and refund your deposit immediately. Additionally, we back all our builds with a 30-day post-launch warranty.'
      }
    }
  ]
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-brand-bg">
      {/* Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingProductJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd) }}
      />

      <Navbar />
      
      {/* Main Pricing Interactive Section */}
      <PricingPageClient />

      <Footer />
    </main>
  );
}
