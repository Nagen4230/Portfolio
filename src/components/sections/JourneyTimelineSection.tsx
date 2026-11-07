import React from 'react';
import { CheckCircle2, Star, Trophy } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

export const JourneyTimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-[#0a0a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Metric-Driven Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Leadership & Competitive Honors
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Verified academic excellence (4.00 Matriculation CGPA, 10As SPM), executive student leadership, and competitive programming achievements.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-32 space-y-12">
          {RESUME_DATA.timeline.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Point with Crimson Glow */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-crimson-500 group-hover:scale-125 group-hover:border-gold-400 group-hover:shadow-[0_0_12px_rgba(245,158,11,0.8)] transition-all duration-300" />

              {/* Year Pill (Desktop Left) */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-crimson-400 transition">
                  {item.period}
                </span>
              </div>

              {/* Card Container */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-neutral-850 hover:border-crimson-500/50 transition-all duration-300 space-y-4">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="md:hidden text-xs font-mono text-crimson-400 font-semibold">
                      {item.period} •
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Gold Metric Callout */}
                  {item.goldMetric && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/40 text-gold-400 font-mono text-xs font-bold glow-text-gold shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                      <Star className="w-3.5 h-3.5 fill-gold-400" />
                      <span>{item.goldMetric}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-crimson-400 transition tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-neutral-300 mt-0.5">
                    {item.institution} {item.role && `• ${item.role}`}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements Bullet List */}
                <div className="pt-2 border-t border-neutral-850 space-y-1.5">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-crimson-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
