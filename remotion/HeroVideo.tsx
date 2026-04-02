"use client";

import { Player, PlayerRef } from "@remotion/player";
import { useRef } from "react";
import { AIFLOXIUMIntro } from "./AIFLOXIUMIntro";

interface HeroVideoProps {
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function HeroVideo({ className = "", autoPlay = true, loop = true }: HeroVideoProps) {
  const playerRef = useRef<PlayerRef>(null);

  return (
    <div className={className}>
      <Player
        ref={playerRef}
        component={AIFLOXIUMIntro}
        compositionWidth={1920}
        compositionHeight={1080}
        durationInFrames={480}
        fps={30}
        style={{ width: "100%", height: "100%" }}
        autoPlay={autoPlay}
        loop={loop}
        controls={false}
        clickToPlay={false}
      />
    </div>
  );
}