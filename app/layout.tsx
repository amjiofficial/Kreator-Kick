import type { Metadata } from "next";
import "./globals.css";
import { Syne, Syne_Mono, Plus_Jakarta_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-syne-mono",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Kreator Kick — Create More. Hustle Less.",
  description:
    "KreatorKick removes the heavy lifting of publishing so creators can grow and connect with brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${syneMono.variable} ${jakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}