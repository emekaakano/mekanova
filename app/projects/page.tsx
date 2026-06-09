import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export const metadata = {
  title: 'Projects — Mekanova',
  description: 'A growing collection of AI-powered projects built and shipped in public.',
};

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">Projects</h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Every project here was built using AI-assisted development — Claude Code, rapid
            iteration, and a willingness to ship before it&apos;s perfect. Each one is a chapter
            in the build-in-public story.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
