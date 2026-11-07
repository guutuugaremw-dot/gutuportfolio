import React from 'react';
import { PROCESS_PHASES } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-semibold">
          Systematic Methodology
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          The Design Engineering Process
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          A disciplined 4-stage operational cadence from discovery heuristics to production code deployment.
        </p>
      </div>

      {/* 4 Phases Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_PHASES.map((phase) => (
          <div
            key={phase.number}
            className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">
                  Phase {phase.number}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {phase.duration}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
                {phase.phase}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {phase.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                Phase Milestones
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {phase.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-500 text-xs">/</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
