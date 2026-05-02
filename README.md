<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/847045a0-25a1-4978-ae0c-ab7c12e977d1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This repo includes a workflow at [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) that deploys on every push to `main`.

1. In GitHub, open **Settings -> Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main`.
4. Open your site at `https://<owner>.github.io/know-yourself/`.

Notes:
- The Vite base path defaults to `/know-yourself/` for builds and `/` for local dev.
- If the repository name changes, update `VITE_BASE_PATH` in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) and the fallback in [vite.config.ts](vite.config.ts).
