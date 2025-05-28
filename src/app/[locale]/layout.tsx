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

type PageProps = Promise<{
  locale: string;
}>

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: PageProps
}>) {

  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
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
