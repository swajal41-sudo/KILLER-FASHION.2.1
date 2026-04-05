import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KILLER FASHION | Define the Culture",
  description: "Premium men's and unisex streetwear. Aggressive, tech-wear, urban fashion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 selection:bg-cyan-500/30" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
