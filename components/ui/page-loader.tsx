"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const LumaSpin = dynamic(() => import("./luma-spin").then(mod => mod.LumaSpin), { ssr: false });

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 300);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-300 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <LumaSpin />
      </div>
    );
  }

  return <>{children}</>;
}
