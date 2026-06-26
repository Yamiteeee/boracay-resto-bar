import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata featuring the embedded high-fidelity Palm Tree favicon link
export const metadata: Metadata = {
  title: "AplayaBar Boracay | Sunsets, Seafood & Island Chills",
  description: "Kick off your sandals at Station 2, White Beach. Enjoy cold craft beers, local calamansi mojitos, and fresh caught ocean plates while the sun dips low.",
  icons: {
    // Encodes your exact drawn palm tree SVG directly into a data URI for the tab icon
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23f59e0b%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M13 22c0-3-1-6-3-9-1.5-2.2-3-3.8-5-5%22/><path d=%22M10 13c1.5-1.5 4-2 6-1 2.5.8 4 3 4.5 5%22/><path d=%22M11.5 10.5c2-1 4.5-.5 6.5 1 2 1.5 3 3.5 3 5.5%22/><path d=%22M10.5 8.5c1-2 3-3.5 5.5-3.5 2.5 0 4.5 1.5 5 4%22/><path d=%22M9 10.5c-.5-2.5.5-5 2.5-6.5 2-1.5 4.5-1.5 6 0%22/><path d=%22M7.5 12c-1.5-2-1.5-4.5 0-6.5 1.2-1.5 3.3-2 5-.5%22/></svg>`,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-stone-950">
        {children}
      </body>
    </html>
  );
}