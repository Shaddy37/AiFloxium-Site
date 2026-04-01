@echo off
cd /d E:\Antigravity\Redesign

echo Adding all changes...
git add -A

echo Creating commit...
git commit -F .git_commit_msg.txt

echo Pushing to GitHub...
git push

echo Done!

