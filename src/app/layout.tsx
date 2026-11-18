import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "./site-url";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Časovi matematike u Novom Sadu | Časovi",
  description:
    "Časovi matematike za učenike od 5. do 8. razreda u Novom Sadu. Jasna objašnjenja i vežba za bolju pripremu za kontrolni.",
  metadataBase: siteUrl,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  keywords: ["privatni časovi matematike Novi Sad", "časovi matematike za osnovce", "online časovi matematike", "priprema za kontrolni iz matematike", "individualni časovi matematike"],
  openGraph: {
    title: "Časovi matematike u Novom Sadu",
    description:
      "Časovi matematike za učenike od 5. do 8. razreda uz jasna objašnjenja i pripremu za kontrolni.",
    locale: "sr_RS",
    type: "website",
    siteName: "Časovi matematike",
  },
  twitter: { card: "summary", title: "Časovi matematike u Novom Sadu", description: "Časovi matematike za učenike od 5. do 8. razreda." },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr-Latn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
