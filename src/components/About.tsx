import { aboutFacts, aboutParagraphs } from '../data/portfolio';
import Emphasis from './Emphasis';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" title="A bit about me">
      <div className="grid gap-10 min-[900px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] min-[900px]:gap-16">
        <div className="space-y-[18px]">
          {aboutParagraphs.map((para) => (
            <p key={para.slice(0, 40)} className="max-w-[66ch] text-ink-2">
              <Emphasis text={para} />
            </p>
          ))}
        </div>

        <dl className="grad-border grid self-start gap-[2px] rounded-2xl p-2 shadow-card sm:grid-cols-2 min-[900px]:grid-cols-1">
          {aboutFacts.map((fact) => (
            <div key={fact.term} className="rounded-xl px-4 py-3 transition hover:bg-surface-2">
              <dt className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-sand">{fact.term}</dt>
              <dd className="mt-1 text-[0.93rem] font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
