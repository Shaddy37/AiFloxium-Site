import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import Footer from "@/components/sections/Footer";
import CapabilitiesEngineered from "@/components/sections/CapabilitiesEngineered";
import RuixenBentoCards from "@/components/ui/ruixen-bento-cards";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { LazySections } from "@/components/sections/LazySections";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      
      <DottedSurface className="z-0" />
      
      {/* Companies We Collaborate With Section */}
      <section className="py-24 px-6 border-y border-white/5 relative bg-zinc-950/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-medium text-lg text-zinc-400 tracking-tight md:text-2xl uppercase tracking-[0.2em]">
            Companies we <span className="font-semibold text-white">collaborate</span> with.
          </h2>
          <LogoCloud />
        </div>
      </section>

      <RuixenBentoCards />
      
      <CapabilitiesEngineered />
      
      <LazySections />
      
      <Footer />
    </main>
  );
}
