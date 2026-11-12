import { profile } from '../data/portfolio';

/**
 * Decorative hero card: a small code editor showing a developer profile object.
 * Purely visual, hidden from assistive tech by the parent.
 */
const K = ({ children }: { children: string }) => <span className="text-sand">{children}</span>;
const S = ({ children }: { children: string }) => <span className="text-azure">'{children}'</span>;
const P = ({ children }: { children: string }) => <span className="text-ink">{children}</span>;
const C = ({ children }: { children: string }) => <span className="italic text-muted">{children}</span>;

export default function HeroStack() {
  const lines = [
    <>
      <K>const</K> <P>developer</P> = {'{'}
    </>,
    <>
      {'  '}name: <S>{profile.displayName}</S>,
    </>,
    <>
      {'  '}role: <S>{profile.title}</S>,
    </>,
    <>
      {'  '}experience: <span className="text-sand">5</span>, <C>{'// years'}</C>
    </>,
    <>
      {'  '}frontend: [<S>React</S>, <S>Redux</S>, <S>TypeScript</S>],
    </>,
    <>
      {'  '}backend: [<S>Node.js</S>, <S>Express</S>, <S>GraphQL</S>],
    </>,
    <>
      {'  '}builds: [<S>dashboards</S>, <S>GIS maps</S>],
    </>,
    <>
      {'  '}location: <S>Hyderabad</S>,
    </>,
    <>
      {'  '}openToWork: <K>true</K>,
    </>,
    <>{'};'}</>,
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-line-2 bg-bg-2">
      <div className="flex items-center gap-2 border-b border-line-2 px-4 py-3">
        <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
        <span className="ml-3 rounded-md bg-surface-2 px-[10px] py-[3px] font-mono text-[0.72rem] text-ink-2">
          developer.ts
        </span>
      </div>
      <pre className="overflow-x-auto px-3 py-4 font-mono text-[0.66rem] leading-[1.85] text-ink-2 sm:px-4 sm:text-[0.82rem]">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="mr-4 hidden w-5 select-none text-right text-muted opacity-50 sm:inline">{i + 1}</span>
            <code className="whitespace-pre">
              {line}
              {i === lines.length - 1 && (
                <span className="ml-1 inline-block h-[1.05em] w-[7px] translate-y-[3px] animate-blink bg-sand" />
              )}
            </code>
          </div>
        ))}
      </pre>
    </div>
  );
}
