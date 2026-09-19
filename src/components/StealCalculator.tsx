'use client';

import React, { useState } from 'react';
import { Calculator, AlertCircle, Sparkles } from 'lucide-react';
import { BRAINROT_CHARACTERS, REBIRTH_DATA, DATA_VERIFIED_DATE } from '@/data/wikiData';

/**
 * Income & Rebirth Calculator.
 * Only uses verified numbers: base income per second (Beebom/Fandom) and the
 * permanent Rebirth income multiplier (Fandom Rebirth table, x0.5 - x17).
 * No invented "steal success odds" or shield penalties — those values were
 * unverifiable and have been removed.
 */
export default function StealCalculator() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(BRAINROT_CHARACTERS[0].id);
  const [rebirthLevel, setRebirthLevel] = useState(1);
  const [ownedCount, setOwnedCount] = useState(1);

  const selectedChar = BRAINROT_CHARACTERS.find((c) => c.id === selectedCharacterId) || BRAINROT_CHARACTERS[0];
  const selectedRebirth = REBIRTH_DATA.find((r) => r.level === rebirthLevel) || REBIRTH_DATA[0];

  const baseIncomePerSec = selectedChar.incomePerSec;
  const totalIncomePerSec = baseIncomePerSec * selectedRebirth.multiplier * ownedCount;
  const incomePerHour = totalIncomePerSec * 3600;
  const incomePerDay = incomePerHour * 24;

  const fmt = (n: number) => {
    if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
    if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
    if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
    if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
    return `$${n.toFixed(n % 1 === 0 ? 0 : 1)}`;
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 neon-glow border border-pink-500/30">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-pink-950 flex items-center justify-center border border-pink-700/50 text-pink-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Brainrot Income Calculator</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-pink-900/60 text-pink-300 font-mono">Verified Data</span>
          </h2>
          <p className="text-xs text-purple-300">Calculate real income per second using verified base rates and the Rebirth multiplier.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Input Parameters */}
        <div className="space-y-6">

          {/* Select Brainrot */}
          <div>
            <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
              Select Brainrot
            </label>
            <select
              value={selectedCharacterId}
              onChange={(e) => setSelectedCharacterId(e.target.value)}
              className="w-full bg-[#0d0722] border border-purple-800/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
            >
              {BRAINROT_CHARACTERS.map((char) => (
                <option key={char.id} value={char.id}>
                  {char.icon} {char.name} ({char.tier}) — ${char.incomePerSec.toLocaleString()}/s
                </option>
              ))}
            </select>
          </div>

          {/* Owned count */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-purple-200 uppercase tracking-wider">
                Copies Owned
              </label>
              <span className="text-xs font-mono text-pink-400 font-bold">{ownedCount}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={ownedCount}
              onChange={(e) => setOwnedCount(Number(e.target.value))}
              className="w-full accent-pink-500 bg-purple-950 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Rebirth Level */}
          <div>
            <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
              Your Rebirth Level
            </label>
            <select
              value={rebirthLevel}
              onChange={(e) => setRebirthLevel(Number(e.target.value))}
              className="w-full bg-[#0d0722] border border-purple-800/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
            >
              {REBIRTH_DATA.map((r) => (
                <option key={r.level} value={r.level}>
                  Rebirth {r.level} — x{r.multiplier} income multiplier
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start space-x-2 p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span className="text-[11px] text-purple-300 leading-relaxed">
              Rebirth also grants a one-time {selectedRebirth.cashBonus} cash bonus and requires{' '}
              {selectedRebirth.requiredBrainrots.join(' + ')} on your base.
            </span>
          </div>

        </div>

        {/* Calculation Results Card */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-[#140b2e] to-[#0a0518] border border-pink-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-2xl rounded-full"></div>

          <div>
            <div className="flex items-center justify-between mb-4 border-b border-purple-900/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Income Output</span>
              <span className="text-[10px] px-2 py-0.5 bg-purple-950 text-purple-300 rounded border border-purple-800">
                {selectedChar.icon} {selectedChar.name}
              </span>
            </div>

            {/* Income Earnings Breakdown */}
            <div className="grid grid-cols-2 gap-4 pt-1 pb-4">
              <div className="bg-purple-950/60 p-3 rounded-xl border border-purple-800/40">
                <span className="text-[10px] text-purple-400 uppercase font-bold block mb-1">Base Income</span>
                <span className="text-base font-extrabold text-white">${baseIncomePerSec.toLocaleString()}/s</span>
              </div>
              <div className="bg-pink-950/50 p-3 rounded-xl border border-pink-800/50">
                <span className="text-[10px] text-pink-300 uppercase font-bold block mb-1">Rebirth x Copies</span>
                <span className="text-base font-extrabold text-pink-400">
                  x{selectedRebirth.multiplier} x {ownedCount}
                </span>
              </div>
            </div>

            {/* Total Cash / Sec */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-pink-500/40 text-center">
              <span className="text-xs text-purple-200 font-bold uppercase tracking-wider block">Total Verified Income</span>
              <span className="text-3xl font-black text-white mt-1 block tracking-tight">
                {fmt(totalIncomePerSec)} <span className="text-xs font-normal text-pink-300">/ sec</span>
              </span>
            </div>

            {/* Per hour / day */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-purple-950/60 p-3 rounded-xl border border-purple-800/40 text-center">
                <span className="text-[10px] text-purple-400 uppercase font-bold block mb-1">Per Hour</span>
                <span className="text-base font-extrabold text-cyan-300">{fmt(incomePerHour)}</span>
              </div>
              <div className="bg-purple-950/60 p-3 rounded-xl border border-purple-800/40 text-center">
                <span className="text-[10px] text-purple-400 uppercase font-bold block mb-1">Per Day</span>
                <span className="text-base font-extrabold text-emerald-300">{fmt(incomePerDay)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-900/60 flex items-start space-x-2 text-[11px] text-purple-400">
            <AlertCircle className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
            <span>
              Base income from the Beebom/Fandom cross-checked table and Rebirth multipliers from the Fandom Rebirth
              table (last verified {DATA_VERIFIED_DATE}). Mutation multipliers (Gold, Rainbow, etc.) are not included
              because no verified values have been published.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
