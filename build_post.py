import os
import re

source_path = r'e:\Antigravity\Redesign\blogs\blogs250bestskills.md'
dest_path = r'e:\Antigravity\Redesign\lib\content\posts\50-best-claude-code-skills.mdx'

with open(source_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add Frontmatter
frontmatter = """---
title: "50 Best Claude Code Skills (2026 Complete Guide)"
description: "The 50 most useful Claude Code skills curated from across GitHub. Every niche covered: Frontend, Design, Social Media, Research, Marketing, SEO, and Dev. Direct install links included."
date: "2026-05-17"
author: "Muhammad Shadab Shams"
category: "Claude Code"
image: "/blog/covers/50-best-claude-code-skills.png"
canonicalUrl: "https://aifloxium.online/blog/50-best-claude-code-skills"
updatedAt: "2026-05-17"
keywords:
  - "best claude code skills"
  - "claude skills"
  - "claude code plugins"
  - "claude code marketplace"
  - "claude code tips"
  - "AI agents"
---

<aside>
✦

This guide curates the 50 best Claude Code skills across all categories. Follow the direct install links to supercharge your AI agent.

*Written by:* [Muhammad Shadab Shams](https://www.linkedin.com/in/muhammad-shadab-shams-8b07132b6/) · Founder at [AIFLOXIUM](https://aifloxium.online)

</aside>

"""

# Remove the top header and aside from the original content since we added a custom one in frontmatter/aside
content = re.sub(r'^# 50 Best Claude Code Skills — The Complete Reference.*?</aside>', '', content, flags=re.DOTALL | re.IGNORECASE).strip()

# Add PremiumCTAs
# Insert one after the Frontend & Design section
content = content.replace(
    '# 📱 Social Media & Content', 
    '<PremiumCTA title="Need a Custom Design AI Skill?" description="We build custom AI agent skills and internal tools for design and development workflows." buttonText="Book a Strategy Call" href="/#initiate" />\n\n# 📱 Social Media & Content'
)

# Insert one after Marketing & SEO
content = content.replace(
    '# 🧩 Product & Strategy', 
    '<PremiumCTA title="Scale Your Content Automatically" description="Looking to implement autonomous content systems like this for your own business?" buttonText="See Our Work" href="/blog/linkedin-content-autopilot" />\n\n# 🧩 Product & Strategy'
)

# Insert one at the end before Quick Reference Table
content = content.replace(
    '# Quick Reference Table', 
    '<PremiumCTA title="Ready to Deploy AI Workflows?" description="If you want custom agents, internal dashboards, or automation systems built around your actual workflows, we can architect and deliver the full stack." buttonText="Start Your Project" href="/#initiate" />\n\n# Quick Reference Table'
)

# Create dest if not exists
os.makedirs(os.path.dirname(dest_path), exist_ok=True)

with open(dest_path, 'w', encoding='utf-8') as f:
    f.write(frontmatter + '\n' + content)

print('File written successfully.')
