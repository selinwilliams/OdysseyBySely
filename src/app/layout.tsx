import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odyssey By Sely - Fine Dining Experience",
  description: "Experience exquisite dining at Odyssey By Sely. Modern cuisine with a traditional twist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
