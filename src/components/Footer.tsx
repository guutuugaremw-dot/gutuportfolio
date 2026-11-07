import React from 'react';
import { GUTU_PROFILE } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-100 dark:border-slate-800">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/Futuristic_Gutu_Web_Designer_Logo_d4ffc51c.png"
              alt="Gutu Logo"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="w-10 h-10 object-contain rounded-lg p-0.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
            />
            <div>
              <span className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white font-sans block">
                GUTU · WEB & APPLICATION DESIGNER
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Crafting high-velocity digital products with architectural precision.
              </span>
            </div>
          </div>

          {/* Quick Contact & Scroll Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${GUTU_PROFILE.email}`}
              className="px-4 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>{GUTU_PROFILE.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
              title="Return to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quiet Sub-Footer with Unboxed Metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Gutu. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Studio</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px]">
            <a
              href="https://abenezer-bed-room.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              <span>Abenezer Bed Room</span>
              <ArrowUp className="w-3 h-3 rotate-45" />
            </a>
            <a
              href="https://netflixapp-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <span>Netflix App</span>
              <ArrowUp className="w-3 h-3 rotate-45" />
            </a>
            <a
              href="https://amazon-clone-r5sm-delta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <span>Amazon Clone</span>
              <ArrowUp className="w-3 h-3 rotate-45" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
