import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian-950 border-t border-neutral-900 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-obsidian-900 border border-crimson-600/40 flex items-center justify-center font-mono font-bold text-white text-xs">
              <span className="text-crimson-500">N</span>
              <span className="text-gold-400">M</span>
            </div>
            <div>
              <p className="text-white font-semibold">{RESUME_DATA.candidate.name}</p>
              <p className="text-[11px] font-mono text-neutral-400">
                1st-Year Software Engineering • Universiti Malaya (UM)
              </p>
            </div>
          </div>

          {/* Center: Social & External Links */}
          <div className="flex items-center gap-4">
            <a
              href={RESUME_DATA.candidate.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 transition"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.candidate.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-obsidian-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 transition"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${RESUME_DATA.candidate.email}`}
              className="p-2.5 rounded-xl bg-obsidian-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 transition"
              aria-label="Email Nagendran"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.candidate.resumeUrl}
              download="Nagendran_Murugan_Resume.pdf"
              className="text-xs font-mono px-3 py-2 rounded-xl bg-obsidian-900 hover:bg-neutral-850 text-gold-400 border border-neutral-800 hover:border-gold-500/40 transition"
            >
              Download PDF Resume
            </a>
          </div>

          {/* Right: Floating Return to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian-900 hover:bg-neutral-850 text-neutral-300 hover:text-white border border-neutral-800 hover:border-crimson-500 transition group"
            aria-label="Return to top of page"
          >
            <span className="font-mono text-[11px]">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 text-crimson-500 transition" />
          </button>
        </div>

        {/* Bottom copyright & palette accreditation */}
        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} Nagendran Murugan. Strictly adhering to 60-30-10 Obsidian-Crimson-Gold design.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>Kuala Lumpur, Malaysia (MYT)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
