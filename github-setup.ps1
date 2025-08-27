# Ghost Mode Search - GitHub Setup

## After creating your GitHub repository, run these commands:

# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub details
$GitHubUsername = "YOUR_USERNAME"
$RepoName = "ghost-mode-search"  # or your chosen repository name

# Add remote origin
git remote add origin https://github.com/$GitHubUsername/$RepoName.git

# Push to GitHub
git push -u origin main

## Alternative: If you want to use SSH instead of HTTPS:
# git remote add origin git@github.com:$GitHubUsername/$RepoName.git
# git push -u origin main

## Verify the upload
Write-Host "Repository should now be available at: https://github.com/$GitHubUsername/$RepoName"

## Future updates
Write-Host "For future updates, use:"
Write-Host "git add ."
Write-Host "git commit -m 'Your commit message'"
Write-Host "git push"
