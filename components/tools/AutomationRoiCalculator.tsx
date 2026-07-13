'use client';

import { FormEvent, startTransition, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Coins,
  Download,
  FileText,
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

type InputSection = {
  title: string;
  description: string;
  fields: Array<{
    key: keyof CalculatorInputs;
    label: string;
    helper: string;
    min: number;
    max: number;
    step: number;
  }>;
};

const defaultInputs: CalculatorInputs = {
  teamSize: 8,
  hourlyCost: 35,
  hoursLostPerWeek: 14,
  workflowsCount: 4,
  operationsVolume: 180,
  averageValue: 120
};

const inputSections: InputSection[] = [
  {
    title: 'Your team',
    description: 'Start with the people and labor cost behind the workflow.',
    fields: [
      {
        key: 'teamSize',
        label: 'How many people touch this process?',
        helper: 'Count everyone involved, even if they only handle one step.',
        min: 1,
        max: 100,
        step: 1
      },
      {
        key: 'hourlyCost',
        label: 'Average hourly labor cost',
        helper: 'Use a rough loaded hourly cost in USD.',
        min: 10,
        max: 250,
        step: 1
      }
    ]
  },
  {
    title: 'Manual workload',
    description: 'Estimate how much repetitive work and process complexity exists today.',
    fields: [
      {
        key: 'hoursLostPerWeek',
        label: 'Hours lost to repetitive work each week',
        helper: 'Estimate the total across the team, not per person.',
        min: 1,
        max: 200,
        step: 1
      },
      {
        key: 'workflowsCount',
        label: 'Manual workflows or handoffs involved',
        helper: 'Examples: approvals, routing, reporting, onboarding, data entry.',
        min: 1,
        max: 20,
        step: 1
      }
    ]
  },
  {
    title: 'Business value',
    description: 'These inputs help estimate missed value beyond labor savings.',
    fields: [
      {
        key: 'operationsVolume',
        label: 'Leads, orders, tickets, or tasks per month',
        helper: 'Use the monthly volume that best matches this workflow.',
        min: 0,
        max: 10000,
        step: 10
      },
      {
        key: 'averageValue',
        label: 'Average value per lead, order, client, or task',
        helper: 'Optional. Leave at zero if you only want a labor estimate.',
        min: 0,
        max: 10000,
        step: 10
      }
    ]
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

function buildReportContent(inputs: CalculatorInputs) {
  const result = calculateAutomationRoi(inputs);

  return [
    '# Automation ROI Report',
    '',
    'This report was generated from the AIFLOXIUM Automation ROI Calculator.',
    '',
    '## Inputs',
    `- Team size: ${inputs.teamSize}`,
    `- Average hourly labor cost: ${formatCurrency(inputs.hourlyCost)}`,
    `- Hours lost per week: ${formatNumber(inputs.hoursLostPerWeek)}`,
    `- Manual workflows involved: ${formatNumber(inputs.workflowsCount)}`,
    `- Monthly operating volume: ${formatNumber(inputs.operationsVolume)}`,
    `- Average value per unit: ${formatCurrency(inputs.averageValue)}`,
    '',
    '## Summary',
    `- Time recovered per month: ${formatNumber(result.hoursSavedPerMonth)} hours`,
    `- Payroll savings per month: ${formatCurrency(result.payrollSavingsPerMonth)}`,
    `- Recovered value per month: ${formatCurrency(result.totalValuePerMonth)}`,
    `- Annual upside: ${formatCurrency(result.annualValue)}`,
    `- Estimated implementation cost: ${formatCurrency(result.implementationCost)}`,
    `- Estimated payback window: ${result.paybackMonths > 0 ? `${result.paybackMonths} months` : 'N/A'}`,
    `- Opportunity level: ${getOpportunityLabel(result.opportunityScore)} (${result.opportunityScore}/100)`,
    '',
    '## Top workflows to automate first',
    ...result.recommendations.flatMap((recommendation, index) => [
      `${index + 1}. ${recommendation.title}`,
      `   - Why it matters: ${recommendation.summary}`,
      `   - Why it ranked here: ${recommendation.reason}`,
      `   - Best fit service: ${recommendation.serviceLabel}`
    ]),
    '',
    '## Notes',
    '- This is a directional estimate, not a contractual forecast.',
    '- Use it to decide whether the workflow deserves scoping, not as a final budget.',
    '',
    'Generated at: ' + new Date().toISOString()
  ].join('\n');
}

function downloadReport(inputs: CalculatorInputs) {
  const content = buildReportContent(inputs);
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = 'automation-roi-report.md';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
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
          tool: 'Automation ROI Calculator',
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
      setGateMessage('Your report is ready to download below, and the roadmap has been unlocked.');
    } catch (error) {
      console.error(error);
      setReportUnlocked(true);
      setGateState('error');
      setGateMessage(
        'The report is ready below, but lead capture had an issue. If you want a live review, use the discovery call link.'
      );
    }
  };

  const handleDownload = () => {
    downloadReport(inputs);
  };

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
      <section className="rounded-[2.2rem] border border-white/5 bg-white/[0.01] p-6 md:p-8 text-white liquid-glass">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl font-inter">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF]">
              <Gauge className="h-4 w-4" />
              Live calculator
            </span>
            <h2 className="text-3xl font-instrument text-white tracking-tight md:text-4xl leading-[1.05]">
              Estimate the cost of repetitive work before you try to automate it.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 font-light">
              Fill in a few rough numbers. The calculator will estimate time saved, money saved,
              and which workflows are most likely worth fixing first.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/5 bg-white/[0.01] px-5 py-4 text-left shadow-sm md:min-w-[180px] md:text-right liquid-glass">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block font-inter">
              Opportunity level
            </span>
            <p className="mt-2 text-3xl font-instrument italic text-[#E0AAFF]">
              {getOpportunityLabel(result.opportunityScore)}
            </p>
            <p className="mt-1 text-xs text-white/50 font-inter font-light">{result.opportunityScore}/100</p>
          </div>
        </div>

        <div className="space-y-6">
          {inputSections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.8rem] border border-white/5 bg-white/[0.01] p-5 shadow-sm md:p-6 liquid-glass"
            >
              <div className="mb-5 font-inter">
                <h3 className="text-xl font-semibold tracking-wide text-white">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 font-light">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2 font-inter">
                    <Label
                      htmlFor={field.key}
                      className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50"
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
                      className="h-14 rounded-2xl border-white/10 bg-white/[0.01] text-base text-white placeholder:text-white/30 focus:border-[#7B2CBF]/40"
                    />
                    <p className="text-xs leading-relaxed text-white/40 font-light">{field.helper}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/5 bg-[#7B2CBF]/5 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="font-inter">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 block">
                What this estimate assumes
              </span>
              <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/60 font-light">
                This is a directional model. It combines recoverable labor time, process leakage,
                and a conservative implementation cost range for startup and small business
                automation projects.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] px-4 py-3 text-center liquid-glass">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block font-inter">
                Automation recovery rate
              </span>
              <p className="mt-1 text-2xl font-instrument italic text-[#E0AAFF]">
                {Math.round(result.recoveryRate * 100)}%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2.2rem] border border-white/5 bg-white/[0.01] p-6 text-white md:p-8 liquid-glass">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF] font-inter">
                <Clock3 className="h-4 w-4" />
                Immediate summary
              </span>
              <h3 className="text-3xl font-instrument text-white tracking-tight leading-[1.05]">
                Your team could recover about <span className="font-instrument text-[#E0AAFF] italic">{formatNumber(result.hoursSavedPerMonth)}</span> hours a month.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 font-inter font-light">
                That is the core question this tool answers first. The rest of the numbers help
                translate that lost time into money, payback, and next-step priority.
              </p>
            </div>

            <div className="rounded-[1.4rem] border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 px-4 py-3 text-right">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block font-inter">
                Best read
              </span>
              <p className="mt-1 text-2xl font-instrument italic text-[#E0AAFF]">
                {getOpportunityLabel(result.opportunityScore)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                label: 'Recovered value each month',
                value: formatCurrency(result.totalValuePerMonth),
                icon: BriefcaseBusiness
              },
              {
                label: 'Payroll savings each month',
                value: formatCurrency(result.payrollSavingsPerMonth),
                icon: Coins
              },
              {
                label: 'Possible annual upside',
                value: formatCurrency(result.annualValue),
                icon: Gauge
              },
              {
                label: 'Estimated payback period',
                value: result.paybackMonths > 0 ? `${result.paybackMonths} months` : 'N/A',
                icon: ShieldCheck
              }
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-[1.5rem] border border-white/5 bg-white/[0.01] p-4 liquid-glass"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#7B2CBF]/5 text-[#E0AAFF]">
                  <card.icon className="h-5 w-5" />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block font-inter">
                  {card.label}
                </span>
                <p className="mt-2 text-2xl font-instrument italic text-[#E0AAFF]">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 p-4">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] block font-inter">
              First workflows to look at
            </span>
            <ul className="mt-3 space-y-2 text-sm font-inter font-light leading-relaxed text-white/70">
              {result.recommendations.map((recommendation) => (
                <li key={recommendation.id} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#E0AAFF]" />
                  <span>{recommendation.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[2.2rem] border border-white/5 bg-white/[0.01] p-6 text-white md:p-8 liquid-glass">
          <div className="mb-6 font-inter">
            <span className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E0AAFF]">
              <FileText className="h-4 w-4" />
              Downloadable report
            </span>
            <h3 className="text-2xl font-semibold tracking-wide text-white">
              Get the report by email, then download it and keep the roadmap.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 font-light">
              The on-page summary stays visible. Email is only required if you want the report
              download and the fuller recommendation view.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-4 md:grid-cols-3" onSubmit={handleLeadSubmit}>
            <div className="space-y-2 md:col-span-1 font-inter">
              <Label
                htmlFor="tool-email"
                className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50"
              >
                Work email
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
                className="h-14 rounded-2xl border-white/10 bg-white/[0.01] text-white placeholder:text-white/30 focus:border-[#7B2CBF]/40"
              />
            </div>
            <div className="space-y-2 font-inter">
              <Label
                htmlFor="tool-company"
                className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50"
              >
                Company
              </Label>
              <Input
                id="tool-company"
                value={leadForm.company}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, company: event.target.value }))
                }
                placeholder="Acme Corp (Optional)"
                className="h-14 rounded-2xl border-white/10 bg-white/[0.01] text-white placeholder:text-white/30 focus:border-[#7B2CBF]/40"
              />
            </div>
            <div className="space-y-2 font-inter">
              <Label
                htmlFor="tool-team-size"
                className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50"
              >
                Team size
              </Label>
              <Input
                id="tool-team-size"
                type="number"
                min={1}
                max={200}
                placeholder="8"
                value={leadForm.teamSize}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, teamSize: event.target.value }))
                }
                className="h-14 rounded-2xl border-white/10 bg-white/[0.01] text-white placeholder:text-white/30 focus:border-[#7B2CBF]/40"
              />
            </div>
            <div className="md:col-span-3 font-inter">
              <Button
                type="submit"
                size="lg"
                disabled={gateState === 'submitting'}
                className="h-14 w-full rounded-2xl border-none bg-white text-black hover:bg-[#E0AAFF] button-glow text-xs font-semibold uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer"
              >
                {gateState === 'submitting' ? 'Preparing report...' : 'Get the report & roadmap'}
              </Button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-white/40 text-[9px] font-semibold uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5 text-white/50" />
                <span>Free report. No credit card required.</span>
              </div>
            </div>
          </form>

          {gateMessage ? (
            <p
              className={cn(
                'mt-4 text-sm leading-7 font-inter font-light',
                gateState === 'error' ? 'text-amber-300' : 'text-emerald-300'
              )}
            >
              {gateMessage}
            </p>
          ) : null}

          <div className="mt-6 rounded-[1.5rem] border border-white/5 bg-black/40 p-5 liquid-glass">
            {!reportUnlocked ? (
              <div className="space-y-3 font-inter">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 block">
                  What the report includes
                </span>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    'A downloadable summary of your result',
                    'Estimated implementation range and payback context',
                    'Top workflows to automate first and the best-fit service path'
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-dashed border-white/10 bg-white/[0.01] p-4 text-xs leading-relaxed text-white/50 font-light liquid-glass"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6 font-inter">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] block">
                      Report ready
                    </span>
                    <p className="mt-2 text-xs leading-relaxed text-white/60 font-light">
                      Download the report, then use the roadmap below to decide what deserves
                      scoping first.
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="lg"
                    onClick={handleDownload}
                    className="h-12 rounded-full border-none bg-white text-black hover:bg-[#E0AAFF] button-glow text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download report
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-4 liquid-glass">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block">
                      Estimated project range
                    </span>
                    <p className="mt-2 text-2xl font-instrument italic text-[#E0AAFF]">
                      {formatCurrency(result.implementationCost)}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/60 font-light">
                      Based on workflow count, team complexity, and monthly operating volume.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-4 liquid-glass">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block">
                      Revenue recovered
                    </span>
                    <p className="mt-2 text-2xl font-instrument italic text-[#E0AAFF]">
                      {formatCurrency(result.revenueLeakageRecoveredPerMonth)}/mo
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/60 font-light">
                      This is only included when your volume and unit value suggest real downstream
                      loss.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-4 liquid-glass">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block">
                      Best fit next step
                    </span>
                    <p className="mt-2 text-2xl font-instrument italic text-[#E0AAFF]">
                      {result.recommendations[0]?.serviceLabel || 'Discovery call'}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/60 font-light">
                      The strongest path based on your workload mix and process shape.
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] block">
                    Top workflows to automate first
                  </span>
                  <div className="mt-4 grid gap-4">
                    {result.recommendations.map((recommendation, index) => (
                      <div
                        key={recommendation.id}
                        className="rounded-[1.5rem] border border-white/5 bg-white/[0.01] p-5 liquid-glass"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 block">
                              Priority {index + 1}
                            </span>
                            <h4 className="mt-2 text-xl font-semibold text-white tracking-wide">
                              {recommendation.title}
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed text-white/60 font-light">
                              {recommendation.summary}
                            </p>
                            <p className="mt-3 text-xs leading-relaxed text-white/50 font-light">
                              {recommendation.reason}
                            </p>
                          </div>
                          <Link
                            href={recommendation.serviceHref}
                            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.01] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#E0AAFF] hover:text-[#E0AAFF]"
                          >
                            {recommendation.serviceLabel}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[#7B2CBF]/20 bg-[#7B2CBF]/5 p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF]">
                        <Mail className="h-4 w-4" />
                        Live review
                      </span>
                      <p className="mt-2 max-w-2xl text-xs leading-relaxed text-white/60 font-light">
                        If the report looks directionally right, the fastest next step is a
                        discovery call to pressure-test the estimate and map the first workflow
                        into a real automation scope.
                      </p>
                    </div>
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#E0AAFF] button-glow"
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
