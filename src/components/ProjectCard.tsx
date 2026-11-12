import { SquareArrowOutUpRight } from 'lucide-react';
import type { Project } from '../data/types';
import ChipList from './ChipList';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

/**
 * The whole card is clickable, but the accessible control is a real <button>
 * whose ::after covers the card — block content inside a <button> is invalid.
 */
export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article
      className="group card card-hover relative grid cursor-pointer gap-[22px] overflow-hidden p-[22px]
                 min-[860px]:grid-cols-[minmax(0,1fr)_250px] min-[860px]:gap-[34px] min-[860px]:px-[30px] min-[860px]:py-7
                 [&:has(button:focus-visible)]:shadow-[0_0_0_2px_var(--bg),0_0_0_4px_var(--sand)]"
    >
      <span
        aria-hidden="true"
        className="grad-bg absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
      />
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-[10px] text-[0.84rem] text-muted">
          <span className="rounded-full border border-line bg-azure-soft px-[10px] py-[3px] text-[0.74rem] font-medium text-azure">
            {project.tag}
          </span>
          <span className="font-mono text-[0.78rem]">{project.when}</span>
        </div>

        <h3 className="text-fluid-xl font-bold tracking-[-0.03em] transition group-hover:text-sand">{project.name}</h3>
        <p className="mt-[6px] text-[0.9rem] text-muted">{project.client}</p>
        <p className="mt-[14px] max-w-[62ch] text-[0.95rem] text-ink-2">{project.summary}</p>

        <ChipList items={project.stack.slice(0, 8)} className="mt-[18px]" />

        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-haspopup="dialog"
          className="mt-5 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-sand
                     after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:shadow-none"
        >
          Read case study<span className="sr-only"> for {project.name}</span>
          <SquareArrowOutUpRight size={15} className="opacity-75" aria-hidden="true" />
        </button>
      </div>

      <dl className="grid gap-2 self-start">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-line-2 bg-bg-2 px-4 py-3">
            <dt className="grad-text text-[1.32rem] font-bold tracking-[-0.03em]">{metric.value}</dt>
            <dd className="mt-[2px] text-[0.78rem] leading-snug text-muted">{metric.label}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
