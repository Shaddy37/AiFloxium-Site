'use client';

import { FormEvent, startTransition, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Download,
  Gauge,
  Mail,
  ShieldCheck
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  calculateAutomationRoi,
  CalculatorInputs,
  getOpportunityLabel,
  TOOL_LEAD_TAG
} from '@/lib/tools-data';
import { CALENDLY_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

type GateState = 'idle' | 'submitting' | 'success' | 'error';

type LeadFormState = {
  email: string;
  company: string;
  teamSize: string;
};

const defaultInputs: CalculatorInputs = {
  teamSize: 8,
  hourlyCost: 35,
  hoursLostPerWeek: 14,
  workflowsCount: 4,
  operationsVolume: 180,
  averageValue: 120
};

const inputConfig: Array<{
  key: keyof CalculatorInputs;
  label: string;
  helper: string;
  min: number;
  max: number;
  step: number;
}> = [
  {
    key: 'teamSize',
    label: 'Team size',
    helper: 'How many people touch the process?',
    min: 1,
    max: 100,
    step: 1
  },
  {
    key: 'hourlyCost',
    label: 'Average hourly labor cost',
    helper: 'Loaded hourly cost in USD.',
    min: 10,
    max: 250,
    step: 1
  },
  {
    key: 'hoursLostPerWeek',
    label: 'Hours lost to repetitive work per week',
    helper: 'Across the team, not per person.',
    min: 1,
    max: 200,
    step: 1
  },
  {
    key: 'workflowsCount',
    label: 'Manual workflows or handoffs involved',
    helper: 'Approval chains, routing, syncs, reporting, onboarding.',
    min: 1,
    max: 20,
    step: 1
  },
  {
    key: 'operationsVolume',
    label: 'Lead, order, ticket, or task volume per month',
    helper: 'Use the operational unit that best matches your process.',
    min: 0,
    max: 10000,
    step: 10
  },
  {
    key: 'averageValue',
    label: 'Average value per lead, client, order, or task',
    helper: 'Optional, but useful for leakage estimates.',
    min: 0,
    max: 10000,
    step: 10
  }
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(value);
}

export default function AutomationRoiCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const [leadForm, setLeadForm] = useState<LeadFormState>({
    email: '',
    company: '',
    teamSize: String(defaultInputs.teamSize)
  });
  const [gateState, setGateState] = useState<GateState>('idle');
  const [gateMessage, setGateMessage] = useState('');
  const [reportUnlocked, setReportUnlocked] = useState(false);

  const result = calculateAutomationRoi(inputs);

  const handleInputChange = (key: keyof CalculatorInputs, value: string) => {
    const numericValue = Number(value);

    startTransition(() => {
      setInputs((current) => ({
        ...current,
        [key]: Number.isFinite(numericValue) ? numericValue : 0
      }));
    });

    if (key === 'teamSize') {
      setLeadForm((current) => ({ ...current, teamSize: value }));
    }
  };

  const handleLeadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGateState('submitting');
    setGateMessage('');

    try {
      const response = await fetch('/api/tool-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tag: TOOL_LEAD_TAG,
          tool: 'AI Automation ROI Calculator',
          email: leadForm.email,
          company: leadForm.company,
          teamSize: leadForm.teamSize,
          calculatorInputs: inputs,
          calculatorResult: result
        })
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || 'Lead capture failed');
      }

      setReportUnlocked(true);
      setGateState('success');
      setGateMessage('Full report unlocked. Check the roadmap and next-step recommendations below.');
    } catch (error) {
      console.error(error);
      setReportUnlocked(true);
      setGateState('error');
      setGateMessage(
        'Full report unlocked, but lead capture is unavailable right now. Use the discovery call link if you want the roadmap reviewed live.'
      );
    }
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-8">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              <Gauge className="h-4 w-4" />
              Live calculator
            </p>
            <h2 className="text-3xl font-heading font-black tracking-tight text-white md:text-4xl">
              Model the operational drag before you automate it.
            </h2>
          </div>
          <div className="hidden rounded-2xl border border-brand-plum/20 bg-brand-plum/10 px-4 py-3 text-right md:block">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/55">
              Opportunity score
            </p>
            <p className="mt-1 text-3xl font-heading font-black text-brand-orange">
              {result.opportunityScore}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {inputConfig.map((field) => (
            <div key={field.key} className="space-y-2">
              <Label
                htmlFor={field.key}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white"
              >
                {field.label}
              </Label>
              <Input
                id={field.key}
                type="number"
                min={field.min}
                max={field.max}
                step={field.step}
                value={inputs[field.key]}
                onChange={(event) => handleInputChange(field.key, event.target.value)}
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-base text-white placeholder:text-white/35"
              />
              <p className="text-sm leading-relaxed text-white/55">{field.helper}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-brand-orange/15 bg-black/20 p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                What this estimate assumes
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                The model combines recoverable labor time, process leakage, and a conservative
                implementation cost range for startup and SMB automation projects.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                Automation recovery rate
              </p>
              <p className="mt-1 text-2xl font-heading font-black text-white">
                {Math.round(result.recoveryRate * 100)}%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2rem] border border-white/10 bg-[#f6efe8] p-6 text-black shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-8">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-plum">
                <BarChart3 className="h-4 w-4" />
                Immediate summary
              </p>
              <h3 className="text-3xl font-heading font-black tracking-tight text-brand-plum">
                You are likely losing {formatNumber(result.hoursSavedPerMonth)} recoverable hours each month.
              </h3>
            </div>
            <div className="rounded-2xl border border-brand-plum/10 bg-white/70 px-4 py-3 text-right">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Opportunity
              </p>
              <p className="mt-1 text-2xl font-heading font-black text-brand-orange">
                {getOpportunityLabel(result.opportunityScore)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                label: 'Recovered value / month',
                value: formatCurrency(result.totalValuePerMonth),
                icon: BriefcaseBusiness
              },
              {
                label: 'Payroll savings / month',
                value: formatCurrency(result.payrollSavingsPerMonth),
                icon: Clock3
              },
              {
                label: 'Annual upside',
                value: formatCurrency(result.annualValue),
                icon: Gauge
              },
              {
                label: 'Estimated payback window',
                value: result.paybackMonths > 0 ? `${result.paybackMonths} months` : 'N/A',
                icon: ShieldCheck
              }
            ].map((card) => (
              <div key={card.label} className="rounded-[1.5rem] border border-black/5 bg-white/80 p-4">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-plum/8 text-brand-plum">
                  <card.icon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  {card.label}
                </p>
                <p className="mt-2 text-2xl font-heading font-black tracking-tight text-black">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-brand-orange/20 bg-brand-orange/8 p-4">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-plum">
              Live recommendation preview
            </p>
            <ul className="mt-3 space-y-2 text-sm font-medium leading-relaxed text-zinc-700">
              {result.recommendations.map((recommendation) => (
                <li key={recommendation.id} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <span>{recommendation.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
          <div className="mb-6">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              <Download className="h-4 w-4" />
              Partial gate
            </p>
            <h3 className="text-2xl font-heading font-black tracking-tight text-white">
              Unlock the full roadmap and the top 3 workflows to automate first.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
              The basic estimate stays visible. Submit your email to reveal the fuller operator
              report, implementation cost range, and service-fit recommendations.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-4 md:grid-cols-3" onSubmit={handleLeadSubmit}>
            <div className="space-y-2 md:col-span-1">
              <Label
                htmlFor="tool-email"
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white"
              >
                Email
              </Label>
              <Input
                id="tool-email"
                type="email"
                required
                value={leadForm.email}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="ops@company.com"
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/35"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="tool-company"
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white"
              >
                Company
              </Label>
              <Input
                id="tool-company"
                value={leadForm.company}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, company: event.target.value }))
                }
                placeholder="Optional"
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/35"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="tool-team-size"
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white"
              >
                Team size
              </Label>
              <Input
                id="tool-team-size"
                type="number"
                min={1}
                max={200}
                value={leadForm.teamSize}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, teamSize: event.target.value }))
                }
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/35"
              />
            </div>
            <div className="md:col-span-3">
              <Button
                type="submit"
                size="lg"
                disabled={gateState === 'submitting'}
                className="h-14 w-full rounded-2xl border-none bg-brand-orange text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-brand-orange/90"
              >
                {gateState === 'submitting' ? 'Unlocking report...' : 'Unlock full report'}
              </Button>
            </div>
          </form>

          {gateMessage ? (
            <p
              className={cn(
                'mt-4 text-sm leading-relaxed',
                gateState === 'error' ? 'text-amber-300' : 'text-emerald-300'
              )}
            >
              {gateMessage}
            </p>
          ) : null}

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
            {!reportUnlocked ? (
              <div className="space-y-3">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                  Locked report preview
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    'Top 3 workflows to automate first',
                    'Implementation cost range and payback context',
                    'Service-fit path into n8n, Vibe Coding, or Agents'
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-4 text-sm text-white/50"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Estimated project range
                    </p>
                    <p className="mt-2 text-2xl font-heading font-black text-white">
                      {formatCurrency(result.implementationCost)}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      Based on workflow count, team complexity, and monthly operational volume.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Revenue leakage recovered
                    </p>
                    <p className="mt-2 text-2xl font-heading font-black text-white">
                      {formatCurrency(result.revenueLeakageRecoveredPerMonth)}/mo
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      Only counted when your volume and unit value suggest meaningful downstream loss.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Best fit next step
                    </p>
                    <p className="mt-2 text-2xl font-heading font-black text-white">
                      {result.recommendations[0]?.serviceLabel || 'Discovery call'}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      The strongest path based on your current workload mix and process design.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange">
                    Top workflows to automate first
                  </p>
                  <div className="mt-4 grid gap-4">
                    {result.recommendations.map((recommendation, index) => (
                      <div
                        key={recommendation.id}
                        className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                              Priority {index + 1}
                            </p>
                            <h4 className="mt-2 text-xl font-heading font-black text-white">
                              {recommendation.title}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                              {recommendation.summary}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-white/60">
                              {recommendation.reason}
                            </p>
                          </div>
                          <Link
                            href={recommendation.serviceHref}
                            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white hover:border-brand-orange hover:text-brand-orange"
                          >
                            {recommendation.serviceLabel}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-brand-orange/20 bg-brand-orange/8 p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-brand-plum">
                        <Mail className="h-4 w-4" />
                        Operator handoff
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700">
                        If these numbers look directionally right, the fastest next step is a
                        discovery call to pressure-test the estimate and map the first 1-2
                        workflows into a real automation scope.
                      </p>
                    </div>
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-brand-orange/90"
                    >
                      Book discovery call
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
