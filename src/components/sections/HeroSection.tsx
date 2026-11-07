import React from 'react';
import { ArrowRight, Bot, Code2, Film, Download } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';
import { LiveTerminal } from './LiveTerminal';

interface HeroSectionProps {
  onOpenAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAI }) => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-crimson-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Live Status Pill Tag */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900 border border-crimson-600/40 text-xs font-mono text-neutral-300 shadow-[0_0_15px_rgba(220,38,38,0.25)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crimson-600" />
            </span>
            <span className="text-neutral-200 font-semibold">{RESUME_DATA.candidate.status}</span>
            <span className="hidden sm:inline text-neutral-500">• Universiti Malaya (UM)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Picture beside summary + Headline */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineered with <br />
              <span className="bg-gradient-to-r from-crimson-500 via-crimson-600 to-rose-400 bg-clip-text text-transparent glow-text-crimson">
                Computational Rigor
              </span>
              <br />
              & <span className="bg-gradient-to-r from-gold-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent glow-text-gold">Creative Precision</span>.
            </h1>

            {/* Profile Picture placed prominently beside summary */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 rounded-2xl glass-card border border-neutral-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-crimson-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative shrink-0">
                <img
                  src="./images/profile.jpg"
                  alt="Nagendran Murugan"
                  className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl object-cover object-top border-2 border-crimson-500 shadow-[0_0_25px_rgba(220,38,38,0.45)] group-hover:border-gold-400 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-obsidian-950 shadow-sm" title="Available for Internships" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">{RESUME_DATA.candidate.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/30 font-semibold">
                    4.00 CGPA
                  </span>
                </div>
                <p className="text-xs font-mono text-crimson-400">
                  Universiti Malaya • Bachelor of Computer Science (Software Engineering)
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                  High-achieving First-Year Software Engineering student with a disciplined foundation in <strong className="text-gold-400">Python</strong>, expanding into <strong className="text-gold-400">Java</strong> and modern <strong className="text-neutral-200">AI-assisted development tools</strong>, state-level competitive coding winner, and experienced video editor.
                </p>
              </div>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-900 border border-crimson-500/30 text-xs text-neutral-200">
                <Code2 className="w-4 h-4 text-crimson-500" />
                <span className="font-mono">Python • Java (Learning) • AI Tools • Git</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-obsidian-900 border border-gold-500/30 text-xs text-neutral-200">
                <Film className="w-4 h-4 text-gold-400" />
                <span className="font-mono">Video Editing & Motion Graphics</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] transition-all duration-300"
              >
                <span>Explore Interactive Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAI}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-obsidian-900 hover:bg-[#15151c] text-gold-400 border border-gold-500/40 font-semibold text-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:border-gold-400 transition"
              >
                <Bot className="w-4 h-4 text-gold-400" />
                <span>Ask AI Career Assistant</span>
              </button>

              <a
                href={RESUME_DATA.candidate.resumeUrl}
                download="Nagendran_Murugan_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-neutral-400 hover:text-white text-xs font-mono transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80">
              {RESUME_DATA.metrics.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-obsidian-950/60 border border-neutral-800">
                  <div className="text-xl sm:text-2xl font-extrabold font-mono text-gold-400 glow-text-gold">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-200 mt-0.5">{item.label}</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">{item.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Terminal Simulator */}
          <div className="lg:col-span-5">
            <LiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
