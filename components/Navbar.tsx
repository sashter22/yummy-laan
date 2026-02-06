"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 px-4 md:px-12 transition-all duration-300">
      {/* Pakai h-[80px] dan min-h-[80px] untuk memaksa tinggi navbar tetap kaku */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center h-[80px] min-h-[80px] relative">
        {/* KIRI: Logo - Pakai ukuran absolut, jangan pakai 'fill' agar tidak lonjong */}
        <div className="flex items-center gap-3 z-50 flex-shrink-0">
          <div className="flex-shrink-0">
            <Image
              src="/img/logo.png"
              alt="Logo Yummy.Laan"
              width={40} // Ukuran pasti
              height={40} // Ukuran pasti
              style={{ objectFit: "contain", height: "40px", width: "40px" }} // Paksa tinggi & lebar di style
              className="md:w-[48px] md:h-[48px]"
              priority
              unoptimized
            />
          </div>
          <div className="text-xl md:text-2xl font-bold italic tracking-tighter text-[#3D1A0B] whitespace-nowrap leading-none">
            Yummy.<span className="text-orange-500">Laan</span>
          </div>
        </div>

        {/* TENGAH: Menu Desktop - Gunakan flex-1 dan justify-center untuk stabilitas */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center gap-6 lg:gap-10 whitespace-nowrap">
          <a
            href="#home"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all"
          >
            Gallery
          </a>
          <a
            href="#location"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all"
          >
            Location
          </a>
        </div>

        {/* KANAN: Button & Hamburger */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden md:block">
            <a
              href="#footer"
              className="bg-[#3D1A0B] text-white px-6 py-2.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#3D1A0B] z-50 p-2 focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#3D1A0B] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-[#3D1A0B] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-[#3D1A0B] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-orange-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {["home", "about", "gallery", "location"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[#3D1A0B] text-sm font-black uppercase tracking-[0.2em]"
                >
                  {item === "about" ? "About Us" : item}
                </a>
              ))}
              <a
                href="#footer"
                onClick={() => setIsOpen(false)}
                className="text-orange-600 text-sm font-black uppercase tracking-[0.2em] pt-4 border-t border-orange-50"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
