# The Daily Scroll

Next.js (App Router) + Tailwind. Applies your editable brand guide ("Guild Codex") to a topic and drafts a LinkedIn/X post.

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in LLM_API_KEY and APP_PASSCODE
npm run dev
```
Open http://localhost:3000.

## Deploy
1. Push to GitHub (`.env.local` is git-ignored).
2. Vercel: Add New > Project > import the repo (framework auto-detects Next.js).
3. Settings > Environment Variables: add `LLM_API_KEY` and `APP_PASSCODE` (optional: `LLM_PROVIDER`, `LLM_MODEL`, `RATE_LIMIT_MAX`). Redeploy.
4. Share the URL and the passcode with testers.

## Security notes
- The key is read only in `app/api/generate/route.ts` from `process.env.LLM_API_KEY`.
- Passcode is checked server-side (constant-time). Rate limit: 5/hour/IP, in memory, best-effort.
- Set a monthly spend cap in your LLM provider dashboard.
