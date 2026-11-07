import React, { useState } from 'react';
import { ArrowUpRight, Layers, Eye, Sparkles } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface Props {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onPreviewInSandbox: (projectId: string) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Web Applications',
  'E-Commerce',
  'Mobile & Tablet',
  'Design Systems',
];

export const ProjectGallery: React.FC<Props> = ({ projects, onSelectProject, onPreviewInSandbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      
      {/* Section Header & Interactive Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-semibold">
            Selected Works & Deployments
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Major Web & Application Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Each project is engineered with custom design systems, responsive architectural layouts, and verified business outcomes.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project, index) => {
          // Layout pacing: Give the first project a wide 8-col span or 12-col span
          const isWide = index === 0 || index === 3;
          const colSpan = isWide ? 'lg:col-span-8' : 'lg:col-span-4';

          return (
            <article
              key={project.id}
              className={`${colSpan} group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 shadow-sm hover:shadow-xl`}
            >
              <div>
                {/* Visual Preview Box */}
                <div className="relative w-full h-52 sm:h-64 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between p-4 mb-6">
                  {/* Top Bar inside preview */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.designTokens.primaryColor }} />
                      {project.desktopPreviewTag}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Center abstract showcase preview */}
                  <div className="self-center my-auto text-center">
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                      {project.title}
                    </div>
                    <div className="text-xs font-mono text-blue-400 mt-1">
                      {project.client}
                    </div>
                  </div>

                  {/* Bottom Action Bar inside Card */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs">
                    <button
                      onClick={() => onPreviewInSandbox(project.id)}
                      className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium text-[11px]"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>Test in Device Simulator</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-[11px] font-mono transition-colors"
                      title="Visit Live URL"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Unboxed Metadata (NO PILLS) */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.duration}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-1">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Metrics Achieved */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-slate-100 font-mono tabular-nums">
                        {metric.value}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Controls */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="py-2 px-3.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Deep Dive Case Study</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <span>Launch Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </article>
          );
        })}
      </div>

    </section>
  );
};
