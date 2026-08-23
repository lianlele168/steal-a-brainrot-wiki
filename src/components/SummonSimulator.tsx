'use client';

import React, { useState } from 'react';
import { Sparkles, Trophy, RefreshCw, Gift, Flame, Package } from 'lucide-react';
import { BRAINROT_CHARACTERS, BrainrotCharacter } from '@/data/wikiData';

interface PullHistoryItem {
  character: BrainrotCharacter;
  timestamp: string;
}

export default function SummonSimulator() {
  const [selectedPack, setSelectedPack] = useState<'STANDARD' | 'MYTHIC' | 'GOD'>('MYTHIC');
  const [currentPull, setCurrentPull] = useState<BrainrotCharacter | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [totalPulls, setTotalPulls] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [pullHistory, setPullHistory] = useState<PullHistoryItem[]>([]);

  const packs = {
    STANDARD: { name: 'Standard Meme Crate', cost: 100000, godChance: 0.1, mythicChance: 2, legendaryChance: 10 },
    MYTHIC: { name: 'Mythic Brainrot Capsule', cost: 500000, godChance: 1, mythicChance: 10, legendaryChance: 35 },
    GOD: { name: 'God Entity Vault', cost: 5000000, godChance: 8, mythicChance: 40, legendaryChance: 52 }
  };

  const handleSummon = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setCurrentPull(null);

    const pack = packs[selectedPack];
    setTotalSpent((prev) => prev + pack.cost);
    setTotalPulls((prev) => prev + 1);

    setTimeout(() => {
      // Roll random 0 - 100
      const rand = Math.random() * 100;
      let pulledTier: 'GOD' | 'SECRET' | 'MYTHIC' | 'LEGENDARY' | 'EPIC' | 'RARE' = 'RARE';

      if (rand < pack.godChance) {
        pulledTier = 'GOD';
      } else if (rand < pack.godChance + pack.mythicChance) {
        pulledTier = 'MYTHIC';
      } else if (rand < pack.godChance + pack.mythicChance + pack.legendaryChance) {
        pulledTier = 'LEGENDARY';
      } else if (rand < 80) {
        pulledTier = 'EPIC';
      } else {
        pulledTier = 'RARE';
      }

      // Filter characters by tier
      const tierChars = BRAINROT_CHARACTERS.filter((c) => c.tier === pulledTier || c.tier === 'SECRET');
      const selected = tierChars.length > 0 
        ? tierChars[Math.floor(Math.random() * tierChars.length)] 
        : BRAINROT_CHARACTERS[BRAINROT_CHARACTERS.length - 1];

      setCurrentPull(selected);
      setIsSpinning(false);

      setPullHistory((prev) => [
        { character: selected, timestamp: new Date().toLocaleTimeString() },
        ...prev.slice(0, 9)
      ]);
    }, 1200);
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-pink-500/40 neon-glow space-y-6">
      
      {/* Header */}
      <div className="flex items-center space-x-3 border-b border-purple-900/60 pb-4">
        <div className="w-10 h-10 rounded-xl bg-pink-950 flex items-center justify-center text-pink-400 border border-pink-700/50">
          <Package className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Meme Pack Summon Simulator</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">Live Odds</span>
          </h2>
          <p className="text-xs text-purple-300">Test your unboxing luck before spending Cash in-game!</p>
        </div>
      </div>

      {/* Select Crate Pack */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {(['STANDARD', 'MYTHIC', 'GOD'] as const).map((pkKey) => {
          const pk = packs[pkKey];
          return (
            <button
              key={pkKey}
              type="button"
              onClick={() => setSelectedPack(pkKey)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedPack === pkKey
                  ? 'bg-gradient-to-br from-purple-900/80 to-pink-900/80 border-pink-400 shadow-lg shadow-pink-600/20'
                  : 'bg-purple-950/40 border-purple-900/60 hover:bg-purple-900/40'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-extrabold text-white text-xs">{pk.name}</span>
              </div>
              <p className="text-[11px] text-pink-300 font-bold">${pk.cost.toLocaleString()} Cash</p>
              <div className="text-[10px] text-purple-400 mt-2 space-y-0.5">
                <div>God Odds: <strong className="text-amber-400">{pk.godChance}%</strong></div>
                <div>Mythic Odds: <strong className="text-pink-400">{pk.mythicChance}%</strong></div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Summon Action Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-b from-[#12082b] to-[#080314] border border-purple-800/60 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[220px]">
        
        {isSpinning ? (
          <div className="space-y-4 animate-pulse">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-600 to-cyan-400 animate-spin mx-auto flex items-center justify-center text-2xl">
              📦
            </div>
            <p className="text-sm font-bold text-pink-300">Unboxing {packs[selectedPack].name}...</p>
          </div>
        ) : currentPull ? (
          <div className="space-y-3 animate-in fade-in zoom-in duration-300">
            <span className="text-6xl block transform hover:scale-110 transition-transform">{currentPull.icon}</span>
            <div>
              <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-pink-950 text-pink-300 border border-pink-700">
                {currentPull.tier} TIER
              </span>
              <h3 className="text-2xl font-black text-white mt-2">{currentPull.name}</h3>
              <p className="text-xs text-purple-300 mt-1">{currentPull.description}</p>
            </div>
            <div className="pt-2 text-xs font-bold text-emerald-400">
              Harvest Speed: ${currentPull.incomePerSec.toLocaleString()}/s
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-purple-400">
            <span className="text-4xl block">🎁</span>
            <p className="text-xs font-medium">Click Open Crate below to simulate a pull!</p>
          </div>
        )}

      </div>

      {/* Action Button & Counters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={handleSummon}
          disabled={isSpinning}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 hover:from-pink-500 hover:to-cyan-400 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-600/30 transition-all disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>OPEN CRATE (${packs[selectedPack].cost.toLocaleString()})</span>
        </button>

        <div className="flex space-x-4 text-xs text-purple-300">
          <div>Pulls: <strong className="text-white">{totalPulls}</strong></div>
          <div>Total Spent: <strong className="text-pink-400">${totalSpent.toLocaleString()}</strong></div>
        </div>
      </div>

      {/* Recent Pull History */}
      {pullHistory.length > 0 && (
        <div className="pt-4 border-t border-purple-900/60">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-3">Recent Unboxed Items</span>
          <div className="flex flex-wrap gap-2">
            {pullHistory.map((item, idx) => (
              <div key={idx} className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800 text-xs flex items-center space-x-1.5">
                <span>{item.character.icon}</span>
                <span className="font-bold text-white">{item.character.name}</span>
                <span className="text-[10px] text-pink-400 font-mono">({item.character.tier})</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
