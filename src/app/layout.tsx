import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KILLER FASHION | Engineered for the Streets",
  description: "Premium men's and unisex streetwear. Aggressive, tech-wear, urban fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
