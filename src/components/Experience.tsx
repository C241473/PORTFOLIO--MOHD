import React from 'react';
import { Newspaper, Monitor, MapPin, Check } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Staff Reporter',
      company: 'Khabar 24 Ghonta',
      period: 'Active Journalism',
      location: 'Chattogram, Bangladesh',
      badge: 'Press & Media',
      tasks: [
        'Gathered, verified, and reported breaking news and feature stories from multiple authentic sources.',
        'Conducted key interviews with local figures, academics, and public representatives for news packages.',
        'Developed rigorous investigative reporting, newsroom communication, and editorial writing skills.',
      ],
    },
    {
      role: 'Sales & Computer Operator',
      company: 'Easy Solution',
      period: 'Operations & Service',
      location: 'Chattogram, Bangladesh',
      badge: 'Client Support',
      tasks: [
        'Assisted clients with high-precision document editing, printing, scanning, and desktop publishing.',
        'Managed daily inventory sales, stationery bookkeeping, and administrative customer support.',
        'Maintained operational logs, ensuring smooth workflow and immediate resolution of client requests.',
      ],
    },
  ];

  return (
    <section id="experience" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Editorial Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">02.</span>
            <span>Professional Experience</span>
          </span>
          <span className="tabular shrink-0">02 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Journalism & Operational Roles
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 02
          </p>
        </div>
      </header>

      {/* Experience Stack */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative border border-ink/20 bg-paper/60 p-6 md:p-8 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:shadow-xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-ink/15 pb-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-emerald-400/15 text-emerald-400 border border-emerald-400/30">
                  {idx === 0 ? <Newspaper className="h-6 w-6" /> : <Monitor className="h-6 w-6" />}
                </div>
                <div>
                  <span className="inline-block font-mono text-[0.65rem] uppercase tracking-editorial text-emerald-400 font-semibold">
                    {exp.badge}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-ink">
                    {exp.role}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-ink-muted">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-ink-muted">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-400/10 px-3 py-1 border border-emerald-400/20">
                  <MapPin className="h-3.5 w-3.5" /> {exp.location}
                </span>
                <span className="text-[0.7rem] text-ink-muted/80">{exp.period}</span>
              </div>
            </div>

            {/* Task list */}
            <ul className="mt-6 space-y-3 text-xs text-ink-muted">
              {exp.tasks.map((t, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
