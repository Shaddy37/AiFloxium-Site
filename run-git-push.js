#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = 'E:\\Antigravity\\Redesign';
process.chdir(projectDir);

console.log('='.repeat(60));
console.log('Executing Git Deployment');
console.log('='.repeat(60));
console.log();

try {
  // Step 1: Check status
  console.log('[1/4] Checking git status...');
  const status = execSync('git status --short', { encoding: 'utf-8' });
  if (status.trim()) {
    console.log('Changes found:');
    console.log(status);
  } else {
    console.log('Note: No unstaged changes');
  }
  console.log();

  // Step 2: Stage changes
  console.log('[2/4] Staging all changes (git add -A)');
  execSync('git add -A', { stdio: 'inherit' });
  console.log();

  // Step 3: Commit
  console.log('[3/4] Creating commit (git commit -F .git_commit_msg.txt)');
  try {
    execSync('git commit -F .git_commit_msg.txt', { stdio: 'inherit' });
  } catch (e) {
    if (e.message.includes('nothing to commit')) {
      console.log('Note: nothing to commit (all changes already staged)');
    } else {
      throw e;
    }
  }
  console.log();

  // Step 4: Push
  console.log('[4/4] Pushing to GitHub (git push)');
  execSync('git push', { stdio: 'inherit' });

  console.log();
  console.log('='.repeat(60));
  console.log('SUCCESS: Changes pushed to GitHub!');
  console.log('='.repeat(60));
  console.log();
  console.log('Deployed changes:');
  console.log('  • Converted Aifloxium Agency → Muhammad Shadab Shams portfolio');
  console.log('  • Updated metadata and messaging across 11+ files');
  console.log('  • Preserved all animations and styling');
  console.log();
  console.log('Repository: https://github.com/Shaddy37/AiFloxium-Site.git');
  console.log('Branch: main');
  console.log();

} catch (error) {
  console.error();
  console.error('='.repeat(60));
  console.error('ERROR during git deployment:');
  console.error('='.repeat(60));
  console.error(error.message);
  process.exit(1);
}
