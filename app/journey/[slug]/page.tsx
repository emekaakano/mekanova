import { getAllSlugs, getEntryBySlug } from '@/lib/journal';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  try {
    const entry = await getEntryBySlug(params.slug);
    return { title: `${entry.title} — Mekanova`, description: entry.excerpt };
  } catch {
    return {};
  }
}

export default async function JournalEntryPage({ params }: PageProps) {
  let entry;
  try {
    entry = await getEntryBySlug(params.slug);
  } catch {
    notFound();
  }

  const formatted = new Date(entry.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/journey"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-violet-600 transition-colors"
        >
          ← Back to Journey
        </Link>

        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-slate-500">
            <time dateTime={entry.date}>{formatted}</time>
            <span>·</span>
            <span>{entry.readingTime}</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900">{entry.title}</h1>
          <p className="text-lg leading-relaxed text-slate-600">{entry.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: entry.content }}
        />
      </div>
    </div>
  );
}
