import React, { useState } from 'react';
import { Sun, Moon, Mail, Menu, X } from 'lucide-react';
import { LinkedinIcon } from './Icons';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'journalism', label: 'Press & Media' },
    { id: 'achievements', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav className="fixed inset-x-0 top-6 z-50 hidden lg:flex flex-col items-center gap-2 px-4 transition-all duration-300">
        <div className="relative flex items-center gap-4 rounded-full border border-ink/20 bg-paper/75 px-5 py-2.5 backdrop-blur-xl backdrop-saturate-150 shadow-2xl">
          {/* Brand Badge */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2.5 border-r border-ink/15 pr-4 group text-left cursor-pointer"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 font-mono text-xs font-bold text-emerald-400 transition-transform group-hover:scale-105">
              MTA
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-sm font-semibold tracking-tight text-ink group-hover:text-emerald-400 transition-colors">
                Tanzirul Ahsan
              </span>
              <span className="font-mono text-[0.55rem] uppercase tracking-editorial text-ink-muted">
                English Scholar & Reporter
              </span>
            </span>
          </button>

          {/* Navigation Links */}
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative flex items-center gap-1 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-emerald-400 font-semibold'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    <span className={`text-[0.55rem] ${isActive ? 'text-emerald-400' : 'text-ink-muted/50'}`}>·</span>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-400 rounded-full" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-ink/15 mx-1" />

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://www.linkedin.com/in/mohd-tanzirul-ahsan-007232390/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-emerald-400/15 hover:text-emerald-400"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:tanzirulahsan@gmail.com"
              title="Email Tanzirul Ahsan"
              className="flex h-7 w-7 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-emerald-400/15 hover:text-emerald-400"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="flex h-7 w-7 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-emerald-400/15 hover:text-emerald-400 cursor-pointer"
            >
              {isDark ? <Sun className="h-3.5 w-3.5 text-amber-400" /> : <Moon className="h-3.5 w-3.5 text-emerald-600" />}
            </button>
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper/60 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-editorial text-ink-muted backdrop-blur-md shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            Available for Journalism, Content & Academic Opportunities
          </span>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 flex h-14 items-center justify-between border-b border-ink/15 bg-paper/90 px-4 backdrop-blur-lg">
        <button 
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-left"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400 font-mono text-xs font-bold border border-emerald-400/30">
            MTA
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-sm font-semibold text-ink">Mohd Tanzirul Ahsan</span>
            <span className="font-mono text-[0.55rem] uppercase tracking-wider text-ink-muted">English Scholar & Reporter</span>
          </span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink-muted"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-emerald-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/20 text-ink"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-40 bg-paper/98 backdrop-blur-2xl flex flex-col p-6 overflow-y-auto">
          <div className="flex flex-col gap-4 my-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-serif text-2xl font-medium text-ink hover:text-emerald-400 py-2 border-b border-ink/10 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-emerald-400">→</span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-ink/15 flex flex-col gap-4">
            <div className="flex items-center justify-around">
              <a href="https://www.linkedin.com/in/mohd-tanzirul-ahsan-007232390/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-mono text-xs text-ink-muted hover:text-emerald-400">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              <a href="mailto:tanzirulahsan@gmail.com" className="flex items-center gap-1 font-mono text-xs text-ink-muted hover:text-emerald-400">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>

            <div className="text-center font-mono text-[0.65rem] uppercase tracking-editorial text-ink-muted">
              Chattogram, Bangladesh · +8801773225355
            </div>
          </div>
        </div>
      )}
    </>
  );
};
