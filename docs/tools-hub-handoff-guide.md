# Tools Hub Handoff Guide

Date: 2026-05-19
Project: `E:\Antigravity\Redesign`
Scope: AIFLOXIUM free tools hub, flagship ROI calculator, and future tool implementation pattern

## Why This File Exists

This file is the memory handoff for a future chat.

If the laptop is shut down and a new chat starts with no prior context, use this file first.

It contains:

- the strategy agreed in chat
- what was implemented already
- which files were changed
- what still needs verification
- how to build the next tools using the same pattern
- a full repeatable implementation guide

## Chat Summary

The goal was to turn the earlier free-tool strategy into a real site implementation.

The agreed strategy was:

- build one flagship tool first
- make it an evergreen landing page, not a temporary promo page
- use it as the foundation for a future `/tools` hub
- target qualified startup/SMB operators, not broad low-intent traffic
- use partial gating:
  - show the summary ungated
  - gate the fuller roadmap/report
  - push qualified users toward a discovery call

The flagship tool selected was:

- `AI Automation ROI Calculator`

The future roadmap order agreed in the earlier plan was:

1. `AI Automation ROI Calculator`
2. `Lead Response Time Loss Calculator`
3. `Internal Tool vs Manual Ops Cost Calculator`
4. `SEO Content Velocity / ROI Calculator`

## What Was Implemented

The following work was completed:

### New routes

- `/tools`
- `/tools/automation-roi-calculator`
- `/api/tool-lead`

### New site structure

- added a dedicated tools hub page
- added a flagship calculator landing page
- added a reusable calculator logic/data layer
- added lead capture endpoint for the gated tool report
- added navigation links to the hub
- added sitemap entries
- added a tools CTA block on the resources page

### New behavior

- live calculator updates on-page
- ungated summary is visible immediately
- gated fuller report unlocks inline after form submit
- tool recommends top automation types
- tool links users into relevant AIFLOXIUM service pages
- tool pushes users toward Calendly discovery calls

## Files Added

- `app/tools/page.tsx`
- `app/tools/automation-roi-calculator/page.tsx`
- `app/api/tool-lead/route.ts`
- `components/tools/AutomationRoiCalculator.tsx`
- `lib/tools-data.ts`

## Files Modified

- `components/layouts/Navbar.tsx`
- `components/sections/Footer.tsx`
- `app/resources/page.tsx`
- `app/sitemap.ts`

## Current Architecture

### 1. Hub page

File:

- `app/tools/page.tsx`

Purpose:

- acts as the main tools hub
- introduces the strategy and roadmap
- lists live and planned tools from shared data
- includes SEO metadata and collection schema

### 2. Flagship tool landing page

File:

- `app/tools/automation-roi-calculator/page.tsx`

Purpose:

- dedicated SEO landing page for `automation roi calculator`
- contains hero, supporting content, FAQ, schema, and the calculator component
- meant to rank and convert, not just function

### 3. Calculator UI

File:

- `components/tools/AutomationRoiCalculator.tsx`

Purpose:

- handles form inputs
- calculates live result state
- shows ungated summary
- handles partial gate form submission
- unlocks richer report content inline

### 4. Shared tool data and logic

File:

- `lib/tools-data.ts`

Purpose:

- stores hub card data
- stores future tool roadmap cards
- stores automation recommendation types
- contains ROI formula and recommendation ranking logic
- contains shared lead tag constant: `tool_automation_roi`

### 5. Lead capture API

File:

- `app/api/tool-lead/route.ts`

Purpose:

- receives lead capture submissions from the tool
- sends the data via Resend email
- includes email, company, team size, inputs, and result snapshot

## Important Notes About Verification

Verification was incomplete because this shell environment did not expose `node` or `npm` on `PATH`.

That means these checks still need to be run later on a machine/shell where Node is available:

```bash
npm run lint
npm run build
```

Also manually test:

```bash
npm run dev
```

Then visit:

- `http://localhost:3000/tools`
- `http://localhost:3000/tools/automation-roi-calculator`

## What To Check First When You Return

When you come back and open a new chat, do this first:

1. Tell the new agent to read `docs/tools-hub-handoff-guide.md`
2. Ask it to inspect:
   - `app/tools/page.tsx`
   - `app/tools/automation-roi-calculator/page.tsx`
   - `components/tools/AutomationRoiCalculator.tsx`
   - `lib/tools-data.ts`
   - `app/api/tool-lead/route.ts`
3. Ask it to run lint/build if Node is available
4. Then continue with the next tool

## How The Current Tool Works

### Inputs

The current ROI calculator collects:

- team size
- average hourly labor cost
- hours lost per week
- workflows count
- operational volume per month
- average value per lead/order/task

### Outputs

It currently computes:

- hours saved per month
- payroll savings per month
- revenue leakage recovered per month
- total value per month
- annual value
- implementation cost estimate
- payback window
- automation opportunity score
- top 3 automation recommendations

### Gate model

Current partial gate behavior:

- summary visible immediately
- full roadmap/report unlocked after lead form submit
- if lead endpoint fails, report still unlocks and user gets a fallback message

### Service recommendation model

Current recommendations map into:

- `n8n Workflow Automation`
- `Vibe Coding`
- `Autonomous Agents`

This is important because future tools should also connect naturally into existing AIFLOXIUM services.

## Full Guide For Implementing Future Tools

This is the repeatable system to use for every new tool.

### Step 1: Add the tool to shared hub data

Edit:

- `lib/tools-data.ts`

Add a new card to `toolsHubCards`.

For a tool that is not yet live:

- keep `status: 'planned'`
- set `href: '/tools'` until the route exists

When the page is built:

- change `status` to `live`
- change `href` to the real route

### Step 2: Decide whether the tool needs a shared logic file

If the tool has formulas, scoring, or reusable domain logic:

- keep it in `lib/tools-data.ts` if it is still small
- or split into a new file like:
  - `lib/lead-response-tool.ts`
  - `lib/internal-tool-cost-tool.ts`
  - `lib/seo-roi-tool.ts`

Rule:

- keep page UI separate from calculation logic
- calculation logic should stay pure and testable

### Step 3: Create the route

Create:

- `app/tools/<tool-slug>/page.tsx`

Use the current flagship page as the template:

- hero
- metadata
- schema
- CTA
- FAQ
- calculator or grader component

Examples for next tools:

- `app/tools/lead-response-time-loss-calculator/page.tsx`
- `app/tools/internal-tool-vs-manual-ops-calculator/page.tsx`
- `app/tools/seo-content-velocity-roi-calculator/page.tsx`

### Step 4: Create the UI component

Create:

- `components/tools/<ToolComponentName>.tsx`

Examples:

- `components/tools/LeadResponseLossCalculator.tsx`
- `components/tools/InternalToolCostCalculator.tsx`
- `components/tools/SeoContentVelocityCalculator.tsx`

Pattern:

- client component
- local form state
- live result calculation
- ungated summary
- partial gate form
- unlocked detailed report section

### Step 5: Reuse the same partial-gate pattern

The current gate pattern is valid and should be reused.

Recommended standard for future tools:

- show summary instantly
- gate detailed roadmap or downloadable-style report
- require:
  - email
- optional:
  - company
  - team size
  - one qualifying field related to the tool

Examples:

- lead-response tool:
  - monthly lead volume
  - average deal value
- internal-tool tool:
  - current manual system type
  - team size
- SEO velocity tool:
  - current publishing frequency
  - average content value or lead value

### Step 6: Reuse or extend the API

Current API:

- `app/api/tool-lead/route.ts`

It is already generic enough for multiple tools because it accepts:

- `tag`
- `tool`
- lead fields
- input snapshot
- result snapshot

For each new tool:

- submit a new `tag`
- submit a new `tool` name

Recommended tags:

- `tool_automation_roi`
- `tool_lead_response_loss`
- `tool_internal_tool_cost`
- `tool_seo_velocity_roi`

If later you want CRM integration instead of email-only:

- extend this same route
- or branch by `tag`
- or forward leads to HubSpot, Airtable, Notion, or a database

### Step 7: Add schema and metadata

Every tool page should include:

- `buildPageMetadata(...)`
- breadcrumb schema
- software/application schema
- FAQ schema if the page includes FAQs

Target each tool around a single keyword family.

Examples:

- automation ROI tool:
  - `automation roi calculator`
- lead response tool:
  - `lead response time loss calculator`
  - `speed to lead calculator`
- internal tool cost tool:
  - `internal tool cost calculator`
  - `manual process cost calculator`
- SEO velocity tool:
  - `seo roi calculator`
  - `content velocity calculator`

### Step 8: Update discovery surfaces

For every new live tool, update:

- `lib/tools-data.ts`
- `app/sitemap.ts`

Optionally update:

- `app/resources/page.tsx`
- nav or footer if needed
- relevant blog posts
- service pages with internal links

### Step 9: Add supporting content

Each tool should have supporting blog content around it.

Use this structure:

- one tool page targets the transactional keyword
- several blog posts target the informational cluster

For the next tools, recommended support content:

#### Lead Response Time Loss Calculator

- how much revenue slow lead response costs
- how fast should you respond to inbound leads
- how to reduce speed-to-lead loss with automation

#### Internal Tool vs Manual Ops Cost Calculator

- when spreadsheets become too expensive
- signs your team needs an internal tool
- manual operations vs custom software cost

#### SEO Content Velocity / ROI Calculator

- how to calculate content ROI
- how much SEO content output you need
- when AI-assisted content systems are worth building

## Exact Implementation Guide For The Next 3 Tools

## Next Tool 1: Lead Response Time Loss Calculator

### Goal

Show revenue lost because leads are not contacted quickly enough.

### Best fit service path

- `Autonomous Agents`
- `n8n Workflow Automation`

### Suggested route

- `app/tools/lead-response-time-loss-calculator/page.tsx`

### Suggested component

- `components/tools/LeadResponseLossCalculator.tsx`

### Suggested inputs

- monthly lead volume
- average deal value
- lead-to-close rate
- average current response time
- best-case target response time
- percentage of leads requiring manual routing

### Suggested outputs

- estimated leads lost
- estimated pipeline lost
- estimated monthly revenue leakage
- opportunity score
- best automations to implement first

### Suggested recommendation categories

- instant lead routing
- SMS/email callback workflows
- CRM enrichment and scoring
- AI SDR or voice qualification

### Suggested lead tag

- `tool_lead_response_loss`

## Next Tool 2: Internal Tool vs Manual Ops Cost Calculator

### Goal

Help operators compare the cost of keeping manual workflows versus building a lightweight internal tool.

### Best fit service path

- `Vibe Coding`
- `n8n Workflow Automation`

### Suggested route

- `app/tools/internal-tool-vs-manual-ops-calculator/page.tsx`

### Suggested component

- `components/tools/InternalToolCostCalculator.tsx`

### Suggested inputs

- team size
- hourly cost
- hours spent on manual process weekly
- number of systems touched
- error/rework hours monthly
- process complexity level

### Suggested outputs

- annual manual operations cost
- annual rework cost
- estimated internal tool build range
- payback window
- build-vs-manual recommendation

### Suggested recommendation categories

- workflow orchestration only
- internal dashboard/tool
- custom portal
- hybrid tool plus automation

### Suggested lead tag

- `tool_internal_tool_cost`

## Next Tool 3: SEO Content Velocity / ROI Calculator

### Goal

Show whether a content production system is worth building and what volume is needed to justify it.

### Best fit service path

- `AI-Powered SEO`
- `Vibe Coding`

### Suggested route

- `app/tools/seo-content-velocity-roi-calculator/page.tsx`

### Suggested component

- `components/tools/SeoContentVelocityCalculator.tsx`

### Suggested inputs

- current posts per month
- target posts per month
- average value per qualified lead
- conversion rate from organic traffic
- estimated visits per article
- current content production cost

### Suggested outputs

- projected content output increase
- estimated traffic increase
- estimated lead increase
- estimated ROI window
- whether an automated content engine makes sense

### Suggested recommendation categories

- editorial workflow automation
- internal content ops dashboard
- AI-assisted SEO engine
- publishing pipeline integration

### Suggested lead tag

- `tool_seo_velocity_roi`

## Design Rules For Future Tools

Future tools should match the visual language already used:

- same premium dark/plum/orange styling direction
- same rounded card shapes
- same glass and glow treatment
- same high-contrast CTA style
- same mobile-first layout

Use the current tool as the visual baseline.

Do not make future tools look like generic SaaS calculators.

## Recommended Build Order When You Return

1. verify current work with `npm run lint` and `npm run build`
2. manually test `/tools` and `/tools/automation-roi-calculator`
3. improve any issues found in runtime
4. build `Lead Response Time Loss Calculator`
5. add related blog/supporting content
6. then build `Internal Tool vs Manual Ops Cost Calculator`
7. then build `SEO Content Velocity / ROI Calculator`

## Suggested Prompt For A Future New Chat

Use this in the next chat:

```text
Read docs/tools-hub-handoff-guide.md first.
This file contains the full context for the AIFLOXIUM tools hub work.
Then inspect app/tools/page.tsx, app/tools/automation-roi-calculator/page.tsx, components/tools/AutomationRoiCalculator.tsx, lib/tools-data.ts, and app/api/tool-lead/route.ts.
After that, continue by verifying the current implementation and then build the next planned tool in the roadmap.
```

## Final Reminder

If a future chat has no memory, this document is the starting point.

Do not start from scratch.

Read this file first, inspect the current tool files, verify the existing implementation, and then extend the hub using the same pattern.
