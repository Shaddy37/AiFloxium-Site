export const hermesConfigBlueprint = {
  persona: {
    name: "Orpheus",
    role: "Autonomous Deep Research & Analysis Agent",
    version: "2026.1",
    modelConfiguration: {
      planner: {
        model: "anthropic/claude-3-5-sonnet:exacto",
        temperature: 0.2,
        maxTokens: 4000,
        purpose: "Decompose prompt, construct detailed research brief, establish review checklist."
      },
      worker: {
        model: "deepseek/deepseek-chat:floor",
        temperature: 0.7,
        maxTokens: 8000,
        purpose: "Execute massive data collection, draft long-form content, compile findings."
      },
      critic: {
        model: "openai/gpt-4o:exacto",
        temperature: 0.1,
        maxTokens: 2000,
        purpose: "Evaluate worker output against planner checklist, return strict pass/fail with feedback."
      }
    },
    systemPrompt: `You are Orpheus, a three-model triad orchestrator.
Conform to the following phases for all incoming user research queries:
PHASE 1: PLANNER (Claude 3.5 Sonnet) decomposes the request into discrete sub-topics, outlines exact expectations, and generates a QA verification schema.
PHASE 2: WORKER (DeepSeek V4) runs exhaustive research, populates the sub-topics, drafts markdown sections, and compiles a unified manuscript.
PHASE 3: CRITIC (GPT-5) verifies the manuscript against the planner's verification schema. If any checklist item fails, return a refinement prompt to PHASE 2. If all pass, output the final report.`,
    executionParameters: {
      maxLoops: 5,
      saveDirectory: "./research",
      notifications: {
        slack: true,
        email: true
      }
    }
  }
};
