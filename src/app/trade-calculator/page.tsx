import React from 'react';
import TradeCalculator from '@/components/TradeCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/trade-calculator' },
  title: "Trade Fairness Calculator & Scam Alert Check",
  description: "Check offer fairness and estimated market value before accepting community meme trades in Steal a Brainrot Roblox.",
};

export default function TradeCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          TRADE FAIRNESS <span className="gradient-title">CALCULATOR</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Compare market values before confirming community trade deals to avoid getting scammed.
        </p>
      </div>

      <TradeCalculator />
    </div>
  );
}
