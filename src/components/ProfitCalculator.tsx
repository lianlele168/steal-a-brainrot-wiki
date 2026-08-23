'use client';

import React, { useState } from 'react';
import { DollarSign, Clock, Vault, ShieldCheck } from 'lucide-react';

export default function ProfitCalculator() {
  const [cashRatePerSec, setCashRatePerSec] = useState(500000); // $500k/s
  const [vaultLevel, setVaultLevel] = useState(3); // Level 3 Vault ($50M capacity)
  const [offlineHours, setOfflineHours] = useState(8); // 8 Hours offline

  const vaultCapacities = [1000000, 5000000, 25000000, 100000000, 500000000, 2500000000];
  const maxCapacity = vaultCapacities[vaultLevel - 1] || 25000000;

  // Uncapped offline total
  const rawOfflineEarned = cashRatePerSec * 3600 * offlineHours;
  // Capped by vault
  const actualOfflineEarned = Math.min(rawOfflineEarned, maxCapacity);
  const isCapped = rawOfflineEarned > maxCapacity;
  const timeToCapSeconds = maxCapacity / cashRatePerSec;
  const timeToCapHours = (timeToCapSeconds / 3600).toFixed(1);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-900/60 space-y-6">
      
      <div className="flex items-center space-x-3 border-b border-purple-900/60 pb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-emerald-400 border border-purple-700/50">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Base ROI & Offline Cash Calculator</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-mono">Storage Cap</span>
          </h2>
          <p className="text-xs text-purple-300">Optimize offline vault storage so you never lose passive income.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Cash per Sec Input */}
        <div>
          <label className="block text-xs font-bold uppercase text-purple-400 mb-2">Total Income / Sec ($)</label>
          <input
            type="number"
            step="50000"
            value={cashRatePerSec}
            onChange={(e) => setCashRatePerSec(Math.max(1000, Number(e.target.value)))}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500 font-bold"
          />
        </div>

        {/* Vault Level */}
        <div>
          <label className="block text-xs font-bold uppercase text-purple-400 mb-2">Vault Level (1-6)</label>
          <select
            value={vaultLevel}
            onChange={(e) => setVaultLevel(Number(e.target.value))}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500 font-bold"
          >
            {vaultCapacities.map((cap, idx) => (
              <option key={idx} value={idx + 1}>
                Vault Lv {idx + 1} (Max ${cap.toLocaleString()})
              </option>
            ))}
          </select>
        </div>

        {/* Offline Hours */}
        <div>
          <label className="block text-xs font-bold uppercase text-purple-400 mb-2">Offline Time (Hours)</label>
          <input
            type="number"
            min="1"
            max="48"
            value={offlineHours}
            onChange={(e) => setOfflineHours(Math.max(1, Number(e.target.value)))}
            className="w-full bg-[#080312] border border-purple-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-pink-500 font-bold"
          />
        </div>

      </div>

      {/* Output Breakdown */}
      <div className="p-6 rounded-2xl bg-[#0d0620] border border-purple-800/60 space-y-4">
        <div className="flex justify-between items-center border-b border-purple-900 pb-3">
          <span className="text-xs text-purple-300 font-bold">Estimated Actual Cash Harvested:</span>
          <span className="text-2xl font-black text-emerald-400">${actualOfflineEarned.toLocaleString()}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs text-purple-300">
          <div>Vault Storage Capacity: <strong className="text-white">${maxCapacity.toLocaleString()}</strong></div>
          <div>Time Until Vault Full: <strong className="text-amber-400">{timeToCapHours} Hours</strong></div>
        </div>

        {isCapped && (
          <div className="p-3 rounded-xl bg-pink-950/60 border border-pink-700/60 text-xs text-pink-300">
            ⚠️ <strong>Warning:</strong> Your vault fills up in {timeToCapHours} hours! Upgrade your Vault Level to avoid wasting ${(rawOfflineEarned - actualOfflineEarned).toLocaleString()} Cash.
          </div>
        )}
      </div>

    </div>
  );
}
