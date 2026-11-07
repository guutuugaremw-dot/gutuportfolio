import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Eye, ShieldCheck } from 'lucide-react';
import { GUTU_PROFILE } from '../data/portfolioData';

interface Props {
  onOpenPlanner: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenPlanner, onExploreProjects }) => {
  const [activeInspectorTab, setActiveInspectorTab] = useState<'tokens' | 'metrics' | 'stack'>('tokens');

  return (
    <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 dark:bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
        
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          
          {/* Quiet unboxed kicker */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Gutu</span>
            <span aria-hidden="true">·</span>
            <span>Web & Application Designer</span>
            <span aria-hidden="true">·</span>
            <span>Design Engineer</span>
          </div>

          {/* Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] [text-wrap:balance]">
            Architecting Next-Generation Digital Experiences with Precision & Velocity.
          </h1>

          {/* Lead Copy */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            I partner with forward-thinking tech enterprises, fintech platforms, and luxury brands to design intuitive web applications, high-converting digital flagships, and production-grade design systems.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreProjects}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenPlanner}
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-200 dark:border-slate-800 flex items-center gap-2"
            >
              <span>Start Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Live Production Deployments Bar */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
            <span className="font-mono text-slate-500 dark:text-slate-400 shrink-0 font-medium">
              Featured Live Deployments:
            </span>
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
              <a
                href="https://abenezer-bed-room.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 rounded transition-colors flex items-center gap-1 font-medium"
              >
                <span>Abenezer Bed Room</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://netflixapp-virid.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/30 hover:bg-red-500/20 rounded transition-colors flex items-center gap-1 font-medium"
              >
                <span>Netflix App</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://amazon-clone-r5sm-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30 hover:bg-blue-500/20 rounded transition-colors flex items-center gap-1 font-medium"
              >
                <span>Amazon Clone</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Availability Status */}
          <div className="pt-1 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{GUTU_PROFILE.availability}</span>
            <span aria-hidden="true">·</span>
            <span>Based Worldwide / Remote</span>
          </div>

        </div>

        {/* Right Column: High-Impact Visual Studio Console */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 shadow-2xl text-slate-100 overflow-hidden">
            
            {/* Top Console Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                <span className="font-mono text-slate-300">Gutu Design Core v3.4</span>
              </div>
              <div className="flex gap-1 bg-slate-800/80 p-0.5 rounded text-[10px] font-mono">
                {(['tokens', 'metrics', 'stack'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveInspectorTab(tab)}
                    className={`px-2 py-0.5 rounded uppercase transition-colors ${
                      activeInspectorTab === tab ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Central Visual Brand Emblem Display */}
            <div className="my-6 relative flex flex-col items-center justify-center py-6 bg-slate-950/70 rounded-xl border border-slate-800/80 group">
              
              {/* Logo Presentation */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-700/60 shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/assets/aistudio/Futuristic_Gutu_Web_Designer_Logo_d4ffc51c.png"
                  alt="Gutu — Web & Application Designer"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-sm font-bold tracking-tight text-white font-sans">
                  GUTU
                </div>
                <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase mt-0.5">
                  Web & Application Designer
                </div>
              </div>
            </div>

            {/* Interactive Inspector Content Panel */}
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs">
              {activeInspectorTab === 'tokens' && (
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-400">
                    <span>Design Philosophy:</span>
                    <span className="text-blue-400 font-semibold">Mathematical Elegance</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Motion Latency:</span>
                    <span className="text-emerald-400">Sub-100ms Composited</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Accessibility Target:</span>
                    <span className="text-slate-200">100% WCAG AA Certified</span>
                  </div>
                </div>
              )}

              {activeInspectorTab === 'metrics' && (
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 bg-slate-950 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">AVG CONVERSION LIFT</span>
                    <span className="text-base font-bold text-blue-400 font-mono">+420%</span>
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">CLIENT RETENTION</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">99.4%</span>
                  </div>
                </div>
              )}

              {activeInspectorTab === 'stack' && (
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-slate-300">
                  <span className="px-1.5 py-0.5 bg-slate-800 rounded">React 19</span>
                  <span className="px-1.5 py-0.5 bg-slate-800 rounded">Tailwind v4</span>
                  <span className="px-1.5 py-0.5 bg-slate-800 rounded">TypeScript</span>
                  <span className="px-1.5 py-0.5 bg-slate-800 rounded">Figma Tokens</span>
                  <span className="px-1.5 py-0.5 bg-slate-800 rounded">Three.js</span>
                  <span className="px-1.5 py-0.5 bg-slate-800 rounded">WebGL</span>
                </div>
              )}
            </div>

            {/* Bottom Status */}
            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1 text-slate-400">
                <Code2 className="w-3 h-3 text-blue-400" /> Production-Ready Code
              </span>
              <span>Available for Consultations</span>
            </div>

          </div>
        </div>

      </div>

      {/* Full-Width Metric Strip Below the Hero Split */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {GUTU_PROFILE.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};
