"use client";

import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  fallbackBg?: string;
}

export function LazyVideo({
  src,
  fallbackBg = "bg-zinc-950",
  className = "",
  style,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = "none",
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "300px", // Trigger loading and playing slightly before it enters the viewport
        threshold: 0,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      if (autoPlay) {
        video.play().catch(() => {
          // Silence potential autoplay interruptions
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, autoPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      className={`${fallbackBg} ${className}`}
      style={style}
      {...props}
    />
  );
}
