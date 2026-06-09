import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

const statusStyles: Record<Project['status'], string> = {
  live: 'bg-green-50 text-green-700',
  'in-progress': 'bg-amber-50 text-amber-700',
  concept: 'bg-slate-100 text-slate-600',
};

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  'in-progress': 'In Progress',
  concept: 'Concept',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <span
          className={`ml-3 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-600"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
