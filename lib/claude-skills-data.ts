export type ClaudeSkill = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: "content" | "automation" | "data" | "agent";
  challenge: string;
  solution: string;
  results: {
    metric1: string;
    metric2?: string;
    metric3?: string;
  };
  features?: string[];
  clientTestimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  timeline?: string;
  industry?: string;
  techStack: string[];
  featured?: boolean;
};

export const claudeSkills: ClaudeSkill[] = [
  {
    id: "1",
    slug: "linkedin-post-creator",
    title: "LinkedIn Post Creator",
    description: "Generate high-authority LinkedIn & X posts with AI-optimized messaging and visual content",
    category: "content",
    industry: "Creator Economy, B2B SaaS",
    timeline: "4 weeks",
    challenge: "Entrepreneurs and creators spend 2-3 hours daily crafting, editing, and posting LinkedIn content while maintaining authentic voice. Inconsistent posting schedules lead to lost engagement and reduced network growth.",
    solution: "An AI-powered skill that generates compelling, niche-specific LinkedIn and X posts with built-in hooks, CTA optimization, and multi-platform formatting. Analyzes your voice, uses proven copywriting frameworks, and delivers ready-to-post content.",
    results: {
      metric1: "3-5x more engagement per post",
      metric2: "Save 10+ hours weekly on content creation",
      metric3: "Consistent daily posting without burnout",
    },
    features: [
      "Multi-platform post generation (LinkedIn + X)",
      "Voice & tone consistency across all content",
      "Trending hashtag and hook optimization",
      "CTA optimization for max engagement",
      "Automatic scheduling and posting",
      "Performance analytics integration",
    ],
    clientTestimonial: {
      quote: "I went from 2k to 15k followers in 3 months without spending more time on content. This is a game-changer for creators.",
      author: "Sarah Chen",
      role: "Content Creator & Founder",
    },
    techStack: ["Claude API", "n8n", "LinkedIn API", "X API"],
    featured: true,
  },
  {
    id: "2",
    slug: "instagram-content-creator",
    description: "Auto-generate Instagram posts, carousels, Reels, and Stories with trending hooks and aesthetics",
    title: "Instagram Content Creator",
    category: "content",
    industry: "Creator Economy, Social Media",
    timeline: "3 weeks",
    challenge: "Visual content creation takes hours of planning, designing, and editing. Keeping up with trends while maintaining brand consistency is nearly impossible for solo creators.",
    solution: "AI skill that generates entire content calendars with post ideas, carousel scripts, Reel concepts, and Stories. Includes trending hooks, hashtag strategies, and design briefs ready for your designer.",
    results: {
      metric1: "1 month of content in 1 hour",
      metric2: "Higher engagement from trend-aligned posts",
      metric3: "Consistent posting schedule maintained",
    },
    features: [
      "Content calendar generation (30-90 days)",
      "Carousel script writing with visual briefs",
      "Reel & Short-form video concepts",
      "Story templates and hook sequences",
      "Trend analysis and niche-specific ideation",
      "Hashtag research and caption optimization",
    ],
    clientTestimonial: {
      quote: "Instead of spending 20 hours a week on content ideation, I now spend 30 minutes. My engagement doubled within 6 weeks.",
      author: "Marcus Thompson",
      role: "Instagram Growth Consultant",
    },
    techStack: ["Claude API", "n8n", "Instagram API", "Canva API"],
    featured: true,
  },
  {
    id: "3",
    slug: "linkedin-automation",
    title: "LinkedIn Automation",
    description: "Automate LinkedIn outreach, connection requests, message sequences, and profile optimization",
    category: "automation",
    industry: "B2B Sales, Recruitment",
    timeline: "5 weeks",
    challenge: "Manual LinkedIn prospecting is time-intensive. Sending personalized outreach to hundreds of prospects daily is impossible, limiting lead generation and network growth.",
    solution: "Intelligent LinkedIn automation that handles targeted connection requests, personalized message sequences, and follow-up reminders. Uses smart targeting to find ideal prospects and maintains authentic engagement patterns.",
    results: {
      metric1: "500+ qualified connections monthly",
      metric2: "80% higher response rates with personalization",
      metric3: "5 hours saved weekly on outreach",
    },
    features: [
      "Smart prospect targeting by industry & title",
      "Personalized connection requests at scale",
      "Automated message sequences with delays",
      "Profile optimization recommendations",
      "Follow-up automation based on engagement",
      "Response tracking and CRM sync",
    ],
    clientTestimonial: {
      quote: "We generated 200+ qualified leads in the first month without sending a single message manually. The ROI was immediate.",
      author: "Jason Brooks",
      role: "VP of Sales, B2B SaaS",
    },
    techStack: ["Claude API", "n8n", "LinkedIn API", "Puppeteer"],
    featured: true,
  },
  {
    id: "4",
    slug: "twitter-automation",
    title: "Twitter/X Automation",
    description: "Automate X/Twitter engagement, thread creation, and audience growth",
    category: "automation",
    industry: "Thought Leadership, Growth Marketing",
    timeline: "4 weeks",
    challenge: "Growing on X requires constant tweeting, replying, and engagement. Most creators lack time to maintain an active presence and capitalize on viral opportunities.",
    solution: "Automated X/Twitter skill that schedules threads, finds engagement opportunities, auto-replies with context-aware messages, and identifies trending topics in your niche for real-time posting.",
    results: {
      metric1: "2-3x faster follower growth",
      metric2: "Real-time engagement on trending topics",
      metric3: "20+ hours saved weekly on engagement",
    },
    features: [
      "Intelligent thread generation and scheduling",
      "Real-time trend monitoring in your niche",
      "Context-aware auto-replies and engagement",
      "Competitor monitoring and benchmarking",
      "Engagement analytics and optimization",
      "Viral topic identification and fast posting",
    ],
    clientTestimonial: {
      quote: "My engagement tripled while I was sleeping. The automation does exactly what I would do manually—but 100x faster.",
      author: "David Park",
      role: "Founder & Tech Influencer",
    },
    techStack: ["Claude API", "n8n", "X API", "Puppeteer"],
    featured: true,
  },
  {
    id: "5",
    slug: "x-twitter-scraper",
    title: "X Data Platform & Lead Scraper",
    description: "Mine X/Twitter data for lead generation, market research, and trend analysis",
    category: "data",
    industry: "Sales Intelligence, Market Research",
    timeline: "6 weeks",
    challenge: "Finding high-intent leads on X is manual and unreliable. Identifying trending topics and competitor intelligence requires constant monitoring.",
    solution: "Intelligent X data scraper that identifies high-intent leads based on keywords, extracts verified emails, analyzes competitor followers, and surfaces trending conversations in your market.",
    results: {
      metric1: "500-1000 qualified leads weekly",
      metric2: "Competitive intelligence automated",
      metric3: "Trend insights delivered daily",
    },
    features: [
      "High-intent lead identification and scraping",
      "Verified email extraction from profiles",
      "Competitor follower analysis",
      "Keyword-based conversation monitoring",
      "Daily trend reports and market intelligence",
      "CRM integration and lead scoring",
    ],
    clientTestimonial: {
      quote: "We went from buying expensive lead lists to generating 1000s of qualified leads weekly for 10% of the cost. This is our new competitive advantage.",
      author: "Elena Rodriguez",
      role: "Sales Director, Enterprise SaaS",
    },
    techStack: ["Claude API", "n8n", "X API", "Puppeteer", "Email Finder APIs"],
    featured: true,
  },
];

export const claudeSkillsCategories = [
  { id: "content", name: "Content Creation", count: 2 },
  { id: "automation", name: "Automation", count: 2 },
  { id: "data", name: "Data & Intelligence", count: 1 },
];
