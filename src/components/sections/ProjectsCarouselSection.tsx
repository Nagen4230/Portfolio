import React, { useState } from 'react';
import { Layers, ArrowUpRight, Award, Filter, Code2, Film, ExternalLink } from 'lucide-react';
import { RESUME_DATA, ProjectItem } from '../../data/content';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsCarouselSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'software' | 'video'>('all');

  const filteredProjects = RESUME_DATA.projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600/10 border border-crimson-500/30 text-crimson-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Interactive Work Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Software & Video Projects
            </h2>
            <p className="mt-2 text-neutral-400 text-sm max-w-xl">
              Click any project card to view technical implementation details, key wins, and verified live/GitHub URLs.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all' as const, label: 'All Projects', icon: Filter },
              { id: 'software' as const, label: 'Software Engineering', icon: Code2 },
              { id: 'video' as const, label: 'Video & Motion', icon: Film },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-crimson-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-crimson-500'
                      : 'bg-obsidian-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between border border-neutral-850 hover:border-crimson-500/60 transition-all duration-300"
            >
              {/* Card Banner */}
              <div className={`p-6 sm:p-7 bg-gradient-to-br ${project.previewGradient} relative border-b border-neutral-800/80`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold bg-neutral-900/90 text-crimson-400 border border-crimson-500/30">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-gold-500/20 text-gold-400 border border-gold-500/30 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Live Web
                      </span>
                    )}
                    <div className="p-1.5 rounded-lg bg-neutral-900/80 text-neutral-400 group-hover:text-white group-hover:bg-crimson-600 transition">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-crimson-400 transition tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Metric Callout if present */}
                {project.metrics && (
                  <div className="p-3 rounded-lg bg-[#111117] border border-gold-500/20 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-xs font-mono text-gold-400 font-medium">
                      {project.metrics}
                    </span>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span className="font-mono text-xs text-neutral-400">{project.period}</span>
                  <span className="font-mono text-xs text-crimson-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    View Project &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
