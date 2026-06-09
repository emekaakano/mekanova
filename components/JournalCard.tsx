import Link from 'next/link';

interface JournalCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
}

export default function JournalCard({
  slug,
  title,
  date,
  excerpt,
  tags,
  readingTime,
}: JournalCardProps) {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link href={`/journey/${slug}`} className="group block">
      <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md">
        <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
          <time dateTime={date}>{formatted}</time>
          <span>·</span>
          <span>{readingTime}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-violet-600 transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-600 line-clamp-3">{excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
