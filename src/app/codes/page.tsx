import React from 'react';
import CodeList from '@/components/CodeList';
import { Metadata } from 'next';
import Link from 'next/link';
import { Gift, CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/codes' },
  title: "Steal a Brainrot Codes — 1 Working Code + Full Expired List",
  description:
    "Only one Steal a Brainrot code is currently redeemable. See the verified active code, every confirmed expired code, why new codes dried up, and how to redeem them.",
};

const FAQS = [
  {
    q: 'Are there any working Steal a Brainrot codes right now?',
    a: 'Just one: BESTBRAINROTEVER, which spawns La Vacca Saturno Saturnita. Steal a Brainrot still has a code box, but the developers have not published a new public code in months, so anything beyond this single entry is not currently redeemable.'
  },
  {
    q: 'Why do other sites list five or ten working codes?',
    a: 'Those lists are padded with codes that have already expired or hit their redemption cap. Steal a Brainrot codes have historically run on a capped, first-come supply, so a code can stop working for everyone while still appearing as active on aggregator pages that have not re-checked it.'
  },
  {
    q: 'How do I redeem a Steal a Brainrot code?',
    a: 'Open Steal a Brainrot and spawn into your base, then open the Codes menu from the button panel on the left side of the screen. Since the Summer Update, codes have their own dedicated section rather than living inside the shop. Type the code exactly as written, because capitalization matters, then hit Redeem.'
  },
  {
    q: 'Why is my code not working?',
    a: 'The three most common causes are a typo, an expired code, and a code that already hit its global redemption cap. Disable autocorrect if you are redeeming on mobile, remove any trailing spaces, and remember that some codes are one-time per account. If the spelling is right and it still fails, the code is almost certainly dead.'
  },
  {
    q: 'Where do new Steal a Brainrot codes come from now?',
    a: 'The official Discord codes channel was removed after Update 11, which was the main pipeline for new codes. Codes now arrive through merchandise drops, where each string is unique to a purchase and cannot be published, and through occasional admin abuse or Taco Tuesday streams. Watch group shouts and the official X account rather than waiting on a regular schedule.'
  }
];

export default function CodesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold">
          <Gift className="w-3.5 h-3.5" />
          <span>1 Verified Active Code</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white">
          STEAL A BRAINROT <span className="gradient-title">CODES</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          One Steal a Brainrot code is currently redeemable, listed below with the expired codes and
          the reason new codes stopped arriving.
        </p>
      </div>

      <CodeList />

      {/* Why there are no codes */}
      <div className="glass-card rounded-2xl p-6 border border-amber-900/60 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>Why Steal a Brainrot barely has codes any more</span>
        </h2>
        <p className="text-xs text-purple-300 leading-relaxed">
          Steal a Brainrot does things differently from most Roblox code games, and that is why its
          code list looks so short. Creator Sammy moved redemption into its own dedicated menu
          instead of the shop, and the official Discord codes channel was taken down after Update 11.
          Since then, codes have stopped arriving on any kind of schedule.
        </p>
        <ul className="list-disc list-inside text-xs text-purple-300 space-y-2 leading-relaxed">
          <li>
            Public codes are now rare one-off drops tied to admin abuse streams and Taco Tuesday
            events rather than to game updates.
          </li>
          <li>
            Merchandise codes exist, but each string is unique to one purchase and emailed only to
            the buyer, so no list can publish them.
          </li>
          <li>
            Most past codes ran on a capped, first-come supply, so they expire for everyone at
            unpredictable times.
          </li>
          <li>
            A few rewards, including Meowl and Strawberry Elephant, were handed out for solving
            in-game riddles rather than for typing a code at all.
          </li>
        </ul>
        <p className="text-xs text-amber-300/90 leading-relaxed">
          Stealing and rebirthing are what move your income, and mutations multiply a brainrot&apos;s
          earnings once you own it.
        </p>
      </div>

      {/* Redemption Guide */}
      <div className="glass-card rounded-2xl p-6 border border-purple-900/60 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-pink-400" />
          <span>How to Redeem Codes in Steal a Brainrot</span>
        </h2>
        <ol className="list-decimal list-inside text-xs text-purple-300 space-y-2 leading-relaxed">
          <li>Launch <strong>Steal a Brainrot</strong> on Roblox and spawn into your base.</li>
          <li>Open the <strong>Codes</strong> menu from the button panel on the left side of the screen.</li>
          <li>Type the code exactly as shown — codes are case sensitive.</li>
          <li>Hit <strong>Redeem</strong>. Carpet-spawn rewards appear on the Red Carpet near spawn.</li>
        </ol>
        <p className="text-xs text-purple-400/90 leading-relaxed">
          If you are on mobile, turn off autocorrect before pasting a code, and strip any spaces at
          the start or end of the string.
        </p>
      </div>

      {/* FAQ */}
      <div className="glass-card rounded-2xl p-6 border border-purple-900/60 space-y-4">
        <h2 className="text-lg font-bold text-white">Steal a Brainrot Codes FAQ</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="text-sm font-bold text-pink-300">{f.q}</h3>
              <p className="text-xs text-purple-300 leading-relaxed mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Internal links */}
      <div className="glass-card rounded-2xl p-6 border border-purple-900/60 space-y-3">
        <h2 className="text-lg font-bold text-white">Keep Building Your Base</h2>
        <p className="text-xs text-purple-300 leading-relaxed">
          Codes are a sideshow in this game. These guides cover the systems that actually move your
          income.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/character-tier-list" className="text-cyan-300 hover:text-cyan-200 font-semibold">
            Character Tier List — what is worth defending
          </Link>
          <Link href="/mutation-values" className="text-cyan-300 hover:text-cyan-200 font-semibold">
            Mutation Values — how income multipliers stack
          </Link>
          <Link href="/steal-guide" className="text-cyan-300 hover:text-cyan-200 font-semibold">
            Steal Guide — raid routes that pay off
          </Link>
          <Link href="/beginner-guide" className="text-cyan-300 hover:text-cyan-200 font-semibold">
            Beginner Guide — first hour priorities
          </Link>
        </div>
      </div>
    </div>
  );
}
