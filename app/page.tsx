import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import HiddenCostSection from "@/components/sections/HiddenCostSection";
import Footer from "@/components/sections/Footer";
import CapabilitiesEngineered from "@/components/sections/CapabilitiesEngineered";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { LazySections } from "@/components/sections/LazySections";

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
