---
title: "What I'd Do Differently: Reflections on Building in Public"
date: "2025-06-01"
excerpt: "One project shipped, one journey documented. Before starting the next one, I wanted to write down what actually changed — in my skills, my thinking, and my sense of what's possible."
tags: ["Reflection", "AI", "Career", "Build in Public"]
readingTime: "5 min read"
---

The Expense Tracker is live. The deployment saga is behind me. I've been building this journal site.

Before I start the next project, I want to do what I probably should do after every project: stop, look back, and be honest about what I learned — and what I'd do differently.

## What Actually Changed

I went into the Vanderbilt specialization as someone who understood AI from the outside. I come out of this first project understanding it from the inside. That's not a minor distinction.

There's a specific kind of confidence that comes from having shipped something real: knowing that the path from idea to working software is something you can navigate. Not that it'll be fast, not that it'll be smooth — but that it's navigable.

That confidence changes how I show up in client conversations. When I talk about what AI-assisted development makes possible, I'm not speaking from theory anymore.

## What I'd Do Differently

**I'd set up the testing framework on day one.** I shipped without tests, which felt fine until I was refactoring a component and genuinely wasn't sure if I'd broken something. Tests give you a safety net. They're not optional for anything you care about.

**I'd be more deliberate about my branch strategy from the start.** The wrong-branch deployment issue was preventable. Two minutes of setup — "production deploys from `main`, features live on `feature/*` branches" — would have saved fifteen minutes of confusion.

**I'd write the journal entries in real time, not retroactively.** This journal is partly backdated. The stories are real, the details are accurate — but writing them weeks after the fact means some of the texture is lost. The struggle felt sharper when I was in it. Starting the next project with an open journal entry is the plan.

## What I Didn't Expect

I didn't expect to enjoy the process this much.

I'm not naturally someone who finds debugging loop. I'm not someone who stays up late reading TypeScript documentation. But there's something about building a product that actually works — something you can click on, show to someone, point to — that creates its own pull.

The build-in-public approach amplified this. Knowing that someone might read these entries, see the project, watch the arc of the journey — that added accountability that solo projects usually lack.

## The Bigger Picture

The question I started with — how do I go from "person who talks about AI" to "person who builds with AI" — has a clearer answer than I expected.

You start. You pick something small and real. You ship it, even when it's not perfect. You write down what you learned. You do it again.

That's it. That's the whole method.

This site is the second project. There's a third one already forming. If you're watching this journey unfold, thank you — it matters more than you might think.

---

*This is entry 5 in my build-in-public journal. If any of this resonates — if you're in a similar place, figuring out how AI fits into your work or your organization — I'd genuinely like to hear from you. Reach out on the [contact page](/contact).*
