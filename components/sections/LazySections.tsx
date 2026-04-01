"use client";

import dynamic from "next/dynamic";

const Process = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Process), { ssr: false });
const RuixenBentoCards = dynamic(() => import("@/components/ui/ruixen-bento-cards"), { ssr: false });
const Trust = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Trust), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.TechStack), { ssr: false });
const Founder = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Founder), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Pricing), { ssr: false });

export function LazySections() {
  return (
    <>
      <Process />
      <RuixenBentoCards />
      <Trust />
      <TechStack />
      <Founder />
      <Pricing />
    </>
  );
}
