import React from 'react';
import { Metadata } from 'next';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { DATA_VERIFIED_DATE } from '@/data/wikiData';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/mutation-values' },
  title: "Mutations & Variants — What Is Actually Known",
  description:
    "What is verified about Steal a Brainrot mutations (Gold, Rainbow and more): confirmed variant data, and which multiplier values the community still has no source for.",
};

const VERIFIED = [
  {
    name: 'Extinct Tralalero Tralala (event variant)',
    detail: 'Costs $125M on the Red Carpet during the event and earns $450K/s — the single best-documented mutated unit. Note that its base form is $1M / $5K/s; some outlets quote the event-scaled numbers against the base form, which is why income figures for this character vary wildly between sites.'
  },
  {
    name: 'Event wheel exclusive Gear',
    detail: 'Bloodmoon Slap, Candy Slap, Lava Slap, Alien Slap, Blackhole Bomb and Demon\'s Head (0.1%) drop from the event wheel at a verified odds range of 0.1%-0.5%.'
  },
  {
    name: 'Rebirth income multipliers',
    detail: 'The only confirmed global income multipliers in the game are the Rebirth ones, x0.5 at Rebirth 1 up to x17 at Rebirth 17.'
  }
];

const UNVERIFIED = [
  'The exact multiplier of Gold, Rainbow, Diamond and other visual mutations — these mutations exist, but neither the Fandom Wiki nor major outlets publish a sourceable number.',
  'Secret-tier spawn rates — the developer has never published percentages.',
  'Robux-shop Gear prices — present in the game, not verifiable at our last check.'
];

export default function MutationValuesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          MUTATIONS & VARIANTS <span className="gradient-title">FACT CHECK</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Most wiki sites quote made-up mutation multipliers like &quot;Rainbow 75x&quot;. Here is the honest version: what is
          actually verified, and what is not.
        </p>
        <p className="text-[11px] text-purple-500">Last checked: {DATA_VERIFIED_DATE}</p>
      </div>

      <div className="glass-card p-6 rounded-2xl border border-emerald-900/60 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>facts</span>
        </h2>
        {VERIFIED.map((v) => (
          <div key={v.name} className="p-3 rounded-xl bg-purple-950/50 border border-purple-800/60 space-y-1">
            <span className="font-extrabold text-white text-sm block">{v.name}</span>
            <p className="text-[11px] text-purple-300 leading-relaxed">{v.detail}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 rounded-2xl border border-amber-900/60 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <span>Not verifiable (so we will not invent numbers)</span>
        </h2>
        <ul className="list-disc list-inside text-xs text-purple-300 space-y-2 leading-relaxed">
          {UNVERIFIED.map((u) => (
            <li key={u.slice(0, 40)}>{u}</li>
          ))}
        </ul>
        <p className="text-[11px] text-amber-300/90 leading-relaxed pt-2 border-t border-purple-950">
          Earlier versions of this page listed fabricated values such as &quot;Rainbow CaseOh Prime 75x&quot; or &quot;Golden
          Grimace Sovereign 45x&quot;. Those characters and multipliers do not exist in the verified game data and have
          been removed. Until a sourceable multiplier table appears, treat any exact mutation multiplier you see
          online as a guess.
        </p>
      </div>

      <p className="text-xs text-purple-400 text-center">
        In the meantime, the <a href="/calculator" className="text-pink-400 font-bold hover:underline">Income Calculator</a> uses
        only verified base incomes and Rebirth multipliers.
      </p>
    </div>
  );
}
