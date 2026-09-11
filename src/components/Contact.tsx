import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, User } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00e676', '#f59e0b', '#051410', '#ffffff'],
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('tanzirulahsan@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText('+8801773225355');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-20">
      {/* Header */}
      <header className="mb-12 w-full text-left">
        <div className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-editorial text-ink-muted">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">07.</span>
            <span>Contact & Inquiries</span>
          </span>
          <span className="tabular shrink-0">07 / 08</span>
        </div>
        <div className="mt-3 h-px w-full rule-strong" />

        <div className="mt-6 flex flex-col gap-3 items-start md:flex-row md:items-end md:justify-between">
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            Connect with Tanzirul
          </h2>
          <p className="font-mono text-xs uppercase tracking-editorial text-emerald-400">
            Nº 07
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form */}
        <div className="lg:col-span-7 border border-ink/20 bg-paper/60 p-6 md:p-8 backdrop-blur-md">
          <h3 className="font-serif text-2xl font-medium text-ink mb-2">
            Send a Direct Message
          </h3>
          <p className="font-mono text-xs text-ink-muted mb-6">
            Open for Journalism, Content Writing, Research, and Editorial Opportunities.
          </p>

          {submitted ? (
            <div className="p-6 border border-emerald-500/40 bg-emerald-500/10 rounded-sm text-center animate-in zoom-in-95 duration-300">
              <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-serif text-2xl font-medium text-ink">
                Transmission Delivered!
              </h4>
              <p className="mt-2 text-xs text-ink-muted leading-relaxed max-w-md mx-auto">
                Thank you for reaching out, <strong className="text-ink">{formData.name}</strong>. Tanzirul Ahsan will respond to your inquiry shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-6 inline-flex items-center gap-2 border border-ink/25 px-5 py-2.5 font-mono text-xs uppercase tracking-editorial text-ink hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[0.65rem] uppercase tracking-editorial text-ink-muted mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-ink/20 bg-paper/80 px-4 py-2.5 font-sans text-xs text-ink placeholder:text-ink-muted/50 focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[0.65rem] uppercase tracking-editorial text-ink-muted mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-ink/20 bg-paper/80 px-4 py-2.5 font-sans text-xs text-ink placeholder:text-ink-muted/50 focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[0.65rem] uppercase tracking-editorial text-ink-muted mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Journalism / Content Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-ink/20 bg-paper/80 px-4 py-2.5 font-sans text-xs text-ink placeholder:text-ink-muted/50 focus:border-emerald-400 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[0.65rem] uppercase tracking-editorial text-ink-muted mb-1">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-ink/20 bg-paper/80 px-4 py-2.5 font-sans text-xs text-ink placeholder:text-ink-muted/50 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-editorial text-paper hover:bg-emerald-500 transition-all shadow-lg cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-ink/20 bg-paper/60 p-6 backdrop-blur-md">
            <h3 className="font-serif text-xl font-medium text-ink mb-4 border-b border-ink/15 pb-3">
              Direct Contact & Information
            </h3>

            <div className="space-y-3 font-mono text-xs">
              {/* Phone */}
              <div className="flex items-center justify-between p-3 border border-ink/10 bg-paper/40 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[0.6rem] uppercase text-ink-muted">Phone / Mobile</div>
                    <a href="tel:+8801773225355" className="text-ink font-semibold hover:text-emerald-400">
                      +8801773225355
                    </a>
                  </div>
                </div>
                <button onClick={copyPhone} className="text-ink-muted hover:text-emerald-400 p-1 cursor-pointer">
                  {copiedPhone ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 border border-ink/10 bg-paper/40 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[0.6rem] uppercase text-ink-muted">Email Address</div>
                    <a href="mailto:tanzirulahsan@gmail.com" className="text-ink font-semibold hover:text-emerald-400">
                      tanzirulahsan@gmail.com
                    </a>
                  </div>
                </div>
                <button onClick={copyEmail} className="text-ink-muted hover:text-emerald-400 p-1 cursor-pointer">
                  {copiedEmail ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 border border-ink/10 bg-paper/40">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[0.6rem] uppercase text-ink-muted">Address</div>
                  <span className="text-ink font-semibold">Tankir Pahar Road, Lalkhan Bazar, Chattogram</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-4 border-t border-ink/15">
              <a
                href="https://linkedin.com/in/tanzir-ahsan-007232390"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-ink/20 py-2.5 font-mono text-xs uppercase tracking-wider text-ink hover:border-emerald-400 hover:text-emerald-400 transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Personal Record Box */}
          <div className="border border-emerald-400/30 bg-emerald-400/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-editorial text-emerald-400 font-semibold mb-3">
              <User className="h-4 w-4" />
              Personal Profile Details
            </div>
            <div className="space-y-2 font-mono text-xs text-ink-muted">
              <div className="flex justify-between border-b border-ink/10 pb-1">
                <span>Date of Birth:</span>
                <span className="text-ink font-medium">02 October 2003</span>
              </div>
              <div className="flex justify-between">
                <span>Nationality:</span>
                <span className="text-ink font-medium">Bangladeshi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
