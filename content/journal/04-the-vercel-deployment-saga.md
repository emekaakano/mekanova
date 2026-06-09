---
title: "The Vercel Deployment Saga: What Nobody Tells You About Shipping"
date: "2025-05-22"
excerpt: "The app worked perfectly on my machine. Deploying it to Vercel took three attempts, two ESLint errors I'd never seen before, and a branch confusion I should have caught earlier. Here's the actual story."
tags: ["Deployment", "Vercel", "Debugging", "Lessons"]
readingTime: "5 min read"
---

"It works on my machine" is a cliché because it's true. The first time I pushed the Expense Tracker to Vercel, I learned this firsthand.

## The Setup

Deployment should have been simple: push to GitHub, connect to Vercel, done. And the Vercel side of it *was* simple — that platform is genuinely excellent for Next.js apps. The problem was what I pushed.

## Problem 1: ESLint Errors I Didn't Know I Had

The first deploy failed with ESLint errors. Not the kind where the code is wrong — the kind where the code works fine but violates rules that ESLint enforces in CI mode.

Specifically: unused imports and a `@typescript-eslint/no-explicit-any` error I'd left in a component from an early draft. Locally, my editor showed these as warnings. Vercel treats them as build failures.

Lesson: run `npm run lint` locally before pushing. The linter is your friend. Ignoring its output until deployment day is how you get surprised.

Claude Code helped me track down each error — not just fixing the symptoms but explaining why each rule exists and whether bypassing it would be a mistake (it usually would be).

## Problem 2: Wrong Branch

After fixing the lint errors, I pushed again. The Vercel deploy triggered... but showed the old version.

Fifteen minutes of confusion before I figured it out: Vercel was watching the `main` branch, and I had been working on a feature branch. I'd pushed to `feature/expense-filters`, not `main`.

This one was entirely on me. The fix was a merge PR and a redeploy. Three minutes to fix once I understood what had happened. Fifteen minutes to figure out what had happened.

Lesson: be deliberate about which branch is connected to production. For solo projects, I now keep a clear mental model of "this branch deploys, that one doesn't."

## Problem 3: The Cache That Wouldn't Clear

After the correct branch was deployed, I was still seeing stale UI on one page. Vercel showed a successful build. The source was correct. But the page wasn't reflecting my changes.

Browser cache. Hard refresh (Ctrl+Shift+R on Windows) cleared it immediately.

Not a Vercel bug. Not a code bug. Just the browser holding onto the old version.

## What I Actually Learned

The deployments worked. The app is live. But the *path* to that outcome was choppier than "push to GitHub, done."

What I took from this:

1. **Run the full build locally** (`npm run build`) before pushing to any deployment target. If it fails locally, it'll fail in CI. Better to catch it on your machine where the error messages are immediate.

2. **Know your branch topology.** Which branch goes to production? Where does the feature branch merge? Don't assume — verify before pushing.

3. **Deployment is a skill, not just a step.** I knew how to build the app. The deployment layer was a separate skill set I had to develop. That's okay — it's learnable, and it gets faster.

The deployment saga is behind me now. The app is live, the pipeline works, and I understand exactly what each step does. That understanding was worth the friction.

---

*This is entry 4 in my build-in-public journal.*
