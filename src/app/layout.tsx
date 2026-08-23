import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/data/game.config.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.baseUrl),
  title: {
    default: config.seo.siteTitle,
    template: `%s | Steal a Brainrot Wiki`
  },
  description: config.seo.siteDescription,
  keywords: [...config.seo.primaryKeywords, ...config.seo.secondaryKeywords],
  authors: [{ name: "Steal a Brainrot Community Team" }],
  openGraph: {
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    url: config.seo.baseUrl,
    siteName: "Steal a Brainrot Wiki",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Steal a Brainrot Wiki",
    "url": config.seo.baseUrl,
    "description": config.seo.siteDescription,
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "Roblox Wiki Hub Network"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col justify-between`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
