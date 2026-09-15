import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from 'lucide-react';
import config from '@/data/game.config.json';

export const metadata: Metadata = {
  title: `Privacy Policy & Trust Center | ${config.game.name} Wiki`,
  description: `Privacy policy, COPPA child safety disclosures, and data protection guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-purple-200">
      {/* Header Breadcrumb & Badge */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-purple-400 font-mono">
          <Link href="/" className="hover:text-pink-400">Home</Link>
          <span>/</span>
          <span className="text-purple-200">Privacy Policy</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>ROBLOX FAN NETWORK TRUST CENTER</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Privacy Policy &amp; Trust Disclosures
        </h1>
        <p className="text-xs sm:text-sm text-purple-300">
          Last updated: {config.game.lastUpdated}. Unofficial fan guide and strategy calculators for {config.game.name}.
        </p>
      </div>

      {/* 4 Trust Highlights Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-purple-950/40 border border-purple-800/60 rounded-xl p-3 flex items-center gap-3 text-xs">
          <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <p className="font-bold text-white">COPPA Compliant</p>
            <p className="text-purple-400 text-[11px]">Safe for under 13</p>
          </div>
        </div>
        <div className="bg-purple-950/40 border border-purple-800/60 rounded-xl p-3 flex items-center gap-3 text-xs">
          <Lock className="h-5 w-5 shrink-0 text-amber-400" />
          <div>
            <p className="font-bold text-white">Zero Account Needed</p>
            <p className="text-purple-400 text-[11px]">No passwords or Robux</p>
          </div>
        </div>
        <div className="bg-purple-950/40 border border-purple-800/60 rounded-xl p-3 flex items-center gap-3 text-xs">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
          <div>
            <p className="font-bold text-white">100% Client-Side</p>
            <p className="text-purple-400 text-[11px]">Calculators run in browser</p>
          </div>
        </div>
        <div className="bg-purple-950/40 border border-purple-800/60 rounded-xl p-3 flex items-center gap-3 text-xs">
          <Mail className="h-5 w-5 shrink-0 text-pink-400" />
          <div>
            <p className="font-bold text-white">Verified Contact</p>
            <p className="text-purple-400 text-[11px]">48h response SLA</p>
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="bg-[#0b0518]/80 border border-purple-900/60 rounded-2xl p-6 sm:p-8 space-y-6 text-purple-200 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>1. Zero Personal Data &amp; No Roblox Credentials</span>
          </h2>
          <p>
            Steal a Brainrot Wiki does not require user registration or logins. We will <strong className="text-white">NEVER</strong> ask for your Roblox password, account cookies, Robux, or private credentials. All steal success calculators, summon simulators, and trade fairness calculators execute 100% locally in your browser.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>2. COPPA &amp; Children&apos;s Online Privacy Protection</span>
          </h2>
          <p>
            Many Roblox players enjoying Steal a Brainrot are minors. In compliance with the Children&apos;s Online Privacy Protection Act (COPPA), this fan site does not knowingly collect, profile, or track personal identification from children under the age of 13.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>3. Telemetry, Cookies &amp; Advertising</span>
          </h2>
          <p>
            To keep this wiki fast and responsive, anonymous technical telemetry (such as page speed and browser type) is processed. Third-party advertising vendors, including Google, may use cookies to serve gaming ads based on prior visits. You can manage personalized cookies via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-pink-400 underline hover:text-pink-300">Google Ads Settings</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-blue-400" />
            <span>4. External Platform Links</span>
          </h2>
          <p>
            Our site links to official Roblox experience pages and community platforms. We assume no responsibility for the content or privacy policies of third-party domains.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-purple-400" />
            <span>5. Intellectual Property &amp; Fair Use Disclaimer</span>
          </h2>
          <p>
            Roblox is a registered trademark of Roblox Corporation. {config.game.name}, character memes, and assets belong to {config.game.developer}. This wiki is an independent fan community guide created for educational purposes under Fair Use.
          </p>
        </section>

        <section className="space-y-2 border-t border-purple-900/60 pt-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-pink-400" />
            <span>6. Editorial &amp; Privacy Contact</span>
          </h2>
          <p>
            For privacy inquiries, DMCA notices, or correction requests, reach our editorial team directly at:
          </p>
          <div className="inline-block rounded-xl border border-pink-500/30 bg-pink-950/40 p-3 font-mono text-sm font-bold text-pink-300">
            contact@robloxwikihub.com
          </div>
          <p className="text-xs text-purple-400 font-mono">
            Inquiries are acknowledged and resolved within 48 business hours.
          </p>
        </section>
      </div>
    </main>
  );
}
