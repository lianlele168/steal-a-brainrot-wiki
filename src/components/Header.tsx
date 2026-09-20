'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X, Calculator, Trophy, Gift, ArrowRight, Package, Scale, DollarSign, Layers } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#080312]/90 backdrop-blur-md border-b border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-cyan-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#080312] rounded-[10px] flex items-center justify-center">
              <span className="text-xl">🗿</span>
            </div>
          </div>
          <div>
            <span className="font-black text-lg tracking-wider text-white flex items-center gap-1.5">
              STEAL A BRAINROT <span className="text-[10px] px-2 py-0.5 bg-pink-950 text-pink-300 rounded-md border border-pink-700/50 font-mono">WIKI</span>
            </span>
            <p className="text-[10px] text-purple-400 font-medium">Sourced Data Guide & Tools</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-5 text-xs font-bold">
          <Link href="/calculator" className="flex items-center gap-1 text-purple-200 hover:text-pink-400 transition-colors">
            <Calculator className="w-3.5 h-3.5 text-pink-400" />
            <span>Income Calculator</span>
          </Link>
          <Link href="/summon-simulator" className="flex items-center gap-1 text-purple-200 hover:text-pink-400 transition-colors">
            <Package className="w-3.5 h-3.5 text-cyan-400" />
            <span>Roulette</span>
          </Link>
          <Link href="/trade-calculator" className="flex items-center gap-1 text-purple-200 hover:text-pink-400 transition-colors">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Value Compare</span>
          </Link>
          <Link href="/codes" className="flex items-center gap-1 text-purple-200 hover:text-pink-400 transition-colors">
            <Gift className="w-3.5 h-3.5 text-emerald-400" />
            <span>Codes</span>
          </Link>
          <Link href="/character-tier-list" className="text-purple-300 hover:text-white transition-colors">
            Tier List
          </Link>
          <Link href="/fusion-guide" className="text-purple-300 hover:text-white transition-colors">
            Gear
          </Link>
          <Link href="/boss-schedule" className="text-purple-300 hover:text-white transition-colors">
            Events
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="https://www.roblox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md hover:shadow-pink-600/30 transition-all"
          >
            <span>Play on Roblox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-purple-950 text-purple-300 border border-purple-800/50"
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0c061d] border-b border-purple-900/60 px-4 pt-3 pb-6 space-y-2 text-xs font-semibold">
          <Link href="/calculator" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-900/40 text-purple-100">
            <Calculator className="w-4 h-4 text-pink-400" />
            <span>Income Calculator</span>
          </Link>
          <Link href="/summon-simulator" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-900/40 text-purple-100">
            <Package className="w-4 h-4 text-cyan-400" />
            <span>Red Carpet Roulette</span>
          </Link>
          <Link href="/trade-calculator" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-900/40 text-purple-100">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>Value Comparison</span>
          </Link>
          <Link href="/codes" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-900/40 text-purple-100">
            <Gift className="w-4 h-4 text-emerald-400" />
            <span>Active Codes</span>
          </Link>
          <Link href="/character-tier-list" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 text-purple-300">
            Brainrot Tier List
          </Link>
          <Link href="/fusion-guide" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 text-purple-300">
            Gear & Items Guide
          </Link>
          <Link href="/boss-schedule" onClick={() => setIsMenuOpen(false)} className="block px-3 py-1.5 text-purple-300">
            Server Events Guide
          </Link>
        </div>
      )}
    </header>
  );
}
