import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import TrustBadges from "@/components/home/TrustBadges";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Blitz Furniture | Premium Furniture for Beautiful Living",
  description: "Discover designs that blend comfort, functionality and timeless aesthetics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col font-sans overflow-x-hidden`} suppressHydrationWarning>
        <Header />
        <main className="flex-grow">{children}</main>
        <TrustBadges />
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
