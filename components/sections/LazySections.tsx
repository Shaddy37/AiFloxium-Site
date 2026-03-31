"use client";

import dynamic from "next/dynamic";

const Vision = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Vision), { ssr: false });
const Process = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Process), { ssr: false });
const RuixenBentoCards = dynamic(() => import("@/components/ui/ruixen-bento-cards"), { ssr: false });
const Trust = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Trust), { ssr: false });
const TechStack = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.TechStack), { ssr: false });
const Founder = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Founder), { ssr: false });
const Pricing = dynamic(() => import("@/components/sections/HomeSections").then(mod => mod.Pricing), { ssr: false });
const IntegrationsSection = dynamic(() => import("@/components/ui/integrations-section"), { ssr: false });
const Contact2 = dynamic(() => import("@/components/ui/contact-2").then(mod => mod.Contact2), { ssr: false });
const TestimonialsMinimal = dynamic(() => import("@/components/ui/minimal-testimonial").then(mod => mod.TestimonialsMinimal), { ssr: false });
const ProjectFocus = dynamic(() => import("@/components/sections/ProjectFocus"), { ssr: false });

export function LazySections() {
  return (
    <>
      <Vision />
      <Process />
      <RuixenBentoCards />
      <Trust />
      <TechStack />
      <Founder />
      <Pricing />
      <ProjectFocus />
      <IntegrationsSection />
      <Contact2 />
      <TestimonialsMinimal />
    </>
  );
}

export { TestimonialsMinimal };
