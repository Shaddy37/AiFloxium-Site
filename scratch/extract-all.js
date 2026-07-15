const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../testing/js/webflow-script.js');
const content = fs.readFileSync(filePath, 'utf8');

// Find all matches of `[data-animate="cube-list"]` or `"cube-list"`
const regex = /properties:\{"wf:transform":\{([^}]+)\}\}/g;
let match;
while ((match = regex.exec(content)) !== null) {
  // Let's print the match and surrounding 100 characters
  const start = Math.max(0, match.index - 300);
  const end = Math.min(content.length, match.index + 500);
  console.log(`\n=== MATCH ===`);
  console.log(content.slice(start, end));
}
