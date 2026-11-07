import React, { useState } from 'react';
import { ShoppingCart, Star, Search, MapPin, ArrowUpRight, Check, X } from 'lucide-react';

interface AmazonProduct {
  id: string;
  title: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  prime: boolean;
  category: string;
}

const AMAZON_PRODUCTS: AmazonProduct[] = [
  {
    id: 'amz-1',
    title: 'Sony WH-1000XM5 Noise Canceling Wireless Headphones',
    rating: 4.8,
    reviewsCount: 14280,
    price: 348.00,
    originalPrice: 399.99,
    prime: true,
    category: 'Electronics',
  },
  {
    id: 'amz-2',
    title: 'Apple iPad Air 11-inch M2 Chip Liquid Retina Display',
    rating: 4.9,
    reviewsCount: 6520,
    price: 599.00,
    originalPrice: 649.00,
    prime: true,
    category: 'Computers',
  },
  {
    id: 'amz-3',
    title: 'Kindle Paperwhite 16 GB with 6.8" Glare-Free Display',
    rating: 4.7,
    reviewsCount: 38400,
    price: 149.99,
    originalPrice: 169.99,
    prime: true,
    category: 'Devices',
  },
];

export const AmazonPreview: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ product: AmazonProduct; qty: number }[]>([
    { product: AMAZON_PRODUCTS[0], qty: 1 }
  ]);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0);

  const handleAddToCart = (product: AmazonProduct) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { product, qty: 1 }];
    });
    setJustAdded(product.id);
    setTimeout(() => setJustAdded(null), 1500);
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-900 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-sans select-none">
      {/* Top Amazon Dark Nav Bar */}
      <div className="h-12 bg-slate-950 px-3 sm:px-4 flex items-center justify-between gap-3 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-baseline">
            <span className="text-white font-bold text-base sm:text-lg tracking-tight font-sans">
              amazon<span className="text-amber-500 font-extrabold text-sm">.clone</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-[11px] text-slate-300">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span className="text-slate-400">Deliver to</span>
            <span className="font-bold text-white">New York 10001</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2 flex">
          <input
            type="text"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            placeholder="Search Amazon products..."
            className="w-full px-2.5 py-1 bg-white text-slate-900 text-xs rounded-l focus:outline-none"
          />
          <button className="bg-amber-500 hover:bg-amber-600 px-3 text-slate-950 rounded-r flex items-center justify-center transition-colors">
            <Search className="w-3.5 h-3.5 font-bold" />
          </button>
        </div>

        {/* Right Nav & Cart */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCartDrawer(!showCartDrawer)}
            className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-800 transition-colors relative"
          >
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-white" />
              <span className="absolute -top-1.5 -right-2 bg-amber-500 text-slate-950 font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                {totalCartCount}
              </span>
            </div>
            <span className="text-xs font-bold text-white hidden sm:inline">Cart</span>
          </button>

          <a
            href="https://amazon-clone-r5sm-delta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded transition-colors"
          >
            <span className="hidden sm:inline">Visit Live App</span>
            <span className="sm:hidden">Live</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Sub Nav Bar */}
      <div className="h-7 bg-slate-900 px-3 sm:px-4 flex items-center gap-4 text-[11px] text-slate-300 border-b border-slate-800 overflow-x-auto scrollbar-none">
        <span className="font-bold text-white cursor-pointer">All</span>
        <span className="text-amber-400 font-medium cursor-pointer">Today's Deals</span>
        <span className="hover:text-white cursor-pointer">Customer Service</span>
        <span className="hover:text-white cursor-pointer">Registry</span>
        <span className="hover:text-white cursor-pointer">Gift Cards</span>
        <span className="hover:text-white cursor-pointer">Sell</span>
      </div>

      {/* Main Deals Grid */}
      <div className="flex-1 bg-slate-950 p-3 sm:p-4 overflow-y-auto">
        <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">Today's Top Electronics Deals</span>
            <span className="px-1.5 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold rounded">
              Up to 25% Off
            </span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Free Shipping with Prime</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {AMAZON_PRODUCTS.map(product => {
            const isAdded = justAdded === product.id;
            const discountPct = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

            return (
              <div
                key={product.id}
                className="bg-slate-900 rounded-lg p-3 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="text-blue-400 font-bold tracking-tight">prime</span>
                    <span className="text-amber-400 bg-amber-950/80 px-1 py-0.5 rounded font-mono font-bold">
                      {discountPct}% OFF
                    </span>
                  </div>

                  <h4 className="text-xs font-semibold text-slate-100 line-clamp-2 leading-snug">
                    {product.title}
                  </h4>

                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[11px] text-amber-400 mt-1.5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-slate-400 text-[10px] font-mono">({product.reviewsCount.toLocaleString()})</span>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-base font-bold font-mono text-white">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-slate-500 line-through font-mono">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-1.5 px-2 text-xs font-bold rounded transition-colors flex items-center justify-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cart Slide-Over Drawer */}
      {showCartDrawer && (
        <div className="absolute inset-0 z-30 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 animate-in fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Amazon Cart ({totalCartCount} items)
              </span>
            </div>
            <button
              onClick={() => setShowCartDrawer(false)}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 overflow-y-auto flex-1">
            {cartItems.map((item, idx) => (
              <div key={idx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                <div className="pr-3">
                  <div className="font-semibold text-slate-200 line-clamp-1">{item.product.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Qty: {item.qty} · Prime Eligible</div>
                </div>
                <div className="font-mono text-amber-400 font-bold whitespace-nowrap">
                  ${(item.product.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Subtotal ({totalCartCount} items):</span>
              <span className="font-mono text-amber-400 text-sm">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <a
                href="https://amazon-clone-r5sm-delta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded text-xs font-bold text-center transition-colors flex items-center justify-center gap-1"
              >
                <span>Proceed to Checkout on Live Vercel App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-950 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>PRODUCTION VERCEL URL: amazon-clone-r5sm-delta.vercel.app</div>
        <div className="text-amber-500 font-bold">FULL-STACK CLONE</div>
      </div>
    </div>
  );
};
