import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { ArrowUpRight, Check } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-semibold">
          Core Disciplines & Practice
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Architectural Capabilities
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Bridging executive vision, user psychology, and front-end engineering to deliver digital products of enduring value.
        </p>
      </div>

      {/* Editorial Numbered Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.number}
            className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div>
              {/* Editorial Number & Metric */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <span className="text-sm font-mono font-bold text-blue-600 dark:text-blue-400">
                  {cap.number}.
                </span>
                <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                  {cap.metricHighlight}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-4 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                {cap.tagline}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {cap.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2.5">
                Target Deliverables
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {cap.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{deliv}</span>
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
