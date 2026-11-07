import React, { useState } from 'react';
import { Heart, Moon, Activity, Flame, ShieldCheck, ChevronRight } from 'lucide-react';

export const PulsePreview: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<'Today' | 'Yesterday' | 'Avg'>('Today');
  const [recoveryScore, setRecoveryScore] = useState(88);
  const [circadianPhase, setCircadianPhase] = useState<'Optimum' | 'Peak Focus' | 'Wind Down'>('Peak Focus');

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Phone-Like Status Bar */}
      <div className="h-10 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-1.5 font-semibold text-sky-400">
          <Heart className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
          <span>Pulse Health</span>
        </div>
        <div className="flex gap-1 bg-slate-800 p-0.5 rounded text-[11px]">
          {(['Today', 'Yesterday', 'Avg'] as const).map(d => (
            <button
              key={d}
              onClick={() => {
                setSelectedDay(d);
                setRecoveryScore(d === 'Today' ? 88 : d === 'Yesterday' ? 76 : 82);
              }}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedDay === d ? 'bg-sky-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Main Health Dashboard */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
        {/* Recovery Dial Card */}
        <div className="p-4 bg-gradient-to-br from-slate-900 to-sky-950/40 rounded-xl border border-sky-500/20 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-sky-300 font-medium uppercase tracking-wider block">
              Daily Recovery Index
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                {recoveryScore}%
              </span>
              <span className="text-xs font-semibold text-emerald-400">Prime Readiness</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-[220px]">
              Circadian rhythm aligned. HRV baseline +12ms above 30-day average.
            </p>
          </div>

          <div className="w-16 h-16 rounded-full border-4 border-sky-500/30 border-t-sky-400 flex items-center justify-center rotate-45">
            <span className="text-xs font-bold font-mono -rotate-45 text-sky-300">
              {recoveryScore}
            </span>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1 text-slate-400 mb-1 text-[11px]">
              <Moon className="w-3 h-3 text-indigo-400" />
              <span>Deep Sleep</span>
            </div>
            <div className="font-bold text-slate-200 tabular-nums">7h 48m</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">+45m target</div>
          </div>

          <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1 text-slate-400 mb-1 text-[11px]">
              <Activity className="w-3 h-3 text-rose-400" />
              <span>Avg HRV</span>
            </div>
            <div className="font-bold text-slate-200 tabular-nums">68 ms</div>
            <div className="text-[10px] text-sky-400 mt-0.5">Optimal band</div>
          </div>

          <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
            <div className="flex items-center gap-1 text-slate-400 mb-1 text-[11px]">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>Active Cal</span>
            </div>
            <div className="font-bold text-slate-200 tabular-nums">740 kcal</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Target reached</div>
          </div>
        </div>

        {/* Circadian Recommendation Slider Trigger */}
        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <div>
              <span className="font-medium text-slate-200 block">Circadian Guidance: High Neuro-Focus</span>
              <span className="text-[11px] text-slate-400">Ideal cognitive window active until 14:30.</span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>NATIVE IOS & ANDROID TOKENS</div>
        <div className="text-sky-400">64% DAY-30 USER RETENTION</div>
      </div>
    </div>
  );
};
