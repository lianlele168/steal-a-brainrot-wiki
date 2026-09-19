import React from 'react';
import CharacterTierList from '@/components/CharacterTierList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/character-tier-list' },
  title: "Brainrot Tier List — 52 Verified Units with Real Income & Prices",
  description: "Complete verified Brainrot tier list for Steal a Brainrot Roblox: all Common, Rare, Epic, Legendary, Mythic, Brainrot God and Secret units with verified income and red-carpet prices.",
};

export default function TierListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          BRAINROT MEME <span className="gradient-title">TIER LIST</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Explore 52 cross-verified Brainrots — every unit shows its real income per second and red-carpet cost. No invented characters, no made-up multipliers.
        </p>
      </div>

      <CharacterTierList />
    </div>
  );
}
