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
      <div className="rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 liquid-glass">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 text-[#E0AAFF] text-[9px] font-semibold uppercase tracking-wider font-inter mb-4">
            <Coins className="h-3.5 w-3.5" />
            Interactive Calculator
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold font-inter tracking-wide text-white">
            Estimate Your Custom Infrastructure Savings
          </h3>
          <p className="mt-2 text-sm text-white/60 font-inter font-light leading-relaxed">
            Drag the slider below to adjust your monthly volume of {unitName.toLowerCase()} and instantly calculate the price difference.
          </p>
        </div>

        {/* Slider Input */}
        <div className="space-y-6 font-inter">
          <div className="p-6 rounded-2xl border border-white/5 bg-black/40 liquid-glass">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Monthly Volume
              </span>
              <span className="text-2xl font-instrument italic text-[#E0AAFF]">
                {formatNumber(units)} <span className="text-xs text-white/40 font-inter uppercase font-semibold tracking-wider">{unitName}</span>
              </span>
            </div>

            <input
              type="range"
              min={isTimeUnits ? 500 : 5000}
              max={maxRange}
              step={stepSize}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E0AAFF] focus:outline-none focus:ring-1 focus:ring-[#E0AAFF]"
            />
            
            <div className="flex justify-between text-[8px] font-semibold text-white/40 uppercase tracking-widest mt-2">
              <span>{formatNumber(isTimeUnits ? 500 : 5000)}</span>
              <span>{formatNumber(maxRange / 2)}</span>
              <span>{formatNumber(maxRange)}+</span>
            </div>
          </div>

          {/* Side-by-side pricing models */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300 liquid-glass">
              <span className="text-[9px] font-semibold text-white/40 uppercase tracking-wider block">
                {competitorName} Cost
              </span>
              <p className="mt-2 text-3xl font-instrument italic text-white/90">
                {formatCurrency(competitorCost)}
                <span className="text-xs text-white/40 font-inter font-light">/mo</span>
              </p>
              <p className="mt-3 text-xs text-white/50 leading-relaxed flex gap-2 font-light">
                <AlertCircle className="h-3.5 w-3.5 text-white/30 shrink-0 mt-0.5" />
                <span>{competitorMathLabel}</span>
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#7B2CBF]/20 bg-[#7B2CBF]/5">
              <span className="text-[9px] font-semibold text-[#E0AAFF] uppercase tracking-wider block">
                {fixedCost > 0 ? 'Estimated VPS Hosting Cost' : `${ourName} API Cost`}
              </span>
              <p className="mt-2 text-3xl font-instrument italic text-[#E0AAFF]">
                {formatCurrency(ourCost)}
                <span className="text-xs text-white/50 font-inter font-light">/mo</span>
              </p>
              <p className="mt-3 text-xs text-white/60 leading-relaxed flex gap-2 font-light">
                <Sparkles className="h-3.5 w-3.5 text-[#E0AAFF] shrink-0 mt-0.5" />
                <span>{ourMathLabel}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Savings Output Box */}
      <div className="relative rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col justify-between overflow-hidden liquid-glass">
        {/* Glow behind */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#7B2CBF]/5 blur-[100px] pointer-events-none" />
        
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[9px] font-semibold uppercase tracking-wider font-inter mb-6">
            <TrendingUp className="h-3.5 w-3.5" />
            Projected Savings
          </div>

          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider font-inter block">
            Total Monthly Savings
          </span>
          <h4 className="text-5xl font-instrument italic text-emerald-400 mt-2">
            {formatCurrency(monthlySavings)}
            <span className="text-lg text-white/40 font-inter font-light"> / mo</span>
          </h4>

          <div className="h-[1px] bg-white/10 my-6" />

          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider font-inter block">
            Net Annual Savings
          </span>
          <h4 className="text-6xl font-instrument italic text-white mt-2">
            {formatCurrency(annualSavings)}
            <span className="text-lg text-white/40 font-inter font-light"> / yr</span>
          </h4>

          <p className="text-xs text-white/40 font-inter font-light leading-relaxed mt-4">
            *Estimates represent direct third-party infrastructure and API savings. VPS hosting and Voice API costs are paid directly to hosting providers (AWS, DigitalOcean, Hetzner) and API providers (Retell, Vapi) — I do not charge any monthly markup or hosting fee.
          </p>
        </div>

        <div className="mt-8 font-inter">
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            Claim Your Savings Call
          </Link>
          <span className="mt-3 text-center text-[9px] text-white/40 font-semibold uppercase tracking-widest block">
            30-Minute Free Process Audit & Demo
          </span>
        </div>
      </div>
    </div>
  );
}
