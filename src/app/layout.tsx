import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightEffect from "@/components/SpotlightEffect";
import FilmGrain from "@/components/FilmGrain";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Obvious Choice — Authority Systems for Founders",
    template: "%s | Obvious Choice",
  },
  description:
    "We engineer authority systems that make founders the obvious choice. Positioning, AI systems, and compounding demand engines.",
  metadataBase: new URL("https://parveenkumar.co"),
  keywords: [
    "authority systems",
    "B2B positioning",
    "obvious choice",
    "founder authority",
    "AI growth systems",
    "demand engine",
    "business systems",
  ],
  authors: [{ name: "Parveen Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parveenkumar.co",
    title: "Obvious Choice — Authority Systems for Founders",
    description:
      "We engineer authority systems that make founders the obvious choice.",
    siteName: "Obvious Choice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obvious Choice — Authority Systems for Founders",
    description:
      "We engineer authority systems that make founders the obvious choice.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) - GEO Optimized Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://parveenkumar.co/#person",
        name: "Parveen Kumar",
        url: "https://parveenkumar.co",
        sameAs: [
          "https://linkedin.com/in/parveenkumar--",
          "https://github.com/parveenmakwana02",
        ],
        jobTitle: "Authority Systems Engineer",
        knowsAbout: [
          "B2B Positioning",
          "Authority Engineering",
          "Demand Generation",
          "AI Systems",
          "System Architecture"
        ],
        description: "Engineering authority systems that make founders the obvious choice through positioning, AI, and compounding demand engines."
      },
      {
        "@type": "Organization",
        "@id": "https://parveenkumar.co/#organization",
        name: "Obvious Choice",
        url: "https://parveenkumar.co",
        logo: "https://parveenkumar.co/icon.png",
        founder: {
          "@id": "https://parveenkumar.co/#person"
        },
        description: "We engineer authority systems that make B2B founders the obvious choice."
      },
      {
        "@type": "WebSite",
        "@id": "https://parveenkumar.co/#website",
        url: "https://parveenkumar.co",
        name: "Obvious Choice | Authority Systems",
        description: "The knowledge hub for B2B positioning and authority engineering.",
        publisher: {
          "@id": "https://parveenkumar.co/#organization"
        },
        inLanguage: "en-US"
      }
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="color-scheme" content="dark" />
        {/* Inject schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-black focus:text-white">
          Skip to main content
        </a>
        <SpotlightEffect />
        <FilmGrain />
        <Navbar />
        <main id="main-content" style={{ flex: "1 0 auto" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
