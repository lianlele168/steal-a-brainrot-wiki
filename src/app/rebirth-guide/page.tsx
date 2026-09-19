import React from 'react';
import { Metadata } from 'next';
import { REBIRTH_DATA, REBIRTH_TRIVIA, DATA_VERIFIED_DATE } from '@/data/wikiData';
import { AlertTriangle, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/rebirth-guide' },
  title: "Rebirth Guide — All 17 Levels, Costs & Multipliers",
  description:
    "Complete verified Rebirth table for Steal a Brainrot Roblox: cash costs, required Brainrots, income multipliers x0.5 to x17, cash bonuses and Gear unlocks for Rebirth 1 through 17.",
};

export default function RebirthGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          REBIRTH & MULTIPLIER <span className="gradient-title">GUIDE</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Rebirthing wipes your current cash and base progress in exchange for a permanent income multiplier
          (x0.5 up to x17), a one-time cash bonus, +10 seconds of base lock time per level, and one extra base
          slot per level (Rebirth 1 gives no slot).
        </p>
        <p className="text-[11px] text-purple-500">
          Source: Steal a Brainrot Fandom Wiki Rebirth page, cross-checked with Eldorado.gg — last verified {DATA_VERIFIED_DATE}.
        </p>
      </div>

      <div className="glass-card p-4 rounded-xl border border-amber-900/60 flex items-start space-x-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-200/90 leading-relaxed">
          Where the Wiki itself records conflicting player reports for a cost, both numbers are shown
          (&quot;also reported as&quot;) — the game does not publish official thresholds, so we refuse to present a single
          guess as fact. A new Rebirth level is added roughly once a month; the Wiki documents 17 levels as of
          September 2026 (Eldorado reported 19, a known discrepancy).
        </p>
      </div>

      <div className="space-y-4">
        {REBIRTH_DATA.map((tier) => (
          <div key={tier.level} className="glass-card p-5 rounded-xl border border-purple-900/60 space-y-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-black text-white">Rebirth {tier.level}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-pink-950 text-pink-300 font-bold border border-pink-700/50">
                    x{tier.multiplier} income
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-700/50">
                    +{tier.cashBonus} bonus
                  </span>
                </div>
                <p className="text-xs text-purple-400 mt-1">
                  Cost: <strong className="text-emerald-300">{tier.cost}</strong>
                </p>
              </div>

              <div className="text-xs sm:text-right">
                <span className="text-purple-400 block mb-1">Required Brainrot(s):</span>
                <div className="flex flex-wrap gap-1">
                  {tier.requiredBrainrots.map((c) => (
                    <span key={c} className="px-2 py-1 rounded bg-purple-900/60 text-purple-200 font-semibold">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-purple-950 text-xs text-purple-300">
              <span className="text-purple-400 font-bold">New Gear unlocked: </span>
              {tier.gearUnlocked.join(' • ')}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-400" />
          <span>Verified Rebirth Trivia</span>
        </h2>
        <ul className="list-disc list-inside text-xs text-purple-300 space-y-2 leading-relaxed">
          {REBIRTH_TRIVIA.map((t) => (
            <li key={t.slice(0, 40)}>{t}</li>
          ))}
        </ul>
        <p className="text-[11px] text-amber-300/90 leading-relaxed pt-2 border-t border-purple-950">
          Rebirth 1 used to require Tung Tung Tung Sahur, but the character was removed from the game after a
          copyright claim by Noxa and replaced with Gangster Footera. Any site still listing Tung Tung Tung Sahur
          as obtainable is out of date.
        </p>
      </div>
    </div>
  );
}
