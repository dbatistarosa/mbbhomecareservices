import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MBB Homecare Services | West Palm Beach, FL",
    template: "%s | MBB Homecare Services",
  },
  description:
    "Licensed non-medical nurse registry and APD approved provider in West Palm Beach, FL. Compassionate care for seniors, veterans, and individuals with disabilities. Available 24/7.",
  keywords:
    "home care, homecare, West Palm Beach, Palm Beach County, seniors, veterans, disabilities, personal care, APD provider, nurse registry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
