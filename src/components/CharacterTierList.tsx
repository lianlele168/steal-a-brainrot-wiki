'use client';

import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { BRAINROT_CHARACTERS, BrainrotTier, DATA_VERIFIED_DATE } from '@/data/wikiData';

const TIERS: ('ALL' | BrainrotTier)[] = ['ALL', 'SECRET', 'BRAINROT GOD', 'MYTHIC', 'LEGENDARY', 'EPIC', 'RARE', 'COMMON'];

const getTierBadgeColor = (tier: string) => {
  switch (tier) {
    case 'SECRET': return 'bg-purple-950 text-purple-300 border-purple-500/60';
    case 'BRAINROT GOD': return 'bg-amber-950 text-amber-300 border-amber-500/60';
    case 'MYTHIC': return 'bg-pink-950 text-pink-300 border-pink-500/60';
    case 'LEGENDARY': return 'bg-amber-900/60 text-amber-200 border-amber-600/50';
    case 'EPIC': return 'bg-cyan-950 text-cyan-300 border-cyan-500/60';
    case 'RARE': return 'bg-blue-950 text-blue-300 border-blue-500/60';
    default: return 'bg-slate-950 text-slate-300 border-slate-500/60';
  }
};

export default function CharacterTierList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');

  const filteredCharacters = BRAINROT_CHARACTERS.filter((char) => {
    const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          char.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'ALL' || char.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="space-y-6">

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#0d0722] p-4 rounded-xl border border-purple-900/60">

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search brainrot..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#080312] border border-purple-800 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-purple-500 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Tier Filter Pills */}
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto justify-center">
          {TIERS.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTier(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedTier === t
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'bg-purple-950/80 text-purple-400 hover:text-purple-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

      </div>

      <p className="text-[11px] text-purple-400">
        Showing {filteredCharacters.length} of {BRAINROT_CHARACTERS.length} verified units. Prices and income are
        cross-checked against the Fandom Wiki and Beebom (last verified {DATA_VERIFIED_DATE}). Spawn rates and
        mutation multipliers are not published by the developer and are therefore not listed.
      </p>

      {/* Grid of Brainrot Characters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            className="glass-card rounded-xl p-5 border border-purple-900/60 glass-card-hover flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{char.icon}</span>
                <span className={`text-[10px] font-black tracking-wider px-2.5 py-1 rounded-md border ${getTierBadgeColor(char.tier)}`}>
                  {char.tier}
                </span>
              </div>

              <h3 className="font-extrabold text-white text-base mb-1">{char.name}</h3>
              <p className="text-xs text-purple-300 leading-relaxed mb-4">{char.description}</p>
              {char.note && (
                <p className="text-[11px] text-amber-300/90 leading-relaxed mb-3 border-l-2 border-amber-700/60 pl-2">
                  {char.note}
                </p>
              )}
            </div>

            <div className="space-y-2 pt-3 border-t border-purple-950 text-xs">
              <div className="flex justify-between items-center text-purple-300">
                <span>Income:</span>
                <span className="font-extrabold text-pink-400">${char.incomePerSec.toLocaleString()}/s</span>
              </div>
              <div className="flex justify-between items-center text-purple-300">
                <span>Red Carpet Cost:</span>
                <span className="font-bold text-cyan-400">${char.cost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-purple-300">
                <span>Source:</span>
                <span className="font-bold text-amber-300">Red Carpet spawn</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
