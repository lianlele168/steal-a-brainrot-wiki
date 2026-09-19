import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { DATA_VERIFIED_DATE } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/beginner-guide' },
  title: "Beginner Guide & Starter Strategy - Steal a Brainrot",
  description: "Complete beginner walkthrough for Steal a Brainrot Roblox. Learn how to earn your first million cash, claim the active code, defend against thieves with real Gear, and Rebirth for verified multipliers.",
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
          text: 'Buy the cheapest Red Carpet brainrots first — Noobini Pizzanini costs $25 and earns $1/s, and Tim Cheese costs $500 and earns $5/s. Stack several units, then redeem the active code BESTBRAINROTEVER if it is still above its redemption cap, which spawns La Vacca Saturno Saturnita on the Red Carpet. Stealing from distracted players with inactive base lasers is the fastest mid-game boost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you defend your base from other players stealing your characters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Buy a Trap ($1K) that freezes a thief for 7 seconds, a Speed Coil ($750) to chase thieves down, and a Slap ($500) for stronger knockback. Each Rebirth level also adds +10 seconds of base lock time and one extra base slot. Keep high-value units like La Vacca Saturno Saturnita deep inside your base, not at the front gate.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I perform my first Rebirth in Steal a Brainrot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rebirth 1 costs $500K (some players report a $1M threshold) and requires Trippi Troppi plus Gangster Footera on your base. It grants a permanent x0.5 income multiplier on top of the base rate, a $5K cash bonus and +10 seconds of base lock time. Note that Rebirth wipes your current cash, so rebirth right after a big purchase, not before one.',
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
          BEGINNER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">WALKTHROUGH</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          A step-by-step roadmap from an empty wallet to your first Rebirth — every number on this page is
          cross-checked against the Fandom Wiki and Beebom (last verified {DATA_VERIFIED_DATE}).
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
            Initial Launch: Your First $10K
          </h2>
          <p>
            When you first spawn into Steal a Brainrot, your wallet is empty. Start by buying the cheapest Red
            Carpet units and let their income compound: Noobini Pizzanini ($25, $1/s), Tim Cheese ($500, $5/s),
            Fluriflura ($1K, $7.5/s) and Talpa Di Fero ($1.5K, $10/s). Within minutes you can afford Pipi Kiwi
            ($2.5K, $15/s) and the Rare layer starting with Trippi Troppi ($3.5K, $20/s).
          </p>
          <p>
            Open the Codes menu on the left panel and try the currently active code BESTBRAINROTEVER, which
            spawns La Vacca Saturno Saturnita — a Secret unit earning $7.5K per second — on the Red Carpet.
            Codes are capped on a first-come basis, so it may already be exhausted; there is no other public
            code right now.
          </p>
        </section>

        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">2</span>
            Fortifying Your Base: Real Gear That Defends
          </h2>
          <p>
            Other players can freely carry away your characters if your base is left unguarded. Three cheap shop
            items carry the early game: the Slap ($500) knocks intruders back harder than your default bat, the
            Speed Coil ($750) raises your walk speed by 50% so you can chase thieves, and the Trap ($1K) freezes
            a thief for 7 seconds — up to five Traps can be active on the map at once.
          </p>
          <p>
            Once you hit Rebirth 1 you unlock the Iron Slap ($2.5K), Gravity Coil ($3K) and Bee Launcher ($10K),
            which reverses a hit player&apos;s controls for 5 seconds. Every Rebirth level also adds +10 seconds to
            your base lock time and one extra base slot (Rebirth 1 is the only exception that grants no slot).
            Keep expensive units such as La Vacca Saturno Saturnita deep inside your base rather than at the gate.
          </p>
        </section>

        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">3</span>
            Raiding Mechanics: Executing Clean Heists
          </h2>
          <p>
            Stealing is the core PvP mechanic. Watch the player list for AFK owners whose base defenses are idle,
            then grab a high-value unit and sprint along the perimeter fence line rather than the open road.
            Remember the two verified rules of the mid-heist Rebirth interaction: a Brainrot that is being stolen
            disappears if its owner rebirths, and one still walking to your base is returned to the Red Carpet.
          </p>
          <p>
            Good early steal targets are Legendary units like Ballerina Cappuccina ($60K purchase, $350/s) and
            Chef Crabracadabra ($65K, $400/s). Secret units spawn with a server-wide chat announcement — if you
            see one, expect heavy competition, since La Vacca Saturno Saturnita is the most commonly seen Secret.
          </p>
        </section>

        <section className="bg-purple-950/50 p-6 rounded-2xl border border-purple-900/60 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center text-xs">4</span>
            The Rebirth Flywheel: Verified Numbers Only
          </h2>
          <p>
            Rebirth 1 costs $500K (some players report a $1M threshold) and requires Trippi Troppi plus Gangster
            Footera on your base — the slot originally held by Tung Tung Tung Sahur, which was removed from the
            game entirely after a Noxa copyright claim and is no longer obtainable. Rebirth 1 pays a $5K bonus
            and applies a permanent x0.5 income multiplier that stacks multiplicatively with later levels: x1 at
            Rebirth 2, x2 at Rebirth 3, all the way to x17 at Rebirth 17.
          </p>
          <p>
            Because rebirthing wipes your current cash, the optimal pattern is to rebirth immediately after a big
            purchase, not before one. Rebirth 2 ($1.5M) needs Boneca Ambalabu and Brr Brr Patapim and unlocks the
            Gold Slap, Coil Combo and Rage Table in the Gear shop. See the full Rebirth guide for all 17 verified
            levels.
          </p>
        </section>
      </div>
    </div>
  );
}
