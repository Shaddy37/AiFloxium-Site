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
      <section className="rounded-[2.2rem] border border-black/8 bg-[#fffaf5] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              <Gauge className="h-4 w-4" />
              Live calculator
            </p>
            <h2 className="text-3xl font-heading font-black tracking-tight text-brand-plum md:text-4xl">
              Estimate the cost of repetitive work before you try to automate it.
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-700 md:text-base">
              Fill in a few rough numbers. The calculator will estimate time saved, money saved,
              and which workflows are most likely worth fixing first.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-brand-plum/10 bg-white px-5 py-4 text-left shadow-[0_18px_40px_rgba(0,0,0,0.05)] md:min-w-[180px] md:text-right">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
              Opportunity level
            </p>
            <p className="mt-2 text-3xl font-heading font-black text-brand-orange">
              {getOpportunityLabel(result.opportunityScore)}
            </p>
            <p className="mt-1 text-sm text-zinc-600">{result.opportunityScore}/100</p>
          </div>
        </div>

        <div className="space-y-6">
          {inputSections.map((section) => (
            <div
              key={section.title}
              className="rounded-[1.8rem] border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,0.04)] md:p-6"
            >
              <div className="mb-5">
                <h3 className="text-xl font-heading font-black tracking-tight text-brand-plum">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <Label
                      htmlFor={field.key}
                      className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-800"
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
                      className="h-14 rounded-2xl border-black/10 bg-[#fbf7f3] text-base text-zinc-900 placeholder:text-zinc-400"
                    />
                    <p className="text-sm leading-6 text-zinc-500">{field.helper}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-brand-orange/15 bg-[linear-gradient(135deg,rgba(255,107,0,0.08),rgba(88,28,135,0.04))] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-plum">
                What this estimate assumes
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700">
                This is a directional model. It combines recoverable labor time, process leakage,
                and a conservative implementation cost range for startup and small business
                automation projects.
              </p>
            </div>
            <div className="rounded-2xl border border-black/8 bg-white px-4 py-3 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
                Automation recovery rate
              </p>
              <p className="mt-1 text-2xl font-heading font-black text-brand-plum">
                {Math.round(result.recoveryRate * 100)}%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[2.2rem] border border-black/8 bg-white p-6 text-black shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:p-8">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-plum">
                <Clock3 className="h-4 w-4" />
                Immediate summary
              </p>
              <h3 className="text-3xl font-heading font-black tracking-tight text-brand-plum">
                Your team could recover about {formatNumber(result.hoursSavedPerMonth)} hours a
                month.
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700 md:text-base">
                That is the core question this tool answers first. The rest of the numbers help
                translate that lost time into money, payback, and next-step priority.
              </p>
            </div>

            <div className="rounded-[1.4rem] border border-brand-orange/20 bg-brand-orange/10 px-4 py-3 text-right">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600">
                Best read
              </p>
              <p className="mt-1 text-2xl font-heading font-black text-brand-orange">
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
                className="rounded-[1.5rem] border border-black/6 bg-[#fbf7f3] p-4"
              >
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
              First workflows to look at
            </p>
            <ul className="mt-3 space-y-2 text-sm font-medium leading-7 text-zinc-700">
              {result.recommendations.map((recommendation) => (
                <li key={recommendation.id} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-orange" />
                  <span>{recommendation.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,7,20,0.94),rgba(11,4,13,0.98))] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] md:p-8">
          <div className="mb-6">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-brand-orange">
              <FileText className="h-4 w-4" />
              Downloadable report
            </p>
            <h3 className="text-2xl font-heading font-black tracking-tight text-white">
              Get the report by email, then download it and keep the roadmap.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">
              The on-page summary stays visible. Email is only required if you want the report
              download and the fuller recommendation view.
            </p>
          </div>

          <form className="grid grid-cols-1 gap-4 md:grid-cols-3" onSubmit={handleLeadSubmit}>
            <div className="space-y-2 md:col-span-1">
              <Label
                htmlFor="tool-email"
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white"
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
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/50"
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
                placeholder="Acme Corp (Optional)"
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/50"
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
                placeholder="8"
                value={leadForm.teamSize}
                onChange={(event) =>
                  setLeadForm((current) => ({ ...current, teamSize: event.target.value }))
                }
                className="h-14 rounded-2xl border-white/10 bg-black/20 text-white placeholder:text-white/50"
              />
            </div>
            <div className="md:col-span-3">
              <Button
                type="submit"
                size="lg"
                disabled={gateState === 'submitting'}
                className="h-14 w-full rounded-2xl border-none bg-brand-orange text-sm font-black uppercase tracking-[0.2em] text-white hover:bg-brand-orange/90 transition-all active:scale-[0.98]"
              >
                {gateState === 'submitting' ? 'Preparing report...' : 'Get the report & roadmap'}
              </Button>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                <ShieldCheck className="h-3.5 w-3.5 text-white/50" />
                <span>Free report. No credit card required.</span>
              </div>
            </div>
          </form>

          {gateMessage ? (
            <p
              className={cn(
                'mt-4 text-sm leading-7',
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
                  What the report includes
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    'A downloadable summary of your result',
                    'Estimated implementation range and payback context',
                    'Top workflows to automate first and the best-fit service path'
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-dashed border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/55"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange">
                      Report ready
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/72">
                      Download the report, then use the roadmap below to decide what deserves
                      scoping first.
                    </p>
                  </div>
                  <Button
                    type="button"
                    size="lg"
                    onClick={handleDownload}
                    className="h-12 rounded-full border-none bg-white text-brand-bg hover:bg-zinc-100"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download report
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Estimated project range
                    </p>
                    <p className="mt-2 text-2xl font-heading font-black text-white">
                      {formatCurrency(result.implementationCost)}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Based on workflow count, team complexity, and monthly operating volume.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Revenue recovered
                    </p>
                    <p className="mt-2 text-2xl font-heading font-black text-white">
                      {formatCurrency(result.revenueLeakageRecoveredPerMonth)}/mo
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      This is only included when your volume and unit value suggest real downstream
                      loss.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
                      Best fit next step
                    </p>
                    <p className="mt-2 text-2xl font-heading font-black text-white">
                      {result.recommendations[0]?.serviceLabel || 'Discovery call'}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      The strongest path based on your workload mix and process shape.
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
                            <p className="mt-2 text-sm leading-7 text-white/70">
                              {recommendation.summary}
                            </p>
                            <p className="mt-3 text-sm leading-7 text-white/60">
                              {recommendation.reason}
                            </p>
                          </div>
                          <Link
                            href={recommendation.serviceHref}
                            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:border-brand-orange hover:text-brand-orange"
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
                        Live review
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-700">
                        If the report looks directionally right, the fastest next step is a
                        discovery call to pressure-test the estimate and map the first workflow
                        into a real automation scope.
                      </p>
                    </div>
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-orange/90"
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
