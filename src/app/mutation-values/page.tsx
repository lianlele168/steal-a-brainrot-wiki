import React from 'react';
import { Metadata } from 'next';
import { Sparkles, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/mutation-values' },
  title: "Brainrot Mutation & Trade Value Index 2026",
  description: "Check current trade values for Golden, Rainbow, and Cosmic mutated Brainrot meme characters in Steal a Brainrot Roblox.",
};

export default function MutationValuesPage() {
  const mutations = [
    { name: 'Cosmic Mutated Tralalelo', type: 'God Variant', value: '1.2B Cash', multiplier: '250x Cash', rarity: '0.01%' },
    { name: 'Rainbow CaseOh Prime', type: 'Mythic Variant', value: '450M Cash', multiplier: '75x Cash', rarity: '0.05%' },
    { name: 'Golden Grimace Sovereign', type: 'Mythic Variant', value: '250M Cash', multiplier: '45x Cash', rarity: '0.1%' },
    { name: 'Diamond Sigma Rizzler', type: 'Legendary Variant', value: '100M Cash', multiplier: '25x Cash', rarity: '0.5%' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          MUTATION & TRADE <span className="gradient-title">VALUE INDEX</span>
        </h1>
        <p className="text-sm text-purple-300">
          Mutations add ultra-rare holographic effects and multiply base income up to 5x. Check current community trading values.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mutations.map((m) => (
          <div key={m.name} className="glass-card p-5 rounded-xl border border-pink-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-white text-base">{m.name}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-pink-950 text-pink-300 font-bold border border-pink-700">
                {m.type}
              </span>
            </div>
            <div className="text-xs text-purple-300 space-y-1">
              <div className="flex justify-between"><span>Est Trade Value:</span><strong className="text-amber-300">{m.value}</strong></div>
              <div className="flex justify-between"><span>Multiplier:</span><strong className="text-cyan-400">{m.multiplier}</strong></div>
              <div className="flex justify-between"><span>Spawn Chance:</span><strong className="text-pink-400">{m.rarity}</strong></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
