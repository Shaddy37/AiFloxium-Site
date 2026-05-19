export type ToolHubCard = {
  slug: string;
  title: string;
  status: 'live' | 'planned';
  eyebrow: string;
  description: string;
  audience: string;
  primaryKeyword: string;
  href: string;
};

export type AutomationType = {
  id:
    | 'lead-routing'
    | 'reporting-sync'
    | 'client-onboarding'
    | 'internal-tooling'
    | 'support-triage'
    | 'finance-ops';
  title: string;
  summary: string;
  serviceLabel: string;
  serviceHref: string;
};

export type CalculatorInputs = {
  teamSize: number;
  hourlyCost: number;
  hoursLostPerWeek: number;
  workflowsCount: number;
  operationsVolume: number;
  averageValue: number;
};

export type AutomationRecommendation = AutomationType & {
  score: number;
  reason: string;
};

export type CalculatorResult = {
  hoursSavedPerMonth: number;
  payrollSavingsPerMonth: number;
  revenueLeakageRecoveredPerMonth: number;
  totalValuePerMonth: number;
  annualValue: number;
  implementationCost: number;
  paybackMonths: number;
  opportunityScore: number;
  recoveryRate: number;
  recommendations: AutomationRecommendation[];
};

export const TOOL_LEAD_TAG = 'tool_automation_roi';

export const toolsHubCards: ToolHubCard[] = [
  {
    slug: 'automation-roi-calculator',
    title: 'AI Automation ROI Calculator',
    status: 'live',
    eyebrow: 'Flagship tool',
    description:
      'Estimate the time, payroll, and revenue leakage tied up in repetitive work and get the top workflows to automate first.',
    audience: 'Startup and SMB operators with workflow bottlenecks',
    primaryKeyword: 'automation roi calculator',
    href: '/tools/automation-roi-calculator'
  },
  {
    slug: 'lead-response-time-loss-calculator',
    title: 'Lead Response Time Loss Calculator',
    status: 'planned',
    eyebrow: 'Next in queue',
    description:
      'Model how much revenue slow lead follow-up is burning and where response-time automation will pay back first.',
    audience: 'Sales and inbound teams',
    primaryKeyword: 'lead response time calculator',
    href: '/tools'
  },
  {
    slug: 'internal-tool-vs-manual-ops-calculator',
    title: 'Internal Tool vs Manual Ops Cost Calculator',
    status: 'planned',
    eyebrow: 'Pipeline',
    description:
      'Compare spreadsheet-heavy operations against the cost of a custom internal tool to identify the better investment.',
    audience: 'Ops leaders managing multi-step internal workflows',
    primaryKeyword: 'internal tool cost calculator',
    href: '/tools'
  },
  {
    slug: 'seo-content-velocity-roi-calculator',
    title: 'SEO Content Velocity ROI Calculator',
    status: 'planned',
    eyebrow: 'Pipeline',
    description:
      'Estimate the output and organic upside from moving content production into an AI-assisted SEO system.',
    audience: 'Teams scaling organic acquisition',
    primaryKeyword: 'seo roi calculator',
    href: '/tools'
  }
];

export const automationTypes: AutomationType[] = [
  {
    id: 'lead-routing',
    title: 'Lead routing and qualification',
    summary:
      'Automatically enrich, score, and route inbound demand before it stalls in a shared inbox or spreadsheet.',
    serviceLabel: 'n8n Workflow Automation',
    serviceHref: '/services/n8n-workflow-automation'
  },
  {
    id: 'reporting-sync',
    title: 'Reporting sync and KPI dashboards',
    summary:
      'Pull updates from your stack into one reporting layer so the team stops rebuilding status reports by hand.',
    serviceLabel: 'n8n Workflow Automation',
    serviceHref: '/services/n8n-workflow-automation'
  },
  {
    id: 'client-onboarding',
    title: 'Client onboarding workflow',
    summary:
      'Standardize handoffs, reminders, document collection, and setup steps so new work does not depend on memory.',
    serviceLabel: 'Autonomous Agents',
    serviceHref: '/services/autonomous-agents'
  },
  {
    id: 'internal-tooling',
    title: 'Custom internal ops tool',
    summary:
      'Replace brittle spreadsheets and repeated copying with one focused internal interface for the workflow.',
    serviceLabel: 'Vibe Coding',
    serviceHref: '/services/vibe-coding'
  },
  {
    id: 'support-triage',
    title: 'Support and request triage',
    summary:
      'Classify, prioritize, and dispatch incoming requests automatically so the right person acts faster.',
    serviceLabel: 'Autonomous Agents',
    serviceHref: '/services/autonomous-agents'
  },
  {
    id: 'finance-ops',
    title: 'Finance and back-office processing',
    summary:
      'Automate invoice handling, approvals, reconciliations, and status updates across finance operations.',
    serviceLabel: 'n8n Workflow Automation',
    serviceHref: '/services/n8n-workflow-automation'
  }
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundCurrency(value: number) {
  return Math.round(value);
}

export function calculateAutomationRoi(inputs: CalculatorInputs): CalculatorResult {
  const recoveryRate = clamp(
    0.34 +
      inputs.workflowsCount * 0.055 +
      Math.min(inputs.teamSize, 20) * 0.012 +
      Math.min(inputs.hoursLostPerWeek / 50, 0.12),
    0.35,
    0.82
  );

  const hoursSavedPerMonth = inputs.hoursLostPerWeek * 4.33 * recoveryRate;
  const payrollSavingsPerMonth = hoursSavedPerMonth * inputs.hourlyCost;

  const leakageRate = clamp(
    0.012 +
      Math.min(inputs.operationsVolume / 4000, 0.028) +
      Math.min(inputs.workflowsCount * 0.002, 0.01),
    0.01,
    0.05
  );

  const revenueLeakageRecoveredPerMonth =
    inputs.operationsVolume > 0 && inputs.averageValue > 0
      ? inputs.operationsVolume * inputs.averageValue * leakageRate * 0.22
      : 0;

  const totalValuePerMonth = payrollSavingsPerMonth + revenueLeakageRecoveredPerMonth;
  const annualValue = totalValuePerMonth * 12;
  const implementationCost =
    1800 +
    inputs.workflowsCount * 650 +
    Math.min(inputs.teamSize, 25) * 45 +
    (inputs.operationsVolume > 1000 ? 600 : 0);
  const paybackMonths = totalValuePerMonth > 0 ? implementationCost / totalValuePerMonth : 0;

  const opportunityScore = Math.round(
    clamp(
      18 +
        inputs.teamSize * 2.2 +
        inputs.hoursLostPerWeek * 1.1 +
        inputs.workflowsCount * 5.5 +
        Math.min(inputs.operationsVolume / 35, 16) +
        Math.min(inputs.averageValue / 30, 10),
      12,
      98
    )
  );

  return {
    hoursSavedPerMonth,
    payrollSavingsPerMonth: roundCurrency(payrollSavingsPerMonth),
    revenueLeakageRecoveredPerMonth: roundCurrency(revenueLeakageRecoveredPerMonth),
    totalValuePerMonth: roundCurrency(totalValuePerMonth),
    annualValue: roundCurrency(annualValue),
    implementationCost: roundCurrency(implementationCost),
    paybackMonths: Number(paybackMonths.toFixed(1)),
    opportunityScore,
    recoveryRate,
    recommendations: rankAutomationRecommendations(inputs)
  };
}

export function rankAutomationRecommendations(
  inputs: CalculatorInputs
): AutomationRecommendation[] {
  const scored = automationTypes.map((item) => {
    let score = 0;

    if (item.id === 'lead-routing') {
      score += inputs.operationsVolume * 0.035;
      score += inputs.averageValue * 0.12;
      score += inputs.workflowsCount * 4;
    }

    if (item.id === 'reporting-sync') {
      score += inputs.workflowsCount * 7;
      score += inputs.teamSize * 2;
      score += inputs.hoursLostPerWeek * 0.5;
    }

    if (item.id === 'client-onboarding') {
      score += inputs.teamSize * 3.4;
      score += inputs.workflowsCount * 4.5;
      score += Math.min(inputs.operationsVolume / 30, 18);
    }

    if (item.id === 'internal-tooling') {
      score += inputs.teamSize * 3.8;
      score += inputs.hoursLostPerWeek * 0.9;
      score += inputs.workflowsCount * 5;
    }

    if (item.id === 'support-triage') {
      score += Math.min(inputs.operationsVolume / 18, 26);
      score += inputs.teamSize * 1.8;
      score += inputs.hoursLostPerWeek * 0.45;
    }

    if (item.id === 'finance-ops') {
      score += inputs.workflowsCount * 5.5;
      score += inputs.hoursLostPerWeek * 0.6;
      score += inputs.averageValue > 200 ? 12 : 0;
    }

    return {
      ...item,
      score: Math.round(score),
      reason: buildRecommendationReason(item.id, inputs)
    };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}

function buildRecommendationReason(
  type: AutomationType['id'],
  inputs: CalculatorInputs
) {
  if (type === 'lead-routing') {
    return `Your volume (${inputs.operationsVolume}/month) and deal value suggest response-time and routing gaps are compounding quickly.`;
  }

  if (type === 'reporting-sync') {
    return `${inputs.workflowsCount} active workflows usually means updates are scattered across multiple tools and status reporting is eating operator time.`;
  }

  if (type === 'client-onboarding') {
    return `A team of ${inputs.teamSize} handling repeatable steps benefits from standardized handoffs, reminders, and setup sequences.`;
  }

  if (type === 'internal-tooling') {
    return `${inputs.hoursLostPerWeek} lost hours each week points to a workflow that likely needs a dedicated internal interface, not another spreadsheet.`;
  }

  if (type === 'support-triage') {
    return `Incoming operational load is high enough that automatic classification and dispatching would reduce response lag and context switching.`;
  }

  return 'Multiple repeatable processes and non-trivial transaction value make back-office automation a strong payback candidate.';
}

export function getOpportunityLabel(score: number) {
  if (score >= 80) {
    return 'High-leverage';
  }

  if (score >= 60) {
    return 'Strong';
  }

  if (score >= 40) {
    return 'Emerging';
  }

  return 'Early-stage';
}
