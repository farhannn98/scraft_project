// src/app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "../components/MotionProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scraft Product ",
  description:
    "Manufacturer and exporter of high-quality wooden kitchenware from Jepara.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-50 text-stone-900 antialiased`}
      >
        {/* Menu Navigasi Global */}
        <Navbar />

        <MotionProvider>{children}</MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
