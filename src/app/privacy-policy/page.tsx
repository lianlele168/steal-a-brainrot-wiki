import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and terms of service for Steal a Brainrot Wiki.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-xs sm:text-sm text-purple-200 leading-relaxed">
      <h1 className="text-3xl font-black text-white">Privacy Policy</h1>
      <p>
        At Steal a Brainrot Wiki, we respect your privacy. We do not collect personal identifiable information (PII). 
        Standard anonymous web analytics may be collected to improve site speed and user experience.
      </p>
      <p>
        Third-party vendors, including Google, may use cookies to serve ads based on prior visits to our website.
      </p>
    </div>
  );
}
