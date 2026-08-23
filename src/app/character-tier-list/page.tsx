import React from 'react';
import CharacterTierList from '@/components/CharacterTierList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brainrot Meme Character Tier List — Income & Steal Rankings",
  description: "Complete Brainrot meme character tier list for Steal a Brainrot Roblox. Rankings for God, Secret, Mythic, and Legendary characters with income rates.",
};

export default function TierListPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          BRAINROT MEME <span className="gradient-title">TIER LIST</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Explore all meme entities in Steal a Brainrot ranked by cash printing speed, raid steal difficulty, and market valuation.
        </p>
      </div>

      <CharacterTierList />
    </div>
  );
}
