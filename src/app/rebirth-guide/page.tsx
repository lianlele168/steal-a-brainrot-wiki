import React from 'react';
import { Metadata } from 'next';
import { REBIRTH_DATA } from '@/data/wikiData';
import { Zap, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/rebirth-guide' },
  title: "Rebirth Multipliers & Unlock Guide",
  description: "Complete Rebirth tier guide for Steal a Brainrot Roblox. Rebirth costs, income multiplier scaling up to 100x, and secret meme unlocks.",
};

export default function RebirthGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          REBIRTH & MULTIPLIER <span className="gradient-title">GUIDE</span>
        </h1>
        <p className="text-sm text-purple-300">
          Reset your base cash in exchange for massive passive income multipliers and exclusive Secret tier meme unlocks.
        </p>
      </div>

      <div className="space-y-4">
        {REBIRTH_DATA.map((tier) => (
          <div key={tier.level} className="glass-card p-5 rounded-xl border border-purple-900/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-black text-white">Rebirth Level {tier.level}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-pink-950 text-pink-300 font-bold border border-pink-700/50">
                  {tier.multiplier}
                </span>
              </div>
              <p className="text-xs text-purple-400 mt-1">Cost: <strong className="text-emerald-300">{tier.cost}</strong></p>
            </div>

            <div className="text-xs text-right">
              <span className="text-purple-400 block mb-1">Unlocked Memes:</span>
              <div className="flex flex-wrap gap-1">
                {tier.unlockedCharacters.map((c) => (
                  <span key={c} className="px-2 py-1 rounded bg-purple-900/60 text-purple-200 font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
