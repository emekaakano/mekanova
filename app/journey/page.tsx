import JournalCard from '@/components/JournalCard';
import { getAllEntries } from '@/lib/journal';

export const metadata = {
  title: 'The Journey — Mekanova',
  description:
    'A chronological build log of shipping AI-powered projects in public — the wins, the blockers, and everything learned in between.',
};

export default function JourneyPage() {
  const entries = getAllEntries();

  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">The Journey</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            A chronological build log of learning to ship AI-powered products in public.
            Not polished thought leadership — real stories: the setup, the tension, the
            breakthrough, and the reflection.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <JournalCard key={entry.slug} {...entry} />
          ))}
        </div>

        {entries.length === 0 && (
          <p className="text-slate-500">First entries coming soon.</p>
        )}
      </div>
    </div>
  );
}
