import { useState } from 'react';
import { skillGroups } from '../data/portfolio';
import ChipList from './ChipList';
import Section from './Section';

export default function Skills() {
  const [filter, setFilter] = useState<string>('all');
  const visible = filter === 'all' ? skillGroups : skillGroups.filter((g) => g.id === filter);

  return (
    <Section id="skills" title="Technical skills" lede="Filter by area, or view everything at once.">
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter skills by area">
        {[{ id: 'all', name: 'All' }, ...skillGroups].map((group) => {
          const pressed = filter === group.id;
          return (
            <button
              key={group.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(group.id)}
              className={`rounded-full border px-[14px] py-2 text-[0.85rem] transition ${
                pressed
                  ? 'grad-bg border-transparent font-semibold text-white dark:text-[#0c0818]'
                  : 'border-line text-ink-2 hover:border-sand hover:text-ink'
              }`}
            >
              {group.name}
            </button>
          );
        })}
      </div>

      <div className="grid gap-[14px] [grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr))]">
        {visible.map((group) => {
          const Icon = group.icon;
          return (
            <article key={group.id} className="card card-hover p-5">
              <h3 className="mb-4 flex items-center gap-3 text-[0.98rem] font-bold">
                <span className="icon-tile" aria-hidden="true">
                  <Icon size={18} />
                </span>
                {group.name}
              </h3>
              <ChipList items={group.items} primary={group.primary} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}
