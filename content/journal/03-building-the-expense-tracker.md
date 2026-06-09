---
title: "Building the Expense Tracker: From Blank Repo to Live App"
date: "2025-05-18"
excerpt: "The goal was simple: ship a real, working application. Not a tutorial. Not a fork. Something I built, understood, and could point to. This is how that went."
tags: ["Project", "Next.js", "Shipping", "Claude Code"]
readingTime: "6 min read"
---

The assignment from the Vanderbilt course was to build something real using AI-assisted development. No starter template, no prescribed stack. Just: here are the tools, go ship something.

I chose an expense tracker. Personal finance apps are a known category — the UI patterns exist, the data model is clear, and the complexity is high enough to be interesting without being overwhelming. Good first project territory.

## The Stack Decision

I went with Next.js 14, TypeScript, and Tailwind CSS. That wasn't accidental — Claude Code's suggestions kept pointing in that direction, and after a couple of sessions I understood why: this stack has a large training corpus, tight conventions, and clear patterns that AI tooling handles exceptionally well.

TypeScript felt intimidating at first. "Strict typing for a first project?" But Claude Code enforced it consistently and explained every type error in plain English. By week two I'd stopped dreading the type errors and started finding them useful.

## Three Versions

I built this app three times. That's not as dramatic as it sounds — more like three major iterative passes — but each one was a significant step up from the last.

**Version 1** was a functional proof of concept: add expenses, see a list, basic category tags. It worked. It was ugly. I knew it was ugly. Shipped it to Vercel anyway to prove the deployment pipeline worked.

**Version 2** added the data visualization layer: a monthly bar chart, a category donut chart, summary cards with totals. I used Recharts, which Claude Code recommended over alternatives for its Next.js compatibility. This is where the app started to feel like a real product.

**Version 3** added the Monthly Insights screen — a dedicated analytics view with a spending streak callout, a top-3 categories breakdown, and a polished donut chart. This one started from a napkin sketch. I drew what I wanted, described it to Claude Code, and it built it. That felt like a different kind of capability.

## The Hardest Part

The hardest part wasn't the code. It was learning to scope my requests.

Early on I'd ask for too much in one prompt: "Add filtering, improve the chart colors, and make the mobile layout better." Claude Code would do all three — but the changes would interact in unexpected ways, and I'd spend the next hour debugging something that worked fine before I tried to do everything at once.

The discipline that actually worked: one thing at a time, verify it works, commit, then move to the next thing. That's not an AI insight — that's just good engineering practice. But I had to learn it by making the mistake.

## What Surprised Me About the Outcome

When I look at the finished app — live on Vercel, responsive, fully typed, with real data visualization — I feel a genuine sense of ownership over it.

I understand every file. I can explain the data flow. I know why the Recharts components have a `mounted` state guard (SSR hydration issues). I know what `gray-matter` does. I didn't just copy-paste a finished product — I built this iteratively, made mistakes, debugged them, and learned the architecture from the inside.

That's the thing Claude Code enables that a tutorial never could: you're in the driver's seat, making real decisions, and the AI is the co-pilot explaining the road.

The app is live at [expense-tracker-ai-sigma.vercel.app](https://expense-tracker-ai-sigma.vercel.app). The code is on GitHub. The next entry is about what happened when I tried to deploy it the first time.

---

*This is entry 3 in my build-in-public journal.*
