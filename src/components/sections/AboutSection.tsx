import React from 'react';
import { BookOpen, Zap, ShieldCheck } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-obsidian-900/60 border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Academic Credentials Card (Photo removed as requested) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl p-6 bg-obsidian-950 border border-neutral-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div>
                  <h3 className="text-base font-bold text-white">{RESUME_DATA.candidate.name}</h3>
                  <p className="text-xs font-mono text-crimson-400">Software Engineering Undergraduate</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-gold-500/10 text-gold-400 border border-gold-500/30 font-semibold">
                  Universiti Malaya
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800">
                  <span className="text-xs text-neutral-300">Matriculation CGPA</span>
                  <span className="text-xs font-mono font-bold text-gold-400 glow-text-gold">4.00 / 4.00</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800">
                  <span className="text-xs text-neutral-300">SPM National Exams</span>
                  <span className="text-xs font-mono font-bold text-gold-400 glow-text-gold">10 Straight As</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800">
                  <span className="text-xs text-neutral-300">State Coding Competition</span>
                  <span className="text-xs font-mono font-bold text-crimson-400">2nd Runner-Up</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded-xl bg-obsidian-900 border border-neutral-800">
                  <span className="text-xs text-neutral-300">International Invention Honors</span>
                  <span className="text-xs font-mono font-bold text-gold-400">IIDEX & IYIA Gold</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Languages:</span>
                <span className="text-neutral-200">English • Malay • Tamil • French (Elem)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Direction */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600/10 border border-crimson-500/30 text-crimson-400 text-xs font-mono uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academic & Technical Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Software Foundations with Creative Communication
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              As an incoming 1st-Year Software Engineering student at <strong className="text-white">Universiti Malaya (UM)</strong>, I combine rigorous analytical thinking with hands-on development. With a <span className="text-gold-400 font-semibold">4.00 Matriculation CGPA</span> and a <span className="text-crimson-400 font-semibold">2nd Runner-Up</span> standing in a state-level coding competition, I bring a structured problem-solving approach to software development.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              My core programming proficiency is centered on <strong className="text-white">Python</strong>, while currently expanding into <strong className="text-white">Java</strong>, <strong className="text-white">AI-assisted development tools</strong>, and <strong className="text-white">Git/GitHub</strong> version control. Alongside code, my background leading technology initiatives and video editing projects enables me to build software solutions and communicate technical concepts effectively.
            </p>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-card border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-crimson-400 font-semibold text-sm">
                  <Zap className="w-4 h-4 text-crimson-500" />
                  <span>Disciplined Learning</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Focusing on strong Python implementation while actively absorbing core Java object-oriented principles and developer tooling.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-card border border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-gold-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                  <span>Proven Track Record</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Maintained academic perfection (4.00 CGPA) while presiding over student clubs and conducting workshops for junior peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
