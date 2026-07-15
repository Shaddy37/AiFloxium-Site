const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\Cc\\.gemini\\antigravity-cli\\brain\\4d6a8c47-1fb4-4f48-a8e7-e8e77624f658/AIFLOXIUM_Free_Vs_Paid_Tools.md';
const content = fs.readFileSync(srcPath, 'utf8');

// Parse headings and tables
const lines = content.split('\n');
const tools = [];
let currentCategory = '';
let currentCategoryName = '';
let inTable = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Detect Category Headings
  // Example: ## 1. Chatbots, Text & Copywriting AI (44 Tools)
  if (line.startsWith('## ') && !line.includes('⚡') && !line.includes('❓') && !line.includes('🚀')) {
    const match = line.match(/^##\s+(\d+)\.\s+(.+?)(?:\s+\(\d+\s+Tools\))?$/i);
    if (match) {
      currentCategory = match[1];
      currentCategoryName = match[2].trim();
      inTable = false;
    }
    continue;
  }
  
  // Detect Table Start
  if (line.startsWith('|') && line.includes('Tool') && line.includes('Best For')) {
    inTable = true;
    // Skip separator line which is the next one
    i++;
    continue;
  }
  
  // Detect Table End
  if (inTable && !line.startsWith('|')) {
    inTable = false;
  }
  
  // Parse Table Row
  if (inTable && line.startsWith('|')) {
    const parts = line.split('|').map(p => p.trim()).filter(p => p !== '');
    if (parts.length >= 3) {
      let toolNameRaw = parts[0];
      // Clean up markdown bold from name
      let toolName = toolNameRaw.replace(/\*\*/g, '').trim();
      let url = '';
      
      // Clean up links and capture URL if present
      // Example: [OpenAI](https://openai.com) -> OpenAI, url: https://openai.com
      const linkMatch = toolName.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
        toolName = linkMatch[1];
        url = linkMatch[2];
      }
      
      const bestFor = parts[1];
      const pricing = parts[2];
      
      tools.push({
        name: toolName,
        bestFor,
        pricing,
        category: currentCategoryName,
        categoryId: parseInt(currentCategory, 10),
        url
      });
    }
  }
}

console.log(`Successfully extracted ${tools.length} tools!`);
fs.writeFileSync('e:\\Antigravity\\Redesign\\scratch\\tools-parsed.json', JSON.stringify(tools, null, 2));
