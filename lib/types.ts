export interface JournalEntry {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'live' | 'in-progress' | 'concept';
  featured?: boolean;
  year: string;
}
