import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About — Mekanova',
  description:
    'Emeka (Mekano) is a Digital Transformation practitioner helping businesses put AI to real, practical work.',
};

const skills = [
  'AI Strategy & Implementation',
  'Digital Transformation',
  'Process Improvement',
  'AI-Assisted Development',
  'Next.js / TypeScript',
  'Tailwind CSS',
  'Organizational Change Management',
  'Stakeholder Communication',
];

const credentials = [
  {
    title: 'Generative AI Software Engineering Specialization',
    org: 'Vanderbilt University · Coursera',
    year: '2025–present',
  },
  {
    title: 'AI-Assisted Product Development',
    org: 'Building in public with Claude Code',
    year: '2025–present',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-10 text-4xl font-bold text-slate-900">About Me</h1>

        {/* Intro: photo left, bio right */}
        <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-start">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-100 sm:h-56 sm:w-56">
              <Image
                src="/images/emeka.jpg"
                alt="Emeka (Mekano)"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              I&apos;m Emeka, codename = Mekano; A fuse of my first and last name{' '}
              <span className="text-slate-400">;)</span> — a Digital Transformation practitioner
              who got tired of watching organizations get sold AI hype without the practical
              roadmap to act on it.
            </p>
            <p>
              My work sits at the intersection of business process improvement and hands-on AI
              implementation. I don&apos;t just advise on AI strategy — I build with the tools
              myself, in public, so clients can see exactly what&apos;s possible and what it
              actually takes to get there.
            </p>
          </div>
        </div>

        {/* Remaining bio paragraphs */}
        <div className="mb-12 space-y-5 text-lg leading-relaxed text-slate-600">
          <p>
            In 2025 I enrolled in Vanderbilt University&apos;s Generative AI Software Engineering
            Specialization and started shipping real products with Claude Code. The Expense Tracker
            was the first. This site is the second. There are more coming.
          </p>
          <p>
            The build-in-public approach isn&apos;t just a personal challenge — it&apos;s a proof
            of concept. If I can go from &quot;non-technical&quot; to shipping full-stack AI-assisted
            applications in a matter of weeks, your team can learn to use these tools too. That&apos;s
            the work I want to bring to your organization.
          </p>
        </div>

        {/* Current Focus */}
        <div className="mb-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="mb-3 text-lg font-semibold text-slate-900">Current Focus</h2>
          <p className="text-slate-600">
            Completing the Vanderbilt AI Specialization, shipping 1 project per month, and
            building a client pipeline for AI transformation consulting engagements. Open to
            both employment and independent consulting conversations.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Skills & Focus Areas</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Credentials</h2>
          <div className="space-y-4">
            {credentials.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <p className="font-semibold text-slate-900">{c.title}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {c.org} · {c.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-violet-600 p-8 text-center text-white">
          <h2 className="mb-3 text-2xl font-bold">Let&apos;s work together</h2>
          <p className="mb-6 text-violet-200">
            Whether you need AI strategy, team training, or a hands-on implementation partner —
            I&apos;d love to hear what you&apos;re trying to solve.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-white px-8 py-3 font-semibold text-violet-700 transition-colors hover:bg-violet-50"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
