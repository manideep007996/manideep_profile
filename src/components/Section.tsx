import type { ReactNode } from 'react';
import { navItems } from '../data/portfolio';

interface SectionProps {
  id: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

/** Shared section shell: numbered eyebrow, gradient rule, heading and optional lede. */
export default function Section({ id, title, lede, children }: SectionProps) {
  const index = navItems.findIndex((item) => item.id === id);
  const eyebrow = navItems[index]?.label ?? title;

  return (
    <section id={id} className="section-pad" aria-labelledby={`${id}-heading`}>
      <div className="wrap">
        <header className="mb-11">
          <p className="mb-3 flex items-center gap-3 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-sand">
            {index >= 0 && <span>{String(index + 1).padStart(2, '0')}</span>}
            <span aria-hidden="true" className="grad-bg h-px w-10 opacity-80" />
            <span className="text-muted">{eyebrow}</span>
          </p>
          <h2 id={`${id}-heading`} className="text-fluid-2xl font-bold">
            {title}
          </h2>
          {lede && <p className="mt-3 max-w-[56ch] text-muted">{lede}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
