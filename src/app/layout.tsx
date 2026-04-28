import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MBB Homecare Services | West Palm Beach, FL",
  description:
    "Licensed non-medical nurse registry and APD approved provider serving seniors, veterans, and individuals with disabilities in West Palm Beach, FL. Available 24/7.",
  keywords:
    "home care, homecare, West Palm Beach, seniors, veterans, disabilities, personal care, companion care, APD provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
