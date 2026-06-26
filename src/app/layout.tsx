import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // 👈 Crucial to prevent font-loading layout shifts
});

const geistMono = Geist_Mono({
  variable: "--font-gradient-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AplayaBar Boracay | Sunsets, Seafood & Island Chills",
  description: "Kick off your sandals at Station 2, White Beach. Enjoy cold craft beers, local calamansi mojitos, and fresh caught ocean plates while the sun dips low.",
  icons: {
    // 🌴 FIXED: Replaced abstract placeholders with your actual solid cinematic brand palm tree vectors!
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22%23f59e0b%22><path d=%22M2 22c5-1 15-1 20 0-.5-1-3-1.5-10-1.5S2.5 21 2 22z%22/><path d=%22M13.5 20.5c-.2-2-.5-4.2-1.2-6.2l1-.3c-.8-2-1.5-4-2.5-5.8-.4 1.8-.7 3.7-.8 5.5l.9.1c-.2 2.2-.4 4.5-.4 6.7h3z%22/><path d=%22M11 8.2c-.2-1.5-1-3.5-2.5-4.7C7 2.3 5 1.8 3 1.8c2 1 3.5 2.8 4 4.7.3 1.2.5 2.3.5 3.2.9-.5 2.2-.9 3.5-1.5z%22/><path d=%22M10.2 9c-1.3-.8-3-1.8-5-2-2.5-.2-4.7.5-6.2 1.7 2 .2 3.8 1.2 5 2.8.8 1 1.4 2 1.8 3 .6-2.1 2.2-4.1 4.4-5.5z%22/><path d=%22M10.2 10.5c-1-.2-2.5-.3-4 0C4 11 2.3 12.2 1 14c1.7-.8 3.5-1 5.2-.6 1.3.4 2.5 1 3.3 1.8.1-1.6.4-3.1.7-4.7z%22/><path d=%22M11.5 8.8c1.3-.9 3-1.8 5-2.1 2.5-.3 4.8.3 6.3 1.5-1.9.3-3.6 1.4-4.8 3.1-.7 1-1.2 2.2-1.5 3.3-.7-2.1-2.4-4.1-5-5.8z%22/><path d=%22M12 10.4c1-.1 2.4.1 3.8.7 2.1.8 3.6 2.3 4.7 4.2-1.6-1-3.4-1.4-5.2-1.3-1.3.1-2.5.6-3.4 1.3.1-1.6.1-3.2.1-4.9z%22/></svg>`,
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      style={{ colorScheme: 'dark' }} // Prevents white flashbang background rendering on slow-loading frames
    >
      <body className="bg-stone-950 text-stone-200 selection:bg-amber-500/20">
        {children}
      </body>
    </html>
  );
}