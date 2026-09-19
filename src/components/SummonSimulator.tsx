'use client';

import React, { useState } from 'react';
import { Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import { BRAINROT_CHARACTERS, BrainrotCharacter, DATA_VERIFIED_DATE } from '@/data/wikiData';

interface PullHistoryItem {
  character: BrainrotCharacter;
  timestamp: string;
}

/**
 * Red Carpet Roulette — a roster learning tool, NOT a spawn-odds simulator.
 * The developer has not published spawn rates, so every verified unit is drawn
 * with equal probability and the tool says so plainly.
 */
export default function SummonSimulator() {
  const [currentPull, setCurrentPull] = useState<BrainrotCharacter | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [totalPulls, setTotalPulls] = useState(0);
  const [pullHistory, setPullHistory] = useState<PullHistoryItem[]>([]);

  const handleSummon = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setCurrentPull(null);
    setTotalPulls((prev) => prev + 1);

    setTimeout(() => {
      const selected = BRAINROT_CHARACTERS[Math.floor(Math.random() * BRAINROT_CHARACTERS.length)];
      setCurrentPull(selected);
      setIsSpinning(false);

      setPullHistory((prev) => [
        { character: selected, timestamp: new Date().toLocaleTimeString() },
        ...prev.slice(0, 9)
      ]);
    }, 900);
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-pink-500/40 neon-glow space-y-6">

      {/* Header */}
      <div className="flex items-center space-x-3 border-b border-purple-900/60 pb-4">
        <div className="w-10 h-10 rounded-xl bg-pink-950 flex items-center justify-center text-pink-400 border border-pink-700/50">
          <RefreshCw className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Red Carpet Roulette</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 font-mono">Roster Trainer</span>
          </h2>
          <p className="text-xs text-purple-300">Draw a random verified Brainrot and learn its real cost and income stats.</p>
        </div>
      </div>

      {/* Spin Action Box */}
      <div className="p-8 rounded-2xl bg-gradient-to-b from-[#12082b] to-[#080314] border border-purple-800/60 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[220px]">

        {isSpinning ? (
          <div className="space-y-4 animate-pulse">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-600 to-cyan-400 animate-spin mx-auto flex items-center justify-center text-2xl">
              🧠
            </div>
            <p className="text-sm font-bold text-pink-300">Rolling down the Red Carpet...</p>
          </div>
        ) : currentPull ? (
          <div className="space-y-3 animate-in fade-in zoom-in duration-300">
            <span className="text-6xl block transform hover:scale-110 transition-transform">{currentPull.icon}</span>
            <div>
              <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-pink-950 text-pink-300 border border-pink-700">
                {currentPull.tier}
              </span>
              <h3 className="text-2xl font-black text-white mt-2">{currentPull.name}</h3>
              <p className="text-xs text-purple-300 mt-1 max-w-md">{currentPull.description}</p>
            </div>
            <div className="pt-2 text-xs font-bold text-emerald-400">
              Cost ${currentPull.cost.toLocaleString()} — Income ${currentPull.incomePerSec.toLocaleString()}/s
            </div>
          </div>
        ) : (
          <div className="space-y-2 text-purple-400">
            <span className="text-4xl block">🧠</span>
            <p className="text-xs font-medium">Click Roll to draw a random verified Brainrot!</p>
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
          <span>ROLL THE RED CARPET</span>
        </button>

        <div className="flex space-x-4 text-xs text-purple-300">
          <div>Rolls: <strong className="text-white">{totalPulls}</strong></div>
          <div>Pool: <strong className="text-pink-400">{BRAINROT_CHARACTERS.length} verified units</strong></div>
        </div>
      </div>

      {/* Recent Pull History */}
      {pullHistory.length > 0 && (
        <div className="pt-4 border-t border-purple-900/60">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-3">Recent Draws</span>
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

      {/* Honesty Disclaimer */}
      <div className="flex items-start space-x-2 text-[11px] text-purple-400 border-t border-purple-900/60 pt-3">
        <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <span>
          This is a learning tool, not an odds simulator. The developer has never published Red Carpet spawn
          rates, so every one of the {BRAINROT_CHARACTERS.length} verified units (last verified {DATA_VERIFIED_DATE})
          is drawn with equal probability. Sites claiming exact Secret spawn percentages are guessing.
        </span>
      </div>

    </div>
  );
}
