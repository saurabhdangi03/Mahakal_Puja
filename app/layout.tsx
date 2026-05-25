import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cinzel,
  Poppins,
} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NEW LUXURY FONTS
export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-cinzel",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Mahakal Puja Ujjain",
  description:
    "Book Authentic Mahakal Puja, Rudrabhishek, Kaal Sarp Dosh Puja & Astrology Services in Ujjain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${cinzel.variable}
        ${poppins.variable}
        h-full
        antialiased
      `}
    >
      <body
        className={`
          min-h-full
          flex
          flex-col
          bg-[#0b0b0b]
          text-white
          font-[family-name:var(--font-poppins)]
        `}
      >
        {children}
      </body>
    </html>
  );
}