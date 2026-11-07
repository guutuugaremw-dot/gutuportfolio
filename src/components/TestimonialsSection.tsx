import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-semibold">
          Social Proof & Validation
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Client Endorsements & Measured Outcomes
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
          Verifiable endorsements from leadership at technology platforms, hedge funds, and design studios.
        </p>
      </div>

      {/* Testimonials 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((test) => (
          <div
            key={test.id}
            className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
          >
            <div>
              {/* Metric Impact Badge */}
              <div className="pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                  {test.metricImpact}
                </span>
                <Quote className="w-4 h-4 text-slate-300 dark:text-slate-700" />
              </div>

              {/* Quote text */}
              <p className="mt-5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{test.quote}"
              </p>
            </div>

            {/* Author Attribution */}
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-mono font-bold text-xs text-blue-600 dark:text-blue-400">
                {test.avatarText}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {test.author}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {test.role} · {test.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Roster Trust Strip */}
      <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
        <span className="uppercase tracking-wider font-semibold">TRUSTED BY TEAMS AT:</span>
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-bold text-slate-700 dark:text-slate-300">
          <span>NEXUS SYSTEMS</span>
          <span>AETHERIA PARIS</span>
          <span>VANGUARD TERMINAL</span>
          <span>PULSE BIO</span>
          <span>SOLAAR ENERGY</span>
          <span>HYPERION CLOUD</span>
        </div>
      </div>

    </section>
  );
};
