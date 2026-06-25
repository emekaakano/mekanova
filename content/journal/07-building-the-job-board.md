---
title: "From WhatsApp Announcements to a Proper Job Board"
date: "2026-06-25"
excerpt: "I volunteer on a sub-committee that shares job opportunities with members of Protocol Directorate. The old process worked — until it didn't. Building a better one taught me more about workflow than it did about code."
tags: ["Full-Stack", "Next.js", "Database", "Build in Public", "Claude Code"]
readingTime: "7 min read"
---

I've been volunteering with Protocol Directorate — a voluntary organisation within my local assembly — as part of a sub-committee responsible for collating job vacancies and sharing them with members.

For a while, the process worked well enough. Someone surfaces an opportunity. It gets sent to the sub-admin via WhatsApp. The sub-admin reviews it for relevance, gets internal approvals, drafts an announcement, and posts it to the general group(s) on WhatsApp. Members see it, act on it. Done.

The problem isn't that the process fails. The problem is what happens to it over time.

## The WhatsApp Problem

A WhatsApp group is not a place where information lives. It's a place where information passes through.

Post an opportunity on a Monday, and by Thursday it's buried under everything else — updates, discussions, casual messages, other announcements. A member who joins the group on Friday has no practical way to find what came before. A member who saw the post but didn't act immediately has to scroll back through days of messages to find it again. And when the same type of role comes up three months later, there's no archive to search, no history to reference. You start from scratch every time.

The information was good. The container was wrong.

We'd tried a middle step — a shared spreadsheet with a live link that an admin could update in real time. In theory, it solved the burial problem. In practice, it introduced a different one: it required discipline to maintain, and that discipline didn't stick. The sheet went stale. WhatsApp kept moving.

Then I started building AI-assisted tools seriously — the Expense Tracker, the portfolio site — and the question shifted from "someone should fix this" to "I can probably fix this."

## What the Job Board Needed to Do

The brief, when I sat down to write it out properly, was simple: give job opportunities a permanent home that members can check anytime, that doesn't require anyone to repeat themselves, and that doesn't get buried.

That translated into a few concrete requirements:

- A public-facing board where all current opportunities are listed and browsable
- Filters so members can quickly find what's relevant to them
- Listings that expire automatically so the board never shows stale opportunities
- An admin panel so the sub-committee can post, edit, and manage listings without touching any code
- A clear way for each listing to tell members how to apply

The WhatsApp process was replaced by a workflow: opportunity surfaces → admin logs in → posts it to the board → members find it whenever they need it. No group message, no scroll, no buried thread.

## The Technical Build

Solving it properly meant building something with a real database, real authentication, and a way for non-technical volunteers to manage it without ever calling me for help. That determined the architecture before I wrote a line of code.

The stack was Next.js 14, TypeScript, Tailwind CSS, Prisma for the database layer, and Turso as the cloud-hosted database. Turso is an internet-hosted database — meaning the live site and my local development environment both talk to the same data, without any manual syncing.

That sounds like a detail. In practice it introduced one of the more frustrating debugging sessions of the project.

Prisma 7 — the version I was using — changed how it handles database connections, and it has a known incompatibility with Turso's connection format. The standard migration command silently does nothing. No error, just silence, and you're left wondering why your schema changes haven't taken effect.

The fix was a workaround script that applied the changes directly, bypassing Prisma's migration runner. Straightforward once I understood *why* the problem existed. Getting there took longer than the fix itself.

This is a pattern that keeps appearing across every project: the frustrating moments are rarely "I don't know how to do this." They're "I don't know why this isn't working." The second kind requires slowing down and tracing the problem to its actual source rather than trying solutions at random.

## The Feature That Came from the Problem

Because I understood the original problem — information getting lost in a stream — two of the filters on the public board came naturally.

Most job boards filter by role type: Full Time, Part Time, Contract, Internship, Remote. Those are useful. But I added two more: **Recent Jobs** (posted in the last 7 days) and **About to Expire** (closing within 7 days). The first one answers "what's new since I last checked?" The second answers "what do I need to act on now?"

Both of those filters exist because I was thinking about the person browsing the board, not the person who built it. The WhatsApp process had a version of this problem — even when you saw an announcement, you didn't always know how urgent it was. The board makes that visible.

## What Surprised Me About Building for Others

When I was building the Expense Tracker or the portfolio site, the only person who had to understand the tool was me. If something was slightly awkward, I could work around it.

The Job Board is used by real volunteers, some of whom have no interest in what's running under the hood. It just has to work — consistently, without explanation, in the same way every time.

That constraint is actually a useful discipline. It forces decisions that learning projects let you defer. The admin panel has mandatory fields and format validation not because I wanted to write more code, but because a listing posted without a deadline or a broken application link fails the person reading it. The constraints exist to protect the end user.

I also built an admin CLI — a command-line tool for managing admin accounts. It exists because you can't use a web UI to create the first admin account before that admin account exists. A small technical problem, solved by a small technical tool. But getting those details right is the difference between something that works the first time and something that requires a support call on day one.

## What Shipped

The board is live at [job-board-flame-nine.vercel.app](https://job-board-flame-nine.vercel.app). Here's what it does for the people who use it:

- **Members** get a searchable, always-current board — filter by role type, see what's new, see what's closing soon, and apply directly from the listing
- **Admins** get a panel to post, edit, and archive listings with proper validation so nothing goes up broken
- **The sub-committee** gets a reporting tool — export listings by date range as a CSV or PDF for any record-keeping that's needed
- **The organisation** gets a system that maintains itself — listings auto-archive after 30 days, so the board never shows stale opportunities without anyone having to manage it manually

## What This One Taught Me

The Expense Tracker taught me I could ship. The portfolio site taught me I could tell a story. The Job Board taught me I could solve someone else's problem.

That third one is the one that actually matters for consulting and transformation work. Digital transformation isn't about building impressive technology — it's about replacing a process that's failing people with one that isn't. The technology is just how you do it. The WhatsApp threads, the stale spreadsheet, the buried announcements — those were the problem. The board is the solution. The code is just the mechanism.

The fact that this is a volunteer sub-committee and not a corporate deployment doesn't make it less real. Every organisation I've ever worked with has at least one process held together with WhatsApp groups and manual effort. This is what fixing that actually looks like.

No more WhatsApp scrolling to find a job listing that was posted two weeks ago.

---

*This is entry 7 in my build-in-public journal. If your organisation has a workflow held together with WhatsApp threads and good intentions, the [contact page](/contact) is the place to start.*
