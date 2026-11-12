import { highlights } from '../data/portfolio';
import Section from './Section';

export default function TechnicalHighlights() {
  return (
    <Section
      id="highlights"
      title="Engineering highlights"
      lede="The problems I have solved, rather than a list of logos."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ icon: Icon, title, body }) => (
          <article key={title} className="card card-hover p-[22px]">
            <span className="icon-tile mb-4" aria-hidden="true">
              <Icon size={18} />
            </span>
            <h3 className="mb-2 text-[1rem] font-bold">{title}</h3>
            <p className="text-[0.88rem] leading-relaxed text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
