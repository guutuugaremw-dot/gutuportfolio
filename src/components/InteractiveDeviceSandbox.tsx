import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, Sparkles, Layers, Sliders, ArrowUpRight, Check } from 'lucide-react';
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
  projects: Project[];
  activeProjectId?: string;
  onSelectProject?: (id: string) => void;
  onOpenCaseStudy: (project: Project) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const InteractiveDeviceSandbox: React.FC<Props> = ({
  projects,
  activeProjectId,
  onSelectProject,
  onOpenCaseStudy,
}) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    activeProjectId || projects[0]?.id || ''
  );
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [copiedLink, setCopiedLink] = useState(false);

  React.useEffect(() => {
    if (activeProjectId) {
      setSelectedProjectId(activeProjectId);
    }
  }, [activeProjectId]);

  const currentProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const renderPreview = (type: Project['previewType']) => {
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

  const handleCopyLink = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(currentProject.liveUrl);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } else {
        throw new Error('Fallback required');
      }
    } catch {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = currentProject.liveUrl;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      } catch (err) {
        console.warn('Copy link prevented:', err);
      }
    }
  };

  const handleSelectTab = (id: string) => {
    setSelectedProjectId(id);
    onSelectProject?.(id);
  };

  return (
    <section id="sandbox" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-2 font-semibold">
            Interactive Product Sandbox
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Live Device Preview & Ergonomics
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Test responsive prototypes directly in simulated viewports. Every layout is calibrated for tactile thumb zones, keyboard macros, and sub-100ms interaction feedback.
          </p>
        </div>

        {/* Device Switcher Controls */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              deviceMode === 'desktop'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              deviceMode === 'tablet'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              deviceMode === 'mobile'
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>
      </div>

      {/* Project Selector Horizontal Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {projects.map(project => {
          const isSelected = project.id === selectedProjectId;
          return (
            <button
              key={project.id}
              onClick={() => handleSelectTab(project.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all border ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {project.title}
            </button>
          );
        })}
      </div>

      {/* Device Simulation Container */}
      <div className="bg-slate-100 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center transition-all">
        
        {/* Device Frame */}
        <div
          className={`w-full transition-all duration-300 ease-out ${
            deviceMode === 'desktop'
              ? 'max-w-5xl'
              : deviceMode === 'tablet'
              ? 'max-w-xl'
              : 'max-w-[360px]'
          }`}
        >
          {/* Simulated Outer Frame Header */}
          <div className="bg-slate-900 rounded-t-xl border-t border-x border-slate-700/80 px-4 py-2.5 flex items-center justify-between text-xs">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-md mx-3 px-3 py-1 bg-slate-950/80 rounded-md border border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="truncate">{currentProject.liveUrl}</span>
              <button
                onClick={handleCopyLink}
                className="text-slate-400 hover:text-white transition-colors ml-2 shrink-0"
                title="Copy Live URL"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <ExternalLink className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Viewport Dimensions */}
            <div className="text-[10px] font-mono text-slate-400 hidden sm:block">
              {deviceMode === 'desktop' ? '1440 × 900' : deviceMode === 'tablet' ? '820 × 1180' : '393 × 852'}
            </div>
          </div>

          {/* Interactive Screen Viewport */}
          <div className="border-x border-b border-slate-700/80 rounded-b-xl overflow-hidden shadow-2xl bg-slate-950">
            {renderPreview(currentProject.previewType)}
          </div>
        </div>

        {/* Project Meta & Design Architecture Strip below simulator */}
        <div className="mt-8 w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{currentProject.category}</span>
              <span aria-hidden="true">·</span>
              <span>Client: {currentProject.client}</span>
              <span aria-hidden="true">·</span>
              <span>{currentProject.year}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {currentProject.title} — {currentProject.subtitle}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {currentProject.summary}
            </p>

            {/* Design Tokens Mini HUD */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentProject.designTokens.primaryColor }} />
                <span>Primary: {currentProject.designTokens.primaryColor}</span>
              </span>
              <span>·</span>
              <span>Type: {currentProject.designTokens.typeface}</span>
              <span>·</span>
              <span>Grid: {currentProject.designTokens.gridSystem}</span>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5">
            <button
              onClick={() => onOpenCaseStudy(currentProject)}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
            >
              <Layers className="w-4 h-4" />
              <span>Full Case Study Architecture</span>
            </button>
            <a
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
            >
              <span>Visit Live Web Deployment</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
