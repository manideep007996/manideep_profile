import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';
import BulletList from './BulletList';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" title="Where I've worked">
      <ol className="relative space-y-8 pl-[34px] before:absolute before:bottom-6 before:left-[13px] before:top-6 before:w-[2px] before:rounded-full before:bg-[image:var(--grad)] before:opacity-40 before:content-['']">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="grad-bg absolute -left-[34px] top-5 grid h-7 w-7 place-items-center rounded-full text-white shadow-card dark:text-[#0c0818]"
            >
              <Briefcase size={14} />
            </span>

            <article className="card card-hover p-5 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-fluid-lg font-bold">{job.role}</h3>
                  <p className="mt-1 text-[0.92rem] font-semibold text-sand">
                    {job.company} <span className="font-normal text-muted">· {job.where}</span>
                  </p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[0.76rem] text-ink-2">
                  {job.when}
                </span>
              </div>

              {job.projects.map((project) => (
                <div key={project.name} className="mt-6 rounded-xl border border-line-2 bg-bg-2 p-4 md:p-5">
                  <h4 className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[0.97rem] font-semibold">
                    {project.name}
                    <span className="font-mono text-[0.76rem] font-normal text-muted">{project.when}</span>
                  </h4>
                  <div className="mt-3">
                    <BulletList items={project.bullets} />
                  </div>
                </div>
              ))}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
