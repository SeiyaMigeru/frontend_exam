import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

{/* Importing My Fonts */}
const breuertextbold = localfont({
  src: [
    {
      path: "../public/fonts/BreuerText-Bold.ttf",
    },
  ],
  variable: "--font-breuertextbold",
});

const breuerheadline = localfont({
  src: [
    {
      path: "../public/fonts/BreuerHeadline.ttf",
    },
  ],
  variable: "--font-breuerheadline",
});

const breuerfont = localfont({
  src: [
    {
      path: "../public/fonts/BreuerFont.ttf",
    },
  ],
  variable: "--font-breuerfont",
});

const zingrust = localfont({
  src: [
    {
      path: "../public/fonts/zing-rust.otf",
    },
  ],
  variable: "--font-zingrust",
});

export const metadata: Metadata = {
  title: "ROAR Digital",
  description: "Bet Now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${breuertextbold.variable} ${breuerheadline.variable} ${breuerfont.variable} ${zingrust.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
