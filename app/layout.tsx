import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/page-loader";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aifloxium.online"),
  title: "Aifloxium | Autonomous Infrastructure Architect for Agencies & SaaS",
  description: "We engineer custom n8n workflows, high-fidelity voice agents (Vapi), and generative software that reclaim 40+ hours of manual work weekly.",
  keywords: ["Autonomous Architecture", "Voice Agents", "Vapi Developer", "n8n Workflow Automation", "Claude Code Engineer", "AI Agency", "SaaS Automation"],
  authors: [{ name: "Muhammad Shadab Shams", url: "https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/" }],
  creator: "Muhammad Shadab Shams",
  publisher: "Aifloxium",
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
    title: "Aifloxium | Agentic Workflows & High-Speed Development",
    description: "We engineer custom n8n workflows and generative software that irreversibly transform how fast you can operate.",
    url: "https://aifloxium.online",
    siteName: "Aifloxium",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aifloxium Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aifloxium | Intelligent Solutions That Scale",
    description: "We engineer custom n8n workflows and generative software that irreversibly transform how fast you can operate.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
    yahoo: "yahoo-verification-placeholder",
  },
  category: "technology",
  classification: "AI Agency",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Aifloxium",
  "url": "https://aifloxium.online",
  "logo": "https://aifloxium.online/favicon.ico",
  "description": "AI automation agency specializing in n8n workflows, voice agents, and autonomous systems.",
  "email": "info@aifloxium.online",
  "telephone": "+923464883396",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+923464883396",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sargodha",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://x.com/ShadabLoveAi",
    "https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/"
  ],
  "founder": {
    "@type": "Person",
    "name": "Muhammad Shadab Shams"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent selection:text-white`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <div className="grainy-overlay" />
        <CustomCursor />
        <PageLoader>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </PageLoader>
        <SpeedInsights />
      </body>
    </html>
  );
}
