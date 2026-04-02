"use client";

import dynamic from "next/dynamic";

const HeroVideo = dynamic(() => import("@/remotion/HeroVideo"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-zinc-900 animate-pulse flex items-center justify-center">
      <span className="text-zinc-500 text-sm">Loading video...</span>
    </div>
  ),
});

interface VideoIntroProps {
  className?: string;
}

export default function VideoIntro({ className = "" }: VideoIntroProps) {
  return (
    <div className={`relative w-full aspect-video ${className}`}>
      <HeroVideo className="w-full h-full" autoPlay loop />
    </div>
  );
}