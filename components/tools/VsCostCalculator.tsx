'use client';

import React, { useState } from 'react';
import { Coins, Sparkles, TrendingUp, Calendar, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { CALENDLY_URL } from '@/lib/site';

interface VsCostCalculatorProps {
  competitorName: string;
  ourName: string;
  competitorCostPerUnit: number;
  ourCostPerUnit: number;
  fixedCost: number;
  unitName: string;
  defaultUnits: number;
  competitorMathLabel: string;
  ourMathLabel: string;
}

export default function VsCostCalculator({
  competitorName,
  ourName,
  competitorCostPerUnit,
  ourCostPerUnit,
  fixedCost,
  unitName,
  defaultUnits,
  competitorMathLabel,
  ourMathLabel,
}: VsCostCalculatorProps) {
  const [units, setUnits] = useState<number>(defaultUnits);

  // Math calculations
  const competitorCost = units * competitorCostPerUnit;
  const ourCost = fixedCost + (units * ourCostPerUnit);
  const monthlySavings = Math.max(0, competitorCost - ourCost);
  const annualSavings = monthlySavings * 12;

  const formatCurrency = (val: number) => {
    if (val === 0) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-US').format(val);
  };

  // Determine limits for slider based on unit type
  const isTimeUnits = unitName.toLowerCase().includes('minute') || unitName.toLowerCase().includes('calling');
  const maxRange = isTimeUnits ? 100000 : 500000;
  const stepSize = isTimeUnits ? 1000 : 5000;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      {/* Left Input Box */}
      <div className="glass-card rounded-[2rem] border border-white/5 bg-zinc-950/40 p-6 md:p-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.25em] mb-4">
            <Coins className="h-3 w-3" />
            Interactive Calculator
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-black tracking-tight text-white">
            Estimate Your Custom Infrastructure Savings
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Drag the slider below to adjust your monthly volume of {unitName.toLowerCase()} and instantly calculate the price difference.
          </p>
        </div>

        {/* Slider Input */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                Monthly Volume
              </span>
              <span className="text-2xl font-heading font-black text-primary">
                {formatNumber(units)} <span className="text-xs text-muted-foreground font-sans uppercase font-bold tracking-widest">{unitName}</span>
              </span>
            </div>

            <input
              type="range"
              min={isTimeUnits ? 500 : 5000}
              max={maxRange}
              step={stepSize}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            
            <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">
              <span>{formatNumber(isTimeUnits ? 500 : 5000)}</span>
              <span>{formatNumber(maxRange / 2)}</span>
              <span>{formatNumber(maxRange)}+</span>
            </div>
          </div>

          {/* Side-by-side pricing models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                {competitorName} Cost
              </p>
              <p className="mt-2 text-3xl font-heading font-black text-white/90">
                {formatCurrency(competitorCost)}
                <span className="text-xs text-muted-foreground font-sans font-medium">/mo</span>
              </p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed flex gap-2">
                <AlertCircle className="h-3.5 w-3.5 text-zinc-500 shrink-0 mt-0.5" />
                <span>{competitorMathLabel}</span>
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                {fixedCost > 0 ? 'Estimated VPS Hosting Cost' : `${ourName} API Cost`}
              </p>
              <p className="mt-2 text-3xl font-heading font-black text-white">
                {formatCurrency(ourCost)}
                <span className="text-xs text-primary/80 font-sans font-medium">/mo</span>
              </p>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed flex gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span>{ourMathLabel}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Savings Output Box */}
      <div className="relative rounded-[2rem] border border-primary/20 bg-gradient-to-br from-purple-950/20 via-zinc-950/40 to-zinc-950/60 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
        {/* Glow behind */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
        
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6">
            <TrendingUp className="h-3 w-3" />
            Projected Savings
          </div>

          <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
            Total Monthly Savings
          </p>
          <h4 className="text-5xl font-heading font-black text-emerald-400 mt-2 tracking-tight">
            {formatCurrency(monthlySavings)}
            <span className="text-lg text-white/50 font-sans font-normal lowercase"> / mo</span>
          </h4>

          <div className="h-px bg-white/10 my-6" />

          <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
            Net Annual Savings
          </p>
          <h4 className="text-6xl font-heading font-black text-white mt-2 tracking-tight">
            {formatCurrency(annualSavings)}
            <span className="text-lg text-white/50 font-sans font-normal lowercase"> / yr</span>
          </h4>

          <p className="text-xs text-muted-foreground leading-relaxed mt-4">
            *Estimates represent direct third-party infrastructure and API savings. VPS hosting and Voice API costs are paid directly to hosting providers (AWS, DigitalOcean, Hetzner) and API providers (Retell, Vapi) — AIFLOXIUM does not charge any monthly markup or hosting fee.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-primary/95 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_10px_30px_rgba(255,107,0,0.2)]"
          >
            <Calendar className="h-4 w-4" />
            Claim Your Savings Call
          </Link>
          <p className="mt-3 text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            30-Minute Free Process Audit & Demo
          </p>
        </div>
      </div>
    </div>
  );
}
