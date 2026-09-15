import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-purple-900/60 bg-purple-950/40 p-4 sm:p-5 my-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-purple-500/20">
            SB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">Roblox Wiki Hub Research Desk</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Verified by lianlele168</span>
            </div>
            <p className="text-xs text-purple-300">
              Steal a Brainrot Top 100 Raider & Economy Analyst • 500+ Base Heists Logged
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-purple-300">
          <div className="flex items-center gap-1 bg-purple-900/50 px-2.5 py-1 rounded-lg border border-purple-800/40">
            <Calendar className="w-3.5 h-3.5 text-purple-400" />
            <span>Updated: September 2026</span>
          </div>
          <div className="flex items-center gap-1 bg-purple-900/50 px-2.5 py-1 rounded-lg border border-purple-800/40">
            <UserCheck className="w-3.5 h-3.5 text-pink-400" />
            <span>Verified for Patch v2.8 (God Tier)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-purple-400/80 mt-3 pt-3 border-t border-purple-900/40 leading-relaxed">
        <strong>Review Methodology:</strong> Character income multipliers, steal detection radiuses, and Rebirth ROI thresholds are verified through live multi-server heists and official BRAZILIAN SPYDER patch changelogs.
       Follows <a href="https://robloxwikihub.com/about#methodology" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Editorial Standards</a>. Report corrections to <a href="mailto:lianlele168@gmail.com" className="underline hover:text-white">lianlele168@gmail.com</a>.</p>
    </div>
  );
}
