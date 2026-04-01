"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const DotGlobeHero = dynamic(() => import("@/components/ui/globe-hero").then(mod => mod.DotGlobeHero), {
  ssr: false,
  loading: () => <div className="h-screen bg-background" />,
});

export default function Hero3D() {
  return (
    <DotGlobeHero
      rotationSpeed={0.004}
      className="bg-background relative overflow-hidden h-screen"
    >
      <HeroContent />
    </DotGlobeHero>
  );
}
