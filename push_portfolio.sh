#!/usr/bin/env bash
# Portfolio conversion push script
# This script adds all changes, creates a commit, and pushes to GitHub

set -e  # Exit on error

cd "$(dirname "$0")"

echo "📦 Adding all changes..."
git add -A

echo "💾 Creating commit with portfolio conversion..."
git commit -F .git_commit_msg.txt || {
    echo "⚠️  Commit already exists or no changes staged"
    echo "Proceeding to push..."
}

echo "🚀 Pushing to GitHub..."
git push

echo "✅ Push complete!"
echo ""
echo "Your portfolio conversion has been pushed to GitHub:"
echo "- Updated metadata: 'Muhammad Shadab Shams' personal branding"
echo "- Converted messaging: 'We' → 'I' perspective"
echo "- Updated footer: 'AIFLOXIUM' → 'SHADAB SHAMS'"
echo "- Preserved all animations and styling"
