const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'tools-parsed.json');
const destPath = path.join(__dirname, '../lib/free-vs-paid-tools-data.ts');

const parsed = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const tsContent = `export interface ToolItem {
  name: string;
  bestFor: string;
  pricing: string;
  category: string;
  categoryId: number;
  url: string;
}

export const toolsData: ToolItem[] = ${JSON.stringify(parsed, null, 2)};
`;

fs.writeFileSync(destPath, tsContent);
console.log('TypeScript tools data file written successfully!');
