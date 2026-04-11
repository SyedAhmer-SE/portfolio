import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Muhammad Ahmer | Software Engineer Portfolio",
  description:
    "Software Engineering student specializing in Android, Web, and Game development.",
  keywords: [
    "software engineer",
    "frontend developer",
    "Android developer",
    "React",
    "Next.js",
    "Python",
    "portfolio",
  ],
  authors: [{ name: "Syed Muhammad Ahmer" }],
  openGraph: {
    title: "Syed Muhammad Ahmer | Software Engineer Portfolio",
    description:
      "Software Engineering student specializing in Android, Web, and Game development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
