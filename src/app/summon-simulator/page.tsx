import React from 'react';
import SummonSimulator from '@/components/SummonSimulator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meme Pack Summon Simulator & Crate Drop Odds",
  description: "Simulate unboxing Brainrot Meme Crates, God Capsules, and Mythic Pack drops in Roblox Steal a Brainrot with live pull luck odds.",
};

export default function SummonSimulatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          MEME PACK <span className="gradient-title">SUMMON SIMULATOR</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Test your unboxing luck before spending Cash in-game! Unbox God, Secret, and Mythic meme characters with real drop rates.
        </p>
      </div>

      <SummonSimulator />
    </div>
  );
}
