import React, { useState } from 'react';
import { Code2, Film, Cpu } from 'lucide-react';
import { RESUME_DATA } from '../../data/content';

export const SkillsMatrixSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categories = RESUME_DATA.skillCategories;
  const currentCategory = categories[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#09090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600/10 border border-crimson-500/30 text-crimson-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Focused Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Programming, Tools & Media Production
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Focused on Python proficiency, currently learning Java and AI-assisted engineering tools, backed by practical Git/GitHub collaboration and video editing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-crimson-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-crimson-500'
                    : 'bg-obsidian-900 text-neutral-400 hover:text-white hover:bg-neutral-800/80 border border-neutral-800'
                }`}
              >
                {idx === 0 && <Code2 className="w-4 h-4 text-white" />}
                {idx === 1 && <Film className="w-4 h-4 text-gold-400" />}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Grid */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Category Overview */}
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-gold-500/20 text-gold-400 border border-gold-500/30">
                Discipline Overview
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {currentCategory.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {currentCategory.description}
              </p>

              {/* Tools & Environment Badges */}
              <div className="pt-4 border-t border-neutral-800">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                  Tools & Languages:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-neutral-900/90 text-neutral-200 border border-neutral-800 hover:border-crimson-500/50 transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Proficiency Bars & Notes */}
            <div className="lg:col-span-7 space-y-4">
              {currentCategory.skills.map((skill, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-obsidian-950/70 border border-neutral-850 hover:border-crimson-500/30 transition">
                  <div className="flex justify-between items-center mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                        {skill.name}
                      </span>
                      {skill.name.includes("Java") && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/30">
                          Currently Learning
                        </span>
                      )}
                      {skill.name.includes("Python") && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          Proficient
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-gold-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar with Crimson Glow */}
                  <div className="w-full bg-neutral-800/80 rounded-full h-2 overflow-hidden mb-2">
                    <div
                      className="bg-gradient-to-r from-crimson-600 to-crimson-500 h-2 rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(220,38,38,0.7)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-neutral-400 font-mono">
                    {skill.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
