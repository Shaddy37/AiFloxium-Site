const { execSync } = require('child_process');
const path = require('path');

const projectDir = path.join(__dirname);
process.chdir(projectDir);

console.log('=' .repeat(60));
console.log('Portfolio Conversion - Git Push (Node.js)');
console.log('=' .repeat(60));
console.log();

try {
  // Check status
  console.log('[1/4] Checking git status...');
  const status = execSync('git status --short', { encoding: 'utf-8' });
  if (status.trim()) {
    console.log('✅ Changes found:');
    console.log(status);
  } else {
    console.log('⚠️  No changes to commit');
  }

  // Stage changes
  console.log('[2/4] Staging all changes...');
  execSync('git add -A', { stdio: 'inherit' });
  console.log('✅ Changes staged\n');

  // Commit
  console.log('[3/4] Creating commit...');
  try {
    execSync('git commit -F .git_commit_msg.txt', { stdio: 'inherit' });
  } catch (e) {
    if (!e.stdout?.includes('nothing to commit')) {
      console.log('⚠️  Note:', e.message);
    }
  }

  // Push
  console.log('\n[4/4] Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });

  console.log('\n' + '=' .repeat(60));
  console.log('✅ Portfolio conversion pushed to GitHub!');
  console.log('=' .repeat(60));
  console.log();
  console.log('Changes deployed:');
  console.log('  • Metadata: Personal branding (Muhammad Shadab Shams)');
  console.log('  • Messaging: "We" → "I" perspective');
  console.log('  • Footer: AIFLOXIUM → SHADAB SHAMS');
  console.log('  • All animations and styling preserved');
  console.log();

} catch (error) {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
}
