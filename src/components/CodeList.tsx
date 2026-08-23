'use client';

import React, { useState } from 'react';
import { Copy, Check, Gift, Sparkles, AlertCircle } from 'lucide-react';
import { CODES_DATA, CodeItem } from '@/data/wikiData';

export default function CodeList() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'ACTIVE' | 'EXPIRED'>('ACTIVE');

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredCodes = CODES_DATA.filter((item) => item.status === activeTab);

  return (
    <div className="space-y-6">
      
      {/* Code Status Tabs */}
      <div className="flex space-x-2 border-b border-purple-900/60 pb-3">
        <button
          onClick={() => setActiveTab('ACTIVE')}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'ACTIVE'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-600/20'
              : 'bg-purple-950/60 text-purple-400 hover:text-purple-200'
          }`}
        >
          <Gift className="w-4 h-4" />
          <span>Active Codes ({CODES_DATA.filter(c => c.status === 'ACTIVE').length})</span>
        </button>

        <button
          onClick={() => setActiveTab('EXPIRED')}
          className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'EXPIRED'
              ? 'bg-purple-800 text-white'
              : 'bg-purple-950/60 text-purple-400 hover:text-purple-200'
          }`}
        >
          <span>Expired Codes</span>
        </button>
      </div>

      {/* Codes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCodes.map((item) => (
          <div
            key={item.code}
            className={`p-4 rounded-xl glass-card flex flex-col justify-between space-y-3 relative overflow-hidden transition-all ${
              item.isNew ? 'border-pink-500/60 shadow-lg shadow-pink-600/10' : 'border-purple-900/60'
            }`}
          >
            {item.isNew && (
              <span className="absolute top-0 right-0 bg-gradient-to-l from-pink-600 to-purple-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                NEW CODE
              </span>
            )}

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-mono font-black text-lg text-white tracking-widest">{item.code}</span>
              </div>
              <p className="text-xs text-pink-300 font-medium">{item.reward}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-purple-950 text-[11px] text-purple-400">
              <span>Added: {item.dateAdded}</span>
              {item.status === 'ACTIVE' ? (
                <button
                  onClick={() => handleCopy(item.code)}
                  className="px-4 py-1.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md"
                >
                  {copiedCode === item.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-200">COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              ) : (
                <span className="text-purple-600 font-bold">EXPIRED</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
