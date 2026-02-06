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

// SEO COMBINED
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
  // PINDAHKAN KODE VERIFIKASI KE SINI
  verification: {
    google: "C7DTJi-DYv2phdD54oMvnPeDwqg86AaYDF0Hj2Fk2lY",
  },
  robots: "index, follow",
  openGraph: {
    title: "Yummy.Laan - Brownies Lumer Premium",
    description: "Cemilan manis terbaik di Bogor. Cek menu kami sekarang!",
    url: "https://yummy-laan.vercel.app",
    siteName: "Yummy.Laan",
    images: [
      {
        url: "/img/logo.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
