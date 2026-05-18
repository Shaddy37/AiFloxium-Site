const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['app', 'components'];
const EXTENSIONS = ['.tsx', '.ts'];

const ORANGE_REGEX = /text-fuchsia-300/g;

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

    // Replace text-fuchsia-300 with text-brand-orange
    content = content.replace(ORANGE_REGEX, 'text-brand-orange');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated to orange: ${filePath}`);
    }
}

DIRECTORIES.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
        walkDir(fullPath, processFile);
    }
});

console.log('Orange update complete.');
