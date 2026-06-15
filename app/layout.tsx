import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://ujjainpujaseva.in"),
  title: {
    default: "Mahakal Puja Booking in Ujjain | Ujjain Puja Seva",
    template: "%s | Ujjain Puja Seva",
  },
  description:
    "Book Rudrabhishek, Kaal Sarp Dosh Puja, Mangal Dosh Puja, Mahamrityunjay Jaap and Pandit services in Ujjain.",
  keywords: [
    "Mahakal Puja Ujjain",
    "Rudrabhishek Puja Ujjain",
    "Kaal Sarp Dosh Puja Ujjain",
    "Mangal Dosh Puja Ujjain",
    "Pandit Booking Ujjain",
    "Mangalnath Mandir Puja",
  ],
  openGraph: {
    title: "Mahakal Puja Booking in Ujjain",
    description:
      "Book authentic Vedic Puja and Pandit services in Ujjain.",
    url: "https://ujjainpujaseva.in",
    siteName: "Ujjain Puja Seva",
    type: "website",
  },
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
        overflow-x-hidden
      `}
    >
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6021389420924262"
     crossorigin="anonymous"></script>
      </head>

      <body
        className={`
          min-h-full
          flex
          flex-col
          bg-[#0b0b0b]
          text-white
          font-[family-name:var(--font-poppins)]
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}