"use client";
import React from "react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import { Server, Database, Network, Cpu, ShieldCheck, Workflow, Search } from "lucide-react";

export function RadarScanner() {
  return (
    <div className="flex w-full items-center justify-center bg-transparent py-12 md:py-20">
      <div className="relative flex h-[500px] md:h-96 w-full max-w-3xl flex-col items-center justify-center space-y-3 md:space-y-4 overflow-hidden px-4">
        {/* Row 1 */}
        <div className="mx-auto w-full max-w-sm md:max-w-3xl">
          <div className="flex w-full items-center justify-center gap-3 md:gap-0 md:justify-between md:space-x-0">
            <IconContainer
              text="Legacy Systems"
              delay={0.2}
              icon={<Server className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />}
            />
            <IconContainer
              delay={0.4}
              text="API Endpoints"
              icon={<Network className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />}
            />
            <IconContainer
              text="Data Warehouses"
              delay={0.3}
              icon={<Database className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />}
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="mx-auto w-full max-w-xs md:max-w-md">
          <div className="flex w-full items-center justify-center gap-3 md:gap-0 md:justify-between md:space-x-0">
            <IconContainer
              text="Security Protocols"
              delay={0.5}
              icon={<ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />}
            />
            <IconContainer
              text="Cloud Infra"
              delay={0.8}
              icon={<Cpu className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />}
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="mx-auto w-full max-w-sm md:max-w-3xl">
          <div className="flex w-full items-center justify-center gap-3 md:gap-0 md:justify-between md:space-x-0">
            <IconContainer
              delay={0.6}
              text="Human Bottlenecks"
              icon={<Workflow className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />}
            />
            <IconContainer
              delay={0.7}
              text="System Recon"
              icon={<Search className="h-6 w-6 md:h-8 md:w-8 text-zinc-400" />} 
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />
      </div>
    </div>
  );
}
