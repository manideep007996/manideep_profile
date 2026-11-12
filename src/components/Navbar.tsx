import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import type { Theme } from '../hooks/useTheme';

const SECTION_IDS = navItems.map((item) => item.id);

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled();

  // Close the drawer when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 880) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-3">
      <div className="wrap">
      <div
        className={`flex h-[60px] items-center gap-4 rounded-full border px-3 pl-4 backdrop-blur-xl transition-all ${
          scrolled ? 'border-line shadow-card' : 'border-line-2'
        }`}
        style={{ backgroundColor: scrolled ? 'color-mix(in srgb, var(--surface) 82%, transparent)' : 'color-mix(in srgb, var(--surface) 55%, transparent)' }}
      >
        <a href="#top" className="mr-auto flex items-center gap-[10px]" aria-label={`${profile.displayName}, home`}>
          <span
            aria-hidden="true"
            className="grad-bg grid h-[34px] w-[34px] place-items-center rounded-full text-[0.74rem] font-bold text-white"
          >
            GM
          </span>
          <span className="text-[0.97rem] font-bold tracking-tight">{profile.displayName}</span>
        </a>

        <nav className="hidden items-center gap-[2px] min-[880px]:flex" aria-label="Sections">
          {navItems.map((item) => {
            const current = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={current ? 'true' : undefined}
                className={`rounded-full px-[13px] py-[7px] text-[0.88rem] transition hover:text-ink ${
                  current ? 'bg-sand-soft font-semibold text-sand' : 'text-ink-2 hover:bg-surface-2'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="icon-btn"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>

          <a className="btn btn-primary btn-sm hidden sm:inline-flex" href={profile.resumePath} download>
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="icon-btn min-[880px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
      </div>

      {open && (
        <div id="mobile-drawer" className="wrap mt-2 min-[880px]:hidden">
          <ul className="rounded-2xl border border-line bg-surface px-4 py-2 shadow-card">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-2 px-1 py-[13px] text-[1.02rem] last:border-b-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
