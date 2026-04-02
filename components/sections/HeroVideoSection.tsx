"use client";

import dynamic from "next/dynamic";

const VideoIntro = dynamic(() => import("@/components/sections/VideoIntro"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-zinc-900 animate-pulse flex items-center justify-center">
      <span className="text-zinc-500 text-sm">Loading video...</span>
    </div>
  ),
});

export default function HeroVideoSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoIntro className="w-full h-full" />
    </div>
  );
}