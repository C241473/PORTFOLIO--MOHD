import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'BA (Honours) in English Language & Literature',
      institution: 'International Islamic University Chittagong (IIUC)',
      period: 'Running (7th Semester)',
      score: 'CGPA: 2.75',
      badgeColor: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
      highlights: [
        'Specializing in Linguistics, World Literature, Literary Criticism, and Research Methodology.',
        'Active debater & member of the English Language and Literary Society (ELLS).',
        'Organized research seminars and workshops on journalism skills.',
      ],
    },
    {
      degree: 'Alim (Higher Secondary Certificate)',
      institution: 'Jameya Ahmadia Sunnia Kamil Madrasah',
      period: 'Year: 2021',
      score: 'GPA: 4.93 / 5.00',
      badgeColor: 'text-amber-400 border-amber-400/40 bg-amber-400/10',
      highlights: [
        'Achieved outstanding GPA of 4.93 out of 5.00.',
        'Strong foundation in Humanities, Arabic Literature, and General Studies.',
      ],
    },
    {
      degree: 'Dakhil (Secondary School Certificate)',
      institution: 'Jameya Ahmadia Sunnia Kamil Madrasah',
      period: 'Year: 2019',
      score: 'GPA: 4.81 / 5.00',
      badgeColor: 'text-teal-400 border-teal-400/40 bg-teal-400/10',
      highlights: [
        'Achieved GPA 4.81 out of 5.00 in general humanities curriculum.',
        'Extracurricular participation in debate, recitation, and sports.',
      ],
    },
  ];

  return (
    <section id="education" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Editorial Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">03.</span>
            <span>Education & Academic Standing</span>
          </span>
          <span className="tabular shrink-0">03 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Academic Background
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 03
          </p>
        </div>
      </header>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationList.map((item, index) => (
          <div
            key={index}
            className="group relative border border-ink/20 bg-paper/60 p-6 md:p-8 backdrop-blur-md transition-all hover:border-emerald-400/50 hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-ink/15 pb-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-ink group-hover:text-emerald-400 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-ink-muted">
                    {item.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="inline-flex items-center gap-1 text-ink-muted bg-ink/5 px-3 py-1 border border-ink/10">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.period}
                </span>
                <span className={`inline-flex items-center gap-1 font-bold px-3 py-1 border ${item.badgeColor}`}>
                  <Award className="h-3.5 w-3.5" />
                  {item.score}
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-xs text-ink-muted">
              {item.highlights.map((h, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
