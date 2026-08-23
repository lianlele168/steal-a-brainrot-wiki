import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about the Steal a Brainrot Wiki community initiative and Roblox Wiki Hub network.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-xs sm:text-sm text-purple-200 leading-relaxed">
      <h1 className="text-3xl font-black text-white">About Steal a Brainrot Wiki</h1>
      <p>
        Steal a Brainrot Wiki is a community-driven database dedicated to helping Roblox players optimize raid steal success odds, unlock secret meme entities, and stay updated with active redeem codes.
      </p>
      <p>
        Part of the <strong>Roblox Wiki Hub</strong> network, our mission is to build high-performance, interactive, and ad-friendly gaming tools for popular Roblox titles.
      </p>
    </div>
  );
}
