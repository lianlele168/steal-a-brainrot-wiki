'use client';

import React, { useState } from 'react';
import { Calculator, Shield, Zap, Flame, Trophy, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { BRAINROT_CHARACTERS, REBIRTH_DATA } from '@/data/wikiData';

export default function StealCalculator() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(BRAINROT_CHARACTERS[2].id); // CaseOh Prime
  const [speedBoost, setSpeedBoost] = useState(25); // +25% Speed
  const [luckPotion, setLuckPotion] = useState(true); // 2x Luck Potion active
  const [targetShieldLevel, setTargetShieldLevel] = useState(2); // Shield Lv 2
  const [rebirthLevel, setRebirthLevel] = useState(2); // Rebirth 2 (5x)

  const selectedChar = BRAINROT_CHARACTERS.find(c => c.id === selectedCharacterId) || BRAINROT_CHARACTERS[0];
  const selectedRebirth = REBIRTH_DATA.find(r => r.level === rebirthLevel) || REBIRTH_DATA[0];

  // Base difficulty weight
  let baseDifficultyRate = 85; // Default 85%
  if (selectedChar.tier === 'GOD') baseDifficultyRate = 50;
  if (selectedChar.tier === 'SECRET') baseDifficultyRate = 60;
  if (selectedChar.tier === 'MYTHIC') baseDifficultyRate = 70;
  if (selectedChar.tier === 'LEGENDARY') baseDifficultyRate = 80;

  // Modifiers
  const speedBonus = speedBoost * 0.25;
  const luckBonus = luckPotion ? 20 : 0;
  const shieldPenalty = targetShieldLevel * 12;

  // Final calculated success rate
  const finalSuccessRate = Math.min(99, Math.max(5, Math.round(baseDifficultyRate + speedBonus + luckBonus - shieldPenalty)));

  // Rebirth multiplier numerical parse
  const rebirthMultValue = parseInt(selectedRebirth.multiplier.replace(/[^0-9]/g, '')) || 1;

  // Income calculations
  const baseIncomePerSec = selectedChar.incomePerSec;
  const totalIncomePerSec = baseIncomePerSec * rebirthMultValue;

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 neon-glow border border-pink-500/30">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-pink-950 flex items-center justify-center border border-pink-700/50 text-pink-400">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Steal Success & Income Calculator</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-pink-900/60 text-pink-300 font-mono">2026 Season 2</span>
          </h2>
          <p className="text-xs text-purple-300">Simulate your raid steal odds and calculate total Brainrot Cash/sec.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Input Parameters */}
        <div className="space-y-6">
          
          {/* Select Meme Character */}
          <div>
            <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
              Select Stealer Meme Character
            </label>
            <select
              value={selectedCharacterId}
              onChange={(e) => setSelectedCharacterId(e.target.value)}
              className="w-full bg-[#0d0722] border border-purple-800/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
            >
              {BRAINROT_CHARACTERS.map((char) => (
                <option key={char.id} value={char.id}>
                  {char.icon} {char.name} ({char.tier}) — Base ${char.incomePerSec.toLocaleString()}/s
                </option>
              ))}
            </select>
          </div>

          {/* Speed Boost Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-purple-200 uppercase tracking-wider">
                Speed Boost Potion (+{speedBoost}%)
              </label>
              <span className="text-xs font-mono text-pink-400 font-bold">+{speedBoost}% Speed</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={speedBoost}
              onChange={(e) => setSpeedBoost(Number(e.target.value))}
              className="w-full accent-pink-500 bg-purple-950 h-2 rounded-lg cursor-pointer"
            />
          </div>

          {/* Target Base Shield Level */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-purple-200 uppercase tracking-wider">
                Target Base Shield Level (Defense)
              </label>
              <span className="text-xs font-mono text-amber-400 font-bold">Shield Level {targetShieldLevel}</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {[0, 1, 2, 3, 4, 5].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setTargetShieldLevel(lvl)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    targetShieldLevel === lvl
                      ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                      : 'bg-purple-950/60 text-purple-300 border-purple-900/60 hover:bg-purple-900/40'
                  }`}
                >
                  Lv {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Rebirth Level */}
          <div>
            <label className="block text-xs font-bold text-purple-200 uppercase tracking-wider mb-2">
              Your Current Rebirth Level
            </label>
            <select
              value={rebirthLevel}
              onChange={(e) => setRebirthLevel(Number(e.target.value))}
              className="w-full bg-[#0d0722] border border-purple-800/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-pink-500 font-medium"
            >
              {REBIRTH_DATA.map((r) => (
                <option key={r.level} value={r.level}>
                  Rebirth Level {r.level} — Multiplier {r.multiplier} (Cost: {r.cost})
                </option>
              ))}
            </select>
          </div>

          {/* Luck Potion Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-800/40">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-purple-200">Active 2x Steal Luck Potion</span>
            </div>
            <button
              type="button"
              onClick={() => setLuckPotion(!luckPotion)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                luckPotion ? 'bg-cyan-500 text-black shadow-md' : 'bg-purple-900/60 text-purple-400'
              }`}
            >
              {luckPotion ? 'ACTIVE (+20%)' : 'OFF'}
            </button>
          </div>

        </div>

        {/* Calculation Results Card */}
        <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-[#140b2e] to-[#0a0518] border border-pink-500/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 blur-2xl rounded-full"></div>
          
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-purple-900/60 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Simulation Output</span>
              <span className="text-[10px] px-2 py-0.5 bg-purple-950 text-purple-300 rounded border border-purple-800">
                {selectedChar.name}
              </span>
            </div>

            {/* Steal Success Probability Rate */}
            <div className="mb-6">
              <span className="text-xs text-purple-300 font-medium">Estimated Steal Success Rate</span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className={`text-4xl font-extrabold tracking-tight ${
                  finalSuccessRate >= 75 ? 'text-emerald-400' : finalSuccessRate >= 45 ? 'text-amber-400' : 'text-pink-500'
                }`}>
                  {finalSuccessRate}%
                </span>
                <span className="text-xs text-purple-400">odds per raid attempt</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-purple-950 h-3 rounded-full mt-2 overflow-hidden border border-purple-900">
                <div
                  className={`h-full transition-all duration-500 ${
                    finalSuccessRate >= 75 ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : finalSuccessRate >= 45 ? 'bg-gradient-to-r from-amber-500 to-orange-400' : 'bg-gradient-to-r from-pink-600 to-rose-500'
                  }`}
                  style={{ width: `${finalSuccessRate}%` }}
                ></div>
              </div>
            </div>

            {/* Income Earnings Breakdown */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-purple-900/60">
              <div className="bg-purple-950/60 p-3 rounded-xl border border-purple-800/40">
                <span className="text-[10px] text-purple-400 uppercase font-bold block mb-1">Base Cash / Sec</span>
                <span className="text-base font-extrabold text-white">${baseIncomePerSec.toLocaleString()}</span>
              </div>
              <div className="bg-pink-950/50 p-3 rounded-xl border border-pink-800/50">
                <span className="text-[10px] text-pink-300 uppercase font-bold block mb-1">Rebirth Multiplier</span>
                <span className="text-base font-extrabold text-pink-400">{selectedRebirth.multiplier}</span>
              </div>
            </div>

            {/* Total Harvested Cash / Sec */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-pink-500/40 text-center">
              <span className="text-xs text-purple-200 font-bold uppercase tracking-wider block">Total Estimated Cash Earned</span>
              <span className="text-3xl font-black text-white mt-1 block tracking-tight">
                ${totalIncomePerSec.toLocaleString()} <span className="text-xs font-normal text-pink-300">/ sec</span>
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-900/60 flex items-center space-x-2 text-[11px] text-purple-400">
            <AlertCircle className="w-4 h-4 text-pink-400 shrink-0" />
            <span>Pro Tip: Equip a 2x Luck Potion before stealing God or Secret tier characters to maximize success.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
