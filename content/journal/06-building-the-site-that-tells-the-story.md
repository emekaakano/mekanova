---
title: "Building the Site That Tells the Story"
date: "2026-06-11"
excerpt: "The expense tracker proved I could ship. But I needed somewhere to put it. Building mekanova.dev meant figuring out not just how to code a portfolio — but what story it should tell."
tags: ["Portfolio", "Next.js", "Build in Public", "Claude Code"]
readingTime: "6 min read"
---

The Expense Tracker was live. I had proof I could build something real. What I didn't have was anywhere to put it.

A Vercel subdomain works. A GitHub link works. But neither of them answers the question a potential client or employer is really asking: *who is this person, and can they do this consistently?* A single project doesn't answer that. A journey does.

That's when I started thinking about mekanova.dev differently — not as a portfolio, but as a living record of the build.

## The Problem with Most Portfolio Sites

Most developer portfolios are lists. Projects, skills, credentials, a contact form. They answer the question "what have you done?" but not "how do you think?" or "how do you handle something you haven't done before?"

Those second questions are the ones that actually matter in consulting and transformation work. Anyone can list certifications. Fewer people can show the reasoning behind decisions, the things that went wrong, and what they did about it.

I wanted a site that answered the harder questions. The journal format was the answer.

## The Build

The stack was familiar — Next.js 14, TypeScript, Tailwind CSS. Familiar territory after the Expense Tracker. What was new was the content layer: a file-based journal system where each entry is a Markdown file with frontmatter, parsed at build time using `gray-matter` and `remark`.

In plain English: I write journal entries as simple text files, and the site automatically turns them into web pages. No database, no CMS, no admin panel. Just files and code.

Claude Code handled the implementation — the file reader, the slug generation, the static page builder. What I handled was the structure: what information belongs in the frontmatter, how the cards should look, what the navigation should feel like. The product decisions were mine. The code execution was collaborative.

The hardest part wasn't technical. It was figuring out what to put on the About page. Writing about yourself — clearly, without sounding either too modest or too promotional — is genuinely difficult. I went through four versions before it felt honest.

## The Moment It Felt Real

There's a specific moment in every project where it stops feeling like a project and starts feeling like a thing that exists in the world. For the Expense Tracker, that moment was seeing it live at a real URL. For mekanova.dev, it was switching the nameservers on GoDaddy and watching `mekanova.dev` resolve for the first time.

A custom domain does something psychological that a subdomain doesn't. It signals commitment. It says: this isn't a demo, this is a destination.

The LinkedIn launch post went up the same week. The response reminded me why building in public is worth the discomfort of doing it in front of people.

## What This Site Is Actually For

A portfolio site is a claim. "I can do this." Every project listed is evidence for that claim.

But this site is also a commitment. Publishing the journey — including the things I got wrong, the detours, the lessons — means I can't quietly revise the history later. It's dated. It happened. That accountability is a feature, not a bug.

The next project is already forming. The journal entry for it will be written closer to real time — that's one of the things I said I'd do differently, and I intend to mean it.

mekanova.dev is the proof of concept for everything that comes next.

---

*This is entry 6 in my build-in-public journal. If you're building something similar — or trying to make the case inside your organisation for what AI-assisted development actually looks like — the [contact page](/contact) is the place to start.*
