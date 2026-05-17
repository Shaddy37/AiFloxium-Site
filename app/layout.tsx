import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  SITE_URL
} from "@/lib/site";
import {
  organizationJsonLd,
  personJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd
} from "@/lib/seo";
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000'
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  title: {
    default: DEFAULT_TITLE,
    template: '%s'
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'Muhammad Shadab Shams',
    'AI automation engineer',
    'n8n workflow automation',
    'AI systems for startups',
    'custom internal tools',
    'voice agents',
    'AI consulting',
    'AI automation agency'
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    'ai-content-declaration': 'human-led, ai-assisted',
    'google-site-verification': '_-GObjvEMYXjKV675AxlbcKXlco84D31__Igcv9fM1A'
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: 'AIFLOXIUM',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_TITLE
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE]
  },
  category: 'technology'
};

const rootJsonLd = [
  personJsonLd,
  organizationJsonLd,
  websiteJsonLd,
  professionalServiceJsonLd
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} antialiased selection:bg-accent selection:text-white`} suppressHydrationWarning>
      <head>
        {rootJsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="bg-background text-foreground min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <div className="grainy-overlay" />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
