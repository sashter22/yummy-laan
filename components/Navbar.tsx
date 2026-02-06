"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 px-4 md:px-12 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* KIRI: Logo & Brand */}
        <div className="flex items-center gap-3 z-50 flex-shrink-0">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/img/logo.png"
              alt="Logo Yummy.Laan"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
          <div className="text-xl md:text-2xl font-bold italic tracking-tighter text-[#3D1A0B]">
            Yummy.<span className="text-orange-500">Laan</span>
          </div>
        </div>

        {/* TENGAH: Desktop Menu - Pakai absolute di desktop biar bener-bener center */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 lg:space-x-10">
          <a
            href="#home"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest transition-all"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest transition-all"
          >
            About Us
          </a>
          <a
            href="#gallery"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest transition-all"
          >
            Gallery
          </a>
          <a
            href="#location"
            className="text-[#3D1A0B]/70 hover:text-orange-600 text-sm font-bold uppercase tracking-widest transition-all"
          >
            Location
          </a>
        </div>

        {/* KANAN: Contact Us Desktop & Hamburger Mobile */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a
              href="#footer"
              className="bg-[#3D1A0B] text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Hamburger hanya muncul di mobile */}
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

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-orange-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] text-sm font-black uppercase tracking-[0.2em]"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] text-sm font-black uppercase tracking-[0.2em]"
              >
                About Us
              </a>
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] text-sm font-black uppercase tracking-[0.2em]"
              >
                Gallery
              </a>
              <a
                href="#location"
                onClick={() => setIsOpen(false)}
                className="text-[#3D1A0B] text-sm font-black uppercase tracking-[0.2em]"
              >
                Location
              </a>
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
