'use client';

import React from 'react';
import Link from 'next/link';
import { Gamepad2, ShieldCheck, Heart } from 'lucide-react';
import config from '@/data/game.config.json';

export default function Footer() {
  return (
    <footer className="bg-[#05020c] border-t border-purple-900/60 text-purple-300 py-12 px-4 sm:px-6 lg:px-8 w-full mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Summary */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
              <span>🗿</span>
            </div>
            <span className="font-extrabold text-white text-base tracking-wider">STEAL A BRAINROT WIKI</span>
          </div>
          <p className="text-xs text-purple-400 leading-relaxed max-w-md">
            The ultimate community wiki for Roblox <strong className="text-pink-300">Steal a Brainrot</strong>. Featuring a verified 52-unit tier list, income calculators, the full Rebirth 1-17 table, and all 39 shop Gear items with real prices.
          </p>
          <p className="text-[11px] text-purple-500">
            Disclaimer: Steal a Brainrot Wiki is an independent fan-made guide. Not affiliated with or endorsed by Roblox Corporation or BRAZILIAN SPYDER.
          </p>
        </div>

        {/* Quick Wiki Navigation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-3">Quick Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/calculator" className="hover:text-pink-400 transition-colors">Income Calculator</Link></li>
            <li><Link href="/codes" className="hover:text-pink-400 transition-colors">Active Redeem Codes 2026</Link></li>
            <li><Link href="/character-tier-list" className="hover:text-pink-400 transition-colors">Brainrot Meme Tier List</Link></li>
            <li><Link href="/steal-guide" className="hover:text-pink-400 transition-colors">Stealing & Shield Guide</Link></li>
            <li><Link href="/rebirth-guide" className="hover:text-pink-400 transition-colors">Rebirth Multipliers</Link></li>
            <li><Link href="/mutation-values" className="hover:text-pink-400 transition-colors">Mutation Values</Link></li>
          </ul>
        </div>

        {/* Roblox Wiki Hub Network */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">Roblox Wiki Hub Network</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="https://robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 font-semibold flex items-center gap-1">
                <span>🌐 Roblox Wiki Hub Parent</span>
              </a>
            </li>
            <li><a href="https://99nights.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">99 Nights in the Forest Wiki 🌲</a></li>
            <li><a href="https://solsrng.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Sol's RNG Wiki ✨</a></li>
            <li><a href="https://fisch.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Fisch Wiki 🎣</a></li>
            <li><a href="https://jujutsuinfinite.robloxwikihub.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">Jujutsu Infinite Wiki ⚡</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-purple-950 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-500">
        <p>© {new Date().getFullYear()} Steal a Brainrot Wiki. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <Link href="/about" className="hover:text-purple-300">About</Link>
          <Link href="/privacy-policy" className="hover:text-purple-300">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-purple-300">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
