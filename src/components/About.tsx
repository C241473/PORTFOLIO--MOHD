import React from 'react';
import { Newspaper, BookOpen, MessageSquare, Award } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Academic Standing', value: '8th Sem', sub: 'BA (Hons) ELL at IIUC' },
    { label: 'Debate Champion', value: '01st', sub: 'Inter-Sem English Debate 2026' },
    { label: 'Published News', value: '100+', sub: 'Reports at Khabar 24 Ghonta' },
    { label: 'Cultural & Sports', value: '04+', sub: 'Recitation & Karate Medals' },
  ];

  const competencies = [
    {
      title: 'Investigative News Reporting',
      desc: 'Hands-on experience as Staff Reporter gathering multi-source news, conducting interviews, writing press reports, and adhering to strict journalistic ethics.',
      icon: Newspaper,
    },
    {
      title: 'English Literary & Critical Analysis',
      desc: 'Pursuing BA (Hons) in English Language & Literature, mastering textual criticism, linguistic structures, research methodology, and academic prose.',
      icon: BookOpen,
    },
    {
      title: 'Parliamentary Debate & Rhetoric',
      desc: 'Champion debater in Asian Parliamentary formats, skilled in logical argumentation, impromptu speech, rebuttal structure, and public discourse.',
      icon: MessageSquare,
    },
    {
      title: 'Media & Event Coordination',
      desc: 'Experienced in organizing university seminars, literary society workshops, social media content management, and public relation activities.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Section Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">01.</span>
            <span>About / Professional Profile</span>
          </span>
          <span className="tabular shrink-0">01 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Literary Rigor & Press Excellence
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 01
          </p>
        </div>
      </header>

      {/* Main Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg">
          <p>
            I am <strong className="text-ink font-semibold">Mohd Tanzirul Ahsan</strong>, a dedicated undergraduate student of <span className="text-emerald-400 font-medium">English Language & Literature</span> at International Islamic University Chittagong (IIUC).
          </p>
          <p>
            My background combines <span className="text-ink font-medium">active journalism</span> as a Staff Reporter for <em>Khabar 24 Ghonta</em> with competitive parliamentary debate, research reporting, and public speaking. I thrive at the intersection of media, literature, and analytical discourse.
          </p>
          <p>
            Whether researching complex academic topics, investigating news stories under tight deadlines, competing in debate tournaments, or crafting engaging content, I bring clarity, articulation, and dedication to every project.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border border-ink/15 bg-paper/70 p-5 backdrop-blur-sm transition-all hover:border-emerald-400/50 hover:shadow-lg"
            >
              <div className="font-serif text-3xl font-bold text-emerald-400 sm:text-4xl">
                {item.value}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ink font-semibold">
                {item.label}
              </div>
              <div className="mt-1 font-mono text-[0.6rem] text-ink-muted">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Competencies */}
      <div className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-editorial text-ink-muted mb-6">
          Key Academic & Professional Pillars
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group border border-ink/15 bg-paper/50 p-6 transition-all hover:border-emerald-400/40 hover:bg-paper/90 glow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-emerald-400/10 text-emerald-400 mb-4 group-hover:bg-emerald-400 group-hover:text-black transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-ink group-hover:text-emerald-400 transition-colors">
                  {s.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
