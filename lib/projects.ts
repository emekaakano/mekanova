import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'AI Expense Tracker',
    slug: 'expense-tracker-ai',
    description:
      'A fully client-side personal finance tracker built with Next.js 14, TypeScript, and Recharts. Features category breakdowns, monthly trends, search/filter, CSV export, and a Monthly Insights view. Shipped from scratch in a single session using Claude Code.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://expense-tracker-ai-sigma.vercel.app',
    githubUrl: 'https://github.com/emekaakano/expense-tracker-ai',
    status: 'live',
    featured: true,
    year: '2025',
  },
];
