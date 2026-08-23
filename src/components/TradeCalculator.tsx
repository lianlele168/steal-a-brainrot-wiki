'use client';

import React, { useState } from 'react';
import { ArrowLeftRight, ShieldAlert, CheckCircle, AlertTriangle, Scale } from 'lucide-react';
import { BRAINROT_CHARACTERS } from '@/data/wikiData';

export default function TradeCalculator() {
  const [yourOfferId, setYourOfferId] = useState(BRAINROT_CHARACTERS[4].id); // Sigma Rizzler (35M)
  const [targetOfferId, setTargetOfferId] = useState(BRAINROT_CHARACTERS[2].id); // CaseOh Prime (100M)

  const yourChar = BRAINROT_CHARACTERS.find((c) => c.id === yourOfferId) || BRAINROT_CHARACTERS[0];
  const targetChar = BRAINROT_CHARACTERS.find((c) => c.id === targetOfferId) || BRAINROT_CHARACTERS[1];

  const parseVal = (strVal: string) => {
    if (strVal.includes('M')) return parseFloat(strVal.replace(/[^0-9.]/g, '')) * 1000000;
    if (strVal.includes('K')) return parseFloat(strVal.replace(/[^0-9.]/g, '')) * 1000;
    return parseFloat(strVal.replace(/[^0-9.]/g, '')) || 1000000;
  };

  const yourNumericVal = parseVal(yourChar.value);
  const targetNumericVal = parseVal(targetChar.value);

  const ratio = (targetNumericVal / yourNumericVal) * 100;
  const valDifference = targetNumericVal - yourNumericVal;

  let tradeVerdict = 'FAIR TRADE';
  let verdictColor = 'text-emerald-400 border-emerald-500/60 bg-emerald-950/60';

  if (ratio > 140) {
    tradeVerdict = 'BIG WIN FOR YOU (+ ' + ((ratio - 100).toFixed(0)) + '%)';
    verdictColor = 'text-emerald-400 border-emerald-500 bg-emerald-950/80';
  } else if (ratio < 70) {
    tradeVerdict = 'TERRIBLE DEAL (- ' + ((100 - ratio).toFixed(0)) + '%)';
    verdictColor = 'text-pink-500 border-pink-500 bg-pink-950/80';
  } else if (ratio < 90) {
    tradeVerdict = 'SLIGHT LOSS FOR YOU';
    verdictColor = 'text-amber-400 border-amber-500 bg-amber-950/80';
  }

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-900/60 space-y-6">
      
      <div className="flex items-center space-x-3 border-b border-purple-900/60 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-cyan-400 border border-purple-700/50">
          <Scale className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Trade Fairness Calculator</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900 text-purple-300 font-mono">Anti-Scam</span>
          </h2>
          <p className="text-xs text-purple-300">Compare market values before accepting community trade offers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Your Offer */}
        <div className="p-5 rounded-xl bg-[#0d0722] border border-purple-800/60 space-y-4">
          <span className="text-xs font-extrabold uppercase text-purple-400 tracking-wider block">
            Your Offered Character
          </span>
          <select
            value={yourOfferId}
            onChange={(e) => setYourOfferId(e.target.value)}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500"
          >
            {BRAINROT_CHARACTERS.map((c) => (
              <option key={c.id} value={c.id}>{c.icon} {c.name} ({c.value})</option>
            ))}
          </select>

          <div className="pt-2 border-t border-purple-900/60 text-xs space-y-1 text-purple-300">
            <div className="flex justify-between"><span>Est Market Value:</span><strong className="text-white">${yourNumericVal.toLocaleString()}</strong></div>
            <div className="flex justify-between"><span>Cash/Sec Harvest:</span><strong className="text-pink-400">${yourChar.incomePerSec.toLocaleString()}/s</strong></div>
          </div>
        </div>

        {/* Target Offer */}
        <div className="p-5 rounded-xl bg-[#0d0722] border border-purple-800/60 space-y-4">
          <span className="text-xs font-extrabold uppercase text-purple-400 tracking-wider block">
            Target Offered Character
          </span>
          <select
            value={targetOfferId}
            onChange={(e) => setTargetOfferId(e.target.value)}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500"
          >
            {BRAINROT_CHARACTERS.map((c) => (
              <option key={c.id} value={c.id}>{c.icon} {c.name} ({c.value})</option>
            ))}
          </select>

          <div className="pt-2 border-t border-purple-900/60 text-xs space-y-1 text-purple-300">
            <div className="flex justify-between"><span>Est Market Value:</span><strong className="text-white">${targetNumericVal.toLocaleString()}</strong></div>
            <div className="flex justify-between"><span>Cash/Sec Harvest:</span><strong className="text-cyan-400">${targetChar.incomePerSec.toLocaleString()}/s</strong></div>
          </div>
        </div>

      </div>

      {/* Trade Verdict Output */}
      <div className={`p-6 rounded-2xl border text-center space-y-2 ${verdictColor}`}>
        <span className="text-xs font-bold uppercase tracking-wider block opacity-90">Trade Analysis Verdict</span>
        <h3 className="text-2xl font-black">{tradeVerdict}</h3>
        <p className="text-xs max-w-md mx-auto opacity-90">
          {valDifference >= 0 
            ? `You gain approximately $${valDifference.toLocaleString()} in estimated market value!`
            : `You lose approximately $${Math.abs(valDifference).toLocaleString()} in estimated market value!`
          }
        </p>
      </div>

    </div>
  );
}
