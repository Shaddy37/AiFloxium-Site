

export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroIcon: string;
  color: string; // accent identifier for subtle theming
  whatItIs: string;
  howItWorks: {
    step: string;
    title: string;
    body: string;
  }[];
  useCases: string[];
  techStack: { name: string; role: string }[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaSubtext: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    tagline: "Turn your manual bottlenecks into 24/7 autonomous pipelines.",
    description:
      "We architect end-to-end automation workflows using n8n — connecting your CRMs, databases, communication tools, and APIs into a single intelligent operating layer that never sleeps. Projects start at $2,000.",
    heroIcon: "Workflow",
    color: "zinc",
    whatItIs:
      "n8n is a powerful open-source workflow automation platform. Unlike Zapier or Make, it gives us full code-level control — custom logic, loops, conditionals, and direct database queries — making it the clear choice for serious automation. We self-host it on your infrastructure so your data never leaves your control.",
    howItWorks: [
      {
        step: "01",
        title: "Process Audit",
        body: "We map every manual task in your team's workflow, identify repetitive triggers, and pinpoint where human time is being wasted on tasks a machine can handle perfectly.",
      },
      {
        step: "02",
        title: "Architecture Design",
        body: "We design a node-based workflow schema — specifying every input trigger, transformation step, conditional branch, and output action before writing a single line of logic.",
      },
      {
        step: "03",
        title: "Build & Connect",
        body: "We build the workflow inside n8n, integrating your tools (Slack, Notion, Airtable, Google Sheets, HubSpot, custom APIs) using REST, GraphQL, or webhooks.",
      },
      {
        step: "04",
        title: "Test & Deploy",
        body: "Every path through the workflow is tested against real data edge cases. We deploy to your self-hosted or cloud instance with error alerting and automatic retry logic.",
      },
      {
        step: "05",
        title: "Monitor & Iterate",
        body: "Post-launch we monitor execution logs, catch failures before they impact you, and continuously optimise logic as your processes evolve.",
      },
    ],
    useCases: [
      "Automated lead qualification → CRM entry → Slack notification",
      "Invoice scanning → data extraction → accounting software sync",
      "E-commerce order → fulfilment team alert → customer email → analytics update",
      "Social media monitoring → sentiment analysis → response queue",
      "Internal ticket triage → department routing → SLA timer start",
      "Scheduled competitor price scraping → spreadsheet update → team summary",
    ],
    techStack: [
      { name: "n8n", role: "Workflow engine" },
      { name: "Node.js", role: "Custom function nodes" },
      { name: "PostgreSQL / MySQL", role: "Data persistence" },
      { name: "REST & GraphQL APIs", role: "Third-party integrations" },
      { name: "Webhooks", role: "Real-time event triggers" },
      { name: "Docker / VPS", role: "Self-hosted deployment" },
    ],
    faqs: [
      {
        q: "How long does a typical n8n workflow take to build?",
        a: "Simple single-path workflows take 2–5 days. Complex multi-branch systems with error handling and external API integrations typically take 1–3 weeks.",
      },
      {
        q: "Do I need to understand n8n myself?",
        a: "Not at all. We handle the entire build. We'll give you a visual overview, but you never need to touch the system unless you want to.",
      },
      {
        q: "What if an API I use isn't supported?",
        a: "n8n has 400+ native integrations. For anything else, we build custom HTTP request nodes or write JavaScript function nodes — virtually any REST API can be connected.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. We self-host n8n on your own infrastructure. Your data never passes through third-party servers.",
      },
    ],
    ctaHeading: "Ready to automate your operations?",
    ctaSubtext: "Book a free 30-minute process audit and we'll identify the top 3 workflows we can automate for you immediately. Starting at $2,000.",
  },
  {
    slug: "autonomous-voice-agents",
    title: "Autonomous Voice Agents",
    tagline: "Voice AI that sounds human, thinks fast, and never sleeps.",
    description:
      "We deploy high-fidelity voice agents using Vapi and Retell AI to automate inbound qualification, outbound sales, and 24/7 customer support with zero latency. Starting at $2,500.",
    heroIcon: "Phone",
    color: "zinc",
    whatItIs:
      "Voice AI has evolved. We build agents that handle complex human conversations with natural inflection and under 500ms latency. Using Vapi and Retell, we connect your AI reasoning engine to the global phone network, allowing your business to scale communication without scaling headcount.",
    howItWorks: [
      {
        step: "01",
        title: "Persona & Logic Design",
        body: "We define the agent's voice, personality, and the decision tree it follows during calls to ensure professional and helpful interactions.",
      },
      {
        step: "02",
        title: "Vapi/Retell Integration",
        body: "We configure the core voice infrastructure, selecting the best LLM for the task and tuning the Text-to-Speech (TTS) engine for maximum realism.",
      },
      {
        step: "03",
        title: "Tool & CRM Sync",
        body: "The agent is given 'hands' — the ability to book meetings in your calendar, update CRM records, or trigger Slack alerts in real-time based on call outcomes.",
      },
      {
        step: "04",
        title: "Stress Testing",
        body: "We run the agent through hundreds of simulated calls to handle interruptions, accents, and complex inquiries perfectly before going live.",
      },
      {
        step: "05",
        title: "Live Deployment",
        body: "Your agent goes live. We provide a dashboard to monitor call recordings, transcripts, and conversion metrics.",
      },
    ],
    useCases: [
      "24/7 Inbound lead qualification and scheduling",
      "Outbound cold calling for SaaS & Agencies",
      "Customer support for high-volume inquiries",
      "Automated appointment reminders and follow-ups",
      "Emergency service dispatching & routing",
    ],
    techStack: [
      { name: "Vapi / Retell AI", role: "Voice orchestration" },
      { name: "Claude 3.5 Sonnet", role: "Reasoning engine" },
      { name: "Deepgram / ElevenLabs", role: "TTS & STT" },
      { name: "n8n", role: "Post-call automation" },
      { name: "Twilio", role: "Telephony infrastructure" },
    ],
    faqs: [
      {
        q: "Does it sound like a robot?",
        a: "No. With modern TTS engines like ElevenLabs, most callers cannot distinguish our agents from a high-quality human operator.",
      },
      {
        q: "Can it handle interruptions?",
        a: "Yes. Our agents use full-duplex technology, meaning they listen and speak simultaneously, responding naturally if a human cuts them off.",
      },
      {
        q: "How much does it cost per call?",
        a: "Typical costs range from $0.15 to $0.30 per minute depending on the LLM and voice model used.",
      },
    ],
    ctaHeading: "Ready to automate your phones?",
    ctaSubtext: "Schedule a demo and we'll let you talk to one of our live agents yourself. Architectures start at $2,500.",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding (Claude)",
    tagline: "Ship production-grade software in days, not months.",
    description:
      "We use Claude Code and frontier LLMs to build bespoke internal tools, micro-SaaS products, and web applications at a speed that traditional development simply cannot match. Starting at $1,500.",
    heroIcon: "Code2",
    color: "zinc",
    whatItIs:
      "Vibe Coding is a development methodology where experienced engineers use AI coding assistants (Claude, GPT-4, Cursor) as force multipliers — not replacements. We still architect, review, and ship everything. The AI accelerates the repetitive scaffolding, test generation, and boilerplate, so our engineers focus purely on the hard problems. The result: you get senior-level software at startup speed.",
    howItWorks: [
      {
        step: "01",
        title: "Spec & Scope",
        body: "We reverse-engineer exactly what you need: user flows, data models, integrations, and edge cases. We produce a tight technical spec before writing anything.",
      },
      {
        step: "02",
        title: "Scaffold & Architect",
        body: "We establish the tech stack, project structure, authentication, database schema, and API layer — the foundation that won't need to be rebuilt later.",
      },
      {
        step: "03",
        title: "Rapid Feature Build",
        body: "Using Claude Code and Cursor, we construct features in parallel with AI-assisted pattern generation. Every output is reviewed and tested by a human engineer.",
      },
      {
        step: "04",
        title: "QA & Polish",
        body: "Automated tests, manual edge-case testing, and UI polish. We don't ship MVPs that look like MVPs.",
      },
      {
        step: "05",
        title: "Deploy & Hand Off",
        body: "We deploy to your preferred cloud (Vercel, AWS, VPS). Full documentation and optional maintenance retainers available.",
      },
    ],
    useCases: [
      "Internal dashboards replacing spreadsheets",
      "Client-facing portals with role-based access",
      "Micro-SaaS tools for niche B2B workflows",
      "AI-powered internal search / knowledge base",
      "Custom CRM or project management tools",
      "Automation control panels with visual workflow editors",
    ],
    techStack: [
      { name: "Next.js 15 / React 19", role: "Frontend framework" },
      { name: "TypeScript", role: "Type safety" },
      { name: "Tailwind CSS v4", role: "Styling" },
      { name: "Supabase / PostgreSQL", role: "Database & auth" },
      { name: "Claude Code / Cursor", role: "AI-assisted development" },
      { name: "Vercel / AWS", role: "Deployment" },
    ],
    faqs: [
      {
        q: "Is vibe-coded software lower quality?",
        a: "No — when done correctly, the opposite is true. AI accelerates the commodity work. Our engineers focus on architecture and quality. Every line ships through human review.",
      },
      {
        q: "What's the minimum viable project size?",
        a: "We typically start from a £1,500+ project ($2,000 approx). Smaller tools may be better served by our automation tier.",
      },
      {
        q: "Do you build mobile apps?",
        a: "We primarily build web applications (which work great on mobile). Native iOS/Android is outside our current scope.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Full source code ownership is transferred on project completion.",
      },
    ],
    ctaHeading: "Have a tool idea you want built?",
    ctaSubtext: "Tell us what you need. We'll scope it, price it, and can usually start within the week. Million Dollar sites start at $1,500.",
  },
  {
    slug: "seo-optimization",
    title: "AI-Powered SEO",
    tagline: "Dominate search rankings with automated content and technical precision.",
    description:
      "We combine deep technical SEO with AI-driven content systems to scale your organic traffic without the high cost of traditional agencies. Starting at $1,800.",
    heroIcon: "Search",
    color: "zinc",
    whatItIs:
      "Modern SEO requires both technical excellence and high-volume, high-quality content. We build custom AI engines that research keywords, generate optimized articles in your brand voice, and monitor your technical health (speed, structure, metadata) to ensure you rank #1 for the terms that drive revenue.",
    howItWorks: [
      {
        step: "01",
        title: "Technical Audit",
        body: "We analyze your site's core vitals, schema markup, and crawlability, fixing the foundational issues that hold back your rankings.",
      },
      {
        step: "02",
        title: "Keyword Intelligence",
        body: "We use AI to identify high-intent, low-competition keywords that your competitors are missing, mapping out a full content strategy.",
      },
      {
        step: "03",
        title: "Automated Content Engine",
        body: "We build a custom pipeline that generates SEO-optimized, human-sounding content at scale, including internal linking and meta-data automation.",
      },
      {
        step: "04",
        title: "Backlink Strategy",
        body: "We identify and automate outreach to high-authority domains in your niche to build the credibility Google demands.",
      },
      {
        step: "05",
        title: "Monitoring & Reporting",
        body: "Real-time tracking of rankings and traffic with automated weekly reports that actually show your ROI.",
      },
    ],
    useCases: [
      "Scaling blog content from 1 to 50 posts per month",
      "Automating product description optimization for E-commerce",
      "Real-time technical SEO monitoring and auto-fixing",
      "Niche authority site building from scratch",
      "Local SEO automation for multi-location businesses",
    ],
    techStack: [
      { name: "Next.js 16", role: "Fastest SEO framework" },
      { name: "Claude 3.5 / GPT-4o", role: "Content generation" },
      { name: "Ahrefs / Semrush API", role: "Keyword data" },
      { name: "n8n", role: "Content pipelines" },
      { name: "Google Search Console", role: "Performance monitoring" },
    ],
    faqs: [
      {
        q: "Is AI content safe for Google?",
        a: "Yes. Google's official stance is that high-quality content is rewarded regardless of how it's produced. We ensure all content is helpful, factual, and correctly structured.",
      },
      {
        q: "How long until I see results?",
        a: "Technical fixes can show impact in weeks. Content scaling typically takes 3-6 months to fully mature and dominate search rankings.",
      },
      {
        q: "Do you handle local SEO?",
        a: "Yes. We can automate Google Business Profile updates, citation building, and localized landing pages.",
      },
    ],
    ctaHeading: "Ready to rank higher?",
    ctaSubtext: "Get a free SEO audit of your top 3 competitors and see exactly how we can beat them. Engines start at $1,800.",
  },
  {
    slug: "autonomous-agents",
    title: "Autonomous Agents",
    tagline: "Deploy AI agents that work, decide, and act — 24/7.",
    description:
      "We build multi-agent systems powered by Claude, GPT-4, and custom tool-use frameworks that autonomously handle research, outreach, data processing, and decision-making at scale.",
    heroIcon: "Brain",
    color: "zinc",
    whatItIs:
      "An autonomous agent is an AI system given a goal, a set of tools (search, email, database, browser), and the ability to reason step-by-step to achieve that goal without a human in the loop. We architect these systems using LangChain, custom Python orchestrators, or n8n AI nodes — then harden them with guardrails, logging, and human-override mechanisms.",
    howItWorks: [
      {
        step: "01",
        title: "Goal & Constraint Definition",
        body: "We define exactly what the agent needs to achieve, what tools it's allowed to use, what it must never do, and how decisions should be escalated to humans.",
      },
      {
        step: "02",
        title: "Tool & Memory Design",
        body: "We build the agent's toolbox: web search, email sending, database read/write, API calls, browser automation, and vector memory (RAG) for long-term context.",
      },
      {
        step: "03",
        title: "Prompt Architecture",
        body: "System prompts, task instructions, few-shot examples, and output parsers are engineered to produce consistent, reliable agent behaviour — not hallucinations.",
      },
      {
        step: "04",
        title: "Orchestration & Safety",
        body: "We deploy multi-agent pipelines where specialist sub-agents hand off to each other. Human checkpoints are built in for irreversible actions.",
      },
      {
        step: "05",
        title: "Monitoring & Tuning",
        body: "Full execution traces are logged. We monitor for drift, failures, and unexpected behaviour, and tune prompts and logic post-launch.",
      },
    ],
    useCases: [
      "Autonomous sales research agent (finds, qualifies, enriches leads)",
      "AI customer support agent with CRM read/write access",
      "Competitive intelligence agent monitoring 50+ sources daily",
      "Document processing agent (extracts, classifies, routes files)",
      "Social media agent scheduling and posting across platforms",
      "Multi-agent QA pipeline testing your own software autonomously",
    ],
    techStack: [
      { name: "Claude 3.5 / GPT-4o", role: "LLM reasoning engine" },
      { name: "LangChain / LangGraph", role: "Agent orchestration" },
      { name: "Python", role: "Custom tool building" },
      { name: "Pinecone / pgvector", role: "Vector memory (RAG)" },
      { name: "Playwright / Puppeteer", role: "Browser automation" },
      { name: "n8n", role: "Trigger & workflow glue" },
    ],
    faqs: [
      {
        q: "Can agents make mistakes?",
        a: "All LLM-based systems can produce errors. We mitigate this with structured output parsing, tool-use guardrails, and mandatory human-in-the-loop checkpoints for any consequential action.",
      },
      {
        q: "How much does an autonomous agent cost to run?",
        a: "Ongoing API costs (OpenAI/Anthropic) are billed separately and vary by usage. We optimise prompts and caching to keep these as low as possible.",
      },
      {
        q: "Can agents integrate with our existing software?",
        a: "Yes — we build custom tools that connect to any system with an API. If it's accessible via HTTP, we can give an agent access to it.",
      },
      {
        q: "How do I stay in control?",
        a: "Every agent system we build includes an admin dashboard, full execution logging, and manual override controls. You always have the final say.",
      },
    ],
    ctaHeading: "Ready to deploy your first AI agent?",
    ctaSubtext: "Let's define the goal, the tools, and the guardrails — then build the agent that does the work.",
  },
  {
    slug: "agency-scaling-partner",
    title: "Agency Scaling Partner",
    tagline: "Your AI technical backend. We build the systems, you close the clients.",
    description:
      "We embed as the automation and AI engineering layer behind digital agencies, consultancies, and service businesses — building the technical infrastructure that lets you punch above your weight without hiring a full engineering team. Starting at $5,000.",
    heroIcon: "TrendingUp",
    color: "zinc",
    whatItIs:
      "Most agencies win on strategy, creativity, and relationships — but lose time and margin trying to deliver technical automation work they can't fully productise. We operate as your invisible technical partner: scoping, building, and maintaining AI automation systems under your brand, so you can offer enterprise-grade AI deliverables to your clients without the overhead.",
    howItWorks: [
      {
        step: "01",
        title: "Partnership Onboarding",
        body: "We align on your client profiles, typical project types, pricing structure, and communication style. We become an extension of your team, not a vendor.",
      },
      {
        step: "02",
        title: "Client Brief Translation",
        body: "You forward client briefs to us. We scope the technical requirements, produce a delivery timeline, and give you everything you need to confidently sell it.",
      },
      {
        step: "03",
        title: "White-Label Delivery",
        body: "We build under your brand. All deliverables — documentation, dashboards, handoff calls — carry your agency's name.",
      },
      {
        step: "04",
        title: "Client Handoff Support",
        body: "We join onboarding calls (as your 'technical team'), produce client-facing documentation, and handle post-launch support.",
      },
      {
        step: "05",
        title: "Ongoing Retainer",
        body: "For clients that retain your agency post-launch, we provide the ongoing automation maintenance and development under a predictable monthly rate.",
      },
    ],
    useCases: [
      "Marketing agency offering AI-powered lead nurture to clients",
      "Consultancy needing technical delivery on AI transformation projects",
      "SaaS company wanting to offer automation as a value-add service",
      "Operations consultancy building client workflow automations",
      "Recruiting agency automating candidate sourcing and outreach",
      "PR agency monitoring brand mentions and auto-generating responses",
    ],
    techStack: [
      { name: "n8n", role: "Core automation engine" },
      { name: "Claude / GPT-4o", role: "AI capability layer" },
      { name: "Next.js", role: "Client dashboards" },
      { name: "Notion / Airtable", role: "Project & client management" },
      { name: "Slack / Teams", role: "Partnership communication" },
      { name: "Loom", role: "Async technical walkthroughs" },
    ],
    faqs: [
      {
        q: "Will my clients know you're involved?",
        a: "Only if you want them to. We operate completely white-label by default. All communications, docs, and deliverables carry your agency's branding.",
      },
      {
        q: "What's the minimum engagement?",
        a: "We typically work on a project basis or a monthly retainer. Retainers start from a defined scope of hours per month, negotiated per partnership. Starting at $5,000.",
      },
      {
        q: "Do you work with agencies outside the UK and Pakistan?",
        a: "Yes — we work remotely with agency partners globally across EU, North America, and the Middle East.",
      },
      {
        q: "What if a project is outside your capabilities?",
        a: "We'll tell you upfront. We'd rather decline a project than underdeliver. We only take on work we can execute to a high standard.",
      },
    ],
    ctaHeading: "Want to scale your agency without scaling headcount?",
    ctaSubtext: "Let's discuss a white-label partnership structure that works for your agency model.",
  },
];

