import React, { useState } from 'react';
import { Play, Pause, Plus, ZoomIn, ZoomOut, RotateCcw, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

interface NodeItem {
  id: string;
  name: string;
  type: 'Trigger' | 'Transform' | 'AI Agent' | 'Output';
  status: 'active' | 'waiting' | 'complete';
  x: number;
  y: number;
  metric: string;
}

export const NexusPreview: React.FC = () => {
  const [isRunning, setIsRunning] = useState(true);
  const [selectedNode, setSelectedNode] = useState<string>('node-2');
  const [zoomLevel, setZoomLevel] = useState(100);

  const [nodes, setNodes] = useState<NodeItem[]>([
    { id: 'node-1', name: 'WebHook Ingestion', type: 'Trigger', status: 'complete', x: 20, y: 35, metric: '1.2k req/s' },
    { id: 'node-2', name: 'Vector Normalizer', type: 'Transform', status: 'active', x: 190, y: 25, metric: '3.4ms p99' },
    { id: 'node-3', name: 'Decision Engine', type: 'AI Agent', status: 'active', x: 190, y: 135, metric: '99.4% conf' },
    { id: 'node-4', name: 'Enterprise Dispatch', type: 'Output', status: 'waiting', x: 370, y: 75, metric: '0 err' },
  ]);

  const activeNode = nodes.find(n => n.id === selectedNode) || nodes[0];

  const handleAddNode = () => {
    const newId = `node-${nodes.length + 1}`;
    setNodes(prev => [
      ...prev,
      {
        id: newId,
        name: `Filter Rule ${prev.length}`,
        type: 'Transform',
        status: 'waiting',
        x: 270 + (prev.length % 2) * 20,
        y: 110 + (prev.length % 2) * 25,
        metric: 'Ready',
      }
    ]);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Top Console Bar */}
      <div className="h-11 bg-slate-900/90 border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-blue-400">NexusFlow OS</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300 truncate max-w-[140px] sm:max-w-none">prod-event-pipeline.flow</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
              isRunning ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isRunning ? 'Active' : 'Paused'}</span>
          </button>
          
          <button
            onClick={handleAddNode}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md border border-slate-700/60"
            title="Add Node"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Node</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div className="relative flex-1 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] overflow-hidden">
        {/* SVG Connecting Wires */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <path
            d="M 140 75 C 165 75, 165 65, 190 65"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray={isRunning ? "4 2" : "none"}
            className={isRunning ? "animate-pulse" : ""}
          />
          <path
            d="M 140 75 C 165 75, 165 175, 190 175"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray={isRunning ? "4 2" : "none"}
          />
          <path
            d="M 310 65 C 340 65, 340 115, 370 115"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
          />
          <path
            d="M 310 175 C 340 175, 340 115, 370 115"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
          />
        </svg>

        {/* Nodes */}
        {nodes.map(node => (
          <div
            key={node.id}
            onClick={() => setSelectedNode(node.id)}
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top left',
            }}
            className={`absolute z-10 w-36 sm:w-40 p-2.5 rounded-lg border cursor-pointer transition-all duration-150 backdrop-blur-md ${
              selectedNode === node.id
                ? 'bg-blue-950/70 border-blue-400 shadow-lg shadow-blue-500/20'
                : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-500'
            }`}
          >
            <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
              <span>{node.type}</span>
              <span className={`w-2 h-2 rounded-full ${node.status === 'active' ? 'bg-blue-400 animate-ping' : node.status === 'complete' ? 'bg-emerald-400' : 'bg-slate-500'}`} />
            </div>
            <div className="text-xs font-semibold text-slate-100 truncate">{node.name}</div>
            <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-mono text-blue-300">{node.metric}</span>
              <ArrowRight className="w-3 h-3 text-slate-500" />
            </div>
          </div>
        ))}

        {/* Floating Node Inspector (Bottom Right) */}
        <div className="absolute right-3 bottom-3 z-20 w-52 sm:w-60 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 backdrop-blur-md shadow-xl text-xs">
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
            <span className="font-medium text-slate-300">Inspector</span>
            <span className="text-[10px] text-blue-400 font-mono">{activeNode.id}</span>
          </div>
          <div className="mt-2 space-y-1 text-[11px]">
            <div className="flex justify-between text-slate-400">
              <span>Node Title:</span>
              <span className="text-slate-200 font-medium truncate max-w-[110px]">{activeNode.name}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Telemetry:</span>
              <span className="font-mono text-emerald-400">{activeNode.metric}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Health:</span>
              <span className="text-blue-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-blue-400" /> Operational
              </span>
            </div>
          </div>
        </div>

        {/* Canvas Controls (Bottom Left) */}
        <div className="absolute left-3 bottom-3 z-20 flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-1">
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 10, 130))}
            className="p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(prev - 10, 80))}
            className="p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel(100)}
            className="p-1 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded transition-colors"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] font-mono text-slate-400 px-1">{zoomLevel}%</span>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span>NODES: {nodes.length}</span>
          <span>LATENCY: 1.2ms</span>
          <span className="text-emerald-400">BUFFER: 100% OK</span>
        </div>
        <div className="text-slate-500">Click any node to inspect</div>
      </div>
    </div>
  );
};
