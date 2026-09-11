import React, { useState } from 'react';
import { ArrowRight, Copy, Check, MapPin, Download } from 'lucide-react';

interface HeroProps {
  onNavigateContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateContact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyContact = () => {
    navigator.clipboard.writeText('tanzirulahsan@gmail.com | +8801773225355');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const skillsPills = [
    'News Reporting',
    'Content Writing',
    'English Literature',
    'Asian Parliamentary Debate',
    'Research & Data',
    'Adobe Illustrator',
    'Public Speaking',
    'Karate Champion',
    'Social Media Mgmt'
  ];

  return (
    <section id="home" className="relative mx-auto w-full max-w-6xl px-4 pt-28 pb-20 md:pt-40 md:pb-28">
      {/* Background ambient lighting glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-112.5 w-112.5 rounded-full bg-emerald-500/8 blur-[100px] dark:bg-emerald-500/12" />
        <div className="absolute -bottom-20 -right-20 h-100 w-100 rounded-full bg-amber-500/5 blur-[120px] dark:bg-amber-500/9" />
      </div>

      {/* Top Editorial Label */}
      <div className="mb-8 font-mono text-[0.68rem] uppercase tracking-editorial text-ink-muted flex items-center gap-2">
        <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full"></span>
        Mohd Tanzirul Ahsan — Literary & Press Portfolio 2026
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400 font-semibold">
            English Literature Scholar · Staff Reporter · Debate Champion
          </p>

          <h1 className="mt-4 font-serif text-5xl font-medium leading-[0.96] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            Mohd<br />
            Tanzirul Ahsan
           
          </h1>

          {/* Accent Line */}
          <div className="mt-6 h-0.5 w-28 bg-linear-to-r from-emerald-400 via-amber-400 to-transparent" />

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Dedicated undergraduate student of <strong className="text-ink font-semibold">English Language & Literature</strong> at IIUC with hands-on experience in <span className="text-emerald-400 font-medium">journalism (Staff Reporter)</span>, academic research, debate championships, and creative content writing.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onNavigateContact}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-editorial text-paper transition-all hover:bg-emerald-500 cursor-pointer shadow-lg hover:shadow-emerald-500/25"
            >
              <span className="relative z-10 flex items-center gap-2 font-medium">
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button
              onClick={handleCopyContact}
              className="group inline-flex items-center justify-center gap-2 border border-ink/25 px-6 py-3.5 font-mono text-xs uppercase tracking-editorial text-ink transition-all hover:border-emerald-400 hover:text-emerald-400 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>Contact Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 opacity-70 group-hover:text-emerald-400" />
                  <span>Copy Direct Contact</span>
                </>
              )}
            </button>

            <a
              href="/mohd-tanzirul-ahsan-cv.html"
              download="Mohd-Tanzirul-Ahsan-CV.html"
              className="group inline-flex items-center justify-center gap-2 border border-amber-400/60 bg-amber-400/10 px-6 py-3.5 font-mono text-xs uppercase tracking-editorial text-amber-500 transition-all hover:border-amber-400 hover:bg-amber-400 hover:text-black cursor-pointer"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Tech/Literary Skills Pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {skillsPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center border border-ink/15 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-ink-muted transition-colors hover:border-emerald-400/50 hover:text-emerald-400 bg-paper/50 backdrop-blur-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Dossier Card */}
        <aside className="lg:col-span-5">
          <div className="group mx-auto w-full max-w-md border border-ink/20 bg-paper/80 backdrop-blur-md transition-all duration-500 hover:border-emerald-400/40 hover:shadow-[0_12px_45px_-15px_rgba(0,230,118,0.25)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/20 px-5 py-3.5 font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted bg-ink/[0.02]">
              <span>Dossier / 001</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                PRESS & DEBATE ACTIVE
              </span>
            </div>

            {/* Pitch */}
            <div className="px-6 py-7">
              <p className="font-serif text-2xl font-medium leading-snug text-ink sm:text-[1.65rem]">
                "I articulate truth through <span className="text-emerald-400 italic">journalism</span>, analytical research, and persuasive debate."
              </p>
            </div>

            {/* Information Grid */}
            <dl className="border-t border-ink/15 divide-y divide-ink/10">
              <div className="flex items-center justify-between px-6 py-3.5 hover:bg-ink/[0.02] transition-colors">
                <dt className="font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted">Education</dt>
                <dd className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">BA (Hons) English (IIUC)</dd>
              </div>

              <div className="flex items-center justify-between px-6 py-3.5 hover:bg-ink/[0.02] transition-colors">
                <dt className="font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted">Press Role</dt>
                <dd className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">Staff Reporter (Khabar 24)</dd>
              </div>

              <div className="flex items-center justify-between px-6 py-3.5 hover:bg-ink/[0.02] transition-colors">
                <dt className="font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted">Debate Title</dt>
                <dd className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">Inter-Sem Champion 2026</dd>
              </div>

              <div className="flex items-center justify-between px-6 py-3.5 hover:bg-ink/[0.02] transition-colors">
                <dt className="font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted">Cultural Award</dt>
                <dd className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold">2nd Recitation 2026</dd>
              </div>

              <div className="flex items-center justify-between px-6 py-3.5 hover:bg-ink/[0.02] transition-colors">
                <dt className="font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted">Status</dt>
                <dd className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Open for opportunities
                </dd>
              </div>
            </dl>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-ink/20 px-6 py-3 font-mono text-[0.62rem] uppercase tracking-editorial text-ink-muted bg-ink/[0.02]">
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-emerald-400" /> Chattogram, BD
              </span>
              <span className="text-emerald-400">22.3569° N, 91.7832° E</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
