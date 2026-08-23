import React from 'react';
import { Metadata } from 'next';
import { Sparkles, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: "Character Fusion & Crafting Recipe Guide",
  description: "Complete Fusion crafting table for Roblox Steal a Brainrot. Learn how to combine lower tier memes into Mythic CaseOh and Secret Tung Tung Sah.",
};

export default function FusionGuidePage() {
  const recipes = [
    { result: 'CaseOh Prime (Mythic)', input: '3x Baby Gronk Fanum + 2x Skibidi Toilet', successRate: '100%' },
    { result: 'Grimace Sovereign (Mythic)', input: '5x Fanum Taxer + 10M Cash', successRate: '90%' },
    { result: 'Tung Tung Sah (Secret)', input: '2x Ultimate Sigma Rizzler + Rebirth 5', successRate: '75%' },
    { result: 'Tralalelo God (God)', input: '3x Mythic CaseOh Prime + Cosmic Shard', successRate: '50%' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          CHARACTER FUSION & <span className="gradient-title">CRAFTING RECIPES</span>
        </h1>
        <p className="text-sm text-purple-300">
          Fuse duplicate lower tier meme characters at the Base Fusion Anvil to craft high tier Mythic and Secret entities.
        </p>
      </div>

      <div className="space-y-4">
        {recipes.map((r) => (
          <div key={r.result} className="glass-card p-5 rounded-xl border border-purple-900/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-base font-extrabold text-white">{r.result}</span>
              <p className="text-xs text-purple-300 mt-1">Required Ingredients: <strong className="text-pink-400">{r.input}</strong></p>
            </div>
            <div className="text-xs text-right">
              <span className="text-purple-400">Fusion Odds:</span>
              <strong className="text-emerald-400 font-extrabold block text-sm">{r.successRate}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
