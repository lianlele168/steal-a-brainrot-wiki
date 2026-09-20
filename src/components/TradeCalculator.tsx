'use client';

import React, { useState } from 'react';
import { Scale, Info } from 'lucide-react';
import { BRAINROT_CHARACTERS } from '@/data/wikiData';

/**
 * Value Comparison tool. The game has no verified player-to-player trading market,
 * so this tool compares two verified units by purchase cost and income efficiency
 * instead of inventing "market values".
 */
export default function TradeCalculator() {
  const [unitAId, setUnitAId] = useState(BRAINROT_CHARACTERS[0].id);
  const [unitBId, setUnitBId] = useState(BRAINROT_CHARACTERS[33].id); // Tralalero Tralala

  const unitA = BRAINROT_CHARACTERS.find((c) => c.id === unitAId) || BRAINROT_CHARACTERS[0];
  const unitB = BRAINROT_CHARACTERS.find((c) => c.id === unitBId) || BRAINROT_CHARACTERS[1];

  // Cost-efficiency: seconds of income needed to repay the purchase price (lower is better).
  const paybackA = unitA.cost / unitA.incomePerSec;
  const paybackB = unitB.cost / unitB.incomePerSec;

  const efficiencyA = unitA.incomePerSec / unitA.cost;
  const efficiencyB = unitB.incomePerSec / unitB.cost;

  let verdict = 'EVEN MATCH';
  let verdictColor = 'text-amber-400 border-amber-500 bg-amber-950/80';
  let verdictDetail = 'Both units repay their purchase cost at a similar rate.';

  if (efficiencyA > efficiencyB * 1.2) {
    verdict = `${unitA.name} IS THE BETTER BUY (+${((efficiencyA / efficiencyB - 1) * 100).toFixed(0)}% income efficiency)`;
    verdictColor = 'text-emerald-400 border-emerald-500 bg-emerald-950/80';
    verdictDetail = `${unitA.name} repays its cost in ${paybackA.toLocaleString(undefined, { maximumFractionDigits: 0 })}s versus ${paybackB.toLocaleString(undefined, { maximumFractionDigits: 0 })}s for ${unitB.name}.`;
  } else if (efficiencyB > efficiencyA * 1.2) {
    verdict = `${unitB.name} IS THE BETTER BUY (+${((efficiencyB / efficiencyA - 1) * 100).toFixed(0)}% income efficiency)`;
    verdictColor = 'text-emerald-400 border-emerald-500 bg-emerald-950/80';
    verdictDetail = `${unitB.name} repays its cost in ${paybackB.toLocaleString(undefined, { maximumFractionDigits: 0 })}s versus ${paybackA.toLocaleString(undefined, { maximumFractionDigits: 0 })}s for ${unitA.name}.`;
  } else if (efficiencyB > efficiencyA) {
    verdict = `SLIGHT EDGE TO ${unitB.name}`;
    verdictDetail = `${unitB.name} repays its cost marginally faster.`;
  } else if (efficiencyA > efficiencyB) {
    verdict = `SLIGHT EDGE TO ${unitA.name}`;
    verdictDetail = `${unitA.name} repays its cost marginally faster.`;
  }

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-900/60 space-y-6">

      <div className="flex items-center space-x-3 border-b border-purple-900/60 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-cyan-400 border border-purple-700/50">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Value Comparison Calculator</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900 text-purple-300 font-mono">Cost Efficiency</span>
          </h2>
          <p className="text-xs text-purple-300">Compare two verified Brainrots by purchase cost and income payback time.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Unit A */}
        <div className="p-5 rounded-xl bg-[#0d0722] border border-purple-800/60 space-y-4">
          <span className="text-xs font-extrabold uppercase text-purple-400 tracking-wider block">
            Unit A
          </span>
          <select
            value={unitAId}
            onChange={(e) => setUnitAId(e.target.value)}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500"
          >
            {BRAINROT_CHARACTERS.map((c) => (
              <option key={c.id} value={c.id}>{c.icon} {c.name} ({c.tier})</option>
            ))}
          </select>

          <div className="pt-2 border-t border-purple-900/60 text-xs space-y-1 text-purple-300">
            <div className="flex justify-between"><span>Red Carpet Cost:</span><strong className="text-white">${unitA.cost.toLocaleString()}</strong></div>
            <div className="flex justify-between"><span>Income:</span><strong className="text-pink-400">${unitA.incomePerSec.toLocaleString()}/s</strong></div>
            <div className="flex justify-between"><span>Cost Payback:</span><strong className="text-cyan-400">{paybackA.toLocaleString(undefined, { maximumFractionDigits: 0 })}s of income</strong></div>
          </div>
        </div>

        {/* Unit B */}
        <div className="p-5 rounded-xl bg-[#0d0722] border border-purple-800/60 space-y-4">
          <span className="text-xs font-extrabold uppercase text-purple-400 tracking-wider block">
            Unit B
          </span>
          <select
            value={unitBId}
            onChange={(e) => setUnitBId(e.target.value)}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500"
          >
            {BRAINROT_CHARACTERS.map((c) => (
              <option key={c.id} value={c.id}>{c.icon} {c.name} ({c.tier})</option>
            ))}
          </select>

          <div className="pt-2 border-t border-purple-900/60 text-xs space-y-1 text-purple-300">
            <div className="flex justify-between"><span>Red Carpet Cost:</span><strong className="text-white">${unitB.cost.toLocaleString()}</strong></div>
            <div className="flex justify-between"><span>Income:</span><strong className="text-cyan-400">${unitB.incomePerSec.toLocaleString()}/s</strong></div>
            <div className="flex justify-between"><span>Cost Payback:</span><strong className="text-amber-300">{paybackB.toLocaleString(undefined, { maximumFractionDigits: 0 })}s of income</strong></div>
          </div>
        </div>

      </div>

      {/* Verdict Output */}
      <div className={`p-6 rounded-2xl border text-center space-y-2 ${verdictColor}`}>
        <span className="text-xs font-bold uppercase tracking-wider block opacity-90">Efficiency Verdict</span>
        <h3 className="text-xl sm:text-2xl font-black">{verdict}</h3>
        <p className="text-xs max-w-md mx-auto opacity-90">{verdictDetail}</p>
      </div>

      <div className="flex items-start space-x-2 text-[11px] text-purple-400">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <span>
          Efficiency compares verified base income against the red-carpet price only. Mutations, steal risk and
          Rebirth requirements are not priced in because no verified numbers exist for them.
        </span>
      </div>

    </div>
  );
}
