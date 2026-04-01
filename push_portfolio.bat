@echo off
setlocal enabledelayedexpansion
cd /d "%~dp0"

echo.
echo ========================================
echo Portfolio Conversion Push to GitHub
echo ========================================
echo.

echo [1/3] Adding all changes...
git add -A
if errorlevel 1 (
    echo Error: Failed to add files
    exit /b 1
)
echo ✓ Files staged

echo.
echo [2/3] Creating commit...
git commit -F .git_commit_msg.txt
if errorlevel 1 (
    echo ⚠ Note: Commit may already exist or no new changes
    echo Proceeding to push...
)
echo ✓ Commit created

echo.
echo [3/3] Pushing to GitHub...
git push
if errorlevel 1 (
    echo Error: Failed to push
    exit /b 1
)
echo ✓ Push successful

echo.
echo ========================================
echo ✅ Portfolio Conversion Pushed!
echo ========================================
echo.
echo Changes deployed:
echo   • Metadata: Personal branding (Muhammad Shadab Shams)
echo   • Messaging: "We" → "I" perspective
echo   • Footer: AIFLOXIUM → SHADAB SHAMS
echo   • All animations and styling preserved
echo.
echo Your portfolio is now live with personal branding!
echo.
pause
