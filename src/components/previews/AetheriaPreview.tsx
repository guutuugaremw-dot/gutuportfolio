import React, { useState } from 'react';
import { ShoppingBag, X, Check, Eye } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  priceUSD: number;
  material: string;
  accent: string;
  badge: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'p-1',
    name: 'Monolith Floor Lamp No. 04',
    category: 'Architectural Lighting',
    priceUSD: 1850,
    material: 'Brushed Titanium & Cast Smoked Glass',
    accent: '#3b82f6',
    badge: 'Limited Edition 25/50',
  },
  {
    id: 'p-2',
    name: 'Oblique Cantilever Chair',
    category: 'Sculptural Furniture',
    priceUSD: 3200,
    material: 'Anodized Slate Aluminum & Bouclé',
    accent: '#64748b',
    badge: 'Crafted in Milan',
  },
  {
    id: 'p-3',
    name: 'Solstice Vessel Basin',
    category: 'Ceramic Objects',
    priceUSD: 740,
    material: 'Hand-Thrown Volcanic Clay & Raw Glaze',
    accent: '#0284c7',
    badge: 'Studio Signature',
  },
];

export const AetheriaPreview: React.FC = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [cartCount, setCartCount] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState('Obsidian Matte');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const product = PRODUCTS[selectedProductIndex] || PRODUCTS[0];

  const currencyMultiplier = currency === 'EUR' ? 0.92 : currency === 'GBP' ? 0.79 : 1.0;
  const currencySymbol = currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$';

  const formatPrice = (usd: number) => {
    return `${currencySymbol}${Math.round(usd * currencyMultiplier).toLocaleString()}`;
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Editorial Header */}
      <div className="h-11 bg-slate-900/90 border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-serif tracking-widest text-xs uppercase font-medium text-slate-100">Aetheria</span>
          <span className="text-slate-600 text-xs">/</span>
          <span className="text-slate-400 text-xs">Atelier Collection</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Currency Switcher */}
          <div className="flex items-center bg-slate-800 rounded p-0.5 text-[11px] font-mono">
            {(['USD', 'EUR', 'GBP'] as const).map(c => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  currency === c ? 'bg-slate-700 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors relative"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="relative flex-1 flex flex-col sm:flex-row overflow-hidden">
        {/* Left: Interactive Visual Display */}
        <div className="w-full sm:w-1/2 h-44 sm:h-auto bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 relative p-4 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-slate-800">
          <div className="flex justify-between items-start">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
              {product.badge}
            </span>
            <div className="flex gap-1.5">
              {PRODUCTS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProductIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === selectedProductIndex ? 'w-5 bg-blue-500' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                  title={p.name}
                />
              ))}
            </div>
          </div>

          {/* Central Architectural Abstract Artwork Graphic */}
          <div className="self-center my-auto relative flex items-center justify-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-blue-500/20 flex items-center justify-center animate-spin [animation-duration:30s]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border border-slate-700 rotate-45 flex items-center justify-center" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-[11px] font-mono text-blue-400 font-semibold tracking-wider">
                {product.category}
              </span>
              <span className="text-[9px] text-slate-400 mt-1">360° Studio View</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Material: {product.material}</span>
            <span className="text-slate-500 flex items-center gap-1">
              <Eye className="w-3 h-3" /> Live Viewport
            </span>
          </div>
        </div>

        {/* Right: Product Details & Purchase Architecture */}
        <div className="w-full sm:w-1/2 p-4 sm:p-5 flex flex-col justify-between bg-slate-950 overflow-y-auto">
          <div>
            <div className="text-[11px] text-blue-400 font-medium tracking-wide">
              {product.category}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 mt-0.5 leading-snug">
              {product.name}
            </h3>
            <div className="text-base sm:text-lg font-mono font-medium text-slate-200 mt-1">
              {formatPrice(product.priceUSD)}
            </div>

            {/* Finish Selector */}
            <div className="mt-3">
              <span className="text-[11px] text-slate-400 block mb-1.5">Select Architectural Finish:</span>
              <div className="flex gap-2">
                {['Obsidian Matte', 'Brushed Titanium', 'Raw Travertine'].map(finish => (
                  <button
                    key={finish}
                    onClick={() => setSelectedFinish(finish)}
                    className={`px-2 py-1 text-[11px] rounded transition-all ${
                      selectedFinish === finish
                        ? 'bg-blue-950 text-blue-300 border border-blue-500/60 font-medium'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2">
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" /> Added to Atelier Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Bag · {formatPrice(product.priceUSD)}
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Cart Drawer Overlay */}
      {isCartOpen && (
        <div className="absolute inset-0 z-30 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Your Atelier Bag ({cartCount})
            </span>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-100 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 overflow-y-auto">
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
              <div>
                <div className="font-medium text-slate-200">{product.name}</div>
                <div className="text-[11px] text-slate-400">{selectedFinish} · Qty: {cartCount}</div>
              </div>
              <div className="font-mono text-blue-400 font-medium">
                {formatPrice(product.priceUSD * cartCount)}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-400">Total:</span>
              <span className="font-mono text-slate-100">{formatPrice(product.priceUSD * cartCount)}</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Proceed to High-Speed Checkout
            </button>
          </div>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>GLOBAL SHIPPING · DUTIES INCLUDED</div>
        <div className="text-blue-400">SUB-100MS LATENCY ARCHITECTURE</div>
      </div>
    </div>
  );
};
