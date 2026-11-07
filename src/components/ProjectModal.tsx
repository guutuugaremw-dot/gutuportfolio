import React, { useEffect } from 'react';
import { X, ArrowUpRight, ExternalLink, ShieldCheck, Check, Layers, Sliders } from 'lucide-react';
import { Project } from '../types';
import { AbenezerPreview } from './previews/AbenezerPreview';
import { NetflixPreview } from './previews/NetflixPreview';
import { AmazonPreview } from './previews/AmazonPreview';
import { NexusPreview } from './previews/NexusPreview';
import { AetheriaPreview } from './previews/AetheriaPreview';
import { VanguardPreview } from './previews/VanguardPreview';
import { PulsePreview } from './previews/PulsePreview';
import { SolaarPreview } from './previews/SolaarPreview';
import { HyperionPreview } from './previews/HyperionPreview';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const renderModalPreview = (type: Project['previewType']) => {
    switch (type) {
      case 'abenezer':
        return <AbenezerPreview />;
      case 'netflix':
        return <NetflixPreview />;
      case 'amazon':
        return <AmazonPreview />;
      case 'nexus':
        return <NexusPreview />;
      case 'aetheria':
        return <AetheriaPreview />;
      case 'vanguard':
        return <VanguardPreview />;
      case 'pulse':
        return <PulsePreview />;
      case 'solaar':
        return <SolaarPreview />;
      case 'hyperion':
        return <HyperionPreview />;
      default:
        return <AbenezerPreview />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="h-16 px-6 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>Case Study</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <span>Launch Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Header Title & Intro */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-1 font-medium">
              {project.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span>Client: <strong className="text-slate-900 dark:text-slate-100">{project.client}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Role: <strong className="text-slate-900 dark:text-slate-100">{project.role}</strong></span>
              <span aria-hidden="true">·</span>
              <span>Duration: <strong className="text-slate-900 dark:text-slate-100">{project.duration}</strong></span>
            </div>
          </div>

          {/* Embedded Live Interactive Prototype Sandbox */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Interactive Production Prototype
              </span>
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-mono">
                Direct Touch/Click Enabled
              </span>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-lg">
              {renderModalPreview(project.previewType)}
            </div>
          </div>

          {/* Impact Metrics 3-Column Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800">
            {project.metrics.map((metric, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          {/* Deep Dive Case Study Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
            
            {/* Left Narrative Column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Project Overview & Scope
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.overview}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  The Friction & Challenge
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Right Narrative Column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  The Architectural Solution
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.solution}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  Key Engineered Features
                </h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Design Tokens & Tech Stack Specs */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <h5 className="font-mono uppercase text-slate-400 mb-2 font-semibold">
                Design System Specification
              </h5>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Primary Palette:</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">{project.designTokens.primaryColor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Typography Pairing:</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">{project.designTokens.typeface}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Spatial Geometry:</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">{project.designTokens.gridSystem}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-mono uppercase text-slate-400 mb-2 font-semibold">
                Production Tech Stack
              </h5>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="h-16 px-6 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            LIVE DEPLOYMENT: {project.liveUrl}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Close
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-blue-500/20"
            >
              <span>Open External Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
