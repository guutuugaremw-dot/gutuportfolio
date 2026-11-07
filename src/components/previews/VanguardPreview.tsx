import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, Zap } from 'lucide-react';

export const VanguardPreview: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState<'BTC/USD' | 'ETH/USD' | 'SOL/USD'>('BTC/USD');
  const [currentPrice, setCurrentPrice] = useState(89450.25);
  const [priceChange, setPriceChange] = useState(+3.42);
  const [orderSide, setOrderSide] = useState<'buy' | 'sell'>('buy');
  const [orderAmount, setOrderAmount] = useState('0.5');
  const [lastExecuted, setLastExecuted] = useState<string | null>(null);

  // Price ticking simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.49) * 25;
      setCurrentPrice(prev => {
        const next = Math.round((prev + delta) * 100) / 100;
        return next;
      });
    }, 1400);

    return () => clearInterval(interval);
  }, [selectedPair]);

  const handlePlaceOrder = () => {
    setLastExecuted(`${orderSide.toUpperCase()} ${orderAmount} ${selectedPair.split('/')[0]} @ $${currentPrice.toLocaleString()}`);
    setTimeout(() => setLastExecuted(null), 3000);
  };

  const depthLevels = [
    { price: currentPrice + 45.0, size: '4.82', total: '18.4', side: 'ask' },
    { price: currentPrice + 30.0, size: '2.14', total: '13.6', side: 'ask' },
    { price: currentPrice + 15.0, size: '6.50', total: '11.5', side: 'ask' },
    { price: currentPrice, size: '1.20', total: '5.0', side: 'mid' },
    { price: currentPrice - 15.0, size: '3.40', total: '8.4', side: 'bid' },
    { price: currentPrice - 30.0, size: '7.90', total: '16.3', side: 'bid' },
    { price: currentPrice - 45.0, size: '5.10', total: '21.4', side: 'bid' },
  ];

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] bg-slate-950 text-slate-100 rounded-xl overflow-hidden border border-slate-800 flex flex-col font-mono select-none">
      {/* Terminal Title Bar */}
      <div className="h-11 bg-slate-900 border-b border-slate-800 px-3 sm:px-4 flex items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-emerald-400">VANGUARD TERMINAL</span>
          <span className="text-slate-600">|</span>
          <div className="flex gap-1">
            {(['BTC/USD', 'ETH/USD', 'SOL/USD'] as const).map(pair => (
              <button
                key={pair}
                onClick={() => {
                  setSelectedPair(pair);
                  setCurrentPrice(pair === 'BTC/USD' ? 89450 : pair === 'ETH/USD' ? 3240 : 185);
                }}
                className={`px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                  selectedPair === pair ? 'bg-slate-800 text-blue-400 font-bold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {pair}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 text-[11px] text-emerald-400">
            <Zap className="w-3 h-3 animate-pulse" />
            <span>18ms FEED</span>
          </div>
        </div>
      </div>

      {/* Main Terminal Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 overflow-hidden text-xs">
        {/* Left: Depth Orderbook */}
        <div className="sm:col-span-7 p-3 border-b sm:border-b-0 sm:border-r border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-baseline gap-2">
                <span className="text-base sm:text-lg font-bold text-slate-100 tabular-nums">
                  ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className={`text-[11px] font-semibold flex items-center ${priceChange >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {priceChange >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                  +{priceChange}%
                </span>
              </div>
              <span className="text-[10px] text-slate-400">VOL: $482.4M</span>
            </div>

            {/* Depth Ladder */}
            <div className="space-y-1">
              <div className="grid grid-cols-3 text-[10px] text-slate-400 pb-1 border-b border-slate-800/80">
                <span>PRICE</span>
                <span className="text-right">SIZE</span>
                <span className="text-right">SUM</span>
              </div>
              {depthLevels.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 text-[11px] py-0.5 px-1 rounded tabular-nums ${
                    row.side === 'ask'
                      ? 'text-rose-400 hover:bg-rose-950/20'
                      : row.side === 'bid'
                      ? 'text-emerald-400 hover:bg-emerald-950/20'
                      : 'text-blue-400 font-bold bg-slate-900'
                  }`}
                >
                  <span>${row.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <span className="text-right">{row.size}</span>
                  <span className="text-right text-slate-400">{row.total}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time notification badge */}
          {lastExecuted && (
            <div className="mt-2 p-1.5 bg-emerald-950/80 border border-emerald-600/50 rounded text-[11px] text-emerald-300 flex items-center justify-between animate-in fade-in">
              <span>ORDER EXECUTED</span>
              <span className="truncate ml-2">{lastExecuted}</span>
            </div>
          )}
        </div>

        {/* Right: Quick Limit Execution Panel */}
        <div className="sm:col-span-5 p-3 flex flex-col justify-between bg-slate-950/80">
          <div>
            <div className="flex bg-slate-900 p-0.5 rounded mb-3">
              <button
                onClick={() => setOrderSide('buy')}
                className={`flex-1 py-1 rounded text-xs font-semibold transition-colors ${
                  orderSide === 'buy' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                BUY / LONG
              </button>
              <button
                onClick={() => setOrderSide('sell')}
                className={`flex-1 py-1 rounded text-xs font-semibold transition-colors ${
                  orderSide === 'sell' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                SELL / SHORT
              </button>
            </div>

            <div className="space-y-2 text-[11px]">
              <div>
                <span className="text-slate-400 text-[10px]">ORDER TYPE</span>
                <div className="mt-0.5 p-1.5 bg-slate-900 border border-slate-800 rounded text-slate-200">
                  LIMIT EXECUTION
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[10px]">AMOUNT</span>
                <div className="mt-0.5 flex gap-1">
                  {['0.1', '0.5', '1.0', '2.5'].map(val => (
                    <button
                      key={val}
                      onClick={() => setOrderAmount(val)}
                      className={`flex-1 py-1 rounded border text-[10px] transition-colors ${
                        orderAmount === val
                          ? 'border-blue-500 bg-blue-950/60 text-blue-300 font-bold'
                          : 'border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <button
              onClick={handlePlaceOrder}
              className={`w-full py-2 rounded text-xs font-bold transition-all ${
                orderSide === 'buy'
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                  : 'bg-rose-600 hover:bg-rose-500 text-white'
              }`}
            >
              EXECUTE {orderSide.toUpperCase()} · ${Math.round(parseFloat(orderAmount) * currentPrice).toLocaleString()}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info Strip */}
      <div className="h-7 bg-slate-900 border-t border-slate-800 px-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
        <div>ORDER ROUTING: SUB-CENTRAL COLOCATION</div>
        <div className="text-emerald-400">WCAG AAA ACCESSIBLE DESIGN</div>
      </div>
    </div>
  );
};
