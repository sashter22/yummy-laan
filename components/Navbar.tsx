"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Background diganti putih dengan transparansi dan blur
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* KIRI: Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/img/logo.png"
              alt="Logo Yummy.Laan"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="text-xl font-bold italic tracking-tighter">
            {/* Teks brand diganti ke cokelat agar terbaca di bg putih */}
            <span className="text-[#3D1A0B]">Yummy.</span>
            <span className="text-orange-500">Laan</span>
          </div>
        </div>

        {/* TENGAH: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          <a
            href="#home"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-semibold uppercase tracking-widest transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-semibold uppercase tracking-widest transition-all"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-semibold uppercase tracking-widest transition-all"
          >
            Gallery
          </a>
          <a
            href="#location"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-semibold uppercase tracking-widest transition-all"
          >
            Location
          </a>
        </div>

        {/* KANAN: Contact Us Desktop */}
        <div className="hidden md:block">
          <a
            href="#footer"
            className="bg-orange-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-orange-600 hover:shadow-md active:scale-95 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#3D1A0B] focus:outline-none p-2"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu Mobile - Putih Rata Kiri */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 py-8 px-8 flex flex-col items-start space-y-6 border-t border-orange-50 shadow-2xl">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-[#3D1A0B] text-sm font-bold uppercase tracking-widest"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-[#3D1A0B] text-sm font-bold uppercase tracking-widest"
          >
            About Us
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="text-[#3D1A0B] text-sm font-bold uppercase tracking-widest"
          >
            Gallery
          </a>
          <a
            href="#location"
            onClick={() => setIsOpen(false)}
            className="text-[#3D1A0B] text-sm font-bold uppercase tracking-widest"
          >
            Location
          </a>
          <a
            href="#footer"
            onClick={() => setIsOpen(false)}
            className="text-orange-600 text-sm font-black uppercase tracking-widest"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
