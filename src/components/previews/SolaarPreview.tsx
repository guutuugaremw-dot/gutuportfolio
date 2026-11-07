import React, { useState } from 'react';
import { Sun, BatteryCharging, Wind, AlertCircle, ArrowUpRight } from 'lucide-react';

export const SolaarPreview: React.FC = () => {
  const [selectedSubstation, setSelectedSubstation] = useState<'Alpha' | 'Beta' | 'Gamma'>('Alpha');
  const [batteryState, setBatteryState] = useState(94);
  const [isCurtailing, setIsCurtailing] = useState(false);

  const substations = {
    Alpha: { generation: '142.8 MW', solar: '98 MW', wind: '44.8 MW', efficiency: '98.6%' },
    Beta: { generation: '210.4 MW', solar: '160 MW', wind: '50.4 MW', efficiency: '99.1%' },
    Gamma: { generation: '88.2 MW', solar: '52 MW', wind: '36.2 MW', efficiency: '97.4%' },
  };

  const current = substations[selectedSubstation];

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Grid Monitor Header */}
      <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-semibold text-slate-200">Solaar CleanTech Grid</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Nordic Region</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 bg-slate-800 p-0.5 rounded text-[11px]">
            {(['Alpha', 'Beta', 'Gamma'] as const).map(sub => (
              <button
                key={sub}
                onClick={() => setSelectedSubstation(sub)}
                className={`px-2 py-0.5 rounded transition-colors ${
                  selectedSubstation === sub ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Sub-{sub}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 overflow-y-auto">
        {/* Left: Generation Telemetry */}
        <div className="sm:col-span-7 space-y-3">
          <div className="p-3.5 bg-gradient-to-br from-slate-900 to-blue-950/40 rounded-xl border border-blue-500/20">
            <span className="text-[11px] text-blue-300 font-mono block mb-1">LIVE DISPATCH LOAD</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                {current.generation}
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +14.2% Peak
              </span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" /> Solar: {current.solar}
              </div>
              <div className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-sky-400" /> Wind: {current.wind}
              </div>
            </div>
          </div>

          {/* Regional Microgrid Map Simulation */}
          <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center text-slate-400 mb-2 text-[11px]">
              <span>ACTIVE FLOW ROUTING</span>
              <span className="font-mono text-emerald-400">STATUS: STABLE</span>
            </div>
            <div className="flex items-center justify-between text-slate-200 py-1 border-t border-slate-800">
              <span>Grid Efficiency</span>
              <span className="font-mono text-blue-400">{current.efficiency}</span>
            </div>
            <div className="flex items-center justify-between text-slate-200 py-1 border-t border-slate-800">
              <span>Curtailed Surplus</span>
              <span className="font-mono text-slate-400">{isCurtailing ? 'Active (Saved 2.4 MWh)' : 'Idle'}</span>
            </div>
          </div>
        </div>

        {/* Right: Battery Storage & Controls */}
        <div className="sm:col-span-5 p-3 bg-slate-900 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-300 font-medium flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4 text-emerald-400" /> Megawatt BESS
              </span>
              <span className="font-mono text-emerald-400 text-xs">{batteryState}%</span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden mb-3">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${batteryState}%` }}
              />
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex justify-between">
                <span>Thermal Matrix:</span>
                <span className="text-slate-200 font-mono">22.4°C Nominal</span>
              </div>
              <div className="flex justify-between">
                <span>Cycle Health:</span>
                <span className="text-slate-200 font-mono">99.8% Capacity</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800">
            <button
              onClick={() => setIsCurtailing(!isCurtailing)}
              className={`w-full py-2 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                isCurtailing
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              {isCurtailing ? 'Disable Curtailment' : 'Optimize Microgrid Flow'}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>INDUSTRIAL SCADA & IOT ARCHITECTURE</div>
        <div className="text-emerald-400">-72% DISPATCH LATENCY</div>
      </div>
    </div>
  );
};
