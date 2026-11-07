import React, { useState } from 'react';
import { Bed, ShoppingCart, ArrowUpRight, Check, Star, Shield, Sparkles } from 'lucide-react';

interface BedroomSet {
  id: string;
  name: string;
  category: string;
  priceBirr: number;
  wood: string;
  fabric: string;
  rating: number;
  status: string;
}

const BEDROOM_SETS: BedroomSet[] = [
  {
    id: 'b-1',
    name: 'Imperial Velvet King Bed Suite',
    category: 'Master Bedroom Collection',
    priceBirr: 50000,
    wood: 'Kiln-Dried Hardwood & Gold Trim',
    fabric: 'Deep Navy Italian Velvet',
    rating: 4.9,
    status: 'In Stock · Ready for Delivery',
  },
  {
    id: 'b-2',
    name: 'Nordic Oak Floating Platform Bed',
    category: 'Minimalist Bedroom Design',
    priceBirr: 30000,
    wood: 'Natural White Oak & Integrated Nightstands',
    fabric: 'Textured Oatmeal Linen',
    rating: 4.8,
    status: 'Bespoke Order',
  },
  {
    id: 'b-3',
    name: 'Monarch Hydraulic Storage Bed',
    category: 'Luxury Space-Saving Suite',
    priceBirr: 20000,
    wood: 'Reinforced Steel Frame & Walnut Finish',
    fabric: 'Charcoal Tufted Leatherette',
    rating: 5.0,
    status: 'Best Seller',
  },
];

export const AbenezerPreview: React.FC = () => {
  const [selectedSetIndex, setSelectedSetIndex] = useState(0);
  const [selectedWood, setSelectedWood] = useState('Natural Oak');
  const [inquiryCount, setInquiryCount] = useState(0);
  const [showInquirySent, setShowInquirySent] = useState(false);

  const currentSet = BEDROOM_SETS[selectedSetIndex] || BEDROOM_SETS[0];

  const handleAddToInquiry = () => {
    setInquiryCount(prev => prev + 1);
    setShowInquirySent(true);
    setTimeout(() => setShowInquirySent(false), 1800);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Top Brand Bar */}
      <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <Bed className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-xs tracking-wider uppercase text-amber-200">
            Abenezer Bed Room
          </span>
          <span className="text-slate-600 text-xs hidden sm:inline">/</span>
          <span className="text-slate-400 text-xs hidden sm:inline">Luxury Bedroom Furnishings</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://abenezer-bed-room.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-md transition-colors"
          >
            <span>Visit Live App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Bedroom Showcase */}
      <div className="flex-1 flex flex-col sm:flex-row overflow-hidden">
        {/* Left: Visual Render & Suite Selector */}
        <div className="w-full sm:w-1/2 p-4 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-slate-800">
          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span className="text-amber-400 font-medium">{currentSet.status}</span>
              <div className="flex items-center gap-1 text-amber-300">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                <span className="font-mono">{currentSet.rating}</span>
              </div>
            </div>

            {/* Model Selector Tabs */}
            <div className="flex gap-1.5 mb-3">
              {BEDROOM_SETS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedSetIndex(idx)}
                  className={`flex-1 py-1 px-2 text-[10px] rounded transition-all truncate font-medium ${
                    idx === selectedSetIndex
                      ? 'bg-amber-500/20 border border-amber-500/70 text-amber-200'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.name.split(' ').slice(0, 2).join(' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Central Architectural Furniture Graphic */}
          <div className="self-center my-auto py-2 text-center">
            <div className="relative inline-flex items-center justify-center p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30 shadow-inner">
              <Bed className="w-14 h-14 sm:w-16 sm:h-16 text-amber-400/90" />
              <div className="absolute top-2 right-2 flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30">
                <Shield className="w-2.5 h-2.5" /> 10-Yr Warranty
              </div>
            </div>
            <div className="mt-2 text-xs font-semibold text-slate-200">
              {currentSet.name}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Fabric: {currentSet.fabric}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Handcrafted Joinery</span>
            <span className="text-amber-400">Custom Sizing Available</span>
          </div>
        </div>

        {/* Right: Customization & Pricing Specs */}
        <div className="w-full sm:w-1/2 p-4 sm:p-5 flex flex-col justify-between bg-slate-950 overflow-y-auto">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
              {currentSet.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
              {currentSet.name}
            </h3>
            <div className="text-xl font-bold font-mono text-white mt-1">
              {currentSet.priceBirr.toLocaleString()} Birr
            </div>

            {/* Customization Options */}
            <div className="mt-3 space-y-2 text-xs">
              <div>
                <span className="text-slate-400 text-[11px] block mb-1">Wood Frame & Headboard:</span>
                <div className="flex gap-1.5">
                  {['Natural Oak', 'Dark Walnut', 'Ebony Smoked'].map(wood => (
                    <button
                      key={wood}
                      onClick={() => setSelectedWood(wood)}
                      className={`flex-1 py-1 px-2 rounded text-[11px] border transition-colors ${
                        selectedWood === wood
                          ? 'bg-amber-950/60 border-amber-500 text-amber-300 font-medium'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {wood}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-2.5 bg-slate-900/70 rounded-lg border border-slate-800 space-y-1 text-[11px] text-slate-400">
                <div className="flex justify-between">
                  <span>Standard Dimensions:</span>
                  <span className="text-slate-200 font-mono">200 × 210 × 125 cm</span>
                </div>
                <div className="flex justify-between">
                  <span>Mattress Compatibility:</span>
                  <span className="text-slate-200">Standard King / Queen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={handleAddToInquiry}
              className="w-full py-2 px-3 text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-amber-600/20"
            >
              {showInquirySent ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Added to Bedroom Quotation ({inquiryCount})</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Request Custom Bedroom Quote · {currentSet.priceBirr.toLocaleString()} Birr</span>
                </>
              )}
            </button>

            <a
              href="https://abenezer-bed-room.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-[11px] text-slate-400 hover:text-amber-300 transition-colors py-1 flex items-center justify-center gap-1"
            >
              <span>Explore All Bedroom Sets on Live Vercel Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>PRODUCTION VERCEL URL: abenezer-bed-room.vercel.app</div>
        <div className="text-amber-400 font-bold">LIVE STORE</div>
      </div>
    </div>
  );
};
