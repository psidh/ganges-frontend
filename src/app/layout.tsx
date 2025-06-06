import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import NavBar from "@/components/Navbar";

const plusJakarta = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganges",
  description:
    "A programming language — inspired by Sanskrit, built for clarity, simplicity, and fun.",
  openGraph: {
    title: "Ganges",
    description:
      "A programming language — inspired by Sanskrit, built for clarity, simplicity, and fun.",
    url: "https://ganges.psidharth.dev",
    siteName: "Ganges",
    images: [
      {
        url: "https://ganges.psidharth.dev/assets/meta-header.png",
        width: 1200,
        height: 630,
        alt: "Ganges Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
