import React, { useState } from 'react';
import { Sliders, Copy, Check, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const HyperionPreview: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<'Enterprise Blue' | 'Cyber Emerald' | 'Violet Electric'>('Enterprise Blue');
  const [activeRadius, setActiveRadius] = useState<'4px' | '8px' | '16px'>('8px');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const brandColors = {
    'Enterprise Blue': { primary: '#0066FF', accent: '#38BDF8', border: 'border-blue-500' },
    'Cyber Emerald': { primary: '#10B981', accent: '#34D399', border: 'border-emerald-500' },
    'Violet Electric': { primary: '#8B5CF6', accent: '#C084FC', border: 'border-purple-500' },
  };

  const currentTheme = brandColors[activeBrand];

  const handleCopy = (token: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(token).catch(() => {});
      }
    } catch {
      // Ignored
    }
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Design System Header */}
      <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-semibold text-slate-200">Hyperion Core</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Token Sandbox</span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% WCAG AA
          </span>
        </div>
      </div>

      {/* Main Interactive Playground */}
      <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 overflow-y-auto">
        {/* Left: Token Controls */}
        <div className="sm:col-span-5 space-y-3 text-xs border-b sm:border-b-0 sm:border-r border-slate-800 sm:pr-3">
          <div>
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5">
              Brand Accent Token
            </span>
            <div className="flex flex-col gap-1.5">
              {(Object.keys(brandColors) as Array<keyof typeof brandColors>).map(b => (
                <button
                  key={b}
                  onClick={() => setActiveBrand(b)}
                  className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg border text-left transition-colors ${
                    activeBrand === b
                      ? 'bg-slate-800/90 border-blue-500/80 text-white font-medium'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: brandColors[b].primary }}
                    />
                    <span>{b}</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">{brandColors[b].primary}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1.5">
              Global Radius Token
            </span>
            <div className="flex gap-1.5">
              {(['4px', '8px', '16px'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setActiveRadius(r)}
                  className={`flex-1 py-1 rounded text-center text-[11px] border transition-colors ${
                    activeRadius === r
                      ? 'bg-blue-950/70 border-blue-500 text-blue-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Live Rendered Components */}
        <div className="sm:col-span-7 flex flex-col justify-between space-y-3">
          <div>
            <span className="text-[11px] font-mono uppercase text-slate-400 block mb-2">
              Live Rendered Atomic Components
            </span>

            {/* Buttons Row */}
            <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800/80 space-y-2">
              <span className="text-[10px] text-slate-400 font-mono block">BUTTON PRIMITIVES</span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  style={{
                    backgroundColor: currentTheme.primary,
                    borderRadius: activeRadius,
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
                >
                  Solid Action
                </button>
                <button
                  style={{
                    borderRadius: activeRadius,
                    borderColor: currentTheme.primary,
                  }}
                  className="px-3 py-1.5 text-xs font-semibold border bg-transparent text-slate-200 transition-colors hover:bg-slate-800"
                >
                  Outlined
                </button>
                <button
                  style={{ borderRadius: activeRadius }}
                  className="px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Ghost
                </button>
              </div>
            </div>

            {/* Input & Badge Row */}
            <div className="mt-2.5 p-3 bg-slate-900/60 rounded-lg border border-slate-800/80 space-y-2">
              <span className="text-[10px] text-slate-400 font-mono block">TYPOGRAPHIC FORM CONTROL</span>
              <div
                style={{ borderRadius: activeRadius }}
                className="flex items-center justify-between px-3 py-2 bg-slate-950 border border-slate-700/80 text-xs"
              >
                <span className="text-slate-300 font-mono">user@enterprise.io</span>
                <span className="text-[10px] text-emerald-400 font-mono">VALID</span>
              </div>
            </div>
          </div>

          {/* Copy Token Strip */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <span className="font-mono text-slate-400 text-[10px] truncate max-w-[200px]">
              var(--radius-{activeRadius}) · {currentTheme.primary}
            </span>
            <button
              onClick={() => handleCopy(`--color-brand: ${currentTheme.primary}; --radius-base: ${activeRadius};`)}
              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              {copiedToken ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedToken ? 'Copied' : 'Copy Tokens'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>240+ TOKENS · MULTI-BRAND FIGMA PIPELINE</div>
        <div className="text-blue-400">AUTOMATED DESIGN-TO-CODE</div>
      </div>
    </div>
  );
};
