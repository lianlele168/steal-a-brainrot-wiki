import React from 'react';
import CodeList from '@/components/CodeList';
import { Metadata } from 'next';
import { Gift, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Steal a Brainrot Codes (August 2026) — Active Free Cash & Potions",
  description: "All active and working codes for Roblox Steal a Brainrot. Claim free cash, luck potions, CaseOh characters, and speed boosts.",
};

export default function CodesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold">
          <Gift className="w-3.5 h-3.5" />
          <span>Verified Active Codes for August 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white">
          STEAL A BRAINROT <span className="gradient-title">CODES</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Redeem these official codes in Steal a Brainrot to receive millions of free Cash, 2x Luck Potions, and legendary meme characters.
        </p>
      </div>

      <CodeList />

      {/* Redemption Guide */}
      <div className="glass-card rounded-2xl p-6 border border-purple-900/60 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-pink-400" />
          <span>How to Redeem Codes in Steal a Brainrot</span>
        </h2>
        <ol className="list-decimal list-inside text-xs text-purple-300 space-y-2 leading-relaxed">
          <li>Launch <strong>Steal a Brainrot</strong> on Roblox.</li>
          <li>Click the <strong>Codes / Gift Box Icon</strong> located on the left side of your screen.</li>
          <li>Copy any active code from our table above and paste it into the text box.</li>
          <li>Click <strong>Redeem</strong> to instantly claim your free Cash and Luck Potions!</li>
        </ol>
      </div>
    </div>
  );
}
