import React from 'react';
import { Newspaper, BookOpen, CheckCircle } from 'lucide-react';

export const PressMedia: React.FC = () => {
  const workshops = [
    {
      title: 'Undergraduate Research Seminar',
      org: 'Dept. of English Language & Literature, IIUC',
      type: 'Academic Research',
      desc: 'Participated in advanced academic research methodology, literary analysis, and textual critique presentations.',
    },
    {
      title: "Developing Journalists' Skills Workshop",
      date: '15-10-2023',
      org: 'IIUC Media, Press & Publication Committee (ELLS)',
      type: 'Journalism Training',
      desc: 'Intensive training on newsgathering, media ethics, investigative interviewing, and press release editing.',
    },
    {
      title: 'Basics of Asian Parliamentary Debate',
      org: 'English Language and Literary Society (ELLS)',
      type: 'Debate Rhetoric',
      desc: 'Mastered motion analysis, case construction, speaker roles, and cross-examination in Asian Parliamentary formats.',
    },
  ];

  const pressReports = [
    {
      headline: 'Campus Literary & Academic Developments at IIUC',
      publication: 'Khabar 24 Ghonta',
      category: 'Academic News',
      desc: 'Covered departmental seminars, cultural events, and academic milestones.',
    },
    {
      headline: 'Inter-Departmental Debate Championship Coverage',
      publication: 'Khabar 24 Ghonta',
      category: 'Event Feature',
      desc: 'In-depth reporting on competitive parliamentary debate tournaments.',
    },
    {
      headline: 'Student Welfare & Community Outreach Reports',
      publication: 'Khabar 24 Ghonta',
      category: 'Investigative Report',
      desc: 'Multi-source news stories detailing student initiatives and press updates.',
    },
  ];

  return (
    <section id="journalism" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">05.</span>
            <span>Press & Workshops Archive</span>
          </span>
          <span className="tabular shrink-0">05 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Journalism & Academic Seminars
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 05
          </p>
        </div>
      </header>

      {/* Workshops & Seminars */}
      <div className="mb-12">
        <h3 className="font-mono text-xs uppercase tracking-editorial text-ink-muted mb-6 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-emerald-400" />
          Workshops & Professional Training
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workshops.map((ws, idx) => (
            <div
              key={idx}
              className="border border-ink/20 bg-paper/60 p-6 backdrop-blur-md glow-card flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-emerald-400 font-semibold block mb-2">
                  {ws.type} {ws.date ? `· ${ws.date}` : ''}
                </span>
                <h4 className="font-serif text-xl font-medium text-ink mb-2">
                  {ws.title}
                </h4>
                <p className="font-mono text-[0.68rem] text-ink-muted mb-4">
                  {ws.org}
                </p>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {ws.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-ink/10 flex items-center gap-1 font-mono text-[0.62rem] text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Certified Workshop</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Published Reports Showcase */}
      <div>
        <h3 className="font-mono text-xs uppercase tracking-editorial text-ink-muted mb-6 flex items-center gap-2">
          <Newspaper className="h-4 w-4 text-amber-400" />
          Featured News Reporting (Khabar 24 Ghonta)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressReports.map((rep, idx) => (
            <div
              key={idx}
              className="border border-ink/20 bg-paper/50 p-6 backdrop-blur-sm transition-all hover:border-emerald-400/40 hover:bg-paper/80 glow-card flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[0.6rem] uppercase tracking-wider text-amber-400 font-semibold block mb-2">
                  {rep.category} · {rep.publication}
                </span>
                <h4 className="font-serif text-lg font-medium text-ink mb-2">
                  {rep.headline}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {rep.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-ink/10 flex items-center justify-between font-mono text-[0.62rem] text-ink-muted">
                <span>Staff Reporter</span>
                <span className="text-emerald-400 font-semibold">Published</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
