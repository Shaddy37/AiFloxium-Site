!GPT-5.6 Sol, Terra and Luna — OpenAI's new three-model family

GPT-5.6 Sol, Terra and Luna — OpenAI's new three-model family

<aside>
⚡

**Quick answer:** On **July 9, 2026**, OpenAI made **GPT-5.6** generally available — but for the first time it is *not one model, it is three*. **Sol** is the flagship for frontier reasoning and long-horizon agentic work, **Terra** is the balanced everyday model at roughly half the cost of GPT-5.5, and **Luna** is the fastest, cheapest tier for high-volume jobs. The launch also shipped **GPT-Live** (new real-time voice models) and **ChatGPT Work** (a long-running agent). This guide covers every detail: pricing, benchmarks, the `max` and `ultra` reasoning modes, availability by plan, the government hold that delayed it, and exactly which tier you should use.

</aside>

*Last updated: July 2026 · ~20 min read · By Muhammad Shadab Shams*

---

## What is ChatGPT 5.6 (GPT-5.6)?

**GPT-5.6** is OpenAI's newest generation of large language models, released to the public on **July 9, 2026** after a limited preview that began on **June 26, 2026**. The headline change is structural: instead of shipping a single flagship, OpenAI split GPT-5.6 into **three durable capability tiers** — **Sol**, **Terra**, and **Luna**.

OpenAI describes it neatly: *the number (5.6) identifies the generation, while Sol, Terra, and Luna are durable capability tiers that can each advance on their own cadence.* In other words, expect future "Sol" and "Luna" upgrades that keep the same name but get smarter over time — much like how Anthropic keeps "Opus," "Sonnet," and "Haiku" as persistent tiers.

<aside>
🌗

**The one-line mental model**

- ☀️ **Sol** = the flagship brain (frontier reasoning, coding, agents) — think "Opus."
- 🌍 **Terra** = the daily driver (GPT-5.5-class quality, ~2× cheaper) — think "Sonnet."
- 🌙 **Luna** = the speed-and-scale tier (cheapest, fastest, great as a subagent) — think "Haiku."
</aside>

### GPT-5.6 at a glance

<aside>
📅

**Released**

Preview June 26, 2026 · GA July 9, 2026

</aside>

<aside>
🧩

**Models**

Sol (flagship) · Terra (balanced) · Luna (fast/cheap)

</aside>

<aside>
🪟

**Context window**

Reported **1.5M tokens** (up from 1M in GPT-5.5)

</aside>

<aside>
🧠

**New modes**

`max` reasoning effort + `ultra` multi-agent mode

</aside>

<aside>
🛠️

**For developers**

Programmatic Tool Calling + explicit prompt caching

</aside>

<aside>
🎙️

**Shipped alongside**

GPT-Live voice models + ChatGPT Work agent

</aside>

---

## Meet the three models: Sol, Terra & Luna

### ☀️ Sol — the flagship

Sol is OpenAI's *strongest model yet*, built for **frontier reasoning and long-horizon agentic work**: complex coding, scientific reasoning, cybersecurity, computer use, and design.

**Best for:** hard coding tasks, multi-step agents, research, anything where quality beats cost.

**Pricing:** $5 in / $30 out per 1M tokens — *the exact same rate as GPT-5.5*, so for existing workloads it is effectively a free upgrade.

### 🌍 Terra — the everyday model

Terra is the **balanced tier** with performance competitive with GPT-5.5 while being **2× cheaper**. OpenAI positions it as the model most people will use for everyday work.

**Best for:** general writing, chat, everyday coding, high-quality work on a budget.

**Pricing:** $2.50 in / $15 out per 1M tokens — roughly half of GPT-5.5-class cost.

### 🌙 Luna — the fast, cheap tier

Luna is the **fastest and most affordable** member of the family, bringing strong capability at OpenAI's lowest cost. Analysts compare it to Claude Haiku — a model you rarely prompt directly but lean on as a **subagent** in bigger pipelines.

**Best for:** high-volume jobs, classification, routing, subagents, latency-sensitive apps.

**Pricing:** $1 in / $6 out per 1M tokens.

---

## GPT-5.6 pricing (Sol vs Terra vs Luna)

Here is the complete family at a glance — tier, what it is for, per-token pricing, and the headline coding benchmark. This is the one table you actually need:

| **Model** | **Tier / best for** | **Input ($/1M)** | **Output ($/1M)** | **Terminal-Bench 2.1** |
| --- | --- | --- | --- | --- |
| **GPT-5.6 Sol** | Flagship · ambitious agentic + coding | $5.00 (cached $0.50) | $30.00 | 88.8% (91.9% in `ultra`) |
| **GPT-5.6 Terra** | Balanced · everyday work | $2.50 (cached $0.25) | $15.00 | 82.5% |
| **GPT-5.6 Luna** | Fast · high-volume / subagents | $1.00 (cached $0.10) | $6.00 | 84.3% |
| GPT-5.5 (for reference) | Previous flagship | $5.00 | $30.00 | 88.0% |

<aside>
💡

**Two pricing takeaways that actually matter:**

1. **Sol is a free upgrade.** It holds GPT-5.5's exact $5/$30 rate, so if you are already running GPT-5.5, you get more capability at zero extra cost.
2. **Terra is the value play.** GPT-5.5-class quality at ~half the price makes it the obvious default for most production traffic, with Luna underneath it for the cheap, high-throughput work.
</aside>

### Smarter prompt caching

GPT-5.6 also overhauls caching. You now get **explicit cache breakpoints** (you mark exactly which reusable prompt prefixes get cached) and a **30-minute minimum cache life**. Cache **reads** keep the 90% discount; cache **writes** are billed at **1.25× the uncached input rate**. For repetitive, long-context workloads (RAG, agents, doc pipelines) this can meaningfully cut your bill.

> OpenAI is also bringing **Sol to Cerebras hardware at up to 750 tokens/second** in July 2026 — frontier intelligence at extreme speed, though access is initially limited while capacity scales.
> 

---

## What's genuinely new in GPT-5.6

GPT-5.6 is more than a benchmark bump. Several capabilities are brand new to this generation:

- 🧠 `max` reasoning effort — deeper thinking on demand
    
    GPT-5.6 introduces a new **`max` reasoning effort** setting that gives Sol the most time to reason deeply before answering. It sits above the previous Medium / High / Extra High levels and is aimed at the hardest problems where you are willing to trade latency and tokens for correctness.
    
- 🤝 `ultra` mode — one model, many subagents
    
    The new **`ultra` mode** goes beyond a single agent by spinning up **subagents** that work in parallel and then synthesize their results. It is the same idea that pushes **Sol Ultra to 91.9% on Terminal-Bench 2.1** versus 88.8% for plain Sol — the cleanest public evidence that the multi-agent approach genuinely helps on complex, divisible tasks.
    
- ⚙️ Programmatic Tool Calling (PTC) — the efficiency engine
    
    Instead of passing every tool response back through the model, GPT-5.6 can **write lightweight JavaScript that calls your tools, passes results between calls, and processes intermediate outputs in a hosted runtime.** Large intermediate data stays in the runtime instead of clogging the context window.
    
    The efficiency gains are real: Triple Whale reported building Unity scenes with **63.5% fewer total tokens and 50.1% fewer model turns** using PTC versus direct tool calls, with comparable results. PTC is ideal for bounded, tool-heavy workflows (fetch-many → filter → aggregate → report).
    
- 🧬 Multi-agent [beta] in the Responses API
    
    For developers, **Multi-agent** lets a GPT-5.6 instance coordinate multiple subagents in parallel and synthesize their output — the API-level sibling of `ultra` mode in Codex. It is a beta feature in the Responses API and shines when a task divides cleanly into independent workstreams.
    
- 🎨 A real leap in design and computer use
    
    GPT-5.6 delivers a step change in **design judgment**. With only high-level direction it produces tasteful, responsive interfaces — and its stronger **computer-use** ability lets it *inspect and refine the rendered result*, catching visual and functional issues before handing work back. In one seven-task frontend benchmark (Model ML), GPT-5.6 scored **4.4/5** versus 4.0 for GPT-5.5 and 3.5 for Claude Opus 4.8.
    
- 🪟 1.5 million token context window
    
    GPT-5.6 launches with a reported **1.5M-token context window**, up from the 1M GPT-5.5 shipped with. OpenAI's preview post is lighter on hard spec detail than a full system card, so treat 1.5M as the launch figure and expect exact context/knowledge-cutoff numbers to be nailed down in the GA documentation.
    

---

## GPT-5.6 benchmarks: how good is it, really?

The benchmark story is genuinely interesting — and a little messy. Here is the honest breakdown.

### ✅ Where GPT-5.6 clearly wins

- **Terminal-Bench 2.1 (agentic coding):** Sol Ultra tops the chart at **91.9%**, base Sol at **88.8%**, beating GPT-5.5 (88.0%), Claude Mythos 5 (84.3%), Claude Fable 5 (83.4%), Claude Opus 4.8 (78.9%), and Gemini 3.1 Pro Preview (70.7%). This is Sol's home turf: terminal workflows, tool coordination, real codebase navigation.
- **ARC-AGI-3 (novel reasoning):** Sol at `max` effort averages **7.78%** on the semi-private set and is the **first model ever to win a public ARC-AGI-3 game** (ft09, 87%). ARC Prize noted Sol wins not by executing better, but by *correctly orienting itself in a new environment first* — treating a failed hypothesis as a reason to re-plan rather than thrash.
- **Efficiency & cost:** Artificial Analysis found Sol (max) defines a **new Pareto frontier** of intelligence vs. output tokens (≈15k tokens/task vs. GPT-5.5's 16k) and delivers **Claude-Fable-5-level intelligence at roughly one-third the cost**. Reddit's blunt summary: *"Sol: Opus 4.8 performance at 40% of the cost."*
- **Design & presentations:** highest Presentation Elo of any model on Artificial Analysis; best-in-class frontend generation.

### ⚠️ Where the picture gets murky

<aside>
🔍

**The SWE-Bench Pro controversy.** OpenAI did **not** report SWE-Bench Verified, and on **SWE-Bench Pro** Sol scored **64.6%** versus Claude Fable 5's **80%** — a 15.4-point gap. OpenAI's response was to publish a separate analysis arguing that **~30% of SWE-Bench Pro tasks are broken**, retracting its earlier recommendation to use the benchmark. Whether you read that as legitimate benchmark hygiene or convenient goalpost-moving, the takeaway is the same: **run your own evals on your own tasks.**

</aside>

<aside>
📊

**The missing GDPval number.** OpenAI spent heavily building **GDPval**, a respected benchmark of autonomous ability on economically valuable tasks — and then *didn't report it for GPT-5.6*. Wharton's Ethan Mollick publicly flagged the omission. Independent testing (Artificial Analysis) later showed Sol (max) scoring *similarly to Claude Fable 5* on GDPval-AA v2, so it is competitive — but the silence on OpenAI's own headline metric was noticed.

</aside>

<aside>
🌀

**Hallucinations ticked up.** On the AA-Omniscience index, Sol (max) is only a *minor* improvement over GPT-5.5 — a small accuracy uplift coupled with a **higher hallucination rate.** For factual, high-stakes work, keep verification in the loop.

</aside>

---

## GPT-Live: real-time voice that listens and speaks at once

Alongside the models, OpenAI shipped **GPT-Live** (July 8, 2026) — a new family of voice models and a long-overdue upgrade to ChatGPT's voice mode (previously codenamed *GPT-Bidi*).

<aside>
🗣️

**Why it matters:** GPT-Live can **listen and speak simultaneously in real time** (full-duplex). That is the key unlock for **live translation** and natural, interruptible conversation — you no longer have to wait for the model to finish before you talk. It can also **offload harder tasks to GPT-5.5** mid-conversation, so a quick chat stays snappy while a complex request still gets serious reasoning.

</aside>

Early testers with preview access called it *"very impressive,"* especially the fluid turn-taking that makes back-and-forth feel human rather than walkie-talkie.

---

## ChatGPT Work: the long-running agent

July 9 also introduced **ChatGPT Work**, an agent built for *longer, more involved* tasks rather than single answers.

What it does:

- **Researches and analyzes** information, and **works across connected apps and files.**
- **Produces finished deliverables:** documents, spreadsheets, presentations, reports, and even **Sites.**
- Lets you **follow its progress, answer its questions, change direction, and approve important actions** as it works.
- Runs **Scheduled Tasks** that fire once, repeat on a schedule/trigger, or **monitor for changes.**

<aside>
🏢

**Rollout:** Work is available on paid plans **except Free and Go.** Pro, Pro Lite, Enterprise, and Edu get it first; Plus and Business follow over the coming days. Enterprise and Edu workspaces get a **two-week preview** that is off by default — admins can opt out before it auto-enables at the end of the preview. Available in all supported regions.

</aside>

---

## Who can use GPT-5.6? Availability by plan

This is the part that confuses people, so here it is clearly. In **standard ChatGPT conversations**, only **Sol** is selectable — Terra and Luna are not exposed there (they live in Work, Codex, and the API). And **GPT-5.5 Instant remains the default model.**

### 💬 In ChatGPT (standard chat)

- **Free & Go:** ❌ No GPT-5.6 access; logged-out users cannot use Sol.
- **Plus:** ✅ Sol at Medium & High effort (no Extra High / Pro).
- **Pro:** ✅ Sol at Medium, High, Extra High, and Pro.
- **Business / Enterprise:** ✅ Full Sol access; admins can restrict which models members use.

### 🧑‍💻 In Work, Codex & the API

- **ChatGPT Work:** Sol, Terra, and Luna for Plus, Pro, Business, Enterprise.
- **Codex:** Terra for Free and Go; Sol + Terra + Luna for Plus, Pro, Business, Enterprise.
- **OpenAI API:** all three — Sol, Terra, and Luna.

<aside>
🌍

**"I can't find it yet!"** The GA rollout started globally on July 9 and expanded **gradually over ~24 hours**, so availability varied by region and app (a lot of European users hit this on day one). If Sol is not in your model picker yet, it is almost certainly a staged-rollout delay, not a plan problem.

</aside>

---

## The government hold: why GPT-5.6 was delayed

GPT-5.6's launch was unusually political. When OpenAI first previewed the models on **June 26**, it **limited access to a "small group of trusted partners"** at the request of the **U.S. government** — specifically to let the Department of Commerce's **Center for AI Standards and Innovation** test the models for national-security risks (notably enhanced **cyberattack** capabilities). Rival Anthropic had just disabled two of its latest models under a similar export-control directive.

The hold lifted after what Axios described as a **"green light" from the administration**; the White House later clarified that OpenAI **did not actually need approval** to ship. OpenAI publicly pushed back on the precedent:

> *"We don't believe this kind of government access process should become the long-term default. It keeps the best tools from users, developers, enterprises, cyber defenders, and global partners who need them."*
> 

<aside>
🛡️

**The safety framing was deliberate.** Rather than bury safety in a system card, OpenAI led with it — layered safeguards, 700K+ A100-equivalent GPU-hours of automated red-teaming, and stronger cyber safeguards. Community observers read this as a response to a hotter political climate around frontier releases.

</aside>

---

## GPT-5.6 vs Claude vs Gemini: how it stacks up

- 🥊 GPT-5.6 Sol vs Claude Opus 4.8 & Fable 5
    - **Coding agents (Terminal-Bench 2.1):** Sol wins decisively — 88.8% (91.9% ultra) vs Opus 4.8 at 78.9%.
    - **SWE-Bench Pro:** Claude Fable 5 still leads at 80% vs Sol's 64.6% (with OpenAI disputing the benchmark's validity).
    - **Hard reasoning (Humanity's Last Exam, no tools):** Claude Opus 4.8 leads at 49.8%; OpenAI didn't publish an HLE number for Sol.
    - **Cost:** Sol is $5/$30 vs Opus 4.8 at $5/$25, so Opus is ~1.2× cheaper on output — but Sol delivers Fable-5-class intelligence at roughly a third of Fable's cost.
    - **Verdict:** Sol is the agentic-coding and efficiency leader; Claude still edges ahead on certain deep-reasoning and long-context evals.
- 🥊 GPT-5.6 Sol vs Gemini 3.1 Pro
    - On **Terminal-Bench 2.1**, Sol (88.8%) is well ahead of Gemini 3.1 Pro Preview (70.7%).
    - Gemini remains the stronger pick for **multimodal reasoning** — mixing images, audio, video, spreadsheets, and documents — and for low-latency Flash-class workloads.
    - **Verdict:** choose Sol for agentic coding and reasoning; choose Gemini when the task is heavily multimodal or document-analysis-driven.

<aside>
🧪

**The honest meta-takeaway:** at the frontier, GPT-5.6 Sol, Claude Fable 5 / Opus 4.8, and Gemini 3.1 Pro are close enough that **published benchmarks won't decide it for you.** Differences show up in *your* specific tasks — code style, instruction-following, long-context behavior. Test all three on real work before committing.

</aside>

---

## Which GPT-5.6 tier should you use?

<aside>
☀️

**Use Sol when** the task is hard and quality matters more than cost: complex refactors, multi-step agents, scientific/analytical reasoning, design work, or anything you'd assign to a senior engineer. Turn on `max` for the toughest problems and `ultra` when the work splits into parallel subtasks.

</aside>

<aside>
🌍

**Use Terra when** you want great results at a sane price — the default for most everyday chat, writing, and production traffic. GPT-5.5-class quality at half the cost makes it the workhorse.

</aside>

<aside>
🌙

**Use Luna when** volume and latency dominate: classification, routing, extraction, simple transforms, and **subagents** inside a larger Sol/Terra workflow. It is the cheapest way to move a lot of tokens.

</aside>

**A simple routing pattern for builders:** let **Sol** plan and orchestrate, hand parallelizable grunt-work to **Luna** subagents, and use **Terra** for the medium-difficulty steps in between. That mix maximizes quality per dollar.

---

## How to access GPT-5.6 today

1. **In ChatGPT:** open the model picker in a Plus/Pro/Business/Enterprise account and select **GPT-5.6 Sol** (choose the reasoning effort your plan allows). If you don't see it, wait for the staged rollout to reach your region.
2. **In ChatGPT Work:** launch a Work task to use Sol, Terra, or Luna on long-running, multi-step jobs with connected apps and files.
3. **In Codex:** Terra is available even on Free/Go; paid plans unlock all three plus `ultra` mode.
4. **Via the API:** call `sol`, `terra`, or `luna` directly, and opt into **Programmatic Tool Calling**, **Multi-agent (beta)**, and **explicit prompt caching** for efficiency.

---

## What the community is saying

- **"They're finally good at naming."** Analysts welcomed durable tier names (Sol/Terra/Luna) over confusing version soup — Terra as the daily driver, Sol as the flagship, Luna as the Haiku-style subagent.
- **"The GPT-5.5 gap is unusually large."** Redditors noted the jump from GPT-5.5 to Sol on Terminal-Bench is bigger than a normal point release.
- **"Opus performance at 40% of the cost."** The efficiency-per-dollar story resonated hardest with developers.
- **Skeptics** pushed back on cherry-picked benchmarks (the missing GDPval and SWE-Bench numbers), and some felt three tiers muddied the story. As always, the truth is in your own testing.

---

## Limitations & things to watch

- **Selective benchmarks:** no published SWE-Bench Verified or GDPval from OpenAI; lean on independent evals (Artificial Analysis, ARC Prize) and your own tests.
- **Higher hallucination rate** than you might expect from a flagship — verify factual output.
- **Less token-efficient than GPT-5.5 in some modes** despite Pareto gains; `max` and `ultra` cost more tokens and latency.
- **Staged, region-dependent rollout** means access has been uneven.
- **Spec ambiguity:** the 1.5M context window and knowledge cutoff are launch figures pending full GA documentation.

---

## Frequently asked questions

- Is ChatGPT 5.6 free?
    
    No. GPT-5.6 Sol is **not** available on Free or Go plans (or to logged-out users). You need at least a **Plus** subscription for Sol in standard chat, while Terra and Luna are reachable through ChatGPT Work, Codex, and the API. Codex does offer **Terra** to Free and Go users.
    
- What do Sol, Terra, and Luna mean?
    
    They are **capability tiers**, not versions. **Sol** (sun) is the flagship, **Terra** (earth) is the balanced everyday model, and **Luna** (moon) is the fast, low-cost tier. The "5.6" is the generation; the names persist across future upgrades.
    
- How much does the GPT-5.6 API cost?
    
    Per 1M tokens: **Sol** $5 in / $30 out, **Terra** $2.50 in / $15 out, **Luna** $1 in / $6 out. Cached input reads get a 90% discount (Sol $0.50, Terra $0.25, Luna $0.10), while cache writes cost 1.25× the uncached input rate.
    
- What is the difference between `max` and `ultra` mode?
    
    **`max`** is a reasoning-effort level that gives a single model more time to think deeply. **`ultra`** is a multi-agent mode where the model spawns parallel subagents and synthesizes their results — which is why Sol Ultra (91.9%) beats plain Sol (88.8%) on Terminal-Bench 2.1.
    
- Is GPT-5.6 better than Claude Opus 4.8 or Gemini 3.1 Pro?
    
    For **agentic coding**, yes — Sol leads Terminal-Bench 2.1 clearly. For **deep no-tools reasoning** and some long-context tasks, Claude still competes or leads (e.g., Humanity's Last Exam). **Gemini** remains stronger for multimodal work. At the frontier they're close; test on your own tasks.
    
- What is GPT-Live?
    
    GPT-Live is OpenAI's new **real-time voice model family** (launched July 8, 2026) that can **listen and speak simultaneously**, enabling natural interruptions and live translation. It upgrades ChatGPT voice mode and can offload harder requests to GPT-5.5.
    
- What is ChatGPT Work?
    
    ChatGPT Work is a **long-running agent** that researches, works across your connected apps and files, and produces finished documents, spreadsheets, presentations, reports, and Sites — with progress you can steer and Scheduled Tasks that run on a schedule or trigger.
    
- Why was GPT-5.6 delayed?
    
    OpenAI voluntarily limited the June 26 preview to "trusted partners" at the **U.S. government's request** so the Department of Commerce could review national-security (cyber) risks. The public launch went ahead on July 9 after the hold lifted.
    

---

## The bottom line

GPT-5.6 is OpenAI's most strategically important release in a while — not because any single number is jaw-dropping, but because the **three-tier structure finally gives builders the right tool at the right price.** Sol is a genuine agentic-coding and reasoning leader (and a free upgrade over GPT-5.5), Terra is the value default, and Luna makes high-volume AI cheap. Add **GPT-Live** and **ChatGPT Work**, and July 9, 2026 becomes a platform moment, not just a model drop.

The caveats are real — selective benchmarks, a higher hallucination rate, and a messy rollout — but the direction is clear: **more capability, more efficiency, more choice.** Pick your tier, test it on your own work, and route aggressively.

---

<aside>
🔗

**Keep reading on Aifloxium:**

- Best AI Coding Agents 2026 → aifloxium.online/blog/best-ai-coding-agents-2026
- Claude Opus 4.8 Review → aifloxium.online/blog/claude-opus-4-8-review
- Best Open-Source LLMs 2026 → aifloxium.online/blog/best-open-source-llms-2026
- Best AI Voice Generators 2026 → aifloxium.online/blog/best-ai-voice-generators-2026
- Gemini 3.5 Flash Review → aifloxium.online/blog/gemini-3-5-flash-review
</aside>

*Written by Muhammad Shadab Shams | AI Automation Consultant | aifloxium.online | ApePublish | X @ShadabLoveAi*

---

### Structured data (JSON-LD) — paste into the page `<head>` on your CMS

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ChatGPT 5.6 Explained: GPT-5.6 Sol, Terra & Luna — The Complete Deep-Dive Guide (2026)",
  "description": "A complete deep-dive into OpenAI GPT-5.6 (Sol, Terra, Luna): pricing, benchmarks, the max and ultra reasoning modes, GPT-Live voice, ChatGPT Work, availability by plan, and which tier to use.",
  "image": "https://aifloxium.online/images/chatgpt-5-6-sol-terra-luna.png",
  "author": {
    "@type": "Person",
    "name": "Muhammad Shadab Shams",
    "url": "https://aifloxium.online",
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/",
      "https://x.com/ShadabLoveAi",
      "https://github.com/shamsdev"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Aifloxium",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aifloxium.online/logo.png"
    }
  },
  "datePublished": "2026-07-10",
  "dateModified": "2026-07-10",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://aifloxium.online/blog/chatgpt-5-6-sol-terra-luna"
  }
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is ChatGPT 5.6 free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. GPT-5.6 Sol is not available on Free or Go plans or to logged-out users. You need at least a Plus subscription for Sol in standard chat; Terra and Luna are available via ChatGPT Work, Codex, and the API. Codex offers Terra to Free and Go users."
      }
    },
    {
      "@type": "Question",
      "name": "What do Sol, Terra, and Luna mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are capability tiers, not versions. Sol is the flagship, Terra is the balanced everyday model, and Luna is the fast, low-cost tier. The 5.6 is the generation and the names persist across future upgrades."
      }
    },
    {
      "@type": "Question",
      "name": "How much does the GPT-5.6 API cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per 1M tokens: Sol is $5 input / $30 output, Terra is $2.50 / $15, and Luna is $1 / $6. Cached input reads get a 90% discount and cache writes cost 1.25x the uncached input rate."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between max and ultra mode?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "max is a reasoning-effort level that gives a single model more time to think. ultra is a multi-agent mode that spawns parallel subagents and synthesizes their results, which is why Sol Ultra scores higher than plain Sol on Terminal-Bench 2.1."
      }
    },
    {
      "@type": "Question",
      "name": "Is GPT-5.6 better than Claude Opus 4.8 or Gemini 3.1 Pro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For agentic coding, GPT-5.6 Sol leads Terminal-Bench 2.1. For deep no-tools reasoning and some long-context tasks, Claude competes or leads, and Gemini is stronger for multimodal work. They are close at the frontier, so test on your own tasks."
      }
    },
    {
      "@type": "Question",
      "name": "What is GPT-Live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GPT-Live is OpenAI's new real-time voice model family launched July 8, 2026 that can listen and speak simultaneously, enabling natural interruptions and live translation. It upgrades ChatGPT voice mode and can offload harder requests to GPT-5.5."
      }
    },
    {
      "@type": "Question",
      "name": "What is ChatGPT Work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ChatGPT Work is a long-running agent that researches, works across connected apps and files, and produces finished documents, spreadsheets, presentations, reports, and Sites, with steerable progress and Scheduled Tasks."
      }
    }
  ]
}
</script>
```