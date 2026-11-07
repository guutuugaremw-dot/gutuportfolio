import React, { useState } from 'react';
import { GUTU_PROFILE, EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { FileText, CheckCircle2, Award, Briefcase, Sparkles, ExternalLink } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const [showFullCV, setShowFullCV] = useState(false);

  return (
    <section id="credentials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 font-semibold">
            Background & Practice
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Designer Credentials & Career History
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Over 8 years of engineering-grade product design across high-growth startups and established technology enterprises.
          </p>
        </div>

        <button
          onClick={() => setShowFullCV(!showFullCV)}
          className="self-start md:self-auto py-2 px-4 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-2 border border-slate-200 dark:border-slate-700"
        >
          <FileText className="w-4 h-4" />
          <span>{showFullCV ? 'Minimize Curriculum Vitae' : 'View Full Curriculum Vitae'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Biography & Philosophy */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              The Design Philosophy
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {GUTU_PROFILE.bio}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "Great interfaces don't demand attention for themselves; they amplify the user's intent. When aesthetic beauty aligns with sub-100ms technical performance, software transforms into a seamless cognitive extension."
            </p>

            {/* Core Competencies */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                Core Competencies
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                {GUTU_PROFILE.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mastered Tooling Box */}
          <div className="bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
              Mastered Tooling & Platforms
            </span>
            <div className="flex flex-wrap gap-2">
              {GUTU_PROFILE.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Career Experience Timeline */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold pb-2 border-b border-slate-100 dark:border-slate-800">
            <Briefcase className="w-4 h-4 text-blue-500" />
            <span>Experience Timeline</span>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_TIMELINE.map((item, index) => (
              <div key={index} className="relative pl-6 border-l border-slate-200 dark:border-slate-800">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.role}
                  </h4>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-medium">
                    {item.period}
                  </span>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.company} · {item.location}
                </div>

                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 font-mono">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Full CV Drawer Expanded */}
          {showFullCV && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 text-xs animate-in fade-in">
              <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                Education & Industry Recognitions
              </h5>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-slate-600 dark:text-slate-300">
                <div className="flex justify-between">
                  <span>B.Sc. in Human-Computer Interaction & Interactive Systems</span>
                  <span className="font-mono text-slate-400">First Class Honours</span>
                </div>
                <div className="flex justify-between">
                  <span>Awwwards Site of the Day / Mobile Excellence Nominee</span>
                  <span className="font-mono text-slate-400">2024 & 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>W3C Web Accessibility Specialist Certification (WCAG AAA)</span>
                  <span className="font-mono text-slate-400">Certified</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
