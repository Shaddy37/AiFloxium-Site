const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['app', 'components'];
const EXTENSIONS = ['.tsx', '.ts'];

// Regex to find and replace
// We only target 300, 400, 500 because light sections use 600, 700, 800, 900
const P_REGEX = /text-zinc-(300|400|500)/g;
const SUBHEADING_REGEX = /<(h2|h3|h4)[^>]*className="[^"]*text-white[^"]*"[^>]*>/g;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

function processFile(filePath) {
    if (!EXTENSIONS.some(ext => filePath.endsWith(ext))) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Replace text-zinc-300, 400, 500 with text-white
    content = content.replace(P_REGEX, 'text-white');

    // 2. Subheadings (h2, h3, h4) that have text-white -> change to text-fuchsia-300 (Lavender/Plum)
    content = content.replace(SUBHEADING_REGEX, (match) => {
        return match.replace('text-white', 'text-fuchsia-300');
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

DIRECTORIES.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
        walkDir(fullPath, processFile);
    }
});

console.log('Update complete.');
