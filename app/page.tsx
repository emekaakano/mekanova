import Link from 'next/link';
import JournalCard from '@/components/JournalCard';
import ProjectCard from '@/components/ProjectCard';
import { getAllEntries } from '@/lib/journal';
import { projects } from '@/lib/projects';

export default function HomePage() {
  const recentEntries = getAllEntries().slice(0, 3);
  const featuredProject = projects.find((p) => p.featured);

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Digital Transformation · AI in Practice
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
            I help businesses cut through the AI hype and put it to{' '}
            <span className="text-violet-400">real work</span>
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-slate-400 text-balance">
            Better processes. Real efficiency. Outcomes that actually matter. Follow the
            build-in-public journey — or hire me to bring it to your team.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/journey"
              className="rounded-xl bg-violet-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Read the Journey
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-600 px-8 py-3.5 font-semibold text-slate-300 transition-colors hover:border-violet-500 hover:text-white"
            >
              Work With Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Featured Project</h2>
              <Link
                href="/projects"
                className="text-sm font-medium text-violet-600 hover:text-violet-500"
              >
                All projects →
              </Link>
            </div>
            <ProjectCard project={featuredProject} />
          </div>
        </section>
      )}

      {/* Recent Journal Entries */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Recent From the Journey</h2>
            <Link
              href="/journey"
              className="text-sm font-medium text-violet-600 hover:text-violet-500"
            >
              All entries →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentEntries.map((entry) => (
              <JournalCard key={entry.slug} {...entry} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
