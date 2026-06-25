import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Protocol Directorate Job Board',
    slug: 'protocol-directorate-jobboard',
    description:
      'A full-stack job board built for a voluntary organisation to replace a WhatsApp-based vacancy sharing process. Admins post and manage listings via a secure panel; members browse, filter, and apply directly. Features role-type filters, urgency indicators, application deadlines, auto-archiving after 30 days, CSV/PDF export reporting, and an admin CLI for account management.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Turso', 'NextAuth', 'Zod'],
    liveUrl: 'https://job-board-flame-nine.vercel.app',
    githubUrl: 'https://github.com/emekaakano/protocol-directorate-jobboard',
    status: 'live',
    featured: true,
    year: '2026',
  },
  {
    title: 'AI Expense Tracker',
    slug: 'expense-tracker-ai',
    description:
      'A fully client-side personal finance tracker built with Next.js 14, TypeScript, and Recharts. Features category breakdowns, monthly trends, search/filter, CSV export, and a Monthly Insights view. Shipped from scratch in a single session using Claude Code.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://expense-tracker-ai-murex.vercel.app/',
    githubUrl: 'https://github.com/emekaakano/expense-tracker-ai',
    status: 'live',
    featured: true,
    year: '2025',
  },
];
