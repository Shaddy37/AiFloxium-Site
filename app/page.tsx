"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/Navbar";

const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
  loading: () => <div className="h-screen bg-background" />,
});

const HiddenCostSection = dynamic(() => import("@/components/sections/HiddenCostSection"), {
  ssr: false,
});

const CapabilitiesEngineered = dynamic(() => import("@/components/sections/CapabilitiesEngineered"), {
  ssr: false,
});

const DottedSurface = dynamic(() => 
  import("@/components/ui/dotted-surface").then((mod) => ({ default: mod.DottedSurface }))
, {
  ssr: false,
  loading: () => <div className="h-96" />,
});

const LazySections = dynamic(() => 
  import("@/components/sections/LazySections").then((mod) => ({ default: mod.LazySections }))
, {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <HiddenCostSection />
      
      <DottedSurface className="z-0" />

      <CapabilitiesEngineered />
      
      <LazySections />
      
      <Footer />
    </main>
  );
}
