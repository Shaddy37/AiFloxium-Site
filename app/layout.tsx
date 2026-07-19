import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, JetBrains_Mono, Caveat_Brush, League_Gothic } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_URL
} from "@/lib/site";
import {
  buildOgImageUrl,
  rootGraphJsonLd
} from "@/lib/seo";
import { PopupProvider } from "@/components/providers/popup-provider";
import { PopupRoot } from "@/components/popups/popup-root";
import MotionProvider from "@/components/providers/MotionProvider";
import Navbar from "@/components/layouts/Navbar";

import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  variable: "--font-caveat-brush",
  subsets: ["latin"],
  display: "swap",
});

const leagueGothic = League_Gothic({
  weight: "400",
  variable: "--font-league-gothic",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505'
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'AIFLOXIUM',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  manifest: '/manifest.webmanifest',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  verification: {
    google: '_-GObjvEMYXjKV675AxlbcKXlco84D31__Igcv9fM1A'
  },
  other: {
    'ai-content-declaration': 'human-led, ai-assisted'
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: 'AIFLOXIUM',
    images: [
      {
        url: buildOgImageUrl({
          title: DEFAULT_TITLE,
          description: DEFAULT_DESCRIPTION,
          path: '/',
          eyebrow: 'AI Automation Engineer'
        }),
        width: 1200,
        height: 630,
        alt: 'AIFLOXIUM branded Open Graph preview'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      buildOgImageUrl({
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        path: '/',
        eyebrow: 'AI Automation Engineer'
      })
    ]
  },
  category: 'technology'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrainsMono.variable} ${caveatBrush.variable} ${leagueGothic.variable} antialiased selection:bg-accent/20 selection:text-black`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground min-h-screen overflow-x-hidden" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootGraphJsonLd) }}
        />

        <MotionProvider>
          <PopupProvider>
            <Navbar />
            {children}
            <PopupRoot />
          </PopupProvider>
        </MotionProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
