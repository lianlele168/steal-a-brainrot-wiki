import React from 'react';
import StealCalculator from '@/components/StealCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Steal Success Rate & Income Calculator",
  description: "Simulate raid steal success odds, speed multipliers, shield penalties, and cash earnings per second in Steal a Brainrot Roblox.",
};

export default function CalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          STEAL SUCCESS & <span className="gradient-title">INCOME CALCULATOR</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Use our interactive simulator to calculate your raid steal probability rate based on speed potions, stealer character tier, target shield defense, and rebirth multipliers.
        </p>
      </div>

      <StealCalculator />

      <div className="glass-card rounded-2xl p-6 border border-purple-900/60 space-y-4 text-xs text-purple-300 leading-relaxed">
        <h2 className="text-base font-extrabold text-white">How Steal Success Rates are Calculated</h2>
        <p>
          In <strong>Steal a Brainrot</strong>, every raid attempt evaluates your stealer meme character tier against the defender's base shield level. 
          Higher character tiers (like God or Secret) have higher base value but lower default steal rates without speed potions.
        </p>
        <ul className="list-disc list-inside space-y-1 text-purple-400">
          <li><strong>Speed Boost Potions</strong> add up to +25% success rate.</li>
          <li><strong>2x Luck Potions</strong> add a flat +20% success boost.</li>
          <li><strong>Base Shields</strong> reduce incoming steal odds by 12% per shield level.</li>
        </ul>
      </div>
    </div>
  );
}
