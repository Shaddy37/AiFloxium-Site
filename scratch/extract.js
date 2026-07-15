const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../testing/js/webflow-script.js');
const content = fs.readFileSync(filePath, 'utf8');

let index = -1;
while ((index = content.indexOf('cube-list', index + 1)) !== -1) {
  console.log(`\n--- Occurrence of 'cube-list' at index ${index} ---`);
  const start = Math.max(0, index - 200);
  const end = Math.min(content.length, index + 800);
  console.log(content.slice(start, end));
}
