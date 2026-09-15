import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: "Beginner to Sigma Walkthrough & Starter Strategy - Steal a Brainrot",
  description: "Complete beginner walkthrough for Steal a Brainrot Roblox. Learn how to earn your first million cash, claim starter codes, defend against thieves, and unlock epic meme characters.",
};

export default function BeginnerGuidePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the fastest way to get Cash as a beginner in Steal a Brainrot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The fastest method is redeeming active promo codes like SIGMA2026 and STEALKING for immediate starter capital, then raiding unprotected beginner bases while maintaining your own defensive base shields.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you defend your base from other players stealing your characters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upgrade your base shield barrier immediately to Level 2 or higher, equip a Golden Slap Glove or EMP Jammer at your doorway, and avoid going AFK without activating temporary lockdown security.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I perform my first Rebirth in Steal a Brainrot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You should trigger Rebirth 1 as soon as you hit the $10,000,000 threshold. The permanent 2x Cash Boost compounding significantly outweighs the temporary character inventory reset.',
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          BEGINNER TO SIGMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">WALKTHROUGH</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Comprehensive tactical masterclass: step-by-step roadmap to go from a zero-cash starter to a billionaire base tycoon in Steal a Brainrot.
        </p>
      </div>

      {/* Author & Verification Card */}
      <AuthorCard />

      {/* Visual Asset Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="rounded-2xl overflow-hidden border border-purple-900/60 bg-purple-950/40 p-3">
          <Image
            src="/images/brainrot-header.webp"
            alt="Steal a Brainrot Official Game Cover"
            width={512}
            height={512}
            className="rounded-xl object-cover w-full h-48 border border-purple-800/40"
            priority
          />
          <p className="text-xs text-purple-400 mt-2 text-center">
            Figure 1: Official Steal a Brainrot icon by BRAZILIAN SPYDER.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-purple-900/60 bg-purple-950/40 p-3">
          <Image
            src="/images/brainrot-gameplay.webp"
            alt="Steal a Brainrot Active Base Gameplay"
            width={768}
            height={432}
            className="rounded-xl object-cover w-full h-48 border border-purple-800/40"
          />
          <p className="text-xs text-purple-400 mt-2 text-center">
            Figure 2: Active base raiding arena with droppers and defensive corridors.
          </p>
        </div>
      </div>

      {/* Guide Content Sections */}
      <div className="space-y-6 text-sm text-purple-200 leading-relaxed">
        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">1</span>
            Initial Launch: Capitalizing on Starter Codes
          </h2>
          <p>
            When you first spawn into the lobby of Steal a Brainrot, your wallet is completely empty and your character slots are unpopulated. The most common pitfall for new players is attempting to punch or steal from high-tier veteran bases without any gear. Instead, open the Codes menu immediately. Redeeming current release codes grants you over $750,000 cash and starter potions.
          </p>
          <p>
            Deposit this initial payout directly into your first basic meme dropper to ensure you have automated background cash flow generating while you scout neighboring bases.
          </p>
        </section>

        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">2</span>
            Fortifying Your Base: The Anti-Theft Protocol
          </h2>
          <p>
            In Steal a Brainrot, other players can freely infiltrate your compound and carry away your valuable characters if your security perimeter is neglected. Before purchasing expensive characters like CaseOh or Grimace, upgrade your base door shield to at least Tier 2. 
          </p>
          <p>
            Equipping defensive troll gear, such as the Golden Slap Glove or Quantum Banana Slip, lets you instantly knock back intruders into the street when they attempt a snatch-and-grab heist. Never leave high-value God or Secret entities near the front gate; always place them deep inside your interior sanctum.
          </p>
        </section>

        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">3</span>
            Raiding Mechanics: Executing Clean Base Heists
          </h2>
          <p>
            Stealing is the core adrenaline mechanic that distinguishes this game from passive tycoons. To execute successful heists, always monitor the player list for AFK or distracted players whose base lasers have deactivated. Consume a Neon Speed Coil boost before crossing the median strip.
          </p>
          <p>
            Target high cash-per-second characters like Tung Tung Sah or Sigma Rizzler. Grab the character and immediately sprint along the perimeter fence line rather than the center road to evade defender slap range. Once secured inside your collection zone, their passive income attaches permanently to your account balance.
          </p>
        </section>

        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">4</span>
            The Rebirth Flywheel: Exponential Compounding
          </h2>
          <p>
            Once you accumulate $10,000,000 Cash, you will unlock the Rebirth 1 milestone. While rebirth resets your base level and lower-tier characters, it permanently awards a 2x Cash multiplier across all subsequent earnings. Players who hoard cash without rebirthing hit severe income diminishing returns. Rebirth frequently until reaching Rebirth 5, unlocking supreme entities like Tralalelo God with 100x compounding potential.
          </p>
        </section>
      </div>
    </div>
  );
}
