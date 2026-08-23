import React from 'react';
import Link from 'next/link';
import { Calculator, Gift, Trophy, Shield, Zap, Sparkles, ArrowRight, Star } from 'lucide-react';
import StealCalculator from '@/components/StealCalculator';
import CodeList from '@/components/CodeList';
import CharacterTierList from '@/components/CharacterTierList';
import config from '@/data/game.config.json';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      
      {/* Hero Section */}
      <section className="relative rounded-3xl p-8 sm:p-12 overflow-hidden glass-card border border-pink-500/30 neon-glow">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-pink-950/80 border border-pink-700/60 text-pink-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated for {config.game.currentVersion} • Season 2</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            STEAL A BRAINROT <br />
            <span className="gradient-title">WIKI & CALCULATOR</span>
          </h1>

          <p className="text-sm sm:text-base text-purple-200 leading-relaxed font-medium">
            The #1 authoritative database for Roblox <strong className="text-pink-400 font-bold">Steal a Brainrot</strong>. 
            Simulate your raid steal success odds, harvest max cash per second, unlock secret meme tiers, and claim verified 2026 codes.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-purple-900/60 text-center max-w-lg">
            <div className="p-3 rounded-xl bg-purple-950/50">
              <span className="text-xl font-extrabold text-white block">{config.stats.visits}</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase">Roblox Visits</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/50">
              <span className="text-xl font-extrabold text-pink-400 block">{config.stats.favorites}</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase">Favorites</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/50">
              <span className="text-xl font-extrabold text-cyan-400 block">{config.stats.onlineNow}</span>
              <span className="text-[10px] text-purple-400 font-bold uppercase">Active Players</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#calculator"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-pink-600/30 transition-all hover:scale-105"
            >
              <Calculator className="w-4 h-4" />
              <span>Use Steal Calculator</span>
            </Link>
            <Link
              href="/codes"
              className="px-6 py-3 rounded-xl bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-800 font-extrabold text-sm flex items-center gap-2 transition-all"
            >
              <Gift className="w-4 h-4 text-cyan-400" />
              <span>Redeem 2026 Codes</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Flagship Utility Tool: Steal Calculator */}
      <section id="calculator" className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>Interactive Steal Calculator</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-purple-900 text-pink-300 font-mono">Exclusive Tool</span>
            </h2>
            <p className="text-xs text-purple-400">Calculate raid steal odds, speed modifiers, and income multipliers instantly.</p>
          </div>
        </div>

        <StealCalculator />
      </section>

      {/* Redeem Codes Snippet */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>Active Redeem Codes (2026)</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">Verified</span>
            </h2>
            <p className="text-xs text-purple-400">Copy active codes to get free Cash, Luck Potions, and CaseOh characters.</p>
          </div>
          <Link href="/codes" className="text-xs font-bold text-pink-400 hover:underline flex items-center gap-1">
            <span>View All Codes</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <CodeList />
      </section>

      {/* Meme Character Tier List Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>Brainrot Meme Character Tier List</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">Season 2 Meta</span>
            </h2>
            <p className="text-xs text-purple-400">Ranked by income per second, steal difficulty, and trade valuation.</p>
          </div>
          <Link href="/character-tier-list" className="text-xs font-bold text-pink-400 hover:underline flex items-center gap-1">
            <span>Full Character Database</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <CharacterTierList />
      </section>

      {/* Guide Link Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <Link href="/steal-guide" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">Steal & Shield Guide</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Learn base defense tactics, shield upgrading costs, stealth sneaking paths, and counter-raiding mechanics.
          </p>
        </Link>

        <Link href="/rebirth-guide" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Rebirth Multiplier Guide</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Discover when to rebirth, income boost scaling up to 100x, and how to unlock Secret meme entities.
          </p>
        </Link>

        <Link href="/mutation-values" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Mutation & Trade Values</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Comprehensive market index for Golden, Rainbow, and Cosmic mutated Brainrot characters.
          </p>
        </Link>

      </section>

    </div>
  );
}
