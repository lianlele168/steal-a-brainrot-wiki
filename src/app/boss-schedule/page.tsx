import React from 'react';
import { Metadata } from 'next';
import { AlertTriangle, Clock, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/boss-schedule' },
  title: "Server Events Guide — Red Carpet Spawns & Event Wheel",
  description:
    "Verified server events in Steal a Brainrot Roblox: how the Red Carpet spawn system works, what Rebirth does mid-heist, and event wheel Gear drop odds (0.1%-0.5%).",
};

export default function ServerEventsPage() {
  const events = [
    {
      title: 'Red Carpet Spawns (Continuous)',
      interval: 'Always active',
      detail:
        'Brainrots walk down the Red Carpet continuously, from the $25 Noobini Pizzanini up to Secrets like Garama and Madundung ($100M / $150K per sec). Secret-tier spawns trigger a server-wide chat announcement. The developer has not published spawn rates, so exact percentages cannot be quoted honestly.'
    },
    {
      title: 'Rebirth Resets (Player-Triggered)',
      interval: 'On demand, up to Rebirth 17',
      detail:
        'Rebirthing wipes your cash and base progress in exchange for a permanent income multiplier (x0.5 to x17), a cash bonus, +10s of base lock time per level and extra base slots. Important interplay with stealing: a Brainrot being stolen disappears if its owner rebirths, and one walking to your base is sent back to the Red Carpet.'
    },
    {
      title: 'Event Wheel Gear Drops',
      interval: 'During limited events',
      detail:
        'The event wheel awards exclusive Gear such as Bloodmoon Slap, Candy Slap, Lava Slap, Alien Slap, Blackhole Bomb and Demon\'s Head (0.1% drop rate) at a verified odds range of 0.1%-0.5%. Specific per-item prices were not verifiable at our last check and are intentionally not listed.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          SERVER EVENTS <span className="gradient-title">GUIDE</span>
        </h1>
        <p className="text-sm text-purple-300 max-w-2xl mx-auto">
          Only events and timers that could be verified against the Fandom Wiki are listed here — no invented
          boss schedules.
        </p>
        <p className="text-[11px] text-purple-500 flex items-center justify-center gap-1">
          <Clock className="w-3 h-3" /> Last verified: September 19, 2026
        </p>
      </div>

      <div className="glass-card p-4 rounded-xl border border-amber-900/60 flex items-start space-x-3">
        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-amber-200/90 leading-relaxed">
          Steal a Brainrot does not have hourly &quot;world boss&quot; raids on a fixed timetable. Earlier versions of this
          page listed fabricated boss timers (Titan Skibidi, Grimace Surge); those events do not exist in the
          verified game data and have been removed.
        </p>
      </div>

      <div className="space-y-4">
        {events.map((ev) => (
          <div key={ev.title} className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                {ev.title}
              </h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-pink-950 text-pink-300 font-bold border border-pink-700 whitespace-nowrap">
                {ev.interval}
              </span>
            </div>
            <div className="text-xs text-purple-300 leading-relaxed">
              <div>{ev.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
