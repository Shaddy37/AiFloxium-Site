import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/providers/PageTransition";
import {
  BRAND_NAME,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  LINKEDIN_URL,
  PERSON_NAME,
  PERSON_ROLE,
  PHONE_NUMBER,
  PRIMARY_EMAIL,
  SITE_URL,
  X_URL
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Muhammad Shadab Shams",
    "AI automation engineer",
    "n8n workflow automation",
    "AI systems for startups",
    "custom internal tools",
    "voice agents",
    "AI consulting"
  ],
  authors: [{ name: PERSON_NAME, url: LINKEDIN_URL }],
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: `${PERSON_NAME} | ${BRAND_NAME}`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSON_NAME} portfolio preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  category: "technology",
  classification: PERSON_ROLE,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": PERSON_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.ico`,
  "description": DEFAULT_DESCRIPTION,
  "email": PRIMARY_EMAIL,
  "telephone": PHONE_NUMBER,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": PHONE_NUMBER,
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sargodha",
    "addressCountry": "PK"
  },
  "sameAs": [
    X_URL,
    LINKEDIN_URL
  ],
  "jobTitle": PERSON_ROLE,
  "worksFor": {
    "@type": "Organization",
    "name": BRAND_NAME
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": `${PERSON_NAME} Portfolio`,
  "url": SITE_URL,
  "description": DEFAULT_DESCRIPTION,
  "publisher": {
    "@type": "Person",
    "name": PERSON_NAME
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} antialiased selection:bg-accent selection:text-white`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <div className="grainy-overlay" />
        <SmoothScroll>
          <CustomCursor />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
