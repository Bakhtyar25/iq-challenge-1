import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const redHat = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countdown timer",
  description: "Countdown timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHat.className} min-h-screen bg-hero bg-no-repeat xl:bg-hero-size`}
      >
        {children}
      </body>
    </html>
  );
}
