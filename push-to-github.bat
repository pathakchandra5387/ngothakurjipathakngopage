@echo off
REM Auto-push script for GitHub - Run this after making changes
REM Usage: Run this batch file from C:\Users\hp\Desktop\ngo folder

cd /d C:\Users\hp\Desktop\ngo

echo ========================================
echo GitHub Auto-Push Script
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Get commit message
set /p commit_msg="Enter commit message (default: Auto Update): "
if "%commit_msg%"=="" set commit_msg=Auto Update

echo.
echo Adding all changes...
git add -A

echo.
echo Checking if there are changes to commit...
git diff --cached --quiet
if errorlevel 1 (
    echo.
    echo Committing changes...
    git commit -m "%commit_msg%"
    
    echo.
    echo Pushing to GitHub...
    git push origin main
    if errorlevel 1 (
        echo Trying master branch...
        git push origin master
    )
    
    echo.
    echo ========================================
    echo SUCCESS: Changes pushed to GitHub!
    echo ========================================
) else (
    echo.
    echo No changes to commit.
    echo ========================================
)

echo.
echo Latest commits:
git log --oneline -5

pause
