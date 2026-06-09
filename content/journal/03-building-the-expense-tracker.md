---
title: "Building the Expense Tracker: From Course Template to My Own Product"
date: "2025-05-18"
excerpt: "The Vanderbilt course gave us a starting point. What I did with it — the look, the features, the three rounds of iteration — that part was mine. Here's how a practical assignment became something I'm actually proud of."
tags: ["Project", "Next.js", "Shipping", "Claude Code"]
readingTime: "6 min read"
---

The Vanderbilt AI Specialization is built around practical assignments — not theoretical exercises, but real projects you build and ship. The Expense Tracker was one of them. The course provided shared templates and a clear direction: build a working expense tracking application using AI-assisted development tools.

That starting point was valuable. It meant I wasn't staring at a blank screen deciding what to build. But what I quickly realized was that a template is a floor, not a ceiling. The assignment gave me the foundation. What I built on top of it is the interesting part.

## What the Course Gave Me

What the course provided was an initial requirements framework and a starting prompt — the brief for the first AI-assisted build. From there, the iteration and improvement were on me.

The stack was Next.js 14, TypeScript, and Tailwind CSS — chosen deliberately by the course designers for reasons I came to appreciate firsthand. This stack has tight conventions and clear patterns that AI tooling handles exceptionally well. Claude Code's suggestions always pointed in the same direction the template was already going. That coherence sped everything up.

What the template didn't give me: any visual design to speak of, no data visualization, no search or filtering, and no way to surface meaningful insights from the data you'd entered. It was a working skeleton. The product work was mine to do.

## Three Rounds of Iteration

I went through three major passes before I considered the app finished — or finished enough to ship publicly.

**Round 1 — Claiming the foundation.** I worked through the template, understood every file, and started making it feel like mine. Changed the visual language: card styling, color palette, spacing system. Nothing was broken — I just didn't want to ship someone else's design choices under my name. This round was mostly learning and aesthetic decisions.

**Round 2 — Adding what was missing.** The course template had data entry and a list. I added the layer that makes a finance app actually useful: a monthly bar chart, a category donut chart, summary cards showing totals at a glance. I used Recharts, which Claude Code recommended for its Next.js compatibility. This is where the app started feeling like a real product rather than an assignment submission.

**Round 3 — The Monthly Insights screen.** This one was entirely self-directed. I drew what I wanted on paper — a dedicated analytics view with a spending streak callout and a top-3 categories breakdown — described it to Claude Code, and built it. No template for this. No course guidance. Just a problem I wanted to solve and a tool that helped me solve it.

## The Discipline I Had to Learn

The hardest part wasn't the code. It was learning to scope my requests.

Early on I'd ask Claude Code to do too much at once: "Add filtering, improve the chart colors, and fix the mobile layout." It would do all three — but the changes would interact in unexpected ways, and I'd spend an hour debugging something that worked perfectly before I piled three things together.

The discipline that actually worked: one thing at a time, verify it works, commit, then move to the next thing. That's just good engineering practice — but I had to learn it by making the mistake, not by reading about it.

## What Makes It Mine

Starting from a template is normal. Every professional developer builds on existing foundations — frameworks, libraries, design systems, starter kits. The question isn't "did you start from scratch?" The question is: do you understand what you built, and did you take it somewhere it wouldn't have gone without you?

When I look at the finished app — live on Vercel, responsive, fully typed, with a Monthly Insights view that didn't exist in any template — I can answer yes to both. I understand every file. I can explain the data flow. I know why the Recharts components need a `mounted` state guard (SSR hydration issues). I made real architectural decisions and I know why I made them.

The app is live at [expense-tracker-ai-murex.vercel.app](https://expense-tracker-ai-murex.vercel.app/). The code is on GitHub. The next entry is about what happened when I tried to deploy it the first time.

---

*This is entry 3 in my build-in-public journal.*
