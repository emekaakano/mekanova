import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Mekano. Building in public.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link href="/journey" className="hover:text-violet-600 transition-colors">
            Journey
          </Link>
          <Link href="/projects" className="hover:text-violet-600 transition-colors">
            Projects
          </Link>
          <a
            href="https://github.com/emekaakano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/emekaakano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
