import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/content';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = RESUME_DATA.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
        <Link
          to="/"
          className="px-4 py-2 rounded-xl bg-crimson-600 text-white font-mono text-xs font-semibold"
        >
          &larr; Return to Overview
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-crimson-400 transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>

      <div className="glass-card rounded-2xl p-6 sm:p-10 border border-neutral-800 space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
            {project.categoryLabel}
          </span>
          <span className="text-xs font-mono text-neutral-400">{project.period}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-neutral-300 text-base leading-relaxed">
          {project.fullDesc}
        </p>

        {project.metrics && (
          <div className="p-4 rounded-xl bg-[#14141c] border border-gold-500/30 flex items-center gap-3">
            <Award className="w-5 h-5 text-gold-400 shrink-0" />
            <div>
              <p className="text-[11px] font-mono text-gold-400 uppercase">Impact Metric</p>
              <p className="text-sm text-neutral-200 font-semibold">{project.metrics}</p>
            </div>
          </div>
        )}

        {project.keyWins && (
          <div className="space-y-2 pt-4">
            <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
              Key Engineering Wins:
            </h3>
            {project.keyWins.map((win, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0 mt-0.5" />
                <span>{win}</span>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-2">
          {project.technologies.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
