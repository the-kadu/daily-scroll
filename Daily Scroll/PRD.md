# PRD: The Daily Scroll (Daily Content Creator)

## Problem
Growing a following on LinkedIn and X requires a fresh, on-brand post every day. Writing one from scratch is slow, and generic AI output sounds like everyone else.

## Goal
Let a user paste any real-world topic or news story and have it rewritten through their own "Personal Brand Lens" (a editable brand guide) into an engaging short-form social post. Visual vibe: "The Guildmaster's Tavern," a 16-bit RPG menu meets a fantasy tavern notice board.

## Target users
Tech and business professionals on LinkedIn and X who love gaming and fantasy lore, and who want a consistent daily posting habit.

## Default brand lens (the Guild Codex)
- **Persona:** A wise Tavern Guildmaster translating corporate, tech, and business news into RPG quests, patch notes, and tavern rumors. Market shifts are world events, leaders are raid bosses, career tips are stat buffs.
- **Audience:** Tech and business professionals who love gaming and fantasy lore.
- **Tone:** Witty, insightful, epic, yet practical.
- **Format and length:** 150-250 words, punchy hook headline, bulleted quest objectives or stat buffs, and a CTA asking followers to share their strategy in the comments.
- **Visual mood:** 16-bit pixel tavern; #F4EBD0, #12130F, #3A86FF.

## Functional requirements
1. **Guild Codex (brand guide):** text area prefilled with the default guide; user edits and saves.
2. **Scribe a New Scroll (generator):** topic input, "Cast Spell (Generate Post)" button, editable output, image upload with preview beside the post, "Save Final Draft" button.
3. **The Vault (local archive, localStorage only):**
   - Saved Drafts: topic, date/time, final post text.
   - Brand Guide History: timestamped snapshot every time the guide is saved.
4. **Server-side generation:** `/api/generate` calls the LLM provider from the server.

## Security requirements
- API key read only from server env `LLM_API_KEY`; never in the browser, localStorage, or GitHub.
- "Tavern Passcode" checked server-side against `APP_PASSCODE` (constant-time comparison).
- In-memory rate limiter: 5 requests per hour per IP (counts wrong-passcode attempts too).
- Input size limits; user topic is passed as data, separate from the system instructions.

## Non-goals (this version)
Auto-posting, trending-topic discovery, email digests, server-side database, AI image generation, multi-user accounts, payments.

## Known limitations
- Archive is device/browser-only and is lost if browser data is cleared.
- The in-memory rate limiter resets on serverless cold starts and is per-instance, so it is best-effort. The passcode and a provider spend cap are the real guardrails.

## Acceptance tests
- Same topic with a modified guide (e.g. different CTA or length) changes the output accordingly.
- Wrong passcode returns an error; the 6th request within an hour from one IP returns a rate-limit error.
- Saving the guide adds a history snapshot; saving a draft adds a vault entry; both survive a refresh.
- Image upload shows a preview next to the post.
- No API key appears in page source, network responses, localStorage, or the repo.
- Tested with varied inputs: a tech earnings story, a layoffs headline, a general career topic, and a non-business topic.
