---
name: deploy-github-page
description: 'Deploy a static site to GitHub Pages. Use when setting up or fixing Pages deployment for Vite, React, or other static builds, including custom domain and base-path troubleshooting.'
argument-hint: 'Repo visibility, Pages source (Actions or branch), custom domain (optional), and target URL'
---

# Deploy GitHub Page

## Outcome
Produce a working GitHub Pages deployment for a static web app, with repeatable steps for first-time setup and troubleshooting.

## When To Use
- You need to publish a Vite/React/static site to GitHub Pages.
- Deployment is failing in CI or producing broken asset paths.
- You need to add or validate a custom domain.

## Inputs To Collect
- Repository owner and repository name.
- Whether deployment uses `GitHub Actions` or `gh-pages` branch publishing.
- Framework/build tool (`vite`, `next export`, or plain static).
- Target URL (`https://<owner>.github.io/<repo>/` or user/org root page).
- Optional custom domain.

## Procedure
1. Verify build command and output directory.
   - Confirm local build works, for example `npm run build`.
   - Record output directory (often `dist`).

2. Configure base path for project pages.
   - If deploying to `https://<owner>.github.io/<repo>/`, set Vite `base` to `"/<repo>/"`.
   - If deploying to `https://<owner>.github.io/`, set base to `"/"`.

3. Choose deployment path.
   - Default to **Actions** for reproducible CI deploys.
   - Use **gh-pages branch** only when you need a quick local publish flow.

4. Implement deployment.
    - **Default Actions path**:
     - Add workflow under `.github/workflows/` to install deps, build, upload artifact, deploy to Pages.
     - In repository settings, set Pages source to `GitHub Actions`.
    - **Alternative branch path**:
     - Add `gh-pages` package and deploy script.
     - Build and publish `dist` to `gh-pages` branch.
     - In repository settings, set Pages source to `Deploy from a branch` and select `gh-pages`.

5. Validate deployment health.
   - Confirm latest deploy succeeded.
   - Open the target URL and verify JS/CSS/assets load without 404s.
   - Hard refresh and test a deep link route if SPA routing is used.

6. Configure custom domain (optional).
   - Add `CNAME` file with the domain.
   - Set DNS records correctly.
   - Enable HTTPS in Pages settings after DNS resolves.

## Decision Points
- **Project page vs user/org page**:
  - Project page needs repo-scoped base path.
  - User/org page uses root base path.
- **Actions vs branch**:
  - Prefer Actions for team workflows and deterministic deploys.
  - Use branch deploy for small personal sites or minimal setup.
- **SPA routing**:
  - If deep links 404 on refresh, add fallback strategy (`404.html` redirect or hash routing).

## Completion Checks
- Build passes locally and in CI.
- Pages configuration matches deployment method.
- Deployed URL returns `200` and static assets load correctly.
- No broken links from base-path mismatch.
- If custom domain is used, DNS and HTTPS are both valid.

## Common Fixes
- Blank page or missing assets: check `base` path mismatch.
- Deploy succeeds but old content remains: verify artifact source and cache/hard refresh.
- 404 on deep links: apply SPA fallback routing strategy.
- Custom domain not serving: validate DNS propagation and `CNAME` placement.

## Suggested Prompt Examples
- `/deploy-github-page Set up GitHub Actions deploy for my Vite repo pages URL`
- `/deploy-github-page Troubleshoot why assets 404 after Pages deploy`
- `/deploy-github-page Add custom domain and verify DNS + HTTPS`
