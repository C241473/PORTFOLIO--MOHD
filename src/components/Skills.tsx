import React, { useState } from 'react';
import { Newspaper, Palette, Mic, Globe } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'journalism' | 'design' | 'speaking'>('all');

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'journalism', label: 'Journalism & Research' },
    { id: 'design', label: 'Media & Software' },
    { id: 'speaking', label: 'Debate & Public Speaking' },
  ];

  const journalismSkills = [
    { name: 'News Reporting & Journalism', level: 95, exp: 'Advanced' },
    { name: 'Content & Feature Writing', level: 92, exp: 'Advanced' },
    { name: 'Report Writing & Proofreading', level: 90, exp: 'Advanced' },
    { name: 'Research & Data Collection', level: 88, exp: 'Proficient' },
    { name: 'Interviewing & Verification', level: 90, exp: 'Advanced' },
  ];

  const designSkills = [
    { name: 'Canva Design & Graphics', level: 85, exp: 'Proficient' },
    { name: 'Adobe Illustrator', level: 75, exp: 'Intermediate' },
    { name: 'MS Word, Excel & PowerPoint', level: 92, exp: 'Advanced' },
    { name: 'Social Media Management', level: 88, exp: 'Proficient' },
  ];

  const speakingSkills = [
    { name: 'Asian Parliamentary Debate', level: 95, exp: 'Champion' },
    { name: 'Public Speaking & Presentation', level: 92, exp: 'Advanced' },
    { name: 'Poem Recitation & Cultural', level: 90, exp: 'Awarded' },
    { name: 'Teamwork, Event & Leadership', level: 90, exp: 'Advanced' },
  ];

  return (
    <section id="skills" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Editorial Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">04.</span>
            <span>Literary & Journalism Toolkit</span>
          </span>
          <span className="tabular shrink-0">04 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Skills & Software Matrix
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 04
          </p>
        </div>
      </header>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as any)}
            className={`px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-emerald-500 text-black font-semibold shadow-md'
                : 'border border-ink/20 text-ink-muted hover:border-emerald-400/50 hover:text-emerald-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        {(activeCategory === 'all' || activeCategory === 'journalism') && (
          <div className="border border-ink/20 bg-paper/60 p-6 backdrop-blur-md glow-card">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-400/15 text-emerald-400">
                <Newspaper className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink">
                  Journalism & Writing
                </h3>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-muted">
                  Reporting & Research
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {journalismSkills.map((s, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-mono text-xs mb-1">
                    <span className="text-ink font-medium">{s.name}</span>
                    <span className="text-emerald-400">{s.exp}</span>
                  </div>
                  <div className="h-1.5 w-full bg-ink/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-emerald-400 to-amber-400 transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Column 2 */}
        {(activeCategory === 'all' || activeCategory === 'design') && (
          <div className="border border-ink/20 bg-paper/60 p-6 backdrop-blur-md glow-card">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-400/15 text-emerald-400">
                <Palette className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink">
                  Media & Software Tools
                </h3>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-muted">
                  Illustrator, Canva & Office
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {designSkills.map((s, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-mono text-xs mb-1">
                    <span className="text-ink font-medium">{s.name}</span>
                    <span className="text-emerald-400">{s.exp}</span>
                  </div>
                  <div className="h-1.5 w-full bg-ink/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-emerald-400 to-amber-400 transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Column 3 */}
        {(activeCategory === 'all' || activeCategory === 'speaking') && (
          <div className="border border-ink/20 bg-paper/60 p-6 backdrop-blur-md glow-card">
            <div className="flex items-center gap-3 border-b border-ink/15 pb-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-400/15 text-emerald-400">
                <Mic className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-ink">
                  Debate & Public Speaking
                </h3>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-ink-muted">
                  Rhetoric & Leadership
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {speakingSkills.map((s, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-mono text-xs mb-1">
                    <span className="text-ink font-medium">{s.name}</span>
                    <span className="text-emerald-400">{s.exp}</span>
                  </div>
                  <div className="h-1.5 w-full bg-ink/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-emerald-400 to-amber-400 transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Languages Box */}
      <div className="mt-10 border border-ink/15 bg-paper/40 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Globe className="h-5 w-5 text-emerald-400" />
          <div>
            <h4 className="font-serif text-lg font-medium text-ink">Language Proficiency</h4>
            <p className="font-mono text-xs text-ink-muted">Bilingual fluency in academic and professional settings</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 rounded-full">
            Bangla: Native
          </span>
          <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/30 text-amber-400 rounded-full">
            English: Professional Working Proficiency
          </span>
        </div>
      </div>
    </section>
  );
};
