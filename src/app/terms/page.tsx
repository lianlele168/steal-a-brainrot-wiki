import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from 'lucide-react';
import config from '@/data/game.config.json';

export const metadata: Metadata = {
  title: `Terms of Use & Community Guidelines | ${config.game.name} Wiki`,
  description: `Terms of use, gameplay accuracy disclaimers, and fair use guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-purple-200">
      {/* Header Breadcrumb & Badge */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-purple-400 font-mono">
          <Link href="/" className="hover:text-pink-400">Home</Link>
          <span>/</span>
          <span className="text-purple-200">Terms of Use</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold">
          <FileText className="w-3.5 h-3.5" />
          <span>COMMUNITY &amp; LEGAL TERMS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Terms of Use &amp; Service Guidelines
        </h1>
        <p className="text-xs sm:text-sm text-purple-300">
          Last updated: {config.game.lastUpdated}. Unofficial strategy companion for {config.game.name}.
        </p>
      </div>

      {/* Detailed Sections */}
      <div className="bg-[#0b0518]/80 border border-purple-900/60 rounded-2xl p-6 sm:p-8 space-y-6 text-purple-200 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-emerald-400" />
            <span>1. Unofficial Fan Companion</span>
          </h2>
          <p>
            Steal a Brainrot Wiki is an independent fan-made resource. It is not affiliated with, sponsored by, or endorsed by Roblox Corporation or {config.game.developer}.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>2. Live Patch Volatility &amp; Accuracy Disclaimer</span>
          </h2>
          <p>
            Steal rates, meme values, rebirth multipliers, and raid timings change frequently with game balance updates. All guides and calculator results are provided &quot;as is&quot;. Always verify current mechanics in the Roblox game.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>3. Anti-Phishing &amp; Account Security Pledge</span>
          </h2>
          <p>
            We will <strong className="text-white">never</strong> ask for your Roblox credentials, passwords, or Robux. Never share private security credentials with third-party sites. Redeem codes exclusively inside the official Roblox game client.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>4. Acceptable Community Use</span>
          </h2>
          <p>
            Visitors are welcome to freely access and share our calculators and tier lists. You agree not to engage in malicious attacks, automated scraping, or misrepresenting this fan site as official game documentation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-purple-400" />
            <span>5. Intellectual Property &amp; Fair Use</span>
          </h2>
          <p>
            Roblox is a registered trademark of Roblox Corporation. {config.game.name} and all meme assets belong to {config.game.developer}. All media and text are used under Fair Use principles for educational commentary.
          </p>
        </section>

        <section className="space-y-2 border-t border-purple-900/60 pt-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-pink-400" />
            <span>6. DMCA &amp; Contact Inquiries</span>
          </h2>
          <p>
            For rights holders, content attribution, or takedown requests, contact our editorial team directly at:
          </p>
          <div className="inline-block rounded-xl border border-pink-500/30 bg-pink-950/40 p-3 font-mono text-sm font-bold text-pink-300">
            lianlele168@gmail.com
          </div>
          <p className="text-xs text-purple-400 font-mono">
            We respond promptly within 48 business hours.
          </p>
        </section>
      </div>
    </main>
  );
}
