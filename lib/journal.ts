import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { JournalEntry } from './types';

const journalDir = path.join(process.cwd(), 'content/journal');

export function getAllEntries(): Omit<JournalEntry, 'content'>[] {
  const files = fs.readdirSync(journalDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const fullPath = path.join(journalDir, filename);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) || [],
        readingTime: (data.readingTime as string) || '3 min read',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getEntryBySlug(slug: string): Promise<JournalEntry> {
  const fullPath = path.join(journalDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) || [],
    readingTime: (data.readingTime as string) || '3 min read',
    content: processed.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(journalDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace('.md', ''));
}
