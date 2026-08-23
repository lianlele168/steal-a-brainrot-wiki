import React from 'react';
import { Metadata } from 'next';
import { Shield, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: "Steal Mechanics & Base Defense Guide",
  description: "Learn how to raid opponent bases, upgrade shields, evade security alarms, and steal high-tier Brainrot characters in Roblox Steal a Brainrot.",
};

export default function StealGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          STEAL & SHIELD <span className="gradient-title">RAID GUIDE</span>
        </h1>
        <p className="text-sm text-purple-300">
          Master the art of sneaking into rival tycoon bases, bypassing shields, and stealing God-tier meme characters.
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-purple-200 leading-relaxed">
        
        <div className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-pink-400" />
            <span>1. Core Stealing Mechanics</span>
          </h2>
          <p>
            Stealing is the primary PvP mechanic in Steal a Brainrot. When raiding an opponent's base, you must approach their active meme display pedistal and hold the action key for 3 seconds.
          </p>
          <ul className="list-disc list-inside text-purple-300 space-y-1">
            <li>Speed Potions reduce holding time by up to 50%.</li>
            <li>If the player catches you during the steal, you lose 50% of your pocket cash.</li>
          </ul>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            <span>2. Base Shield Upgrades & Defense</span>
          </h2>
          <p>
            Protecting your base requires upgrading your Shield Generator in the main Tycoon menu.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800">
              <span className="font-bold text-white block">Shield Level 1-2</span>
              <span className="text-[11px] text-purple-400">Basic laser barrier. Blocks novice stealers (-24% steal odds).</span>
            </div>
            <div className="p-3 bg-purple-950/60 rounded-xl border border-purple-800">
              <span className="font-bold text-amber-300 block">Shield Level 3-5</span>
              <span className="text-[11px] text-purple-400">Plasma force field with automated alarm turrets (-60% steal odds).</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
