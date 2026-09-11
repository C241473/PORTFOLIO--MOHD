import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      category: 'Debate Achievements',
      icon: Trophy,
      badgeColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
      items: [
        { title: 'Champion — Inter-Semester English Debate Competition 2026', desc: 'Spring 2026 Team Winner in Asian Parliamentary Debate format.' },
        { title: 'Debater of the Final — ELLS Debate Tournament 2025', desc: 'Awarded top individual debater of the final match by English Language and Literary Society.' },
        { title: 'University-Level Debate Participant', desc: 'Active participant in multiple inter-university and departmental debate tournaments.' },
      ],
    },
    {
      category: 'Cultural & Literary Achievements',
      icon: Star,
      badgeColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
      items: [
        { title: '2nd Place — Poem Recitation Competition 2026', desc: 'Awarded second prize in Spring Cultural Competition 2026.' },
        { title: 'Prothom Alo Bhasha Protijog Regional Participant', desc: 'Represented in regional round of Prothom Alo Bhasha Protijog (29 April 2018).' },
        { title: 'Literary & Cultural Society Active Member', desc: 'Active contribution to student literary, editorial, and cultural development initiatives.' },
      ],
    },
    {
      category: 'Sports & Martial Arts Achievements',
      icon: Award,
      badgeColor: 'text-teal-400 border-teal-400/30 bg-teal-400/10',
      items: [
        { title: '3rd Place — Mujib Centenary Police Commissioner Cup Karate 2021', desc: 'Bronze medalist in regional martial arts cup.' },
        { title: 'National Karate Competitor 2020', desc: 'Participated in Bangabandhu Birth Centenary 26th National Karate Competition 2020.' },
      ],
    },
  ];

  return (
    <section id="achievements" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Editorial Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">06.</span>
            <span>Honors & Achievements</span>
          </span>
          <span className="tabular shrink-0">06 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Awards & Extracurricular Titles
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 06
          </p>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {achievements.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} className="border border-ink/20 bg-paper/60 p-6 backdrop-blur-md glow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-ink/15 pb-4 mb-6">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-sm border ${cat.badgeColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-ink">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-ink/10 pb-3 last:border-b-0">
                      <h4 className="font-serif text-base font-semibold text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-ink-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
