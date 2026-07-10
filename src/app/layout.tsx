import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenshotCTA from "@/components/ScreenshotCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Parveen | B2B Authority & AI Growth Systems Consultant",
    template: "%s | Parveen",
  },
  description: "Helping B2B founders turn expertise into authority, authority into trust, and trust into sustainable business growth through positioning, AI, and business systems.",
  metadataBase: new URL("https://parveenkumar.co"),
  keywords: [
    "B2B positioning",
    "authority marketing",
    "AI growth systems",
    "business systems",
    "B2B systems consultant",
    "founder authority",
    "growth consulting"
  ],
  authors: [{ name: "Parveen Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parveenkumar.co",
    title: "Parveen | B2B Authority & AI Growth Systems Consultant",
    description: "Helping B2B founders turn expertise into authority, authority into trust, and trust into sustainable business growth through positioning, AI, and business systems.",
    siteName: "Parveen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parveen | B2B Authority & AI Growth Systems Consultant",
    description: "Helping B2B founders turn expertise into authority, authority into trust, and trust into sustainable business growth through positioning, AI, and business systems.",
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
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Parveen Kumar",
    "url": "https://parveenkumar.co",
    "sameAs": [
      "https://linkedin.com/in/parveenkumar--",
      "https://github.com/parveenmakwana02"
    ],
    "jobTitle": "AI Growth Systems Consultant",
    "description": "Helping B2B founders turn expertise into authority, authority into trust, and trust into sustainable business growth through positioning, AI, and business systems."
  };

  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        {/* Declare support for both light and dark themes */}
        <meta name="color-scheme" content="light dark" />
        {/* Inline script to set data-theme from localStorage without transition delay / flash of light theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark' || savedTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', savedTheme);
                    const meta = document.querySelector('meta[name="color-scheme"]');
                    if (meta) {
                      meta.setAttribute('content', savedTheme);
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Inject schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ flex: "1 0 auto", marginTop: "70px" }}>{children}</main>
        <Footer />
        <ScreenshotCTA />
      </body>
    </html>
  );
}
