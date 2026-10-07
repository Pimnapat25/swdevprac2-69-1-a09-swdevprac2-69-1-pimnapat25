import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gather | Distinctive Event Venues",
  description: "Explore a curated collection of venues for memorable gatherings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${display.variable}`}>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
