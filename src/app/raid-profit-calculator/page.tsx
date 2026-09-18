import React from 'react';
import ProfitCalculator from '@/components/ProfitCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/raid-profit-calculator' },
  title: "Base ROI & Offline Cash Vault Calculator",
  description: "Calculate offline cash earnings, storage cap limits, and payback period ROI for base upgrades in Steal a Brainrot Roblox.",
};

export default function RaidProfitCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          BASE ROI & <span className="gradient-title">OFFLINE CALCULATOR</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Ensure your vault storage capacity never limits your passive income generation during offline hours.
        </p>
      </div>

      <ProfitCalculator />
    </div>
  );
}
