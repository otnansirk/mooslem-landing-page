import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { NextIntlClientProvider } from 'next-intl';

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";


const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  title: "Mooslem° Startpage",
  description: "Mooslem° Startpage - A customizable startpage for your browser. Balance work and faith with Mooslem°.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
