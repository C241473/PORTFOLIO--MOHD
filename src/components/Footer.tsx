import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-ink/15 bg-paper/80 py-12 px-4 font-mono text-xs text-ink-muted">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2 font-serif text-lg font-medium text-ink">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Mohd Tanzirul Ahsan
          </div>
          <p className="text-[0.68rem] text-ink-muted/80">
            BA (Hons) English Literature · Staff Reporter · Debate Champion
          </p>
        </div>

        {/* Center: Live Dhaka/Chattogram Time */}
        <div className="flex items-center gap-2 border border-ink/15 px-4 py-2 bg-paper/50">
          <Clock className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-[0.68rem] uppercase tracking-wider">
            Chattogram, BD (GMT+6): <strong className="text-ink">{time || '01:20 PM'}</strong>
          </span>
        </div>

        {/* Right Column: Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[0.65rem] uppercase tracking-editorial text-ink-muted/70">
            © 2026 All Rights Reserved
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center border border-ink/20 text-ink transition-all hover:border-emerald-400 hover:text-emerald-400 hover:-translate-y-1 cursor-pointer"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
