import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Fallback direct mailto execution
    const subject = encodeURIComponent(`Internship Opportunity / Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.open(`mailto:${RESUME_DATA.candidate.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600/10 border border-crimson-500/30 text-crimson-400 text-xs font-mono uppercase tracking-widest">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready for high-impact software engineering roles.
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Seeking upcoming Software Engineering and Creative Tech internships. Available for technical discussions, project collaborations, and design reviews.
            </p>

            {/* Quick Contact Link Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${RESUME_DATA.candidate.email}`}
                className="flex items-center justify-between p-4 rounded-xl glass-card border border-neutral-800 hover:border-crimson-500/60 group transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-crimson-600/20 text-crimson-400 group-hover:bg-crimson-600 group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-neutral-400">Direct Email</p>
                    <p className="text-sm font-semibold text-white group-hover:text-crimson-400 transition">{RESUME_DATA.candidate.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-crimson-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <a
                href={RESUME_DATA.candidate.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass-card border border-neutral-800 hover:border-crimson-500/60 group transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-neutral-400">Professional Network</p>
                    <p className="text-sm font-semibold text-white group-hover:text-crimson-400 transition">LinkedIn / nagendran-murugan</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-crimson-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <a
                href={RESUME_DATA.candidate.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass-card border border-neutral-800 hover:border-crimson-500/60 group transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-300 group-hover:bg-neutral-700 group-hover:text-white transition">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-neutral-400">Code Repositories</p>
                    <p className="text-sm font-semibold text-white group-hover:text-crimson-400 transition">GitHub / Nagen4230</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-crimson-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill in the details below to initiate direct email contact with Nagendran.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-crimson-600/10 border border-crimson-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-crimson-600/20 text-crimson-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Email Client Opened!</h4>
                  <p className="text-xs text-neutral-300">
                    Your message has been pre-filled. If it didn't trigger automatically, please reach out directly at {RESUME_DATA.candidate.email}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-gold-400 underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        Your Name / Recruiter Company
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Jane Doe / Tech Recruiter"
                        className="w-full bg-obsidian-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-crimson-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-obsidian-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-crimson-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5">
                      Message / Internship Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Nagendran, we reviewed your Universiti Malaya background and projects..."
                      className="w-full bg-obsidian-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-crimson-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Nagendran</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
