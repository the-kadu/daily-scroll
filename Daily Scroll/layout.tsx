import type { Metadata } from "next";
import { Press_Start_2P, Lora } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "The Daily Scroll",
  description:
    "The Guildmaster's Tavern: turn today's news into on-brand social posts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixel.variable} ${serif.variable}`}>
      <body className="font-serif">{children}</body>
    </html>
  );
}
