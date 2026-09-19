import React from 'react';
import { Metadata } from 'next';
import { Wrench, AlertTriangle } from 'lucide-react';
import { GEAR_DATA, DATA_VERIFIED_DATE } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/fusion-guide' },
  title: "Gear & Items Guide — All 39 Shop Items, Prices & Rebirth Requirements",
  description:
    "Complete verified Gear table for Steal a Brainrot Roblox: all 39 Cash-shop items with exact prices, the Rebirth level required to unlock each, and their effects.",
};

export default function GearGuidePage() {
  const maxRebirth = Math.max(...GEAR_DATA.map((g) => g.rebirthReq));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          GEAR & ITEMS <span className="gradient-title">GUIDE</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          All {GEAR_DATA.length} purchasable Cash-shop Gear items with verified prices, Rebirth unlock levels and
          effects, from the $500 Slap up to the $1.5B Giant Potion.
        </p>
        <p className="text-[11px] text-purple-500">
          Source: Steal a Brainrot Fandom Wiki Gears page — last verified {DATA_VERIFIED_DATE}.
        </p>
      </div>

      <div className="glass-card p-4 rounded-xl border border-amber-900/60 flex items-start space-x-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-200/90 leading-relaxed">
          This game has no verified &quot;fusion crafting&quot; system — earlier versions of this page listed invented fusion
          recipes and they have been removed. Event-wheel and Robux-shop Gear exist (0.1%-0.5% drop odds) but
          their prices could not be verified, so they are intentionally excluded from the table below.
        </p>
      </div>

      {Array.from({ length: maxRebirth + 1 }, (_, req) => {
        const items = GEAR_DATA.filter((g) => g.rebirthReq === req);
        if (items.length === 0) return null;
        return (
          <div key={req} className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Wrench className="w-5 h-5 text-pink-400" />
              <span>{req === 0 ? 'Available from the start (no Rebirth needed)' : `Unlocked at Rebirth ${req}`}</span>
            </h2>
            <div className="space-y-2">
              {items.map((g) => (
                <div key={g.id} className="p-3 rounded-xl bg-purple-950/50 border border-purple-800/60 flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div className="space-y-1">
                    <span className="font-extrabold text-white text-sm">{g.name}</span>
                    <p className="text-[11px] text-purple-300 leading-relaxed">{g.effect}</p>
                  </div>
                  <span className="text-xs font-black text-emerald-300 whitespace-nowrap sm:text-right self-start sm:self-center">
                    {g.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
