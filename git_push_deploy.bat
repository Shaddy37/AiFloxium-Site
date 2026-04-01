@echo off
cd /d E:\Antigravity\Redesign

echo ============================================================
echo Executing Git Deployment Commands
echo ============================================================
echo.

echo [1/3] Running: git add -A
git add -A
if errorlevel 1 (
    echo Error in git add -A
    exit /b 1
)
echo.

echo [2/3] Running: git commit -F .git_commit_msg.txt
git commit -F .git_commit_msg.txt
if errorlevel 1 (
    echo Error in git commit
    exit /b 1
)
echo.

echo [3/3] Running: git push
git push
if errorlevel 1 (
    echo Error in git push
    exit /b 1
)

echo.
echo ============================================================
echo Success! Changes pushed to GitHub
echo ============================================================
pause
