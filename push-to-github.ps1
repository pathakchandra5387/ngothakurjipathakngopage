# Auto-push script for GitHub - PowerShell version
# Usage: .\push-to-github.ps1

Set-Location "C:\Users\hp\Desktop\ngo"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Auto-Push Script (PowerShell)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "Git Version: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Get commit message from user
$commitMsg = Read-Host "Enter commit message (default: Auto Update)"
if ([string]::IsNullOrWhiteSpace($commitMsg)) {
    $commitMsg = "Auto Update"
}

Write-Host ""
Write-Host "Adding all changes..." -ForegroundColor Yellow
git add -A

Write-Host ""
Write-Host "Checking for changes..." -ForegroundColor Yellow
$hasChanges = git diff --cached --quiet
$LASTEXITCODE

if ($LASTEXITCODE -eq 1) {
    Write-Host ""
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "$commitMsg"
    
    Write-Host ""
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Trying master branch..." -ForegroundColor Yellow
        git push origin master
    }
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "SUCCESS: Changes pushed to GitHub!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "No changes to commit." -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Latest commits:" -ForegroundColor Cyan
git log --oneline -5

Write-Host ""
Read-Host "Press Enter to exit"
