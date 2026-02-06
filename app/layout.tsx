import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO
export const metadata: Metadata = {
  title:
    "Yummy.Laan | Brownies Lumer Premium Karanggan, Gunung Putri, Kabupaten Bogor",
  description:
    "Nikmati kelezatan Brownies Premium dari Yummy.Laan. Lumer di mulut, banyak pilihan topping, dan harga terjangkau. Brownies terbaik di Citeureup, Bogor.",
  keywords: [
    "Brownies Karanggan",
    "Brownies Gunung Putri",
    "Brownies Citeureup",
    "Brownies Bogor",
    "Yummy Laan",
    "Cemilan Manis Bogor",
    "Brownies Lumer",
  ],
  authors: [{ name: "Yummy.Laan" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Yummy.Laan - Brownies Lumer Premium",
    description: "Cemilan manis terbaik di Bogor. Cek menu kami sekarang!",
    url: "https://yummy-laan.vercel.app", // domain
    siteName: "Yummy.Laan",
    images: [
      {
        url: "/img/logo.png", // Muncul pas dishare di WA/Social Media
        width: 800,
        height: 600,
        alt: "Logo Yummy.Laan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {" "}
      {/* Ganti ke id */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
