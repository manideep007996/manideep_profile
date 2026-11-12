import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { heroStats, profile } from '../data/portfolio';
import HeroStack from './HeroStack';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20" aria-labelledby="hero-heading">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] items-center gap-[52px] [&>*]:min-w-0 min-[980px]:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] min-[980px]:gap-14">
        <div>
          <p className="mb-6 inline-flex items-center gap-[10px] rounded-full border border-line bg-surface px-[14px] py-[6px] text-[0.82rem] text-ink-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · {profile.location}
          </p>

          <p className="mb-3 text-fluid-lg font-medium text-ink-2">
            Hi, I&rsquo;m <span className="font-semibold text-ink">{profile.displayName}</span>
          </p>

          <h1 id="hero-heading" className="text-fluid-3xl font-extrabold leading-[1.04] tracking-[-0.04em]">
            <span className="block">{profile.title}</span>
            <span className="grad-text block">{profile.subtitle}</span>
          </h1>

          <p className="mt-6 max-w-[56ch] text-fluid-lg leading-relaxed text-ink-2">
            <strong className="font-semibold text-ink">5 years</strong> building scalable, responsive enterprise web
            applications — React.js, Redux, Node.js and REST/GraphQL APIs behind role-based dashboards, GIS mapping, query
            builders and real-time systems for banking and state government platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects">
              View projects
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn" href={profile.resumePath} download>
              <Download size={17} aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              className="icon-btn"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} aria-hidden="true" />
            </a>
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github size={17} aria-hidden="true" />
            </a>
            <a
              className="inline-flex max-w-full items-center gap-2 break-all text-[0.88rem] text-ink-2 transition hover:text-sand"
              href={`mailto:${profile.email}`}
            >
              <Mail size={16} aria-hidden="true" className="shrink-0" />
              {profile.email}
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="relative">
          <div className="grad-bg absolute -inset-6 rounded-[32px] opacity-20 blur-3xl" />
          <div className="grad-border relative animate-float rounded-2xl p-3 shadow-card">
            <HeroStack />
            <dl className="mt-3 grid grid-cols-3 gap-2">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse rounded-xl border border-line-2 bg-bg-2 px-3 py-3 text-center"
                >
                  <dt className="mt-[2px] text-[0.7rem] text-muted">{stat.label}</dt>
                  <dd className="grad-text text-[1.25rem] font-bold tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
