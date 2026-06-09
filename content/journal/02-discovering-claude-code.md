---
title: "The First Time Claude Code Actually Surprised Me"
date: "2025-05-10"
excerpt: "I'd used AI chat tools before. This was different. For the first time, the AI wasn't just answering questions — it was working alongside me, making decisions, and explaining why."
tags: ["Claude Code", "AI Tools", "Developer Experience"]
readingTime: "5 min read"
---

I want to be honest about where I started: I had used ChatGPT and similar tools before. Mostly to explain code snippets, occasionally to help draft documentation. The mental model I had was: AI as a sophisticated search engine. You ask, it answers, you decide what to do with the answer.

Claude Code broke that mental model within the first session.

## What's Actually Different

The difference isn't the quality of answers — though those are good. The difference is that Claude Code operates *inside your project*, not beside it.

It reads your files. It understands your project structure. When you say "add a search filter to the expenses page," it doesn't give you a code snippet to paste somewhere — it finds the right file, reads the existing code, and makes a targeted change that fits what's already there.

That's a fundamentally different tool.

## The Moment It Clicked

I was building the first version of the Expense Tracker. I'd asked Claude Code to add a category filter to the expense list. What I expected: a block of code I'd need to figure out where to put. What I got: it opened the component file, read the existing filter logic, identified that I already had a `FilterState` type defined in `lib/types.ts`, and built the new filter to be consistent with that pattern.

I hadn't told it any of that. It found it.

That was the moment I understood why "AI-assisted development" is a category of its own, not just "AI + coding."

## The Learning Curve (It Exists)

I don't want to oversell this. There's a real learning curve — and interestingly, it's not mainly technical.

The hard part is learning to communicate clearly with the tool. Vague prompts get vague results. "Make it look better" produces something — but rarely what you had in mind. "Change the card background to white with a subtle ring border, consistent with the other cards on this page" produces something you can actually use.

The skill that transfers most from non-technical backgrounds into Claude Code work is precise communication. If you can write a clear requirements document, you can write a clear Claude Code prompt. The muscle is the same.

## What It Changed for Me

Before Claude Code, my mental model of "learning to build" involved years of fundamentals before I'd be useful. Learn JavaScript, then React, then TypeScript, then the ecosystem — in sequence, over time.

That model isn't wrong. But Claude Code made a different path available: learn by shipping, with the AI filling in gaps and explaining things in context, as you go. You still learn. You still need to understand what you're building and why. But the on-ramp is dramatically shorter.

For someone in my position — deep domain knowledge in AI transformation, newer to the technical implementation side — this rebalances the equation significantly.

I spent the next two weeks building the Expense Tracker. That story is next.

---

*This is entry 2 in my build-in-public journal.*
