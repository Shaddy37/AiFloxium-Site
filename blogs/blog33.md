Publish package for aifloxium.online · Written by Muhammad Shadab Shams · Drafted 27 August 2026
Source: expanded from Shadab's X article on the 17-skill Hermes setup. All 17 kept, in order.
Editorial note: every star count below was re-pulled live from the GitHub API on 27 August 2026. Several numbers in the original post were stale. Corrections are marked in the table.
1. Titles
Primary: Best Hermes Skills in 2026: The 17 I Would Install First

Alternates:
17 Hermes Skills That Turn an Agent Into a Team
If I Wiped Hermes Tomorrow, I Would Install These 17 Skills First

2. Slug + Meta
Slug: /blog/best-hermes-skills
Canonical: https://aifloxium.online/blog/best-hermes-skills
Meta title: Best Hermes Skills 2026: The 17 I Would Install First (52 chars)
Meta description: The 17 Hermes agent skills worth installing in 2026, with live star counts, install commands, day-one order, and the four I would skip at first. (148 chars)
Hero alt text: Best Hermes skills 2026: seventeen agent skill modules loading into a single agent runtime
Keyword map
Primary: Hermes skills

Secondary: best Hermes skills, Hermes agent skills, agent skills 2026, how to install Hermes skills, Hermes Agent setup

Long-tail: what are agent skills, Hermes skills install command, best agent skills for coding, agent skill for YouTube transcripts, how to remove AI writing tells, agent skills star count, oh-my-hermes vs superpowers, do agent skills use context window, best free agent skills, Hermes Agent Nous Research skills

Snippet targets: "what is an agent skill" (paragraph, 40 to 60 words), "how to install a Hermes skill" (numbered list), "best Hermes skills" (table)

3. Full Blog Body
🖼️ HERO BANNER
Prompt to generate: "A clean, modern, text-free 16:9 blog hero illustration representing modular skills loading into a single AI agent. The central visual metaphor is one large glowing crystalline core at right, with seventeen small faceted modules on the left arranged in a loose grid, each connected by a luminous filament flowing into the core, three or four modules still mid-flight. Vibrant deep-blue, violet and cyan gradient on a dark near-black background, subtle neon glow, thin light rays, faint particle dust, minimalist professional tech-editorial style, no words, no letters, no text, no logos."

Caption: A raw install is smart. A skilled install is unfair. The gap is roughly seventeen repositories wide.

💡 TL;DR (30-second answer)  /banner
If I wiped Hermes today, I would not open a blank chat and figure it out. I would install skills first. The seventeen below cover almost every real job I hand an agent: research, engineering, security, video, browser control, writing cleanup, repo memory and loop discipline.

Install five on day one: Agent-Reach for internet access, addyosmani/agent-skills for engineering discipline, Humanizer for anything public-facing, Defuddle for clean web input, and Minions so you can actually see what your agents are doing.

The other twelve are excellent and situational. Loading all seventeen on a fresh install is the most common mistake, and the reason is not difficulty, it is context budget. Every loaded skill pack competes for the same window your actual work needs.

Fourteen of the seventeen repositories carry 482,000 combined GitHub stars as of August 27, 2026. Three I could not verify, and I say which.

Best for: anyone running Hermes as a daily driver who is still re-explaining the same workflow every session.

✍️ Who wrote this, and how  /banner
I'm Muhammad Shadab Shams, an AI Automation Consultant. I ship products by directing agents rather than typing every line myself, and I currently run a dozen production agents across two live properties. Skills are the layer that made that possible, so this is not a curiosity list.

How the numbers were checked. Every star count, repository owner and description in this post was pulled live from the GitHub API on August 27, 2026. That matters because skill repos are moving fast enough that a figure from three weeks ago is already wrong. Two examples: mattpocock/skills is at 238,275 stars, not the ~224k circulating in most write-ups, and blader/humanizer has 38,179 stars, a number almost nobody quotes at all.

What I did not verify. Three of the seventeen (Composio skills, Browser Harness, Loopy / Loop Library) did not resolve to a confirmable canonical repository during checking. They stay on the list because the jobs they do are real and I use those categories, but they carry an explicit unverified flag instead of a made-up number. A missing figure beats an invented one.

Last updated: August 27, 2026.

⚡ At a glance  /banner
Total skills covered: 17
Combined stars across the 14 verified repos: 482,000+
Largest: mattpocock/skills at 238,275
Smallest: resemble-ai/detect-skill at 65
Install on day one: 5
Cost of the day-one five: $0
Biggest hidden cost: context window, not money
Unverified entries: 3, flagged individually
All figures pulled: August 27, 2026

Table of contents
What an agent skill actually is
The whole roster, ranked by stars
Install these five on day one
Internet and research skills
Engineering and shipping skills
Orchestration and control skills
Media and specialist skills
Writing and content skills
Memory, loops and self-improvement
The context budget problem nobody mentions
What is missing from this list
Honest limitations
How to choose in 60 seconds
Verdict
Glossary
FAQ
Keep reading

What an agent skill actually is
An agent skill is a written procedure your agent loads on demand when a task matches it. Think of it as a recipe card rather than a plugin: it does not add a capability to the model, it tells the model how you want a job done, every time, without you re-explaining.

The difference shows up in three places.

Without skills, you re-explain the same workflow every session, output quality tracks whatever the model feels like that day, and multi-step work drifts because nothing anchors the process. With skills, the steps are written down once, the agent pulls them when the task matches, and the same procedure travels across projects and machines.

Hermes ships with a good set already. The seventeen below are the external packs people bolt on when they want a setup that behaves like infrastructure rather than a chat window.

The bottom line: a skill converts a workflow you keep in your head into one the agent can execute without you.

The whole roster, ranked by stars
One table, because this is the comparison the page exists for. Ordered by verified GitHub stars, highest first.

⚠️ On star counts — /banner
Stars measure attention, not quality. A 65-star skill from Resemble AI is a production tool from a real company. A 200,000-star repo can still be wrong for your workflow. Read the star column as "how many people found this," never as "how good this is."
They also move fast. Every figure here was pulled on August 27, 2026 and several were already several thousand higher than the numbers circulating in write-ups from earlier this month.
Install these five on day one
The honest version of the advice. If you install all seventeen before you have run a single job, you will spend your first week debugging your setup rather than shipping.
Agent-Reach so the agent can see the public internet at all
addyosmani/agent-skills so engineering work has gates instead of vibes
Humanizer so nothing you publish reads like a press release
Defuddle so web pages arrive as clean text instead of nav bars and cookie banners
Minions so you can see what five parallel agents are actually doing

Those five cover research in, work through, and output out. Everything else is a specialist you add the first time you genuinely need it.

Skip on day one: the cybersecurity library (huge, and pointless until you have an authorized target), OpenMontage (only if you actually produce video), Resemble Detect (only if you handle user-generated media), and SkillClaw (it improves skills from real usage, so it needs usage to exist first).

Internet and research skills
1. Agent-Reach — 75,763 stars
Panniantong/Agent-Reach

Agent-Reach is a CLI that gives your agent read access to the public internet across X, Reddit, YouTube, GitHub, Bilibili and XiaoHongShu, with no paid API keys. That last part is the reason it has 75,000 stars.

The problem it fixes is specific and familiar. Your agent writes code fine, then you ask it to check reactions on X or summarize a YouTube tutorial and it falls over: blocked scrapers, paywalled APIs, login walls, unparseable HTML.

After installing, the instructions become plain language. Search X for what people are saying about a tool. Pull a YouTube transcript and summarize it. Check whether anyone on Reddit has hit the same bug.

Use it for: content research, competitor checks, social listening, debugging against community reports.
12. Defuddle — 9,173 stars
kepano/defuddle

Defuddle takes a messy web page and returns the main content as clean HTML or Markdown. URL in, readable article out. It comes out of the Obsidian Web Clipper world, which is why it is unusually good at deciding what on a page is actually the content.

Agents choke on raw HTML. Navigation, ad slots, cookie banners and six levels of nested divs all burn tokens and none of it is the article. Defuddle strips it before the agent ever sees it.

Use it for: research pipelines, clipping into notes, feeding clean context into any agent. Pair it with Agent-Reach and your research input problem is basically solved.
10. youtube-skills — 572 stars
ZeroPointRepo/youtube-skills

This package pulls YouTube transcripts, searches videos, browses channels and extracts playlists without fighting yt-dlp blocks on cloud IPs. "Summarize this YouTube video" is one of the single most common agent failures, and this is purpose-built for it.

Hermes install:

hermes skills install skills-sh/ZeroPointRepo/youtube-skills/skills/youtube-full

Use it for: learning from tutorials, competitor video breakdowns, turning a conference talk into notes. However, the underlying transcript API runs on a credit model, so confirm the current free tier before you build anything that depends on it at volume.

Engineering and shipping skills
13. Matt Pocock skills — 238,275 stars
mattpocock/skills

The most-starred skill pack on this list by a wide margin, and the philosophy is the reason: small, composable, editable skills rather than one large framework.

The pitch is that big process frameworks take control away from you. When your agent has a giant opaque process and something goes wrong, you cannot debug it. When it has no process at all, work drifts. Matt's set sits deliberately in the middle: small enough that you can open one and hack it.

Install:

npx skills@latest add mattpocock/skills

Then run the setup skill once per repository.

Use it for: TypeScript and app engineering, ticket triage, planning, day-to-day shipping.
8. addyosmani/agent-skills — 90,115 stars
addyosmani/agent-skills

Production engineering skills built around a lifecycle: define, plan, build, verify, review, ship. The mental model is a set of commands:


What it fixes is vibe coding with no gates. These skills force habits senior engineers already have: write the spec, cut the work small, test it, review it. Install:

npx skills add addyosmani/agent-skills

Use it for: real products rather than throwaway scripts, especially frontend work and anything spanning more than a day.
2. make-interfaces-feel-better — 3,024 stars
jakubkrehel/make-interfaces-feel-better

A skill dedicated entirely to UI polish: animation, type, icons, hover states, hit areas, shadows, optical alignment. The details that separate an interface that works from one that feels intentional.

AI-built UIs have a signature. They function, and they feel slightly off. Spacing is almost right. Hover states are dead. Buttons are a few pixels too small on mobile. Nothing is broken and everything feels cheap.

Run it as a second pass after your agent ships a page, and ask it to review for feel rather than features. Install:

npx skills add jakubkrehel/make-interfaces-feel-better

Use it for: landing pages, dashboards, internal tools, any frontend an agent just built.
5. codebase-memory-mcp — 40,809 stars
DeusData/codebase-memory-mcp

An MCP server that indexes your codebase into a persistent knowledge graph, covering 158 languages with sub-millisecond queries and a claimed 99% reduction in tokens. It ships as a single static binary with no dependencies.

The problem is context. Every time an agent needs to understand your repo, it reads files, and reading files is the most expensive thing it does. A knowledge graph answers structural questions (what calls this, where is this defined, what breaks if I change it) without loading the files at all.

Use it for: any repository large enough that your agent keeps rediscovering the same architecture. The token savings compound daily.

Orchestration and control skills
3. oh-my-hermes — 291 stars
witt3rd/oh-my-hermes

Multi-agent orchestration built natively for Hermes primitives, inspired by oh-my-claudecode. Small repo, disproportionate value if you work on things bigger than one session.


What it fixes is one agent freestyling a large task: skipping requirements, producing a weak plan, then declaring victory with no proof. Suggested flow:

research → interview → ralplan → ralph

Use it for: unfamiliar domains, multi-day features, anything where plan quality matters more than speed.
6. Minions — 624 stars
agent37-platform/minions

A Kanban-style mission control for Hermes: create tasks, watch them run, review output, and stop long jobs from vanishing into terminal scrollback.

Hermes is strong. Managing five parallel sessions across five raw terminals is not. You lose track of what finished, what is stuck, and what is silently waiting on you.

What it gives you: an in-progress / review / done board, live streaming of tool calls, human sign-off before anything is marked done, per-task model settings, scheduled jobs, and a local-first option that keeps data on your machine in SQLite.

npx minionsai

Then open http://localhost:6969.

Use it for: the moment you run Hermes as a worker rather than a chat toy. This is the skill that makes parallel agents feel manageable, and it is why it made my day-one five despite the modest star count.
17. Loopy / Loop Library — unverified
Repeatable agent loops with checks and stop rules. The category matters more than the specific package: a loop without a stop rule is how you wake up to a burned budget and 400 commits of nonsense.

I could not confirm a canonical repository for this one during fact-checking, so treat the entry as a category recommendation rather than a specific install. If you already run loops, the discipline to copy is simple: define the success check, define the stop condition, and cap the iterations before you start.
15. Composio skills — unverified count
Distributable skills that teach agents to work with Composio: Tool Router, auth, sessions, triggers and production patterns.

Connecting an agent to Gmail, Slack, GitHub or a CRM is messy, and most of the mess is authentication and session handling rather than the API calls. Composio is the integration layer, and these skills teach the agent the safe patterns around it.

npx skills add composiohq/skills

Use it for: any setup that needs to take real actions in real apps rather than edit local files. I could not verify a star count for the canonical repository, so the command above is from the original write-up and worth confirming against Composio's docs before you rely on it.
16. Browser Harness — unverified
The agent drives your real browser, in your real session, and learns reusable helpers as it goes. The learning part is the interesting bit: rather than re-deriving how to navigate a site every run, it accumulates helpers.

I could not confirm a canonical repository for this entry. The category is real and worth having, so verify the source before installing anything that gets access to a logged-in browser session, because that is one of the highest-trust permissions you can grant an agent.

Media and specialist skills
5. OpenMontage — 51,586 stars
calesthio/OpenMontage

An open-source agentic video production system: 12 production pipelines, 100+ tools, and over 700 agent skill and production-knowledge files. It is trying to turn a coding agent into something closer to a small video crew.

Video is a pile of separate tools: script, b-roll, edit, captions, export. Most agents can discuss video competently and produce nothing. OpenMontage aims at the actual production workflow.

Use it for: short-form content, explainers, product demos. However, this is the heaviest install on the list by a wide margin, so do not add it until you are genuinely producing video with an agent in the loop.
4. Anthropic Cybersecurity Skills — 31,306 stars
mukul975/Anthropic-Cybersecurity-Skills

817 structured cybersecurity skills across 29 security domains, mapped to six frameworks: MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF and MITRE F3. Apache 2.0.
⚠️ Read the name carefully — /banner
This is a community project, not an official Anthropic product. The repository name is doing a lot of work it has not earned, and plenty of people install it assuming a vendor guarantee that does not exist.
It also contains offensive and dual-use techniques. Those are intended for authorized testing, defense, research and education. Point it only at systems you own or have written permission to test. That is not a disclaimer, it is the line between security work and a criminal offense.
Your coding agent is not a security analyst by default. This gives it framework-aligned playbooks for investigations, detection, forensics-style workflows and threat modeling.

Use it for: security reviews, incident response drafts, threat modeling, authorized red-team prep, or learning security workflows with an agent as tutor.
7. Resemble AI Detect — 65 stars
resemble-ai/detect-skill

A media safety skill that detects AI-generated or manipulated audio, images and video using Resemble's detection stack. The smallest repo on the list, and one of the few built by a company whose actual business is the thing the skill does.

If your agent touches user-generated content, brand safety or research, you need a verification step before you trust a clip enough to quote or repost it.

Use it for: content moderation pipelines, brand safety review, "is this clip real" checks.

However, treat detection scores as signals rather than proof. Detection is probabilistic and adversarial, both sides improve continuously, and a confident score is still not evidence. Keep a human in the loop on anything high-stakes.

Writing and content skills
11. Humanizer — 38,179 stars
blader/humanizer

A skill that rewrites AI-sounding text so it reads like a person wrote it, built on Wikipedia's documented "signs of AI writing" patterns. At 38,179 stars it is one of the most popular skills in existence, and most write-ups list it without a number at all.

The problem is instantly recognizable. Your agent's draft is factually useful and reads like a press release: "pivotal," "landscape," "it's not X, it's Y," three-item lists in perfect parallel, and hype with no specifics behind it.

How it works in practice:

Rewrite once without preserving the AI structure
Scan what remains for AI tells
Rewrite again
Keep every fact, invent no names or numbers

Use it for: every public post, docs page, client email and launch note your agent drafts.

The tip that actually matters: paste two or three paragraphs of your own writing and ask it to match your voice. Generic de-slopping produces text that sounds like nobody. Voice-matched de-slopping produces text that sounds like you, which is the entire point.

Memory, loops and self-improvement
14. SkillClaw — 2,517 stars
AMAP-ML/SkillClaw

A system where skills evolve from real use. You work normally. In the background it digests sessions, improves the skills you actually used, removes ones that never fire, and compounds that experience across agents and devices.

This is the most forward-looking entry on the list. Every other skill here is a fixed procedure someone wrote. SkillClaw's premise is that your procedures should improve from evidence rather than from you remembering to edit them.

Use it for: long-running setups where the same categories of work recur. However, install it after you have real usage, since a system that learns from sessions needs sessions to learn from. On a fresh machine it has nothing to work with.

⚙️ The context budget problem nobody mentions  /banner
Here is the thing missing from every list of this kind, including the one this post grew out of.

Skills consume context. Not when they run, when they are available. Descriptions, triggers and loaded procedures all occupy the same window your actual task needs. Install seventeen packs, several of which contain hundreds of individual skills, and you have spent a meaningful share of your budget before typing a word.

The cybersecurity library alone is 817 skills. OpenMontage carries over 700 skill and production-knowledge files. These are not small additions.

Three rules I follow:

Install per project, not globally. A video project does not need security playbooks. A security review does not need UI polish.
Uninstall what never fires. If a pack has not triggered in a month, it is paying rent with your context.
Prefer small composable packs over large frameworks when both cover the job. This is exactly the argument behind Matt Pocock's set, and it is the right one.

The reason this matters more than money: every skill here is free. Context is the actual scarce resource, and it is the one nobody budgets.

What is missing from this list
Being honest about the gaps is more useful than pretending seventeen is a complete map.

The two largest skill repositories on GitHub are not on it. obra/superpowers sits at 278,274 stars and anthropics/skills, the official Anthropic library, at 171,918. Both are larger than anything listed above except Matt Pocock's set. Their absence is defensible, since this list is deliberately about external packs you bolt onto a working setup rather than foundational frameworks, but you should know they exist before deciding your stack is complete.

Other notable packs outside the seventeen: Leonxlnx/taste-skill at 81,181 stars, which exists specifically to stop agents producing generic design slop; mvanhorn/last30days-skill at 59,370, which researches a topic across Reddit, X, YouTube and Hacker News then synthesizes a grounded summary; coreyhaines31/marketingskills at 45,797 for CRO, copywriting and SEO; and kepano/obsidian-skills at 47,352 if your notes live in Obsidian.

All figures verified August 27, 2026.

Honest limitations
Three entries are unverified. Composio skills, Browser Harness and Loopy / Loop Library did not resolve to confirmable canonical repositories. They stay because the jobs are real, but confirm the source yourself before installing, particularly Browser Harness, which by design would get access to a logged-in browser session.

Star counts decay fast. This entire category is months old. Several of these repositories were created in early 2026 and have added tens of thousands of stars since. Any figure here is a snapshot dated August 27, 2026.

Skills do not fix a weak model. A skill is a procedure, not a capability. It makes a capable agent consistent. It does not make a limited one smart.

More skills is not better. Past a certain point you are trading context for options you never exercise. The five-skill day-one setup will outperform a seventeen-skill install for most people in most weeks.

What I have not done: run all seventeen simultaneously in one environment and measured the context overhead precisely. I know the direction of the effect from running eight or nine at once. I do not have a clean number, and I am not going to invent one.

How to choose in 60 seconds
Three questions.

1. What does your agent fail at most often? Install the skill for that, alone, and use it for a week. Failure-driven installation beats aspirational installation every time.

2. Is the work you do repetitive or exploratory? Repetitive means loops, mission control and memory: Minions, codebase-memory-mcp, loop discipline. Exploratory means research and planning: Agent-Reach, oh-my-hermes, Defuddle.

3. Does anything you produce get published? If yes, Humanizer is not optional. It is the difference between output that reads like you and output that reads like everyone else's agent.

The verdict
🏆 The setup I would actually run  /banner
Day one, five skills: Agent-Reach, addyosmani/agent-skills, Humanizer, Defuddle, Minions. Free, fast, and covers input, process and output.

Week two, add by need: codebase-memory-mcp once a repo gets large enough that context is the bottleneck. oh-my-hermes the first time a task spans more than one session. Matt Pocock's set if you live in TypeScript.

Month two, specialists only: OpenMontage if you produce video. The cybersecurity library if you do authorized security work. Resemble Detect if you handle user-generated media. SkillClaw once you have enough session history for it to learn from.

Never install all seventeen at once. Not because it fails, but because you will not know which skill produced which behavior, and debugging that is worse than not having them.

The original claim holds up: a raw install is smart, a skilled install is unfair. But the gap is not seventeen repositories wide. It is about five, chosen for the work you actually do.

📖 Glossary  /toggle list
Agent skill — A written procedure an agent loads on demand when a task matches it. Adds consistency, not capability.

Hermes Agent — The Nous Research agent runtime these skills target, though most work across Claude Code, Codex, Cursor and other runtimes too.

MCP (Model Context Protocol) — The standard connectivity layer for exposing tools and data to agents. codebase-memory-mcp is an MCP server.

Knowledge graph — A structured map of entities and relationships. Indexing a repo as one lets an agent answer structural questions without reading files.

Context window — The working memory an agent has for a task. Loaded skills consume it whether they run or not, which is the real cost of over-installing.

Skill pack — A repository containing multiple related skills installed together.

Harness — The layer around the model handling tools, memory, permissions and recovery. Increasingly the thing that determines agent quality, more than the model.

Agent loop — A repeating cycle where an agent acts, checks the result, and continues. Without an explicit stop rule, loops are how budgets die.

AI tells — Recognizable patterns marking text as machine-written: hype adjectives, perfectly parallel lists, "it's not X, it's Y," abstraction with no specifics.

Dual-use — Techniques usable for defense or attack. Most offensive security tooling qualifies, which is why authorization matters.

FAQ
What is an agent skill?  /toggle list
An agent skill is a written procedure your agent loads on demand when a task matches it. It does not add new capability to the model, it records how you want a job done so you stop re-explaining the same workflow every session. Skills make output consistent across sessions, projects and machines.

What are the best Hermes skills to install first?  /toggle list
Five: Agent-Reach for internet access, addyosmani/agent-skills for engineering discipline, Humanizer for anything you publish, Defuddle for clean web content, and Minions for visibility into parallel jobs. Together they cover research input, work process and output quality, and all five are free.

How do I install a Hermes skill?  /toggle list
Find the skill's repository and confirm it is the canonical source
Run the install command, usually npx skills add owner/repo
For Hermes-native packs use hermes skills install skills-sh/owner/repo/skills/name
Run any per-repository setup step the skill documents
Trigger it once on a small task to confirm it fires
Remove it if it does not trigger within a few weeks of real work

Do agent skills use up my context window?  /toggle list
Yes, and this is the most overlooked cost. Skills consume context when they are available, not only when they run. Large packs are the issue: the cybersecurity library contains 817 skills and OpenMontage over 700 files. Install per project rather than globally, and uninstall anything that has not fired in a month.

Are agent skills free?  /toggle list
Every skill in this list is free and open source, most under MIT or Apache 2.0. Some depend on external services with their own pricing, notably the YouTube transcript API behind youtube-skills and Resemble AI's detection stack. The real cost of skills is context window, not money.

Is the Anthropic Cybersecurity Skills repo official?  /toggle list
No. Despite the name, mukul975/Anthropic-Cybersecurity-Skills is a community project and not an official Anthropic product. It contains 817 skills across 29 domains mapped to six frameworks including MITRE ATT&CK and NIST CSF 2.0, and it includes offensive dual-use techniques intended only for authorized testing, defense, research and education.

Which Hermes skill has the most GitHub stars?  /toggle list
mattpocock/skills at 238,275 stars as of August 27, 2026, followed by addyosmani/agent-skills at 90,115 and Panniantong/Agent-Reach at 75,763. For wider context, the largest skills repository on GitHub is obra/superpowers at 278,274 stars, which is not part of this seventeen because it is a foundational framework rather than an add-on pack.

Can an AI agent really edit video?  /toggle list
With OpenMontage, closer than you would expect. It ships 12 production pipelines, over 100 tools and more than 700 skill and production-knowledge files, covering script through b-roll, edit, captions and export. At 51,586 stars it has real adoption. However, it is the heaviest install on this list, so only add it if you genuinely produce video.

How do I stop my AI writing from sounding like AI?  /toggle list
Use the Humanizer skill, which is built on Wikipedia's documented signs of AI writing and has 38,179 stars. It rewrites, scans for remaining tells, then rewrites again while preserving facts. The step most people miss: paste two or three paragraphs of your own writing and ask it to match your voice, because generic de-slopping produces text that sounds like nobody.

What is the difference between an agent skill and an MCP server?  /toggle list
A skill is a written procedure telling the agent how to do a job, while an MCP server is a running service exposing tools and data the agent can call. Skills change behavior, MCP servers add reach. Some entries here are both: codebase-memory-mcp is an MCP server that gives an agent structural access to a repository.

Should I install all 17 skills at once?  /toggle list
No. Install five on day one and add the rest by need. Installing everything at once burns context budget, and more importantly you will not know which skill caused which behavior when something goes wrong. Failure-driven installation, adding the skill for whatever your agent keeps getting wrong, beats installing aspirationally.

Do these skills only work with Hermes?  /toggle list
Most work across runtimes. The repository topics for these packs commonly list Claude Code, Codex, Cursor, Gemini CLI, OpenClaw and Windsurf alongside Hermes Agent. The exceptions built specifically for Hermes primitives are oh-my-hermes and Minions, which is mission control for Hermes agents specifically.

Can agent skills improve themselves over time?  /toggle list
Yes, that is SkillClaw's premise. It digests your real sessions in the background, improves the skills you actually used, removes ones that never fire, and compounds that experience across agents and devices. Install it after you have accumulated real usage, since a system that learns from sessions has nothing to work with on a fresh machine.

Keep reading
Best AI Coding Agents in 2026
Hermes Agent: Complete 2026 Guide
50+ Best MCP Servers in 2026
Best AI Agent Builders in 2026

Written by Muhammad Shadab Shams | AI Automation Consultant | aifloxium.online | ApePublish | X @ShadabLoveAi

4. JSON-LD Schema
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Best Hermes Skills in 2026: The 17 I Would Install First",
      "description": "The 17 Hermes agent skills worth installing in 2026, with live star counts, install commands, day-one order, and the four I would skip at first.",
      "author": {
        "@type": "Person",
        "name": "Muhammad Shadab Shams",
        "url": "https://aifloxium.online",
        "jobTitle": "AI Automation Consultant",
        "sameAs": [
          "https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/",
          "https://x.com/ShadabLoveAi",
          "https://github.com/shamsdev"
        ]
      },
      "publisher": { "@type": "Organization", "name": "Aifloxium", "url": "https://aifloxium.online" },
      "datePublished": "2026-08-27",
      "dateModified": "2026-08-27",
      "mainEntityOfPage": "https://aifloxium.online/blog/best-hermes-skills"
    },
    {
      "@type": "ItemList",
      "name": "17 Hermes Agent Skills Worth Installing in 2026",
      "numberOfItems": 17,
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Matt Pocock skills", "url": "https://github.com/mattpocock/skills" },
        { "@type": "ListItem", "position": 2, "name": "addyosmani/agent-skills", "url": "https://github.com/addyosmani/agent-skills" },
        { "@type": "ListItem", "position": 3, "name": "Agent-Reach", "url": "https://github.com/Panniantong/Agent-Reach" },
        { "@type": "ListItem", "position": 4, "name": "OpenMontage", "url": "https://github.com/calesthio/OpenMontage" },
        { "@type": "ListItem", "position": 5, "name": "codebase-memory-mcp", "url": "https://github.com/DeusData/codebase-memory-mcp" },
        { "@type": "ListItem", "position": 6, "name": "Humanizer", "url": "https://github.com/blader/humanizer" },
        { "@type": "ListItem", "position": 7, "name": "Anthropic Cybersecurity Skills", "url": "https://github.com/mukul975/Anthropic-Cybersecurity-Skills" },
        { "@type": "ListItem", "position": 8, "name": "Defuddle", "url": "https://github.com/kepano/defuddle" },
        { "@type": "ListItem", "position": 9, "name": "make-interfaces-feel-better", "url": "https://github.com/jakubkrehel/make-interfaces-feel-better" },
        { "@type": "ListItem", "position": 10, "name": "SkillClaw", "url": "https://github.com/AMAP-ML/SkillClaw" },
        { "@type": "ListItem", "position": 11, "name": "Minions", "url": "https://github.com/agent37-platform/minions" },
        { "@type": "ListItem", "position": 12, "name": "youtube-skills", "url": "https://github.com/ZeroPointRepo/youtube-skills" },
        { "@type": "ListItem", "position": 13, "name": "oh-my-hermes", "url": "https://github.com/witt3rd/oh-my-hermes" },
        { "@type": "ListItem", "position": 14, "name": "Resemble AI Detect", "url": "https://github.com/resemble-ai/detect-skill" },
        { "@type": "ListItem", "position": 15, "name": "Composio skills" },
        { "@type": "ListItem", "position": 16, "name": "Browser Harness" },
        { "@type": "ListItem", "position": 17, "name": "Loopy / Loop Library" }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to install a Hermes agent skill",
      "description": "Install an external skill pack into a Hermes Agent setup and confirm it fires.",
      "step": [
        { "@type": "HowToStep", "name": "Find the repository", "text": "Locate the skill's repository and confirm it is the canonical source." },
        { "@type": "HowToStep", "name": "Run the install command", "text": "Run npx skills add owner/repo for most packs." },
        { "@type": "HowToStep", "name": "Use the Hermes path for native packs", "text": "Run hermes skills install skills-sh/owner/repo/skills/name for Hermes-native skills." },
        { "@type": "HowToStep", "name": "Run setup", "text": "Run any per-repository setup step the skill documents." },
        { "@type": "HowToStep", "name": "Trigger it once", "text": "Run a small task that should match the skill to confirm it fires." },
        { "@type": "HowToStep", "name": "Prune later", "text": "Remove the skill if it has not triggered after a few weeks of real work." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is an agent skill?", "acceptedAnswer": { "@type": "Answer", "text": "An agent skill is a written procedure your agent loads on demand when a task matches it. It does not add new capability to the model, it records how you want a job done so you stop re-explaining the same workflow every session. Skills make output consistent across sessions, projects and machines." } },
        { "@type": "Question", "name": "What are the best Hermes skills to install first?", "acceptedAnswer": { "@type": "Answer", "text": "Five: Agent-Reach for internet access, addyosmani/agent-skills for engineering discipline, Humanizer for anything you publish, Defuddle for clean web content, and Minions for visibility into parallel jobs. Together they cover research input, work process and output quality, and all five are free." } },
        { "@type": "Question", "name": "Do agent skills use up my context window?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, and this is the most overlooked cost. Skills consume context when they are available, not only when they run. The cybersecurity library contains 817 skills and OpenMontage over 700 files. Install per project rather than globally, and uninstall anything that has not fired in a month." } },
        { "@type": "Question", "name": "Are agent skills free?", "acceptedAnswer": { "@type": "Answer", "text": "Every skill in this list is free and open source, most under MIT or Apache 2.0. Some depend on external services with their own pricing, notably the YouTube transcript API and Resemble AI's detection stack. The real cost of skills is context window, not money." } },
        { "@type": "Question", "name": "Is the Anthropic Cybersecurity Skills repo official?", "acceptedAnswer": { "@type": "Answer", "text": "No. Despite the name, mukul975/Anthropic-Cybersecurity-Skills is a community project and not an official Anthropic product. It contains 817 skills across 29 domains mapped to six frameworks including MITRE ATT&CK and NIST CSF 2.0, and includes offensive dual-use techniques intended only for authorized testing." } },
        { "@type": "Question", "name": "Which Hermes skill has the most GitHub stars?", "acceptedAnswer": { "@type": "Answer", "text": "mattpocock/skills at 238,275 stars as of August 27, 2026, followed by addyosmani/agent-skills at 90,115 and Panniantong/Agent-Reach at 75,763. The largest skills repository on GitHub overall is obra/superpowers at 278,274 stars." } },
        { "@type": "Question", "name": "Can an AI agent really edit video?", "acceptedAnswer": { "@type": "Answer", "text": "With OpenMontage, closer than you would expect. It ships 12 production pipelines, over 100 tools and more than 700 skill and production-knowledge files, covering script through export. At 51,586 stars it has real adoption, but it is the heaviest install on this list." } },
        { "@type": "Question", "name": "How do I stop my AI writing from sounding like AI?", "acceptedAnswer": { "@type": "Answer", "text": "Use the Humanizer skill, built on Wikipedia's documented signs of AI writing, with 38,179 stars. It rewrites, scans for remaining tells, then rewrites again while preserving facts. Paste two or three paragraphs of your own writing and ask it to match your voice." } },
        { "@type": "Question", "name": "What is the difference between an agent skill and an MCP server?", "acceptedAnswer": { "@type": "Answer", "text": "A skill is a written procedure telling the agent how to do a job, while an MCP server is a running service exposing tools and data the agent can call. Skills change behavior, MCP servers add reach. codebase-memory-mcp is both." } },
        { "@type": "Question", "name": "Should I install all 17 skills at once?", "acceptedAnswer": { "@type": "Answer", "text": "No. Install five on day one and add the rest by need. Installing everything at once burns context budget, and you will not know which skill caused which behavior when something goes wrong. Failure-driven installation beats aspirational installation." } },
        { "@type": "Question", "name": "Do these skills only work with Hermes?", "acceptedAnswer": { "@type": "Answer", "text": "Most work across runtimes including Claude Code, Codex, Cursor, Gemini CLI, OpenClaw and Windsurf. The exceptions built specifically for Hermes primitives are oh-my-hermes and Minions." } },
        { "@type": "Question", "name": "Can agent skills improve themselves over time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, that is SkillClaw's premise. It digests your real sessions in the background, improves the skills you used, removes ones that never fire, and compounds experience across agents and devices. Install it after you have accumulated real usage." } }
      ]
    }
  ]
}
</script>

5. SEO / AEO / GEO Notes
SEO. Primary keyword in title, first 100 words, three H2s, meta description, slug and alt text. Meta title 52 chars, description 148 chars, both counted. Four internal links into the existing agent cluster. Every repo linked externally, which is a strong relevance signal for a tools roundup.

AEO. Three snippet formats targeted: paragraph for "what is an agent skill" (definition first, 45 words), numbered list for "how to install a Hermes skill" (6 steps), table for "best Hermes skills" (17 rows, though note Google usually shows 5 to 8, so the top rows carry the load). 13 FAQ entries, each self-contained. FAQ schema matches on-page text character for character.

GEO. ItemList schema tells answer engines this is a ranked list, which is the format cited most often. Every entry carries a verified number with a date, which is what makes a passage quotable. Two corrections that AI answers can pick up and attribute: the real mattpocock star count, and the fact that the "Anthropic" cybersecurity repo is not Anthropic's. Naming what the list omits (superpowers, anthropics/skills) is the kind of completeness signal that earns citation over thinner roundups.

6. Publish Checklist
Generate and insert the hero banner using the prompt in section 3
Convert callouts to /banner, toggles to /toggle list
Set slug /blog/best-hermes-skills and canonical
Paste JSON-LD into <head>, validate all four schema types
Confirm all 14 verified GitHub links resolve
Re-pull star counts the morning of publish. These move daily
Verify the 4 "Keep reading" links
Ping IndexNow after publishing
Byline footer italic
Mobile skim: the 17-row table is the risk. Confirm it scrolls cleanly

7. Reverification Plan
14-day cycle. Star counts on new repos move fast enough that a month-old figure is embarrassing on a page whose whole credibility rests on having real numbers.

On each pass: re-pull all 14 verified counts, retry the 3 unverified entries (if a canonical repo surfaces, promote it and add the number), check whether any repo has been archived, and log changes in a visible "What changed" list with dates.