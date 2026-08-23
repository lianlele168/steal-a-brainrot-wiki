import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Beginner to Sigma Walkthrough & Starter Strategy",
  description: "Complete beginner walkthrough for Steal a Brainrot Roblox. Learn how to earn your first million cash, claim starter codes, and unlock epic meme characters.",
};

export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          BEGINNER TO SIGMA <span className="gradient-title">WALKTHROUGH</span>
        </h1>
        <p className="text-sm text-purple-300">
          Step-by-step roadmap to go from a zero-cash starter to a billionaire base tycoon in Steal a Brainrot.
        </p>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-purple-200 leading-relaxed">
        <div className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
          <h2 className="text-base font-extrabold text-white">Step 1: Claim Free Active Codes</h2>
          <p>
            Start your journey by navigating to our Codes page and redeeming active 2026 codes like <code>SIGMA2026</code> and <code>STEALKING</code>. 
            This gives you over $750,000 Cash instantly and a free Mythic CaseOh character.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
          <h2 className="text-base font-extrabold text-white">Step 2: Upgrade Base Storage & Shields</h2>
          <p>
            Before stealing from others, upgrade your base storage capacity to hold at least $5,000,000 Cash and install a Level 2 Shield to block incoming thieves.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
          <h2 className="text-base font-extrabold text-white">Step 3: Execute High-Speed Raids</h2>
          <p>
            Drink a 25% Speed Potion, target unshielded beginner bases, and steal Rare/Epic characters like Skibidi Toilet and Fanum Taxer to build your passive income stream.
          </p>
        </div>
      </div>
    </div>
  );
}
