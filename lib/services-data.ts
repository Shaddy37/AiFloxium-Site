

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
    tagline: "Save 20+ hours weekly with self-hosted, secure operational pipelines.",
    description:
      "We engineer custom n8n automation pipelines on your own VPS to eliminate manual copy-pasting, sync disconnected CRMs, and route data securely. Zero recurring transaction fees. Projects start at $2,000.",
    heroIcon: "Workflow",
    color: "zinc",
    whatItIs:
      "n8n is the ultimate open-source workflow automation engine. Unlike Zapier or Make, which charge aggressive transaction-based fees and process sensitive data on third-party clouds, we host n8n directly on your own infrastructure. This guarantees complete data privacy, zero recurring scaling fees, and deep code-level control using custom JavaScript/Python nodes.",
    howItWorks: [
      {
        step: "01",
        title: "Process Mapping",
        body: "We audit your manual workflows, tracing data silos and measuring exactly where your team wastes time on repetitive 'robot work'.",
      },
      {
        step: "02",
        title: "System Architecture",
        body: "We design a deterministic workflow map, detailing all API nodes, webhook triggers, conditional branches, and error monitoring loops.",
      },
      {
        step: "03",
        title: "Self-Hosted Setup",
        body: "We provision your private VPS (AWS or DigitalOcean), deploy n8n via Docker, and configure secure API integrations (HubSpot, Slack, Notion, Airtable, Sheets).",
      },
      {
        step: "04",
        title: "Edge-Case Hardening",
        body: "We stress-test the pipeline with mock data, setting up automatic retry logic and Slack alert triggers for any connection drops.",
      },
      {
        step: "05",
        title: "Live Handoff & Support",
        body: "We deploy the systems live, providing full documentation, a client dashboard to track execution logs, and ongoing workflow maintenance.",
      },
    ],
    useCases: [
      "Inbound lead qualification and routing: Instant HubSpot sync and Slack alerts in under 5 minutes.",
      "Document & Invoice processing: AI OCR extracting data from PDF invoices with 85% processing speedup.",
      "E-commerce order fulfillment: Automated shipping alerts, customer emails, and inventory updates.",
      "Google Maps scraping: Data enrichment via API and direct CRM logging generating 500+ leads weekly.",
      "Employee onboarding: Automated HR account creation and software provisioning, reducing setup time by 75%.",
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
        a: "A single-path pipeline takes 2 to 5 days. Complex systems with multi-branch logic, custom database reads, and advanced error handling take 1 to 3 weeks.",
      },
      {
        q: "What are the hosting costs for self-hosted n8n?",
        a: "Typically just $5 to $20/month for a VPS (DigitalOcean/AWS), replacing Zapier subscription bills that scale to hundreds or thousands of dollars monthly.",
      },
      {
        q: "How do we handle API breaks or changes?",
        a: "Every workflow is built with structured error handling. If an external API fails, the system automatically retries the task and sends a detailed Slack notification with error details so we can fix it immediately.",
      },
      {
        q: "Is my customer data fully secure?",
        a: "Yes. Because n8n runs on your private VPS, your customer data never passes through AIFLOXIUM's or any third-party SaaS cloud servers, making it 100% compliant with GDPR/HIPAA.",
      },
    ],
    ctaHeading: "Ready to eliminate 20+ hours of manual work?",
    ctaSubtext: "Book a free 30-minute process audit. We will trace your bottlenecks and map out 3 workflows we can automate immediately. Starting at $2,000.",
  },
  {
    slug: "autonomous-voice-agents",
    title: "Autonomous Voice Agents",
    tagline: "Qualify, book, and answer inbound leads 24/7 with under 500ms voice response latency.",
    description:
      "We deploy custom human-like voice agents using Vapi & Retell AI. Integrated directly with your CRM and calendar, our agents answer inbound calls and follow up with leads in real-time. Starting at $2,500.",
    heroIcon: "Phone",
    color: "zinc",
    whatItIs:
      "Voice AI is no longer a clunky IVR. We build conversational agents that understand context, handle interruptions naturally, and respond in under 500ms using realistic ElevenLabs/Deepgram voices. Connected directly to your Twilio telephony and CRM, they act as an autonomous front office that never sleeps.",
    howItWorks: [
      {
        step: "01",
        title: "Persona & Prompt Engineering",
        body: "We write detailed system prompts, define custom knowledge bases, and program the logical pathways for lead qualification.",
      },
      {
        step: "02",
        title: "Voice & Latency Optimization",
        body: "We configure Vapi or Retell, choosing the lowest-latency LLMs and tuning speech-to-text models to process human inputs under 500ms.",
      },
      {
        step: "03",
        title: "Tool & CRM Sync",
        body: "The agent is given 'hands'—the ability to book meetings in your calendar, update CRM records, or trigger Slack alerts in real-time based on call outcomes.",
      },
      {
        step: "04",
        title: "Simulated Stress Testing",
        body: "We run the agent through 100+ simulated calls with variations in accents, background noise, and sudden human interruptions.",
      },
      {
        step: "05",
        title: "Live Launch & Analytics",
        body: "We route your phone lines to the Twilio number. You get a custom dashboard to listen to recordings, view transcriptions, and track booking rates.",
      },
    ],
    useCases: [
      "24/7 inbound qualification: Answering off-hours calls and booking meetings directly on your sales team's calendar.",
      "Outbound lead nurturing: Calling back web form signups in under 5 minutes to prevent lead leakage.",
      "High-volume customer support: Instantly resolving common inquiries, reducing support ticket volume by 70%.",
      "Appointment reminders: Dynamic calls checking confirmation status and updating calendar slots.",
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
        q: "Does the voice agent really sound human?",
        a: "Yes. By using advanced ElevenLabs voice models and tuning parameters like stability and similarity, our agents sound natural and converse with human inflection.",
      },
      {
        q: "Can callers interrupt the agent mid-sentence?",
        a: "Yes. We configure full-duplex conversational logic, allowing the agent to listen continuously. If the caller speaks, the agent stops talking instantly to listen.",
      },
      {
        q: "What are the runtime costs per call?",
        a: "Infrastructure fees (telephony, speech-to-text, LLM, text-to-speech) typically range from $0.15 to $0.30 per minute, which is 90% cheaper than hiring call center staff.",
      },
    ],
    ctaHeading: "Stop letting off-hours leads go cold.",
    ctaSubtext: "Schedule a demo call to experience our low-latency voice agent live. Complete setup starts at $2,500.",
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding (Claude)",
    tagline: "Build custom web applications and internal tools in under 14 days.",
    description:
      "We combine Next.js, Supabase, and AI-assisted development (Claude Code & Cursor) to build bespoke internal dashboards and client portals at 10x traditional development speed. Projects start at $1,500.",
    heroIcon: "Code2",
    color: "zinc",
    whatItIs:
      "Vibe Coding uses frontier AI models as development force multipliers under strict engineering supervision. We do not ship raw AI code; a senior developer structures the architecture, reviews every line, and builds custom Postgres integrations. This eliminates months of boilerplate work, delivering premium web applications in days.",
    howItWorks: [
      {
        step: "01",
        title: "Technical Scoping",
        body: "We map user stories, database relations, and external APIs, creating a clear technical blueprint before writing code.",
      },
      {
        step: "02",
        title: "Database & Auth Setup",
        body: "We provision a secure Supabase project, architecting relational tables, row-level security (RLS) policies, and user authentication.",
      },
      {
        step: "03",
        title: "Rapid Scaffold & Build",
        body: "We build UI components and API routes in Next.js using Claude Code to generate test suites and component boilerplate in real-time.",
      },
      {
        step: "04",
        title: "Custom Logic & Review",
        body: "We manually code advanced business logic, perform security sweeps, and ensure proper state management and type safety.",
      },
      {
        step: "05",
        title: "Vercel Deployment",
        body: "We deploy the application to Vercel, transfer complete repository ownership to you, and set up continuous integration pipelines.",
      },
    ],
    useCases: [
      "Custom internal portals: Replacing fragile spreadsheets with structured database tables and role-based access.",
      "Client-facing dashboards: Allowing clients to view project progress, submit files, and pay invoices online.",
      "Micro-SaaS products: Shipped in under 2 weeks to validate market demand before spending tens of thousands.",
      "Custom CRM systems: Built around your specific lead scoring and follow-up logic.",
    ],
    techStack: [
      { name: "Next.js 16 / React 19", role: "Frontend framework" },
      { name: "TypeScript", role: "Type safety" },
      { name: "Tailwind CSS v4", role: "Styling" },
      { name: "Supabase / PostgreSQL", role: "Database & auth" },
      { name: "Claude Code / Cursor", role: "AI-assisted development" },
      { name: "Vercel / AWS", role: "Deployment" },
    ],
    faqs: [
      {
        q: "Is AI-assisted code secure and maintainable?",
        a: "Absolutely. We treat AI as an autocomplete on steroids. The system architecture, security rules, and database constraints are designed and audited by senior engineers.",
      },
      {
        q: "How fast can you ship a functional MVP?",
        a: "Most MVPs and internal dashboards are delivered in 7 to 14 days, fully styled with Tailwind CSS and integrated with your database.",
      },
      {
        q: "Do you build native mobile apps?",
        a: "We focus on responsive web applications built in Next.js. They look and work beautifully on mobile browsers, but we do not ship to the Apple App Store or Google Play Store.",
      },
      {
        q: "Who owns the intellectual property?",
        a: "You do. We transfer complete GitHub repository ownership and database credentials to your team immediately upon project sign-off.",
      },
    ],
    ctaHeading: "Have an internal tool idea you need shipped?",
    ctaSubtext: "Tell us your requirements and we will provide a fixed-price scope in 24 hours. Custom tools start at $1,500.",
  },
  {
    slug: "seo-optimization",
    title: "AI-Powered SEO",
    tagline: "Scale organic lead generation with technical SEO and custom content syndication.",
    description:
      "We build custom AI content engines that generate optimized, on-brand articles, coupled with technical audits to rank for high-intent keywords. Projects start at $1,800.",
    heroIcon: "Search",
    color: "zinc",
    whatItIs:
      "Organic traffic is the highest-ROI growth channel. We merge technical speed optimizations (Next.js 16, Core Web Vitals) with automated content pipelines. We configure custom LLMs to write in your exact brand voice, auto-insert internal links, and sync drafts to your CMS, scaling traffic without agency pricing.",
    howItWorks: [
      {
        step: "01",
        title: "Technical & Speed Audit",
        body: "We analyze your Core Web Vitals, schema markup, and site structure, optimizing page speeds to under 1 second.",
      },
      {
        step: "02",
        title: "Competitor Intelligence",
        body: "We extract search query data and competitor keywords via API to locate high-intent, low-difficulty search terms.",
      },
      {
        step: "03",
        title: "Custom Content Engine",
        body: "We build an automated n8n pipeline that generates drafts, inserts contextual links, optimizes meta tags, and pushes drafts to your CMS.",
      },
      {
        step: "04",
        title: "Internal Linking Graph",
        body: "Our engine automatically scans existing pages and inserts backlinks to new content, establishing topical authority.",
      },
      {
        step: "05",
        title: "Rank & Traffic Monitoring",
        body: "We connect Google Search Console and build automated weekly dashboards tracking keyword movements and organic conversions.",
      },
    ],
    useCases: [
      "Content scaling: Growing from 2 blog posts to 50+ optimized articles monthly in your exact voice.",
      "E-commerce SEO: Automating meta descriptions and product copy updates for thousands of SKUs.",
      "Local lead generation: Launching localized programmatic landing pages for multi-location services.",
      "Niche authority building: Scaling organic research pages to establish topical expertise quickly.",
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
        q: "Does Google penalize AI-generated content?",
        a: "No. Google rewards helpful, high-quality, structured information, regardless of how it is written. We use AI for drafting and research, then apply human editorial checks.",
      },
      {
        q: "How long until I see results?",
        a: "Technical fixes can show impact in weeks. Content scaling typically takes 3 to 6 months to fully mature and dominate search rankings.",
      },
      {
        q: "Can the AI match our specific brand voice?",
        a: "Yes. We feed your existing high-performing content into the pipeline as few-shot training examples, training the model to replicate your tone, structure, and vocabulary.",
      },
    ],
    ctaHeading: "Ready to dominate organic search?",
    ctaSubtext: "Get a free competitor audit comparing your search footprint to your top 3 rivals. Systems start at $1,800.",
  },
  {
    slug: "autonomous-agents",
    title: "Autonomous Agents",
    tagline: "Deploy secure, multi-agent AI systems that automate complex operational logic.",
    description:
      "We build autonomous agent networks powered by Claude & GPT-4 to handle B2B sales research, automated inbox management, and document parsing with human-in-the-loop controls. Projects start at $3,000.",
    heroIcon: "Brain",
    color: "zinc",
    whatItIs:
      "Unlike basic automations, autonomous agents are given goals and tools (web browser, email, vector database) to execute multi-step reasoning. We build custom agent architectures with vector memory (RAG) for factual accuracy, securing them on your VPS with clear operational guardrails.",
    howItWorks: [
      {
        step: "01",
        title: "Goal Mapping & Safety Limits",
        body: "We define the agent's objective, list permitted APIs, and map out strict human authorization checkpoints.",
      },
      {
        step: "02",
        title: "Vector Memory Setup",
        body: "We compile your internal files, FAQs, and data sheets into a vector database (Supabase/Pinecone) to enable hallucination-free retrieval.",
      },
      {
        step: "03",
        title: "Tool & API Provisioning",
        body: "We equip the agent with tools: Google Search, email access, document parsers, and browser automation via Playwright.",
      },
      {
        step: "04",
        title: "Multi-Agent Scaffolding",
        body: "We orchestrate specialist sub-agents (e.g., a research agent feeding a draft to a writing agent) to handle complex, multi-stage workflows.",
      },
      {
        step: "05",
        title: "Execution Logs & Admin UI",
        body: "We deploy a custom admin portal, letting you monitor agent decisions in real-time, view traces, and approve critical actions.",
      },
    ],
    useCases: [
      "Outbound lead research: Scraping sites, qualifying leads against ICP criteria, and drafting custom outreach emails.",
      "AI customer support: Routing tickets, pulling data from databases, and drafting detailed answers for review.",
      "Market intelligence monitoring: Scanning 50+ industry news sources daily and compiling action summaries.",
      "Document classification: Processing PDFs, extracting metadata, and routing files based on logic.",
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
        q: "How do you prevent AI hallucinations?",
        a: "We use RAG (Retrieval-Augmented Generation) so the LLM only answers using verified context. We also set low temperature parameters and restrict output schemas.",
      },
      {
        q: "Can the agent send emails directly to customers?",
        a: "Only if permitted. We default to 'draft mode' or include human approval buttons in Slack/email before any message goes live.",
      },
      {
        q: "What LLMs do you use to power the agents?",
        a: "We primarily use Anthropic's Claude 3.5 Sonnet for reasoning tasks and OpenAI's GPT-4o for speed-sensitive API tool calling.",
      },
      {
        q: "How do I stay in control?",
        a: "Every agent system we build includes an admin dashboard, full execution logging, and manual override controls. You always have the final say.",
      },
    ],
    ctaHeading: "Ready to deploy your autonomous agent?",
    ctaSubtext: "Book a process audit call. We will trace your highest-friction workflows and design a custom agent blueprint. Starting at $3,000.",
  },
  {
    slug: "agency-scaling-partner",
    title: "Agency Scaling Partner",
    tagline: "Your white-label AI engineering team. We build the systems, you sell them.",
    description:
      "We partner with B2B marketing, operations, and lead gen agencies as an invisible technical backend. Offer premium custom automations and AI systems under your brand. Retainers start at $5,000/month.",
    heroIcon: "TrendingUp",
    color: "zinc",
    whatItIs:
      "Delivering custom API integrations and voice AI is expensive and hard to productize without in-house engineers. We act as your white-label technical partner, scoping, building, and supporting automation workflows under your agency's brand. You protect margins and expand account value without payroll bloat.",
    howItWorks: [
      {
        step: "01",
        title: "Partnership Onboarding",
        body: "We align on your service packages, pricing, communication style, and client delivery expectations.",
      },
      {
        step: "02",
        title: "Scoping & Proposals",
        body: "You forward client problems. We write technical specs, estimate hours, and give you white-label assets to pitch.",
      },
      {
        step: "03",
        title: "Brand-Matched Development",
        body: "We build the self-hosted n8n pipelines, voice agents, or Next.js portals under your brand's assets.",
      },
      {
        step: "04",
        title: "Client Handoff Support",
        body: "We join client calls representing your technical team, handle custom onboarding, and provide documentation.",
      },
      {
        step: "05",
        title: "Retainer Maintenance",
        body: "We monitor deployed workflows, patch API changes, and support clients under a fixed monthly retainer.",
      },
    ],
    useCases: [
      "Lead generation agencies adding 24/7 Voice AI lead booking to client retainers.",
      "Operations consultants selling self-hosted n8n automation systems without hiring devs.",
      "Marketing agencies offering automated CRM data sync and lead nurturing pipelines.",
      "SaaS companies needing specialized custom integration services for high-value enterprise accounts.",
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
        a: "No. We operate entirely behind the scenes. All documentation, code comments, dashboards, and walkthrough videos carry your agency's branding.",
      },
      {
        q: "How do white-label retainers work?",
        a: "We agree on a monthly budget of engineering hours or fixed-price tiers. You sell the service at your own markup, capturing a healthy margin. Retainers start at $5,000/month.",
      },
      {
        q: "Do you work with agencies outside the UK and Pakistan?",
        a: "Yes. We work remotely with agency partners globally across Europe, North America, and the Middle East.",
      },
      {
        q: "What if a project is outside your capabilities?",
        a: "We'll tell you upfront. We'd rather decline a project than underdeliver. We only take on work we can execute to a high standard.",
      },
    ],
    ctaHeading: "Scale your agency's technical deliverables.",
    ctaSubtext: "Book a partner call to discuss how we can act as your white-label AI engineering backend. Retainers start at $5,000/month.",
  },
];
