import React from 'react';
import { Metadata } from 'next';
import { Clock, Flame, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://stealabrainrot.robloxwikihub.com/boss-schedule' },
  title: "World Boss Raid Schedule & Server Events",
  description: "Check server event timers, Titan Skibidi spawn schedules, and Grimace Purple Surge tactics in Steal a Brainrot Roblox.",
};

export default function BossSchedulePage() {
  const events = [
    { title: 'Titan Skibidi Server Raid', interval: 'Every 2 Hours', rewards: '$50,000,000 Cash + 2x Luck Potion', tactic: 'Equip speed boots and attack the head weakpoint.' },
    { title: 'Grimace Purple Surge', interval: 'Every 4 Hours', rewards: 'Grimace Sovereign Unlock Chance (5%)', tactic: 'Avoid purple void puddles on the ground.' },
    { title: 'Golden Brainrot Fever', interval: 'Daily at 20:00 UTC', rewards: '3x Income Multiplier for 30 Minutes', tactic: 'Max out all base displays before event starts.' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          WORLD BOSS RAID <span className="gradient-title">SCHEDULE</span>
        </h1>
        <p className="text-sm text-purple-300">
          Join server-wide boss battles to defeat Titan meme entities and earn exclusive high-tier loot drops.
        </p>
      </div>

      <div className="space-y-4">
        {events.map((ev) => (
          <div key={ev.title} className="glass-card p-6 rounded-2xl border border-purple-900/60 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-white">{ev.title}</h2>
              <span className="text-xs px-2.5 py-1 rounded-md bg-pink-950 text-pink-300 font-bold border border-pink-700">
                {ev.interval}
              </span>
            </div>
            <div className="text-xs text-purple-300 space-y-1">
              <div>Rewards: <strong className="text-amber-300">{ev.rewards}</strong></div>
              <div>Strategy Tactic: <span className="text-purple-200">{ev.tactic}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
