import React from 'react';
import { X, Github, CheckCircle2, Award, Calendar, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../../data/content';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-obsidian-900 border border-crimson-600/40 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.25)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Banner Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.previewGradient} border-b border-neutral-800 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-obsidian-950/80 text-neutral-400 hover:text-white hover:bg-neutral-800 transition border border-neutral-800"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-crimson-600/20 text-crimson-400 border border-crimson-500/30">
              {project.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-xs font-mono text-neutral-400">
              <Calendar className="w-3.5 h-3.5" />
              {project.period}
            </span>
          </div>

          <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
            {project.shortDesc}
          </p>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Metric Callout */}
          {project.metrics && (
            <div className="p-4 rounded-xl bg-[#13131a] border border-gold-500/30 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-gold-400 uppercase tracking-wider font-semibold">Verified Metric / Impact</p>
                <p className="text-xs sm:text-sm text-neutral-200 font-medium">{project.metrics}</p>
              </div>
            </div>
          )}

          {/* Deep-dive Narrative */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-crimson-500" />
              Project Architecture & Deep-Dive
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Wins & Deliverables */}
          {project.keyWins && project.keyWins.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                Key Engineering Wins
              </h3>
              <ul className="space-y-2">
                {project.keyWins.map((win, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-crimson-500 shrink-0 mt-0.5" />
                    <span>{win}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
              Technologies & Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-[#0a0a0d] border-t border-neutral-800 flex items-center justify-between">
          <div className="text-xs font-mono text-neutral-400">
            Role: <span className="text-neutral-200 font-semibold">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-400 text-xs font-medium border border-gold-500/40 transition"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live URL</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs font-medium border border-neutral-800 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-crimson-600 hover:bg-crimson-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(220,38,38,0.4)] transition"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
