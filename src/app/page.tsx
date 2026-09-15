import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { Calculator, Gift, Trophy, Shield, Zap, Sparkles, ArrowRight, Package, Scale, DollarSign, Layers, Clock } from 'lucide-react';
import StealCalculator from '@/components/StealCalculator';
import SummonSimulator from '@/components/SummonSimulator';
import TradeCalculator from '@/components/TradeCalculator';
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
            <span>Updated for {config.game.currentVersion} • Season 2 Suite</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            STEAL A BRAINROT <br />
            <span className="gradient-title">WIKI & TOOL SUITE</span>
          </h1>

          <p className="text-sm sm:text-base text-purple-200 leading-relaxed font-medium">
            The #1 authoritative database for Roblox <strong className="text-pink-400 font-bold">Steal a Brainrot</strong>. 
            Simulate your raid steal odds, unbox meme crates in real-time, verify community trade fairness, and claim active 2026 codes.
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
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="#calculator"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-black text-xs flex items-center gap-2 shadow-lg shadow-pink-600/30 transition-all hover:scale-105"
            >
              <Calculator className="w-4 h-4" />
              <span>Steal Calculator</span>
            </Link>
            <Link
              href="/summon-simulator"
              className="px-5 py-3 rounded-xl bg-purple-900/80 hover:bg-purple-800 text-cyan-300 border border-cyan-500/50 font-black text-xs flex items-center gap-2 transition-all"
            >
              <Package className="w-4 h-4 text-cyan-400" />
              <span>Summon Sim</span>
            </Link>
            <Link
              href="/codes"
              className="px-5 py-3 rounded-xl bg-purple-950 hover:bg-purple-900 text-purple-200 border border-purple-800 font-extrabold text-xs flex items-center gap-2 transition-all"
            >
              <Gift className="w-4 h-4 text-emerald-400" />
              <span>2026 Codes</span>
            </Link>
          </div>

        </div>
      </section>

      {/* E-E-A-T AUTHOR VERIFICATION */}
      <AuthorCard />

      {/* VISUAL GAMEPLAY SHOWCASE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="rounded-2xl overflow-hidden border border-purple-900/60 bg-purple-950/40 p-4">
          <Image
            src="/images/brainrot-header.webp"
            alt="Steal a Brainrot Roblox Game Icon"
            width={512}
            height={512}
            className="rounded-xl object-cover w-full h-52 border border-purple-800/40"
            priority
          />
          <p className="text-xs text-purple-300 mt-2.5 text-center font-medium">
            Figure 1: Official Steal a Brainrot Icon by BRAZILIAN SPYDER.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-purple-900/60 bg-purple-950/40 p-4">
          <Image
            src="/images/brainrot-gameplay.webp"
            alt="Steal a Brainrot Gameplay Raid Environment"
            width={768}
            height={432}
            className="rounded-xl object-cover w-full h-52 border border-purple-800/40"
          />
          <p className="text-xs text-purple-300 mt-2.5 text-center font-medium">
            Figure 2: Active Base Arena & Raid Corridors with Automated Income Droppers.
          </p>
        </div>
      </div>

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

      {/* New Tool #2: Summon Pack Opening Simulator */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>Meme Pack Summon Simulator</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Unboxing Sim</span>
            </h2>
            <p className="text-xs text-purple-400">Simulate opening Brainrot Crate drops and test God entity luck before buying in-game.</p>
          </div>
          <Link href="/summon-simulator" className="text-xs font-bold text-pink-400 hover:underline flex items-center gap-1">
            <span>Full Summon Room</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <SummonSimulator />
      </section>

      {/* New Tool #3: Trade Fairness Calculator */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <span>Trade Fairness Checker</span>
              <span className="text-xs px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">Anti-Scam</span>
            </h2>
            <p className="text-xs text-purple-400">Verify community trade values and ensure you get a fair deal.</p>
          </div>
          <Link href="/trade-calculator" className="text-xs font-bold text-pink-400 hover:underline flex items-center gap-1">
            <span>Full Trade Checker</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <TradeCalculator />
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
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        <Link href="/raid-profit-calculator" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">Offline Vault ROI</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Calculate storage cap limits to prevent passive income waste while offline.
          </p>
        </Link>

        <Link href="/fusion-guide" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-pink-400 transition-colors">Fusion Recipes</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Combine duplicate memes to craft Mythic CaseOh and Secret entities.
          </p>
        </Link>

        <Link href="/boss-schedule" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">Boss Raids Schedule</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Timers and battle tactics for Titan Skibidi and Grimace Surge events.
          </p>
        </Link>

        <Link href="/steal-guide" className="glass-card p-6 rounded-2xl border border-purple-900/60 glass-card-hover group space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">Steal & Defense</h3>
          <p className="text-xs text-purple-300 leading-relaxed">
            Master raid sneaking paths and base shield defense upgrades.
          </p>
        </Link>

      </section>

    </div>
  );
}
