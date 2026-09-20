import React from 'react';
import SummonSimulator from '@/components/SummonSimulator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/summon-simulator' },
  title: "Red Carpet Roulette — Learn the Brainrot Roster",
  description:
    "Roll a random verified Steal a Brainrot unit and learn its real cost and income stats. A roster trainer, not a fake spawn-odds simulator.",
};

export default function SummonSimulatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          RED CARPET <span className="gradient-title">ROULETTE</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Draw a random verified Brainrot — from the $25 Noobini Pizzanini to the $100M Garama and Madundung —
          and memorize its real stats before your next raid.
        </p>
      </div>

      <SummonSimulator />
    </div>
  );
}
