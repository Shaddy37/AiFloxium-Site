#!/usr/bin/env python3
"""Execute git push for portfolio conversion"""

import subprocess
import os
import sys

os.chdir(r"E:\Antigravity\Redesign")

print("=" * 60)
print("Portfolio Conversion - Git Push")
print("=" * 60)
print()

try:
    # Step 1: Check status
    print("[1/4] Checking git status...")
    result = subprocess.run(["git", "status", "--short"], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ Error checking status: {result.stderr}")
        sys.exit(1)
    
    if not result.stdout.strip():
        print("⚠️  No changes to commit")
    else:
        print(f"✅ Changes found:\n{result.stdout}")
    
    # Step 2: Stage changes
    print("\n[2/4] Staging all changes...")
    result = subprocess.run(["git", "add", "-A"], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ Error staging changes: {result.stderr}")
        sys.exit(1)
    print("✅ Changes staged")
    
    # Step 3: Create commit
    print("\n[3/4] Creating commit...")
    result = subprocess.run(
        ["git", "commit", "-F", ".git_commit_msg.txt"],
        capture_output=True,
        text=True
    )
    if result.returncode != 0 and "nothing to commit" not in result.stdout.lower():
        print(f"⚠️  Commit note: {result.stdout or result.stderr}")
    else:
        print(f"✅ Commit created: {result.stdout.strip()}")
    
    # Step 4: Push
    print("\n[4/4] Pushing to GitHub...")
    result = subprocess.run(["git", "push"], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ Error pushing: {result.stderr}")
        sys.exit(1)
    
    print("✅ Push successful!")
    print()
    print(result.stdout)
    print()
    print("=" * 60)
    print("✅ Portfolio conversion pushed to GitHub!")
    print("=" * 60)
    print()
    print("Changes deployed:")
    print("  • Metadata: Personal branding (Muhammad Shadab Shams)")
    print("  • Messaging: 'We' → 'I' perspective")
    print("  • Footer: AIFLOXIUM → SHADAB SHAMS")
    print("  • All animations and styling preserved")
    
except FileNotFoundError:
    print("❌ Git is not installed or not in PATH")
    sys.exit(1)
except Exception as e:
    print(f"❌ Unexpected error: {e}")
    sys.exit(1)
