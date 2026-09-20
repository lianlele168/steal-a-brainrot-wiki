import React from 'react';
import StealCalculator from '@/components/StealCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/calculator' },
  title: "Brainrot Income Calculator — Base Rates & Rebirth Multipliers",
  description:
    "Calculate real Steal a Brainrot income: verified base cash-per-second for 52 Brainrots, Rebirth multipliers x0.5 to x17, with hourly and daily projections.",
};

export default function CalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          BRAINROT INCOME <span className="gradient-title">CALCULATOR</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Pick a unit and your Rebirth level to project real income per second, hour and day — using only
          verified numbers, with no invented spawn odds.
        </p>
      </div>

      <StealCalculator />

      <div className="glass-card rounded-2xl p-6 border border-purple-900/60 space-y-4 text-xs text-purple-300 leading-relaxed">
        <h2 className="text-base font-extrabold text-white">What this calculator uses</h2>
        <p>
          Base income per second comes from the Beebom table cross-checked against the Fandom Wiki, and the
          Rebirth multiplier comes from the Fandom Rebirth table (x0.5 at Rebirth 1 up to x17 at Rebirth 17).
          Rebirthing also pays a one-time cash bonus, adds +10 seconds of base lock time and one extra base slot
          per level.
        </p>
        <ul className="list-disc list-inside space-y-1 text-purple-400">
          <li><strong>52 verified units</strong> from Common (Noobini Pizzanini) to Secret (Garama and Madundung, $150K/s).</li>
          <li><strong>Copies owned</strong> multiplies income linearly — income stacks per unit on your base.</li>
          <li><strong>Mutation multipliers are excluded</strong> because no verified values have been published by the developer.</li>
        </ul>
        <p>
          Earlier versions of this page simulated a &quot;steal success rate&quot; with invented speed-potion and shield
          formulas. No official steal-odds mechanics have ever been documented, so those fake numbers were
          removed rather than kept.
        </p>
      </div>
    </div>
  );
}
