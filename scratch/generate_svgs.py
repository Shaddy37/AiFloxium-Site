import os

output_dir = r"e:\Antigravity\Redesign\public\blog\covers"
os.makedirs(output_dir, exist_ok=True)

svgs = {
    "hermes-terminal.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#18181b" rx="12"/>
  <circle cx="20" cy="20" r="6" fill="#ef4444"/>
  <circle cx="40" cy="20" r="6" fill="#eab308"/>
  <circle cx="60" cy="20" r="6" fill="#22c55e"/>
  <text x="20" y="60" font-family="monospace" font-size="16" fill="#a1a1aa">$ hermes start</text>
  <text x="20" y="90" font-family="monospace" font-size="16" fill="#10b981">> Initializing persistent memory...</text>
  <text x="20" y="120" font-family="monospace" font-size="16" fill="#10b981">> Loading skills: [search, browser, read_file]</text>
  <text x="20" y="150" font-family="monospace" font-size="16" fill="#3b82f6">Agent ready. Awaiting instructions.</text>
</svg>""",
    "deepseek-pricing.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
  <text x="400" y="60" font-family="sans-serif" font-size="24" font-weight="bold" fill="#0f172a" text-anchor="middle">Output Token Cost (per 1M tokens)</text>
  <rect x="150" y="150" width="200" height="20" fill="#3b82f6" rx="4"/>
  <text x="150" y="130" font-family="sans-serif" font-size="18" font-weight="bold" fill="#3b82f6">DeepSeek V4 ($0.87)</text>
  <rect x="150" y="250" width="500" height="20" fill="#a21caf" rx="4"/>
  <text x="150" y="230" font-family="sans-serif" font-size="18" font-weight="bold" fill="#a21caf">Claude Opus 4.7 ($25.00)</text>
  <line x1="150" y1="100" x2="150" y2="350" stroke="#cbd5e1" stroke-width="2"/>
  <text x="660" y="265" font-family="sans-serif" font-size="16" font-weight="bold" fill="#ef4444">28x Difference!</text>
</svg>""",
    "openrouter-dashboard.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#0f172a" rx="12"/>
  <rect x="0" y="0" width="200" height="400" fill="#1e293b" rx="12"/>
  <text x="20" y="40" font-family="sans-serif" font-size="20" font-weight="bold" fill="#fff">OpenRouter</text>
  <text x="20" y="100" font-family="sans-serif" font-size="14" fill="#94a3b8">Keys</text>
  <text x="20" y="140" font-family="sans-serif" font-size="14" fill="#fff">Models</text>
  <text x="20" y="180" font-family="sans-serif" font-size="14" fill="#94a3b8">Activity</text>
  
  <rect x="240" y="40" width="520" height="150" fill="#1e293b" rx="8"/>
  <text x="260" y="80" font-family="sans-serif" font-size="18" font-weight="bold" fill="#fff">API Usage - Last 30 Days</text>
  <path d="M 260 160 Q 350 160 400 120 T 700 80" fill="none" stroke="#3b82f6" stroke-width="4"/>
  
  <rect x="240" y="210" width="250" height="150" fill="#1e293b" rx="8"/>
  <text x="260" y="250" font-family="sans-serif" font-size="16" font-weight="bold" fill="#fff">Active Models</text>
  <text x="260" y="290" font-family="sans-serif" font-size="14" fill="#10b981">&#9679; DeepSeek V4 (65%)</text>
  <text x="260" y="320" font-family="sans-serif" font-size="14" fill="#a21caf">&#9679; Claude Opus (20%)</text>
  <text x="260" y="350" font-family="sans-serif" font-size="14" fill="#3b82f6">&#9679; GPT-5.5 (15%)</text>
</svg>""",
    "ai-triad.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#ffffff" rx="12" stroke="#e2e8f0" stroke-width="2"/>
  <circle cx="400" cy="100" r="60" fill="#fff" stroke="#ea580c" stroke-width="4"/>
  <text x="400" y="105" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#ea580c">PLANNER</text>
  
  <circle cx="250" cy="280" r="60" fill="#fff" stroke="#a21caf" stroke-width="4"/>
  <text x="250" y="285" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#a21caf">WORKER</text>
  
  <circle cx="550" cy="280" r="60" fill="#fff" stroke="#3b82f6" stroke-width="4"/>
  <text x="550" y="285" font-family="sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#3b82f6">CRITIC</text>
  
  <path d="M 360 145 L 290 230" fill="none" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
  <path d="M 310 280 L 490 280" fill="none" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
  <path d="M 510 230 L 440 145" fill="none" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
  
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
    </marker>
  </defs>
</svg>""",
    "gemini-cli.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#18181b" rx="12"/>
  <circle cx="20" cy="20" r="6" fill="#ef4444"/>
  <text x="20" y="60" font-family="monospace" font-size="16" fill="#a1a1aa">$ hermes install gemini-cli</text>
  <text x="20" y="90" font-family="monospace" font-size="16" fill="#3b82f6">> Installing gemini-cli globally...</text>
  <text x="20" y="120" font-family="monospace" font-size="16" fill="#10b981">&#10003; Authentication successful via Google OAuth</text>
  <text x="20" y="160" font-family="monospace" font-size="16" fill="#a1a1aa">$ hermes "Use Gemini CLI to analyze video.mp4"</text>
  <text x="20" y="190" font-family="monospace" font-size="16" fill="#3b82f6">> Video processing... [=======>   ] 70%</text>
</svg>""",
    "hermes-openrouter.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#18181b" rx="12"/>
  <text x="20" y="60" font-family="monospace" font-size="16" fill="#a1a1aa">$ hermes setup model</text>
  <text x="20" y="100" font-family="monospace" font-size="16" fill="#fff">Select provider:</text>
  <text x="20" y="130" font-family="monospace" font-size="16" fill="#94a3b8">  Anthropic</text>
  <text x="20" y="160" font-family="monospace" font-size="16" fill="#94a3b8">  OpenAI</text>
  <text x="20" y="190" font-family="monospace" font-size="16" fill="#10b981">&#10095; OpenRouter</text>
  <text x="20" y="220" font-family="monospace" font-size="16" fill="#94a3b8">  DeepSeek</text>
  <text x="20" y="270" font-family="monospace" font-size="16" fill="#3b82f6">Enter API Key (sk-or-v1-...): ******************</text>
  <text x="20" y="300" font-family="monospace" font-size="16" fill="#10b981">&#10003; OpenRouter authenticated. 214 models available.</text>
</svg>""",
    "hermes-pantheon.svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" width="100%" height="100%">
  <rect width="800" height="400" fill="#f8fafc" rx="12" stroke="#e2e8f0" stroke-width="2"/>
  <rect x="20" y="20" width="760" height="60" fill="#0f172a" rx="8"/>
  <text x="40" y="55" font-family="sans-serif" font-size="20" font-weight="bold" fill="#fff">Hermes Pantheon</text>
  
  <rect x="40" y="100" width="720" height="260" fill="#fff" rx="8" stroke="#e2e8f0" stroke-width="2"/>
  <text x="60" y="140" font-family="sans-serif" font-size="24" font-weight="bold" fill="#0f172a">Persona: Orpheus</text>
  
  <rect x="60" y="160" width="300" height="80" fill="#f1f5f9" rx="6"/>
  <text x="80" y="185" font-family="sans-serif" font-size="14" fill="#64748b">Conductor Model</text>
  <text x="80" y="215" font-family="sans-serif" font-size="18" font-weight="bold" fill="#ea580c">Claude Opus 4.7</text>
  
  <rect x="380" y="160" width="300" height="80" fill="#f1f5f9" rx="6"/>
  <text x="400" y="185" font-family="sans-serif" font-size="14" fill="#64748b">Worker Model</text>
  <text x="400" y="215" font-family="sans-serif" font-size="18" font-weight="bold" fill="#a21caf">DeepSeek V4</text>
  
  <text x="60" y="280" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">System Prompt</text>
  <text x="60" y="310" font-family="monospace" font-size="14" fill="#475569">"Deep work research system. Reasons through any complex topic using..."</text>
</svg>"""
}

for name, content in svgs.items():
    with open(os.path.join(output_dir, name), "w", encoding="utf-8") as f:
        f.write(content)

print("SVGs created.")
